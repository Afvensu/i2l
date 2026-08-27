# Technical Architecture — In the Dock

## Architecture principle
Adapt the engine to the simulation. The core technical abstraction is a persistent criminal-case session, not a generic page/quiz engine.

## Runtime
```text
App Shell
  -> Session Controller
      -> Scene Router
      -> Case State Store
      -> Decision Engine
      -> Consequence Engine
      -> Feedback Engine
      -> Ending Router
      -> Assessment Tracker
```

## State
```ts
interface SessionState {
  rights_record: number;
  client_liberty: 'in_custody' | 'released_administrative' | 'released_self_recognizance';
  flags: Array<{ screen: string; lapse: string }>;
  currentBeat: string;
}
```

## Scene contract
```ts
interface Scene {
  id: string;
  situation: string;
  information: InformationItem[];
  options: DecisionOption[];
}
```

Each option must declare its state mutations, consequence, feedback and next destination. Display order is randomised independently of option identity.

## Decision contract
```ts
interface DecisionOption {
  id: string;
  label: string;
  stateChanges: StateChange[];
  consequence: string;
  feedback: string;
  lapse?: string;
}
```

## Ending router
The ending router evaluates final state and DP-04 choice according to the source's defined routing. Keep terminal and non-terminal outcomes explicit.

## Data separation
Keep scenario content, decision logic, state transitions and presentation components separate so the case can be authored without embedding legal logic inside UI components.

## Accessibility
All decision controls must be keyboard operable, screen-reader labelled and meet WCAG AA contrast requirements. No interaction may depend on colour alone.

## Testing priorities
- All four decision points reachable.
- Every option has a meaningful consequence.
- State persists between beats.
- `rights_record >= 2` produces the documented-record variants.
- Flags persist and generate specific E-02 feedback.
- DP-04 terminal path routes to E-03.
- Clean strong path routes to E-01.
- Option randomisation never changes state semantics.
