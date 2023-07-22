import logo from "../assets/images/logo.png";

const Footer = () => {
  const footerData = [
    {
      title: "Company",
      links: [
        { text: "Home", href: "#" },
        { text: "About Us", href: "#" },
        { text: "Contact Us", href: "#" },
        { text: "Movies", href: "#" },
      ],
    },
    {
      title: {logo}, // Use logo directly as the title value
      links: [
        { text: "Lorem 196 Andrew", href: "#" },
        { text: "New York, NY10007", href: "#" },
        { text: "Tell:+255 754 661 423", href: "#" },
        { text: "Email:info@zpunet.com", href: "#" },
      ],
    },
    // Add more columns as needed
  ];

  return (
    <div className="bg-[#000025] py-6">
      <div className="container mx-auto flex justify-around gap-6">
        {/* First column */}
        <div className="w-1/2 md:w-1/4">
          <h1 className="text-white text-3xl font-medium mb-4 justify-center flex items-center">Company</h1>
          <ul className="text-sm flex flex-col space-y-3 mt-9 items-center">
            <li className="flex items-baseline">
              <a href="#" className="text-border inline-block w-full hover:text-[#E50914] text-slate-500">Home</a>
            </li>
            <li className="flex items-baseline">
              <a href="#" className="text-border inline-block w-full hover:text-[#E50914] text-slate-500">About Us</a>
            </li>
            <li className="flex items-baseline">
              <a href="#" className="text-border inline-block w-full hover:text-[#E50914] text-slate-500">Contact Us</a>
            </li>
            <li className="flex items-baseline">
              <a href="#" className="text-border inline-block w-full  hover:text-[#E50914] text-slate-500">Movies</a>
            </li>
          </ul>
        </div>
        
        {/* Second column */}
        <div className="w-1/2 md:w-1/4">
          <h1 className="text-white text-border font-medium mb-4 flex justify-center items-center">
            {/* Check if the title is an image */}
            {typeof footerData[1].title === "string" ? (
              footerData[1].title
            ) : (
              <img
                src={logo}
                alt="Logo"
                className="w-2/4 h-12 mb-2 object-contain"
              />
            )}
          </h1>
          <ul className="text-sm flex flex-col space-y-3 items-center">
            {footerData[1].links.map((link, linkIndex) => (
              <li key={linkIndex} className="flex items-baseline">
                <a href={link.href} className="text-border inline-block w-full hover:text-[#E50914] text-slate-500">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
