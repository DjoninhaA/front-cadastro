"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = {
      email,
      password,
    };

    try {
      const response = await fetch(
        "https://api-node-1-z7i9.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      //   console.log(result);

      localStorage.setItem("token", result);

      if (response.ok) {
        console.log("Login realizado com sucesso:");
        router.push("/lista");
      } else {
        console.error("Erro ao entrar:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="max-w-lg mx-auto bg-white p-15 border-gray-300 rounded-b-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <form className="flex flex-col gap-3 text-black" onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-xl 
              hover:from-purple-400 hover:to-pink-400 transition-all duration-300 drop-shadow-lg text-lg font-semibold"
          >
            Login
          </button>
        </form>
        <Link
          href="/cadastro"
          className="w-full block text-center text-lg font-semibold 
              bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent
              hover:from-pink-400 hover:to-purple-400 transition-all duration-300 drop-shadow-lg py-3"
        >
          Ir para Cadastro
        </Link>
      </div>
    </div>
  );
}
