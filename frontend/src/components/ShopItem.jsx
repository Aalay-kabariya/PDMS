import { useState } from "react";

function ShopItem(props) {
  console.log(props.Photo);
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="shop-item-card">
      <div className="item-image">
        <img src={props.Photo} alt="picture1" />
      </div>
      <div className="item-description">
        <div className="item-name">
          <p>{props.Name}</p>
        </div>
        <div className="item-mrp">
          <p>{props.MRP}</p>
        </div>
        <div className="item-content">
          <p>{props.Description}</p>
        </div>
        <div className="item-quantity">
          <p className="quantity-heading">Quantity</p>
          <button onClick={incrementQuantity}>+</button>
          <div className="count-quantity">
            <p className="count-quantity">{quantity}</p>
          </div>
          <button onClick={decrementQuantity}>-</button>
        </div>
        <hr />
      </div>
    </div>
  );
}
export default ShopItem;
