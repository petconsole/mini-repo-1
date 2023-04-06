import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOurVanConsoleIcon = ({
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
    <path d="M7.45 5.544c-.252.114-.48.372-.63.714-.144.324-.324 1.494-.42 2.712-.114 1.482-.114 1.482-.258 1.458-.126-.018-.132-.042-.114-.576.018-.372 0-.588-.048-.642-.09-.108-.474-.12-.678-.024-.24.108-.288.282-.3 1.05l-.012.714.63.03c.63.03.63.03.618.18-.048.606-.09 4.182-.048 4.47.036.312.072.39.276.576.204.192.234.246.234.486 0 .408.102.468.798.468.69 0 .762-.048.762-.486v-.294h5.34v.288c0 .438.09.492.786.492.702 0 .78-.042.822-.474.024-.27.06-.348.246-.516l.216-.204v-2.49l-.006-2.496H16.9v-.66c0-.714-.078-1.02-.288-1.134-.162-.084-.654-.084-.708 0-.018.036-.036.336-.03.666.012.594.012.594-.126.576-.156-.018-.12.18-.318-1.998-.162-1.806-.342-2.43-.792-2.778l-.216-.162-3.396-.012c-2.754-.012-3.432 0-3.576.066zm7.194 1.788c.084.606.156 1.464.192 2.37l.042.978h-3.936C7.828 10.68 7 10.662 7 10.602c.006-.708.198-3.03.27-3.39l.03-.132h7.308l.036.252zm-7.17 5.778c.378.186.582.438.702.846.108.372.078.606-.084.636-.126.03-.936-.168-1.158-.288-.21-.108-.318-.432-.27-.792.078-.564.288-.672.81-.402zm7.542-.102c.132.084.204.312.204.642 0 .396-.06.54-.294.654-.3.156-1.044.33-1.158.27-.258-.138-.012-1.044.354-1.302.348-.246.744-.366.894-.264zm-2.124.774c.114.132.228.516.228.786 0 .552-.204.612-2.148.612-.846 0-1.632-.024-1.746-.06-.276-.078-.486-.288-.486-.474 0-.27.174-.81.282-.888.078-.06.558-.078 1.938-.078 1.68 0 1.848.012 1.932.102zm-7.578 6.432c-.114.09-.126.126-.066.204.12.144.324.204 1.746.522 1.386.312 1.572.342 1.47.246-.072-.072-1.848-.87-2.202-.99-.39-.132-.774-.126-.948.018zm.414.948c-.678.114.78.438 1.512.33l.33-.042-.51-.144c-.516-.144-1.032-.198-1.332-.144z" />
  </svg>
);
export default SvgOurVanConsoleIcon;