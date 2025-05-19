import BN from 'bn.js';
import { S as SellBaseInputResult, h as SellQuoteInputResult } from '../sdk-BELsphs6.js';
import { PublicKey } from '@solana/web3.js';

declare function sellBaseInputInternal(base: BN, slippage: number, // e.g. 1 => 1% slippage tolerance
baseReserve: BN, quoteReserve: BN, lpFeeBps: BN, protocolFeeBps: BN, coinCreatorFeeBps: BN, coinCreator: PublicKey): SellBaseInputResult;
declare function sellQuoteInputInternal(quote: BN, slippage: number, // e.g. 1 => 1% slippage tolerance
baseReserve: BN, quoteReserve: BN, lpFeeBps: BN, protocolFeeBps: BN, coinCreatorFeeBps: BN, coinCreator: PublicKey): SellQuoteInputResult;

export { sellBaseInputInternal, sellQuoteInputInternal };
