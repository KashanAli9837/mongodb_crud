import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 shadow-lg rounded-md">
      <Link href={"/"}>
        <h1 className="text-white text-2xl font-extrabold transition-transform transform hover:scale-105">
          CRUD.
        </h1>
      </Link>
      <Link href={"/addTopic"}>
        <button className="bg-white text-blue-600 font-semibold
         py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:text-white">
          Add Topic
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
