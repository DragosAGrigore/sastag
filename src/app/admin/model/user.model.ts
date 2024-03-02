import { BaseId } from "../../shared/model/base-id.model";

export interface User extends BaseId {
  name: string,
  admin: boolean,
  gender: boolean,
  email: string,
  password: string,
}
