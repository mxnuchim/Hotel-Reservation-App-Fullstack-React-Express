import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Lagos</h1>
          <h2>2253 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://www.nairaland.com/attachments/11367143_heliconiacamp_jpeg39dafd38116418b0ba8523be09f71f46"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Port Harcourt</h1>
          <h2>1533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.adsttc.com/media/images/5f34/6227/b357/65bf/b500/009c/large_jpg/Abuja_Nigeria.jpg?1597268499"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Abuja</h1>
          <h2>932 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
