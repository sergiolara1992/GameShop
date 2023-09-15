import { useState, useEffect } from "react";
import Post from "../../components/Post";




function Blog() {
 

   async function fecthData() {
     const respuesta = await fetch("http://localhost:4000/blog");
     const resultado = await respuesta.json();
     setBlogs(resultado);
   }

   const [blogs, setBlogs] = useState([]);
   useEffect(() => {
     fecthData();
   }, []);




  return (
    <main className="container">
      <h2 className="heading">Reviews And News</h2>
      <div className="blog">
        {blogs.map((post) => (
          <Post key={post?.id} post={post} />
        ))}
      </div>
    </main>
  );
}

export default Blog;
