export default function Menu() {
  return (
    <nav>
      <ul className="space-y-2">
        <li>
          <a href="#" className="block rounded-lg px-4 py-2 hover:bg-gray-800">
            Dashboard
          </a>
        </li>

        <li>
          <a href="#" className="block rounded-lg px-4 py-2 hover:bg-gray-800">
            Vagas
          </a>
        </li>

        <li>
          <a href="#" className="block rounded-lg px-4 py-2 hover:bg-gray-800">
            Configurações
          </a>
        </li>
      </ul>
    </nav>
  );
}
