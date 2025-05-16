import chalk from 'chalk';
import express from 'express';
import debug from 'debug';
import morgan from 'morgan';
const app = express();
const port = 2000;

app.use(morgan('combined'));
app.get('/',(req,res)=>{
    res.send('Hello world');
});
app.listen(port,()=>{
    console.log("Lisetening On port %d",chalk.red(" : "+port));
})