/*import chalk from 'chalk';
import express from 'express';
import debug from 'debug';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.Port || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));
//app.set("view","./src/view/index.ejs");
app.set("view", path.join(__dirname, "src/view"));
app.set("view engine","ejs");
app.get('/',(req,res)=>{
    res.render('index',{username:'ManowMoosub'});
});
app.listen(port,()=>{
    console.log(chalk.green(`Listening on port: ${port}`));
})*/
import chalk from 'chalk';
import express from 'express';
import debug from 'debug';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.Port || 4000;
const productRouter = express.Router();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));
app.use("/products", productRouter)
app.set("views", path.join(__dirname, "src/view"));
app.set("view engine", "ejs");
productRouter.route("/").get((req, res) => {
    res.send("Hello this is Product ");
});
productRouter.route("/1").get((req, res) => {
    res.send("Hello this is Product 1");
});

app.get('/', (req, res) => {
    res.render('index', { username: 'ManowMoosub', customer: ['Manow', 'Moosub', 'Padped'] });
});

app.listen(port, () => {
    console.log(chalk.green(`Listening on port: ${port}`));
});
