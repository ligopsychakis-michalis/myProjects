import Link from 'next/link';
import Image from 'next/image';

function Navbar () {
    return (
        <nav>
            <div className={'logo'}>
                <Image src="/logo.png" alt="logo" width={127} height={77} />
            </div>
            <Link href={"/"}><a>Home</a></Link>
            <Link href={"/about"}><a>About</a></Link>
            <Link href={"/ninjas"}><a>Ninja Listing</a></Link>
        </nav>
    );
}

export default Navbar;