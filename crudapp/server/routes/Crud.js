import express from 'express';
import {createData, getData, editData} from '../controllers/Crud.js'

const router = express.Router();

router.post('/create', createData);
router.get('/getData', getData);
router.patch('/edit/:id', editData);

export default router;