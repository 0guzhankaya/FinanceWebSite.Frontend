import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router';
import { CompanyCashFlow } from '../../company';
import { getCashFlow } from '../../api';
import Table from '../Table/Table';

const config = [
    {
        label: 'Date',
        render: (company: CompanyCashFlow) => company.date,
    },
    {
        label: 'Operating Cashflow',
        render: (company: CompanyCashFlow) => company.operatingCashFlow,
    },
    {
        label: 'Property/Machinery Cashflow',
        render: (company: CompanyCashFlow) => company.investmentsInPropertyPlantAndEquipment,
    },
    {
        label: "Other Investing Cashflow",
        render: (company: CompanyCashFlow) => company.otherInvestingActivites,
      },
      {
        label: "Debt Cashflow",
        render: (company: CompanyCashFlow) =>
          company.netCashUsedProvidedByFinancingActivities,
      },
      {
        label: "CapEX",
        render: (company: CompanyCashFlow) => company.capitalExpenditure,
      },
      {
        label: "Free Cash Flow",
        render: (company: CompanyCashFlow) => company.freeCashFlow,
      },
];

const CashflowStatement = () => {
    const ticker = useOutletContext<string>();
    const [cashflowData, setCashflowData] = useState<CompanyCashFlow[]>();

    useEffect(() => {
        const getRatios = async () => {
            const result = await getCashFlow(ticker);
            setCashflowData(result!.data);
        };
        getRatios();
    }, []);

    return cashflowData ? (
        <Table config={config} data={cashflowData}></Table>
    ) : (<h1>No results:(</h1>)
}

export default CashflowStatement;