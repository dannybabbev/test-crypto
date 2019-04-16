import {
    createConfig,
    createPlayer,
    encryptDeck,
} from 'mental-poker';

export const testShuffleSpeed = () => {
    const conf = createConfig(52);
    const player = createPlayer(conf);
    const keys = player.keyPairs.map(k => k.privateKey);
    console.time('secp256k1-multi');
    encryptDeck(player.cardCodewordFragments, keys);
    console.timeEnd('secp256k1-multi');
};