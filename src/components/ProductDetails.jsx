import React from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import LoadingLogo from "./LoadingLogo";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Typography,
    Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
    root: {
        minWidth: 500,
        marginTop: 40,
    },
    media: {
        height: 400,
        width: 400,
        padding: 30,
    },
    action: {},
    details: {},
    card: {},
});

const ProductDetails = () => {
    const classes = useStyles();
    const [selectedProduct, setSelectedProduct] = useState();
    const history = useHistory();
    const { id } = useParams();
    const [logo, setLogo] = useState(true);

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setSelectedProduct(response.data);
                setLogo(false);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleEditProduct = (id) => {
        history.push(`/product/edit/${id}`);
    };

    const handleDeleteProduct = (id) => {
        axios
            .delete(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                console.log(response.data);
                history.push("/");
            })
            .catch((error) => console.log(error));
    };

    return (
        <>
            {logo ? (
                <LoadingLogo></LoadingLogo>
            ) : (
                <Container className={classes.root}>
                    <Card className={classes.card}>
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <img
                                    src={selectedProduct?.image}
                                    className={classes.media}
                                    alt=""
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <CardContent>
                                    <Typography variant="h4" gutterBottom>
                                        {selectedProduct?.title}{" "}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Category: {selectedProduct?.category}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        gutterBottom
                                    >
                                        <small>
                                            {selectedProduct?.description}
                                        </small>
                                    </Typography>
                                    <Typography variant="h6" gutterBottom>
                                        $ {selectedProduct?.price}
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.action}>
                                    <Button
                                        startIcon={<EditIcon />}
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleEditProduct(id)}
                                    >
                                        Edit
                                    </Button>

                                    <Button
                                        startIcon={<DeleteIcon />}
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => handleDeleteProduct()}
                                    >
                                        Delete
                                    </Button>
                                </CardActions>
                            </Grid>
                        </Grid>
                    </Card>
                </Container>
            )}
        </>
    );
};

export default ProductDetails;
