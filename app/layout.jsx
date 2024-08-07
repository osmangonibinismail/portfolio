import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Footer from "@/components/Footer";
// import Work from "./work/page";
// import Services from "./services/page";
// import Resume from "./resume/page";
// import Contact from "./contact/page";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800",],
  variable: "---font-jetBrainsMono",
});

export const metadata = {
  title: "Osman Goni",
  description: "Generated by Osman Goni Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairTransition></StairTransition>
        <PageTransition>
          {children}
        </PageTransition>
        <div className="container mx-auto border-t border-white/5  mt-10">
        <Footer />
        </div>
        {/* <div className="mt-10 mb-10">
        <Services></Services>
        </div>
        <Resume></Resume>
        <Work></Work>
        <Contact></Contact> */}

      </body>
    </html>
  );
}
