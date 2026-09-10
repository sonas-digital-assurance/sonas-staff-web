import DashboardLayout from "@/layouts/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import TaskCard from "@/components/dashboard/TaskCard";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentQuotationTable from "@/components/dashboard/RecentQuotationTable";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-[1600px]">

        {/* Page heading */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium text-[#005BAC]">
              BACK-OFFICE SONAS
            </p>

            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">
              Tableau de bord
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Vue d’ensemble de l’activité et des opérations à traiter.
            </p>
          </div>

          <div className="hidden text-right sm:block">
            <p className="text-sm font-medium text-slate-700">
              10 septembre 2026
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Dernière mise à jour : à l’instant
            </p>
          </div>
        </div>

        {/* KPI */}
        <section>
          <div className="mb-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Indicateurs clés
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              title="Clients"
              value="12 458"
              change="+4,8 %"
              icon="clients"
            />

            <StatCard
              title="Véhicules"
              value="8 291"
              change="+2,1 %"
              icon="vehicles"
            />

            <StatCard
              title="Devis"
              value="342"
              change="+12,4 %"
              icon="quotations"
            />

            <StatCard
              title="Polices"
              value="7 845"
              change="+3,7 %"
              icon="policies"
            />
          </div>
        </section>

        {/* Tasks */}
        <section className="mt-10">
          <div className="mb-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              À traiter
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <TaskCard
              title="Devis en attente"
              count={12}
              type="quotation"
              description="Devis nécessitant une vérification ou une validation."
            />

            <TaskCard
              title="Paiements à confirmer"
              count={5}
              type="payment"
              description="Paiements reçus en attente de confirmation."
            />

            <TaskCard
              title="Polices à émettre"
              count={8}
              type="policy"
              description="Dossiers validés prêts pour l’émission de la police."
            />
          </div>
        </section>

        {/* Recent quotations */}
        <section className="mt-10">
          <RecentQuotationTable />
        </section>

        {/* Quick actions */}
        <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <div className="mb-4">
            <h2 className="text-sm font-semibold text-slate-900">
              Actions rapides
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Accédez rapidement aux opérations courantes.
            </p>
          </div>

          <QuickActions />
        </section>

      </div>
    </DashboardLayout>
  );
}