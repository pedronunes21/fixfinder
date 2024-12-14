"use client"
import { checkForImage } from "@/lib/image";
import axios from "axios";
import { use, useEffect, useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Header } from "@/components/header";
import { SearchBar } from "@/components/searchBar";

interface SingleParams {
    params: Promise<{ slug: string }>
}

interface PostType {
    _id: string;
    author: string;
    title: string;
    slug: string;
    description: string;
    content: string[];
}

export default function Page({ params }: SingleParams) {
    const [post, setPost] = useState<PostType>();
    const [isPending, startTransition] = useTransition();

    const { slug } = use(params);

    const getData = () => {
        startTransition(async () => {
            let data = (await axios.get(`/api/posts/${slug}`)).data;
            setPost(data.post);
            console.log(data.post)
        })
    }

    useEffect(() => {
        getData();
    }, [])

    if (isPending) return;

    return (
        <div className="grid grid-rows-[30px_40px_10px_1fr] items-start justify-items-start min-h-screen p-2 py-10 gap-8 max-w-[1024px] mx-auto font-[family-name:var(--font-geist-sans)]">
            <Header />
            <SearchBar />
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{post?.title}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <main className="py-4">
                <h1 className="text-[32px] font-bold">{post?.title}</h1>
                <section className="flex flex-col items-center">
                    {post?.content.map((c, i) => {
                        if (checkForImage(c))
                            return <img
                                key={i}
                                className="py-4"
                                src={`data:image/png;base64, ${c}`}
                            />
                        else
                            return <p key={i}>{c}</p>
                    })}
                </section>
            </main>

            <footer className="flex justify-end w-full">
                <span className="text-gray-400">Created by: <strong>{post?.author}</strong></span>
            </footer>

        </div>
    )
}