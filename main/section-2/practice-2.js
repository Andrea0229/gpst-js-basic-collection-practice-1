'use strict';

function find(collection, ch) {
    return collection.find(item => item.key === ch);
}

function summarize(collection) {
    let result = [];

    collection.forEach(item =>{
        let obj = find(result, item);
        obj ? obj.count++ : result.push({key: item, count: 1});
    });
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

function pushSubKey(item, result) {
    let {key, count} = split(item);
    push(result, key, count);
}

function expand(collection) {
    let result = [];

    collection.forEach(item =>{
        (item.length === 1) ? result.push(item) : pushSubKey(item, result);
    });
    return result;
}

module.exports = function countSameElements(collection) {
    let expandedArray = expand(collection);
    return summarize(expandedArray);
}
