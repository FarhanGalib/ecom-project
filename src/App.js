import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import ProductEdit from "./components/ProductEdit";
import CreateProduct from "./components/CreateProduct";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

function App() {
    return (
        <div className="backgroundColor">
            <Router>
                <Navbar></Navbar>
                <Switch>
                    <Route exact path="/">
                        <Products></Products>
                    </Route>
                    <Route exact path="/products">
                        <Products></Products>
                    </Route>
                    <Route exact path="/product/:id">
                        <ProductDetails></ProductDetails>
                    </Route>
                    <Route exact path="/product/edit/:id">
                        <ProductEdit></ProductEdit>
                    </Route>
                    <Route exact path="/create-product">
                        <CreateProduct></CreateProduct>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
