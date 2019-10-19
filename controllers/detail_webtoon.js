const models = require('../models')
const DetailWebtoon = models.detail_webtoons

//GET SEMUA EPISODE WEBTOON TERTENTU
exports.showEpisode = (req, res) => {
    DetailWebtoon.findAll({where:{webtoon_id: req.params.id}}).then(result=> res.send(result))
}


//TAB MY PROFILE
//CREATE MY EPISODE
exports.storeMyEpisode = (req, res) => {
    const {image, title} = req.body;
    DetailWebtoon.create({
        webtoon_id: req.params.webtoon_id,
        title,
        image
    }).then(result => res.send(result));
}

//UPDATE MY EPISODE
exports.updateMyEpisode = (req, res) => {
    const {image, title} = req.body;
    DetailWebtoon.update({
        title,
        image
    },
    {
        where: {id: req.params.episode_id}
    }).then(res.send({...req.body}));
}

//DELETE MY EPISODE
exports.deleteMyEpisode = (req, res) => {
    const {episode_id} = req.params;
    DetailWebtoon.destroy({where: {id: episode_id}}).then(result => res.send({
        ...req.body
    }));
}