import { ReactNode } from "react";

type propsEM = {
  children: ReactNode;
};

function ErrorMessage({ children }: propsEM) {
  return (
    <p className="bg-red-600 p-2 text-white font-bold text-sm text-center">
      {children}
    </p>
  );
}

export default ErrorMessage;
