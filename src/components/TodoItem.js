import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  getLineThrough () {
    return {
      textDecoration: this.props.todo.completed
        ? 'line-through' : 'none'
    }
  }

  render () {
    const { id, title } = this.props.todo
    return (
      <div style={this.getLineThrough()} className="todo">
        <p>
          <input type= "checkbox" onChange={this.props.markComplete.bind(this, id)} checked={this.props.todo.completed}/>{' '}
          { title }
          <button onClick={this.props.eliminateItem.bind(this, id)} className="deleteBtn
                    ">X</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  eliminateItem: PropTypes.func.isRequired
}

export default TodoItem
