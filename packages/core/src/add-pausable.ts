import type { ContractBuilder, BaseFunction } from './contract';
import { Access, requireAccessControl } from './set-access-control';
import { defineFunctions } from './utils/define-functions';

export function addPausable(c: ContractBuilder, access: Access, pausableFns: BaseFunction[], klaytn: boolean = false) {
  const operator = klaytn ? 'klaytn' : 'openzeppelin'
  c.addParent({
    name: 'Pausable',
    path: `@${operator}/contracts/security/Pausable.sol`,
  });

  for (const fn of pausableFns) {
    c.addModifier('whenNotPaused', fn);
  }

  requireAccessControl(c, functions.pause, access, 'PAUSER');
  c.addFunctionCode('_pause();', functions.pause);

  requireAccessControl(c, functions.unpause, access, 'PAUSER');
  c.addFunctionCode('_unpause();', functions.unpause);
}

const functions = defineFunctions({
  pause: {
    kind: 'public' as const,
    args: [],
  },

  unpause: {
    kind: 'public' as const,
    args: [],
  },
});
