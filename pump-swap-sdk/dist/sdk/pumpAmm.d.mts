import * as _coral_xyz_anchor from '@coral-xyz/anchor';
import { BN } from '@coral-xyz/anchor';
import { Connection, PublicKey, TransactionInstruction } from '@solana/web3.js';
import { a as DepositQuoteAndLpTokenFromBaseResult, c as DepositBaseAndLpTokenFromQuoteResult, f as WithdrawAutocompleteResult, i as Direction } from '../sdk-BELsphs6.mjs';
import 'bn.js';

declare class PumpAmmSdk {
    private readonly pumpAmmInternalSdk;
    constructor(connection: Connection, programId?: string);
    coder(): _coral_xyz_anchor.Coder<string, string>;
    programId(): PublicKey;
    globalConfigKey(): PublicKey;
    poolKey(index: number, creator: PublicKey, baseMint: PublicKey, quoteMint: PublicKey): [PublicKey, number];
    lpMintKey(pool: PublicKey): [PublicKey, number];
    fetchGlobalConfigAccount(): Promise<{
        admin: PublicKey;
        lpFeeBasisPoints: BN;
        protocolFeeBasisPoints: BN;
        disableFlags: number;
        protocolFeeRecipients: PublicKey[];
        coinCreatorFeeBasisPoints: BN;
    }>;
    fetchPool(pool: PublicKey): Promise<{
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
    }>;
    createPoolInstructions(index: number, creator: PublicKey, baseMint: PublicKey, quoteMint: PublicKey, baseIn: BN, quoteIn: BN, userBaseTokenAccount?: PublicKey | undefined, userQuoteTokenAccount?: PublicKey | undefined): Promise<TransactionInstruction[]>;
    createAutocompleteInitialPoolPrice(initialBase: BN, initialQuote: BN): Promise<BN>;
    depositInstructions(pool: PublicKey, lpToken: BN, slippage: number, user: PublicKey, userBaseTokenAccount?: PublicKey | undefined, userQuoteTokenAccount?: PublicKey | undefined, userPoolTokenAccount?: PublicKey | undefined): Promise<TransactionInstruction[]>;
    depositAutocompleteQuoteAndLpTokenFromBase(pool: PublicKey, base: BN, slippage: number): Promise<DepositQuoteAndLpTokenFromBaseResult>;
    depositAutocompleteBaseAndLpTokenFromQuote(pool: PublicKey, quote: BN, slippage: number): Promise<DepositBaseAndLpTokenFromQuoteResult>;
    withdrawInstructions(pool: PublicKey, lpToken: BN, slippage: number, user: PublicKey, userBaseTokenAccount?: PublicKey | undefined, userQuoteTokenAccount?: PublicKey | undefined, userPoolTokenAccount?: PublicKey | undefined): Promise<TransactionInstruction[]>;
    withdrawAutoCompleteBaseAndQuoteFromLpToken(pool: PublicKey, lpAmount: BN, slippage: number): Promise<WithdrawAutocompleteResult>;
    swapBaseInstructions(pool: PublicKey, base: BN, slippage: number, direction: Direction, user: PublicKey, protocolFeeRecipient?: PublicKey | undefined, userBaseTokenAccount?: PublicKey | undefined, userQuoteTokenAccount?: PublicKey | undefined): Promise<TransactionInstruction[]>;
    swapQuoteInstructions(pool: PublicKey, quote: BN, slippage: number, direction: Direction, user: PublicKey, protocolFeeRecipient?: PublicKey | undefined, userBaseTokenAccount?: PublicKey | undefined, userQuoteTokenAccount?: PublicKey | undefined): Promise<TransactionInstruction[]>;
    swapAutocompleteQuoteFromBase(pool: PublicKey, base: BN, slippage: number, direction: Direction): Promise<BN>;
    swapAutocompleteBaseFromQuote(pool: PublicKey, quote: BN, slippage: number, direction: Direction): Promise<BN>;
    extendAccount(account: PublicKey, user: PublicKey): Promise<TransactionInstruction>;
    collectCoinCreatorFee(coinCreator: PublicKey, coinCreatorTokenAccount?: PublicKey | undefined): Promise<TransactionInstruction[]>;
    getCoinCreatorVaultBalance(coinCreator: PublicKey): Promise<BN>;
    coinCreatorVaultAuthorityPda(coinCreator: PublicKey): PublicKey;
    coinCreatorVaultAta(coinCreatorVaultAuthority: PublicKey, quoteMint: PublicKey, quoteTokenProgram: PublicKey): PublicKey;
    setCoinCreator(pool: PublicKey): Promise<TransactionInstruction>;
}

export { PumpAmmSdk };
