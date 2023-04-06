import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOurBusConsole2Icon = ({
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
    <path d="M9.91 1.836a10.567 10.567 0 0 0-5.484 2.808C2.944 6.09 2.044 7.758 1.678 9.75c-.132.744-.132 2.22 0 2.97.258 1.416.762 2.628 1.422 3.408.204.24.384.426.402.408.018-.018-.048-.18-.15-.36a10.518 10.518 0 0 1-.876-2.184c-.414-1.626-.3-3.282.33-4.902 1.38-3.558 4.884-5.814 8.784-5.652 1.026.048 1.68.156 2.532.438 1.86.612 3.384 1.692 4.548 3.234.582.768 1.182 2.214 1.35 3.228.09.564.072 1.992-.03 2.598a8.364 8.364 0 0 1-1.236 3.054c-.498.72-1.404 1.854-1.626 2.022-.498.378-1.026.51-2.298.564-1.104.054-1.92-.042-2.7-.312-.654-.222-.912-.252-.966-.114-.084.216.492.804 1.152 1.176.408.234.528.372.48.552-.066.27-1.134.666-1.986.738-.558.048-1.266-.126-1.884-.468-1.95-1.068-2.22-1.188-2.79-1.23-.378-.03-.438-.018-.54.096-.102.114-.102.132-.018.27.06.09.222.186.414.246.516.168 1.332.6 2.202 1.164 1.452.936 1.92 1.14 2.916 1.266 3.15.39 6.36-.786 8.412-3.078.786-.876 1.512-2.088 1.998-3.312.72-1.812.96-3.216.834-4.908-.15-1.986-1.038-3.996-2.442-5.532-1.422-1.56-3.33-2.652-5.58-3.192-.594-.144-.762-.156-2.292-.174-1.26-.012-1.764 0-2.13.072z" />
    <path d="M15.2 11.15H7.4V7.9h7.8m-.975 7.15a.975.975 0 0 1-.975-.975.975.975 0 0 1 .975-.975.975.975 0 0 1 .975.975.975.975 0 0 1-.975.975m-5.85 0a.975.975 0 0 1-.975-.975.975.975 0 0 1 .975-.975.975.975 0 0 1 .975.975.975.975 0 0 1-.975.975M6.1 14.4c0 .572.254 1.086.65 1.443V17a.65.65 0 0 0 .65.65h.65A.65.65 0 0 0 8.7 17v-.65h5.2V17a.65.65 0 0 0 .65.65h.65a.65.65 0 0 0 .65-.65v-1.157a1.94 1.94 0 0 0 .65-1.443V7.9c0-2.275-2.327-2.6-5.2-2.6s-5.2.325-5.2 2.6v6.5Z" />
  </svg>
);
export default SvgOurBusConsole2Icon;