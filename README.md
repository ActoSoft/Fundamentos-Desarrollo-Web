# Examen Final - Módulo de Git y Github

## Introduccion
Este es tu examen final (La verdad no es examen, pero se escucha tenebroso) sobre el módulo de Git y de Github. Vas a practicar muchas cosas que hemos estado aprendiendo sobre el control de versiones.

## Fecha de entrega
Sábado 4 de Junio de 2022 a las 23:59 hrs.

## Setup de ramas y convención de nombres
1. Crea un `fork` de este repositorio dentro de tu cuenta personal de Github. Si ya cuentas con el fork realizado, tienes que estar contínuamente actualizando tu copia personal con las nuevas ramas del repositorio original, para ello, puedes preguntar a cualquier desarrollador de Actosoft cómo hacer esto.

2. Estando en tu repositorio local ligado a tu copia personal de este repositorio, asegúrate de estar en la rama `module-github/final-test`. Para esto puedes utilizar el comando `git status` o `git branch`.

3. Crea una nueva rama, llamada `module-github/final-test-<name>` donde en lugar de name, deberás colocar tu nombre, ejemplo `module-github/final-test-melo`. Para crear la rama puedes utilizar `git checkout -b`.

4. En la nueva rama, es donde estarás realizando la mayoría de las operaciones y será la rama base de las ramas que vayas creando conforme las instrucciones.

## Contenido del examen

### Sección 1 - Ciclo de vida de archivos.
#### Instrucciones
1. Dentro de tu repositorio local, crea una nueva carpeta llamada `seccion-1`.
2. Entra a esa carpeta desde la terminal.
3. Dentro de la carpeta recién creada, vas a crear un archivo llamado `lifecycle-files.txt`. NO AGREGUES CONTENIDO. Sólo crea el archivo
4. Crea una versión donde indiques la creación de ese archivo nuevo.
5. Ahora sí, agregar contenido al archivo, contestando la pregunta `¿Cuáles son los diferentes estados en el ciclo de vida de un archivo, y cuándo cambió de uno a otro?`. Puedes responder de manera libre, sé lo más explícito que puedas con tu respuesta.
6. Una vez que contestaste la pregunta dentro de tu archivo, crea una nueva versión con estos cambios realizados.
7. Sube los cambios de tu rama local a una rama remota con el mismo nombre.

### Sección 2 - Ramas / Branches y sincronización entre local y remoto.
1. Dentro de tu repositorio local, crea una nueva carpeta llamada `seccion-2`. NOTA, esta carpeta `seccion-2` debe de quedar **AL MISMO NIVEL** que la carpeta `seccion-1`. **NO DEBE DE QUEDAR UNA DENTRO DE OTRA**.
2. Entra a esa carpeta desde la terminal.
3. Dentro de la carpeta recién creada, vas a crear un archivo llamado `branches.txt`. NO AGREGUES CONTENIDO. Sólo crea el archivo.
4. Crea una versión donde indiques la creación de ese archivo nuevo.
5. Crea una nueva rama, saliendo de tu rama actual (que en este punto debería hacer `module-github/final-test-<name>`) con el nombre `final-test-<name>-branch-1`.
6. Una vez estándo parado en la nueva rama, agrega contenido al archivo creado en el paso 3. Aquí vas a contesta la siguiente pregunta `¿Cuál es la importancia de utilizar branches cuando se trabaja en equipos de desarrollo?`.
7. Una vez que contestaste la pregunta dentro de tu archivo, crea una nueva versión con estos cambios realizados.
8. Sube los cambios de tu rama actual local a una rama remota con el mismo nombre.
9. Estando en tu repositorio remoto de Github, ubícate en la rama creada en el paso anterior, y desde la interfaz de Github, crea dos nuevas ramas llamadas `final-test-<name>-branch-2` y `final-test-<name>-branch-3`, respectivamente. Recuerda, debes de crearlas desde Github, no debes de ejecutar ningún comando localmente (aún).
10. Actualiza tu repositorio local basándote en el repositorio remoto, de tal manera que veas las nuevas branches creadas desde Github en tu repositorio local.
11. Muévete a la rama `final-test-<name>-branch-3` y crea un nuevo archivo llamado `sync-repositories.txt` y dentro de él responde a la siguiente pregunta `¿Cuales son las formas de descargar cambios del repositorio remoto al repositorio local, y en qué se diferencían?`.
12. Crea una versión con los cambios realizados en el paso anterior.
13. Sube esos cambios a la rama remota con el mismo nombre de tu rama local actual.
14. En tu repo local, ahora muévete a la rama `final-test-<name>-branch-2`.
15. Estando en esa rama, descarga los cambios de la rama remota `final-test-<name>-branch-3`. Esto deberá traerte el archivo `sync-repositories.txt`.
16. Crea un nuevo archivo llamado `push-merge.txt`. Dentro de él, explica qué hace el comando push y qué hace el comando merge.
17. Crea una versión con los cambios realizados en el paso anterior.
18. Sube esos cambios a la rama remota con el mismo nombre de tu rama local actual.
19. Una vez los cambios se hayan subido, muévete a tu branch `module-github/final-test-melo` y has merge de los cambios existentes en la branch `final-test-<name>-branch-2`.
20. Actualiza tu rama remota `module-github/final-test-melo` con los cambios que existen actualmente en tu rama local con el mismo nombre.

### Sección 3 - README
1. Dentro de tu repositorio local, crea una nueva carpeta llamada `seccion-3`. NOTA, esta carpeta `seccion-3` debe de quedar **AL MISMO NIVEL** que la carpetas `seccion-1` y `seccion-2`. **NO DEBE DE QUEDAR UNA DENTRO DE OTRA**.
2. Dentro de esta carpeta crea una archivo llamado `README.md`.
3. Dentro de ese archivo y utilizando Markdown (puedes investigar la sintaxis), vas a describir de manera resumida qué fue lo que hiciste en las secciones anteriores, cuales fueron los pasos que hiciste así como los comandos utilizados.
4. Crea una versión con los cambios realizados en el paso anterior.
5. Sube esos cambios a la rama remota con el mismo nombre de tu rama local actual.

### Sección 4 - Pull Request
1. Ubícate en tu rama `module-github/final-test-melo` en Github.
2. Crea un Pull Request para meter tus cambios que existen en la rama `module-github/final-test-melo` dentro de la rama `module-github/final-test` **DEL REPOSITORIO DE ACTOSOFT, no del tuyo**. Es decir, vas a mandar un Pull Requests desde tu copia hacia el repo original.
3. Manda el link de tu pull-request al canal de Discord `#ejercicio-tareas`, etiquetando a mínimo 2 instructores.

## Dudas / problemas
Contáctanos mediante el canal de Discord `#dudas-preguntas`. Puedes mandar la pregunta en general aquí y etiquetas a los instructores.
