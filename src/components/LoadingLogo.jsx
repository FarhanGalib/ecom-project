import React from "react";
import Styles from "../module.css/loadingLogo.module.css";

const LoadingLogo = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.flex}>
                <div className={Styles.loader}></div>
            </div>
            <div className={Styles.load_text}>Loading...</div>
        </div>
    );
};

export default LoadingLogo;
