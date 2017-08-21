'use strict';

function find(collection, ch) {
    return collection.find(item => item.key === ch);
}

function summarize(collection) {
    let result = [];

    collection.forEach(item =>{
        let obj = find(result, item);
        obj ? obj.count++ : result.push({key: item, count: 1});
    })
    return result;
}

function includes(collection, ch) {
    return collection.findIndex(item => item === ch) >= 0
}

function discount(collection, promotionItems) {
    let result = [];

    collection.forEach(item =>{
        let [key, count] = [item.key, item.count];
        if (includes(promotionItems, key)) {
            count = count - Math.floor(count / 3);
        }
        result.push({key, count});
    })
    return result;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let summarized = summarize(collectionA);
    return discount(summarized, objectB.value);
}
