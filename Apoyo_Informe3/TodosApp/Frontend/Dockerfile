# Utilizar la imagen base de Node
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de la aplicación al directorio de trabajo
COPY . .

# Instalar las dependencias
RUN yarn install

# Construir la aplicación
RUN yarn build

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 4173

# Comando para ejecutar la aplicación
CMD ["yarn", "preview", "--host"]

