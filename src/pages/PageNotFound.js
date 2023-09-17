import { useTitle } from "../hooks/useTitle";
import { Link } from "react-router-dom"
import pnfImage from "../assets/images/page-not-found.jpg"

export const PageNotFound = () => {
  useTitle("Ooops Page Not Found")
  return (
    <section className="pageNotFound">
      <p>404 / Page Not Found</p>
      <img src={pnfImage} alt="oops page not found" />
      <Link to="/"><button>Back to home</button></Link>
    </section>
  )
}
