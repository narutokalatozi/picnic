import React from "react";
import { Pie } from "@ant-design/plots";

export const PieChart = () => {
  const data = [
    {
      type: "Instagram",
      value: 2559,
    },
    {
      type: "Facebook",
      value: 1182,
    },
    {
      type: "Snapchat",
      value: 5423,
    },
    {
      type: "Linkedin",
      value: 210,
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
        content: "Mobile respondents",
      },
    },
  };
  return <Pie {...config} />;
};
