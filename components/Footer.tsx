import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  // FaYoutube,
  FaLinkedin,
  // FaTiktok,
  FaBehance,
  // FaDribbble,
  // FaVimeo 
} from 'react-icons/fa';

interface NVSocialsInterface {
  instagram: string;
  linkedin: string;
  facebook: string;
  behance: string;
}

const NVSocials: NVSocialsInterface = {
  instagram: "https://www.instagram.com/nouveau_visuals/",
  linkedin: "https://www.linkedin.com/company/nouveau-visuals",
  facebook: "https://www.facebook.com/nouveau3dvisuals/",
  behance: "https://www.behance.net/ishrakSumit",
}

import { FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-5 ">
      <div className=" flex items-center justify-center flex-col">
        <div className=" lg:w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Logo and Social Media */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
              </div>
              <span className="text-xl font-bold text-gray-800">Nouveau Visuals</span>
            </div>

            <div className='max-w-[12rem]'>
              <h4 className="text-gray-600 font-medium mb-3">Find Us on Social Media:</h4>
              <div className="flex flex-wrap gap-2">
                <Link href={NVSocials.facebook} className="FootIcon" target="_blank"
                  rel="noopener noreferrer">
                  <FaFacebook size={15} />
                </Link>
                <Link href={NVSocials.instagram} className="FootIcon" target="_blank"
                  rel="noopener noreferrer">
                  <FaInstagram size={15} />
                </Link>
                {/* <Link href="#" className="FootIcon" target="_blank"
                        rel="noopener noreferrer">
                  <FaXTwitter  size={15} />
                </Link>
                <Link href="#" className="FootIcon" target="_blank"
                        rel="noopener noreferrer">
                  <FaYoutube size={15} />
                </Link> */}
                <Link href={NVSocials.linkedin} className="FootIcon" target="_blank"
                  rel="noopener noreferrer">
                  <FaLinkedin size={15} />
                </Link>
                {/* <Link href="#" className="FootIcon" target="_blank"
                        rel="noopener noreferrer">
                  <FaTiktok size={15} />
                </Link> */}
                <Link href={NVSocials.behance} className="FootIcon" target="_blank"
                  rel="noopener noreferrer">
                  <FaBehance size={15} />
                </Link>

              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/aboutUs" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/quote#services" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/quote#faq" className="text-gray-600 hover:text-blue-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>

              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-4">Our Location</h3>
            <div className="flex items-start space-x-2">
              <svg className="w-5 h-5 text-gray-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-600">Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Our Technology Partner</h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                {/* <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
              </div> */}
                <span className="text-xl font-bold text-gray-800">Nouveau GenTech</span>
              </div>

              <div className='max-w-[12rem]'>
                <h4 className="text-gray-600 font-medium mb-3">Find Us on Social Media: </h4>
                <div className="flex flex-wrap gap-2">
                  <Link href="https://x.com/MaksudulIslam71" className="FootIcon" target="_blank"
                        rel="noopener noreferrer">
                    <FaXTwitter size={15} />
                  </Link>
                  <Link href="https://www.linkedin.com/in/maksudul-i-490750102" className="FootIcon" target="_blank"
                        rel="noopener noreferrer">
                    <FaLinkedin size={15} />
                  </Link>
                  {/* <Link href="#" className="FootIcon" target="_blank"
                        rel="noopener noreferrer">
                    <FaYoutube size={15} />
                  </Link>
                  <Link href="#" className="FootIcon" target="_blank"
                        rel="noopener noreferrer">
                    <FaTiktok size={15} />
                  </Link>
                  <Link href="#" className="FootIcon" target="_blank"
                        rel="noopener noreferrer">
                    <FaFacebook size={15} />
                  </Link>
                  <Link href="#" className="FootIcon" target="_blank"
                        rel="noopener noreferrer">
                    <FaInstagram size={15} />
                  </Link>
                  <Link href="#" className="FootIcon" target="_blank"
                        rel="noopener noreferrer">
                    <FaBehance size={15} />
                  </Link> */}
                  {/* <Link href="#" className="FootIcon" target="_blank"
                        rel="noopener noreferrer">
                  <FaDribbble size={15} />
                </Link>
                <Link href="#" className="FootIcon" target="_blank"
                        rel="noopener noreferrer">
                  <FaVimeo size={15} />
                </Link> */}
                </div>
              </div>
            </div>

            {/* <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <span className="text-green-600 text-lg">★</span>
                  <span className="text-sm font-medium text-gray-700">Trustpilot</span>
                </div>
              </div>
              <div className="flex space-x-1">
                {[1, 2, 3, 4].map((star) => (
                  <span key={star} className="text-green-500 text-lg">★</span>
                ))}
              </div>
              <div className="inline-block">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded text-sm font-medium">
                  DMCA PROTECTED
                </span>
              </div>
            </div> */}

          </div>




        </div>


      </div>
      {/* Copyright */}
      <div className="border-t border-gray-200 mt-12 pt-8 ">
        {/* <div className="bg-gray-800 text-center py-4 -mx-4 px-4"> */}
        <div className="bg-gray-800 text-center py-4  px-4">
          <p className="text-yellow-400 text-sm">
            © Nouveau-Visuals | All Rights Reserved | 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
