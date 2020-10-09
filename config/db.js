const MongoClient = require('mongodb').MongoClient

const config = require('config');

const MongoUrl = config.get('mongoURI');

// const connectDB = async () => {
//     try {
//         return await MongoClient.connect(db, { 
//             useUnifiedTopology: true,
//             useNewUrlParser: true,
//             useCreateIndex: true,
//             useFindAndModify: false
//         });
        
//         console.group('MongoDB conected !');
//     } catch (err) {
//         console.error(err.message);
//         // Exit process with failure
//         process.exit(1);
//     }
// }

// module.exports = connectDB;

module.exports={
    dbConn:function(){
        return new Promise((resolve,reject) => {
            MongoClient.connect(MongoUrl,{ useUnifiedTopology: true },(error,db) => {
                if(error) reject(error)
                const dbc = db.db("formdata")
                resolve(dbc)
            })
        })
    }
}