import Head from "next/head";
import Header from "../organism/Header";
import MainWithSidebar from "../organism/MainWithSidebar";
import Footer from "../organism/Footer";
import { ReactNode, useEffect } from "react";


interface LayoutProps {
    title: string
    keywords?: string
    description?: string
    children: ReactNode
}

const DEFAULT_TITLE = process.env.NEXT_PUBLIC_BLOG_NAME
const DEFAULT_KEYWORDS = "development, coding, programming"
const DEFAULT_DESCRIPTION = "My blog is now developed"


function LayoutWithSidebar ({ title = DEFAULT_TITLE, keywords = DEFAULT_KEYWORDS, description = DEFAULT_DESCRIPTION, children }: LayoutProps) {
    
    title += " | YORIMICHI"
    
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0" />
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
                <link rel="icon" href="public/images/favicon.ico" />
            </Head>

            <div className="flex flex-col h-screen justify-between min-w-max">
                <Header />

                <MainWithSidebar >{children}</MainWithSidebar>

                <Footer />         
            </div>

        </div>
    );
}

export default LayoutWithSidebar;

