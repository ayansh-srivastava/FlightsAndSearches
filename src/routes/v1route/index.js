const express=require('express');
const router=express.Router();
const cityController=require(`../../controllers/cityController`);
router.post(`/city`,cityController.create);
router.get(`/city/:id`,cityController.get);
router.delete(`/city/:id`,cityController.destroy);
router.patch(`/city/:id`,cityController.update);

module.exports=router;