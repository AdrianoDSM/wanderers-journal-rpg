import Sidebar from "@/components/pages/Dashboard/Sidebar/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto p-6 bg-zinc-900">
        {children}
      </div>
    </div>
  );
}