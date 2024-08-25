'use strict'

const weatherMap = new Map();
weatherMap
    .set('London', '10')
    .set('Moscow', '7')

console.log(weatherMap.get('Moscow'));
console.log(weatherMap.get('Mosco'));
console.log(weatherMap.has('Mosco'));
console.log(weatherMap.has('Moscow'));
/* console.log(weatherMap.delete('Moscow')); */

const arr = [1, 2, 3]
weatherMap
    .set(11, 5)
    .set(true, 'yes')
    .set(false, 'no')
    .set(arr, 'array')
    .set({a: 1}, {b: 1})
console.log(weatherMap);
console.log(weatherMap.size);
console.log(weatherMap.get(arr));
console.log(weatherMap.get(arr));