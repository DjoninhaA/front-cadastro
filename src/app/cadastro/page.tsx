"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Cadastrar() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      password,
    };

    try {
      const response = await fetch(
        "https://api-node-1-z7i9.onrender.com/cadastro",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Cadastro realizado com sucesso:", result);
        router.push("/login");
      } else {
        console.error("Erro ao cadastrar:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="max-w-lg mx-auto bg-white p-15 border-gray-300 rounded-b-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Cadastro
        </h2>
        <form className="flex flex-col gap-3 " onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-black"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-xl 
              hover:from-purple-400 hover:to-pink-400 transition-all duration-300 drop-shadow-lg text-lg font-semibold"
          >
            Cadastrar-se
          </button>
        </form>
        <Link
          href="/login"
          className="w-full block text-center text-lg font-semibold 
              bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent
              hover:from-pink-400 hover:to-purple-400 transition-all duration-300 drop-shadow-lg py-3"
        >
          Ir para login
        </Link>
      </div>
    </div>
  );
}
