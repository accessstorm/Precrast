import React, { useEffect } from "react";
import styled from "styled-components";
import precrastLogo from "./precrast.png";

const App = () => {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };



  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX + window.scrollX;
      const y = e.clientY + window.scrollY;
      document.documentElement.style.setProperty("--x", `${x}px`);
      document.documentElement.style.setProperty("--y", `${y}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Container>
      <NeonBackground />
      <Navbar>
        <Brand />
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Navbar>




      <Hero>
        <HeroText>Unlimited predictions,<br/>smarter decisions and more.</HeroText>
        <Paragraph>Make data-driven decisions with our AI-powered predictive analytics tool.</Paragraph>

        <Paragraph>
          Upload your dataset and gain valuable insights before making investments or launching a product.
          Precrast helps you minimize risks and maximize success with accurate forecasting.
        </Paragraph>
        <Paragraph>
          Our intuitive platform ensures seamless analysis, allowing you to evaluate potential
          outcomes and strategize effectively.
        </Paragraph>

        <Button>Learn More →</Button>

      </Hero>

      <CardSection>
        <CardRow>
          <Card>
            <h2>Why Choose Us?</h2>
            <p>Data-backed predictions to optimize decision-making and reduce uncertainties.</p>
          </Card>
          <Card>
            <h2>Key Features</h2>
            <ul>
              <li>📊 AI-Powered Analytics</li>
              <li>⚙️ Easy Database Upload</li>
              <li>🔍 Real-time Forecasting</li>
            </ul>
          </Card>
          <Card>
            <h2>Smart Insights</h2>
            <p>Get actionable recommendations based on AI-driven predictive models.</p>
          </Card>
        </CardRow>
        <CardRow>
          <Card>
            <h2>Collaboration</h2>
            <p>Analyze and share insights with your team for informed decision-making.</p>
          </Card>
          <Card>
            <h2>Accessibility</h2>
            <p>Accessible anytime, anywhere with a user-friendly web interface.</p>
          </Card>
          <Card>
            <h2>Security</h2>
            <p>Robust data encryption ensures privacy and protection for your business.</p>
          </Card>
        </CardRow>
      </CardSection>


      <Footer>
        <p>© 2025 Precrast. All rights reserved.</p>
      </Footer>
    </Container>
  );
};

// Keyframes for pop-up animation


// Styled Components
const Container = styled.div`
  font-family: 'Bebas Neue', sans-serif;
  background: url('https://wallpaperaccess.com/full/5989838.jpg') no-repeat center center fixed;
  background-size: cover;
  color: #c9d1d9;
  min-height: 100vh;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6); /* Adjust opacity to control visibility */
    z-index: 1;
  }
`;


const Paragraph = styled.p`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  
`;



const NeonBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(226, 18, 18, 0.3), transparent 60%);
  z-index: 0;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(45deg,rgb(24, 23, 23),rgb(0, 0, 0), transparent 0%);
  padding: 10px 130px; 
  position: relative;
  z-index: 2;
`;

const Brand = () => (
  <img src={precrastLogo} alt="Precrast Logo" width="200" height="65"/>
);

const Hero = styled.div`
  font-family: 'Bebas Neue', sans-serif;
  padding: 120px 20px;
  background: transparent;
  position: relative;
  z-index: 2;
`;

const HeroText = styled.h1`
  font-size: 2.8rem;
  font-weight: 900;
  font-family: 'Bebas Neue', sans-serif;
  border-radius: 12px;
  color:rgb(255, 255, 255);
  
  filter: none;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Button = styled.button`
  background: rgb(247, 11, 11);
  font-family: 'Bebas Neue', sans-serif;
  color: white;
  padding: 12px 45px;
  font-size: 1.2rem;
  font-weight: 550;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background: rgb(0, 0, 0, 0.5);
  }
`;

const LogoutButton = styled.button`
  background: rgba(255, 0, 0);
  font-family: 'Bebas Neue', sans-serif;
  color: white;
  padding: 5px 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.05rem;
  font-weight: 550;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;
const CardSection = styled.div`
  font-family: 'Bebas Neue', sans-serif;
  padding: 50px 20px;
  position: relative;
  z-index: 2;
`;

const CardRow = styled.div`
  font-family: 'Bebas Neue', sans-serif;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const Card = styled.div`
  font-family: 'Bebas Neue', sans-serif;
  background: #161b22;
  padding: 20px;
  border-radius: 10px;
  width: 280px;
  text-align: left;
  border: 1px solid #30363d;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.4);
  }
`;

const Footer = styled.footer`
  font-family: 'Bebas Neue', sans-serif;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  text-align: center;
  background: linear-gradient(225deg, rgb(0, 0, 0), transparent 40%, rgb(155, 30, 30));
  padding: 10px 15px;
  position: relative;
  z-index: 2;
  height: 40px; /* Add a height to center vertically */
`;

export default App;
