import {useState, useEffect} from 'react';

export default function UseEffectExample() {
    let [name, setName] = useState("Rahul");
    let [age, setAge] = useState(32);

    useEffect(() => {
        console.log("Component updated!!! like component did update lifecycle hook")
    })

    useEffect(() => {
        console.log("Component Mounted!!! like component did mount lifecycle hook");
        return () => console.log("Component unmount");
    }, [])

    useEffect(() => {
        console.log("Age Changed!! like should component update hook")
    }, [age])

    return <div>
        Name: {name} <br />
        Age: {age} <br />
        <button onClick={() => setAge(age+1)}>Increment</button>
    </div>
}