import './App.css';
import React from 'react'
import HookTimer from './component/useRef/HookTimer';
// import React, { useReducer } from 'react';
// import ComponentC from './component/UseContext/ComponentC';
// import CounterOne from './component/useReducer/CounterOne';
// import CounterTwo from './component/useReducer/CounterTwo';
// import CounterThree from './component/useReducer/CouterThree';
// import ComponentA from './component/useReducer/ComponentA';
// import ComponentB from './component/useReducer/ComponentB';
// import ComponentC from './component/useReducer/ComponentC';
// import DataFetchingTwo from './component/useReducer/DataFetchingTwo';
// import DataFetching from './component/UseEffect/DataFetching';
// import HookCounter from './component/HookCounter';
// import HookCounterTwo from './component/HookCounterTwo';
// import HookCounterThree from './component/HookCounterThree';
// import HookCounterFour from './component/HookCounterFour';
// import HookCounterOne from './component/UseEffect/HookCounterOne';
// import HookMouse from './component/UseEffect/HookMouse';
// import MouseContainer from './component/UseEffect/MouseContainer';

// import ParentComponent from './component/UseCallBack/ParenComponent'
// import Counter from './component/useMemo/Counter';
// import FocusInput from './component/useRef/FocusInput';

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

// useReducer
// export const CountContext = React.createContext();
// const initialState  = 0

// const reducer = (state, action) => {
//   switch(action) {
//     case 'increment':
//         return state + 1
//     case 'decrement':
//         return state - 1
//     case 'reset':
//         return initialState
//     default:
//         return state
//   }
// }


function App() {

  // const [count, dispatch] = useReducer(reducer, initialState);


  return (
    <div className="App">
      {/* <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour /> */}

      {/* <HookCounterOne /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <DataFetching /> */}


      {/* <UserContext.Provider value={"Sudhir"}>
        <ChannelContext.Provider value={'Singh'}>
          <ComponentC  />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}



      {/* <div>Count - {count}</div>
      <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}

      {/* <DataFetchingTwo /> */}

      {/* <ParentComponent /> */}

      {/* <Counter /> */}

      {/* <FocusInput /> */}

      <HookTimer />
    </div>
  );
}

export default App;
