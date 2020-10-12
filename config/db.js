const MongoClient = require('mongodb').MongoClient

const config = require('config');

const MongoUrl = config.get('mongoURI');

module.exports={
    dbConn:function(){
        return new Promise((resolve,reject) => {
            MongoClient.connect(MongoUrl,{ useUnifiedTopology: true },(error,db) => {
                if(error) reject(error)
                const dbc = db.db("feedback_db")
                resolve(dbc)
            })
        })
    }
}