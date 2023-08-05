// Modules
import Wrapper from "../assets/styled_components/LandingPage";
import { Logo } from "../components/index";
import mainImage from "../assets/images/main.svg";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <Wrapper> 
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        Job
                        <span>
                            Tracking
                        </span>
                        App
                    </h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis commodi iure quas, similique tempore officiis harum, ipsa vel aliquam, omnis sit praesentium nemo non suscipit dolorem unde sunt laboriosam quos?
                    </p>
                    <Link to="/register" className="btn register-link">
                        Register
                    </Link>
                    <Link to="/login" className="btn">
                        Login
                    </Link>
                </div>
                <img src={ mainImage } alt="Job Hunt" className="img main-img" />
            </div>
        </Wrapper>
    )
}

export default Landing;