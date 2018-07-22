#!/bin/bash

docker run --name website \
    -d \
    -p 8080:8080 \
    ashwinath/personal-website-3:latest
sleep 2
curl -f localhost:8080
docker stop website
