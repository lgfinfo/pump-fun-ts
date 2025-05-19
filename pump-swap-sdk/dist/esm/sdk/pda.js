// src/sdk/pda.ts
import { PublicKey } from "@solana/web3.js";
import { BN } from "@coral-xyz/anchor";
import {
  getAssociatedTokenAddressSync,
  NATIVE_MINT,
  TOKEN_2022_PROGRAM_ID
} from "@solana/spl-token";
var PUMP_AMM_PROGRAM_ID = "pAMMBay6oceH9fJKBRHGP5D4bD4sWpmSwMn52FMfXEA";
var PUMP_AMM_PROGRAM_ID_PUBKEY = new PublicKey(PUMP_AMM_PROGRAM_ID);
var PUMP_PROGRAM_ID = "6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P";
var PUMP_PROGRAM_ID_PUBKEY = new PublicKey(PUMP_PROGRAM_ID);
var CANONICAL_POOL_INDEX = 0;
function globalConfigPda(programId = PUMP_AMM_PROGRAM_ID_PUBKEY) {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("global_config")],
    programId
  );
}
function poolPda(index, owner, baseMint, quoteMint, programId = PUMP_AMM_PROGRAM_ID_PUBKEY) {
  return PublicKey.findProgramAddressSync(
    [
      Buffer.from("pool"),
      new BN(index).toArrayLike(Buffer, "le", 2),
      owner.toBuffer(),
      baseMint.toBuffer(),
      quoteMint.toBuffer()
    ],
    programId
  );
}
function lpMintPda(pool, programId = PUMP_AMM_PROGRAM_ID_PUBKEY) {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("pool_lp_mint"), pool.toBuffer()],
    programId
  );
}
function lpMintAta(lpMint, owner) {
  return getAssociatedTokenAddressSync(
    lpMint,
    owner,
    true,
    TOKEN_2022_PROGRAM_ID
  );
}
function pumpPoolAuthorityPda(mint, pumpProgramId = PUMP_PROGRAM_ID_PUBKEY) {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("pool-authority"), mint.toBuffer()],
    pumpProgramId
  );
}
function canonicalPumpPoolPda(mint, programId = PUMP_AMM_PROGRAM_ID_PUBKEY, pumpProgramId = PUMP_PROGRAM_ID_PUBKEY) {
  const [pumpPoolAuthority] = pumpPoolAuthorityPda(mint, pumpProgramId);
  return poolPda(
    CANONICAL_POOL_INDEX,
    pumpPoolAuthority,
    mint,
    NATIVE_MINT,
    programId
  );
}
function pumpAmmEventAuthorityPda(programId = PUMP_AMM_PROGRAM_ID_PUBKEY) {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("__event_authority")],
    programId
  );
}
export {
  CANONICAL_POOL_INDEX,
  PUMP_AMM_PROGRAM_ID,
  PUMP_AMM_PROGRAM_ID_PUBKEY,
  PUMP_PROGRAM_ID,
  PUMP_PROGRAM_ID_PUBKEY,
  canonicalPumpPoolPda,
  globalConfigPda,
  lpMintAta,
  lpMintPda,
  poolPda,
  pumpAmmEventAuthorityPda,
  pumpPoolAuthorityPda
};
