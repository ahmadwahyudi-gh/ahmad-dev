import Link from "next/link";
import Navbar from "../components/Navbar";
import Head from "next/head";
function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="text-wrapper wFull">
            <h1 className="title">About</h1>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
              laudantium explicabo, temporibus perspiciatis laborum repellat
              distinctio omnis officiis. Quos odio perferendis eaque deserunt
              error est voluptatibus quia laudantium laborum nisi?
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
