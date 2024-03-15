import { Mongoose } from 'mongoose';
import { permissionSchema } from './schemas/permission.schema';
import { Provider } from '@nestjs/common';

export const providers: Provider[] = [
  {
    provide: 'Permission_MODEL',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('Permission', permissionSchema),
    inject: ['DB_CONNECTION'],
  },
];
