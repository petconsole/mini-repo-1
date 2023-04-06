import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOurVanRepairIcon = ({
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
    <path d="M3.55 5.9c-1.054 0-1.9.845-1.9 1.9v7.6h1.9a2.85 2.85 0 0 0 2.85 2.85 2.85 2.85 0 0 0 2.85-2.85h5.7a2.85 2.85 0 0 0 2.85 2.85 2.85 2.85 0 0 0 2.85-2.85h1.9v-3.8c0-1.054-.846-1.9-1.9-1.9L17.8 5.9H3.55m11.4 1.425h2.375L19.187 9.7H14.95V7.325m-8.55 6.65A1.425 1.425 0 0 1 7.825 15.4 1.425 1.425 0 0 1 6.4 16.825 1.425 1.425 0 0 1 4.975 15.4 1.425 1.425 0 0 1 6.4 13.975m11.4 0a1.425 1.425 0 0 1 1.425 1.425 1.425 1.425 0 0 1-1.425 1.425 1.425 1.425 0 0 1-1.425-1.425 1.425 1.425 0 0 1 1.425-1.425Z" />
    <path d="M.7 17.965h19v1.89h-6.65v2.85h-1.9v-2.85H4.5v-1.89z" />
  </svg>
);
export default SvgOurVanRepairIcon;