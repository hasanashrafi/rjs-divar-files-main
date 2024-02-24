import Footer from "./Footer";
import Header from "./Header";

import styles from "./LayOut.module.css"

function Layout({ children }) {
    return (
        <>
            <Header />
            <div className={styles.main}>
                {children}
            </div>
            <Footer />
        </>
    );
}

export default Layout;
