FROM ubuntu:latest
RUN apt-get update
RUN apt-get install python3 python3-pip -y
WORKDIR /home/ubuntu/simple-streaming-gateway
COPY . .
#RUN pip3 install -r requirements.txt
EXPOSE 5555
CMD python3 app.py