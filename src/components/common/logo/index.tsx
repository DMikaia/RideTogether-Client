import Image from "next/image";

export default function Logo({ width = 156, height = 116 }) {
  return (
    <Image
      priority={true}
      alt="Logo of the site"
      width={width}
      height={height}
      src={"./logo.svg"}
    />
  );
}
