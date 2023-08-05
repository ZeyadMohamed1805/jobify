// Modules
import Wrapper from "../assets/styled_components/ErrorPage";
import NotFound from "../components/NotFound";
import { Link, useRouteError } from "react-router-dom";
import { useRouteErrorType } from "../utils/types";

const Error = () => {
    const error: useRouteErrorType = useRouteError();

    return (
        <Wrapper>
            <div>
                {
                    error.status === 404 ?
                    <NotFound /> :
                    <h3>
                        Something went wrong...
                    </h3>
                }
                <Link to="/dashboard">
                    Dashboard
                </Link>
            </div>
        </Wrapper>
    )
}

export default Error;