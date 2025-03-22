import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-blue-400 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/">Logo</Link>
        </div>
        <div className="space-x-4">
          <Link href="/login">
            <span className="bg-white text-blue-400 px-4 py-2 rounded-md font-semibold hover:bg-gray-100">
              Login
            </span>
          </Link>
          <Link href="/cadastro">
            <span className="bg-transparent text-white border-2 border-white px-4 py-2 rounded-md font-semibold hover:bg-white hover:text-blue-400">
              Cadastre-se
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
