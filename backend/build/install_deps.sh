#!/bin/bash
set -e

echo "Upgrading pip and setuptools..."
pip install --upgrade pip setuptools

echo "Installing dependencies from requirements.txt..."
pip install -r requirements.txt
