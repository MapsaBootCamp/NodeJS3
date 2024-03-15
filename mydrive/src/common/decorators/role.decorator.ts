import { SetMetadata } from '@nestjs/common';
import { Role as IRole } from 'src/user/schemas/user.schema';
import { ROLES_KEY } from '../constants/auth.constant';

export const Role = (...roles: IRole[]) => SetMetadata(ROLES_KEY, roles);
