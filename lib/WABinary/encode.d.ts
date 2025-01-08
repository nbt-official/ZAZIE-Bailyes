/// <reference types="node" />
<<<<<<< HEAD
import type { BinaryNode, BinaryNodeCodingOptions } from './types';
export declare const encodeBinaryNode: ({ tag, attrs, content }: BinaryNode, opts?: Pick<BinaryNodeCodingOptions, 'TAGS' | 'TOKEN_MAP'>, buffer?: number[]) => Buffer;
=======
/// <reference types="node" />
import type { BinaryNode, BinaryNodeCodingOptions } from './types';
export declare const encodeBinaryNode: (node: BinaryNode, opts?: Pick<BinaryNodeCodingOptions, 'TAGS' | 'TOKEN_MAP'>, buffer?: number[]) => Buffer;
>>>>>>> 6603b4e (minor update)
