export type ClientLiberty =
  | 'in_custody'
  | 'released_administrative'
  | 'released_self_recognizance';

export interface LapseFlag {
  screen: string;
  lapse: string;
}

export interface SessionState {
  rights_record: number;
  client_liberty: ClientLiberty;
  flags: LapseFlag[];
  currentBeat: string;
}

export interface StateChange {
  type: 'increment_rights' | 'set_liberty' | 'add_flag';
  value: number | ClientLiberty | LapseFlag;
}

export interface DecisionOption {
  id: string;
  label: string;
  stateChanges: StateChange[];
  consequence: string;
  feedback: string;
  lapse?: string;
}

export interface Scene {
  id: string;
  situation: string;
  information: string[];
  options: DecisionOption[];
}
