const mongoose = require('mongoose');

const connectToDB = (mongodburl) => {
    try{
        mongoose.connect(mongodburl)
        .then(data=>{
            // console.log({data});
            return data;
        })
        .catch(error=>{
            console.log(error);
            process.exit(1);
        });
    }catch(err){
        console.log(err);
        process.exit(1);
    };
};

module.exports = connectToDB;