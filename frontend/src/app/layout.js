"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { SessionProvider } from 'next-auth/react';
import { ApiProvider } from "./contexts/ApiContext";
import { UserProvider } from "./contexts/UserContext";
import "./globals.css";
import Head from 'next/head';

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
