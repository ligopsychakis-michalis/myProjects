import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/Ninjas.module.css';

export async function getServerSideProps () {
    const res = await fetch('http://ninja-sigma.vercel.app/api/ninjas');
    const data = await res.json();

    return { props: { ninjas: data.ninjas } };
}

function Ninjas ({ ninjas }) {
    return (
        <>
            <Head>
                <title>Ninja List | Ninjas</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div> 
                <h1>Ninjas List</h1>
                { ninjas.map(ninja => (
                    <div key={ ninja.id } className={ styles.single }>
                        <Link href={`/ninjas/${ninja.id}`}>
                            <a>
                                <h3>{ ninja.name }</h3>
                            </a>
                        </Link>
                    </div>
                )) }
            </div>
        </>
    )
}

export default Ninjas;
