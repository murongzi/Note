import React from 'react'
import PropTypes from 'prop-types';
import Todo from './Todo';
 
const TodoList = ({todos, onTodoClick}) => {
    debugger;
    return (
        <ul>
            {
                todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />)
            }
        </ul>
    )
};

TodoList.propTypes = {
    todos:React.PropTypes.arrayOf(
        React.PropTypes.shape({
            id:React.PropTypes.number.isRequired,
            completed:React.PropTypes.bool.isRequired,
            text:React.PropTypes.string.isRequired
        })
    ),
    onTodoClick:React.PropTypes.func.isRequired
}

export default TodoList;