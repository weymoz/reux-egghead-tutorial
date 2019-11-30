import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import expect from 'expect';
import deepFreeze from 'deep-freeze';

const addCounter = (list) => [...list, 0]

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0]

  deepFreeze(listBefore)

  expect(addCounter(listBefore))
    .toEqual(listAfter);
}

testAddCounter();

const removeCounter = (list, n) => {
  return [].concat(list.slice(0, n), list.slice(n + 1));
}

const testRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20]

  deepFreeze(listBefore)

  expect(
    removeCounter(listBefore, 1))
    .toEqual(listAfter)
}

testRemoveCounter();


const incrementCounter = (list, index) => 
  [...list.slice(0, index), list[index] + 1, ...list.slice(index + 1)]

const testIncrementCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20]

  deepFreeze(listBefore)

  expect(
   incrementCounter(listBefore, 1))
    .toEqual(listAfter)
}

testIncrementCounter();

console.log('All tests passed')

export default 'array-counter'
