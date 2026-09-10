import {
  UserGroupIcon,
  TruckIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

type StatIcon =
  | "clients"
  | "vehicles"
  | "quotations"
  | "policies";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: StatIcon;
}

const icons = {
  clients: UserGroupIcon,
  vehicles: TruckIcon,
  quotations: DocumentTextIcon,
  policies: ShieldCheckIcon,
};

export default function StatCard({
  title,
  value,
  change,
  icon,
}: StatCardProps) {
  const Icon = icons[icon];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            {value}
          </p>
        </div>

        <div className="rounded-lg bg-blue-50 p-2.5">
          <Icon className="h-5 w-5 text-[#005BAC]" />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1.5 text-sm">
        <ArrowTrendingUpIcon className="h-4 w-4 text-emerald-600" />

        <span className="font-medium text-emerald-600">
          {change}
        </span>

        <span className="text-slate-400">
          ce mois
        </span>
      </div>
    </div>
  );
}