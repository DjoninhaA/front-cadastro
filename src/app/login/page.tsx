"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Toast from "../components/toast"; // Importe seu componente de Toast

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "warning"; } | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

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
      localStorage.setItem("token", result);

      if (response.ok) {
        console.log("Login realizado com sucesso:");
        setToast({ message: "Login realizado com sucesso!", type: "success" });
        router.push("/lista");
      } else {
        console.error("Erro ao entrar:", response.statusText);
        setToast({ message: "Erro ao realizar login. Tente novamente.", type: "error" });
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      setToast({ message: "Erro ao realizar login. Tente novamente.", type: "error" });
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="max-w-lg mx-auto bg-white p-15 border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <form
          className="flex flex-col gap-3 text-black"
          onSubmit={handleSubmit}
        >
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
            className="w-full bg-gradient-to-r from-purple-500 to-blue-400 text-white py-2 px-4 rounded-xl 
              hover:from-purple-400 hover:to-blue-700 transition-all duration-300 drop-shadow-lg text-lg font-semibold"
            disabled={loading}
          >
            {loading ? "Carregando..." : "Login"}
          </button>
        </form>
        <Link
          href="/cadastro"
          className="w-full block text-center text-lg font-semibold 
              bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent
              hover:purple-500 hover:to-purple-400 transition-all duration-300 drop-shadow-lg py-3"
        >
          Ir para Cadastro
        </Link>
      </div>

      {/* Exibindo o Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)} // Fechar o Toast após 3 segundos
        />
      )}
    </div>
  );
}
