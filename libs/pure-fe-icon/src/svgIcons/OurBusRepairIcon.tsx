import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOurBusRepairIcon = ({
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
    <path d="M18 9.5H6v-4h12m-1.5 10c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5m-9 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5S9 13.2 9 14s-.7 1.5-1.5 1.5m-3.5-1c0 .9.4 1.7 1 2.2v1.8h3v-1h8v1h3v-1.8c.6-.5 1-1.3 1-2.2v-9c0-3.5-3.6-4-8-4s-8 .5-8 4v9m0 4.01h16v1.99h-7v3h-2v-3H4v-1.99z" />
  </svg>
);
export default SvgOurBusRepairIcon;
