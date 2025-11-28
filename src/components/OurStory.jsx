import i6 from "../assets/i6.jpg";
import "./OurStory.css";

function OurStory() {
  return (
    <div className="ourstory-container">
      <div className="ourstory-content">
        <div className="ourstory-text-section">
          <h3 className="ourstory-title">Our Story</h3>
          <p className="ourstory-paragraph">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p className="ourstory-paragraph">
            Exclusive has more than 1 million products to offer, growing very
            fast. Exclusive offers a diverse assortment in categories ranging
            from consumer goods to electronics and fashion.
          </p>
        </div>
        <div className="ourstory-image-section">
          <img src={i6} alt="Our Story" className="ourstory-image" />
        </div>
      </div>
    </div>
  );
}

export default OurStory;
