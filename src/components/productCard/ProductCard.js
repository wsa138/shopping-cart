import { useState } from 'react';

export default function ProductCard(props) {
  const [imageHover, setImageHover] = useState(false);

  return (
    <div
      className="product"
      data-testid="product"
      onMouseEnter={() => setImageHover(true)}
      onMouseLeave={() => setImageHover(false)}
    >
      <img
        className="productImg"
        src={!imageHover ? props.imageOne : props.imageTwo}
        alt="guitar"
      />
      <div>{props.name}</div>
      <div>{props.price}</div>
    </div>
  );
}
