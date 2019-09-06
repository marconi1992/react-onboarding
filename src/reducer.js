import {
  ADD,
  SET_INPUT,
  SET_COMPLETED,
} from './actions'

const initialState = {
  items: [
    {
      content: 'First Item',
      completed: true
    },
    {
      content: 'Second Item',
      completed: false
    }
  ],
  input: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      const item = {
        content: state.input,
        completed: false
      }
      return { ...state, items: [...state.items, item ], input: '' }
    }
    case SET_INPUT:
      return { ...state, input: action.input}
    case SET_COMPLETED: {
      const { idx, completed } = action
      const { items } = state
      const item = items[idx]
      const newItem = { ...item, completed }
      const newItems = items.slice(0, idx).concat(newItem).concat(items.slice(idx + 1))

      return { ...state, items: newItems }
    }
    default:
      return state
  }
}