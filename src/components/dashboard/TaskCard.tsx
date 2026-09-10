import {
  ClockIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

type TaskType = "quotation" | "payment" | "policy";

interface TaskCardProps {
  title: string;
  count: number;
  type: TaskType;
  description: string;
}

const config = {
  quotation: {
    icon: ClockIcon,
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
    numberColor: "text-red-600",
  },
  payment: {
    icon: CreditCardIcon,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    numberColor: "text-amber-600",
  },
  policy: {
    icon: ShieldCheckIcon,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    numberColor: "text-emerald-600",
  },
};

export default function TaskCard({
  title,
  count,
  type,
  description,
}: TaskCardProps) {
  const { icon: Icon, iconBg, iconColor, numberColor } = config[type];

  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className={`rounded-lg p-2.5 ${iconBg}`}>
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>

        <span className={`text-3xl font-semibold ${numberColor}`}>
          {count}
        </span>
      </div>

      <div className="mt-5">
        <h3 className="font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-5 text-slate-500">
          {description}
        </p>
      </div>

      <button className="mt-5 flex items-center gap-1 text-sm font-medium text-[#005BAC] transition group-hover:gap-2">
        Consulter
        <ChevronRightIcon className="h-4 w-4" />
      </button>
    </div>
  );
}