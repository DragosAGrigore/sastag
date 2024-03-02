import { BaseId } from "../../shared/model/base-id.model";

export interface Rehearsal extends BaseId {
  name: string;
  start: string;
  duration: string;
}
