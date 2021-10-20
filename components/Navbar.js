import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <header>
            <div className="bg-blue-600 text-white">
                <div className="max-w-7xl mx-auto py-1 px-4">
                    <div className="flex items-center justify-between">
                        <div>
                            Solution for your success
                        </div>
                        <div>
                            <p>Have some questions?Give us a call <a href="tel:">01234567890</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto p-4 border-b border-gray-300">
                <div className="flex items-center justify-between">
                    <div className="main-logo">
                        <Link href="/">
                            <a>
                                <Image src="/logo.svg" alt="" width={259} height={47} />
                            </a>
                        </Link>
                    </div>
                    <ul className="flex items-center">
                        <li className="ml-3"><Link href="/"><a>Home</a></Link></li>
                        <li className="ml-3"><Link href="/about"><a>About</a></Link></li>
                        <li className="ml-3"><Link href="/products"><a>Products</a></Link></li>
                        <li className="ml-3"><Link href="/ninjas"><a>Ninja Listing page</a></Link></li>
                        <li className="ml-3"><Link href="/ninjas/test"><a>Ninja Test</a></Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
 
export default Navbar;