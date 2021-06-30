import mongoose from 'mongoose';

mongoose.connect('mongodb://satoru:234234@localhost:27017/experts-club-typegraphql?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
