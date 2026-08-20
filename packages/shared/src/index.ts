import { _Answer as Answer } from './answer';

export class _SharedCounter extends RefCounted {
  value(): number {
    return new Answer().value();
  }
}
