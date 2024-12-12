import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[80px_1fr] items-start justify-items-start min-h-screen p-2 py-10 gap-8 max-w-[1024px] mx-auto font-[family-name:var(--font-geist-sans)]">
      <header className="flex items-start justify-start flex-col gap-3 w-full">
        <h1 className="font-[family-name:var(--font-geist-sans)] text-[28px] font-bold">FixFinder</h1>
        <Input type="text" placeholder="What are you looking for?" />
      </header>
      <main className="flex flex-wrap gap-2 items-start justify-start w-full">
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        /> */}

        {Array.from({ length: 3 }, (_, i) => i).map((_, i) => (
          <Card key={i} className="max-w-[calc(50%-4px)] w-full">
            <CardHeader>
              <CardTitle>Post Title Placeholder</CardTitle>
              <CardDescription>Short description with keywords highlighteded placeholder</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end">
              <a href="#" className="hover:underline hover:underline-offset-4">Acessar {`->`}</a>
            </CardFooter>
          </Card>
        ))}
      </main>
    </div>
  )
}
