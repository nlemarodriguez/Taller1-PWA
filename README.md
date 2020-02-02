# Taller1-PWA
## F1
Para inyectar un dato en el primer reload del cliente se hace uso del evento "onupgradeneeded" que se activa cuando se crea por primera vez la BD IndexDB y agrega un registro en la BD (script app.js):
![](https://github.com/nlemarodriguez/Taller1-PWA/blob/master/static/f1_1.png)

Esto garantiza que se agrega una unica vez esta estacion, posterior a este llamado se invoca el evento "onsuccess" que se encarga de consultar la BD y pintar en la pantalla las estaciones existentes. Cuando se re cargue la pagina solo se llamara el metodo "onsuccess"

## F2
Para guardar una estacion cuando un usuario la agrega, cree un metodo llamado "guardarEnIndexDB" que es llamado cuando se presiona el boton de agregar, la funcion de este metodo es guardar en IndexDB los datos relacionados con la nueva estacion (script app.js):
![](https://github.com/nlemarodriguez/Taller1-PWA/blob/master/static/f2.png)

## F3
Para guardar la "App Shell" hago uso de del script "service-worker.js" donde se especifican los archivos que se van a guardar y con el metodo install se gurdan en el cache:
![](https://github.com/nlemarodriguez/Taller1-PWA/blob/master/static/f3_1.png)

## F4

## F5
Para integrar nativamente las aplicaciones Android y IOS se crear el script install.js, que permite descargar la aplicacion al dispositivo, tanto para el ambiente web, como el movil. Ademas se adiciona le boton "install" en la parte superior derecha con el fin de gestionar la descarga

## F6
La aplicacion se encuentra desplegada en firebase y puede ser accedida desde la URL: https://sublime-calling-240702.web.app/

## Uso de Workbox

