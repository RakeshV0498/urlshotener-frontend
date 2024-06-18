import { Link } from "react-router-dom";
import { RiErrorWarningLine } from "react-icons/ri"; // Icon for error/warning

function NoMatch() {
  return (
    <div className="text-center p-4">
      <RiErrorWarningLine size={64} color="red" />
      <h2 className="mt-3 mb-2">404 - Not Found</h2>
      <p className="mb-4">The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
}

export default NoMatch;
