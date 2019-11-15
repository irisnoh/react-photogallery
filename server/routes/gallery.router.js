const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// PUT Route to like each photo
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route to get galleryItems
router.get('/', (req, res) => {
    res.send(galleryItems);
}); // END GET Route

module.exports = router;