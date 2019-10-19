const express = require('express');
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express();
const port = 5000

//controllers
const AuthController = require('./controllers/auth')
const RegisterController = require('./controllers/register')
const WebtoonsController = require('./controllers/webtoon')
const DetailWebtoonsController = require('./controllers/detail_webtoon')
const DetailEpisodesController = require('./controllers/detail_episode')
const FavoriteController = require('./controllers/favorite')

//middlewares
const {authenticated} = require('./middleware');


app.use(bodyParser.json())




app.group("/api/v1", (router) => {

    //login
    router.post('/login', AuthController.login)

    //register
    router.post('/register', RegisterController.register)


    //TAB FOR YOU SCREEN
    //GET SEMUA WEBTOON
    router.get('/webtoon', WebtoonsController.index)

    //GET SEMUA WEBTOON FAVORITE
    router.get('/webtoon/favorite/', WebtoonsController.showFavorite)

    //SEARCH SEMUA WEBTOON BERDASARKAN TITLE
    router.get('/webtoon/title/:title', WebtoonsController.showTitle)

    //GET SEMUA EPISODE WEBTOON TERTENTU
    router.get('/webtoon/:id/episodes', DetailWebtoonsController.showEpisode)

    //GET SEMUA DETAIL EPISODE TERTENTU
    router.get('/webtoon/:id_webtoon/episode/:id_episode', DetailEpisodesController.showEpisodes)




    //TAB FAVORITE
    //Get Semua Webtoon Favorite
    router.get( '/favorite/:id', authenticated, FavoriteController.getFavorite)  //localhost:5000/api/v1/favorite/1?isFavorite=true

    //19. SEARCH SEMUA WEBTOON BERDASARKAN TITLE
    router.get('/webtoons', WebtoonsController.searchTitle) // localhost:5000/api/v1/webtoons?title=dice




    //TAB PROFILE SCREEN
    //GET SEMUA MY WEBTOON CREATION
    router.get('/user/:user_id/webtoon', authenticated, WebtoonsController.showMyCreation)
    
    //MY WEBTOON
    //CREATE MY WEBTOON
    router.post('/user/:user_id/webtoon', authenticated, WebtoonsController.storeMyWebtoon)
    //GET SEMUA EPISODE BERDASARKAN WEBTOON YANG TELAH TERBUAT
    router.get('/user/:user_id/webtoon/:webtoon_id/episode', authenticated, WebtoonsController.showMyWebtoon)
    //UPDATE MY WEBTOON
    router.patch('/user/:user_id/webtoon/:webtoon_id', authenticated, WebtoonsController.updateMyWebtoon)
    //DELETE MY WEBTOON
    router.delete('/user/:user_id/webtoon/:webtoon_id', authenticated, WebtoonsController.deleteMyWebtoon)

    //MY EPISODE
    //CREATE MY EPISODE
    router.post('/user/:user_id/webtoon/:webtoon_id/episode', authenticated, DetailWebtoonsController.storeMyEpisode)
    //UPDATE MY EPISODE
    router.patch('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id', authenticated, DetailWebtoonsController.updateMyEpisode)
    //DELETe MY EPISODE
    router.delete('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id', authenticated, DetailWebtoonsController.deleteMyEpisode)


    //MY DETAIL EPISODE
    //CREATE IMAGE FOR DETAIL EPISODE
    router.post('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id', authenticated, DetailEpisodesController.storeMyDetailEpisode)
    //DELETE IMAGE DETAIL EPISODE
    router.delete('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id/image/:image_id', authenticated, DetailEpisodesController.deleteMyDetailEpisode)

})

app.listen(port, ()=> console.log(`listen on port ${port}!`))