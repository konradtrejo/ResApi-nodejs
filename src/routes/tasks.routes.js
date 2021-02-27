import {Router} from 'express';
const router = Router();
router.get('/tasks', (req, res)=>{
    res.send('Task');

});
export default router;
