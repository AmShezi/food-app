const AboutUs = () => {
  return (
    <div style={{ color: "white",display: "flex", justifyContent: "space-between", marginTop: 40}}>
      <div>
        <div style={{width: "50%"}}>
        <h2>About Us</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>
        <h2>What We Offer:</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>

        <button style={{ marginTop: 20, width: 170, background: "#e74141", border: "1px solid #e74141" }}>Learn More</button>

        </div>
      </div>
      <div style={{width: "50%"}}>
        <img style={{borderRadius: 25}} width={400} height={500} src="https://plus.unsplash.com/premium_photo-1673830185832-2d5f30a900ed?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
    </div>
  );
};

export default AboutUs;
