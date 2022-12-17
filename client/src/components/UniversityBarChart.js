import { Bar } from "@ant-design/plots";
import { useState } from "react";
import { Space } from "../AppStyles";

export const UniversityBarChart = ({ data }) => {
  const segmentUni = [];
  const [chosenSegmentDecs, setChosenSegmentDecs] = useState([]);

  const filterData = data.filter(
    (item) => item["Segment Type"] === "University"
  );
  filterData.forEach((item) => {
    if (!segmentUni.includes(item["Segment Description"])) {
      segmentUni.push(item["Segment Description"]);
    }
  });
  const universityData = filterData.filter(
    (item) => item["Segment Description"] === chosenSegmentDecs
  );

  const defaultData = [
    { year: "Instagram", value: 0 },
    { year: "Facebook", value: 0 },
    { year: "Snapchat", value: 0 },
    { year: "Linkedin", value: 1 },
  ];

  const resultData = universityData.map((item) => {
    return {
      year: item.Answer,
      value: item.Count,
    };
  });

  const config = {
    data: resultData.length === 0 ? defaultData : resultData,
    xField: "value",
    yField: "year",
    seriesField: "year",
    legend: {
      position: "top-left",
    },
  };
  return (
    <>
      <Space>
        <select onChange={(e) => setChosenSegmentDecs(e.target.value)}>
          {segmentUni.map((segment) => {
            return (
              <option key={segment} value={segment}>
                {segment}
              </option>
            );
          })}
        </select>
      </Space>
      <Bar {...config} />
    </>
  );
};
