# InGen

## International Genetics Incorporated

InGen es un sitio web demostrativo inspirado en una empresa de genética, paleontología y biotecnología. El proyecto presenta la identidad de la organización, sus áreas de especialidad, un centro de atención al cliente y una tienda en línea con productos educativos, científicos y recuerdos.

> **Nota:** Este proyecto funciona como una demostración front-end. Los formularios, el inventario y el carrito utilizan `localStorage` del navegador; no existe un servidor ni una base de datos real.

## Contenido del proyecto

| Página | Descripción |
| --- | --- |
| [`index.html`](./index.html) | Página principal, presentación de InGen y áreas de especialidad. |
| [`nosotros.html`](./nosotros.html) | Información institucional y contexto de la organización. |
| [`tienda.html`](./tienda.html) | Catálogo de productos, ofertas, detalle de producto y carrito de compras. |
| [`atencionAlCliente.html`](./atencionAlCliente.html) | Formulario para dudas, quejas, sugerencias y solicitudes de seguimiento. |
| [`adminQuejas.html`](./adminQuejas.html) | Panel privado para consultar las solicitudes enviadas desde atención al cliente. |

## Cómo iniciar el sitio

Se recomienda abrir el proyecto con un servidor local, ya que la tienda carga el catálogo desde un archivo JSON.

### Opción rápida: Live Server

1. Abre la carpeta del proyecto en Visual Studio Code.
2. Instala la extensión **Live Server** si aún no la tienes.
3. Haz clic derecho en [`index.html`](./index.html).
4. Selecciona **Open with Live Server**.
5. Navega por el sitio desde la dirección local que muestre VS Code.

También puedes iniciar cualquier servidor HTTP desde la carpeta raíz del proyecto. No se recomienda abrir [`tienda.html`](./tienda.html) directamente con `file://`, porque el navegador puede bloquear la lectura de [`productos.json`](./src/data/productos.json).

## Recorrido principal

1. Comienza en [`index.html`](./index.html).
2. Selecciona **Tienda** en la navegación para consultar el catálogo.
3. En la tienda puedes:
   - Revisar la sección **Ofertas Imperdibles**.
   - Abrir cualquier producto para consultar sus detalles.
   - Ver productos relacionados por categoría.
   - Agregar productos al carrito.
   - Modificar cantidades y simular una compra.
4. En **Atención al cliente** puedes enviar una solicitud.
5. Para revisar las solicitudes como administrador, abre [`adminQuejas.html`](./adminQuejas.html) y accede con la contraseña administrativa configurada para la demostración.

## Panel de quejas y sugerencias

El panel administrativo no aparece en la navegación pública. Para acceder:

1. Abre el sitio usando el servidor local.
2. Escribe en el navegador la ruta `adminQuejas.html` o selecciona el archivo desde el explorador del proyecto.
3. Introduce la contraseña de administrador.
4. Consulta las solicitudes agrupadas por tipo y revisa sus datos, fecha y mensaje.

Las solicitudes se guardan en el navegador mediante la clave `ingen_solicitudes`. El panel y el formulario comparten esta información a través de [`src/scripts/solicitudes.js`](./src/scripts/solicitudes.js), por lo que ambos deben abrirse en el mismo origen local y navegador.

> **Seguridad:** La autenticación actual es únicamente una simulación para fines académicos. No debe utilizarse para proteger información real. En un sistema de producción, la validación debe realizarse en un servidor con contraseñas cifradas, sesiones seguras y control de permisos.

## Tienda e inventario

La información visible de los productos se encuentra en [`src/data/productos.json`](./src/data/productos.json). Cada registro incluye:

- `nombre`
- `descripcion`
- `categoria`
- `precio`
- `precioAnterior` cuando existe una oferta
- `stock`
- `imagen`

El carrito se guarda temporalmente en `localStorage` con la clave `ingen-cart`. Cuando se agregan productos, el stock disponible se actualiza en el navegador. La opción **Comprar** realiza una compra simulada y vacía el carrito; no se efectúan pagos reales.

## Tecnologías

- HTML5, CSS3 y JavaScript vanilla.
- Bootstrap 5 y Bootstrap Icons en las páginas institucionales.
- SweetAlert2 para confirmaciones y mensajes de la tienda.
- `localStorage` y `sessionStorage` para la demostración de persistencia local.
- JSON como fuente de datos del catálogo.

## Estructura

```text
InGen/
├── index.html
├── nosotros.html
├── tienda.html
├── atencionAlCliente.html
├── adminQuejas.html
├── Descripciones.md
└── src/
    ├── data/
    │   └── productos.json
    ├── css/
    ├── images/
    └── scripts/
        └── solicitudes.js
```

## Restablecer datos de la demostración

Los datos se almacenan localmente en el navegador. Para iniciar una demostración limpia, abre las herramientas de desarrollador del navegador y elimina el almacenamiento del sitio. Esto borrará las solicitudes, el carrito y los cambios de stock guardados localmente.

