import {
  BellIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8">

      <div>

        <h2 className="text-3xl font-bold">
          Bonjour Jonas 👋
        </h2>

        <p className="text-gray-500">
          Bienvenue dans le Back-Office SONAS
        </p>

      </div>

      <div className="flex items-center gap-6">

        <div className="relative">

          <MagnifyingGlassIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />

          <input
            placeholder="Rechercher..."
            className="w-72 rounded-xl border py-2 pl-10 pr-4 outline-none"
          />

        </div>

        <BellIcon className="h-7 w-7 cursor-pointer text-gray-500" />

      </div>

    </header>
  );
}