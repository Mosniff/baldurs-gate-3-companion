import React from "react";
import { Card } from "./Card";

type Props = {};

const DashboardGrid = ({}: Props) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export { DashboardGrid };
