import React from "react";
import { Pie } from "@ant-design/plots";

export const DonutChart = () => {
  const data = [
    {
      type: "Instagram",
      value: 30,
    },
    {
      type: "Facebook",
      value: 32,
    },
    {
      type: "Snapchat",
      value: 47,
    },
    {
      type: "Linkedin",
      value: 8,
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
        },
        content: "Web-based respondents",
      },
    },
  };
  return <Pie {...config} />;
};
