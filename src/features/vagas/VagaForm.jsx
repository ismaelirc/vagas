export default function VagaForm() {
  return (
    <form className="bg-white rounded-xl p-6 shadow-sm">
      <div className="mb-4">
        <label className="block mb-2 font-medium">Link da vaga</label>

        <input
          type="text"
          className="w-full rounded-lg border border-gray-300 px-4 py-2"
          placeholder="Link da vaga"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Empresa</label>

        <input
          type="text"
          className="w-full rounded-lg border border-gray-300 px-4 py-2"
          placeholder="Nome da empresa"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Modelo de contrato</label>

        <select
          type="text"
          className="w-full rounded-lg border border-gray-300 px-4 py-2"
          placeholder="Modelo de contrato"
        >
          <option>Selecione</option>
          <option>CLT</option>
          <option>PJ</option>
          <option>CLT/PJ</option>
          <option>Contract</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Por onde encontrei</label>

        <select
          type="text"
          className="w-full rounded-lg border border-gray-300 px-4 py-2"
          placeholder="Por onde encontrei a vaga"
        >
          <option>Selecione</option>
          <option>Site Empresa</option>
          <option>LinkedIn</option>
          <option>Plataforma de vagas</option>
          <option>Indicação</option>
        </select>
      </div>

      <button
        type="button"
        className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
      >
        Salvar
      </button>
    </form>
  );
}
