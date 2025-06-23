import LoginForm from "../features/login/LoginForm";
import StaticNav from "../ui/StaticNav";

export default function Login() {
  return (
    <div className="min-h-screen bg-base-200">
      <StaticNav />
      <div className="min-h-150 flex items-center justify-center bg-base-200">
        <LoginForm />
      </div>
    </div>
  );
}
