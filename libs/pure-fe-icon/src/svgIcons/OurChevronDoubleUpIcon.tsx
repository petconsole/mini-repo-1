import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOurChevronDoubleUpIcon = ({
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
    <path d="M7.41 18.41 6 17l6-6 6 6-1.41 1.41L12 13.83l-4.59 4.58m0-6L6 11l6-6 6 6-1.41 1.41L12 7.83l-4.59 4.58Z" />
  </svg>
);
export default SvgOurChevronDoubleUpIcon;
