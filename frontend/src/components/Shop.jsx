import ShopItem from "./ShopItem"
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import { useState, useEffect} from "react"
function Shop () {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios
          .get("http://localhost:3000/shop")
          .then((response) => {
            setProducts(response.data);
            console.log(response.data);
          })
          .catch((error) => console.log(error));
      }, []);

      


    return (
        <div className="shop">
            <div className="shop-header-search">
            
                <div className="shop-header">
                    <h2>SHOP NOW</h2>
                    <h6>CHECK OUT OUR PRODUCT</h6>
                </div>
                <div className="shop-search">
                    <Form inline>
                        <Row>
                        <Col xs="auto">
                            <Form.Control
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2 search-bar"
                            />
                        </Col>
                        
                        </Row>
                    </Form>
                    <hr />
                </div>
            </div>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>

        </div>
    )
}
export default Shop