const logout = (req, res)=>{

    try {

        // console.log(req.cookies)
        // res.clearCookie("token")
        // res.cookie("token", "",{
        //     expiresIn: new Date(0)
        // })
        // console.log(res.cookies)
        // console.log(new Date())

        return res.status(200).json({token:''})
        
        
        

    } catch (error) {
        return res.status(500).json({error:error.message, status:500})
    }

};

module.exports = logout;