import { BaseId } from "../../shared/model/base-id.model";

export interface CheckIn extends BaseId {
  idRehearsal: string;
  name: string;
  email: string;
}
