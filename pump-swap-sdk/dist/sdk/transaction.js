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

// src/sdk/transaction.ts
var transaction_exports = {};
__export(transaction_exports, {
  getSignature: () => getSignature,
  sendAndConfirmTransaction: () => sendAndConfirmTransaction,
  transactionFromInstructions: () => transactionFromInstructions
});
module.exports = __toCommonJS(transaction_exports);
var import_web3 = require("@solana/web3.js");
var import_bytes = require("@coral-xyz/anchor/dist/cjs/utils/bytes");
function transactionFromInstructions(payerKey, instructions, recentBlockhash, signers) {
  const transaction = new import_web3.VersionedTransaction(
    new import_web3.TransactionMessage({
      payerKey,
      instructions,
      recentBlockhash
    }).compileToV0Message()
  );
  transaction.sign(signers);
  return transaction;
}
function getSignature(transaction) {
  return import_bytes.bs58.encode(transaction.signatures[0]);
}
async function sendAndConfirmTransaction(connection, payerKey, instructions, signers) {
  const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
  const transaction = transactionFromInstructions(
    payerKey,
    instructions,
    blockhash,
    signers
  );
  await connection.sendTransaction(transaction);
  const signature = getSignature(transaction);
  const result = await connection.confirmTransaction({
    signature,
    blockhash,
    lastValidBlockHeight
  });
  return [transaction, result.value.err];
}
