import React, {useState} from 'react';
import MyToDo from './MyToDo';

const AddToDo = () => {
    const [toDo, setToDo] = useState('');
    const [addToDo, setAddToDo] = useState([]);
    const [click, setClick] = useState(false);

    const styleDisabled = {
        backgroundColor: "gray",
        cursor: "not-allowed",
    }

    const styleEnabled = {
        backgroundColor: "aliceblue",
        cursor: "pointer",
    }
    
    const handleClickAdd = () => {
        addToDo.push(toDo)
        const newToDo = addToDo.map((item) => {
            if(typeof(item) !== 'object') {
                item = {item, completed: false, id: Math.random().toString(36)}
            }
            return item
        })
        setAddToDo([...newToDo])
        
        if(click === false) {
            setClick(true)
            setToDo('')
        }
        else {
            setClick(false)
            setToDo('')
        }
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          handleClickAdd()
        }
      }
  
    return (
        <div>
            <div className='wrapper'>
                <label className='label'>
                    <input onKeyPress={handleKeyPress} onChange={e => setToDo(e.target.value)} className='input' type="text" placeholder='Enter ToDo' value={toDo}></input>
                    <button onClick={() => handleClickAdd()} className='add' style={(toDo === '' || toDo === undefined) ? styleDisabled : styleEnabled} disabled={(toDo === '' || toDo === undefined) && "disabled"}>Add</button>
                </label>
            </div>
            <div className='list'>
                {
                    addToDo.map((elem, i) => {
                        return <MyToDo elem={elem.item} index={i} arr={addToDo} foo={setAddToDo} id={elem.id} completed={elem.completed} key={i}/>
                    })
                }
            </div>
        </div>
    );
}

export default AddToDo;
