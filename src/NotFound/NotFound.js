import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = ({ failname, homepageRedirect }) => {
  //перенаправление на главную страницу

  if (homepageRedirect) return <Navigate to="/" replace />;
  else
    return (
      <div className="container fadeInAnim">
        <h1 className="h1-not-found">404</h1>
        <p className="notfound">Oops! {failname} not found</p>
        <p className="description">
          Sorry, but the page you are looking for does not exist, has been
          removed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn">
          Go to Homepage
        </Link>
      </div>
    );
};

NotFound.defaultProps = { failname: "Page", homepageRedirect: false };
export default NotFound;
