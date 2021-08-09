import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Container,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Styles from "../module.css/products.module.css";
import LoadingLogo from "./LoadingLogo";
import { CardHeader } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 5000,
        marginTop: 25,
    },
    media: {
        height: 300,
        width: "100%",
        margin: "auto",
        padding: 0,
    },
    container: {
        marginTop: 20,
    },
    cart: {
        height: "100%",
    },
});

const Products = () => {
    const [products, setProducts] = useState([]);
    const [logo, setLogo] = useState(true);
    const history = useHistory();
    const classes = useStyles();
    useEffect(() => {
        axios
            .get(" https://fakestoreapi.com/products")
            .then((response) => {
                setProducts(response.data);
                setLogo(false);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleClickOnProduct = (id) => {
        history.push(`/product/${id}`);
    };

    return (
        <>
            {logo ? (
                <LoadingLogo></LoadingLogo>
            ) : (
                <Container>
                    <Grid container spacing={4} className={classes.container}>
                        {products.map((product) => (
                            <Grid
                                item
                                spacing={4}
                                id={product.id}
                                className={classes.root}
                                onClick={() => handleClickOnProduct(product.id)}
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                                xl={2}
                            >
                                <Card className={classes.cart}>
                                    <CardHeader subheader={product.category} />
                                    <img
                                        className={classes.media}
                                        src={product.image}
                                        alt=""
                                    />
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>
                                            ${product.title}
                                        </Typography>
                                        <Typography gutterBottom>
                                            ${product.price}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            )}
        </>
    );
};

export default Products;

// <div className={Styles.product_list}>
// {products.map((product) => (
//     <div
//         className={Styles.product}
//         id={product.id}
//         onClick={() => handleClickOnProduct(product.id)}
//     >
//         <div className={Styles.product_image_container}>
//             <img
//                 className={Styles.product_image}
//                 src={product.image}
//                 alt=""
//             />
//         </div>
//         <div className={Styles.product_details_container}>
//             <p>{product.name}</p>
//             <p>{product.category}</p>
//             <p>{product.description}</p>
//             <p>{product.price}</p>
//         </div>
//     </div>
// ))}
// </div>
