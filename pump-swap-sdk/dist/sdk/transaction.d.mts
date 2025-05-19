import { PublicKey, TransactionInstruction, Blockhash, Signer, VersionedTransaction, Connection, TransactionError } from '@solana/web3.js';

declare function transactionFromInstructions(payerKey: PublicKey, instructions: TransactionInstruction[], recentBlockhash: Blockhash, signers: Signer[]): VersionedTransaction;
declare function getSignature(transaction: VersionedTransaction): string;
declare function sendAndConfirmTransaction(connection: Connection, payerKey: PublicKey, instructions: TransactionInstruction[], signers: Signer[]): Promise<[VersionedTransaction, TransactionError | null]>;

export { getSignature, sendAndConfirmTransaction, transactionFromInstructions };
