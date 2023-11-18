import {useState} from "react";

const Home = () => {
  // 括号内的参数看需要添加
  const handleClick = () => {
    console.log("hello, ninjas");
  }
  
  const handleClickAgain = (name) => { 
    console.log("hello, " + name);
  }

  const [name, setName] = useState('Jevy'); // 可以是多种数据类型
  const [age, setAge] = useState(28); // 可以是多种数据类型
  
  const handleClickHook = () => {
    setName("Jevy Hu");
    setAge(100);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>

      {/* onClick={handleClick}不加括号，加括号代表自动调用，即用户每点击button就已经运行handleClick */}
      <button onClick={handleClick}>Click me</button> 

      {/* 因此采用匿名函数的方式，相当于handleClickAgain('Javy')被()匿名函数封装
       但对于handleClickAgain来说，函数是一定有一个参数的，但如果直接像onClick={handleClickAgain("Javy")}这么写会直接调用运行，而不是用户点击了button才运行 */}
      <button onClick={() => handleClickAgain('Javy')}>Click me again</button> 

      {/* 在这里name已经显示在页面上，当我点击后希望改变这个name，则需要使用useState，能进行捕捉 
       useState需要import,并且注意其用法*/}
      <p>{ name } is{ age } years old</p>
      <button onClick = {handleClickHook}> Click me to change </button> 

    </div>
  );
}
   
  export default Home;