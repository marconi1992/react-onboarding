import React from 'react'

class TodoListItem extends React.Component {

  onChange = (evt) => {
    const { onChange } = this.props
    onChange(evt.target.checked)
  }

  render() {
    const { content, completed } = this.props
    return (
      <li>
        <input type="checkbox" checked={completed} onChange={this.onChange}/>
        {content}
      </li>
    )
  }
}

export default TodoListItem