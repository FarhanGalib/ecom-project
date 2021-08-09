import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingLogo from "./LoadingLogo";
import { useHistory, useParams } from "react-router-dom";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles({
    txtField: {
        marginTop: 15,
        marginBottom: 10,
        display: "block",
    },
    heading: {
        marginTop: 20,
        marginBottom: 20,
    },
    headingStyle2: {
        color: "orange",
    },
});

const ProductEdit = () => {
    const classes = useStyles();
    const [selectedProduct, setSelectedProduct] = useState();
    const [logo, setLogo] = useState(true);

    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setSelectedProduct(response.data);
                setLogo(false);
            })
            .catch((error) => console.log(error));
    }, []);

    const addProduct = (e, key) => {
        setSelectedProduct({ ...selectedProduct, [key]: e.target.value });
    };

    const requestUpdateProduct = () => {
        axios
            .patch(`https://fakestoreapi.com/products/${id}`, {
                title: selectedProduct.title,
                category: selectedProduct.category,
                description: selectedProduct.description,
                price: selectedProduct.price,
                image: selectedProduct.image,
            })
            .then((response) => history.push(`/product/${id}`))
            .catch((error) => console.log(error));
    };
    return (
        <>
            {logo ? (
                <LoadingLogo></LoadingLogo>
            ) : (
                <Container>
                    <Typography variant="h4" className={classes.heading}>
                        Edit <span className={classes.headingStyle2}>Pro</span>
                        duct
                    </Typography>
                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        label="Product Title"
                        type="text"
                        value={selectedProduct?.title}
                        onChange={(e) => addProduct(e, "title")}
                        className={classes.txtField}
                    />

                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        label="Product Category"
                        type="text"
                        value={selectedProduct?.category}
                        onChange={(e) => addProduct(e, "category")}
                        className={classes.txtField}
                    />

                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        label="Product Description"
                        multiline
                        rows={3}
                        type="text"
                        value={selectedProduct?.description}
                        onChange={(e) => addProduct(e, "description")}
                        className={classes.txtField}
                    />

                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        label="Product Price"
                        value={selectedProduct?.price}
                        onChange={(e) => addProduct(e, "price")}
                        className={classes.txtField}
                    />

                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        label="Product Image Link"
                        type="text"
                        value={selectedProduct?.image}
                        onChange={(e) => addProduct(e, "image")}
                        className={classes.txtField}
                    />

                    <Button
                        startIcon={<SaveIcon />}
                        variant="contained"
                        color="primary"
                        onClick={() => requestUpdateProduct()}
                    >
                        Save
                    </Button>
                </Container>
            )}
        </>
    );
};

export default ProductEdit;
