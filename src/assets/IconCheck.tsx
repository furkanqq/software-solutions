import type { IconType } from '@/src/assets/type';

export const IconCheck: React.FC<IconType> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      strokeLinejoin="round"
      stroke="currentColor"
      strokeLinecap="round"
      viewBox="0 0 24 24"
      strokeWidth={1}
      height={24}
      fill="none"
      width={24}
      {...props}>
      <path d="M0 0h24v24H0z" stroke="none" fill="none"></path>
      <path d="M5 12l5 5l10 -10"></path>
    </svg>
  );
};
