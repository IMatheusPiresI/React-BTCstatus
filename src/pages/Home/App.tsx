import { useEffect, useState } from "react";
import TasksChart from "../../components/BTCGraphic";
import { ListPrice } from "../../components/ListPrices";
import { useFormatFilter } from "../../hooks/Graphic/useFormatFilter";
import { useFormatObject } from "../../hooks/Graphic/useFormatObject";
import { api } from "../../services/api";
import { GlobalStyle } from "../../styles/global";
import * as S from "./styles";

type BTCData = {
  date: string;
  value: string;
};

function App() {
  const [qtdDays, setQtdDays] = useState<number>(7);
  const [btcData, setBtcData] = useState<BTCData[]>([]);
  const [series, setSeries] = useState<number[]>([]);
  const [xaxis, setXaxis] = useState<string[]>([]);

  async function getBTCData() {
    const endPoint = useFormatFilter(qtdDays);

    const response = await api.get(endPoint);
    const data = response.data;

    const values: number[] = Object.values<number>(data.bpi).map(
      (value) => value
    );
    const dates = Object.keys(data.bpi).map((date) => date);

    setXaxis(dates);
    setSeries(values);
    setBtcData(useFormatObject(values, dates));
  }

  useEffect(() => {
    getBTCData();
  }, [qtdDays]);
  return (
    <>
      <S.Container>
        <S.Title>Bitcoin</S.Title>
        <S.CurrentPrice>Current Price {btcData[0]?.value}</S.CurrentPrice>
        <TasksChart series={series} xaxis={xaxis} />
        <S.BoxFilters>
          <S.Filters>
            <S.Button onClick={() => setQtdDays(7)}>7D</S.Button>
            <S.Button onClick={() => setQtdDays(15)}>15D</S.Button>
            <S.Button onClick={() => setQtdDays(30)}>30D</S.Button>
            <S.Button onClick={() => setQtdDays(90)}>90D</S.Button>
            <S.Button onClick={() => setQtdDays(120)}>120D</S.Button>
          </S.Filters>
          <ListPrice btcInfo={btcData} />
        </S.BoxFilters>

        <GlobalStyle />
      </S.Container>
    </>
  );
}
export default App;
