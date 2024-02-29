import { Link, useNavigate } from "react-router-dom";

import styles from "./Header.module.css"
import { deleteCookie } from "src/utils/cookie";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "src/services/user";


function Header() {
    const navigate = useNavigate()
  const { refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  })
  
    return (

        <header className={styles.header}>
            <div>
                <Link to="/">
                    <img src="divar.svg" className={styles.logo} />
                </Link>
                <span>
                    <img src="location.svg" />
                    <p>تهران</p>
                </span>
            </div>
            <div>
                <Link to="/auth"  >
                    <span>
                        <img src="profile.svg" />
                        <p>دیوار من</p>
                    </span>

                    <div className={styles.navBar} onClick={deleteCookie} >
                        <Link to="/auth" > خروج</Link>
                    </div>

                </Link>

                <Link to="/dashboard" className={styles.button}>
                    ثبت آگهی
                </Link>
            </div>
                    </header>

    );
}

export default Header;
