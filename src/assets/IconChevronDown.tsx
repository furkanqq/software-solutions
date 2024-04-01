import { IconType } from './type';

export const IconChevronDown: React.FC<IconType> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 20"
      height="20"
      fill="none"
      width="21"
      {...props}>
      <path
        d="M6.90002 8.20001L10.5 11.8L14.1 8.20001"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1.5"
        stroke="black"
      />
    </svg>
  );
};
