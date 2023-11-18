// prop 来自于Home的 <BlogList blogs={blogs}/>

import { Link } from "react-router-dom/cjs/react-router-dom.min";

// 这三行代码也可以只写一行： const BlogList = ({blogs, title, handleDelete}) => {
const  BlogList= ({blogs}) => {

    return (  
        <div className="blog-list">

            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}> 
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;