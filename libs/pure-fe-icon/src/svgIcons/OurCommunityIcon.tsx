import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOurCommunityIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    width={24}
    fill="currentColor"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M17 16h-2v6h-3v-5H8v5H5v-6H3l7-6 7 6M6 2l4 4H9v3H7V6H5v3H3V6H2l4-4m12 1 5 5h-1v4h-3V9h-2v3h-1.66L14 10.87V8h-1l5-5Z" />
  </svg>
);
export default SvgOurCommunityIcon;
