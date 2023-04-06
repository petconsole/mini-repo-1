import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOurDogIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m19 3-4 4 3 3 1-1 1 1 2-2-3-3V3M3 7 2 8l3 3v3l-1 1v6h2v-3l2-3h7v6h2V11l-3-3-1 1H5L3 7Z" />
  </svg>
);
export default SvgOurDogIcon;
