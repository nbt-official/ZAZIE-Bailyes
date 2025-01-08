"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractNewsletterMetadata = exports.makeNewsletterSocket = void 0;
const Types_1 = require("../Types");
const Utils_1 = require("../Utils");
const WABinary_1 = require("../WABinary");
const groups_1 = require("./groups");
<<<<<<< HEAD
=======
var QueryIds;
(function (QueryIds) {
    QueryIds["JOB_MUTATION"] = "7150902998257522";
    QueryIds["METADATA"] = "6620195908089573";
    QueryIds["UNFOLLOW"] = "7238632346214362";
    QueryIds["FOLLOW"] = "7871414976211147";
    QueryIds["UNMUTE"] = "7337137176362961";
    QueryIds["MUTE"] = "25151904754424642";
    QueryIds["CREATE"] = "6996806640408138";
    QueryIds["ADMIN_COUNT"] = "7130823597031706";
    QueryIds["CHANGE_OWNER"] = "7341777602580933";
    QueryIds["DELETE"] = "8316537688363079";
    QueryIds["DEMOTE"] = "6551828931592903";
})(QueryIds || (QueryIds = {}));
>>>>>>> 6603b4e (minor update)
const makeNewsletterSocket = (config) => {
    const sock = (0, groups_1.makeGroupsSocket)(config);
    const { authState, signalRepository, query, generateMessageTag } = sock;
    const encoder = new TextEncoder();
    const newsletterQuery = async (jid, type, content) => (query({
        tag: 'iq',
        attrs: {
            id: generateMessageTag(),
            type,
            xmlns: 'newsletter',
            to: jid,
        },
        content
    }));
<<<<<<< HEAD
    const newsletterWMexQuery = async (jid, queryId, content) => (query({
=======
    const newsletterWMexQuery = async (jid, query_id, content) => (query({
>>>>>>> 6603b4e (minor update)
        tag: 'iq',
        attrs: {
            id: generateMessageTag(),
            type: 'get',
            xmlns: 'w:mex',
            to: WABinary_1.S_WHATSAPP_NET,
        },
        content: [
            {
                tag: 'query',
<<<<<<< HEAD
                attrs: { 'query_id': queryId },
                content: encoder.encode(JSON.stringify({
                    variables: {
                        'newsletter_id': jid,
                        ...content
                    }
                }))
=======
                attrs: { query_id },
                content: encoder.encode(JSON.stringify({ variables: { newsletter_id: jid, ...content } }))
>>>>>>> 6603b4e (minor update)
            }
        ]
    }));
    const parseFetchedUpdates = async (node, type) => {
        let child;
<<<<<<< HEAD
        if (type === 'messages') {
            child = (0, WABinary_1.getBinaryNodeChild)(node, 'messages');
        }
=======
        if (type === 'messages')
            child = (0, WABinary_1.getBinaryNodeChild)(node, 'messages');
>>>>>>> 6603b4e (minor update)
        else {
            const parent = (0, WABinary_1.getBinaryNodeChild)(node, 'message_updates');
            child = (0, WABinary_1.getBinaryNodeChild)(parent, 'messages');
        }
        return await Promise.all((0, WABinary_1.getAllBinaryNodeChildren)(child).map(async (messageNode) => {
            var _a, _b;
            messageNode.attrs.from = child === null || child === void 0 ? void 0 : child.attrs.jid;
<<<<<<< HEAD
            const views = parseInt(((_b = (_a = (0, WABinary_1.getBinaryNodeChild)(messageNode, 'views_count')) === null || _a === void 0 ? void 0 : _a.attrs) === null || _b === void 0 ? void 0 : _b.count) || '0');
            const reactionNode = (0, WABinary_1.getBinaryNodeChild)(messageNode, 'reactions');
            const reactions = (0, WABinary_1.getBinaryNodeChildren)(reactionNode, 'reaction')
                .map(({ attrs }) => ({ count: +attrs.count, code: attrs.code }));
            const data = {
                'server_id': messageNode.attrs.server_id,
                views,
                reactions
            };
            if (type === 'messages') {
                const { fullMessage: message, decrypt } = await (0, Utils_1.decryptMessageNode)(messageNode, authState.creds.me.id, authState.creds.me.lid || '', signalRepository, config.logger);
                await decrypt();
                data.message = message;
            }
            return data;
=======
            const views = (_b = (_a = (0, WABinary_1.getBinaryNodeChild)(messageNode, 'views_count')) === null || _a === void 0 ? void 0 : _a.attrs) === null || _b === void 0 ? void 0 : _b.count;
            const reactionNode = (0, WABinary_1.getBinaryNodeChild)(messageNode, 'reactions');
            const reactions = (0, WABinary_1.getBinaryNodeChildren)(reactionNode, 'reaction')
                .map(({ attrs }) => ({ count: +attrs.count, code: attrs.code }));
            let data;
            if (type === 'messages') {
                const { fullMessage: message, decrypt } = await (0, Utils_1.decryptMessageNode)(messageNode, authState.creds.me.id, authState.creds.me.lid || '', signalRepository, config.logger);
                await decrypt();
                data = {
                    server_id: messageNode.attrs.server_id,
                    views: views ? +views : undefined,
                    reactions,
                    message
                };
                return data;
            }
            else {
                data = {
                    server_id: messageNode.attrs.server_id,
                    views: views ? +views : undefined,
                    reactions
                };
                return data;
            }
>>>>>>> 6603b4e (minor update)
        }));
    };
    return {
        ...sock,
        subscribeNewsletterUpdates: async (jid) => {
            var _a;
            const result = await newsletterQuery(jid, 'set', [{ tag: 'live_updates', attrs: {}, content: [] }]);
            return (_a = (0, WABinary_1.getBinaryNodeChild)(result, 'live_updates')) === null || _a === void 0 ? void 0 : _a.attrs;
        },
        newsletterReactionMode: async (jid, mode) => {
<<<<<<< HEAD
            await newsletterWMexQuery(jid, Types_1.QueryIds.JOB_MUTATION, {
                updates: { settings: { 'reaction_codes': { value: mode } } }
            });
        },
        newsletterUpdateDescription: async (jid, description) => {
            await newsletterWMexQuery(jid, Types_1.QueryIds.JOB_MUTATION, {
=======
            await newsletterWMexQuery(jid, QueryIds.JOB_MUTATION, {
                updates: { settings: { reaction_codes: { value: mode } } }
            });
        },
        newsletterUpdateDescription: async (jid, description) => {
            await newsletterWMexQuery(jid, QueryIds.JOB_MUTATION, {
>>>>>>> 6603b4e (minor update)
                updates: { description: description || '', settings: null }
            });
        },
        newsletterUpdateName: async (jid, name) => {
<<<<<<< HEAD
            await newsletterWMexQuery(jid, Types_1.QueryIds.JOB_MUTATION, {
=======
            await newsletterWMexQuery(jid, QueryIds.JOB_MUTATION, {
>>>>>>> 6603b4e (minor update)
                updates: { name, settings: null }
            });
        },
        newsletterUpdatePicture: async (jid, content) => {
            const { img } = await (0, Utils_1.generateProfilePicture)(content);
<<<<<<< HEAD
            await newsletterWMexQuery(jid, Types_1.QueryIds.JOB_MUTATION, {
=======
            await newsletterWMexQuery(jid, QueryIds.JOB_MUTATION, {
>>>>>>> 6603b4e (minor update)
                updates: { picture: img.toString('base64'), settings: null }
            });
        },
        newsletterRemovePicture: async (jid) => {
<<<<<<< HEAD
            await newsletterWMexQuery(jid, Types_1.QueryIds.JOB_MUTATION, {
=======
            await newsletterWMexQuery(jid, QueryIds.JOB_MUTATION, {
>>>>>>> 6603b4e (minor update)
                updates: { picture: '', settings: null }
            });
        },
        newsletterUnfollow: async (jid) => {
<<<<<<< HEAD
            await newsletterWMexQuery(jid, Types_1.QueryIds.UNFOLLOW);
        },
        newsletterFollow: async (jid) => {
            await newsletterWMexQuery(jid, Types_1.QueryIds.FOLLOW);
        },
        newsletterUnmute: async (jid) => {
            await newsletterWMexQuery(jid, Types_1.QueryIds.UNMUTE);
        },
        newsletterMute: async (jid) => {
            await newsletterWMexQuery(jid, Types_1.QueryIds.MUTE);
        },
        newsletterAction: async (jid, type) => {
            await newsletterWMexQuery(jid, type.toUpperCase());
        },
        newsletterCreate: async (name, description, reaction_codes) => {
            //TODO: Implement TOS system wide for Meta AI, communities, and here etc.
            /**tos query */
=======
            await newsletterWMexQuery(jid, QueryIds.UNFOLLOW);
        },
        newsletterFollow: async (jid) => {
            await newsletterWMexQuery(jid, QueryIds.FOLLOW);
        },
        newsletterUnmute: async (jid) => {
            await newsletterWMexQuery(jid, QueryIds.UNMUTE);
        },
        newsletterMute: async (jid) => {
            await newsletterWMexQuery(jid, QueryIds.MUTE);
        },
        newsletterCreate: async (name, description) => {
>>>>>>> 6603b4e (minor update)
            await query({
                tag: 'iq',
                attrs: {
                    to: WABinary_1.S_WHATSAPP_NET,
                    xmlns: 'tos',
                    id: generateMessageTag(),
                    type: 'set'
                },
                content: [
                    {
                        tag: 'notice',
                        attrs: {
                            id: '20601218',
                            stage: '5'
                        },
                        content: []
                    }
                ]
            });
<<<<<<< HEAD
            const result = await newsletterWMexQuery(undefined, Types_1.QueryIds.CREATE, {
                input: { name, description, settings: { 'reaction_codes': { value: reaction_codes.toUpperCase() } } }
=======
            const result = await newsletterWMexQuery(undefined, QueryIds.CREATE, {
                input: { name, description }
>>>>>>> 6603b4e (minor update)
            });
            return (0, exports.extractNewsletterMetadata)(result, true);
        },
        newsletterMetadata: async (type, key, role) => {
<<<<<<< HEAD
            const result = await newsletterWMexQuery(undefined, Types_1.QueryIds.METADATA, {
                input: {
                    key,
                    type: type.toUpperCase(),
                    'view_role': role || 'GUEST'
                },
                'fetch_viewer_metadata': true,
                'fetch_full_image': true,
                'fetch_creation_time': true
=======
            const result = await newsletterWMexQuery(undefined, QueryIds.METADATA, {
                input: {
                    key,
                    type: type.toUpperCase(),
                    view_role: role || 'GUEST'
                },
                fetch_viewer_metadata: true,
                fetch_full_image: true,
                fetch_creation_time: true
>>>>>>> 6603b4e (minor update)
            });
            return (0, exports.extractNewsletterMetadata)(result);
        },
        newsletterAdminCount: async (jid) => {
            var _a, _b;
<<<<<<< HEAD
            const result = await newsletterWMexQuery(jid, Types_1.QueryIds.ADMIN_COUNT);
=======
            const result = await newsletterWMexQuery(jid, QueryIds.ADMIN_COUNT);
>>>>>>> 6603b4e (minor update)
            const buff = (_b = (_a = (0, WABinary_1.getBinaryNodeChild)(result, 'result')) === null || _a === void 0 ? void 0 : _a.content) === null || _b === void 0 ? void 0 : _b.toString();
            return JSON.parse(buff).data[Types_1.XWAPaths.ADMIN_COUNT].admin_count;
        },
        /**user is Lid, not Jid */
        newsletterChangeOwner: async (jid, user) => {
<<<<<<< HEAD
            await newsletterWMexQuery(jid, Types_1.QueryIds.CHANGE_OWNER, {
                'user_id': user
=======
            await newsletterWMexQuery(jid, QueryIds.CHANGE_OWNER, {
                user_id: user
>>>>>>> 6603b4e (minor update)
            });
        },
        /**user is Lid, not Jid */
        newsletterDemote: async (jid, user) => {
<<<<<<< HEAD
            await newsletterWMexQuery(jid, Types_1.QueryIds.DEMOTE, {
                'user_id': user
            });
        },
        newsletterDelete: async (jid) => {
            await newsletterWMexQuery(jid, Types_1.QueryIds.DELETE);
        },
        /**if code wasn't passed, the reaction will be removed (if is reacted) */
        newsletterReactMessage: async (jid, serverId, code) => {
            await query({
                tag: 'message',
                attrs: { to: jid, ...(!code ? { edit: '7' } : {}), type: 'reaction', 'server_id': serverId, id: (0, Utils_1.generateMessageID)() },
=======
            await newsletterWMexQuery(jid, QueryIds.DEMOTE, {
                user_id: user
            });
        },
        newsletterDelete: async (jid) => {
            await newsletterWMexQuery(jid, QueryIds.DELETE);
        },
        /**if code wasn't passed, the reaction will be removed (if is reacted) */
        newsletterReactMessage: async (jid, server_id, code) => {
            await query({
                tag: 'message',
                attrs: { to: jid, ...(!code ? { edit: '7' } : {}), type: 'reaction', server_id, id: (0, Utils_1.generateMessageID)() },
>>>>>>> 6603b4e (minor update)
                content: [{
                        tag: 'reaction',
                        attrs: code ? { code } : {}
                    }]
            });
        },
        newsletterFetchMessages: async (type, key, count, after) => {
            const result = await newsletterQuery(WABinary_1.S_WHATSAPP_NET, 'get', [
                {
                    tag: 'messages',
                    attrs: { type, ...(type === 'invite' ? { key } : { jid: key }), count: count.toString(), after: (after === null || after === void 0 ? void 0 : after.toString()) || '100' }
                }
            ]);
            return await parseFetchedUpdates(result, 'messages');
        },
        newsletterFetchUpdates: async (jid, count, after, since) => {
            const result = await newsletterQuery(jid, 'get', [
                {
                    tag: 'message_updates',
                    attrs: { count: count.toString(), after: (after === null || after === void 0 ? void 0 : after.toString()) || '100', since: (since === null || since === void 0 ? void 0 : since.toString()) || '0' }
                }
            ]);
            return await parseFetchedUpdates(result, 'updates');
        }
    };
};
exports.makeNewsletterSocket = makeNewsletterSocket;
const extractNewsletterMetadata = (node, isCreate) => {
<<<<<<< HEAD
    var _a, _b, _c, _d, _e, _f, _g;
=======
    var _a, _b, _c, _d;
>>>>>>> 6603b4e (minor update)
    const result = (_b = (_a = (0, WABinary_1.getBinaryNodeChild)(node, 'result')) === null || _a === void 0 ? void 0 : _a.content) === null || _b === void 0 ? void 0 : _b.toString();
    const metadataPath = JSON.parse(result).data[isCreate ? Types_1.XWAPaths.CREATE : Types_1.XWAPaths.NEWSLETTER];
    const metadata = {
        id: metadataPath.id,
        state: metadataPath.state.type,
<<<<<<< HEAD
        'creation_time': +metadataPath.thread_metadata.creation_time,
=======
        creation_time: +metadataPath.thread_metadata.creation_time,
>>>>>>> 6603b4e (minor update)
        name: metadataPath.thread_metadata.name.text,
        nameTime: +metadataPath.thread_metadata.name.update_time,
        description: metadataPath.thread_metadata.description.text,
        descriptionTime: +metadataPath.thread_metadata.description.update_time,
        invite: metadataPath.thread_metadata.invite,
        handle: metadataPath.thread_metadata.handle,
        picture: ((_c = metadataPath.thread_metadata.picture) === null || _c === void 0 ? void 0 : _c.direct_path) || null,
        preview: ((_d = metadataPath.thread_metadata.preview) === null || _d === void 0 ? void 0 : _d.direct_path) || null,
<<<<<<< HEAD
        'reaction_codes': (_g = (_f = (_e = metadataPath.thread_metadata) === null || _e === void 0 ? void 0 : _e.settings) === null || _f === void 0 ? void 0 : _f.reaction_codes) === null || _g === void 0 ? void 0 : _g.value,
        subscribers: +metadataPath.thread_metadata.subscribers_count,
        verification: metadataPath.thread_metadata.verification,
        'viewer_metadata': metadataPath.viewer_metadata
=======
        reaction_codes: metadataPath.thread_metadata.settings.reaction_codes.value,
        subscribers: +metadataPath.thread_metadata.subscribers_count,
        verification: metadataPath.thread_metadata.verification,
        viewer_metadata: metadataPath.viewer_metadata
>>>>>>> 6603b4e (minor update)
    };
    return metadata;
};
exports.extractNewsletterMetadata = extractNewsletterMetadata;
