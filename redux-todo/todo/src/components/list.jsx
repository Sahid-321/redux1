import { connect } from 'react-redux';
import React from 'redux';
import todos from '../reducers/todos';
import { deleteTodo } from '../action';
const List = (props)=>{
return (
    <ul>
        {props.todos.map((todo,index) => (
            <li key={index}>{todo.message} 
            <button onClick={() => props.dispatch(deleteTodo(todo.id))}>Delete</button>
            </li>
        ))}
    </ul>
)
}
const mapStateToProps = (state) => ({
    todos: state.todos.data,
});

export default connect(mapStateToProps)(List);