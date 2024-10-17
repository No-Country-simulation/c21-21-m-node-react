"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { SessionProvider } from 'next-auth/react';
import { ApiProvider } from "./contexts/ApiContext";
import { UserProvider } from "./contexts/UserContext"; 
import "./globals.css";

config.autoAddCss = false;

const RootLayout = ({ children, session }) => {
    return (
        <html lang="en">
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
