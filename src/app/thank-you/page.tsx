import { Suspense } from "react";
import ThankYou from "./ThankYou";

type Props = {};

export default function page({}: Props) {
  return (
    <Suspense>
      <ThankYou />
    </Suspense>
  );
}
