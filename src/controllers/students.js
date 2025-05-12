import { getAllStudents, getStudentById } from '../services/students.js';
import createHttpError from 'http-errors';

export const getStudentsController = async (req, res, next) => {
  try {
    const students = await getAllStudents();
    res.status(200).json({
      status: 200,
      message: 'Successfully found students!',
      data: students,
    });
  } catch (err) {
    next(err);
  }
};

export const getStudentByIdController = async (req, res, next) => {
  const { studentId } = req.params;
  const student = await getStudentById(studentId);

  // Відповідь, якщо контакт не знайдено
  //   if (!student) {
  //     res.status(404).json({
  //       message: 'Student not found',
  //     });
  //     return;
  //   }

  // Відповідь, якщо контакт не знайдено
  if (!student) {
    throw createHttpError(404, 'Student not found');
    // next(new Error('Student not found'));
    // return;
  }

  // Відповідь, якщо контакт знайдено

  res.json({
    status: 200,
    message: `Successfully found student with id ${studentId}!`,
    data: student,
  });

  // res.status(200).json({
  //   data: student,
  // });
};
