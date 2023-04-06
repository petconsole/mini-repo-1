import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOurPetBowlIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 512 512"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m456.16 285.603-29.068-123.34c0-23.338-75.592-42.224-168.893-42.224-93.244 0-168.89 18.885-168.89 42.224l-29.065 123.34C31.788 291.385 15 299.163 15 309.297c0 25.847 108.909 57.063 243.2 57.063 134.343 0 243.2-31.216 243.2-57.063 0-10.134-16.785-17.912-45.24-23.694zm-276.973-58.031-64.133 77.989-16.528-6.397 21.698-85.723 41.11 9.804 17.853 4.327zm-54.05-54.207c30.912-9.874 79.021-16.22 133.063-16.22 54.045 0 102.154 6.346 133.066 16.22 4.758 1.538 4.758 8.294 0 9.827-30.912 9.826-79.02 16.172-133.066 16.172-54.042 0-102.15-6.346-133.063-16.172-4.709-1.532-4.709-8.29 0-9.827z" />
  </svg>
);
export default SvgOurPetBowlIcon;