import express from 'express';
import { findStudent,createStudent,deleteStudent,updateStudent } from '../controllers/studentController.mjs';
const router = express.Router();

router.get('/students',findStudent);
router.post('/addstudents',createStudent);
router.delete('/deletestd', deleteStudent);
router.post('/updatestudents',updateStudent)

export default router;
