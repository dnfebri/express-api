var express = require('express');
var router = express.Router();
// const { body, validationResult } = require('express-validator');
const Validator = require("fastest-validator");
const v = new Validator();

const {Produck} = require('../models');     // memanggil model

// Menampilkan semua isi tael
router.get('/', async ( req, res ) => {
    const produck = await Produck.findAll();
    res.json(produck);
});

// Mencari produk berdasarkan id
router.get('/:id', async ( req, res ) => {
    const id = req.params.id;
    const produck = await Produck.findByPk(id);
    res.json(produck);
});

// Menambah Produk
router.post('/add', async (req, res) => {
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

// Update Produk
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    // res.send(id);

    let produck = await Produck.findByPk(id);

    if (!produck) {
        return res.json({massage: 'Product Not Font'});
    }

    // res.send('oke');
    // res.json(produck);

    const schema = {
        name: 'string|optional',
        brand: 'string|optional',
        description: 'string|optional'
    }

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(400).json(validate);
    }
    
    await Produck.update(req.body, {where: {id}});

    produck = await Produck.findByPk(id);

    // console.log(produck);
    res.json(produck);

});

router.delete('/:id', async( req, res ) => {
    const id = req.params.id;

    let produck = await Produck.findByPk(id);

    if (!produck) {
        return res.json({massage: 'Product Not Font'});
    }

    await Produck.destroy({where: {id}});

    res.json({
        message: 'Produk berhasil di hapus'
    });
});


module.exports = router;
