# Near-Extinct Bird Detector
 SensiML and QuickFeather Development Kit based
 
- [Near-Extinct Bird Detector](#near-extinct-bird-detector)
- [Introduction:](#introduction)
- [Solution:](#solution)
  - [Features:](#features)
- [Hardware, Software and Services:](#hardware-software-and-services)
  - [Hardware:](#hardware)
  - [Software:](#software)
  - [Services:](#services)
- [Connection Diagram:](#connection-diagram)
- [Dev Environment Setup:](#dev-environment-setup)
- [QuickFeather Burner v1 (Flasher):](#quickfeather-burner-v1-flasher)
- [Capture Data:](#capture-data)
  - [Setup Quickfeather:](#setup-quickfeather)
  - [Capturing Data:](#capturing-data)
  - [Labeling Data:](#labeling-data)
- [SensiML:](#sensiml)
- [Testing Model:](#testing-model)
- [ESP32 Interface:](#esp32-interface)
- [Simple-Streaming-Gateway:](#simple-streaming-gateway)
  - [Hardware:](#hardware-1)
  - [SSG to AWS IoT:](#ssg-to-aws-iot)
- [WebPage Deploy:](#webpage-deploy)
  - [AWS Cognito:](#aws-cognito)
  - [AWS IoT WebSocket:](#aws-iot-websocket)
- [Final Product:](#final-product)
- [EPIC DEMO:](#epic-demo)

# Introduction:

Because of illegal hunting and sporting hunt, there are several near-extinct bird species that could be saved with technological solutions.

The current discussion [1] according to Nature, is how much of this extinction of species can be mitigated if action is taken to avoid it, reinforced by Birdlife [2], and it approximates a 40% mitigation.

Similar solutions that i found are based on raising awareness of the problem. Ignoring those solutions, i can find:

* Use of necklaces with GPS.
Disadvantages: collars and sensors that go on an animal can cause damage or discomfort to the animal. In the case of batteries, they can explode.

    https://www.gps-collars.com/

* Smart sensing with Drones.
Disadvantages: They can generate unexpected collisions or collapses against animals and injure them.

    https://upcommons.upc.edu/bitstream/handle/2117/104909/Survey-an-welfare-arxiv.pdf

* Identification of bird’s songs.
Disadvantages: complex and cumbersome system which can be difficult to maintain for a long time in one place.

    https://phys.org/news/2012-05-technology-bird.html

In the case of the latter, in addition to strengthening our theory, it gives us the opportunity to make an easily reproducible, energy efficient and powerful system.

1. https://natureecoevocommunity.nature.com/posts/how-many-bird-and-mammal-extinctions-has-recent-conservation-action-prevented

2. https://www.birdlife.org/worldwide/news/new-study-conservation-action-has-reduced-bird-extinction-rates-40

# Solution:

Using the Infineon IM69D130 PDM digital microphone included in the QuickFeather Development Kit we will obtain an audio signal which, using SensiML, we can pass through a neural network, which indicates the type of bird we are hearing.

Desplegando la informacion de las aves detectectadas en una sencilla webapp.

## Features:

* High accuracy (thanks to sensiml).
* Easy production at large scale, due to its simplicity.

# Hardware, Software and Services:

## Hardware:

* QuickFeather Development Kit. 1x.
  * https://www.quicklogic.com/products/eos-s3/quickfeather-development-kit/
* ESP32. 1x
  * https://www.adafruit.com/product/3405
* 5v Source and USB to MicroUSB cable. 2x.
  * https://www.amazon.com/dp/B07QX1Q4J7/ref=cm_sw_em_r_mt_dp_NFAEN603J65DF0FFPXJH
* Raspberry Pi Zero W.
  * https://www.amazon.com/dp/B072LWBL37/ref=cm_sw_em_r_mt_dp_KX7BR35A9H5MJ4EMGWBK?_encoding=UTF8&psc=1

## Software:

* SensiML.
  * https://sensiml.com/
* Data capture lab.
  * https://sensiml.com/products/data-capture-lab/
* Python.
  * https://www.python.org/
* ReactJS.
  * https://reactjs.org/
* Raspberry Pi OS.
  * https://www.raspberrypi.org/software/
* Qorc SDK.
  * https://github.com/QuickLogic-Corp/qorc-sdk/
* Zephyr RTOS.
  * https://www.zephyrproject.org/

## Services:

* Docker.
  * https://www.docker.com/
* AWS IoT.
  * https://aws.amazon.com/iot/
* AWS S3.
  * https://aws.amazon.com/s3/
* Simple-Streaming-Gateway
  * https://sensiml.com/documentation/simple-streaming-specification/simple-wifi-streaming.html

# Connection Diagram:

# Dev Environment Setup:

# QuickFeather Burner v1 (Flasher):

# Capture Data:

Data:
https://www.biodiversidad.gob.mx/cienciaciudadana/cantos_aves_cdmx

## Setup Quickfeather:

## Capturing Data:

## Labeling Data:

# SensiML:

# Testing Model:

# ESP32 Interface:

# Simple-Streaming-Gateway:

## Hardware:

## SSG to AWS IoT:

# WebPage Deploy:

## AWS Cognito:

## AWS IoT WebSocket:

# Final Product:

# EPIC DEMO:
