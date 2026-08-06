export default function Header() {
  return (
    <header className="h-20 bg-white border-b flex items-center justify-between px-8">

      <div>

        <h1 className="text-2xl font-bold">
          Tableau de bord
        </h1>

        <p className="text-sm text-gray-500">
          Bienvenue dans le Back-Office SONAS
        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="text-right">

          <p className="font-semibold">
            Administrateur
          </p>

          <p className="text-sm text-gray-500">
            SONAS
          </p>

        </div>

        <div className="h-12 w-12 rounded-full bg-[#005BAC] text-white flex items-center justify-center font-bold">
          A
        </div>

      </div>

    </header>
  );
}