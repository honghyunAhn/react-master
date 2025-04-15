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

  return <div></div>;
}

export default Price;
