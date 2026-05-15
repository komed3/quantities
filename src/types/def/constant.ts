import type { Deprecated, Meta } from '../common';

export type ConstRef< ID extends string = string > = ID & {
  readonly __brand: 'constant';
};

export type ConstDef< R extends ConstRef = ConstRef > = {
  readonly id: R;
  value: number;
  uncertainty?: number;
  deprecated?: Deprecated< ConstRef >;
  meta: Meta;
};
