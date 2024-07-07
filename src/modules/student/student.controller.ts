import { studentServices } from './student.service';
import { Request, Response } from 'express';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await studentServices.createStudentIntoDb(studentData);

    // send response
    res.status(200).json({
      success: true,
      message: 'student created successfully',
      data: result,
    });
  } catch (error) {
    // send error response
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const studentControllers = {
  createStudent,
};
