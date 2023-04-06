import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOurBusesIcon = ({
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
    <path d="M10 5c-4.42 0-8 .5-8 4v10c0 .85.37 1.66 1 2.22V23c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.63-.56 1-1.37 1-2.22V9c0-3.5-3.58-4-8-4M5.5 20c-.83 0-1.5-.67-1.5-1.5S4.67 17 5.5 17s1.5.67 1.5 1.5S6.33 20 5.5 20m9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m1.5-6H4V9h12v5m6-9v10c0 .85-.37 1.66-1 2.22V19c0 .55-.45 1-1 1h-.12c.07-.32.12-.65.12-1V9c0-6-7-6-10-6-.91 0-2.2 0-3.54.17C7.55 1.32 10.5 1 14 1c4.42 0 8 .5 8 4Z" />
  </svg>
);
export default SvgOurBusesIcon;
