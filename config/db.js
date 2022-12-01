
// password
 // CT8iAzdjZmroft49

//  const mongoose = require('mongoose');


// const mongoDBConnection = async () => {

//     try {

//         const connect = await mongoose.connect(process.env.MONGO_URI)

//         console.log(`MongoDB connected successfully`.bgCyan.black);

        
//     } catch (error) {
//         console.log(`${error.message}`.bgRed.black);
//     }
// }
 
//  module.exports = mongoDBConnection;

const mongoose = require('mongoose');


const mongoDBConnection = async () => {

    try {

        const connect = await mongoose.connect(process.env.MONGO_URI);
        
        console.log(`MongoDB connected successfully`.bgCyan.black);    

    } catch (error) {
        console.log(`${error.message}`.bgRed.black);
    }

}

//Exports connection 
module.exports = mongoDBConnection;