import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={ styles.title }>Homepage</h1>
        <p className={ styles.text }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi debitis itaque minima tenetur quidem dicta harum tempora exercitationem beatae provident earum, a dignissimos error corrupti magni consequatur? Est, perspiciatis porro.</p>
        <p className={ styles.text }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi debitis itaque minima tenetur quidem dicta harum tempora exercitationem beatae provident earum, a dignissimos error corrupti magni consequatur? Est, perspiciatis porro.</p>
        <Link href={"/ninjas"}><a className={ styles.btn }>See Ninjas Listing</a></Link>
      </div>
    </>
  );
}

export default Home;
