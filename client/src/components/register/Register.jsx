import { useUserContext } from "../../contexts/UserContext";
import useForm from "../../hooks/useForm";
import { useState } from "react";

export default function Register() {
  const { registerHandler } = useUserContext();
  const [error, setError] = useState("");

  const submitHandler = async ({ email, password }) => {
    setError("");

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      await registerHandler(email, password);
    } catch (err) {
      setError("Registration failed. Email may already be in use.");
    }
  };

  const { register, formAction } = useForm(submitHandler, {
    email: "",
    password: "",
  });

  return (
    <section className="auth">
      <h2>Register</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          formAction();
        }}
      >
        {error && <p className="form-error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className={error ? "input-error" : ""}
        />

        <input
          type="password"
          minLength="6"
          placeholder="Password"
          {...register("password")}
          className={error ? "input-error" : ""}
        />

        <button>Create Account</button>
      </form>
    </section>
  );
}
