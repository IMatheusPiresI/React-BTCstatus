import { Container } from "./styles";

type BTCData = {
  date: string;
  value: string;
};

type ListPriceProps = {
  btcInfo: BTCData[];
};

export function ListPrice({ btcInfo }: ListPriceProps) {
  return (
    <Container>
      {btcInfo.map((btc) => (
        <li key={btc.date}>
          <span>{btc.date}</span> <span>{btc.value}</span>
        </li>
      ))}
    </Container>
  );
}
