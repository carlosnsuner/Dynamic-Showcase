
# Proyecto Dynamic-Showcase

Realización de la práctica final del BootCamp **"Aprende a programar desdes cero"** en **Urbalab** Gandía con **GeeksHubs Academy**.

El proyecto se denomina: **"Dynamic Showcase"**

**Se nos pide:**

Recrea un mostrador de alimentos dinámico con carrito de compra. Como alternativa se nos plantea libre elección siempre que usemos **Drag & Drop**.

**Tecnologías:**

● HTML5
● CSS3
● JavaScript - ES6
● Git

**Funcionamiento:**

El diseño del mostrador y de sus productos corre libremente a nuestro cargo.

**Extra:**

Además de añadir productos, ¿podrías implementar funcionalidad para poder quitarlos del carrito?. 

En este caso hemos decidido implantar un botón "Reset" para poner a cero el contador de habilidades.
______________

## Comenzamos: 
30/09/2022

**Objetivo del "Dynamic Showcase":**

Decido recrear dos alineaciones de selecciones de fútbol, en este caso: La selección española de fútbol en la parte superior y la selección brasileña de fútbol en la parte inferior.

**Funcionamiento:**

La funcionalidad u objetivo es la de arrastrar mediante (drag) los once jugadores correspondientes a una alineación de fúltbol y soltar mediante (drop) a la parte correspondiente del terrero de fútbol.

En este caso, Los 11 jugadores de la selección española irán en la parte superior del terreno de juego y los 11 jugadores de la selección brasileña, irán a la parte inferior del terreno de juego.

Cada vez que coloquemos un jugador en su terreno de juego correspondiente, nos irá sumando la habilidad asignada a dicho jugador. 

Esta habilidad estará definida en un rango del 1 al 10. 

La suma total de los 11 jugadores, nos dará como resultado la habilidad total o suma de todas las habilidades de los 11 jugadores seleccionados, siendo definida en %.

## Contenido:

En el lateral izquierdo, he creado la tabla con las dos selecciones de fútbol.

En la parte superior la selección española y en la parte inferior, la selección brasileña.

Parte superior:

![image](/img/spainreadme.PNG)

Parte inferior:

![image](/img/brasilreadme.PNG)

En le lateral derecho podemos ver los escudos de cada selección, los contadores y el campo de fútbol donde iremos arrastrando con drag and drop los jugadores de cada selección a la parte correspondiente.

![image](/img/futbolreadme.png)

## Función Drag & Drop:

Con la función Drag & Drop arrastramos y soltamos las imágenes de los jugadores hasta la posición del campo de fútbol.

Como hemos dicho. Parte superior corresponde a la selección española y la parte inferior corresponde a la selección brasileña.

Según arrastramos la fotografía del jugador, el contador irá aumentando su valor asignado (del 1 al 10) y sumando sucesivamente cada uno de los valores de cada jugador.

![image](/img/draganddropreadme.png)

## Botón Reset:

Con el **botón Reset**, haremos un reseteado a cero de los contadores para volver a calcular las habilidades de ambas selecciones. 

El evento **"onclick"** se encarga de ejecutar la funcionalidad de resetear cuando se hace clic en eñ botón.

Con esto, damos por terminado la implementación de la función **drap & drop** en nuestro proyecto.

## Funcionalidades a implantar a futuro:

1. Quisiera poder implantar la función de calcular un máximo de 11 jugadores por selección para hacer un cálculo exacto de las habilidades de la selección. Inicialmente no está definida.
2. Posibilidad de elegir jugador por posición.
3. Aumentar las características de los jugadores y poder hacer cálculos de habilidades por posición, velocidad, remate, fuerza, etc...
