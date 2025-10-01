## To-Do-List
# Clonar repositorio desde GitLab

- git clone https://gitlab.com/edercortez10/to-do-list.git
- rama (master)

## Instalar

# Asegurese de instalar Ionic 

npm install -g @ionic/angular

# Instalar dependencias

- npm install o tambien npm i  esto generar node_module donde estan todas las dependencias y librerias necesarias para el funcionamiento de la aplicación

## Correr el Proyecto
- ionic serve  o ionic s

## Crear nuevo componente 
- ionic g c feature/nombre-componente  se simplifica la palabra generate con la g y component con la c


## Instrucciones de compilacion de la aplicacion 
# asegurese de instalar cordova usando
- npm install -g cordova el -g hace referencia que la instalacion sera global 


- por lo general en las ultimas versiones de Ionic vine por defecto capacitor toca deshabilitarlo y intalar cordova

# deshabilitar capacitor y habilitar cordova
- ionic integrations disable capacitor
- ionic integrations enable cordova


# Instalar  cordova

- npm install -g cordova

# En mic aso como estoy con sistema operativo windows puedo agregar la plataforma para Android 

- ionic cordova platform add android

# Construir la  aplicacion para Android 
- ionic cordova build android --release
