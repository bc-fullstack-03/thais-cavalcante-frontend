import Nav from "../../components/Nav";
import { ReactNode } from "react";

interface MainScreenProps {
  children: ReactNode;
}

function MainScreen({ children }: MainScreenProps) {
  return (
    <div className="w-screen h-screen flex">
      <Nav />
      {children}
    </div>
  );
}

export default MainScreen;
