import { StudentsCollection } from '../db/models/student.js';

export const getAllStudents = async () => {
  const students = await StudentsCollection.find();
  return students;
};

export const getStudentById = async (studentId) => {
  const student = await StudentsCollection.findById(studentId);
  return student;
};

export const createStudent = async (paylod) => {
  const student = await StudentsCollection.create(paylod);
  return student;
};

export const deleteStudent = async (studentId) => {
  const student = await StudentsCollection.findOneAndDelete({
    _id: studentId,
  });
  return student;
};

// export const updateStudent = async (studentId, payload, options = {}) => {
//   const rawResult = await StudentsCollection.findOneAndUpdate(
//     { _id: studentId },
//     payload,
//     {
//       new: true,
//       includeResultMetadata: true,
//       ...options,
//     },
//   );

//   if (!rawResult || !rawResult.value) return null;
//   return {
//     student: rawResult.value,
//     isNew: Boolean(rawResult?.lastErrorObject?.upserted),
//   };
// };

export const updateStudent = async (studentId, payload, options = {}) => {
  const student = await StudentsCollection.findOneAndUpdate(
    { _id: studentId },
    payload,
    { new: true, ...options },
  );

  if (!student) return null;

  return {
    student,
    isNew: Boolean(options.upsert),
  };
};
