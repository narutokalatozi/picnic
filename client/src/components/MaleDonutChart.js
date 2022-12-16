import React from "react";
import { Pie } from "@ant-design/plots";

export const MaleDonutChart = () => {
  const data = [
    {
      type: "Instagram",
      value: 1008,
    },
    {
      type: "Facebook",
      value: 565,
    },
    {
      type: "Snapchat",
      value: 2483,
    },
    {
      type: "Linkedin",
      value: 142,
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
        content: "Male respondents",
      },
    },
  };
  return <Pie {...config} />;
};
