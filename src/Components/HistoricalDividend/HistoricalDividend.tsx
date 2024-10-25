import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import { getHistoricalDividend } from "../../api";
import SimpleLineChart from "../SimpleLineChart/SimpleLineChart";
import { Dividend } from "../../company";

const HistoricalDividend = () => {
  const ticker = useOutletContext<string>();
  const [dividend, setDividend] = useState<Dividend[]>();

  useEffect(() => {
    const fetchHistoricalDividend = async () => {
      const value = await getHistoricalDividend(ticker);
      setDividend(
        value?.data.historical.slice(0, 18).sort(function (a, b) {
          var c = new Date(a.date);
          var d = new Date(b.date);
          return c.getTime() - d.getTime();
        })
      );
    };
    fetchHistoricalDividend();
  }, []);

  return (
    <>
      {dividend && dividend.length > 0 && dividend !== undefined ? (
        <SimpleLineChart data={dividend} xAxis="label" dataKey="dividend" />
      ) : (
        <h1 className="ml-3">Company does not have a dividend!</h1>
      )}
    </>
  );
};

export default HistoricalDividend;