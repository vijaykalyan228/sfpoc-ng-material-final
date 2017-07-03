export interface CtlEthernet{
  locations: any[],
  type: type,
  bandwidth: bandwidth,
  geography: geography
  buildOut: boolean,
  reuse: boolean
}

const enum type{
  Evlan,Evplan
}

const enum bandwidth{
  "50 Mbps",
  "100 Mbps",
  "150 Mbps",
  "500 Mbps",
  "1 Gbps"
}

const enum geography{
  National, State, Metro
}
