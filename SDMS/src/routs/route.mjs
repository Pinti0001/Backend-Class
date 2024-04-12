import express from 'express';
import { findStudent,createStudent,deleteStudent,updateStudent, searchStudent } from '../controllers/studentController.mjs';
const router = express.Router();

router.get('/students',findStudent);
router.post('/addstudents',createStudent);
router.delete('/deletestd', deleteStudent);
router.post('/updatestudents',updateStudent);

router.get('/search',searchStudent)

export default router;
