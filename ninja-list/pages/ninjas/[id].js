import Head from 'next/head';
import styles from '../../styles/Ninjas.module.css';

export async function getServerSideProps ({ params }) {
    const res = await fetch(`http://ninja-sigma.vercel.app/api/ninjas/${params.id}`);
    const data = await res.json();

    return { props: { ninja: data.ninja } };
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
