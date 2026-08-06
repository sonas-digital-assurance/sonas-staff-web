import LoginForm from "../components/LoginForm";

import {
  UserGroupIcon,
  TruckIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-100 lg:grid lg:grid-cols-5">

      {/* Left Panel */}
      <div className="hidden lg:flex lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-[#005BAC] to-[#00458A]">

        {/* Background decoration */}
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/10"></div>
        <div className="absolute -bottom-40 -left-24 h-[420px] w-[420px] rounded-full bg-white/5"></div>

        <div className="relative z-10 flex h-full w-full flex-col justify-between p-14">

          {/* Logo */}
          <div>

            <img
              src="/images/logo.png"
              alt="SONAS"
              className="h-24 w-auto rounded-xl bg-white p-2 shadow-lg"
            />

            <h1 className="mt-8 text-4xl font-bold text-white">
              Back-Office SONAS
            </h1>

            <p className="mt-3 text-lg text-white/90">
              Plateforme Numérique d'Assurance
            </p>

            <div className="mt-10 h-px bg-white/20"></div>

            {/* Modules */}

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-4">
                <UserGroupIcon className="h-6 w-6" />
                <span className="text-lg">Clients</span>
              </div>

              <div className="flex items-center gap-4">
                <TruckIcon className="h-6 w-6" />
                <span className="text-lg">Véhicules</span>
              </div>

              <div className="flex items-center gap-4">
                <DocumentTextIcon className="h-6 w-6" />
                <span className="text-lg">Devis</span>
              </div>

              <div className="flex items-center gap-4">
                <ShieldCheckIcon className="h-6 w-6" />
                <span className="text-lg">Polices d'assurance</span>
              </div>

              <div className="flex items-center gap-4">
                <CreditCardIcon className="h-6 w-6" />
                <span className="text-lg">Paiements</span>
              </div>

            </div>

          </div>

          {/* Footer */}

          <div className="border-t border-white/20 pt-6">

            <p className="text-sm text-white/80">
              Version 1.0.0
            </p>

            <p className="mt-2 text-sm text-white/60">
              © 2026 SONAS
            </p>

          </div>

        </div>

      </div>

      {/* Right Panel */}

      <div className="lg:col-span-3 flex items-center justify-center p-10">

        <LoginForm />

      </div>

    </div>
  );
}