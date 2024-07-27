const router=require("express").Router();
const User=require("../Models/user");
const bcrypt=require("bcryptjs");

//sign up
router.post("/register",async(req,res)=>{
    try {
        const {email,username,password}=req.body;
       const hashpassword=bcrypt.hashSync(password);

        const user=new User({email,username,password:hashpassword});
        await user.save().then(()=>
            res.status(200).json({message:"Sign Up Successful"}));
        
    } catch (error) {
        res.status(200).json({message:"User Already Exists"});
    }
});
//sign in
router.post("/signin",async(req,res)=>{
    try {
        const user=await User.findOne({email:req.body.email});
        if(!user){
                return  res.status(200).json({message:"Please Sign Up First"});
        }
        const isPassWordCorrect=bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if(!isPassWordCorrect){
            return res.status(200).json({message:"Password Is Not Correct"});
        }
        const {password,...others}=user._doc;
       return res.status(200).json({others});
    } catch (error) {
       return res.status(200).json({message: "Internal Server Error" });
    }
});    

module.exports=router;