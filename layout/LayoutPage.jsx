import React from "react";
import Navigasi from "../src/components/Navigasi";
import Footer from "../src/components/Footer";
const LayoutPage = ({ children }) => {
    return (
        <div className="min-h-screen">
            <Navigasi />
            <main className="bg-white">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default LayoutPage;
