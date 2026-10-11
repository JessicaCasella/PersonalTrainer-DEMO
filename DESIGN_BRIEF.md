# Personal Trainer — instrucciones para la demo

## Objetivo y estado

Crear una landing responsive para un entrenador personal. Presentar su enfoque, modalidades y acompañamiento, y llevar al visitante a agendar una evaluación gratis. El diseño está definido a nivel conceptual; todavía no hay implementación ni stack elegido. Este documento guía la futura implementación y no ordena empezar a programar.

Repositorio indicado por la usuaria: https://github.com/JessicaCasella/PersonalTrainer-DEMO.git

## Información proporcionada

- Marca: Personal Trainer.
- Redes genéricas: https://www.instagram.com/, https://www.facebook.com/ y https://www.tiktok.com/. Sin usuarios asociados.
- Ubicación: Montevideo, Uruguay.
- Servicio: entrenamiento personalizado presencial y online.
- Propuesta: transformar cuerpo y mente con un plan y acompañamiento.
- Llamada a la acción: «Agendá tu evaluación gratis».
- Filosofía: cuidar el cuerpo, construir constancia y entrenar para vivir mejor a largo plazo.
- Idioma: español rioplatense, con voseo y tono cercano, directo y profesional.

La demo se mantiene genérica por pedido de la usuaria. No asociar la marca, textos o enlaces a un entrenador real. Ubicación y modalidades son contenido ilustrativo de la demo. No usar cantidades de seguidores o publicaciones: son datos transitorios y no aportan a la landing.

Pendientes antes de activar contacto o publicar: WhatsApp o enlace de reserva, nombre y presentación aprobados, formación/credenciales, detalles de planes y modalidad presencial, fotografías o ilustración aprobada del entrenador. No inventar precios, títulos, testimonios, resultados, horarios o direcciones. Si falta un enlace de contacto en la demo, indicar de forma visible que es una demostración; no enviar a un número inventado.

## Dirección visual aprobada

Novela gráfica adulta con iluminación cinematográfica. El estilo cómic vive principalmente en las ilustraciones; la interfaz es sobria. Fondo negro, tipografía clara, naranja quemado y escenas de gimnasio con sombras profundas. Personajes con proporciones realistas, trazos de tinta detallados y luz cálida lateral.

Actualización de implementación: reforzar el cómic con una secuencia ilustrada de tres viñetas (preparación, entrenamiento y descanso), un recuadro narrativo y detalles de tinta en los bordes. Mantener el tono adulto, sin agregar efectos infantiles o animación continua. La nueva ilustración se carga fuera de la portada con lazy loading.

La primera propuesta de cómic retro fue descartada por sentirse infantil. No recuperar explosiones, «¡Vamos!», tramas de puntos decorativas, globos en botones, carteles inclinados, sombras duras de stickers ni caricaturas exageradas.

### Paleta inicial (ajustable al implementar)

- Fondo principal: `#080808`.
- Superficie secundaria: `#141311`.
- Texto principal: `#F2EBDD`.
- Texto secundario: `#C7BFB2`.
- Acento naranja: `#F26922`.
- Divisores: `#39352F`.

Validar contraste sobre cada fondo real, especialmente el texto de botones. No asumir que una combinación es accesible solo por estar en esta paleta.

### Tipografía y composición

Títulos en sans serif condensada y fuerte; cuerpo en sans serif limpia. Máximo dos familias, pocos pesos y archivos WOFF2. Candidatas visuales: Barlow Condensed para títulos y DM Sans para cuerpo, sujetas a evaluación de peso y legibilidad.

Usar jerarquía editorial, espacio generoso, divisores finos y controles rectangulares discretos. Evitar convertir cada párrafo en una tarjeta. Iconos pequeños y consistentes, sin emojis decorativos en la interfaz.

## Referencias

La referencia principal es la publicación compartida con un entrenador sosteniendo una mancuerna y luz naranja en el gimnasio. Las otras publicaciones orientan el acabado de tinta, anatomía y escenas. No incorporar interfaces de Instagram, marcas de ropa, textos del post o comparaciones que ridiculicen cuerpos.

La preview elegida muestra desktop y mobile con negro, naranja, un entrenador ilustrado y secciones sobrias. El personaje generado es conceptual: no representa a una persona identificada.

Se conserva una copia local en `docs/references/mati-trainer-preview.png`. Esta imagen es una referencia visual, no una página funcional ni una imagen para servir como captura de todo el sitio. Construir textos, botones y layout en HTML real. Generar o aprobar una ilustración independiente para la portada; no recortar el mockup completo como solución final.

## Contenido y estructura propuestos

1. **Navegación:** Personal Trainer, Método, Planes, Sobre mí y Contacto. En mobile, menú accesible con apertura/cierre y estado anunciado.
2. **Portada:** etiqueta «Montevideo · Presencial + online»; título «Entrená con un plan. Avanzá con propósito.»; descripción «Entrenamiento personalizado presencial en Montevideo y online.»; botón «Agendá tu evaluación gratis». Ilustración protagonista a la derecha en desktop, sin texto incrustado en la imagen.
3. **Objetivos:** «Tu objetivo. Tu plan.» con Fuerza, Condición física y Seguimiento personalizado. Son categorías editoriales propuestas, no paquetes comerciales confirmados.
4. **Filosofía / presentación:** «Cuidarte hoy. Vivir mejor mañana.» Explicar el acompañamiento y la construcción de hábitos sin prometer resultados médicos ni plazos físicos garantizados.
5. **Método:** evaluación inicial, planificación personalizada y seguimiento con ajustes. Confirmar estos pasos con el entrenador antes de publicar.
6. **Contacto:** repetir la evaluación gratis, explicar el siguiente paso y usar el canal confirmado.
7. **Footer:** marca, ubicación y enlace a Instagram. Publicaciones o testimonios solo con material aprobado; no son obligatorios para la demo.

En mobile priorizar título, descripción y CTA antes de la ilustración. Mostrar servicios en una columna. Evitar scroll horizontal, alturas de pantalla obligatorias y texto cortado. Revisar desde 320 px y en desktop de 1440 px. La composición puede reorganizarse; no reducir toda la página desktop a escala.

## Movimiento recomendado para la primera versión

Mantener la animación breve, discreta y al servicio de la lectura. Implementar con CSS y, para detectar entrada en pantalla, un único IntersectionObserver. No agregar librerías de animación para estos efectos.

- **Entrada de portada:** texto y CTA con opacidad y desplazamiento vertical de 8–12 px durante 350–450 ms; una sola vez. La ilustración puede quedar estática. No retrasar su descarga ni esconder el contenido principal esperando JavaScript.
- **Secciones al aparecer:** opacidad y desplazamiento de 12–16 px, 300–450 ms, una sola vez; escalonar elementos cercanos con 50–70 ms y evitar largas cadenas.
- **Botones:** desplazamiento de la flecha de 3–4 px en hover/focus, 150–200 ms. Mantener foco visible y respuesta inmediata al clic. Nada esencial debe depender del hover.
- **Servicios:** elevación de hasta 2 px al pasar el puntero, 180 ms. Estado equivalente de foco si el bloque realmente contiene una acción.
- **Luz cálida:** gradiente estático integrado a la ilustración o al fondo, para dar atmósfera sin movimiento continuo.

Opcional, solo tras medir: desplazamiento muy leve de la ilustración con el scroll en desktop. Desactivarlo en mobile y con movimiento reducido. No es necesario para conseguir el aspecto cinematográfico.

Evitar video de fondo, GIFs, partículas, cursor personalizado, 3D/WebGL, zoom continuo, scroll controlado artificialmente y animaciones de blur o sombras grandes. Priorizar `transform` y `opacity`; no animar dimensiones o posiciones que provoquen recalcular el layout. No aplicar `will-change` a toda la página.

Respetar `prefers-reduced-motion: reduce`: quitar desplazamientos y animaciones decorativas, y usar scroll inmediato. La web debe mostrar todo el contenido incluso si JavaScript falla. No dejar secciones permanentemente con `opacity: 0`.

## Rendimiento y accesibilidad

Presupuestos orientativos para la demo, a comprobar con mediciones, no garantías:

- Ilustración hero responsive en AVIF/WebP, objetivo 150–300 KB en mobile y menos de 500 KB en desktop, conservando detalle suficiente.
- Transferencia inicial mobile: intentar quedar por debajo de 1 MB, incluidas fuentes y recursos necesarios.
- JavaScript para efectos: objetivo menor a 10 KB comprimidos, sin dependencia adicional.
- Cargar la imagen principal con prioridad; imágenes fuera de la portada con lazy loading. Declarar dimensiones o proporción para reservar espacio. Usar `srcset`/`sizes`.
- Usar degradados y textura estáticos, evitando filtros costosos en grandes superficies.
- No integrar el feed de Instagram en vivo: preferir enlaces o imágenes locales optimizadas.
- HTML semántico, un H1, botones y enlaces reales, texto alternativo apropiado, controles cómodos al tacto y navegación por teclado.
- Medir LCP, CLS e INP y revisar Lighthouse con perfil mobile. Probar menú, CTA y movimiento reducido. No declarar métricas aprobadas sin haberlas medido.

## Criterios de aceptación

- Se reconoce la estética adulta de las referencias y no aparecen recursos del cómic infantil descartado.
- Desktop y mobile mantienen identidad, lectura clara y acceso rápido a la evaluación gratis.
- El contenido de la marca se limita a datos proporcionados o confirmados; los placeholders están identificados.
- El mockup se usa como guía, con interfaz real y assets independientes.
- La animación no bloquea lectura, interacción ni carga; funciona la alternativa sin movimiento.
- Se verifican contraste, teclado, layouts estrechos y peso de imágenes antes de considerar terminada la implementación.

## Fuentes técnicas para movimiento

- https://web.dev/articles/animations-guide
- https://web.dev/articles/animations-and-performance
- https://www.w3.org/WAI/WCAG22/Techniques/css/C39

