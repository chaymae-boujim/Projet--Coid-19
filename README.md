# Projet-Covid19
App Web permet de visualiser data du Covid19, Equipe de : -Amine EL ALAOUI -CHAYMAE BOUJIM -OUSSAMA MERROUN
# comment lancer l'image de notre app
#### lancer docker
#### docker run -d -p 3000:3000 covidimage
# comment dockeriser une application reactjs
## 1)Creer le fichier Dockerfile dans le dossier du projet:
          FROM node:alpine
          WORKDIR '/app'
          COPY package.json
          RUN npm install
          COPY . .
          CMD ["npm","start"]
## 2) build image:(sur votre cmd)
          cd (chemin du dossier de projet)
          docker build . -t nomimage
          docker image ls
          docker run -d -p 3000:3000 nomimage
## 3)creer un compte sur dockerHub
          creer repository
          sur cmd : creer un tag de votre image
          docker tag id username/nomimage
          docker push tag
       
