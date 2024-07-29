import logo from "../assets/logo.svg"

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      <div>
        <img src={logo} />
      </div>
      <div style={{ display: "flex", gap: 25 }}>
        <a>Home</a>
        <a>About Us</a>
        <a>Products</a>
        <a>Suppliers</a>
        <a>Contact Us</a>
      </div>
      <div style={{ display: "flex", gap: 15 }}>
        <button
          style={{
            background: "none",
            border: "1px solid white",
          }}
        >
          Login
        </button>
        <button
          style={{
            background: "#e74141",
            border: "1px solid #e74141",
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
