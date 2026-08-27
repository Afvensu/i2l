import type { SessionState } from './types';

export type EndingId = 'E-01' | 'E-02' | 'E-03';

/** Implements the source-defined ending logic. */
export function resolveEnding(
  state: SessionState,
  dp04Choice: string,
): EndingId {
  if (dp04Choice === 'D') return 'E-03';
  if (state.flags.length === 0 && dp04Choice === 'B') return 'E-01';
  return 'E-02';
}
