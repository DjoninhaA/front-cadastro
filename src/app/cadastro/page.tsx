import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border-gray-300 rounded-b-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Cadastro
      </h2>
      <form className="flex flex-col gap-3">
        <input
          placeholder="Nome"
          type="text"
          className="w-full px-3 py-2  border border-gray-300 rounded-md focus:outline-none"
        />
        <input
          placeholder="Email"
          type="email"
          className="w-full px-3 py-2  border border-gray-300 rounded-md focus:outline-none"
        />
        <input
          placeholder="Password"
          type="password"
          className="w-full px-3 py-2  border border-gray-300 rounded-md focus:outline-none"
        />
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400">
          Cadastrar-se
        </button>
      </form>
      <Link
        href="/login"
        className="w-full text-center text-blue-700 block hover:underline py-3"
      >
        Ir para login
      </Link>
    </div>
  );
}
