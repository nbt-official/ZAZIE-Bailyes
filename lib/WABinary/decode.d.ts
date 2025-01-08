/// <reference types="node" />
<<<<<<< HEAD
import type { BinaryNode, BinaryNodeCodingOptions } from './types';
export declare const decompressingIfRequired: (buffer: Buffer) => Buffer;
export declare const decodeDecompressedBinaryNode: (buffer: Buffer, opts: Pick<BinaryNodeCodingOptions, 'DOUBLE_BYTE_TOKENS' | 'SINGLE_BYTE_TOKENS' | 'TAGS'>, indexRef?: {
    index: number;
}) => BinaryNode;
export declare const decodeBinaryNode: (buff: Buffer) => BinaryNode;
=======
/// <reference types="node" />
import type { BinaryNode, BinaryNodeCodingOptions } from './types';
export declare const decompressingIfRequired: (buffer: Buffer) => Promise<Buffer>;
export declare const decodeDecompressedBinaryNode: (buffer: Buffer, opts: Pick<BinaryNodeCodingOptions, 'DOUBLE_BYTE_TOKENS' | 'SINGLE_BYTE_TOKENS' | 'TAGS'>, indexRef?: {
    index: number;
}) => BinaryNode;
export declare const decodeBinaryNode: (buff: Buffer) => Promise<BinaryNode>;
>>>>>>> 6603b4e (minor update)
