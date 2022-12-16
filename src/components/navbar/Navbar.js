import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <Link to="/">
        <button class="navbarButton">Home</button>
      </Link>
      <Link to="/products">
        <button class="navbarbutton">Products</button>
      </Link>
      <Link to="/about">
        <button class="navbarbutton">About</button>
      </Link>
    </div>
  );
}
