# Usa una imagen base de Node.js
FROM node:20.11.0

# Define el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los archivos de tu proyecto al contenedor
COPY package*.json ./
RUN npm install
COPY . .

# Expón el puerto en el que tu aplicación estará corriendo
EXPOSE 8080

# Define el comando para iniciar la aplicación
CMD ["node", "app.js"]
