import { Link, Navigate, useLocation } from "react-router-dom";

function ThankYou() {
  const location = useLocation();

  // Only show this page after a successful submit.
  // If someone types /thank-you directly, send them to the form.
  if (!location.state) {
    return <Navigate to="/contact" replace />;
  }

  return (
    <div>
      <h1>Thank You, {location.state.name}!</h1>
      <p>Your message has been sent.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ThankYou;
