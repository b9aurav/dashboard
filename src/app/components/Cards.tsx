import React from "react";
import Chip from "@mui/joy/Chip";

type Props = {
  title: string;
  value: string;
  percentage: number;
  description?: string;
};

const Cards = (props: Props) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-gray-500">{props.title}</h2>
          <h2 className="text-2xl font-bold">{props.value}</h2>
          <div className="flex mt-8 gap-2">
          {props.percentage < 0 && (
            <Chip color="danger">{props.percentage}%</Chip>
          )}
          {props.percentage === 0 && (
            <Chip color="neutral">{props.percentage}%</Chip>
          )}
          {props.percentage > 0 && (
            <Chip color="success">{props.percentage}%</Chip>
          )}
          <p className="text-gray-500">{props.description}</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
