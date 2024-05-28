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
  const { id } = searchParams;

  if (!id || typeof id !== "string") return notFound();

  const configuration = await db.configuration.findUnique({
    where: { id },
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
