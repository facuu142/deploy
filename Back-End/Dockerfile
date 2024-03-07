# Fase de construcción
FROM maven:3.8.5-openjdk-17 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar solo el archivo pom.xml para instalar las dependencias de Maven
COPY pom.xml .

# Descargar las dependencias de Maven (esto es útil si no cambian las dependencias frecuentemente)
RUN mvn dependency:go-offline -B

# Copiar el resto de los archivos y directorios del proyecto
COPY src src

# Compilar el proyecto
RUN mvn package -DskipTests

# Imagen final
FROM openjdk:17.0.1-jdk-slim

# Copiar el archivo WAR generado desde la imagen de construcción al contenedor final
COPY --from=build /app/target/tuvivienda-0.0.1-SNAPSHOT.war /app/java-app.war

# Exponer el puerto 8080 (ajusta el puerto según sea necesario)
EXPOSE 8080

# Comando de inicio para ejecutar la aplicación Java
ENTRYPOINT ["java", "-jar", "/app/java-app.war"]
