import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOurBinocularsIcon = ({
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
    <path d="M11 6h2v7h-2V6M9 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5l2-9h4v7a1 1 0 0 1-1 1v6m1-15H7V3h3v2m5 15v-6a1 1 0 0 1-1-1V6h4l2 9v5a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1M14 5V3h3v2h-3Z" />
  </svg>
);
export default SvgOurBinocularsIcon;
