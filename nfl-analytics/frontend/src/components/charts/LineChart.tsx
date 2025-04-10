import { useTheme } from '@mui/material/styles';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import ChartContainer from './ChartContainer';

interface DataPoint {
  [key: string]: string | number;
}

interface LineChartProps {
  title: string;
  data: DataPoint[];
  lines: {
    dataKey: string;
    name: string;
    color?: string;
  }[];
  xAxisDataKey: string;
  height?: number | string;
  width?: number | string;
}

const LineChart = ({ 
  title, 
  data, 
  lines, 
  xAxisDataKey,
  height,
  width 
}: LineChartProps) => {
  const theme = useTheme();

  return (
    <ChartContainer title={title} height={height} width={width}>
      <ResponsiveContainer>
        <RechartsLineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey={xAxisDataKey}
            stroke={theme.palette.text.secondary}
          />
          <YAxis 
            stroke={theme.palette.text.secondary}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
            }}
          />
          <Legend />
          {lines.map((line, index) => (
            <Line
              key={line.dataKey}
              type="monotone"
              dataKey={line.dataKey}
              name={line.name}
              stroke={line.color || theme.palette.primary.main}
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default LineChart; 