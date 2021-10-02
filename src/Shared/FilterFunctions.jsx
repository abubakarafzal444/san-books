import data from "../Assets/data.json";
const NewArrivalData = data.filter((dataItem) => dataItem.PublishedYear > 2000);
const ExclusiveSaleData = data.filter(
  (dataItem) =>
    ((dataItem.MarketPrice - dataItem.ourPrice) / dataItem.MarketPrice) * 100 >
    50
);
export { NewArrivalData, ExclusiveSaleData };
