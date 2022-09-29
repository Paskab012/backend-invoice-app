import express from 'express';
import configure from './src/routes';

const { sequelize } = require('./src/sequelize/models');
const app = express();
const port = process.env.PORT || 3000;

configure(app);

const connectDb = async () => {
  console.log('Checking database connection...');
  try {
    await sequelize.authenticate();
    console.log('Database connection established.');
  } catch (e) {
    console.log('Database connection failed', e);
    process.exit(1);
  }
};

(async () => {
  await connectDb();

  console.log(`Attempting to run server on port ${port}`);

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
})();
