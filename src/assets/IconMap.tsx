import { IconType } from './type';

export const IconMap: React.FC<IconType> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 20"
      height="20"
      fill="none"
      width="21"
      {...props}>
      <path
        d="M17.25 8.5C17.25 13.75 10.5 18.25 10.5 18.25C10.5 18.25 3.75 13.75 3.75 8.5C3.75 6.70979 4.46116 4.9929 5.72703 3.72703C6.9929 2.46116 8.70979 1.75 10.5 1.75C12.2902 1.75 14.0071 2.46116 15.273 3.72703C16.5388 4.9929 17.25 6.70979 17.25 8.5Z"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="black"
      />
      <path
        d="M10.5 10.75C11.7426 10.75 12.75 9.74264 12.75 8.5C12.75 7.25736 11.7426 6.25 10.5 6.25C9.25736 6.25 8.25 7.25736 8.25 8.5C8.25 9.74264 9.25736 10.75 10.5 10.75Z"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="black"
      />
    </svg>
  );
};
