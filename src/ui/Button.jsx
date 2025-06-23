import { Link } from "react-router-dom";

function Button({ type, color, to, onClick, children, className }) {
  if (to)
    return (
      <Link
        to={to}
        className={`btn ${className ? className : ""} ${
          type ? "btn-" + type : ""
        } btn-${color || "primary"}`}
      >
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        onClick={onClick}
        className={`btn ${className ? className : ""} ${
          type ? "btn-" + type : ""
        } btn-${color || "primary"}`}
      >
        {children}
      </button>
    );

  return (
    <button
      className={`btn ${className ? className : ""} ${
        type ? "btn-" + type : ""
      } btn-${color || "primary"}`}
    >
      {children}
    </button>
  );
}

export default Button;
