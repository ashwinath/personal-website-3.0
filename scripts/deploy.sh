#!/bin/bash

ssh -o "StrictHostKeyChecking no" travis@ashwinchat.com -t "docker pull ashwinath/personal-website-3 && docker stop website && docker rm website && docker run --name website -d -p 8080:8080 ashwinath/personal-website-3 && docker image prune -f"
