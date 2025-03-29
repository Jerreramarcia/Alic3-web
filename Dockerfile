# Etapa 1: Build
FROM node:18 AS builder
WORKDIR /app

# Copiamos e instalamos dependencias
COPY package*.json ./
RUN npm install

# Copiamos el resto del proyecto y construimos
COPY . .
RUN npm run build

# Etapa 2: Producción
FROM node:18 AS production
WORKDIR /app

# Copiamos los archivos compilados desde la etapa de build
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package*.json ./

# Instalamos solo dependencias de producción
RUN npm install --only=production

# Exponemos el puerto (3000 por defecto en Nuxt 3)
EXPOSE 3000

# Arrancamos la app (Nuxt 3 usa .output/server/index.mjs)
CMD ["node", ".output/server/index.mjs"]
