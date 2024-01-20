export enum Role {
  User = "USER",
  Staff = "STAFF",
  Superuser = "SUPERUSER",
}

export interface IUser {
  email: string;
  password: string;
  phoneNumber: string;
  birthDate?: Date;
  verifiedEmail: boolean;
  active: boolean;
  role: Role;
}
