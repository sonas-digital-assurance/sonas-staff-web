import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

import {
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";

export default function LoginForm() {
  return (
    <Card className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white shadow-2xl">

      <div className="p-12">

        <div className="mb-10 text-center">

          <h2 className="text-4xl font-bold text-[#005BAC]">
            Back-Office SONAS
          </h2>

          <p className="mt-3 text-gray-500">
            Connectez-vous pour accéder à votre espace de travail.
          </p>

        </div>

        <div className="space-y-7">

          <div>

            <label className="mb-2 block text-sm font-medium text-gray-700">
              Adresse e-mail
            </label>

            <div className="relative">

              <EnvelopeIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <input
                type="email"
                placeholder="nom@sonas.cd"
                className="h-12 w-full rounded-xl border border-slate-300 pl-12 pr-4 outline-none transition focus:border-[#005BAC] focus:ring-2 focus:ring-[#005BAC]/20"
              />

            </div>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-gray-700">
              Mot de passe
            </label>

            <div className="relative">

              <LockClosedIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

              <input
                type="password"
                placeholder="••••••••"
                className="h-12 w-full rounded-xl border border-slate-300 pl-12 pr-12 outline-none transition focus:border-[#005BAC] focus:ring-2 focus:ring-[#005BAC]/20"
              />

              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#005BAC]"
              >
                <EyeIcon className="h-5 w-5" />
              </button>

            </div>

          </div>

          <div className="flex items-center justify-between">

            <label className="flex items-center gap-2 text-sm text-gray-600">

              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300"
              />

              Se souvenir de moi

            </label>

            <button
              type="button"
              className="text-sm font-medium text-[#005BAC] hover:underline"
            >
              Mot de passe oublié ?
            </button>

          </div>

          <Button
            fullWidth
            className="h-12 rounded-xl bg-[#005BAC] text-white transition hover:bg-[#00458A]"
          >
            Se connecter
          </Button>

        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center">

          <p className="text-xs text-gray-500">
            Plateforme Numérique d'Assurance
          </p>

          <p className="mt-2 text-xs text-gray-400">
            Version 1.0.0
          </p>

          <p className="mt-1 text-xs text-gray-400">
            © 2026 SONAS
          </p>

        </div>

      </div>

    </Card>
  );
}