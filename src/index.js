import { createTestModel, createTestMachine } from "@xstate/test";

const machine = createTestMachine({
  id: "HUD",
  predictableActionArguments: true,

  initial: "one",

  states: {
    one: {
      on: {
        TWO: "two",
        THREE: "three"
      }
    },

    two: {
      on: {
        ONE: "one",
        THREE: "three"
      }
    },

    three: {
      on: {
        ONE: "one",
        TWO: "two"
      }
    }
  }
});

const model = createTestModel(machine);


console.log(".getPaths()");
console.log(model.getPaths().map((p) => p.description));
console.log(".getSimplePaths()");
console.log(model.getSimplePaths().map((p) => p.description));
