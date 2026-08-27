import type { ClientLiberty, LapseFlag, SessionState, StateChange } from './types';

export const initialState: SessionState = {
  rights_record: 0,
  client_liberty: 'in_custody',
  flags: [],
  currentBeat: 'chambers',
};

export function applyStateChanges(
  state: SessionState,
  changes: StateChange[],
): SessionState {
  return changes.reduce((next, change) => {
    switch (change.type) {
      case 'increment_rights':
        return {
          ...next,
          rights_record: next.rights_record + Number(change.value),
        };
      case 'set_liberty':
        return {
          ...next,
          client_liberty: change.value as ClientLiberty,
        };
      case 'add_flag': {
        const flag = change.value as LapseFlag;
        return { ...next, flags: [...next.flags, flag] };
      }
      default:
        return next;
    }
  }, { ...state, flags: [...state.flags] });
}

export function hasStrongRecord(state: SessionState): boolean {
  return state.rights_record >= 2;
}
