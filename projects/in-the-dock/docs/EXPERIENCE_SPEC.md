# Digital Experience Specification — In the Dock

## Experience shell
A restrained professional legal interface. The learner should feel inside an active case, not inside an LMS.

## Screen 00 — Chambers
Components: chambers environment, incoming call, case briefing, client information, senior-partner context, Begin Case control.
Interaction: enter case.

## Screen 01 — Police Station / Arrest
Components: police-station environment, duty sergeant dialogue, case facts, 20-minute pressure indicator, contextual/legal information panel, four decision cards.
Interaction: inspect information -> select -> review -> commit.

## Screen 02 — Detention
Components: consultation room, client, detention timeline, statement circumstances, rights-record panel, four professional-response cards.
Interaction: assess -> select intervention -> commit.

## Screen 03 — Magistrate's Court / Bail
Components: courtroom, magistrate, prosecution submission, defence file, proposed conditions, dynamic record state.
Interaction: review file -> formulate advocacy position -> commit.

## Screen 04 — High Court / Confession
Components: High Court environment, judge, confession document, evidence drawer, contemporaneous records, four admissibility strategies.
Interaction: inspect evidence -> select objection strategy -> commit.

## Screen 05 — Dynamic ending/debrief
Components: outcome narrative, client reaction, case timeline, learner action review, professional feedback.

## Decision state machine
AVAILABLE -> SELECTED -> REVIEWING -> COMMITTED -> CONSEQUENCE -> PROFESSIONAL_FEEDBACK -> NEXT_BEAT

Committed decisions cannot be silently reversed.

## Visual direction
- Serious, contemporary Nigerian legal environment.
- Restrained motion and documentary realism.
- No cartoon gamification, points explosions or generic badges.
- Documents should look credible and behave as evidence.
- Maintain high readability and accessible interaction.
- Keyboard navigation, screen-reader support, WCAG AA contrast and descriptive alternative text.

## Animation
Use subtle environmental movement, time progression, document opening, case-file updates, custody-state changes and courtroom reactions. Motion communicates state rather than reward.

## Responsive behaviour
The case file and decision area must remain usable on desktop and tablet widths. On narrow screens, evidence and decision panels stack without hiding required information.
