// const emailSend = require("../utility/sendMail");
// const sendSms = require("../utility/sendSMS");

/**
 * 
 * create User
 */

// const createUser = (req, res)=> {

//     const { name, email, pass, cell, skill} = req.body;

//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(pass, salt)

//     //bcrypt comare
//     // console.log(bcrypt.compareSync(req.body.pass, '$2a$10$sLOrLqgcBPK7iow64GGTJO.I0GZ0RtcJjmS4qECTwKyMCRfNG.aL.'));

//     const token = jwt.sign({ name, email, pass, cell, skill }, process.env.JWT_SECRET, {
//         expiresIn : '60s'
//     });

//     // const token_verify = jwt.verify('', process.env.JWT_SECRET)

//     // console.log(token_verify);

//    res.cookie('authToken', token, {
//     expires: new Date( Date.now() + (1000*60) )
//    }).json({
//     token : token,
//     pass : hash
//    }) 

// }

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

//Register user
const registerUser = async (req, res) => {
    
   const { name, email, gender, password } = req.body;


   try {

    const isExists = await User.find().where('email').equals(email);

    if (isExists.length> 0) {
         res.status(400).json({
             error : `Email already exists!`
         })
    }

    if (isExists.length === 0) {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync( password, salt);
    
        await User.create({ name, email, gender, password : hash });
    
        res.json({
            message : `User register usccessfully`
        })
        
    }


    
   } catch (error) {
        res.json({
            error : error.message
        })
   }
  

}



//Register user
const loginUser = async ( req, res ) => { 

    //get login form data 
    const { auth, password} = req.body;

    try {

        //Check user
        const userLogin = await User.find().where('email').equals(auth);
        
            if ( userLogin.length == 0 ) {

                res.status(404).json({
                    error : `User not found!`
                });
                
            }

            if ( userLogin.length > 0 ) {
                
                        //Check password
                        const userPass = bcrypt.compareSync( password, userLogin[0].password );

                        if(!userPass){

                            res.status(404).json({
                                error : `Password not match!`
                            });
                        }

                        //Login now
                        if(userPass){

                            const token = jwt.sign( {
                                id : userLogin[0]._id

                            }, process.env.JWT_SECRET, {
                                expiresIn : '365d'
                            });

                            res.status(200).cookie('authToken', token ).json({
                                message : "User login successful",
                                token : token
                            });


                        }
            }

        
    } catch (error) {
        
        res.status(400).json({
            error : error.message
        });

    }


}



/***
 * User Loggedin
 */
const loggedInUser = async (req, res) => {

    try {

        //Get token from cookie memory
        const token = req.cookies.authToken
        
        if (!token) {
            res.status(400).json({
                error : "You are not authorized!"
            });  
            
        }

        //Verify token
        const token_verify = jwt.verify(token, process.env.JWT_SECRET);
        
        if (token_verify) {

            const user = await User.findById(token_verify.id).select('-password');
            
            res.status(200).json({
                user : user
            })
        }

        
    } catch (error) {
        res.status(400).json({
            error : error.message
        });
    }

}

//Export module
module.exports = {
    registerUser,
    loginUser,
    loggedInUser
}
