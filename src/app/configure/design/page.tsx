import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";
import DesignConfigurator from "./DesignConfigurator";

type Props = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function Page({ searchParams }: Props) {
  const { id: caseId } = searchParams;

  if (!caseId || typeof caseId !== "string") return notFound();

  const configuration = await db.configuration.findUnique({
    where: { id: caseId },
  });

  if (!configuration) return notFound();

  const { imageUrl, height, width } = configuration;

  return (
    <DesignConfigurator
      configId={configuration.id}
      imageDimensions={{ width, height }}
      imageUrl={imageUrl}
    />
  );
}
