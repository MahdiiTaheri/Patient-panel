import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="h-[100%]">
        <Sidebar className="hidden lg:flex z-50" />
        <main className="h-full w-[70%] mx-auto">
          <div className="w-[100%] mx-auto pt-8 h-full mr-auto">{children}</div>
        </main>
      </div>
    </>
  );
}

export default DashboardLayout;
