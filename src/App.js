import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos'
import './App.css'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/about'
import uuid from 'uuid'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [
        {
          id: uuid.v4(),
          title: 'ir de compras',
          completed: false
        },
        {
          id: uuid.v4(),
          title: 'Hacer una pagina web',
          completed: false
        },
        {
          id: uuid.v4(),
          title: 'Terminar verano',
          completed: true
        }
      ]
    }
  }

  eliminateItem (id) {
    this.setState({
      todos: this.state.todos.filter(todo => id !== todo.id)
    })
  }

  markComplete (id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  addTodo (title) {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render () {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path = "/" render= {props => (
              <>
                <AddTodo addTodo = {this.addTodo}/>
                <h1>Things to do</h1>
                <Todos todos={this.state.todos} markComplete={this.markComplete} eliminateItem={this.eliminateItem}/>
              </>
            )} />
            <Route path = "/about" component={About}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
