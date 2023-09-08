import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-900 mt-4">
      <div className="flex flex-col md:flex-row mt-4 font-medium text-base text-white text-center ">
        <div className="flex flex-col md:basis-1/2">
          <ul>
            <li>
              <Link to="/">
                <span className="p-2">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/AmakuruPage">
                <span className="p-2">Amakuru</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:basis-1/2">
          <ul className="pb-6">
            <li>
              <Link to="/ContactUsPage">
                <span className="p-2">Contact us</span>
              </Link>
            </li>
            <li>
              <Link to="/AboutUsPage">
                <span className="p-2">About us</span>
              </Link>
            </li>
            <li>
              <Link to="/TermsConditionsPage">
                <span className="p-2">Terms & Conditions</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-orange-400 text-md font-medium text-center py-5">
        All right reserved - Intare Sport 2023
      </p>
    </div>
  );
};

export default Footer;
