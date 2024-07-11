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