'use strict';

function includes(collection, ch) {
    return collection.filter(item => item === ch).length >= 1;
}

module.exports = function collectSameElements(collectionA, objectB) {
    return collectionA.filter(item => includes(objectB.value, item))
};
