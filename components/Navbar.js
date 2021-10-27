import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <header>
            <div className="bg-blue-600 text-white text-sm">
                <div className="max-w-7xl mx-auto py-2 px-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p>Perfecting the washroom environment from design to completion</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <div className="pl-6">
                                    <p>
                                        <svg className="inline-block mr-2" xmlns="http://www.w3.org/2000/svg" width="11.691" height="11.691" viewBox="0 0 11.691 11.691"><defs></defs><path fill="#fff" className="a" d="M6.408.563a5.845,5.845,0,1,0,5.845,5.845A5.844,5.844,0,0,0,6.408.563ZM7.754,8.814,5.675,7.3a.285.285,0,0,1-.115-.229V3.108a.284.284,0,0,1,.283-.283H6.974a.284.284,0,0,1,.283.283V6.354l1.5,1.089a.283.283,0,0,1,.061.4l-.665.915A.285.285,0,0,1,7.754,8.814Z" transform="translate(-0.563 -0.563)"/></svg>
                                        Opening Hours 8:00AM – 5:00PM
                                    </p>
                                </div>
                                <div className="pl-6">
                                    <a href="mailto: info@cubispec.com.au">
                                        <svg className="inline-block mr-2" xmlns="http://www.w3.org/2000/svg" width="9.713" height="7.771" viewBox="0 0 9.713 7.771"><defs></defs><path fill="#fff" className="a" d="M11.742,6H3.971A.97.97,0,0,0,3,6.971L3,12.8a.974.974,0,0,0,.971.971h7.771a.974.974,0,0,0,.971-.971V6.971A.974.974,0,0,0,11.742,6Zm0,1.943L7.857,10.371,3.971,7.943V6.971L7.857,9.4l3.885-2.428Z" transform="translate(-3 -6)"/></svg>
                                        info@cubispec.com.au
                                    </a>
                                </div>
                                <div className="pl-6">
                                    <a href="tel: 1800951235">
                                        <svg className="inline-block mr-2" xmlns="http://www.w3.org/2000/svg" width="9.713" height="7.771" viewBox="0 0 9.713 7.771"><defs></defs><path fill="#fff" className="a" d="M11.742,6H3.971A.97.97,0,0,0,3,6.971L3,12.8a.974.974,0,0,0,.971.971h7.771a.974.974,0,0,0,.971-.971V6.971A.974.974,0,0,0,11.742,6Zm0,1.943L7.857,10.371,3.971,7.943V6.971L7.857,9.4l3.885-2.428Z" transform="translate(-3 -6)"/></svg>
                                        1800 951 235
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 border-b border-gray-300">
                <div className="flex items-center justify-between">
                    <div className="main-logo">
                        <Link href="/">
                            <a>
                                <Image src="/logo.svg" alt="" width={259} height={47} />
                            </a>
                        </Link>
                    </div>
                    <ul className="flex items-center uppercase leading-78 font-medium">
                        <li className="ml-3"><Link href="/about"><a>About</a></Link></li>
                        <li className="ml-3"><Link href="/productlists"><a>Products</a></Link></li>
                        <li className="ml-3"><Link href="/ninjas"><a>Ninja Listing page</a></Link></li>
                        <li className="ml-3"><Link href="/ninjas/test"><a>Ninja Test</a></Link></li>
                    </ul>
                    <div>
                        <a href="#" className="bg-blue-600 text-white upp rounded py-3 px-6 hover:bg-blue-700">Talk to us</a>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Navbar;