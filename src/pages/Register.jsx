import RegisterForm from "../features/register/RegisterForm";
import StaticNav from "../ui/StaticNav";

// pages/Register.jsx
export default function Register() {
  return (
    <div className="min-h-screen bg-base-200">
      <StaticNav />
      <div className="min-h-150 flex items-center justify-center bg-base-200">
        <RegisterForm />
      </div>
    </div>
  );
}
