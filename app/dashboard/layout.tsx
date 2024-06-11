import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      <Sidebar className="hidden lg:flex" />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className=" max-w-[1056px] mx-auto pt-6 h-full">{children}</div>
      </main>
    </main>
  );
}

export default DashboardLayout;
