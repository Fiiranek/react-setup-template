import React from 'react'
import styles from './home.module.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { decrement, increment } from '../../store/actions'
function Home() {

    const dispatch = useDispatch();

    const counter = useSelector(state => state.counter)

    return (
        <div classNames={styles.home}>
          
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() =>dispatch(decrement())}>Decrement</button>
            <h2>  {counter}</h2>
        </div>
    )
}

export default Home

