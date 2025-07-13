export const metadata = {
  title: "Pasha-Store",
  description: "Welcome to MyStore - Shop latest trends online.",
}
export default function FullScreenLoader() {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-80 z-50 flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-[#EE4899] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  