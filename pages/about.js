import Head from "next/head";
import Link from "next/link";
import { ArrowLeft as ArrowLeftIcon } from "lucide-react";

import appName from "./index";

export default function About() {
  return (
    <div>
      <Head>
        <title>{appName}</title>
      </Head>

      <main className="container max-w-[600px] mx-auto p-5">
        <h1 className="text-center text-5xl font-bold m-6">{appName}</h1>

        <p className="prose">
          This website provides a simple interface for modifying
          images using text-based instructions. You can upload an image, provide
          a text prompt describing how to change that image, and generate new
          images based on the prompt.
        </p>

        <div className="text-center mt-10">
          <Link
            href="/"
            className="bg-black text-white rounded-md text-small inline-block p-3 flex-none">

            <ArrowLeftIcon className="icon" />Back to painting
          </Link>
        </div>
      </main>
    </div>
  );
}
