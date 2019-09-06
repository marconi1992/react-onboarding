export const ADD = 'ADD'
export const SET_INPUT = 'SET_INPUT'
export const SET_COMPLETED = 'SET_COMPLETED'

export const addItem = () => ({
  type: ADD
})

export const setInput = (input) => ({
  type: SET_INPUT,
  input
})

export const setCompleted = (idx, completed) => ({
  type: SET_COMPLETED,
  idx,
  completed
})
