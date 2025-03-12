export default function CenteredText() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1
        className="text-6xl sm:text-8xl md:text-9xl font-bold text-center 
        bg-gradient-to-r from-purple-500 to-blue-300 bg-clip-text text-transparent
        drop-shadow-lg"
      >
        Bem Vindo!
      </h1>
      <a
        href="/cadastro"
        className="mt-10 w-40 text-center bg-gradient-to-r from-purple-500 to-blue-400 text-white py-2 px-4 rounded-xl 
          hover:from-blue-400 hover:to-purple-400 transition-all duration-300 drop-shadow-lg text-lg font-semibold"
      >
        Cadastrar-se
      </a>
    </div>
  );
}
