import { _SharedCounter as SharedCounter } from '@tstogd-example/shared';

export class Main extends Node {
  counter: SharedCounter = new SharedCounter();

  answer(): number {
    return this.counter.value();
  }
}
