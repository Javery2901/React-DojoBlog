// prop 来自于Home的 <BlogList blogs={blogs}/>
// 这三行代码也可以只写一行： const BlogList = ({blogs, title, handleDelete}) => {
const  BlogList= (props) => {
    const blogs = props.blogs;
    const title = props.title;
    const handleDelete = props.handleDelete;

    return (  
        <div className="blog-list">

            <h2>{title}</h2>

            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}> 
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>

                <button onClick={() => handleDelete(blog.id)}>delete blog</button>

                </div>
            ))}
        </div>
    );
}
 
export default BlogList;