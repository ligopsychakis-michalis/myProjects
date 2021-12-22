import Head from 'next/head';
import styles from '../../styles/Ninjas.module.css';

export async function getStaticPaths () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    const paths = data.map(d => ({ params: { id: d.id.toString() } }));

    return { paths, fallback: false };
}

export async function getStaticProps ({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const data = await res.json();

    return { props: { ninja: data } };
}

function Ninja ({ ninja }) {
    return (
        <>
            <Head>
                <title>Ninja List | Ninja</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1>{ ninja?.name }</h1>
                <div className={ styles.singleDetails }>
                    <p><strong>Email:</strong> { ninja?.email || '-'}</p>
                    <p><strong>Website:</strong> { ninja?.website || '-'}</p>
                    <p><strong>City:</strong> { ninja?.address?.city || '-'}</p>
                </div>
            </div>
        </>
    );
}

export default Ninja;