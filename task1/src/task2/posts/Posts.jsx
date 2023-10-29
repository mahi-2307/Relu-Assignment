import Post from "../post/Post";
import "./Posts.scss";
import img1 from "../../assets/img1.png"
import pp1 from "../../assets/pp1.png"
import pp2 from "../../assets/pp2.png"
import img2 from "../../assets/img2.png"
import Painting from "../painting/Painting";
const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Lara Leones",
      userId: 1,
      profilePic:
       pp1,
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Read More",
      img: img1,
    },
    {
      id: 2,
      name: "Thomas",
      userId: 2,
      profilePic:
        pp2,
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Read More",
      img: img2,
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
    <div className="paintings">
      <Painting/>
    </div>
  </div>;
};

export default Posts;