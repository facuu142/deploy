# Imagen base para la construcción
FROM maven:3.8.5-openjdk-17 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar todo el contenido al directorio de trabajo
COPY . .

# Ejecutar el comando Maven en el directorio de trabajo
RUN mvn clean package -DskipTests

# Imagen final
FROM openjdk:17.0.1-jdk-slim

# Copiar el archivo war generado desde la imagen de construcción al contenedor final
COPY --from=build /app/target/tuvivienda-0.0.1-SNAPSHOT.war /app/java-app.war

# Exponer el puerto 8080
EXPOSE 8080

# Comando de inicio para ejecutar la aplicación Java
ENTRYPOINT ["java", "-jar", "/app/java-app.war"]
