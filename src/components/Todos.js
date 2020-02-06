import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todos extends React.Component {
  render () {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} eliminateItem={this.props.eliminateItem}/>
    ))
  }
}

// Prop types are used to ask for the requiered certain props to be able to instance it
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos
