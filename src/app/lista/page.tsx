"use client";
import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
};

export default function ListarUsuarios() {
  const [allUsers, setAllUsers] = useState<User[]>([]); // Inicializando como array vazio

  useEffect(() => {
    async function loadusers() {
      const token = localStorage.getItem("token");

      try {
        const response = await fetch(
          "https://api-node-1-z7i9.onrender.com/listar",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          console.error("Erro ao carregar usuários:", response.statusText);
          return;
        }

        const data = await response.json();
        setAllUsers(data.users);
      } catch (error) {
        console.error("Erro ao fazer a requisição:", error);
      }
    }

    loadusers();
  }, []);

  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="max-w-2xl mx-auto mt-10 bg-gray-900 p-8 rounded-2xl shadow-lg text-white">
        <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Lista de Usuários
        </h2>
        <ul className="space-y-4">
          {allUsers.map((user) => (
            <li
              key={user.id}
              className="bg-gray-800 p-6 rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-700"
            >
              <p className="font-semibold text-lg">
                ID: <span className="text-purple-400">{user.id}</span>
              </p>
              <p className="font-semibold text-lg">
                Nome: <span className="text-pink-400">{user.name}</span>
              </p>
              <p className="font-semibold text-lg">
                Email: <span className="text-blue-400">{user.email}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
