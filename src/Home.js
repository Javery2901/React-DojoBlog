import {useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {

  // 进行循环操作，可以用javascript的map
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  const [name, setName] = useState("mario");

  // use prop, 不会真正改变原数据，仅仅是这里处理过滤
  const handleDelete = (id) => {
    // filter, 如果id不是我们想删除的id，则返回true，如果是我们删除的则返回false
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  // 函数每次重新渲染时都会运行(初始化，刷新，删除，每次useState变化等)
  // 第二参数，依赖数组，如果是一个空的，表明只在最开始加载时运行一次，其余时候不运行
  // []中可以之间听某种特别事件
  useEffect(() => {
    console.log("use effect ran");
    console.log(name);
  }, [name]);

  return (
    // 我们需要将blogs数据弄进BlogList, Home可以看作是父component，而BlogList是子component
    // blogs={blogs} 这种方式下，blogs可以被传入BlogList as a prop
    <div className="home">
      <BlogList blogs={blogs} title ="All Blogs!" handleDelete = {handleDelete}/>

      <button onClick={() => setName("Jevy")}>change name</button>
      <p>{name}</p>
      
      {/* 进行一次过滤，BlogList代码代码再次使用，但是这次添加一个作者过滤 */}
      <BlogList blogs={blogs.filter(blog => blog.author === "mario")} title ="mario Blogs" handleDelete = {handleDelete}/>

    </div>
  );
}
  
export default Home;