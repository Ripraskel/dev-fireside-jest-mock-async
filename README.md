# dev-fireside-jest-mock-async

Examples of using mocks and testing async functions with Jest

1. What are mocks?
   - AKA:
      - Stubs
      - Fakes
   - A mock objects/functions are simulated objects/functions that mimic the behavior of real objects/functions in controlled ways
   - https://jestjs.io/docs/mock-functions

2. Why are mocks needed?
   - the object supplies non-deterministic results (e.g. the current time or the current temperature);
   - it has states that are difficult to create or reproduce (e.g. a network error);
   - it is slow (e.g. a complete database, which would have to be initialized before the test);
   - it does not yet exist or may change behavior;
   - it would have to include information and methods exclusively for testing purposes (and not for its actual task).

3. Flavours of mocking with Jest
   - Mock functions (https://jestjs.io/docs/mock-function-api)
   - Manual mocks (https://jestjs.io/docs/manual-mocks)
   - Automatic Mocks (https://jestjs.io/docs/es6-class-mocks)
   - Defining Mock implementation

(Go To Jest Website to Talk through these)

4. Look at some code!!
   - What does code do?
   - What mocks are used?
   - Reset mocks and why?
   - Differences between synchronous and asynchronous function mocking.