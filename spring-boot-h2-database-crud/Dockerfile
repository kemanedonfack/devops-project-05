FROM maven:3.8-jdk-11-slim AS build
COPY . /app
WORKDIR /app
RUN mvn clean install -DskipTests
FROM openjdk:11-jre-slim
ARG JAR_FILE=/app/target/*.jar
COPY ${JAR_FILE} /app/app.jar
EXPOSE 8090
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
