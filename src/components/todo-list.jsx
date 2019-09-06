import React from 'react'
import { connect } from 'react-redux'

/* Components */
import TodoListItem from './todo-list-item'

/* Actions */
import { addItem, setInput, setCompleted } from '../actions'

class TodoList extends React.Component {  
  renderItem = (item, idx) => {
    return (
     <TodoListItem 
      key={idx} 
      {...item}
      onChange={(completed) => this.props.setCompleted(idx, completed)}
    />
    )
  }

  onChange = (evt) => {
    const { setInput } = this.props
    setInput(evt.target.value)
  }

  addItem = () => {
    const { input, addItem } = this.props
    
    if (input) {
      addItem()
    }
  }

  render() {
    const { items, input } = this.props
    return (
      <div>
        <p>To Do</p>
        <div>
          <input defaultValue={input} onChange={this.onChange}/>
          <button onClick={this.addItem}>Add</button>
        </div>
        <ul>
          {items.map(this.renderItem)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ items, input }) => ({ items, input })

const mapDispatchToProps = {
  addItem,
  setInput,
  setCompleted
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)