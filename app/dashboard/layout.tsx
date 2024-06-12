import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar className="hidden lg:flex z-[1000] z-50" />
      <Navbar />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className=" max-w-[1056px] mx-auto pt-6 h-full">{children}</div>
      </main>
    </>
  );
}

export default DashboardLayout;
