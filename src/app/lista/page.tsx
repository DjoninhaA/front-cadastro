"use client";
import { useEffect } from "react";

export default function ListarUsuarios() {
  useEffect(() => {
    async function loadusers() {
      const token = localStorage.getItem("token");
      console.log(token);
      const response = await fetch("http://localhost:3000/listar", {
        method: "GET",
        headers: {
          //   "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);
    }

    loadusers();
  }, []);

  return (
    <div>
      <h2>Listar Usuarios</h2>
    </div>
  );
}
