'use strict';

function find(collection, ch) {
    return collection.find(item => item.key === ch);
}

function summarize(collection) {
    let result = [];

    collection.forEach(item =>{
        let obj = find(result, item)
        obj ? obj.count++ : result.push({key: item, count: 1});
    })
    return result;
}

function split(item) {
    let array = item.split("-");
    return {key: array[0], count: parseInt(array[1], 10)};
}

function push(result, key, count) {
    for (var i = 0; i < count; i++) {
        result.push(key);
    }
}

function expand(collection) {
    let result = [];

    collection.forEach(item =>{
        (item.length === 1) ? result.push(item) : pushSubKey(item, result);
    });
    return result;
}

function pushSubKey(item, result) {
    let {key, count} = split(item);
    push(result, key, count);
}

function includes(collection, ch) {
    return collection.findIndex(item => item === ch) >= 0
}

function discount(collection, promotionItems) {
    let result = [];
    for (let item of collection) {
        let key = item.key;
        let count = item.count;
        if (includes(promotionItems, key)) {
            count = count - Math.floor(count / 3);
        }
        result.push({key, count});
    }
    return result;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let expandedArray = expand(collectionA);
    let summarizedArray = summarize(expandedArray);
    return discount(summarizedArray, objectB.value);
}
