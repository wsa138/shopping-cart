import { useState } from 'react';

export default function ProductCard(props) {
  const [imageHover, setImageHover] = useState(false);

  return (
    <div
<<<<<<< HEAD
      className="product"
=======
      class="product"
>>>>>>> productCardBuild
      data-testid="product"
      onMouseEnter={() => setImageHover(true)}
      onMouseLeave={() => setImageHover(false)}
    >
      <img
<<<<<<< HEAD
        className="productImg"
=======
        class="productImg"
>>>>>>> productCardBuild
        src={!imageHover ? props.imageOne : props.imageTwo}
        alt="guitar"
      />
      <div>{props.name}</div>
      <div>{props.price}</div>
    </div>
  );
}
