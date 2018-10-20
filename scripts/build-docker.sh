#!/bin/bash

yarn build --production
docker build -t ashwinath/personal-website-3 $* .
