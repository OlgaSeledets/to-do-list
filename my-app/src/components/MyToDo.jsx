import React from 'react';

const MyToDo = ({elem, arr, foo, index, id}) => {
    const handleClickDelete = () => {
        const newArr = arr.filter((e) => e.id !== id)
        foo(newArr)
    }

    const styleCompleted = {
        backgroundColor: "gray",
    }

    const styleUnCompleted = {
        backgroundColor: "#60a3bc",
    }
    
    const checkBox = () => {
        foo([...arr.map((e) => e.id === id ? { ...e, completed: !e.completed } : { ...e })])
    }
    
    return (
        <div className='myToDo' style={arr[index].completed ? styleCompleted : styleUnCompleted}>
            <input onChange={() => checkBox()} className='checkbox' type="checkbox" checked={arr[index].completed && 'checked'}></input>
            <label className='myToDo__text'>{elem}</label>
            <button onClick={() => handleClickDelete()} className='delete-btn'>Delete</button>
        </div>
    );
}

export default MyToDo;
