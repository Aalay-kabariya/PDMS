import { Navbar } from "../components/index"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function About () {
    return (
        // <div className="about-container">
        //     <Navbar />
        //     <div className="about-items">
        //         <div className="about-image">
        //             <img src="../public/image/about.jpg" alt="about"/>
        //         </div>
        //         
        //             <h3>About Us</h3>
        //             <p>MedSprint is a trusted Partner in providing quality medicines and healthcare products. We are committed to ensuring that our customers have access to a wide range of medicines, injection, tablets, and other healthcare products at affordable prices. Our team of qualified pharmacists and healthcare professionals are always on hand to provide expert advice and support.</p>
        //         </div>
        //     </div>
            

        // </div>
        <div className="about-container">
            <Navbar/>
            <Container>
                
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <Col xs={8}>
                    <div className="about-image">
                        <img src="../public/image/about.jpg" alt="about"/>
                    </div>
                </Col>
                <Col xs={4}>
                    <div className="about-description">
                        <h3 className="ab1">ABOUT US</h3>
                        <p>MedSprint is a trusted Partner in providing quality medicines and healthcare products. We are committed to ensuring that our customers have access to a wide range of medicines, injection, tablets, and other healthcare products at affordable prices. Our team of qualified pharmacists and healthcare professionals are always on hand to provide expert advice and support.</p>
                    </div>
                </Col>
            </Row>

            
            </Container>
        </div>
    )
}
export default About