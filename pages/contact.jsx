import Link from "next/link";
import Navbar from "../components/Navbar";
import Head from "next/head";

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="text-wrapper wFull">
            <h1 className="title">Contact</h1>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <ul className="contact-links">
              <li className="contact-item">Phone: +6282336017798</li>
              <li className="contact-item">Email: bhoscream@gmail.com</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
