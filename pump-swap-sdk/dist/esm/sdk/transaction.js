// src/sdk/transaction.ts
import {
  TransactionMessage,
  VersionedTransaction
} from "@solana/web3.js";
import { bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";
function transactionFromInstructions(payerKey, instructions, recentBlockhash, signers) {
  const transaction = new VersionedTransaction(
    new TransactionMessage({
      payerKey,
      instructions,
      recentBlockhash
    }).compileToV0Message()
  );
  transaction.sign(signers);
  return transaction;
}
function getSignature(transaction) {
  return bs58.encode(transaction.signatures[0]);
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
export {
  getSignature,
  sendAndConfirmTransaction,
  transactionFromInstructions
};
