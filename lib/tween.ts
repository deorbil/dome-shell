import { GLib, Variable } from "astal";
import { Subscribable } from "astal/binding";
import { lerp } from "./math";

class TweenImpl implements Subscribable<number> {
  #frameTime: number;
  #frames: number;
  #value: Variable<number>;
  #interval: GLib.Source | null;

  constructor(value: number, frameTime: number, frames: number) {
    this.#frameTime = frameTime;
    this.#frames = frames;
    this.#value = Variable(value);
    this.#interval = null;
  }

  get() {
    return this.#value.get();
  }

  set(value: number) {
    if (this.#interval) clearInterval(this.#interval);

    let frame = 0;
    this.#interval = setInterval(() => {
      this.#value.set(lerp(this.#value.get(), value, ++frame / this.#frames));
      if (frame >= this.#frames) {
        this.#value.set(value);
        if (this.#interval) {
          clearInterval(this.#interval);
          this.#interval = null;
        }
      }
    }, this.#frameTime);
  }

  subscribe(callback: (value: number) => void) {
    return this.#value.subscribe(callback);
  }

  drop() {
    this.#value.drop();
  }

  onDropped(callback: () => void) {
    return this.#value.onDropped(callback);
  }
}

export type Tween = TweenImpl;

export function Tween(value: number, frameTime: number, frames: number): Tween {
  return new TweenImpl(value, frameTime, frames);
}

export namespace Tween {
  export function derive<T>(
    frameTime: number,
    frames: number,
    subscribable: Subscribable<T>,
    fn: (value: T) => number,
  ): Tween {
    const tween = new TweenImpl(fn(subscribable.get()), frameTime, frames);
    const unsubscribe = subscribable.subscribe((value) => {
      tween.set(fn(value));
    });
    tween.onDropped(unsubscribe);
    return tween;
  }
}
