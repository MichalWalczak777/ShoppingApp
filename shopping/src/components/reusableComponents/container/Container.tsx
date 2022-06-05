import { ReactNode } from "react";

const Container = (props: { children: ReactNode }) => {
  return <div className="container">{props.children}</div>;
};

export default Container;
