import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
       
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#EE4899]">Pasha-Store</h2>
          <p className="text-sm text-gray-400">
            Trendy and affordable fashion, electronics, and more. Shop the latest with us.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="hover:text-[#EE4899] cursor-pointer" />
            <FaTwitter className="hover:text-[#EE4899] cursor-pointer" />
            <FaInstagram className="hover:text-[#EE4899] cursor-pointer" />
            <FaLinkedinIn className="hover:text-[#EE4899] cursor-pointer" />
          </div>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/store/category/tv" className="hover:text-white">TV</a></li>
            <li><a href="/store/category/audio" className="hover:text-white">Audio</a></li>
            <li><a href="/store/category/shoes" className="hover:text-white">Laptop</a></li>
            <li><a href="/store/category/watch" className="hover:text-white">Appliance</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/store" className="hover:text-white">Store</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Email: support@pasha-store.com</li>
            <li>Phone: +92 300 1234567</li>
            <li>Location: Lahore, Pakistan</li>
          </ul>
        </div>
      </div>

      
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Pasha-Store. All rights reserved. <br />
        <span className="text-gray-400">Developed by <span className="text-[#EE4899] font-semibold">Usairam</span></span>
      </div>
    </footer>
  );
}
