### Why React Hooks ??
#### Reason Set 1

Understand how this keyword works in Javascript
Remember to bind event handlers in class component
Classes don't minify very well and make hot reloading very unrailable.

#### Reason Set 2
There is no no particular way to resuse stateful component logic.
HOC and render props patterns do adderess this problem.
Makes the code harder to follow
There is need a to share stateful logic in better way.

#### Reason Set 3
Create components for complex scenarios such as data fetching and subscribing to events Related code is not organized in one place
Ex- Data fetching  -in componentDidMount, and  componentDidUpdate
Ex- Event Liserners  -in componentDidMount, and  componentWillMount

Because of stateful logic - cannot break component into smalller  ones


#### Noteworrthy Points
React version 16.8 or higher
Complety opt  in
Hooks don't contain any breaking changes and the release in 100% backwards-compatible
Classes won't be removed from react
Can't use Hooks inside of class component
Hooks dont replace your existing knowledge of react concept
Insted, Hooks provide a more direct API to the react concepts you already know

### React Hooks

##### useState
Hooks is simply function. It will initial value state and return current value of property and method that is capable of updating state property

const [variable, setVariable] = useState(stateInitialValue)
setVaiable is method

const [count, setCount] = useState(0)

#### Two important rules
"Only call Hooks at Top Level"
Don't call Hooks inside loops, condition, or nested functions

"Only call hooks from react functions"
Call them from within react functional compnents and not just any regular js function.


#### How to set state with prevState

setCount(prevState => prevState + 1)

#### useState with object
const [name, setName] = useState({
    firstName: "",
    lastName: ""
})

onChange={e => setName({...name, firstName: e.target.value})}

#### useState with array
const [items, setItems] = useState([])

const addItem = () => {
    setItems([...items, {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
    }])
}

### Summary useState
The useState hook lets you add state to functional components.
In classes, the state is always an object
With the  useState hook, the  state doesn't hoave to be an object
The useState hook return an array with 2 elements
The First element in the current value of the state, and the second element in a state setter function.
New State value depends on he previous state value?  You can pass a fucntion to the setter funtion.
When dealing wiht objects or array, always make sure to spread your state variable and then call the setter function.


### useEffect
The Effect Hook lets you perform side effects in functional components

It is close replacement for componentDidMount, componentDidUpdate and componentWillUnmount

#### useEffect after render
useEffect is also a function we simply call it.In useefect we pass parameter.
Parameter is function which gets executed after every render of the component.

useEffect(() => {
    document.title = `You clicked ${count} times`
})

useEffect run after every render

#### Conditionally run effects
useEffect(() => {
    // runs on every render its not optimal
    console.log('useEffect - Updating document title')
    document.title = `You clicked ${count} times`
}, [count])

useEffect depends on [] of values for condition render.

### Run effect only once
componentDidMount in hook with passing [] in useEffect 2nd arguments
useEffect(() => {
    console.log('useEffect callled')
    window.addEventListener('mousemove', logMousePosition)
}, [])

### useEffect with cleanup (componentWillUnmount)
useEffect function return a function where we can remove the event.

useEffect(() => {
    console.log('useEffect callled')
    window.addEventListener('mousemove', logMousePosition)

    // cleanup --> willUnmount
    return () => {
        console.log('component ummounting')
        window.removeEventListener('mousemove', logMousePosition)
    }
}, [])

#### Fetching data with useEffect
Fetching data on didMount

useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        setPosts(res.data)
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}, [])

### Context -- Hooks
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

3 steps use the context
1. create the context 
const UserContext = React.createContext();

2. Provide context with value and provider must wrap the chidren component for value to be available.
<UserContext.Provider value={"sudhir"}>
<ComponentC />
</UserContext.Provider>

3. To consume the context value.
<UserContext.Consumer>
    {
        user => {
            return <div>User context value {user}</div>
        }
    }
</UserContext.Consumer>

if we have two context then still we are going nested 
<UserContext.Consumer>
    {
        firstname => {
            return (
                <ChannelContext.Consumer>
                    {
                        lastname => {
                            
                            return <div>User context value {firstname}{" "}{lastname}</div>
                        }
                    }
                </ChannelContext.Consumer>

            )
        }
    }
</UserContext.Consumer>

so then useContext comes into the picture.
useContext only make the comsumption way simpler but creating and providing context is still same.
3 simple way to consume 

1. import useContext from react
2. import necessary context
3. call the useContext and passing the as parameter

const user = useContext(UserContext)
const channel = useContext(ChannelContext)


### useReducer
useReducer is hook that us used for state management.
it is an alternative to useState.
Whats the difference bw two?
useState is built using the useReducer

When to useReducer vs useState?

##### Hook so for
useState -> state
useEffect -> side effects
useContext -> contect API
userReducer -> reducers

#### reduce -- function
reducer = (accumulator, currentvalue) => accumulator + currentvalue

console.log([1,2,3,4].reduce(reducer))   // output 10

console.log([1,2,3,4].reduce(reducer, 5))  // reduce also recieve the initial value --> output 10 + 5 = 15

#### reduce vs useRducer
reduce in JavaScirpt  useReducer in React
array.reduce(reducer, initialValue)    useReducer(reducer, initial state)
singleValue = reducer(accumulator, itemValue)    newState = useReducer(currentState, action)

reduce method retuns a single value   useReducer returns a pair of values [newState, dispatch]

1. need to import useReducer from react
import React, { useReducer } from 'react'

2.Define the reducer funciton and intialState 
useReducer(reducer, initialState)

const initialState  = 0

const reducer = (state, action) => {
    return newState
}

3. Get to hold of value rendern into JSX and call the action.
useReducer return [currentState, and dispatch]

Example:
`jsx
import React, { useReducer } from 'react'

const initialState  = 0

const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterOne() {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>count: {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne
`

#### useReducer with complex state & action
`jsx
import React, { useReducer } from 'react'

const initialState  = {
    firstCounter: 0
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return {firstCounter: state.firstCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterTwo() {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>countTwo: {count.firstCounter}</div>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
            
            <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default CounterTwo`

#### multiple useReducer
It will prevent us to duplicating the code (action and state)
`jsx
import React, { useReducer } from 'react'

const initialState  = 0

const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterThree() {

    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
    return (
        <div>
            <div>count: {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>

            <div>count2: {countTwo}</div>
            <button onClick={() => dispatchTwo('increment')}>Increment</button>
            <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
            <button onClick={() => dispatchTwo('reset')}>Reset</button>
        </div>
    )
}
`

#### useReducer with useContext
useReducer  - local state management
share state between components - global state management
userReducer + useContext

Make gloabal state and pass the state in multiple component
1. create state with useReducer
2. Provide and consume with useContext

Example

`jsx
import './App.css';
import React, { useReducer } from 'react';
import ComponentA from './component/useReducer/ComponentA';
import ComponentB from './component/useReducer/ComponentB';
import ComponentC from './component/useReducer/ComponentC';
export const CountContext = React.createContext();
const initialState  = 0

const reducer = (state, action) => {
  switch(action) {
    case 'increment':
        return state + 1
    case 'decrement':
        return state - 1
    case 'reset':
        return initialState
    default:
        return state
  }
}


function App() {

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <div>Count - {count}</div>
      <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>

    </div>
  );
}

export default App;

`

`jsx
import React, { useContext } from 'react'
import { CountContext } from '../../App'


function ComponentA() {
    const countContext = useContext(CountContext);
    return (
        <div>
            ComponentA - {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentA

import React from 'react'
import ComponentD from './ComponentD'

function ComponentB() {
    return (
        <div>
            <ComponentD />
        </div>
    )
}

export default ComponentB



import React from 'react'
import ComponentE from './ComponentE'

function ComponentC() {
    return (
        <div>
            <ComponentE />
        </div>
    )
}

export default ComponentC



import React, { useContext } from 'react'
import { CountContext } from '../../App'


function ComponentD() {
    const countContext = useContext(CountContext);
    return (
        <div>
            ComponentD - - {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentD



import React from 'react'
import ComponentF from './ComponentF'

function ComponentE() {
    return (
        <div>
            <ComponentF />
        </div>
    )
}

export default ComponentE



import React, { useContext } from 'react'
import { CountContext } from '../../App'


function ComponentF() {
    const countContext = useContext(CountContext);
    return (
        <div>
            ComponentF - - {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentF
`

#### useReducer with dataFetching
