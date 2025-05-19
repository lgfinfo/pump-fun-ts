import BN from 'bn.js';
import { PublicKey } from '@solana/web3.js';

interface DepositBaseResult {
    quote: BN;
    lpToken: BN;
    maxBase: BN;
    maxQuote: BN;
}
interface DepositQuoteAndLpTokenFromBaseResult {
    quote: BN;
    lpToken: BN;
}
interface DepositQuoteResult {
    base: BN;
    lpToken: BN;
    maxBase: BN;
    maxQuote: BN;
}
interface DepositBaseAndLpTokenFromQuoteResult {
    base: BN;
    lpToken: BN;
}
interface DepositResult {
    token1: BN;
    lpToken: BN;
    maxToken0: BN;
    maxToken1: BN;
}
interface DepositLpTokenResult {
    maxBase: BN;
    maxQuote: BN;
}
interface WithdrawResult {
    base: BN;
    quote: BN;
    minBase: BN;
    minQuote: BN;
}
interface WithdrawAutocompleteResult {
    base: BN;
    quote: BN;
}
interface BuyBaseInputResult {
    internalQuoteAmount: BN;
    /**
     * The total amount of quote tokens required to buy `base` tokens,
     * including LP fee and protocol fee.
     */
    uiQuote: BN;
    /**
     * The maximum quote tokens that you are willing to pay,
     * given the specified slippage tolerance.
     */
    maxQuote: BN;
}
interface BuyQuoteInputResult {
    /**
     * The amount of base tokens received after fees.
     */
    base: BN;
    internalQuoteWithoutFees: BN;
    /**
     * The maximum quote tokens that you are willing to pay,
     * given the specified slippage tolerance.
     */
    maxQuote: BN;
}
interface SellBaseInputResult {
    /**
     * The final amount of quote tokens the user receives (after subtracting LP and protocol fees).
     */
    uiQuote: BN;
    /**
     * The minimum quote tokens the user is willing to receive,
     * given their slippage tolerance.
     */
    minQuote: BN;
    internalQuoteAmountOut: BN;
}
interface SellQuoteInputResult {
    internalRawQuote: BN;
    base: BN;
    minQuote: BN;
}
type Direction = "quoteToBase" | "baseToQuote";
interface Pool {
    poolBump: number;
    index: number;
    creator: PublicKey;
    baseMint: PublicKey;
    quoteMint: PublicKey;
    lpMint: PublicKey;
    poolBaseTokenAccount: PublicKey;
    poolQuoteTokenAccount: PublicKey;
    lpSupply: BN;
    coinCreator: PublicKey;
}

export type { BuyBaseInputResult as B, DepositBaseResult as D, Pool as P, SellBaseInputResult as S, WithdrawResult as W, DepositQuoteAndLpTokenFromBaseResult as a, DepositQuoteResult as b, DepositBaseAndLpTokenFromQuoteResult as c, DepositResult as d, DepositLpTokenResult as e, WithdrawAutocompleteResult as f, BuyQuoteInputResult as g, SellQuoteInputResult as h, Direction as i };
