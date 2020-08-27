const express=require('express');
const router=express.Router();
router.get('/',(req,res)=>{
    res.send('We are on Posts')
});
router.get('/specific',(req,res)=>{
    res.send('We are on Specific  Post')
});
module.exports=router;