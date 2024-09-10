import Navbar from "@/conponents/about/Navbar";
import SideManu from "@/conponents/about/SideMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="p-4">
        <Navbar />
      </header>
      <main>
        <div className="flex flex-row">
          <div className="basis-1/4 ms-4">
            <SideManu />
          </div>
          <div className="basis-3/4">{children}</div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
