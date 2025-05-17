import express from 'express';
import chalk from 'chalk';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import productRouter from './src/router/productsRouter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 4000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './public/')));
app.set('views', path.join(__dirname, 'src/view'));
app.set('view engine', 'ejs');

app.use('/products', productRouter);

app.get('/', (req, res) => {
  res.render('index', {
    username: 'ManowMoosub',
    customer: ['Manow', 'Moosub', 'Padped']
  });
});

app.listen(port, () => {
  console.log(chalk.green(`🚀 Server is listening on port ${port}`));
});
