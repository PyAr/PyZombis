# ==== CONFIGURE =====
# Use a Alpine base image
FROM python:3.9-buster 

WORKDIR /var/www/

COPY ./requirements.txt /var/www/

RUN pip install -r requirements.txt

COPY . /var/www/

RUN runestone build

EXPOSE 4000

CMD ["runestone", "serve", "--port", "4000" ]