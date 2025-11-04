import MainPage from "~/components/main-page/MainPage";
import Navbar from "~/components/nav-bar/Navbar";


export function Welcome() {
  return (
    <>
    <Navbar/>
    <main className="flex items-center justify-center pt-16 pb-4 w-full">
    <MainPage/>
    </main>
    
    </>
  );
}

