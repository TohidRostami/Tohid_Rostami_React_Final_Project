import logo from "../images/825.jpg";

export default function Mainheader () {
  return (
    <header>
      <div className="user-profile">
        <div className="user-profile-picture">
          {/* <img src={logo} alt="profile-picture" /> */}
        </div>
        <div className="user-profile-name">
          <a href="">Hi, James</a>
        </div>
      </div>
      <div className="logo">
        <p>LOGO</p>
      </div>
      <div className="products-basket">
        <div className="products-basket-disc">
          <a href="">Cart</a>
          <span id="numberOfProducts">0</span>
        </div>
      </div>
    </header>
  );
}
