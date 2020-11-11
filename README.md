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