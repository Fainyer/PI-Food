const { Router } = require('express');
const axios = require('axios');
const { Recipe, Diet } = require('../db');

const router = Router();

 router.get('/', async (req, res) => {

    let getDiet = [
        "gluten free",
        "ketogenic",
        "lacto ovo vegetarian",
        "vegan",
        "pescatarian",
        "dairy free",
        "primal",
        "whole 30",
    ]


    getDiet.forEach(e => {
        Diet.findOrCreate({ where: { name: e } })
    });
    const allDiet = await Diet.findAll()
    res.status(200).send(allDiet)
})





module.exports = router;