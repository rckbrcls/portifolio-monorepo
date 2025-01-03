import Image from "next/image";
import React, { useMemo, useRef } from "react";
import Aurora from "@/components/molecules/Aurora";
import Title from "@/components/atoms/Title";
import Header from "@/components/organisms/Header";
import Alert from "@/components/molecules/Alert";
import Head from "next/head";
import { AnimatedBeamArchitecture } from "@/components/organisms/AnimatedBeam";
import SubTitle from "@/components/atoms/SubTitle";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { Text } from "@/components/atoms/Text";
import { motion, useInView } from "framer-motion";

const MemoizedAurora = React.memo(Aurora);

export default function Home() {
  const aurora = useMemo(() => <MemoizedAurora />, []);

  const clientRef = useRef(null);
  const serverRef = useRef(null);
  const finalRef = useRef(null);

  const isClientInView = useInView(clientRef, { once: true, margin: "-100px" });
  const isServerInView = useInView(serverRef, { once: true, margin: "-100px" });
  const isFinalInView = useInView(finalRef, { once: true, margin: "-100px" });

  const leftVariants = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  const rightVariants = {
    hidden: { x: "100vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <>
      <Head>
        <title>Hello! | rckbrcls</title>
      </Head>

      <Alert />
      <Header />

      <div className="z-0 h-svh w-full overflow-x-hidden md:snap-y md:snap-mandatory md:overflow-y-scroll">
        {/* Seção Inicial */}
        <div className="relative flex h-svh snap-center flex-col items-center justify-center text-center">
          {aurora}
          <div className="relative my-4 h-2/5 w-full select-none">
            <Image
              className="select-none"
              src="/images/assets/me.png"
              alt="Picture of Erick Barcelos"
              fill
              style={{ objectFit: "contain" }}
              priority
              quality={100}
            />
          </div>
          <Title word="Olá! I'm Erick Barcelos" />
        </div>

        {/* Seção de Client-Side Architecture */}
        <div className="mx-auto w-11/12">
          <div
            ref={clientRef}
            className="grid w-full snap-center grid-cols-2 items-center justify-center border-b border-zinc-700/40 max-md:grid-cols-1 max-md:gap-10 max-md:py-10 md:h-svh"
          >
            <motion.div
              variants={leftVariants}
              initial="hidden"
              animate={isClientInView ? "visible" : "hidden"}
            >
              <AnimatedBeamArchitecture />
            </motion.div>

            <motion.div
              variants={rightVariants}
              initial="hidden"
              animate={isClientInView ? "visible" : "hidden"}
              className="gap-10x flex flex-col items-end justify-start"
            >
              <Title
                className="text-end max-md:text-center max-md:text-5xl"
                word="🖥️ Client-Side Architecture"
                type="blur"
              />
              <SubTitle className="text-end max-md:text-center max-md:text-xl">
                This portfolio serves as the client-side of my project, built
                using a microfrontend architecture. I gathered old projects and
                integrated them into a single main frontend. Each project is a
                microfrontend that connects to APIs hosted on my personal
                server. This approach not only helped me revisit past work but
                also deepened my understanding of microfrontends and modular
                development. 🛠️
              </SubTitle>
            </motion.div>
          </div>

          {/* Seção de Server & APIs */}
          <div
            ref={serverRef}
            className="grid w-full snap-center grid-cols-2 items-center justify-center border-b border-zinc-700/40 max-md:grid-cols-1 max-md:gap-10 max-md:py-10 md:h-svh"
          >
            <motion.div
              variants={leftVariants}
              initial="hidden"
              animate={isServerInView ? "visible" : "hidden"}
              className="gap-10x flex flex-col items-start justify-start"
            >
              <Title
                className="text-start max-md:text-center max-md:text-5xl"
                word="🔧 Server & APIs"
                type="blur"
              />
              <SubTitle className="max-md:text-center max-md:text-xl">
                The backend for this portfolio runs on my personal server 💻,
                which I set up using an old computer I had at home. It hosts the
                APIs for each microfrontend project, handling data,
                authentication, and various backend services. This hands-on
                experience taught me a lot about server management, Linux,
                Docker, and deploying scalable APIs. It's been a rewarding and
                practical way to learn. 🚀
              </SubTitle>
            </motion.div>

            <motion.div
              variants={rightVariants}
              initial="hidden"
              animate={isServerInView ? "visible" : "hidden"}
            >
              <AnimatedBeamArchitecture />
            </motion.div>
          </div>

          {/* Seção Final */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate={isFinalInView ? "visible" : "hidden"}
            ref={finalRef}
            className="mx-auto flex snap-center flex-col items-center justify-center gap-10 pb-20 pt-10 md:h-svh md:w-2/3"
          >
            <Title
              className="max-md:text-5xl"
              word="🎯 That's a Wrap!"
              type="blur"
            />
            <SubTitle className="text-center max-md:text-xl">
              The entire project, from frontend to backend, reflects my journey
              of learning and building. You can explore the all project code on
              my GitHub.
            </SubTitle>

            <SubTitle className="text-center max-md:text-xl">
              Feel free to check out other projects while you're there! 🎬
            </SubTitle>

            <div className="flex w-full items-center justify-center gap-2">
              <a
                target="_blank"
                href={"https://github.com/rckbrcls/portifolio-monorepo"}
                className="glass-dark flex h-16 w-1/2 items-center justify-center gap-2 text-nowrap rounded-lg px-6 py-2 text-xl font-black transition duration-700 hover:scale-[1.01] hover:bg-zinc-800 active:scale-95 active:bg-zinc-800"
              >
                <AiFillGithub />
                <Text className="max-md:hidden"> Repository</Text>
              </a>
              <Link
                href={"projects"}
                className="flex h-16 w-1/2 items-center justify-center gap-2 text-nowrap rounded-lg border-none bg-[linear-gradient(325deg,#d500f9_0%,#6366f1_35%,#ec4899_55%,#a855f7_75%,#3b82f6_100%)] bg-[280%_auto] px-6 py-2 text-xl font-black text-white shadow-[0px_0px_20px_rgba(219,112,255,0.5),0px_5px_5px_-1px_rgba(99,102,241,0.25),inset_4px_4px_8px_rgba(236,72,153,0.5),inset_-4px_-4px_8px_rgba(168,85,247,0.35)] transition-[background] duration-700 hover:bg-right-top focus:outline-none focus:ring-[#a855f7] focus:ring-offset-1 focus:ring-offset-white focus-visible:ring-2 dark:focus:ring-[#6366f1] dark:focus:ring-offset-black"
              >
                <MdComputer />
                <Text className="max-md:hidden">Projects</Text>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
