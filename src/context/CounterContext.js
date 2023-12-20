import { useState } from "react";
import { createContext } from "react";

export let CounterContext = createContext()

export function CounterContextProvider(props) {

    let [counter, setCounter] = useState(1)

    let increase = () => { counter === -1 ? setCounter(counter = 1) : setCounter(counter + 1) }
    let decrease = () => { counter >= 1 ? setCounter(counter - 1) : setCounter(counter) }

    let providerValue = { counter, increase, decrease }

    return (
        <CounterContext.Provider value={providerValue}>
            {props.children}
        </CounterContext.Provider>
    );
}