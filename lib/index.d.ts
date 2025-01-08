<<<<<<< HEAD
=======
import { proto } from '../WAProto';
>>>>>>> 6603b4e (minor update)
import makeWASocket from './Socket';
export * from '../WAProto';
export * from './Utils';
export * from './Types';
export * from './Store';
export * from './Defaults';
export * from './WABinary';
export * from './WAM';
<<<<<<< HEAD
export type WASocket = ReturnType<typeof makeWASocket>;
export { makeWASocket };
=======
export * from './WAUSync';
export type WASocket = ReturnType<typeof makeWASocket>;
export { makeWASocket, proto };
>>>>>>> 6603b4e (minor update)
export default makeWASocket;
