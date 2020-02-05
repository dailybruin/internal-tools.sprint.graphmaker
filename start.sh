#!/bin/sh

python3 graph_maker/manage.py migrate 
python3 graph_maker/manage.py runserver 0.0.0.0:3000
