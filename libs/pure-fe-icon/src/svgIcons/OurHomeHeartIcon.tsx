import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOurHomeHeartIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m2 12 10-9 10 9h-3v8H5v-8H2m10 6 .72-.66C15.3 15 17 13.46 17 11.57c0-1.54-1.21-2.75-2.75-2.75-.87 0-1.7.41-2.25 1.05a3.007 3.007 0 0 0-2.25-1.05C8.21 8.82 7 10.03 7 11.57c0 1.89 1.7 3.43 4.28 5.77L12 18Z" />
  </svg>
);
export default SvgOurHomeHeartIcon;
