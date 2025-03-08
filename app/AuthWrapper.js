"use client"; // Adicione isso no topo do arquivo, pois o localStorage é do lado do cliente

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthWrapper = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Se a rota atual for a página de login, não faz a verificação
    if (window.location.pathname === "/", "/Cadastro") return;

    // Verifica se os itens estão preenchidos no localStorage
    const nome = localStorage.getItem("nome");
    const comunidade = localStorage.getItem("comunidade");
    const role = localStorage.getItem("role");

    // Se algum dos itens estiver faltando, redireciona para a página de login
    if (!nome || !comunidade || !role) {
      router.push("/"); // Redireciona para a página de login
    }
  }, [router]);

  // Renderiza os children (conteúdo da página) se a verificação for bem-sucedida
  return <>{children}</>;
};

export default AuthWrapper;