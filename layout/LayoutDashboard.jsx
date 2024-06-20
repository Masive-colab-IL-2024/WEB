import React from "react";
import Navigasi from "../src/components/Navigasi";
import Footer from "../src/components/Footer";
const LayoutDashboard = ({ children }) => {
    return (
        <div className="min-h-screen">
            <main className="bg-white">
                {children}
            </main>
        </div>
    );
}

export default LayoutDashboard;
