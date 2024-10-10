import { CompanyIncomeStatement } from "../../company";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { getIncomeStatement } from "../../api";
import Table from "../Table/Table";

type Props = {};

const configs = [
  {
    label: "Date",
    render: (company: CompanyIncomeStatement) => company.date,
  },
  {
    label: "Total Revenue",
    render: (company: CompanyIncomeStatement) => company.revenue,
  },
  {
    label: "Net Income",
    render: (company: CompanyIncomeStatement) => company.netIncome,
  },
  {
    label: "Operating Expenses",
    render: (company: CompanyIncomeStatement) => company.operatingExpenses,
  },
  {
    label: "Cost of Revenue",
    render: (company: CompanyIncomeStatement) => company.netIncome,
  },
];

function IncomeStatement({}: Props) {
  const ticker = useOutletContext<string>();
  const [incomeStatement, setIncomeStatement] =
    useState<CompanyIncomeStatement[]>();

  useEffect(() => {
    const getRatios = async () => {
      const result = await getIncomeStatement(ticker!);
      setIncomeStatement(result!.data);
    };
    getRatios();
  }, []);

  return (
    <>
      {incomeStatement ? (
        <Table config={configs} data={incomeStatement} />
      ) : (
        <h1>Could not find income statement :(</h1>
      )}
    </>
  );
}

export default IncomeStatement;
