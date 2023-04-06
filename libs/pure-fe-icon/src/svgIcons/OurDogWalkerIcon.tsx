import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOurDogWalkerIcon = ({
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
    <path d="M10.973 4.214a1.888 1.888 0 1 1-3.776.001 1.888 1.888 0 0 1 3.776 0Zm4.678 11.367-.71-.57a.372.372 0 0 0-.524.057.372.372 0 0 0 .058.524l.724.583v1.582c0 .007-.635 1.25-.635 1.25a.373.373 0 0 0 .158.503c.055.03.114.043.172.043a.371.371 0 0 0 .33-.201l.642-1.233.719 1.247a.371.371 0 0 0 .51.137.373.373 0 0 0 .137-.51l-.628-1.087h2.32v1.274a.373.373 0 0 0 .374.373.373.373 0 0 0 .373-.373v-1.41l.003-.013v-1.179l-1.736-.996H15.65Zm4.989-.758c-.231-.216-.309-.47-.568-.655a1.58 1.58 0 0 0-.138-.092c-.029-.016-.038-.035-.035-.067.01-.107.021-.213.03-.32.015-.191-.04-.367-.194-.48-.062-.045-.367-.193-.5.312-.028.11-.068.22-.12.32-.192.369-.435.705-.668 1.048l-.32.47 1.632.928s.314-.344.358-.325l.184.081c.18.078.367.114.563.103.334-.02.68-.197.713-.597.029-.366-.86-.652-.938-.726Zm0 0" />
    <path d="m14.563 11.94 3.078 3.334.29-.268-3.08-3.335c-.941-1-1.769-1.807-2.363-1.555a.498.498 0 0 0-.075.038c-1.406-.193-1.704-.846-2.154-1.836-.244-.537-.52-1.146-1.016-1.682-.004-.005-.009-.008-.013-.011a1.984 1.984 0 0 0-.6-.45s-.181-.1-.389-.14c-.198-.038-.543-.027-.76 0-2.303.336-3.324 2.036-4.31 3.687l-.1.168a.734.734 0 0 0 .253 1.006c.117.07.247.104.376.104a.732.732 0 0 0 .628-.357l.102-.17c.508-.852.96-1.604 1.537-2.148l-.619 2.887c-.086.404.026.777.252 1.08l-.19 2.89-1.205 3.115a.932.932 0 0 0 .533 1.206.925.925 0 0 0 .337.063.933.933 0 0 0 .87-.596L7.2 15.722a.964.964 0 0 0 .06-.276l.11-1.682 1.109 1.75.907 3.34a.934.934 0 0 0 .9.693.933.933 0 0 0 .902-1.173l-.943-3.478a.937.937 0 0 0-.113-.258l-1.51-2.385c.049-.096.088-.2.113-.315L9.24 9.58c.448.848 1.14 1.694 2.728 1.985 0 .12.003.247.01.383l.394-.019a6.268 6.268 0 0 1-.008-.32.73.73 0 0 0 .587-1.088c.482.219 1.216 1 1.61 1.42Zm0 0" />
  </svg>
);
export default SvgOurDogWalkerIcon;