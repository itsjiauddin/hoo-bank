import logo from "../assets/images/logo.svg";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="space-y-6 py-6 lg:space-y-12">
      <div className="space-y-6 lg:grid lg:grid-cols-3 lg:space-y-0">
        <div className="space-y-6">
          <img className="block mx-auto lg:inline" src={logo} alt="" />
          <p className="text-customWhite-900/70">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:col-span-2 lg:flex lg:gap-28 lg:justify-end">
          <div className="space-y-3">
            <h3 className="font-medium text-lg">Usefull Links</h3>
            <div className="space-y-1">
              <p className="text-customWhite-900/70">Content</p>
              <p className="text-customWhite-900/70">How it Works</p>
              <p className="text-customWhite-900/70">Create</p>
              <p className="text-customWhite-900/70">Explore</p>
              <p className="text-customWhite-900/70">Terms & Services</p>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium text-lg">Community</h3>
            <div className="space-y-1">
              <p className="text-customWhite-900/70">Help Center</p>
              <p className="text-customWhite-900/70">Partners</p>
              <p className="text-customWhite-900/70">Suggestions</p>
              <p className="text-customWhite-900/70">Blog</p>
              <p className="text-customWhite-900/70">Newsletters</p>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium text-lg">Partner</h3>
            <div className="space-y-1">
              <p className="text-customWhite-900/70">Our Partner</p>
              <p className="text-customWhite-900/70">Become a Partner</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6 lg:flex lg:flex-row-reverse lg:space-y-0 lg:justify-between">
        <div className="flex justify-center gap-10">
          <FaInstagram size={27} />
          <FaFacebook size={27} />
          <FaTwitter size={27} />
          <FaLinkedin size={27} />
        </div>
        <div>
          <p className="text-customWhite-900/70">
            Copyright © 2023 HooBank. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
