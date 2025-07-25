// NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-5xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-2">Page Not Found</p>
      <Link to="/" className="mt-4 text-blue-600 underline">
        Go Back Home
      </Link>
    </div>
  );
}
