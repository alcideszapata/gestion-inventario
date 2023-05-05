import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";
import React, { Children } from "react";

interface LayoutProps {
    children: JSX.Element;
}

const Layout = ({children}:LayoutProps) => {
    return (
        <main className="flex h-screen w-screen flex-col md:flex-row">
            <Navbar />
            <Sidebar />
            <section className="w-full h-full">
            {children}
            </section>
        </main>
    )
    
}

export default Layout
