/* eslint-disable @next/next/no-img-element */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Footer } from "../src/components/global/components/Footer";

interface PageProps extends AppProps {
    headerTitle: string;
}

const thumbmail: string =
    "https://www.datocms-assets.com/50719/1625642555-2042228321883724831238239178179011583638848n.jpg?auto=format&dpr=0.29&w=1794";

function MyApp({ Component, pageProps }: PageProps) {
    return (
        <div className="bg-gray-200">
            <div className="flex flex-col h-screen md:w-[25vw] m-auto bg-white">
                <header className="flex items-center px-4 py-4 border-b">
                    <img
                        src={thumbmail}
                        alt="User"
                        className="rounded-full w-7 h-7"
                    />
                    <h5 className="ml-6 text-lg font-extrabold">
                        {pageProps.headerTitle}
                    </h5>
                </header>

                <main className="flex-1 overflow-scroll">
                    <Component {...pageProps} />
                </main>

                <Footer />
            </div>
        </div>
    );
}

export default MyApp;
