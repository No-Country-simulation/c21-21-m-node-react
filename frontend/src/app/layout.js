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
