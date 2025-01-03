"use client";

import React, { useState, useMemo } from "react";
import Title from "../atoms/Title";

import FilterSection from "../molecules/FilterSection";
import { projects } from "../../../public/data/projects/projects";
import {
  languages,
  frameworks,
  databases,
  toolsAndLibraries,
} from "../../../public/data/techStack";
import ProjectAccordion from "../organisms/ProjectAccordion";
import { FaBroom } from "react-icons/fa6";
import { DownButton } from "../atoms/DownButton";
import { Text } from "../atoms/Text";

// Helper types
type TechItem<T> = { name: T; active: boolean };

// Utility functions
const createTechItem = <T,>(name: T): TechItem<T> => ({ name, active: false });
const initializeFilters = <T,>(items: T[]): TechItem<T>[] =>
  items.map(createTechItem);

export default function ProjectsList() {
  const [languageFilter, setLanguageFilter] = useState(
    initializeFilters(languages),
  );
  const [frameworkFilter, setFrameworkFilter] = useState(
    initializeFilters(frameworks),
  );
  const [databaseFilter, setDatabaseFilter] = useState(
    initializeFilters(databases),
  );
  const [toolOrLibraryFilter, setToolOrLibraryFilter] = useState(
    initializeFilters(toolsAndLibraries),
  );

  const resetFilter = () => {
    setLanguageFilter(initializeFilters(languages));
    setFrameworkFilter(initializeFilters(frameworks));
    setDatabaseFilter(initializeFilters(databases));
    setToolOrLibraryFilter(initializeFilters(toolsAndLibraries));
  };

  const activeFilters = [
    ...languageFilter,
    ...frameworkFilter,
    ...databaseFilter,
    ...toolOrLibraryFilter,
  ].filter((item) => item.active);

  const filteredProjects = useMemo(() => {
    if (activeFilters.length === 0) return projects;
    return projects.filter((project) =>
      activeFilters.some((filter) =>
        project.techStack.some(
          (tech) => tech.toLowerCase() === filter.name.toLowerCase(),
        ),
      ),
    );
  }, [activeFilters]);

  return (
    <div className="mx-auto flex w-11/12 flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center max-md:pt-20 md:h-svh">
        <Title className="md:text-9xl" word="Projects" type="blur" gradient />

        <div className="mt-10 grid w-full gap-2">
          <FilterSection
            title="Languages"
            filter={languageFilter}
            setFilter={setLanguageFilter}
          />
          <FilterSection
            title="Frameworks"
            filter={frameworkFilter}
            setFilter={setFrameworkFilter}
          />
          <FilterSection
            title="Databases"
            filter={databaseFilter}
            setFilter={setDatabaseFilter}
          />
          <FilterSection
            title="Tools & Libraries"
            filter={toolOrLibraryFilter}
            setFilter={setToolOrLibraryFilter}
          />
          <button
            className="glass-dark flex w-min select-none items-center gap-2 rounded-full bg-zinc-500 px-4 py-0.5 duration-500 hover:bg-zinc-800 active:scale-95 active:bg-zinc-800 md:py-1"
            onClick={resetFilter}
          >
            <FaBroom />
            <Text className="text-nowrap max-md:text-sm">Clear filter</Text>
          </button>
        </div>
        <DownButton />
      </div>
      <ProjectAccordion projects={filteredProjects} />
    </div>
  );
}
