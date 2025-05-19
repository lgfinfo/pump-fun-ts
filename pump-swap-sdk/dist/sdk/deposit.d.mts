import BN from 'bn.js';
import { d as DepositResult, e as DepositLpTokenResult } from '../sdk-BELsphs6.mjs';
import '@solana/web3.js';

declare function depositToken0Internal(token0: BN, slippage: number, token0Reserve: BN, token1Reserve: BN, totalLpTokens: BN): DepositResult;
declare function depositLpToken(lpToken: BN, slippage: number, baseReserve: BN, quoteReserve: BN, totalLpTokens: BN): DepositLpTokenResult;

export { depositLpToken, depositToken0Internal };
