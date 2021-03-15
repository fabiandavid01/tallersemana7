# Taller Semana 7

Para la presente entrega se implementaron:

 - 40 Casos de prueba con estrategia pool de datos a-priori
 - 40 Casos de preuba con estrategia pool de datos (pseudo) aleatorio dinámico 
 - 40 Casos de preuba con estrategia escenario aleatorio.

A continuación, se detalla para cada caso la estretegia de generación de datos en caaso:

# A. Estrategia pool de datos a-priori
Para la generación previa de datos, se utilizó la herramienta Mockaroo estableciendo un template de data para cada caso requerido, posteriormente se generó un archivo json con 100 registros y este fue ubicado dentro del proyecto cypress.  En cada caso de pruebas implementado, se importó el mencionado archivo haciedo uso aletario de los registros allí encontrados.

# B. Estrategia pool de datos (pseudo) aleatorio dinámico
Para la generación pseudo aleatoria de datos, se utilizó el generador de datos Mockaroo para que sean obtenidos desde una interfaz de tipo API. Para esto se creo una cuenta en Mockaroo se creo un schema por cada caso de prueba. En el schema se coloca el nombre del campo y el tipo de campo con el que se quiere llenar el caso de prueba y la cantidad de registros (100 registros). Después de guardar el schema se genera el API donde me genera una URL.

Esta URL se utiliza en cada caso de prueba cypres, al obtener el response del api su body lo guardo en un array. También se genera un numero aleatorio de la longitud del array y este numero se utiliza como posicion del array para obtener el valor.

# C. Estrategia escenario aleatorio.
Para la generación aleatoria de datos, se utilizó la herramienta faker importando la librería en cada uno de los archivos donde se implementaron los 40 casos de pruebas mencionados.  De acuerdo a las entradas del escenario de prueba a validar, se hacía uso de los métodos expuestos por la librería faker: word, words, parrafo, parrafos, correo, etc.

# Contenido del repositorio.
El presente repositorio contiene un proyecto Cypress, en su interior puede ubicarse las siguientes carpetas:

- /tallersemana7/cypress/integration/01_PruebasAleatorias
- /tallersemana7/cypress/integration/02-PoolDeDatosAPriori
- /tallersemana7/cypress/integration/03_ PoolPseudoAleatorio


# Instrucciones de instalación.
Cada carpeta contiene 40 casos de preueba implementados de acuerdo a la estrategia de pruebas señalada en su carpeta contenedora.  Para configura el proyecto en ambiente de instalación, siga el siguiente procedimiento:

1. A través de una consola, genere una carpeta para descargar el proyecto.
2. Ingrese a la carpeta creada, clone el repositorioa través del  comando "git clone https://github.com/fabiandavid01/tallersemana7.git".
3. Ingrese con una consola a la carpeta "tallersemana7".
4. Ejecute el comando "npm install cypress"
5. Ejecute el comando "npm install faker"
6. Ejecute el comando "./node_modules/.bin/cypress open"
7. El comando anterior desplegará la consolta de Cypress y en su interior, cada uno de los casos de prueba generados.
8. Ingrese a la carpeta "01_PruebasAleatorias" y ejecute cualquiera de los archivos desplegados.
9. Ingrese a la carpeta "02-PoolDeDatosAPriori" y ejecute cualquiera de los archivos desplegados.
10. Ingrese a la carpeta "03_ PoolPseudoAleatorio" y ejecute cualquiera de los archivos desplegados.



