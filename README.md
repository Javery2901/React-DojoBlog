## Learning Points
1. onClick:
    <button onClick={handleClick}>Click me</button> 
    <button onClick={() => handleClickAgain('Javy')}>Click me again</button> 
2. useState
    import {useState} from "react";
    const [name, setName] = useState('Jevy');
    const handleClickHook = () => setName("Jevy Hu");


