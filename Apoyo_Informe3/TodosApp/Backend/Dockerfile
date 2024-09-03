# Usa una imagen base oficial de Node.js 18
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación al contenedor
COPY . .

# Expone el puerto en el que correrá la aplicación
EXPOSE 8080

# Define el comando para iniciar la aplicación
CMD ["node", "app.js"]
