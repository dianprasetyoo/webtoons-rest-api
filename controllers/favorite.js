const models = require('../models')
const Favorite = models.favorites

//TAB Favorite
//Get Semua Webtoon Favorite
exports.getFavorite = (req, res) => {
    const favorite = req.query.isFavorite;
    const user = req.params.id
    
    if (favorite == 'true') {
        Favorite.findAll({
            where: {isFavorite: 1, user_id: user},
    }).then(Favorite => res.send(Favorite));
    } else {
        Favorite.findAll({
            where: {isFavorite: 0, user_id: user},
        }).then(Favorite => res.send(Favorite));;
    }
}