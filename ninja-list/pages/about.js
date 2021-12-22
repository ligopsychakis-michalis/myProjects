import styles from "../styles/Home.module.css";
import Head from 'next/head';

function About () {
    return (
        <>
            <Head>
                <title>Ninja List | About</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1 className={ styles.title }>About</h1>
                <p className={ styles.text }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi debitis itaque minima tenetur quidem dicta harum tempora exercitationem beatae provident earum, a dignissimos error corrupti magni consequatur? Est, perspiciatis porro.</p>
                <p className={ styles.text }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi debitis itaque minima tenetur quidem dicta harum tempora exercitationem beatae provident earum, a dignissimos error corrupti magni consequatur? Est, perspiciatis porro.</p>
            </div>
        </>    
    )
}

export default About;