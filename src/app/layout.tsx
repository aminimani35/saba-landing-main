import Navbar from "@/modules/Navbar";
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
            </body>
        </html>
    )
}