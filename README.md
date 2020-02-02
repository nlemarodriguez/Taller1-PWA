# Taller1-PWA
## F1
Para inyectar un dato en el primer reload del cliente se hace uso del evento "onupgradeneeded" que se activa cuando se crea por primera vez la BD IndexDB y agrega un registro en la BD:
![](https://github.com/nlemarodriguez/Taller1-PWA/blob/master/static/f1_1.png)
Esto garantiza que se agrega una unica vez esta estacion, posterior a este llamado se invoca el evento "onsuccess" que se encarga de consultar la BD y pintar en la pantalla las estaciones existentes. Cuando se re cargue la pagina solo se llamara el metodo "onsuccess"

## F2

## F3

## F4

## F5

