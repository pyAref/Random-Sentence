const random_sentence = require('./json/sentence.json');
const { Router } = require('express');

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
    var key, count = 0;

    for (key in random_sentence.data) {
        if (random_sentence.data.hasOwnProperty(key)) {
            count++;
        }
    }

    var random_person = random_sentence.data[Math.floor(Math.random() * count)];

    res.render('index', {
        card_data: random_person
    });
});

module.exports = { indexRouter };