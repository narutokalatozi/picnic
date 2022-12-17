import React, { useState } from "react";
import { Pie } from "@ant-design/plots";

export const CustomDonutChart = ({ data }) => {
  const segmentDesc = [];
  const [chosenCustom, setCustom] = useState([]);

  const filterData = data.filter((item) => item["Segment Type"] === "Custom");
  filterData.forEach((item) => {
    if (!segmentDesc.includes(item["Segment Description"])) {
      segmentDesc.push(item["Segment Description"]);
    }
  });

  const customData = filterData.filter(
    (item) => item["Segment Description"] === chosenCustom
  );

  const defaultData = [
    { type: "Instagram", value: 69 },
    { type: "Facebook", value: 59 },
    { type: "Snapchat", value: 177 },
    { type: "Linkedin", value: 13 },
  ];

  const defaultText = "your parents make? $90K-$240k";

  const resultData = customData.map((item) => {
    return {
      type: item.Answer,
      value: item.Count,
    };
  });

  const config = {
    appendPadding: 10,
    data: resultData.length === 0 ? defaultData : resultData,
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
        // content: "$90K-$240k",
        content: resultData.length === 0 ? defaultText : chosenCustom,
      },
    },
  };
  return (
    <div>
      <select onChange={(e) => setCustom(e.target.value)}>
        {segmentDesc.map((segment) => {
          return <option value={segment}>{segment}</option>;
        })}
      </select>
      <Pie {...config} />
    </div>
  );
};
