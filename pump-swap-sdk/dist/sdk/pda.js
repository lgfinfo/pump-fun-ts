"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/sdk/pda.ts
var pda_exports = {};
__export(pda_exports, {
  CANONICAL_POOL_INDEX: () => CANONICAL_POOL_INDEX,
  PUMP_AMM_PROGRAM_ID: () => PUMP_AMM_PROGRAM_ID,
  PUMP_AMM_PROGRAM_ID_PUBKEY: () => PUMP_AMM_PROGRAM_ID_PUBKEY,
  PUMP_PROGRAM_ID: () => PUMP_PROGRAM_ID,
  PUMP_PROGRAM_ID_PUBKEY: () => PUMP_PROGRAM_ID_PUBKEY,
  canonicalPumpPoolPda: () => canonicalPumpPoolPda,
  globalConfigPda: () => globalConfigPda,
  lpMintAta: () => lpMintAta,
  lpMintPda: () => lpMintPda,
  poolPda: () => poolPda,
  pumpAmmEventAuthorityPda: () => pumpAmmEventAuthorityPda,
  pumpPoolAuthorityPda: () => pumpPoolAuthorityPda
});
module.exports = __toCommonJS(pda_exports);
var import_web3 = require("@solana/web3.js");
var import_anchor = require("@coral-xyz/anchor");
var import_spl_token = require("@solana/spl-token");
var PUMP_AMM_PROGRAM_ID = "pAMMBay6oceH9fJKBRHGP5D4bD4sWpmSwMn52FMfXEA";
var PUMP_AMM_PROGRAM_ID_PUBKEY = new import_web3.PublicKey(PUMP_AMM_PROGRAM_ID);
var PUMP_PROGRAM_ID = "6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P";
var PUMP_PROGRAM_ID_PUBKEY = new import_web3.PublicKey(PUMP_PROGRAM_ID);
var CANONICAL_POOL_INDEX = 0;
function globalConfigPda(programId = PUMP_AMM_PROGRAM_ID_PUBKEY) {
  return import_web3.PublicKey.findProgramAddressSync(
    [Buffer.from("global_config")],
    programId
  );
}
function poolPda(index, owner, baseMint, quoteMint, programId = PUMP_AMM_PROGRAM_ID_PUBKEY) {
  return import_web3.PublicKey.findProgramAddressSync(
    [
      Buffer.from("pool"),
      new import_anchor.BN(index).toArrayLike(Buffer, "le", 2),
      owner.toBuffer(),
      baseMint.toBuffer(),
      quoteMint.toBuffer()
    ],
    programId
  );
}
function lpMintPda(pool, programId = PUMP_AMM_PROGRAM_ID_PUBKEY) {
  return import_web3.PublicKey.findProgramAddressSync(
    [Buffer.from("pool_lp_mint"), pool.toBuffer()],
    programId
  );
}
function lpMintAta(lpMint, owner) {
  return (0, import_spl_token.getAssociatedTokenAddressSync)(
    lpMint,
    owner,
    true,
    import_spl_token.TOKEN_2022_PROGRAM_ID
  );
}
function pumpPoolAuthorityPda(mint, pumpProgramId = PUMP_PROGRAM_ID_PUBKEY) {
  return import_web3.PublicKey.findProgramAddressSync(
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
    import_spl_token.NATIVE_MINT,
    programId
  );
}
function pumpAmmEventAuthorityPda(programId = PUMP_AMM_PROGRAM_ID_PUBKEY) {
  return import_web3.PublicKey.findProgramAddressSync(
    [Buffer.from("__event_authority")],
    programId
  );
}
