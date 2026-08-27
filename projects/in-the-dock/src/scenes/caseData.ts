import type { Scene } from '../simulation-engine/types';

export const scenes: Scene[] = [
  {
    id: 'dp-01-arrest',
    situation:
      'At Surulere Police Station, Emeka is held after officers said he looked suspicious. The source scenario provides no complainant, witness statement, matching description or warrant. Adaobi has 20 minutes before the duty sergeant leaves.',
    information: [
      'Arrest circumstances',
      'Police account',
      'Available case record',
      '20-minute professional time pressure',
    ],
    options: [
      {
        id: 'A',
        label: 'Investigate the arrest record before deciding what to do.',
        stateChanges: [],
        consequence: 'The immediate intervention window narrows while the record remains incomplete.',
        feedback: 'Investigation is useful, but the professional issue is whether the threshold for continued detention is already apparent.',
        lapse: 'Delayed decisive intervention on the arrest.',
      },
      {
        id: 'B',
        label: 'Avoid confrontation and focus first on interviewing Emeka.',
        stateChanges: [],
        consequence: 'The police position hardens while the arrest remains unchallenged.',
        feedback: 'Client interviewing matters, but it should not replace timely assertion of an apparent rights problem.',
        lapse: 'Failed to challenge the arrest promptly.',
      },
      {
        id: 'C',
        label: 'Assert that the reasonable-suspicion threshold has not been met and request release or charge.',
        stateChanges: [{ type: 'increment_rights', value: 1 }],
        consequence: 'The arrest is formally challenged and the rights record begins with a documented intervention.',
        feedback: 'This is the strongest response in the source scenario: act at the point where the apparent violation is occurring.',
      },
      {
        id: 'D',
        label: 'Go directly to judicial relief without first addressing the station record.',
        stateChanges: [],
        consequence: 'Judicial escalation begins without maximising the immediate documentary opportunity.',
        feedback: 'Judicial relief may become necessary, but the first professional move should address the apparent arrest defect directly.',
        lapse: 'Escalated without first building the immediate record.',
      },
    ],
  },
  {
    id: 'dp-02-detention',
    situation:
      'Emeka now faces a written charge. Adaobi learns he was questioned without caution or counsel and has spent 30 hours in custody. His statement was made after he was led to believe cooperation would help him go home.',
    information: [
      '30-hour detention timeline',
      'No caution',
      'No lawyer during questioning',
      'Client account of statement circumstances',
      'Existing rights record',
    ],
    options: [
      {
        id: 'A',
        label: 'Raise unlawful detention, failure to caution and absence of counsel, and formally document all three.',
        stateChanges: [{ type: 'increment_rights', value: 2 }],
        consequence: 'The case file now contains a comprehensive rights record for later advocacy.',
        feedback: 'The strongest professional response preserves the interconnected violations rather than treating them as isolated issues.',
      },
      {
        id: 'B',
        label: 'Focus only on the detention period because it is the clearest numerical breach.',
        stateChanges: [{ type: 'increment_rights', value: 1 }],
        consequence: 'One violation is preserved while other important circumstances remain less developed.',
        feedback: 'The detention issue matters, but the source expects the lawyer to preserve the full set of violations.',
        lapse: 'Failed to document all material rights violations.',
      },
      {
        id: 'C',
        label: 'Focus only on the statement and leave the detention issues for later.',
        stateChanges: [],
        consequence: 'The evidential dispute is foregrounded but the earlier procedural record remains incomplete.',
        feedback: 'The statement cannot be separated from the circumstances in which it was obtained.',
        lapse: 'Separated the evidence issue from its procedural context.',
      },
      {
        id: 'D',
        label: 'Create a new account that contradicts the police record.',
        stateChanges: [],
        consequence: 'The file gains a credibility problem instead of a clean contemporaneous rights record.',
        feedback: 'A defence lawyer should preserve the client\'s actual account and the procedural circumstances rather than manufacture evidence.',
        lapse: 'Compromised professional record integrity.',
      },
    ],
  },
];
