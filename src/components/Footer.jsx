import React, { useRef, useEffect } from "react";
import "../assets/styles/footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer   
 = () => {
  const mapRef = useRef(null);


  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-location">
          <p>
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.2310631966!2d79.8793330138519!3d13.047985944435636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1723571650300!5m2!1sen!2sin"
          width="100%"
          height="250"
          style={{ border: 0 }}
          // allowFullScreen=""
          // loading="lazy"
          // referrerPolicy="no-referrer-when-downgrade"
          title="Our Location"
        ></iframe>
          </p>
        {/* <div ref={mapRef} id="map" style={{ width: "100%", height: "250px" }} /> */}
        </div>
        <div className="footer-info">
          <h4 style={{color:'#4CAF50'}} >College Hours:</h4>
          <p>Mon-Fri 9.00am-6:00pm</p>
          <p>Saturday and Sunday: 9.00am-3:00pm</p>
          <p>2nd and 4th Saturday: Closed</p>
          <p>All government Holiday: Closed</p>
        </div>
        <div className="footer-loc">
          <div className="icon-heading">
            <h4 style={{color:'#4CAF50'}}>Follow Us:</h4>
          </div>
          <div className="icons">
            <div className="insta">
            <InstagramIcon sx={{ color: "white" }} />
            &nbsp;
              <a
                href="https://www.instagram.com/yourcollege"
                target="_blank"
                rel="noopener noreferrer">
                 Follow On Instagram
              </a>
            </div>
            <div className="facebook">
            <FacebookIcon sx={{ color: "white" }} />
            &nbsp;
              <a
                href="https://www.facebook.com/yourcollege"
                target="_blank"
                rel="noopener noreferrer">
                 Support on Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="copright">
          <p>
            &copy; 2024 University of GSD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
