import { IconType } from './type';

export const IconMail: React.FC<IconType> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 20"
      height="20"
      fill="none"
      width="21"
      {...props}>
      <path
        d="M4.5 4H16.5C17.325 4 18 4.675 18 5.5V14.5C18 15.325 17.325 16 16.5 16H4.5C3.675 16 3 15.325 3 14.5V5.5C3 4.675 3.675 4 4.5 4Z"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="black"
      />
      <path
        d="M18 5.5L10.5 10.75L3 5.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="black"
      />
    </svg>
  );
};
