[![Maintainability](https://api.codeclimate.com/v1/badges/3a6aaf6ecbae5678d3d1/maintainability)](https://codeclimate.com/github/antonkrupin/antonkrupin.github.io/maintainability)
# Application for fethcing films premiers on kinopoisk.ru

This application use [Kinopoisk Api Unofficial](https://kinopoiskapiunofficial.tech/).

In application you can load film premiers on kinopoisk.ru - for this choose month and year. When films are loaded you can like, delete, filter favourite films. Also you can "like" use "Enter" button, for delete use "Delete" button.

## To start use application:

Reg on [Kinopoisk Api Unofficial](https://kinopoiskapiunofficial.tech/) to get individual 'X-API-KEY'.
By default you can use my own 'X-API-KEY'.

Clone repository to your PC, then run: 

### `npm install`

to install application with all dependencys

find routes.js in src folder of project and paste your individual 'X-API-KEY' in const headers.

### `npm start`

to start application on localhost:3000

You can get films premiers by choosing mounth and year.

Deployed application - [antonkrupin-github-io.vercel.app](https://antonkrupin-github-io.vercel.app/)

### Application start page
![Application start page](https://github.com/antonkrupin/antonkrupin.github.io/raw/master/screenshots/1.jpg)
### After loading films
![After loading films](https://github.com/antonkrupin/antonkrupin.github.io/raw/master/screenshots/2.jpg)
### Mark liked films
![Mark liked films](https://github.com/antonkrupin/antonkrupin.github.io/raw/master/screenshots/3.jpg)
### Liked films filter
![Liked films filter](https://github.com/antonkrupin/antonkrupin.github.io/raw/master/screenshots/4.jpg)
