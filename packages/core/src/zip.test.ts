import test from 'ava';

import { zipContract } from './zip';
import { buildERC20 } from './erc20';
import { generateSources } from './generate/sources';
import { buildGeneric } from './build-generic';

test('erc20 basic', t => {
  const c = buildERC20({ name: 'MyToken', symbol: 'MTK' });
  const zip = zipContract(c);
  const files = Object.values(zip.files).map(f => f.name).sort();

  t.deepEqual(files, [
    '@openzeppelin/',
    '@klaytn/contracts/',
    '@klaytn/contracts/README.md',
    '@klaytn/contracts/token/',
    '@klaytn/contracts/token/ERC20/',
    '@klaytn/contracts/token/ERC20/ERC20.sol',
    '@klaytn/contracts/token/ERC20/IERC20.sol',
    '@klaytn/contracts/token/ERC20/extensions/',
    '@klaytn/contracts/token/ERC20/extensions/IERC20Metadata.sol',
    '@klaytn/contracts/utils/',
    '@klaytn/contracts/utils/Context.sol',
    'MyToken.sol',
  ]);
});

test('can zip all combinations', t => {
  for (const { options } of generateSources('all')) {
    const c = buildGeneric(options);
    zipContract(c);
  }
  t.pass();
});
