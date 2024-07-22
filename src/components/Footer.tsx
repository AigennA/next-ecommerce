import Image from "next/image";
import Link from "next/link";
// import { Input } from "postcss";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-orange-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24 text-center md:text-left">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8 items-center md:items-start">
          <Link href="/">
            <div className="text-4xl text-blue-900 font-semibold tracking-wide">lammazon</div>
          </Link>
          <p>Doftaheden 46, Central Drottninghome 90210 Linkoping, Sweden</p>
          <span className="font-semibold">contact@lammazon.com</span>
          <span title="Telephone" className="font-semibold">+46 563 385 415</span>
          <div className="flex gap-6 justify-center md:justify-start">
            <Image src="/facebook.png" alt="Facebook" width={16} height={16} />
            <Image src="/instagram.png" alt="Instagram" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-8 lg:gap-0 lg:justify-between text-center md:text-left">
          <div className="flex flex-col w-full lg:w-1/3 gap-4">
            <h1 className="font-medium text-lg mb-4">COMPANY</h1>
            <div className="flex flex-col gap-4">
              <Link href="/about">About Us</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/shop-transport">Shop & Transport</Link>
              <Link href="/blog">FAQ</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-1/3 gap-4">
            <h1 className="font-medium text-lg mb-4">SHOP</h1>
            <div className="flex flex-col gap-4">
              <Link href="/new-arrivals">New Arrivals</Link>
              <Link href="/accessories">Accessories</Link>
              <Link href="/men">Men</Link>
              <Link href="/women">Women</Link>
              <Link href="/products">All Products</Link>
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-1/3 gap-4">
            <h1 className="font-medium text-lg mb-4">HELP</h1>
            <div className="flex flex-col gap-4">
              <Link href="/customer-service">Customer Service</Link>
              <Link href="/my-account">My Account</Link>
              <Link href="/find-store">Find a Store</Link>
              <Link href="/legal-privacy">Legal & Privacy</Link>
              <Link href="/gift-card">Gift Card</Link>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8 items-center md:items-start">
          <h1 className="font-medium text-lg mb-4">SUBSCRIBE</h1>
          <p>Be first to get latest news about trends, promotions, and much more!</p>
          <div className="flex w-full">
            <input
              placeholder="Email address"
              type="text"
              className="p-4 w-3/4 border border-gray-300 rounded-l"
            />
            <button className="w-1/4 bg-pink-500 text-white p-4 rounded-r">JOIN</button>
          </div>
          <span className="font-semibold mt-4">Secure Payments</span>
          <div className="flex gap-4 justify-center md:justify-start">
            <Image src="/paypal.png" alt="PayPal" width={40} height={20} />
            <Image src="/mastercard.png" alt="MasterCard" width={40} height={20} />
            <Image src="/visa.png" alt="Visa" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        {/*<div className="text-center md:text-left">© 2024 Lammazon Shop. All rights reserved.</div>*/}
        
        {/*<div className="flex flex-col gap-8 md:flex-row items-center">
          <div className="text-center md:text-left">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">Sweden | English - Swedish</span>
          </div>
          <div className="text-center md:text-left">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD - SEK</span>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default Footer;
