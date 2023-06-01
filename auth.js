

const jwt = require('jsonwebtoken');

const auth = (req,res,next)=>{
    try {
        const token = req.header("Authorization");
        if(!token){
            return res.status(400).json({msg:'Invalid Authorization'})
        }
        jwt.verify(token,process.env.TOKEN_SECRET,(err,user)=>{
            if(err){
                return res.status(400).json({})
            }
            req.user = user ;
            next();
        })
    } 
    catch (error) {
        return res.status(400).json({msg:error.message})
    }
}

module.exports = auth;