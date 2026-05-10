import type { Deprecated, Meta } from './common';

export type PrefixRef< ID extends string = string > = ID & {
  readonly __brand: 'prefixRef';
};

export type PrefixDef< R extends PrefixRef = PrefixRef > = {
  readonly id: R;
  factor: number;
  aliases?: string[];
  deprecated?: Deprecated< PrefixRef >;
  meta: Meta;
};
