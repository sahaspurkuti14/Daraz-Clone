import React , {useState , useEffect} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import axios from 'axios';
import './scss/Recommended.scss';
import Products from './Products';
import {setProducts} from './redux/action/productActions';

function Recommended() {
    const [showLess, setShowLess] = useState(false);

    const products = useSelector(state => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchProducts = async() => {
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch(err => {
        console.log(err);
        });
        dispatch(setProducts(response.data));

    };


useEffect(() => {
    fetchProducts();
}, );

    let handleClick = () => {
        setShowLess(!showLess);
    }
   

    return (
        <div className="recommendation">
            <div className="recommendation-title">Just For You </div>
            <div className="products-section">
                <>
                    {Object.keys(products).length === 0 ? (
                        <div>...Loading </div>): (
                            <>
                                {!showLess ? 
                                <> {products.slice(0,12).map(i => (
                                        <Products
                                        key={i.id}
                                            id={i.id}
                                            image= {i.image}
                                            title= {i.title}
                                            discountedPrice={i.price * 10}
                                            markedPrice = {i.price + 500}
                                            />
                                    ))} 
                                </>
                                : 
                                <> {products.map(i => (
                                    <Products
                                    key={i.id}
                                    id={i.id}
                                    image= {i.image}
                                    title= {i.title}
                                    discountedPrice={i.price}
                                    />
                                    ))}
                                </>}
                            </>
                            )}
                </>
            </div>
            <button className="showMore-btn" onClick={handleClick}> {showLess? 'SHOW LESS' : 'SHOW MORE'} </button>
            
        </div>
    )
}

export default Recommended


