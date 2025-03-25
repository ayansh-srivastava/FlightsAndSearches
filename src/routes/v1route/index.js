const express=require('express');
const router=express.Router();
const cityController=require(`../../controllers/cityController`);
const flightController=require(`../../controllers/flightController`)

router.post(`/city`,cityController.create);
router.get(`/city/:id`,cityController.get);
router.get(`/city/airports/:id`,cityController.airport);
router.delete(`/city/:id`,cityController.destroy);
router.patch(`/city/:id`,cityController.update);
router.post(`/flights`,flightController.create)
router.get(`/flights/:id`,flightController.getone)
router.patch(`/flights/:id`,flightController.update)
router.delete(`/flights/:id`,flightController.destroy)
router.get(`/flights`,flightController.getAll)

router.get('/city',cityController.getAll)
module.exports=router;