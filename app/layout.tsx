"use client";

import React, { useEffect, useState, useContext } from "react";
import type { Metadata } from "next";
import "./styles/globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import { AppProvider } from "./context/AppContext"; // Adjust the path accordingly

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showContactModal, setShowContactModal] = useState<boolean>(false);

  return (
    <html lang="en" className={inter.className}>
      <body className="overflow-scroll no-scrollbar">
        <AppProvider>
          <Header setShowContactModal={setShowContactModal} />
          <main>{children}</main>
          <ContactModal
            showContactModal={showContactModal}
            setShowContactModal={setShowContactModal}
          />
          <Footer setShowContactModal={setShowContactModal} />
        </AppProvider>
      </body>
    </html>
  );
}
