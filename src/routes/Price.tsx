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
