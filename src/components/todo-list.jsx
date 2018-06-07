import React from 'react'

/* Components */
import TodoListItem from './todo-list-item'

class TodoList extends React.Component {
  state = {
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
  
  renderItem = (item, idx) => {
    return (
     <TodoListItem 
      key={idx} 
      content={item.content} 
      completed={item.completed} 
      onChange={(completed) => this.setItemCompleted(idx, completed)}
    />
    )
  }

  onChange = (evt) => {
    this.setState({ input: evt.target.value })
  }

  setItemCompleted = (idx, completed) => {
    const newItems = this.state.items
    const newItem = newItems[idx]
    newItems[idx] = { ...newItem , completed }
    this.setState({ items: newItems })
  }

  addItem = () => {
    const { items, input } = this.state
    items.push({
      content: input,
      completed: false
    })
    this.setState({ input: '', items })
  }

  render() {
    const { items, input } = this.state
    return (
      <div>
        <p>To Do</p>
        <div>
          <input value={input} onChange={this.onChange}/>
          <button onClick={this.addItem}>Add</button>
        </div>
        <ul>
          {items.map(this.renderItem)}
        </ul>
      </div>
    )
  }
}

export default TodoList