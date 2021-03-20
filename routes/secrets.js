const router=require("epress").Router();
let Secret=require("../models/secret.model");
router.route("/").get((req,res)=>{
    Secret.find()
    .then(secrets=>res.json(secrets))
    .catch(err=>res.status(400).json("Error:"+err));
});
router.route("/add").post((req,res)=>{
    const submittedSecret=req.body.secret;
    const newSecret=new Secret({
        submittedSecret
    });

newSecret.save()

.then(()=>res.json("Your secret has been submitted sucessfully!!!"))
.catch(err =>res.status(400).json("Error"+err));
});
module.exports = router;
