import BN from 'bn.js';
import { W as WithdrawResult } from '../sdk-BELsphs6.js';
import '@solana/web3.js';

declare function withdrawInternal(lpAmount: BN, slippage: number, baseReserve: BN, quoteReserve: BN, totalLpTokens: BN): WithdrawResult;

export { withdrawInternal };
