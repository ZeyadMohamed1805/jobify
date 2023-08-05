// Modules
import Wrapper from "../assets/styled_components/RegisterAndLoginPage";
import { Logo, FormRow } from "../components/index";
import { Link } from "react-router-dom";
import { LoginConstants } from "../utils/constants";

const Login = () => {
    return (
        <Wrapper>
            <form className="form">
                <Logo />
                <h4>
                    Login
                </h4>
                {
                    LoginConstants.map( ( constant, index ) => (
                        <FormRow key={ index } data={ constant } />
                    ) )
                }
                <button type="submit" className="btn btn-block">
                    Submit
                </button>
                <button type="button" className="btn btn-block">
                    Explore The App
                </button>
                <p>
                    <span>
                        Not a member yet?
                    </span>
                    <Link to="/register" className="member-btn">
                        Register
                    </Link>
                </p>
            </form>
        </Wrapper>
    )
}

export default Login;