const router=require("express").Router();
let User=require("../models/user.model");
// const newUser=[];
router.route("/").get((req,res)=> {
    User.find()
    //res.render("home");
    .then(users => res.json(users))
    .catch(err =>res.status(400).json("Error" + err));
});

router.route("/add").post((req,res) =>{
       const userName= req.body.userName;
    const email=req.body.email;
    const password=req.body.password;
    const newUser=new User({userName,
                           email,
                           password
                          });
    newUser.save()
    .then(()=>res.json("user added"))
    .catch(err =>res.status(400).json("error" + err));
});
module.exports = router;
//   User.findOrCreate({
//     googleId: profile.id
//   }, function(err, user) {
//     return cb(err, user);
//   });
// }