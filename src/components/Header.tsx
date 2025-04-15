const Header = () => {
    return (
      <header className="w-full px-6 py-4 flex justify-between items-center sticky top-0 backdrop-blur-md">
        <h1 className="text-[#d8d8d8] text-2xl font-bold cursor-pointer">
          My Portfolio
        </h1>
        <nav className="flex gap-6">
          <a href="#home" className="text-[#dad8d9]/80 hover:text-[#d8d8d8] transition-all duration-200">
            Home
          </a>
          <a href="#about" className="text-[#dad8d9]/80 hover:text-[#d8d8d8] transition-all duration-200">
            About
          </a>
          <a href="#projects" className="text-[#dad8d9]/80 hover:text-[#d8d8d8] transition-all duration-200">
            Projects
          </a>
          <a href="#contact" className="text-[#dad8d9]/80 hover:text-[#d8d8d8] transition-all duration-200">
            Contact
          </a>
        </nav>
      </header>
    );
  };
  
  export default Header;