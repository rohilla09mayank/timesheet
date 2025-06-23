import Button from "../../ui/Button";

function LoginForm() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full my-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full my-2"
          />
          <Button className="w-full mt-2">Login</Button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
