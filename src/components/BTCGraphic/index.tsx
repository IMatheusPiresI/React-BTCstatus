import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import * as S from "./styles";
import { useEffect, useState } from "react";
import { useFormatXaxis } from "../../hooks/Graphic/useFormatXaxis";
import { useOverwriteCategories } from "../../hooks/Graphic/useOverwriteCategories";

interface TasksChartProps {
  series: number[];
  xaxis: string[];
}

const TasksChart = ({ series, xaxis }: TasksChartProps) => {
  const [xaxisFormat, setXaxisFormat] = useState<string[] | undefined>([]);

  function xaxisDateFormt() {
    setXaxisFormat(useFormatXaxis(xaxis));
  }

  useEffect(() => {
    xaxisDateFormt();
  }, [xaxis]);

  const options: ApexOptions = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: "#CD3333",
      dropShadow: {
        enabled: true,
        top: 0,
        left: 0,
        blur: 3,
        color: "#CD3333",
        opacity: 0.35,
      },
    },
    stroke: {
      curve: "straight",
    },
    colors: ["#E91E20"],
    series: [
      {
        name: "Preços",
        data: series!,
      },
    ],
    tooltip: {
      theme: undefined,
    },
    xaxis: {
      categories: xaxisFormat,

      tooltip: {
        enabled: true,
      },
      overwriteCategories: useOverwriteCategories(xaxisFormat!),
    },
  };

  return (
    <>
      <S.Container>
        <Chart
          options={options}
          series={options.series}
          type="line"
          height={300}
        />
      </S.Container>
    </>
  );
};

export default TasksChart;
