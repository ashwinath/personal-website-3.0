#!/bin/bash

cd frontend;
yarn;
yarn build;
cp -r build ../build/public;
cd ..
