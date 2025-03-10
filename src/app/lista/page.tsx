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
    <div className="max-w2xl mx-auto mt-10 bg-white p-8">
      <h2 className="text-2xl font-bold mb-6 text-center  text-gray-800">
        Lista de Usuários
      </h2>
      <ul className="space-y-2 ">
        {allUsers.map((user) => (
          <li
            key={user.id}
            className="bg-gray-100 p-4 rounded-lg text-center max-w-md mx-auto mt-10"
          >
            <p className="font-semibold">ID: {user.id}</p>
            <p className="font-semibold">Nome: {user.name}</p>
            <p className="font-semibold">Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
