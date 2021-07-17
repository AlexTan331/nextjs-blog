import utilStyles from "../../styles/utils.module.css";

export async function getStaticProps() {
  const res = await fetch(
    `https://api.polygon.io/v3/reference/tickers?active=true&sort=ticker&order=asc&limit=20&apiKey=${process.env.POLYGON_SECRET_KEY}`
  );
  const data = await res.json();
  console.log("data", data);
  let stocksInfo = await data.results.map((stock) => stock.name);
  console.log("stock info", stocksInfo);
  return {
    props: { stocksInfo },
  };
}

export default function AllStocks({ stocksInfo }) {
  return (
    <>
      <h1>hello</h1>
      <ul>
        {stocksInfo.map((name, index) => (
          <li className={utilStyles.list} key={index}>
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}
