import { fontPoppins } from "@/src/helpers/fontHelper";

interface IProps {
  children: React.ReactNode;
}

export default function Layouts({ children }: IProps) {
  return (
    <div className={fontPoppins.className} x-layout={"balance-software"}>
      {children}
    </div>
  );
}
