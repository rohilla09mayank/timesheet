import Button from "../../ui/Button";

function RegisterForm() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <form>
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full my-2"
          />
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
          <Button className="w-full mt-2">Register</Button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
