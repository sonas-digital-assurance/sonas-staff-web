import DashboardLayout from "@/layouts/DashboardLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>

      <div className="grid grid-cols-4 gap-6">

        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="text-gray-500">
            Clients
          </h2>

          <p className="mt-4 text-4xl font-bold">
            0
          </p>

        </div>

        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="text-gray-500">
            Véhicules
          </h2>

          <p className="mt-4 text-4xl font-bold">
            0
          </p>

        </div>

        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="text-gray-500">
            Devis
          </h2>

          <p className="mt-4 text-4xl font-bold">
            0
          </p>

        </div>

        <div className="rounded-xl bg-white p-6 shadow">

          <h2 className="text-gray-500">
            Polices
          </h2>

          <p className="mt-4 text-4xl font-bold">
            0
          </p>

        </div>

      </div>

    </DashboardLayout>
  );
}