export default function VagaForm() {
  return (
    <form className="bg-white rounded-xl p-6 shadow-sm">
      <div className="mb-4">
        <label className="block mb-2 font-medium">Nome</label>

        <input
          type="text"
          className="w-full rounded-lg border border-gray-300 px-4 py-2"
          placeholder="Digite seu nome"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Email</label>

        <input
          type="email"
          className="w-full rounded-lg border border-gray-300 px-4 py-2"
          placeholder="Digite seu email"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
      >
        Salvar
      </button>
    </form>
  );
}
