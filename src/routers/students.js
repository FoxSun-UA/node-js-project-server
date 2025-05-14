import { Router } from 'express';
import {
  getStudentsController,
  getStudentByIdController,
  createStudentController,
  deleteStudentController,
  upsertStudentController,
  patchStudentController,
} from '../controllers/students.js';
import { ctrlWrapper } from '../units/ctrlWrapper.js';

const router = Router();

router.get('/students', ctrlWrapper(getStudentsController));
router.get('/students/:studentId', ctrlWrapper(getStudentByIdController));
router.post('/students', ctrlWrapper(createStudentController));
router.delete('/students/:studentId', ctrlWrapper(deleteStudentController));
router.put('/students/:studentId', ctrlWrapper(upsertStudentController));
router.patch('/students/:studentId', ctrlWrapper(patchStudentController));

export default router;

// router.get('/students', async (req, res) => {
//   const students = await getAllStudents();

//   res.status(200).json({
//     data: students,
//   });
// });

// router.get('/students/:studentId', async (req, res, next) => {
//   const { studentId } = req.params;
//   const student = await getStudentById(studentId);

//   // Відповідь, якщо контакт не знайдено
//   if (!student) {
//     res.status(404).json({
//       message: 'Student not found',
//     });
//     return;
//   }

//   // Відповідь, якщо контакт знайдено
//   res.status(200).json({
//     data: student,
//   });
// });
