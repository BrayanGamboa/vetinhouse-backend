import mongoose from 'mongoose';
import environment from '../../config/environment';

mongoose.connect(environment.uri);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // eslint-disable-next-line
  console.log('connected to MongoDB database!')
});

export default mongoose;
