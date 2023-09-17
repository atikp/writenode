import { addDoc, collection } from "firebase/firestore";
import { useTitle } from "../hooks/useTitle";
import { db,auth } from "../firebase/config"
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const navigate = useNavigate();
  useTitle("Create Post")
  const postRef = collection(db, "posts");

  async function handleCreatePost(event){
    event.preventDefault();
    const document = {
      title: event.target.title.value,
      description: event.target.description.value,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    }
    await addDoc(postRef, document);
    navigate("/");

  }
  return (
    <section className="create">
      <div className="heading">
        <h1>Add New Post</h1>
      </div>
      <form className="createPost" onSubmit={handleCreatePost}>
        <input type="text" className="title" name="title" placeholder="Title" maxLength="50" required />
        <textarea  className="description" name="description" placeholder="description" maxLength="600" required />
        <button type="submit" className="submit">Create Post</button>
      </form>
    </section>
  )
}
