import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOurChevronDoubleDownIcon = ({
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
    <path d="M16.59 5.59 18 7l-6 6-6-6 1.41-1.41L12 10.17l4.59-4.58m0 6L18 13l-6 6-6-6 1.41-1.41L12 16.17l4.59-4.58Z" />
  </svg>
);
export default SvgOurChevronDoubleDownIcon;
