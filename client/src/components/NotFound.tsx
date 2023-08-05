// Modules
import errorImage from "../assets/images/not-found.svg";

const NotFound = () => {
    return (
        <>
            <img src={ errorImage } alt="Page Not Found" />
            <h3>
                Ohh! Page Not Found!
            </h3>
            <p>
                We can't seem to find the page you are looking for...
            </p>
        </>
    )
}

export default NotFound;