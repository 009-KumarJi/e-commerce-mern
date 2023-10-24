import {Row, Col} from "react-bootstrap";
import Product from "../components/Product";
import {useGetProductsQuery} from "../slices/productsApiSlice";


const HomeScreen = () => {
    const {data: products, isLoading, error} = useGetProductsQuery();

    return (
        <>
            {isLoading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <div>{error?.data?.message || error.error}</div>
            ) : (
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
            )}
        </>
    );
};

export default HomeScreen;

// reducer function : takes in the current state and an action and returns a new state
// action is an object that has a type and a payload
// redux: a library that allows us to manage app level state
// react-redux: a library that allows us to use redux with react
// view -> action -> reducer -> store -> view