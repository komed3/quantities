import type { Deprecated, Meta } from '../common';
import type { Dimension } from '../dimension';

export type ConstRef<
  D extends Dimension = Dimension,
  ID extends string = string
> = ID & {
  readonly __brand: 'constant';
  readonly __dim: D;
};

export type ConstDef<
  D extends Dimension = Dimension,
  R extends ConstRef = ConstRef
> = {
  readonly id: R;
  readonly dim: D;
  value: number;
  uncertainty?: number;
  deprecated?: Deprecated< ConstRef >;
  meta: Meta;
};
