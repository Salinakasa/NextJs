import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (  
        <div className="content">
            <Navbar />
            <div className="max-w-7xl px-4 mx-auto py-10">
                { children }
            </div>
            <Footer />
        </div>
    );
}
 
export default Layout;