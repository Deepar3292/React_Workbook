import { useState } from "react";

export default function UseStateExample() {
    let [name, setName] = useState("Rahul");
    let [age, setAge] = useState(23);

    return <div>
        Name: {name}<br />
        Age: {age} <br />
        <button onClick={() => setAge(age+1)}>Increment</button>
    </div>
}