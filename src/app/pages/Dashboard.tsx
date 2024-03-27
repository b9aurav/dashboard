"use client";
import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import { CardData } from "../constant/CardData";
import Chart from "../components/Chart";
import AppsTable from "../components/AppsTable";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <Banner />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 m-4">
        {CardData.map((card, index) => (
          <Cards key={index} {...card} />
        ))}
      </div>
      <div className="bg-white pb-4 rounded-xl shadow-md m-4">
        <div className="border-b p-4">
          <text className="font-bold m-2">Performance</text>
        </div>
        <Chart />
      </div>
      <div className="bg-white pb-4 rounded-xl shadow-md m-4">
        <div className="border-b p-4">
          <text className="font-bold m-2">Installed Apps</text>
        </div>
        <AppsTable />
      </div>
    </div>
  );
};

export default Dashboard;
