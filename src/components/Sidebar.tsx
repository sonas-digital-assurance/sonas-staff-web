export default function Sidebar() {
  return (
    <aside className="w-72 bg-[#005BAC] text-white flex flex-col">

      <div className="p-8 border-b border-white/20">

  <div className="flex items-center gap-4">

    <img
      src="/images/logo.png"
      alt="SONAS"
      className="h-16 w-auto bg-white rounded-lg p-2"
    />

    <div>

      <h1 className="text-3xl font-bold">
        SONAS
      </h1>

      <p className="text-sm text-white/80">
        Back-Office
      </p>

    </div>

  </div>

</div>

      <nav className="flex-1 p-6">

        <ul className="space-y-4">

          <li className="cursor-pointer rounded-lg p-3 hover:bg-white/10">
            📊 Tableau de bord
          </li>

          <li className="cursor-pointer rounded-lg p-3 hover:bg-white/10">
            👥 Clients
          </li>

          <li className="cursor-pointer rounded-lg p-3 hover:bg-white/10">
            🚗 Véhicules
          </li>

          <li className="cursor-pointer rounded-lg p-3 hover:bg-white/10">
            📄 Devis
          </li>

          <li className="cursor-pointer rounded-lg p-3 hover:bg-white/10">
            🛡️ Polices
          </li>

          <li className="cursor-pointer rounded-lg p-3 hover:bg-white/10">
            💳 Paiements
          </li>

        </ul>

      </nav>

    </aside>
  );
}