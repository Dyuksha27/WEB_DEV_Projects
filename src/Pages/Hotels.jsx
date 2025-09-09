import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function Hotels() {
  return (
    <div className="container2">
      <div>
        <img src="res.png" height="200px" />
      </div>
      <div className="container grid grid-two-column2">
        <div className="section-hero-data2">
          <p className="hero-top-data3">Laxmi Palace Heritage Hotel</p>
          <h1 className="hero-heading2">
            D-194, Jagdish Marg, behind Sindhi Camp, Kanti Nagar, Bani Park,
            Jaipur, Rajasthan 302016
          </h1>
          <p className="hero-para6">
            Experience convenience and luxury as a solo traveler at Laxmi Palace
            Heritage Boutique Hotel in Jaipur. Stay in comfortable
            air-conditioned rooms with complimentary Wi-Fi and stunning city
            views. Explore bustling markets and iconic attractions nearby like
            Hawa Mahal and City Palace. Enjoy a traditional folk show, delicious
            food options, and relax by the inviting swimming pool or at the
            on-site bar. .
          </p>
          <button className="btn explore-btn btn4">
            <Link to="/Laxmi-Palace-book">Book Now</Link>
          </button>
        </div>

        <div className="section-hero-image">
          <picture>
            <img src="../Images/LaxmiPalace.jpg" className="hero-img1" />
          </picture>
        </div>

        <div className="section-hero-data2">
          <p className="hero-top-data3">Umaid Bhawan-A Heritage Hotel</p>
          <h1 className="hero-heading2">
            D1-2A,Behind Collectorate,Bank Road, Bani Park, Bani Park, Jaipur,
            India, 302016{" "}
          </h1>
          <p className="hero-para6">
            Escape to Umaid Bhawan, a Heritage Style Boutique Hotel in vibrant
            Bani Park, Jaipur. Immerse yourself in rich history and culture,
            with iconic landmarks like Hawa Mahal and City Palace nearby.
            Indulge in opulent luxury with antique-inspired rooms featuring
            modern amenities. Relax by the pool,and take advantage of convenient
            shuttle service. Explore Elefun Park, just 1.6 km away. Delight in
            delicious meals and live music at the rooftop restaurant.{" "}
          </p>
          <button className="btn explore-btn btn4">
            <Link to="/Laxmi-Palace-book">Book Now</Link>
          </button>
        </div>

        <div className="section-hero-image">
          <picture>
            <img src="../Images/UmaidBhawan.jpg" className="hero-img1" />
          </picture>
        </div>

        <div className="section-hero-data2">
          <p className="hero-top-data3">Welcome Heritage Haveli Hotel</p>
          <h1 className="hero-heading2">
            A-C-4-C, Gayatri Marg, Sawai Jai Singh Highway, Banipark, Bani Park,
            Jaipur, India, 302016{" "}
          </h1>
          <p className="hero-para6">
            The car parking and the Wi-Fi are always free, so you can stay in
            touch and come and go as you please. Strategically situated in Bani
            Park, allowing you access and proximity to local attractions and
            sights. Don't leave before paying a visit to the famous Amber Fort.
            Rated with 3.5 stars, this high-quality property provides guests
            with access to massage, restaurant and spa on-site.
          </p>
          <button className="btn explore-btn btn4">
            <Link to="/Laxmi-Palace-book">Book Now</Link>
          </button>
        </div>

        <div className="section-hero-image">
          <picture>
            <img src="../Images/WelcomeHotel.jpg" className="hero-img1" />
          </picture>
        </div>

        <div className="section-hero-data2">
          <p className="hero-top-data3">Fort Chandragupt Hotel</p>
          <h1 className="hero-heading2">
            Malsisar House,Sindhi Camp, Station Road, Jaipur, India, 302006{" "}
          </h1>
          <p className="hero-para6">
            Stay at Fort Chandragupt Hotel, a centrally located and solo
            traveler-friendly hotel. Enjoy spa services, an outdoor pool,
            diverse dining options, and accessible public transportation.
            Experience the vibrant atmosphere and stunning roof terraces. Fort
            Chandragupt Hotel in Sindhi Camp, Jaipur is perfect for solo
            travelers seeking excitement. Explore Jaipur's cultural and
            historical landmarks, including Hawa Mahal and City Palace, just a
            short distance away.
          </p>
          <button className="btn explore-btn btn4">
            <Link to="/Laxmi-Palace-book">Book Now</Link>
          </button>
        </div>

        <div className="section-hero-image">
          <picture>
            <img
              src="../Images/FortChandraGuptHotel.jpg"
              className="hero-img1"
            />
          </picture>
        </div>
      </div>
      <div className="hotfoot">
      <Footer />
      </div>
    </div>
  );
}

export default Hotels;
