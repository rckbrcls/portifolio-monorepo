"use client";

import React from "react";
import { projects } from "../../../public/data/projects/projects";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import Title from "@/components/atoms/Title";
import Text from "@/components/atoms/Text";
import SubTitle from "@/components/atoms/SubTitle";
import { useRouter } from "next/router";
import Alert from "@/components/molecules/Alert";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { BiSolidComponent } from "react-icons/bi";
import { techStackIcons } from "../../../public/data/techStackIcons";

export default function Project() {
  const router = useRouter();
  const project = projects.find(
    (project) => project.slug === router.query.slug
  );

  return (
    <>
      <Alert />

      <Link
        href={"/projects"}
        className="fixed z-10 glass-dark size-10 rounded-full flex items-center justify-center m-10"
      >
        <ChevronLeftIcon />
      </Link>
      <div className="flex flex-col text-center w-11/12 md:w-3/4 mx-auto">
        <div className="h-[100svh] flex flex-col justify-center text-center items-center gap-4 w-full">
          <div className="flex md:flex-row flex-col justify-between md:items-end items-start w-full">
            <Title
              word={project?.name ?? ""}
              type="blur"
              gradient
              className="text-start w-full"
            />

            <div className="md:w-1/3 w-full flex flex-col gap-4">
              {project?.gitLink && (
                <a
                  className="glass-dark w-full px-10 py-4 rounded hover:bg-zinc-900 active:bg-zinc-900
              hover:scale-105 active:scale-95 duration-500 flex items-center justify-center gap-2"
                  href={project.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub size={30} />
                  <Text>Repository</Text>
                </a>
              )}
              {project?.microRoute && (
                <Link
                  href={`/microfrontend/${project.slug}`}
                  className="glass-dark w-full px-10 py-4 rounded hover:bg-zinc-900 active:bg-zinc-900
              hover:scale-105 active:scale-95 duration-500 flex items-center justify-center gap-2"
                >
                  <BiSolidComponent size={30} />
                  <Text>Microfrontend</Text>
                </Link>
              )}
              {project?.link && (
                <a
                  href={project.link}
                  className="glass-dark w-full px-10 py-4 rounded hover:bg-zinc-900 active:bg-zinc-900
              hover:scale-105 active:scale-95 duration-500 flex items-center justify-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text>Project</Text>
                </a>
              )}
            </div>
          </div>

          <div className="flex md:flex-row flex-col justify-between w-full gap-10">
            <div
              className="flex flex-wrap gap-4 text-start 
            items-start justify-start flex-col md:w-1/2 w-full"
            >
              <div className="flex items-center justify-between text-center glass-dark p-4 rounded-2xl w-full gap-2">
                <Text className="font-bold">Tech Stack</Text>
                <div className="flex flex-wrap gap-2 justify-end">
                  {project?.techStack?.map((tech, index) => (
                    <div
                      key={index}
                      className="glass-dark flex items-center rounded-lg px-4 gap-2"
                    >
                      {techStackIcons[tech as keyof typeof techStackIcons]}
                      <Text>{tech}</Text>
                    </div>
                  ))}
                </div>
              </div>

              {project?.timeline && (
                <div className="flex items-center justify-between text-center glass-dark p-4 rounded-2xl w-full gap-2">
                  <Text className="font-bold">Timeline</Text>
                  <div className="glass-dark rounded-lg px-4 flex items-center">
                    <Text>
                      {project?.timeline?.start} - {project?.timeline?.end}
                    </Text>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between text-center glass-dark p-4 rounded-2xl w-full gap-2">
                <Text className="font-bold">Members</Text>
                <div className="flex flex-wrap gap-2 justify-end">
                  {project?.members.map((member, index) => (
                    <div
                      key={index}
                      className="glass-dark rounded-lg px-4 flex items-center"
                    >
                      <Text>{member}</Text>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Text className="md:w-1/2 w-full text-start">
              {project?.description}
            </Text>
          </div>
        </div>
        {project?.projectVisualization && (
          <div className="flex flex-wrap md:flex-row flex-col gap-16 mb-10 justify-between items-center">
            {project?.projectVisualization?.map((object, index) => (
              <div key={index} className="flex flex-col gap-2">
                <SubTitle className="md:text-start">{object.title}</SubTitle>
                <Text>{object.description}</Text>

                <div className="w-full flex flex-wrap gap-4 md:flex-row flex-col items-center">
                  {object.images?.map((image) => (
                    <Image
                      key={index}
                      alt="Example"
                      src={image ?? ""}
                      sizes="100vw"
                      style={{
                        width: "auto",
                        maxWidth: "90vw",
                        height: "90svh",
                        borderRadius: "10px",
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
