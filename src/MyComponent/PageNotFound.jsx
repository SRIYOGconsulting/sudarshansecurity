import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#f8f8f8] text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <Link
        to="/home"
        className="px-6 py-3 bg-red-800 text-white hover:bg-red-900 transition rounded-full"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default PageNotFound;