import mongoose from 'mongoose';

export const providers = [
  {
    provide: 'DB_CONNECTION',
    useFactory: async (): Promise<any> => {
      return await mongoose.connect('mongodb://mongodb:27017/test');
    },
  },
];
