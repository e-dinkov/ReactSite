import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const { loginHandler } = useContext(UserContext);
  const [error, setError] = useState("");

  const submitHandler = async ({ email, password }) => {
    setError("");

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      await loginHandler(email, password);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  const { register, formAction } = useForm(submitHandler, {
    email: "",
    password: "",
  });

  return (
    <section id="login-page">
      <form id="login" action={formAction}>
        <div className="container">
          <h1>Login</h1>

          {error && <p className="form-error">{error}</p>}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Your Email"
            className={error ? "input-error" : ""}
          />

          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            id="login-password"
            {...register("password")}
            placeholder="Password"
            minLength="6"
            className={error ? "input-error" : ""}
          />

          <input type="submit" className="btn submit" value="Login" />
        </div>
      </form>
    </section>
  );
}
