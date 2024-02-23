import { Mongoose } from 'mongoose';
import { userSchema } from './schemas/user.schema';
import { Provider } from '@nestjs/common';

export const providers: Provider[] = [
  {
    provide: 'USER_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('User', userSchema),
    inject: ['DB_CONNECTION'],
  },
];
