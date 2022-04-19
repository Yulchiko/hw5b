import React, {useReducer} from 'react';

const reducer = (state, action) => {
    const {type} = action;
    switch (type) {
        case 'inc1':
            return {...state, count1: state.count1 + 1}
        case 'inc2':
            return {...state, count2: state.count2 + 1}
        case 'inc3':
            return {...state, count3: state.count3 + 1}
        case 'des1':
            return {...state, count1: state.count1 - 1}
        case 'des2':
            return {...state, count2: state.count2 - 1}
        case 'des3':
            return {...state, count3: state.count3 - 1}
        case 'reset1':
            return {...state, count1: 0}
        case 'reset2':
            return {...state, count2: 0}
        case 'reset3':
            return {...state, count3: 0}

        default :
            console.error('невідомий тип!');
            return state;
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0})
    return (
        <div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <div> Count #1: {state.count1}</div>
                <button onClick={() => dispatch({type: 'inc1'})}>inc</button>
                <button onClick={() => dispatch({type: 'des1'})}>des</button>
                <button onClick={() => dispatch({type: 'reset1'})}>reset</button>
                <div style={{marginLeft:'50px'}}> Count #2: {state.count2}</div>
                <button onClick={() => dispatch({type: 'inc2'})}>inc</button>
                <button onClick={() => dispatch({type: 'des2'})}>des</button>
                <button onClick={() => dispatch({type: 'reset2'})}>reset</button>
                <div style={{marginLeft:'50px'}}> Count #3: {state.count3}</div>
                <button onClick={() => dispatch({type: 'inc3'})}>inc</button>
                <button onClick={() => dispatch({type: 'des3'})}>des</button>
                <button onClick={() => dispatch({type: 'reset3'})}>reset</button>
            </div>
        </div>
    );
};

export default App;