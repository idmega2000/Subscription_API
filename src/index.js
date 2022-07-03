import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import EnvData from './configs/EnvData';
import routes from './routes';
import { generalErrorHandler, notFoundHander } from './utilities/errorHandler';

dotenv.config();

const app = express();
app.use(cors());
const corsOptions = {
  // credentials: true,
  // methods: 'GET,PUT,PATCH,POST,DELETE',
  // origin: ['http://localhost:3000']
  // origin: '*'
};

app.use(morgan('dev'));

app.use(express.urlencoded({
  extended: false,
}));

app.use(express.json({
  limit: EnvData.MAX_FILE_SIZE
}));

app.use(routes);
app.use(cors(corsOptions));
app.use(notFoundHander);
app.use(generalErrorHandler);

/* eslint-disable-next-line */
app.listen(EnvData.PORT, () => console.log(`App Listening on port ${EnvData.PORT}`));
export default app;
