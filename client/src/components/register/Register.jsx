import { useUserContext } from "../../contexts/UserContext";
import useForm from "../../hooks/useForm";

export default function Register() {
  const { registerHandler } = useUserContext();

  const { register, formAction } = useForm(
    (values) => {
      registerHandler(values.email, values.password);
    },
    { email: "", password: "" }
  );

  return (
    <section className="auth">
      <h2>Register</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formAction();
        }}
      >
        <input type="email" placeholder="Email" {...register("email")} />
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <button>Create Account</button>
      </form>
    </section>
  );
}
