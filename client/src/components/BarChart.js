import { Bar } from "@ant-design/plots";

export const DemoBar = () => {
  const data = [
    {
      year: "Mobile",
      value: 9373,
    },
    {
      year: "Web",
      value: 117,
    },
    {
      year: "Gender",
      value: 9458,
    },
    {
      year: "University",
      value: 1948,
    },
    {
      year: "Custom",
      value: 17111,
    },
  ];
  const config = {
    data,
    xField: "value",
    yField: "year",
    seriesField: "year",
    legend: {
      position: "top-left",
    },
  };
  return <Bar {...config} />;
};
