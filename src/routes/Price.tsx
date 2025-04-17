import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

interface PriceProps {
  coinId: string;
  ath_price: number | undefined;
  ath_date: string | undefined;
  percent_change_30m: number | undefined;
  percent_change_1h: number | undefined;
  percent_change_24h: number | undefined;
  percent_change_7d: number | undefined;
  percent_change_30d: number | undefined;
  percent_change_1y: number | undefined;
  percent_from_price_ath: number | undefined;
}

const MaxContainer = styled.div`
  display: grid;
  justify-items: center;
`;

const MaxBox = styled.div`
  background-color: ${(props) => props.theme.divColor};
  padding: 10px;
  border-radius: 15px;
  width: 100%;
  margin-bottom: 20px;
`;

const MaxStyle = styled.span`
  font-size: 14px;
  display: grid;
  justify-content: center;
  text-align: left;
  color: ${(props) => props.theme.grayText};
  font-weight: 600;
`;

const BoxContainter = styled.div`
  display: grid;
  justify-items: center;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  margin-block-end: 10%;
`;

const Box = styled.div`
  background-color: ${(props) => props.theme.divColor};
  padding: 20px;
  border-radius: 15px;
  width: 100%;
`;

function Price() {
  const {
    ath_price,
    ath_date,
    percent_change_30m,
    percent_change_1h,
    percent_change_24h,
    percent_change_7d,
    percent_change_30d,
    percent_change_1y,
    percent_from_price_ath,
  } = useOutletContext<PriceProps>();
  const percentList = [
    { text: "30分", value: percent_change_30m },
    { text: "1時間", value: percent_change_1h },
    { text: "24時間", value: percent_change_24h },
    { text: "7日", value: percent_change_7d },
    { text: "30日", value: percent_change_30d },
    { text: "1年", value: percent_change_1y },
  ];

  return (
    <div>
      <MaxContainer>
        <MaxBox>
          <MaxStyle>
            最高値: {ath_price?.toFixed(3)} ({ath_date?.slice(0, 10)})
          </MaxStyle>
          <MaxStyle>最高値と現在の相場の差</MaxStyle>
        </MaxBox>
      </MaxContainer>
      <BoxContainter>
        {percentList.map((item) => (
          <Box key={item.text}></Box>
        ))}
      </BoxContainter>
    </div>
  );
}

export default Price;
