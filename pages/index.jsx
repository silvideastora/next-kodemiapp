import Head from "next/head";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <body className="bg-black">
        <Navbar />
        <div className="container mx-auto px-24 flex items-center h-screen">
          <div className="max-w-full md:max-w-md xl:max-w-lg">
            <h2 class="text-white text-center md:text-left font-semibold text-2xl md:text-2xl lg:text-3xl xl:text-4xl -mt-24">
              ¿Listo para transformar tu vida programando?
            </h2>
            <button class="mt-4 w-1/2 flex items-center justify-center rounded-md bg-transparent hover:bg-green-400 text-white border-2 border-green-400" type="submit">Buy now</button>
            {/* <Button /> */}
          </div>
        </div>
      </body>
      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
}
