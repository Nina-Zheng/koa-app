const koa = require("koa");
const mysql = require('./mysql');
const config = require('./config/default');

const app = new koa();

app.use(async (ctx)=>{
    let data = await mysql.query();
    ctx.body ={
        "code":1,
        "data":data,
        "mesg":'ok'
    }
});

app.listen(config.port);
console.log(`listening on port ${config.port}`);