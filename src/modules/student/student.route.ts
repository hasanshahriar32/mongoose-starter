import express from 'express';
import { studentControllers } from './student.controller';
const router = express.Router();

// will call controller function
router.post('/create-student', studentControllers.createStudent);

// as router is itself a object, so we don't need to pass in object form to studentRouter
export const studentRouter = router;
