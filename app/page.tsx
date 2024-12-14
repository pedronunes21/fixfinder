"use client"
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import Image from "next/image";
import { use, useEffect, useState, useTransition } from "react";
import axios from "axios";
import { checkForImage } from "@/lib/validations";

interface PostType {
  _id: string;
  author: string;
  title: string;
  slug: string;
  description: string;
  content: string[];
}

export default function Home() {

  const [posts, setPosts] = useState<PostType[]>([]);
  const [isPending, startTransition] = useTransition();

  const getData = () => {
    startTransition(async () => {
      let data = (await axios.get('/api/posts')).data;
      setPosts(data.posts);
    })
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="grid grid-rows-[80px_1fr] items-start justify-items-start min-h-screen p-2 py-10 gap-8 max-w-[1024px] mx-auto font-[family-name:var(--font-geist-sans)]">
      <header className="flex items-start justify-start flex-col gap-3 w-full">
        <a href="/" className="font-[family-name:var(--font-geist-sans)] text-[24px] font-medium">FixFinder</a>
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
        {posts.map((post, i) => (
          <Card key={i} className="max-w-[calc(50%-4px)] w-full">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end">
              <a href={`/posts/${post.slug}`} className="hover:underline hover:underline-offset-4">Acessar {`->`}</a>
            </CardFooter>
          </Card>
        ))}

        <Pagination className="py-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </main>
    </div>
  )
}
