import express from 'express';
import { findStudent,createStudent } from '../controllers/fstController.mjs';
const router = express.Router();

router.get('/findstudent',findStudent);
router.post('/addstudent',createStudent);

export default router;