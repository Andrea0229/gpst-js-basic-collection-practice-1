'use strict';
/**
 * 选出A集合中与B集合中相同的元素
 */

function includes(collection, ch) {
    return collection.filter(item => item === ch).length >= 1;
}

module.exports = function collectSameElements(collectionA, collectionB) {
    return collectionA.filter(item => includes(collectionB, item));
};
