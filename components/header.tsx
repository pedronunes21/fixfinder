import Link from "next/link"
import { Button } from "./ui/button"


const Header = () => {
    return (
        <header className="flex items-center justify-between gap-3 w-full">
            <a href="/" className="font-[family-name:var(--font-geist-sans)] text-[24px] font-medium">FixFinder</a>
            <Button variant="outline">
                <Link href="/admin/create">Login</Link>
            </Button>
        </header>
    )
}

export { Header }