import React from "react";
import { Pie } from "@ant-design/plots";

export const ParentsDonutChart = () => {
  const data = [
    {
      type: "Instagram",
      value: 69,
    },
    {
      type: "Facebook",
      value: 59,
    },
    {
      type: "Snapchat",
      value: 177,
    },
    {
      type: "Linkedin",
      value: 13,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: "1.5rem",
        },
        content: "$90K-$240k",
      },
    },
  };
  return <Pie {...config} />;
};
