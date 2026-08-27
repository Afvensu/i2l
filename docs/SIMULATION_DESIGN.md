# Simulation Design — In the Dock

## Professional identity
Learner becomes Adaobi Nwankwo, a newly called barrister at Chambers Dike & Associates handling her first real criminal defence case.

## World model
Lagos, Nigeria. The case moves through Chambers, Surulere Police Station, Lagos Magistrate's Court and Lagos State High Court. The learner works with client testimony, police information, detention chronology, documents, bail material and a disputed confession.

## Core tension
Immediate professional action versus institutional pressure, with a deeper tension between knowing a legal principle and creating a record capable of supporting it later.

## Interaction model
Case investigation + evidence review + professional judgement + consequential advocacy. The learner is not merely answering legal questions; each decision changes the case state and later conditions.

## Five meaningful beats

### 1. The Arrest
- Situation: Emeka was arrested after police said he "looked suspicious"; the source describes no complainant, witness statement, matching description or warrant.
- Learner activity: determine the first professional intervention under a 20-minute time pressure.
- Information: arrest circumstances, police account and available record.
- Action: choose how to investigate/assert/challenge the arrest.
- Consequence: the learner begins either a stronger or weaker rights record and may create a lapse flag.
- Insight: act while the intervention window is open.

### 2. Detention and Rights
- Situation: written charge; questioning without caution or counsel; 30 hours in custody; statement circumstances raise further concerns.
- Learner activity: identify and preserve the violations.
- Information: detention timeline, client account, questioning circumstances and existing record.
- Action: select the scope of the rights intervention.
- Consequence: comprehensive documentation strengthens the later case file; omissions become diagnostic flags.
- Insight: documentation is litigation infrastructure.

### 3. Bail
- Situation: Magistrate Okoro hears the handling-stolen-goods charge; prosecution proposes onerous conditions.
- Learner activity: make the bail submission.
- Information: charge, prosecution position, client circumstances, previous record and bail framework.
- Action: select the advocacy strategy.
- Consequence: `rights_record >= 2` produces the documented-record variant; otherwise the learner must do more live evidential work.
- Insight: earlier professional diligence changes later advocacy capacity.

### 4. Confession
- Situation: six months later in the Lagos State High Court, prosecution seeks admission of Emeka's statement as a confession.
- Learner activity: formulate the admissibility objection.
- Information: confession, circumstances of questioning, previous rights record and applicable source framework.
- Action: choose among automatic-exclusion, single-ground, no-objection/weight, or cumulative objection approaches.
- Consequence: the source's optimal response combines inducement, oppressive circumstances and unfairness/cumulative rights concerns.
- Insight: sophisticated evidence reasoning requires constructing the strongest cumulative fairness argument.

### 5. Outcome and professional debrief
- Strongest path: confession excluded and remaining evidence insufficient; acquittal.
- Suboptimal path: possible acquittal with dynamically assembled lapse feedback.
- Failure path: failure to challenge admissibility leads to confession being admitted and conviction.
- Insight: professional outcomes are cumulative, not determined by one isolated answer.

## Persistent state
```text
rights_record: integer, initial 0
client_liberty: in_custody | released_administrative | released_self_recognizance
flags: [{screen, lapse}]
```

Option order must be randomised at runtime without changing option identity or logic.

## Ending routing
```text
IF DP04 == D -> E-03
ELSE IF flags[] is empty AND DP04 == B -> E-01
ELSE -> E-02
```

## Design constraint
Do not turn this into a generic quiz, points game or reusable lesson template. The case record must function as a strategic professional resource.
