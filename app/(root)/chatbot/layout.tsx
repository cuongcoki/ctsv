import History from "@/components/chatbot/history";
import InforExam from "@/components/chatbot/infor-exam";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import background from "@/public/image/testbg.png";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main className="container mx-auto   flex flex-col gap-1 h-screen overflow-y-auto scrollbar-thin md:scrollbar-none scroll-smooth justify-between">
        <div className="container my-6 mx-auto max-w-7xl  flex flex-col gap-1 h-full justify-between">
          <Header />
          <div className="px-4 flex flex-col md:flex-row gap-4 h-full my-3  dark:bg-black">
            <History />
            <div className="w-full md:w-2/4 dark:bg-slate-800 h-full bg-blue-500/10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-lg p-4 shadow-md flex-grow">
              {children}
            </div>
            <InforExam />
          </div>
          <Footer className="mx-4" css="max-w-6xl" />
        </div>
      </main>
    </div>
  );
}