import { version as contractsVersion } from "@klaytn/contracts/package.json";
import type { Contract } from "./contract";
import { printContract } from "./print";

export function printContractVersioned(contract: Contract): string {
  return printContract(contract, {
    transformImport: p =>
      p.replace(/^@klaytn\/contracts(-upgradeable)?/, `$&@${contractsVersion}`),
  });
}


