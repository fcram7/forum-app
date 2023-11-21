import { Link } from "react-router-dom";

const HomeUnAuthed = () => {
  return ( 
    <section className="home-unauth-section">
      <div className="hero grid">
        <h1>Welcome To Dicoding Forum!</h1>
        <h2>A place to discuss various dicoding related stuffs!</h2>
        <button>
          <Link to='/login'>Login to get started</Link>
        </button>
      </div>

      <div className="features grid">
        <h1>Dicoding Forum Features</h1>

        <div className="features-list grid">
          <article className="list-card grid">
            <h2>Interact</h2>
            <p>Discuss anything about dicoding, and programming related topic</p>
          </article>

          <article className="list-card grid">
            <h2>Upvote</h2>
            <p>Upvote any threads you deemed to be great!</p>
          </article>

          <article className="list-card grid">
            <h2>Upvote</h2>
            <p>Upvote any threads you deemed to be great!</p>
          </article>
        </div>
      </div>
    </section>
   );
}
 
export default HomeUnAuthed;