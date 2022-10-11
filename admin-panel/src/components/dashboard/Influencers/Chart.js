import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const data = [
  { name: "Neurodegenerative", value: 50 },
  { name: "Breat cancer", value: 40 },
  { name: "Lymphoma", value: 30 },
  { name: "Lung cancer", value: 68 },
  { name: "Cardiometabolic", value: 34 },
];

const Chart = () => {
  return (
    <div className="w-full md:w-5/12 bg-gray-100">
      <p className="text-center py-5 text-xl">Disease Area</p>
      <div className="flex justify-center items-center">
        <PieChart width={250} height={250}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Chart;
