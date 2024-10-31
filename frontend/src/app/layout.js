"use client";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from 'next/head';
import NextTopLoader from "nextjs-toploader";
import { config } from "@fortawesome/fontawesome-svg-core";
import { SessionProvider } from 'next-auth/react';
import { ApiProvider } from "./contexts/ApiContext";
import { UserProvider } from "./contexts/UserContext";

config.autoAddCss = false;

const RootLayout = ({ children, session }) => {
    return (
        <html lang="es">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
                <title>BOOSTUP</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <NextTopLoader color="#3FB284" />
                <SessionProvider session={session}>
                    <ApiProvider>
                        <UserProvider>
                            {children}
                        </UserProvider>
                    </ApiProvider>
                </SessionProvider>
            </body>
        </html>
    );
};

export default RootLayout;
