import { PublicKey } from '@solana/web3.js';

declare const PUMP_AMM_PROGRAM_ID = "pAMMBay6oceH9fJKBRHGP5D4bD4sWpmSwMn52FMfXEA";
declare const PUMP_AMM_PROGRAM_ID_PUBKEY: PublicKey;
declare const PUMP_PROGRAM_ID = "6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P";
declare const PUMP_PROGRAM_ID_PUBKEY: PublicKey;
declare const CANONICAL_POOL_INDEX = 0;
declare function globalConfigPda(programId?: PublicKey): [PublicKey, number];
declare function poolPda(index: number, owner: PublicKey, baseMint: PublicKey, quoteMint: PublicKey, programId?: PublicKey): [PublicKey, number];
declare function lpMintPda(pool: PublicKey, programId?: PublicKey): [PublicKey, number];
declare function lpMintAta(lpMint: PublicKey, owner: PublicKey): PublicKey;
declare function pumpPoolAuthorityPda(mint: PublicKey, pumpProgramId?: PublicKey): [PublicKey, number];
declare function canonicalPumpPoolPda(mint: PublicKey, programId?: PublicKey, pumpProgramId?: PublicKey): [PublicKey, number];
declare function pumpAmmEventAuthorityPda(programId?: PublicKey): [PublicKey, number];

export { CANONICAL_POOL_INDEX, PUMP_AMM_PROGRAM_ID, PUMP_AMM_PROGRAM_ID_PUBKEY, PUMP_PROGRAM_ID, PUMP_PROGRAM_ID_PUBKEY, canonicalPumpPoolPda, globalConfigPda, lpMintAta, lpMintPda, poolPda, pumpAmmEventAuthorityPda, pumpPoolAuthorityPda };
