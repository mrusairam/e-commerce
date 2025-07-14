import Link from "next/link";

export const metadata = {
  title: "Pasha-Store",
  description: "Welcome to MyStore - Shop latest trends online.",
};

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-9xl font-extrabold text-[#EE4899]">404</h1>
      <p className="text-2xl sm:text-3xl font-semibold mt-4 text-gray-800">
        Oops! Page Not Found.
      </p>
      <p className="mt-2 text-gray-600 max-w-md text-center">
        Sorry, the page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block bg-[#EE4899] text-white px-6 py-3 rounded-md text-lg hover:bg-[#EE4899] transition"
      >
        Go Back to Home
      </Link>
    </div>
  );
}
