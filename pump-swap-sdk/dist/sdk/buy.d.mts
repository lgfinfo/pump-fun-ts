import BN from 'bn.js';
import { B as BuyBaseInputResult, g as BuyQuoteInputResult } from '../sdk-BELsphs6.mjs';
import { PublicKey } from '@solana/web3.js';

declare function buyBaseInputInternal(base: BN, slippage: number, // 1 => 1%
baseReserve: BN, quoteReserve: BN, lpFeeBps: BN, protocolFeeBps: BN, coinCreatorFeeBps: BN, coinCreator: PublicKey): BuyBaseInputResult;
declare function buyQuoteInputInternal(quote: BN, slippage: number, // 1 => 1%
baseReserve: BN, quoteReserve: BN, lpFeeBps: BN, protocolFeeBps: BN, coinCreatorFeeBps: BN, coinCreator: PublicKey): BuyQuoteInputResult;

export { buyBaseInputInternal, buyQuoteInputInternal };
