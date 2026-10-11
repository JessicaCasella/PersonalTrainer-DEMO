# Personal Trainer — demo

Landing estática en español, con estética de novela gráfica adulta. HTML, CSS y JavaScript sin framework ni dependencias de ejecución.

## Archivos

- `index.html`: contenido, navegación y secciones.
- `styles.css`: estilos organizados en bloques numerados, responsive y movimiento reducido.
- `comic-experiment.css`: portada por líneas, texto en contorno y viñetas independientes de la rama experimental.

La portada experimental usa la ilustración como fondo y repite el mismo recurso en una capa con silueta CSS. El relleno del título queda debajo del personaje y una copia decorativa en contorno queda encima: donde se cruzan se conserva la lectura en outline. La copia está oculta para lectores de pantalla. No se descarga una imagen adicional para este efecto.
- `script.js`: menú mobile y aparición de secciones.
- `assets/`: ilustración optimizada y fuentes locales.
- `DESIGN_BRIEF.md`: decisiones de diseño y datos pendientes.
- `docs/references/`: mockup de referencia; no se carga en la web.

## Ver la demo

Abrí `index.html` en el navegador o usá Live Server desde tu editor. No requiere instalación ni build.

Si tenés Python, también podés servirla desde esta carpeta:

```sh
python -m http.server 5500
```

Después abrí http://localhost:5500.

## Editar

Los textos están en `index.html`. Los colores están en `:root` al inicio de `styles.css`. El breakpoint mobile es de 700 px y debe coincidir en CSS y JavaScript.

En mobile, el CTA de evaluación también está fijo abajo. El espacio reservado al final del documento evita cubrir el footer y contempla el área segura del dispositivo. Lleva a la sección de contacto, igual que el botón de la portada.

El CTA principal lleva a la sección de contacto. Allí se enlaza la página general de Instagram; no hay formulario ni reserva automática. Las redes no apuntan a usuarios personales. Reemplazar los enlaces generales y la nota de demo cuando existan perfiles y un canal de reserva confirmados.

La ilustración representa un personaje conceptual. Confirmar identidad visual, método, servicios y datos antes de publicar. No hay testimonios ni resultados inventados.

## Validación

Se revisaron anchos de 320, 375, 700, 768 y 1440 px, apertura y cierre del menú, ausencia de desbordamiento horizontal, imágenes, navegación sin JavaScript y movimiento reducido. El script `docs/check-preview.cjs` permite repetir estas comprobaciones con Playwright y Microsoft Edge, con el servidor local activo; no es una dependencia de la web.

Lighthouse y las métricas LCP, CLS e INP siguen pendientes. Los presupuestos de la guía son objetivos, no resultados medidos.

## Recursos visuales

Ilustración creada con la herramienta integrada de generación de imágenes y optimizada a WebP. Prompt resumido: entrenador conceptual adulto con cabello corto, barba y brazos tatuados, mancuerna, gimnasio oscuro, tinta detallada y luz naranja lateral; sin textos ni logos, con espacio oscuro a la izquierda.

Segunda ilustración en `assets/training-story.webp` y su versión mobile: secuencia de tres viñetas de preparación, ejercicio y descanso, con tinta detallada y luz cálida. Generada con la misma herramienta; sin textos incrustados y con carga diferida. El recuadro narrativo es texto HTML editable.

Fuente: Barlow Condensed, peso 800, distribuida bajo SIL Open Font License. Ver `assets/OFL.txt`.

## Git

La versión base está en `main`. El experimento de portada y viñetas está en `codex/comic-motion`, en https://github.com/JessicaCasella/PersonalTrainer-DEMO.

