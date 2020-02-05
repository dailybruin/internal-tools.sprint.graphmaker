FROM python:3

WORKDIR /usr/src/graph_maker

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1


# Copy at end means it'll reuse cached images
COPY . .


EXPOSE 3000

