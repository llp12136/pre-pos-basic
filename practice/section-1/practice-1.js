'use strict';

function find(collection, element) {
  let result;
  for(let i=0;i<collection.length;i++)
  {
    if(collection[i]===element)
    return collection[i];
  }
  return '该数不存在';
}
