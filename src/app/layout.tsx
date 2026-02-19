import Navbar from "@/modules/Navbar";
import { Toaster } from "@/components/ui/toaster";
import "@/app/globals.css"
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body dir="rtl">
                <title>
                    آکادمی هنری آموزشی صبا
                </title>
                <Navbar />
                {children}
                <Toaster />
            </body>
        </html>
    )
}