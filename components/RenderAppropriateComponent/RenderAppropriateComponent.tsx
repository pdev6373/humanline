"use client";
import useWindowDimensions from "@/hooks/useWindowsDimensions";
import { RenderAppropriateComponentType } from "@/types";

export default function RenderAppropriateComponent({
  components: { webComponent, mobileComponent },
}: RenderAppropriateComponentType) {
  const { width } = useWindowDimensions();

  return width && width > 600 ? webComponent : mobileComponent;
}
