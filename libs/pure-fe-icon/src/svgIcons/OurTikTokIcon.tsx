import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOurTikTokIcon = ({
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
    <path d="M21.145 0H2.855A2.86 2.86 0 0 0 0 2.855v18.29A2.86 2.86 0 0 0 2.855 24h18.29A2.86 2.86 0 0 0 24 21.145V2.855A2.86 2.86 0 0 0 21.145 0m-2.286 10.469c-.129.015-.261.02-.394.023-1.442 0-2.79-.73-3.582-1.937v6.593a4.87 4.87 0 0 1-4.871 4.872 4.873 4.873 0 0 1 0-9.746c.101 0 .199.011.3.015v2.402c-.101-.011-.199-.03-.3-.03a2.487 2.487 0 1 0 0 4.972c1.375 0 2.586-1.082 2.586-2.453l.023-11.2h2.297a4.278 4.278 0 0 0 3.945 3.82v2.669" />
  </svg>
);
export default SvgOurTikTokIcon;
