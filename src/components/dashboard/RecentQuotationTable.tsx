import {
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const quotations = [
  {
    reference: "DV-2026-10482",
    client: "Entreprise Congo Services",
    vehicle: "Toyota Land Cruiser",
    amount: "1 250 USD",
    status: "En attente",
  },
  {
    reference: "DV-2026-10481",
    client: "Patrick Mbuyi",
    vehicle: "Toyota Corolla",
    amount: "680 USD",
    status: "À valider",
  },
  {
    reference: "DV-2026-10479",
    client: "Société Kivu Transport",
    vehicle: "Mercedes Sprinter",
    amount: "2 140 USD",
    status: "Validé",
  },
  {
    reference: "DV-2026-10476",
    client: "Marie Kabeya",
    vehicle: "Suzuki Swift",
    amount: "540 USD",
    status: "En attente",
  },
];

const statusStyles: Record<string, string> = {
  "En attente": "bg-amber-50 text-amber-700",
  "À valider": "bg-blue-50 text-blue-700",
  Validé: "bg-emerald-50 text-emerald-700",
};

export default function RecentQuotationTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
        <div>
          <h2 className="font-semibold text-slate-900">
            Derniers devis
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Les dernières opérations enregistrées
          </p>
        </div>

        <button className="flex items-center gap-1 text-sm font-medium text-[#005BAC]">
          Voir tous
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Référence
              </th>

              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Client
              </th>

              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Véhicule
              </th>

              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Prime
              </th>

              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Statut
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {quotations.map((quotation) => (
              <tr
                key={quotation.reference}
                className="transition hover:bg-slate-50"
              >
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-[#005BAC]">
                  {quotation.reference}
                </td>

                <td className="px-6 py-4 text-sm text-slate-700">
                  {quotation.client}
                </td>

                <td className="px-6 py-4 text-sm text-slate-600">
                  {quotation.vehicle}
                </td>

                <td className="px-6 py-4 text-sm font-medium text-slate-800">
                  {quotation.amount}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[quotation.status]}`}
                  >
                    {quotation.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}