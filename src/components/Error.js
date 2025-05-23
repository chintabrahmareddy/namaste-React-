import { useRouteError } from "react-router";
const Error = () => {
const err = useRouteError();
    return (
        <div>
        <h1>Oops! Something went wrong.</h1>
        <p>We couldn't find the page you were looking for.</p>
        <h3>{err.status}: {err.statusText}</h3>
        </div>

    );
};
export default Error;