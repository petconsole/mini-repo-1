import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOurFeaturesIcon = ({
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
    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7 8h2v4H8V9H7V8m3 9v1H7v-.92L9 15H7v-1h2.25c.41 0 .75.34.75.75 0 .2-.08.39-.21.52L8.12 17H10m1-13c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1m6 13h-5v-2h5v2m0-6h-5V9h5v2Z" />
  </svg>
);
export default SvgOurFeaturesIcon;
