#!/bin/bash

docker run --name website \
    -d \
    -p 8080:8080 \
    ashwinath/personal-website-3:latest
curl -f localhost:8080
docker stop website
