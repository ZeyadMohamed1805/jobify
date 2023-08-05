// Modules
import Wrapper from "../assets/styled_components/RegisterAndLoginPage";
import { FormRow } from "../components/index";
import { Logo } from "../components";
import { Link } from "react-router-dom";
import { FormRowsConstants } from "../utils/constants";

const Register = () => {
    return (
        <Wrapper>
            <form className="form">
                <Logo />
                <h4>
                    Register
                </h4>
                {
                    FormRowsConstants.map( ( constant, index ) => (
                        <FormRow key={ index } data={ constant } />
                    ) )
                }
                <button type="submit" className="btn btn-block">
                    Submit
                </button>
                <p>
                    <span>
                        Already a member?
                    </span>
                    <Link to="/login" className="member-btn">
                        Login
                    </Link>
                </p>
            </form>
        </Wrapper>
    )
}

export default Register;