const models = require('../models')
const Favorite = models.favorites
const webtoons = models.webtoons

//TAB Favorite
//Get Semua Webtoon Favorite
exports.getFavorite = (req, res) => {
    const favorite = req.query.isFavorite;
    const user = req.params.id
    
    if (favorite == 'true') {
        Favorite.findAll({
            where: {isFavorite: 1, user_id: user},
            include: [{
                model: webtoons,
                as: 'webtoonID',
                attributes: ['image'],
            },
            ],
    }).then(Favorite => res.send(Favorite));
    } else {
        Favorite.findAll({
            where: {isFavorite: 0, user_id: user},
        }).then(Favorite => res.send(Favorite));;
    }
}

//Add Favorite
exports.storeFavorite = (req, res) => {
    const {isFavorite} = req.body;
    Favorite.create({
        webtoon_id: req.params.webtoon_id,
        user_id: req.params.user_id,
        isFavorite
    }).then(result => res.send(result));
}
