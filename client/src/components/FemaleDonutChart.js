import React from "react";
import { Pie } from "@ant-design/plots";

export const FemaleDonutChart = () => {
  const data = [
    {
      type: "Instagram",
      value: 1576,
    },
    {
      type: "Facebook",
      value: 644,
    },
    {
      type: "Snapchat",
      value: 2967,
    },
    {
      type: "Linkedin",
      value: 73,
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
        content: "Female respondents",
      },
    },
  };
  return <Pie {...config} />;
};
