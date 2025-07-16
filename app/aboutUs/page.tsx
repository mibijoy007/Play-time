// import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import { FaBehanceSquare, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface SocialLinks {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
  instagram?: string; 
  behance?:string;
}

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  socialLinks?: SocialLinks;
}

const teamMembers: readonly TeamMember[] = [
  {
    name: "Ar. Atik Ishrak Chowdhury",
    role: "Founder, CEO, Nouveau Visuals",
    description: "Architect, Photographer based in BD.",
    image: "/aboutus/Sumit.jpg",
    socialLinks: {
      // facebook: "https://facebook.com/atik.ishrak",
      twitter: "https://x.com/ishrakSumit ",
      linkedin: "https://www.linkedin.com/in/ishraksumit/",
      instagram: "https://www.instagram.com/atik.ishrak.arc",
      behance:"https://www.behance.net/ishrakSumit",
    }
  },
  {
    name: "Ar. Yeasfi Araf",
    role: "Architect",
    description: "",
    image: "/aboutus/Araf.jpg",
  },
  {
    name: "Ar. Nur Hossain Nayan",
    role: "Architect",
    description: "",
    image: "/aboutus/Nur.jpg",
  },
  {
    name: "Maksudul Islam",
    role: "Founder, CEO, Nouveau GenTech",
    description: "Full-Stack Developer | Building Web Apps & AI tools for modern businesses",
    image: "/aboutus/Maksudul.jpg",
    socialLinks: {
      // facebook: "https://facebook.com/mi.bijoy",
      twitter: "https://x.com/MaksudulIslam71",
      linkedin: "https://www.linkedin.com/in/maksudul-i-490750102",
      github: "https://github.com/mibijoy007",
    }
  },
  {
    name: "Mohaiminul Islam",
    role: "Frontend Dev, Nouveau GenTech",
    description: "Tech enthusiast | Bulding slick UI/UX | Gamer | Enjoys movie nights with friends.",
    image: "https://placehold.co/200x200?text=Mohaiminul",
    socialLinks: {
      // facebook: "https://facebook.com/mohaiminul.islam",
      // twitter: "https://twitter.com/mohaiminul_dev",
      // linkedin: "https://linkedin.com/in/mohaiminul-islam",
      github: "https://github.com/Mohaiminul007/",
    }
  },

];



export default function AboutUsPage() {
  return (
    <div className="bg-white">
      {/* <Navbar /> */}
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl opacity-90">
            Based in Bangladesh, Working worldwide,
          </p>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Meet Our Team</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Get to know the people behind our success. Each member brings unique skills and passion to the table.
          </p>

          {/* Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white flex flex-col rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">


<div className="relative flex items-center justify-center w-full h-56 bg-[#dddddd] rounded-lg overflow-hidden">
  <Image
    src={member.image}
    alt={member.name}
    fill
    className="object-contain rounded-lg"
    sizes="100vw"
  />
</div>



                <div className="p-6 flex flex-col justify-between h-48">
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-indigo-600 text-sm mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </div>
                  <div className="flex space-x-3 mt-4">
                    {member.socialLinks?.facebook && (
                      <a
                        href={member.socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600  hover:scale-125  transition-all duration-300"
                      >
                        <FaFacebookF size={16} />
                      </a>
                    )}
                    {member.socialLinks?.twitter && (
                      <a
                        href={member.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 hover:scale-125  transition-all duration-300"
                      >
                        <FaXTwitter  size={15} />
                      </a>
                    )}
                    {member.socialLinks?.linkedin && (
                      <a
                        href={member.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-700 hover:scale-125  transition-all duration-300"
                      >
                        <FaLinkedinIn size={16} />
                      </a>
                    )}
                    {member.socialLinks?.github && (
                      <a
                        href={member.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-700 hover:scale-125  transition-all duration-300"
                      >
                        <FaGithub size={16} />
                      </a>
                    )}
                    {member.socialLinks?.instagram && (
                      <a
                        href={member.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-700 hover:scale-125  transition-all duration-300"
                      >
                        <FaInstagram   size={16} />
                      </a>
                    )}
                    {member.socialLinks?.behance && (
                      <a
                        href={member.socialLinks.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-700 hover:scale-125  transition-all duration-300"
                      >
                        <FaBehanceSquare  size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}