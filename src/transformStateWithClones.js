'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  const finalArr = [];
  const finalState = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(finalState, action.extraData);
        break;

      case 'clear':
        clearState(finalState);
        break;

      case 'removeProperties':
        clearProperties(finalState, action.keysToRemove);
        break;
    }

    finalArr.push({ ... finalState });
  }

  return finalArr;
}

function clearState(state) {
  for (const key in state) {
    delete state[key];
  }
}

function clearProperties(state, properties) {
  for (const key of properties) {
    delete state[key];
  }
}

module.exports = transformStateWithClones;
