import Button from "../ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-4">
      <h1 className="text-6xl font-bold text-error mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-base mb-6 text-gray-500">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Button to="/">Go to Dashboard</Button>
    </div>
  );
}
