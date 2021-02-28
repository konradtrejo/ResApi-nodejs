import mongoose from 'mongoose';
import config from './config';

(async () => {
   const db = await mongoose.connect(config.mongodb_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true });
   console.log("conexion a la db: ",db.connection.name);
})();

