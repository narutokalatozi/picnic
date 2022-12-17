import { Bar } from "@ant-design/plots";

export const DemoBar = ({ sum }) => {
  const data = [
    {
      year: "Mobile",
      value: sum.mobileParticipants,
    },
    {
      year: "Web",
      value: sum.webParticipants,
    },
    {
      year: "Gender",
      value: sum.genderParticipants,
    },
    {
      year: "University",
      value: sum.uniParticipants,
    },
    {
      year: "Custom",
      value: sum.customParticipants,
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
