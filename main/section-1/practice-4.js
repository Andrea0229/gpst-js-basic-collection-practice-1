'use strict';

function includes(collection, ch) {
    return collection.filter(item => item === ch).length >= 1;
}

module.exports = function collectSameElements(collectionA, objectB) {
    let result = [];
    collectionA.forEach(item=>{
        if(includes(objectB.value, item.key)){
            result.push(item.key)
        }
    });
   return result;
};
