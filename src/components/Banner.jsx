import food from "../assets/food.png";

const Banner = () => {
  return (
    <div
      style={{
        display: "flex",
        color: "white",
        marginTop: 100,
        marginLeft: 80,
        position: "relative",
      }}
    >
      <div>
        <h1 style={{ fontSize: 40 }}>
          Premium <br /> Meat Distribution <br />
          For Restaurants
        </h1>
        <p>
          Order the finest meat from trusted suppliers easily and efficiently.
        </p>
        <button
          style={{
            marginTop: 40,
            width: 190,
            background: "#e74141",
            border: "1px solid #e74141",
          }}
        >
          Browse Products
        </button>
      </div>
      <div style={{ position: "absolute", top: -80, right: 0 }}>
        <img src={food} width={800} height={200} />
      </div>
    </div>
  );
};

export default Banner;
