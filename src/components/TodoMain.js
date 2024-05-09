import React from 'react';
import '../scss/TodoMain.scss';
import TodoItem from './TodoItem';

const TodoMain = ({todoList,remove,check}) => {
  return (
    <ul className='todo-list'>
      {todoList.map((todos)=>{
        return <TodoItem key={todos.id} item={todos} remove={remove} check={check}/>
      })}
    </ul>
  );
};

export default TodoMain;