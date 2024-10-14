"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { SessionProvider } from 'next-auth/react'; 
import "./globals.css";

config.autoAddCss = false;

const RootLayout = ({ children, session }) => {
    return (
        <html lang="en">
            <body>
                <SessionProvider session={session}> 
                    {children}
                </SessionProvider>
            </body>
        </html>
    );
};

export default RootLayout;
