'use strict';

function includes(collection, ch) {
    return collection.filter(item => item === ch).length >= 1;
}

module.exports = function collectSameElements(collectionA, collectionB) {
    return collectionA.filter(item => includes(collectionB[0], item))
};
