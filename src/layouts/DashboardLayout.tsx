import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Header />

        <main className="flex-1 bg-slate-100 p-8">

          {children}

        </main>

      </div>

    </div>
  );
}