# Proyecto 1. Cifrado César
#### Por Iliana Treviño

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

# Inspiración para el proyecto

![Cipher machine](https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/11/14/1415982042372/Enigma-machine-012.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=2a5d1a4332cf8b09365639e952163149)

Este proyecto está inspirado en la que es conocida como la mejor máquina de cifrar del mundo, gracias a su rol para cifrar y decifrar mensajes durante la segunda guerra mundial (WWII).
Enigma es el nombre de la marca de una serie de maquinas de
cifrado, desarrolladas antes y durante la segunda guerra mundial.

Su historia comienza con la invención de la máquina de rotores (1915), la cual se fue adaptando con el paso de los años a modelos como los siguientes:

- Glowlamp Enigma (1924)
- Commercial Enigma (1926)
- Zählwerk Enigma (1928)
- Military Enigma (1932)
>Para más información se puede visitar el siguiente link
>https://www.cryptomuseum.com/crypto/enigma/hist.htm

# Usuario

Para comenzar el proyecto busqué determinar un usuario que requiriera una interacción muy básica y sencilla, pero que pudiera de manera rápida cifrar o decifrar un mensaje.

![](https://apsmedbill.com/sites/default/files/hands_typing.jpg)

Enigma está diseñada para operaciones gubernamentales, busca proveer a personas de alto rango en el gobierno que formen parte de ciertos grupos (Seguridad Nacional, Derechos Humanos, entre otras divisiones) de una herramienta a través de la cual puedan mandar mensajes internos o a otras naciones de manera confidencial, segura y sencilla.

# Proceso de diseño

Una vez plasmado el usuario y tomando en cuenta el diseño original de la maquina Enigma, decidí crear un proyecto sencillo pero funcional, tomando como inspiración un diseño limpio e intuitivo para el usuario.
La pagina consiste en tres "pantallas":

- Inicio
>En la pantalla inicial el usuario introduce su nombre y da click en comenzar para ingresar al menú de selección.

- Selección de cifrado o decifrado
>En esta pantalla se muestra un mensaje de bienvenida al usuario, donde se le pregunta qué es lo que quiere hacer con su mensaje: cifrar o decifrar. El usuario hace click en cualquiera de los dos botones en forma de candados.

- Pantalla de cifrar/decifrar
>En la pantalla se muestran unas breves instrucciones para el usuario al momento de ingresar su mensaje, se muestra un signo de interrogación de ayuda en la esquina superior derecha para explicar lo que representa el desplazamiento y se encuentra un botón con el cual se cifra o decifra el mensaje.
En esta misma pantalla se muestra el mensaje.

De esta manera se concretó una página sencilla e intuitiva, con información clara pero que no abrumara al usuario y con la que fuera fácil interactuar.

# Solucionando una necesidad

El propósito de Enigma es brindar un servicio sencillo y práctico para codificar y decodificar mensajes.
En el gobierno hay temas que se debaten diariamente de vital importancia para el funcionamiento diario y eficiente de las organizaciones que quedan bajo su mando, debates que muchas veces contienen informacion delicada y que debe mantenerse privada del público. Es por esto que al utilizar esta plataforma los usuarios pueden, de manera segura y rápida, codificar y decodificar mensajes.

# Checklist

Esta sección está para ayudarte a llevar un control de lo que vas completando.

## Parte Obligatoria

* [x] `README.md` incluye info sobre proceso y decisiones de diseño.
* [x] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [ ] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [x] Usa VanillaJS.
* [x] No utiliza `this`.
* [x] Implementa `cipher.encode`.
* [x] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [x] Pasa pruebas unitarias.
* [x] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [x] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [x] Interfaz permite escribir un texto para ser cifrado.
* [x] Interfaz muestra el resultado del cifrado correctamente.
* [x] Interfaz permite escribir un texto para ser descifrado.
* [x] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"

* [ ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.
