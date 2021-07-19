import express from 'express';
import { db, user } from './utils/database.js'

const app = express();

db.sync()
  .then(() => {
    app.listen(3600, () => {
      console.log('App is running on port 3600');
    });
  })
  .catch((error) => {
    console.log(error);
  });
