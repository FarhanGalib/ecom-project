import React from "react";
import Styles from "../module.css/loadingLogo.module.css";

const LoadingLogo = () => {
    return (
        <div className={Styles.container}>
            <div class={Styles.flex}>
                <div class={Styles.loader}></div>
            </div>
            <div class={Styles.load_text}>Loading...</div>
        </div>
    );
};

export default LoadingLogo;
