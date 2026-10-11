// Verificación manual reproducible. Requiere Playwright instalado en el entorno.
const { chromium } = require('playwright');

async function checkPreview() {
  const browser = await chromium.launch({ headless: true, channel: 'msedge' });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));

  for (const width of [320, 375, 700, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('http://127.0.0.1:5500');
    await page.evaluate(() => document.fonts.ready);
    const result = await page.evaluate(() => ({
      overflow: document.documentElement.scrollWidth > window.innerWidth,
      imageLoaded: document.querySelector('.hero-art img').naturalWidth > 0,
      headings: document.querySelectorAll('h1').length,
    }));

    if (result.overflow || !result.imageLoaded || result.headings !== 1) {
      throw new Error(`Layout incorrecto a ${width}px: ${JSON.stringify(result)}`);
    }

    if (width <= 700) {
      const bookingBar = page.locator('.mobile-booking');
      await bookingBar.locator('a').click();
      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
      const bookingBounds = await bookingBar.boundingBox();
      const footerBounds = await page.locator('.site-footer').boundingBox();
      if (!bookingBounds || !footerBounds || Math.abs(bookingBounds.y + bookingBounds.height - 1000) > 1 || footerBounds.y + footerBounds.height > bookingBounds.y) {
        throw new Error('El botón fijo tapa el footer o no está alineado abajo.');
      }
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
      await page.getByRole('button', { name: 'Menú' }).click();
      if (!(await page.locator('#navigation').isVisible())) {
        throw new Error('El menú no se abrió.');
      }
      await page.keyboard.press('Escape');
      if (await page.locator('#navigation').isVisible()) {
        throw new Error('Escape no cerró el menú.');
      }
    }

    console.log(`OK: ${width}px, imagen y menú.`);
    if (width === 375 || width === 1440) {
      await page.evaluate(async () => {
        await Promise.all(document.getAnimations().map((animation) => animation.finished));
      });
      await page.screenshot({ path: `docs/references/implemented-${width}.png`, fullPage: true });
    }
  }

  await page.emulateMedia({ reducedMotion: 'reduce' });
  const animation = await page.locator('.hero-copy').evaluate((element) => getComputedStyle(element).animationName);
  if (animation !== 'none') {
    throw new Error('Movimiento reducido no respetado.');
  }

  const noScript = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 375, height: 900 } });
  const fallback = await noScript.newPage();
  await fallback.goto('http://127.0.0.1:5500');
  if (!(await fallback.locator('#navigation').isVisible())) {
    throw new Error('La navegación no funciona sin JavaScript.');
  }

  if (errors.length) {
    throw new Error(errors.join('\n'));
  }
  console.log('OK: movimiento reducido, navegación sin JavaScript y sin errores de ejecución.');
  await browser.close();
}

checkPreview().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

