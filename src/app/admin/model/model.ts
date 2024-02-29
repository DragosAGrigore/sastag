export interface UserCredentials {
  email: string;
  password: string;
}

export interface User {
  _id: string,
  name: string,
  admin: boolean,
  gender: boolean,
  email: string,
  password: string,
  createDate?: Date
}
