import {
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
type Props = {
  data: any;
  xAxis: any;
  dataKey: string;
};
const SimpleLineChart = ({ data, dataKey }: Props) => (
    <>
        <ResponsiveContainer width={"99%"} height={500}>
            <LineChart
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 10,
                    bottom: 5,
                }}
            >
                <Line
                    type="monotone"
                    dataKey={dataKey}
                    stroke="#8884d8"
                    activeDot={{ r: 8 }} />
                
            </LineChart>
        </ResponsiveContainer>
    </>
);
export default SimpleLineChart;