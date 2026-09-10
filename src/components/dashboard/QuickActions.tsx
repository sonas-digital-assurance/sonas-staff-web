import {
  PlusIcon,
  UserPlusIcon,
  DocumentPlusIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const actions = [
  {
    label: "Nouveau devis",
    icon: DocumentPlusIcon,
  },
  {
    label: "Nouveau client",
    icon: UserPlusIcon,
  },
  {
    label: "Nouvelle police",
    icon: ShieldCheckIcon,
  },
];

export default function QuickActions() {
  return (
    <div className="flex flex-wrap gap-3">
      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <button
            key={action.label}
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-[#005BAC] hover:text-[#005BAC]"
          >
            <Icon className="h-4 w-4" />
            {action.label}
          </button>
        );
      })}

      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-lg bg-[#005BAC] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#004b8f]"
      >
        <PlusIcon className="h-4 w-4" />
        Nouvelle opération
      </button>
    </div>
  );
}