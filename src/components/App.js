import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header"
import About from "./About";
import ArticleList from "./ArticleList";


console.log(blogData);

function App() {
  return (
    
<div>
<Header blogName = {blogData.name}/>;
<About image={blogData.image} about= {blogData.about}/>
<ArticleList posts={blogData.posts}/>
</div>
    
  )
  
  // return (
  //   // <div className="App">
  //   //   You're on your own from here! Follow the deliverables; test things out in
  //   //   the browser as you write your code; and good luck!
  //   // </div>
  //   <Header />
  // );
}



export default App;
 