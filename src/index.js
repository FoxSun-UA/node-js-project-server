import { initMongoDB } from './db/initMongoDB.js';
import { startServer } from './server.js';

const bootstrap = async () => {
  await initMongoDB();
  startServer();
};

bootstrap();

// import express from 'express';

// const PORT = 3500;
// const app = express();

// app.use((req, res, next) => {
//   console.log(`Tome: ${new Date().toLocaleString()}`);
//   next();
// });

// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello word',
//   });
// });

// app.use((err, req, res, next) => {
//   res.status(500).json({
//     message: 'Something went wrong',
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
//   console.log(`http://localhost:${PORT}`);
// });

// ===== // ===== // =====

// import express from 'express';
// import pino from 'pino-http';
// import cors from 'cors';

// const PORT = 3500;
// const app = express();

// app.use(
//   pino({
//     transport: {
//       target: 'pino-pretty',
//     },
//   }),
// );

// app.use(cors());

// app.use(express.json());

// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello world!',
//   });
// });

// app.use('', (req, res, next) => {
//   res.status(404).json({
//     message: 'Not found',
//   });
// });

// app.use((err, req, res, next) => {
//   res.status(500).json({
//     message: 'Something went wrong',
//     error: err.message,
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
//   console.log(`http://localhost:${PORT}`);
// });

// ===== // ===== // =====

// import express from 'express';

// const PORT = 3500;

// const app = express();

// app.use(express.json());
// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello World!',
//   });
// });

// app.use('', (req, res, next) => {
//   res.status(404).json({
//     message: 'Not found',
//   });
// });

// app.use((err, req, res, next) => {
//   res.status(500).json({
//     message: 'Something went wrong',
//     error: err.message,
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
