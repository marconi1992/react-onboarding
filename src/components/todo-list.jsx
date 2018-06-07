import React from 'react'

class TodoList extends React.Component {
  state = {
    items: [
      'First Item',
    ],
    input: ''
  }
  
  renderItem = (item, idx) => {
    return (
      <li key={idx} >{item}</li>
    )
  }

  onChange = (evt) => {
    this.setState({ input: evt.target.value })
  }

  addItem = () => {
    const { items, input } = this.state
    items.push(input)
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