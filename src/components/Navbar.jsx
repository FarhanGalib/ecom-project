import { Link } from 'react-router-dom';
import React from 'react';
import styles from '../module.css/navbar.module.css';
const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                Logo
            </div>
            <div className={styles.navigation}>
                <Link exact to="/" className={styles.home}>Home</Link>
                <Link exact to="/create-product" className={styles.create_product}>Create Product</Link>
            </div>
        </div>
    );
};

export default Navbar;