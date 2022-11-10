# ChoreIt - Hito 1

Este hito está centrado en crear y refinar las historias de usuario para añadirlas como issues a nuestro repositorio de github, seleccionar el framework de desarrollo y configurar la estructura del programa.

## Historias de usuario

La base del desarrollo centrado en el usuario son las historias de usuario, que inicialmente son las siguientes:

- [HU1.0](https://github.com/panosjuanis/ChoreIt/issues/2) - Como persona que vive en un piso compartido, necesito poder gestionar tareas para distribuir la carga de trabajo

    - [HU1.1](https://github.com/panosjuanis/ChoreIt/issues/1) - Como persona que vive en un piso compartido, necesito poder crear un piso con un identificador y clave de acceso

    - [HU1.2](https://github.com/panosjuanis/ChoreIt/issues/3) - Como persona que vive en un piso compartido, necesito poder añadir, modificar o eliminar a personas en mi piso

    - [HU1.3](https://github.com/panosjuanis/ChoreIt/issues/4) - Como persona que vive en un piso compartido, necesito poder crear, modificar o eliminar tareas a mi piso, y asignarlas a una persona


- [HU2.0](https://github.com/panosjuanis/ChoreIt/issues/5) - Como persona que vive en un piso compartido, necesito poder visualizar la información sobre las tareas de mi piso

    - [HU2.1](https://github.com/panosjuanis/ChoreIt/issues/6) - Como persona que vive en un piso compartido, necesito poder ver un calendario con las tareas del mes para organizarme mejor

    - [HU2.2](https://github.com/panosjuanis/ChoreIt/issues/7) - Como persona que vive en un piso compartido, necesito poder realizar un seguimiento del cumplimiento de tareas


- [HU3.0](https://github.com/panosjuanis/ChoreIt/issues/8) - Como persona que vive en un piso compartido, necesito poder interactuar con las tareas que tengo asignadas

    - [HU3.1](https://github.com/panosjuanis/ChoreIt/issues/9) - Como persona que vive en un piso compartido, necesito poder recibir un email cada día que me recuerde qué tareas tengo asignadas

    - [HU3.2](https://github.com/panosjuanis/ChoreIt/issues/10) - Como persona que vive en un piso compartido, necesito poder responder a esa notificación para marcar que la tarea se ha cumplido



Posteriormente se podrán añadir nuevas historias de usuario, por ejemplo un administrador de la aplicación que desea promocionar ciertos anunciantes dentro de la aplicación, pero por ahora nos hemos centrado en el __usuario base__, que es aquella persona que vive en un piso compartido y utiliza la aplicación para gestionar y visualizar las tareas de su piso compartido.


## Selección de Framework

Tras un estudio de las distintas opciones para realizar un servicio web dseplegable en la nube de este tipo, he decidido utilizar el stack __MEAN__:

- __MongoDB:__ Base de datos no SQL programable en __JavaScript__
- __Express:__ Framework de aplicaciones web para Node.js
- __Angular:__ Framework de diseño de aplicaciones web
- __Node.js:__ Entorno de desarrollo de servidores en __JavaScript__

A pesar de que no cuento con experiencia con este stack de desarrollo, me ha parecido muy interesante y quiero aprender a trabajar con él para desarrollar el proyecto.


## Creación de la estructura del proyecto

Relacionado con [este issue](https://github.com/panosjuanis/ChoreIt/issues/13), la creación de la estructura del proyecto es el primer paso antes de poder a desarrollar los modelos, la lógica de negocio o el frontend.

Para la creación de la estructura me he basado en [este tutorial](https://www.youtube.com/watch?v=qf8-JzU-4IE), que explica el stack MEAN y ayuda a crear un primer proyecto, los pasos más importantes son los siguientes:

- Descargar e instalar [Node.js](https://nodejs.org/en/)
  - Instalar los paquetes express y morgan ![Instalación de Express y Morgan](img/npm_express_morgan.jpg)

