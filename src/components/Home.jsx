import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../assets/styles/home.css';
import logo from '../assets/mcaSAMlogor.png';
import Footer from './Footer';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpeg';
import slide3 from '../assets/slide3.jpeg';
import slide4 from '../assets/slide4.jpeg';
import slide5 from '../assets/slide5.jpg';
import slide6 from '../assets/slide6.jpg';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Button } from '@mui/material';
import Card from 'react-bootstrap/Card';

const Home = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true, // Shows the navigation dots
    infinite: true, // Allows infinite scrolling
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enables autoplay
    autoplaySpeed: 3000, // Autoplay speed in ms
    arrows: true, // Show next and previous arrows
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <img src={logo} alt="College Logo" className="college-logo" />
        <div className="header-text">
          <h1>Welcome to GSD University</h1>
          <p>Manage your college efficiently and effectively.</p>
        </div>
      </header>

      <nav className="home-nav">
        <NavLink to="/admin">Admin</NavLink>
        <NavLink to="/faculty">Faculty</NavLink>
        <NavLink to="/student">Student</NavLink>
        <NavLink to="/course">Course</NavLink>
        <NavLink to="/admission">Admission</NavLink>
        <NavLink to="/exam-result">Exam/Result</NavLink>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </nav>

      <div className="scrolling-container">
        <p className="scrolling-paragraph">
          We are excited to announce that admissions for the upcoming academic
          year 2024 &nbsp; &nbsp;
          <StarPurple500Icon
            sx={{ color: "red", fontSize: 15 }}
            className="scrollicon"
          />
          <StarPurple500Icon
            sx={{ color: "red", fontSize: 15 }}
            className="scrollicon"
          />
          <StarPurple500Icon
            sx={{ color: "red", fontSize: 15 }}
            className="scrollicon"
          />
          &nbsp; &nbsp; Application end month: August 2024 &nbsp; &nbsp;
          <StarPurple500Icon
            sx={{ color: "red", fontSize: 15 }}
            className="scrollicon"
          />
          <StarPurple500Icon
            sx={{ color: "red", fontSize: 15 }}
            className="scrollicon"
          />
          <StarPurple500Icon
            sx={{ color: "red", fontSize: 15 }}
            className="scrollicon"
          />
          &nbsp; &nbsp; Entrance Exam will be Conducted September 2024 &nbsp;
          &nbsp;
          <StarPurple500Icon
            sx={{ color: "red", fontSize: 15 }}
            className="scrollicon"
          />
          <StarPurple500Icon
            sx={{ color: "red", fontSize: 15 }}
            className="scrollicon"
          />
          <StarPurple500Icon
            sx={{ color: "red", fontSize: 15 }}
            className="scrollicon"
          />
          &nbsp; &nbsp; Attend the interview and counseling sessions for course
          selection.
        </p>
      </div>

      <div className="carousel-card" style={{ margin: "20px " }}>
        <div className="carousel-container">
          {/* Carousel */}
          <div style={{ width: "90%", margin: "0 auto" }}>
            <Slider {...settings}>
              <div>
                <img src={slide1} alt="Image 1" style={{ width: "100%" }} />
              </div>
              <div>
                <img src={slide5} alt="Image 2" style={{ width: "100%" }} />
              </div>
              <div>
                <img src={slide3} alt="Image 3" style={{ width: "100%" }} />
              </div>
              <div>
                <img src={slide6} alt="Image 4" style={{ width: "100%" }} />
              </div>
            </Slider>
          </div>
        </div>
        <div className="card">
          {/* Card */}
          <section className="home-content">
            <div
              className="home-card"
              style={{
                width: "80%",
              }}
            >
              <h2 style={{ textAlign: "left" }}>
                Important Event
                <TurnedInIcon
                  sx={{
                    color: "red",
                    fontSize: 23,
                    verticalAlign: "middle",
                    marginLeft: "8px",
                  }}
                />
              </h2>
              <div className="scroll-from-bottom">
                <div className="scroll-contentuh">
                  <p>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      New Course Offerings:
                    </span>
                    <br />
                    Discover new courses and specializations being introduced
                    this semester.
                  </p>

                  <p>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      Exam Schedules:
                    </span>
                    <br />
                    Check the latest exam schedules and important deadlines.
                  </p>

                  <p>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      Scholarship Opportunities:
                    </span>
                    <br />
                    Explore new scholarship programs and application deadlines.
                  </p>

                  <p>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      New Course Offerings:
                    </span>
                    <br />
                    Discover new courses and specializations being introduced
                    this semester.
                  </p>

                  <p>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      Exam Schedules:
                    </span>
                    <br />
                    Check the latest exam schedules and important deadlines.
                  </p>

                  <p>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      Scholarship Opportunities:
                    </span>
                    <br />
                    Explore new scholarship programs and application deadlines.
                  </p>

                  <p>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      New Course Offerings:
                    </span>
                    <br />
                    Discover new courses and specializations being introduced
                    this semester.
                  </p>

                  <p>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      Exam Schedules:
                    </span>
                    <br />
                    Check the latest exam schedules and important deadlines.
                  </p>

                  <p>
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "red",
                      }}
                    >
                      Scholarship Opportunities:
                    </span>
                    <br />
                    Explore new scholarship programs and application deadlines.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="home-content">
        <div className="home-card">
          <h2>About Us</h2>
          <p>
            At GSD University, we believe in nurturing curiosity, inspiring
            discovery, and fostering a love for lifelong learning. Located in
            the heart of Chennai, our university has been a beacon of
            excellence and innovation for over 10 years.
          </p>
          <p>
          GSD University, one of India's leading educational institutions, is renowned for its excellence in teaching, research, and student development. Established in 1985, GSD University, has grown to become a premier destination for higher education, offering a wide range of undergraduate, postgraduate, and doctoral programs across various disciplines. 
          </p>
        </div>
        <div className="home-card">
          <h2>Academic Excellence</h2>
          <ul>
            <li>GSD University, offers a diverse array of programs in Engineering, Medicine, Management, Science, Humanities, and more. </li>
            <li>Our distinguished faculty members, who are experts in their respective fields, are committed to providing high-quality education and fostering a culture of research and innovation.</li>
            <li>Efficient management of students, teachers, and courses</li>
            <li>Automated fee management</li>
            <li>Comprehensive exam and result management</li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
