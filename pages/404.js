import Link from "next/link";
import { useEffect } from "react";
import { Router, useRouter } from "next/dist/client/router";

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // router.go(1)
            router.push("/")
        }, 3000)
    }, [])
    
    return ( 
        <div className="text-center">
            <h1 className="text-5xl"><b>404 Page Not Found</b></h1>
            <h2>The page that you are looking for is removed.</h2>
            <span>Go back to </span><Link href="/"><a className="text-red-700">Homepage</a></Link>
        </div>
    );
}
 
export default NotFound;