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
Se usa el service-worker.js para interceptar todos los llamados que contengan la URL: "https://api-ratp.pierre-grimaud.fr/v3/schedules/" cuando este es interceptado, se guardan los datos en un cache difernte al de los datos de la App Shell llamado: data-cache-v1:

![](https://github.com/nlemarodriguez/Taller1-PWA/blob/master/static/f4.png)

De alli en adelante siempre que esos datos son consultados se hace mediante dos llamados asincronos, uno consulta la Red y el otro consulta si los datos estan en cache:

![](https://github.com/nlemarodriguez/Taller1-PWA/blob/master/static/f4_1.png)

## F5
Para integrar nativamente las aplicaciones Android y IOS se crear el script install.js, que permite descargar la aplicacion al dispositivo, tanto para el ambiente web, como el movil. Ademas se adiciona le boton "install" en la parte superior derecha con el fin de gestionar la descarga

![](https://github.com/nlemarodriguez/Taller1-PWA/blob/master/static/f5.png)

## F6
La aplicacion se encuentra desplegada en firebase y puede ser accedida desde la URL: https://sublime-calling-240702.web.app/

## Uso de Workbox
Para probar el uso de workbox se importa la libreria y con el metodo registerRoute se almacena en modo CacheFirst todos los elementos del proyecto, para eso se usa la expresion regular '/.*'

![](https://github.com/nlemarodriguez/Taller1-PWA/blob/master/static/workbox.png)
