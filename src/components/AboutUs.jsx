import chef1 from "../assets/chef1.png"
import chef2 from "../assets/chef2.png"

const AboutUs = () => {
  return (
    <div style={{display: "flex", marginTop: 400}}>
      <div>
        <div style={{ paddingLeft: 80, width: "50%", display: "flex", flexDirection: "column", gap: 15}}>
        <p style={{fontSize:28, fontWeight: 600}}>About Us</p>
        <p>
        Welcome to Meat Distribution Platform, your trusted partner in premium meat supply. We connect top-quality meat suppliers with restaurants across Canada, ensuring you receive the finest products to serve your customers.
        </p>
        <p style={{fontSize:28, fontWeight: 600}}>What We Offer:</p>
        <p><b>Premium Quality:</b> We partner with the best suppliers to offer you the highest quality meat products.</p>
        <p><b>Wide Selection:</b> Our platform features a diverse range of meats, including chicken, beef, mutton, and more, along with various cuts to meet your specific needs.</p>
        <p><b>Reliable Delivery: </b> Our suppliers ensure timely and dependable delivery, so you never have to worry about running out of stock.</p>
        <p><b>User-Friendly Platform:</b> Our easy-to-use interface allows you to browse, order, and track your meat supplies effortlessly.</p>

        <button style={{ marginTop: 20, width: 170, background: "#e74141", border: "1px solid #e74141" }}>Learn More</button>

        </div>
      </div>
      <div style={{width: "50%", position: "relative"}}>
        <img src={chef1} style={{position: "absolute", top: 100, left: -250, zIndex: 2 }} />
        <img src={chef2} style={{position: "absolute"}} />
      </div>
    </div>
  );
};

export default AboutUs;
