## To-Do-List
# Clonar repositorio desde GitLab

- git clone git@github.com:edercabezas/to-do-list.git
- rama (master)

## Instalaciones de dependencias

# Asegurese de instalar Ionic 

npm install -g @ionic/angular

# Instalar dependencias

- npm install o tambien npm i  esto generar node_module donde estan todas las dependencias y librerias necesarias para el funcionamiento de la aplicación

## Correr el Proyecto
- ionic serve  o ionic s

## Crear nuevo componente 
- ionic g c feature/nombre-componente  se simplifica la palabra generate con la g y component con la c


## Instrucciones de compilacion de la aplicacion 

# asegurese de instalar capacitor usando
- npm install @capacitor/core @capacitor/cli @capacitor/android

## PAra abrir la aplicacion en Android Studio
# Compilar el proyecto para generar la aplicacion para ios, android y web
 - ionic build  

# genera la carpeta apra la plataforma android
- npx cap add android

# Sincroniza los archivos con la carpeta de android
- npx cap sync android

# Abrir la aplicacion en Android studio
- npx cap open android



## Instalar la aplicacion  directamente en el celular


# generar el proyecto
- ionic build

# Añadir la plataforma de android
- npx cap add android

# Sincronizar la platraforma de android
- npx cap sync android

# entrar a android
- cd android

# Conecta el dispositivo android a su computadora  y activa el depurador USB 

# generar la app
- gradlew assembleDebug

# Instalar la apk en el movíl
- adb install -r app\build\outputs\apk\debug\app-debug.apk

## tener en cuenta que para esto debes tener instalado java y configuar las variables de entorno es importante este paso ##
