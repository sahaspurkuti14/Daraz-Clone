import React ,{useState , useEffect}from 'react';
import './scss/ProductDetails.scss';
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useSelector ,useDispatch} from 'react-redux';
import {selectedProduct} from './redux/action/productActions';
import MainHeader from './MainHeader';
import {setAddToCart} from './redux/action/cartActions';


function ProductDetails() {
     
    let [count , setCount] = useState(1);   
    
    const product = useSelector(state => state.product);
    const {productId} = useParams();
    const dispatch = useDispatch();

    let markedPrice = product.price + 500;

    let discountPercent = (markedPrice - product.price)/markedPrice * 100;

    let increment = () => {
        setCount(count + 1);
        }

    let decrement = () => {
        setCount(count - 1)
    }

    let onChange = (e) => {
        setCount(e.target.value) ;
    }

    const fetchProductDetail = async() => {
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch(err => {
        console.log(err);
        });
        
        dispatch(selectedProduct(response.data));
    };

    useEffect(() => {
        if(productId && productId!=="")
        fetchProductDetail();
        
    },);

    const addToCart = () =>{
        dispatch(setAddToCart(product));
    }


    


    return (
        <>
        <MainHeader/>
        {Object.keys(product)?.length === 0 ? (
            <div>...Loading </div>): (
        <div className="product-details">
            <div className="main-container">
                <div className="product-show">
                    <div className="column-1">
                        <img className="product-image" src={product.image} alt="#"/>
                    </div>

                    <div className="column-2">
                        <div className="details-section">
                            <div className="product-title"> {product.title}</div>
                            <div className="rating-line">
                                <div className="rating">
                                    <div className="product-rating"><StarIcon className="star"/></div>
                                    <div className="rating-desc">1 Ratings    |    6 Answered Questions </div>
                                </div>

                                <div className="share-wishlist">
                                    <div className="share"><ShareIcon/></div>
                                    <div className="wishlist"><FavoriteBorderIcon/> {/*<FavoriteIcon/>*/}</div>
                                </div>
                            </div>
                            <div className="brand"> 
                            Brand: <div className="brand-desc">No Brand | More Camera Accessories from No Brand </div>
                            </div>
                        </div>

                        <div className="price-section">
                            <div className="discounted-price">Rs.{product.price * 10} </div>
                            <div className="price">
                                <div className="marked-price">Rs.{markedPrice} </div> 
                                <div className="discount-percent"> -{discountPercent.toFixed(2)}% </div>
                            </div>
                        </div>

                        <div className="promotions-section">
                            <div className="promotion-title">Promotions </div>
                            <div className="promotion-type"> Min. spend Rs. 15,000 </div>
                        </div>

                        <div className="quantity-section">
                            <div className="quantity-title">Quantity </div>
                            <div className="counter">
                                <button onClick={decrement} disabled={count<2}> - </button>
                                <span onChange={onChange}> {count} </span>
                                <button onClick={increment} disabled={count>4}> + </button>
                            </div>
                        </div>

                        <div className="buy-cart-section">
                            <div className="buynow">Buy Now</div>
                            <button className="addtocart" onClick={addToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>)}
        </>
    )
}

export default ProductDetails
