const express = require('express');
const router = express.Router();

const nftCtrl = require('../controllers/nft');

router.get('/', nftCtrl.getAll);
router.get('/:id', nftCtrl.getOneNft);
router.post('/', nftCtrl.createNft);
router.put('/:id', nftCtrl.modifyNft);
router.delete('/:id', nftCtrl.deleteNft);



module.exports = router;