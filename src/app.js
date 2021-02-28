import express from 'express';
import SingerRoutes from './routes/Singers.routes';
const app = express();

app.set('port', process.env.PORT || 3000);

console.log(process.env.PORT);
app.get('/', (req,res)=>{
    res.json({message: 'Welcome to my application'});
});
app.use("/api/singers", SingerRoutes);

export default app; 