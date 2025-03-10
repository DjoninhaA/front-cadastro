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
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border-gray-300 rounded-b-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Login
      </h2>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
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
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400"
        >
          login
        </button>
      </form>
      <Link
        href="/cadastro"
        className="w-full text-center text-blue-700 block hover:underline py-3"
      >
        Ir para Cadastro
      </Link>
    </div>
  );
}
