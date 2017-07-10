import { type, bandwidth, geography, term } from "../interfaces/ctl-ethernet.enums"

export interface CtlEthernet{
  locations: any[],
  type: type,
  bandwidth: bandwidth,
  geography: geography,
  term: term,
  buildOut: boolean,
  reuse: boolean
}
