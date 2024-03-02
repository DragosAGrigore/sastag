import { SpectaclePair } from "./spectacle-pair.model";
import { BaseId } from "../../shared/model/base-id.model";

export interface Spectacle extends BaseId {
  name: string;
  pairs: Array<SpectaclePair>
  isOpen: boolean;
  issuer: string;
  startTime: Date;
  endTime: Date;
}
