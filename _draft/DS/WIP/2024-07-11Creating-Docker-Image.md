# Creating a docker image to execute some python program.

## Install Docker Desktop


## Run Docker Desktop

## create a folder "count-program"
cd count-program

## Create program 

create a python program count.py (copy paste the code below) in this folder.
```
## count.py
for i in range(1, 11):
    print(i)
```

## Create Dockerfile 

create a Dockerfile in this same folder. File name must be the "Dockerfile". Copy paste following code.
```
## Use python:3.9-alpine as the base image
FROM python:3.9-alpine

## Copy the Python script into the image
COPY count.py /count.py

## Run the Python script
CMD ["python", "/count.py"]
```

### ALTERNATIVE Code can be below.

```
## Use busybox as the base image
FROM busybox

## Install Python using wget and extracting it manually since busybox doesn't have a package manager
RUN wget https://www.python.org/ftp/python/3.9.6/Python-3.9.6.tgz && \
    tar -xzf Python-3.9.6.tgz && \
    cd Python-3.9.6 && \
    ./configure && \
    make && \
    make install

## Copy the Python script into the image
COPY count.py /count.py

## Run the Python script
CMD ["python3", "/count.py"]
```


## Create the image 
```
docker build -t count-image .
```

## Run the image in a container.
```
docker run --rm count-image
```

It will run the code and container will stop.



# what is the difference between "docker build" and docker-compose commands?

The `docker build` and `docker-compose` commands are both used in the Docker ecosystem but serve different purposes and are used in different contexts. Here's a breakdown of their differences and uses:

### `docker build`

The `docker build` command is used to build a Docker image from a Dockerfile. A Dockerfile contains a series of instructions that Docker reads to build an image. The resulting image can then be used to run containers.

#### Key Points:
- **Usage**: Building Docker images.
- **Command**:
  ```bash
  docker build -t <image-name> <path-to-Dockerfile>
  ```
- **Example**:
  ```bash
  docker build -t my-app:latest .
  ```
  This command builds an image named `my-app` with the tag `latest` from the Dockerfile in the current directory (`.`).

- **Purpose**: It is used to create an image with all the dependencies, libraries, and code needed to run an application.
- **Workflow**: After building the image with `docker build`, you typically run it using the `docker run` command.

### `docker-compose`

The `docker-compose` command is used to define and run multi-container Docker applications. `docker-compose` uses a YAML file (`docker-compose.yml`) to configure the application's services, networks, and volumes.

#### Key Points:
- **Usage**: Managing multi-container Docker applications.
- **Command**:
  ```bash
  docker-compose up
  ```
- **Example**:
  ```yaml
  version: '3.8'

  services:
    web:
      build: .
      ports:
        - "5000:5000"
      volumes:
        - .:/code
      depends_on:
        - redis
    redis:
      image: "redis:alpine"
  ```
  This `docker-compose.yml` file defines two services: `web` and `redis`. The `web` service builds an image from the current directory and maps port 5000 of the container to port 5000 on the host. It also depends on the `redis` service, which uses the `redis:alpine` image.

- **Purpose**: It is used to run, configure, and manage multi-container applications. This can include linking containers, setting up networks, and managing volumes.
- **Workflow**: With `docker-compose`, you typically use the `docker-compose up` command to start all the services defined in the `docker-compose.yml` file. This command will build the images if they do not exist, create the containers, and start the services.

### When to Use Each

- **Use `docker build`**: When you need to build a single Docker image from a Dockerfile. This is often the first step in your Docker workflow, creating an image that you can then run or push to a Docker registry.
  
- **Use `docker-compose`**: When you need to orchestrate multiple containers that work together as part of a single application. `docker-compose` is ideal for development environments, CI/CD pipelines, and local testing of applications that consist of multiple services (e.g., a web server, database, and cache).

### Example Workflow

1. **Building an Image with `docker build`**:
   - Create a `Dockerfile`:
     ```Dockerfile
     FROM python:3.8-slim

     WORKDIR /app

     COPY . .

     RUN pip install -r requirements.txt

     CMD ["python", "app.py"]
     ```
   - Build the image:
     ```bash
     docker build -t my-python-app .
     ```

2. **Running a Multi-Container Application with `docker-compose`**:
   - Create a `docker-compose.yml`:
     ```yaml
     version: '3.8'

     services:
       web:
         build: .
         ports:
           - "5000:5000"
         volumes:
           - .:/app
       db:
         image: postgres
         environment:
           POSTGRES_USER: user
           POSTGRES_PASSWORD: password
           POSTGRES_DB: mydb
     ```
   - Start the application:
     ```bash
     docker-compose up
     ```

In summary, use `docker build` to create Docker images from a Dockerfile, and use `docker-compose` to manage and run multi-container Docker applications using a `docker-compose.yml` file.