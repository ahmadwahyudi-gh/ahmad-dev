import Link from "next/link";
import Navbar from "../components/Navbar";
import Head from "next/head";
function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="text-wrapper wFull">
            <h1 className="title">Portfolio</h1>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
              laudantium explicabo, temporibus perspiciatis laborum repellat
              distinctio omnis officiis.
            </p>
            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img src="/stopsmoking.png" className="portfolio-image" />
                <h4 className="portfolio-name">Stopsmokingyuk Campaign</h4>
                <div className="portfolio-category">Web Campaign</div>
              </div>

              <div className="portfolio-item">
                <img src="/colosal.png" className="portfolio-image" />
                <h4 className="portfolio-name">Colosal Web Design</h4>
                <div className="portfolio-category">Web Design</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
