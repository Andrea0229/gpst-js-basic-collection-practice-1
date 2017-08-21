'use strict';

function includes(collection, ch) {
    return collection.find(item => item === ch);
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let result = [];

    collectionA.forEach(item =>{
        let [key, count] = [item.key, item.count];
        if (includes(objectB.value, key)) {
            count = count - Math.floor(count / 3);
        }
        result.push({key, count});
    })

    return result;
}
