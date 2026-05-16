import type { ConstRegistry } from '../../types/def/registry';

import { gravitationalConst } from './gravitationalConst';

export default ( [
  gravitationalConst
] ) as const satisfies ConstRegistry;
