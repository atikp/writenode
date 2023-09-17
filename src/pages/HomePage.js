import { useEffect, useState, useRef } from "react";
import { useTitle } from "../hooks/useTitle";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config"
import { PostCard, SkeletonCard } from "../components"


export const HomePage = () => {
  const [posts,setPosts] = useState(new Array(2).fill(false));
  const [toggle, setToggle] = useState(false); // forces re render so that the homepage updates
  useTitle("Home")
  const postRef = useRef(collection(db,"posts"));

  useEffect(() => {
    async function getPosts(){
      const data = await getDocs(postRef.current);
     setPosts( data.docs.map((document) => ({...document.data(), id:document.id})))
    };
    console.log("---")
    getPosts()
  },[postRef, toggle])
  return (
    <section>
      {posts.map((post, index) => (
        post ? (
          <PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle}/>
        ) :(
          <SkeletonCard key={index} />
        )
      )

      )}
    </section>
  )
}
