import mongoose from 'mongoose';
import environment from '../../config/environment';

mongoose.connect(environment.uri);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to MongoDB database!')
});

export default mongoose;
