var express = require('express');
var router = express.Router();
// const { body, validationResult } = require('express-validator');
const Validator = require("fastest-validator");
const v = new Validator();

const {Produck} = require('../models');     // memanggil model

router.post('/', async (req, res) => {
    // res.send('ini adalah post');
    const schema = {
        name: 'string',
        brand: 'string',
        description: 'string|optional'
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(400).json(validate);
    }

    // res.send('oke');
    const produck = await Produck.create(req.body);

    res.json(produck);
});

module.exports = router;
