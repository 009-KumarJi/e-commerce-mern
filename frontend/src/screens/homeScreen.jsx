import {Row, Col} from "react-bootstrap";
import Product from "../components/Product";
import {useEffect, useState} from "react";
import axios from "axios";


// state is a way for components to keep track of data that changes over time
const HomeScreen = () => {
    const [products, setProducts] = useState([]); // component level state

    useEffect(() => { // useEffect is a hook that allows us to run some code when the component loads
        const fetchProducts = async () => {
            const {data} = await axios.get("/api/products");
            setProducts(data);
        }
        fetchProducts();
    }, []);
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {
                    products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))
                }
            </Row>
        </>
    );
};

export default HomeScreen;

// reducer function : takes in the current state and an action and returns a new state
// action is an object that has a type and a payload
// redux: a library that allows us to manage app level state
// react-redux: a library that allows us to use redux with react
// view -> action -> reducer -> store -> view