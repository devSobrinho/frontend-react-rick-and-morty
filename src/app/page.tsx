import { SwitchMode } from "@/shared/components/SwitchMode";
import { ContainerMain } from "@/shared/components/Main";
import { HomeTemplate } from "./templates";

export default function Home() {
  return (
    <>
      <SwitchMode />
      <HomeTemplate />
    </>
  );
}
