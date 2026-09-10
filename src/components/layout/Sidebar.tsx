import {
  HomeIcon,
  UserGroupIcon,
  TruckIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  ChartBarIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const menus = [
  { name: "Tableau de bord", icon: HomeIcon },
  { name: "Clients", icon: UserGroupIcon },
  { name: "Véhicules", icon: TruckIcon },
  { name: "Devis", icon: DocumentTextIcon },
  { name: "Polices", icon: ShieldCheckIcon },
  { name: "Paiements", icon: CreditCardIcon },
  { name: "Rapports", icon: ChartBarIcon },
  { name: "Paramètres", icon: Cog6ToothIcon },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-[#005BAC] text-white flex flex-col">

      <div className="border-b border-white/20 p-6">

        <img
          src="/images/logo.png"
          alt="SONAS"
          className="h-16"
        />

        <h1 className="mt-5 text-2xl font-bold">
          Back-Office SONAS
        </h1>

        <p className="text-sm text-white/80">
          Plateforme Numérique d'Assurance
        </p>

      </div>

      <nav className="flex-1 p-4">

        {menus.map((menu) => (
          <button
            key={menu.name}
            className="mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition hover:bg-white/10"
          >
            <menu.icon className="h-6 w-6" />

            <span>{menu.name}</span>
          </button>
        ))}

      </nav>

      <div className="border-t border-white/20 p-5">

        <div className="font-semibold">
          Jonas Ndondoro
        </div>

        <div className="text-sm text-white/70">
          Administrateur
        </div>

      </div>

    </aside>
  );
}