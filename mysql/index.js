const mysql = require('mysql');
const config = require('../config/default.js');

const pool = mysql.createPool({
    host : config.datebase.HOST,
    user : config.datebase.USERNAME,
    password : config.datebase.PASSWORD,
    database : config.datebase.DATABASE
});

class Mysql{
    constructor(){}
    query(){
        return new Promise((resolve,reject) =>{
            pool.query('SELECT * FROM tb_area',function(error,result,fields){
                if(error){
                    throw error
                };
                resolve(result);
            });
        });
    }
}

module.exports = new Mysql()