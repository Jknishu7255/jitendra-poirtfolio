/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "gsap/SplitText" {
  export class SplitText {
    constructor(target: any, vars?: any);
    chars: any[];
    words: any[];
    lines: any[];
    revert(): void;
  }
}

declare module "gsap/ScrollSmoother" {
  export class ScrollSmoother {
    constructor(vars?: any);
    paused(value?: boolean): boolean | void;
    kill(): void;
    static refresh(value?: boolean): void;
    static create(vars: any): ScrollSmoother;
    [key: string]: any;
  }
}
