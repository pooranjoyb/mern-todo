import React, { useState } from 'react'
import { addNewTodo } from '../redux/actions';
import { useDispatch } from 'react-redux';

export default function Header() {

    const [text, settext] = useState("");

    const dispatch = useDispatch();
    const submitTodo = (e) =>{
        e.preventDefault();
        dispatch(addNewTodo(text));

    }
    const inputOnChange = (e) => {
        settext(e.target.value)
    }
    return (
        <>
        <form onSubmit={submitTodo}>
            <div className="container">
                MernTodo
                <div className="input-group mb-3" id='input'>
                    <input type="text" className="form-control" placeholder="Enter Todo" aria-label="Enter Todo" aria-describedby="button-addon2" onChange={inputOnChange}/>
                    <input className="btn btn-outline-success" type="submit" id="button-addon2" value="Add Todo"/>
                </div>
            </div>
            </form>
        </>
    )
}
