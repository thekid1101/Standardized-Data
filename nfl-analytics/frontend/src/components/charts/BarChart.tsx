import { useTheme } from '@mui/material/styles';
import {
  BarChart as RechartsBarChart,
  Bar,
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

interface BarChartProps {
  title: string;
  data: DataPoint[];
  bars: {
    dataKey: string;
    name: string;
    color?: string;
  }[];
  xAxisDataKey: string;
  height?: number | string;
  width?: number | string;
  stacked?: boolean;
}

const BarChart = ({ 
  title, 
  data, 
  bars, 
  xAxisDataKey,
  height,
  width,
  stacked = false
}: BarChartProps) => {
  const theme = useTheme();

  return (
    <ChartContainer title={title} height={height} width={width}>
      <ResponsiveContainer>
        <RechartsBarChart
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
          {bars.map((bar) => (
            <Bar
              key={bar.dataKey}
              dataKey={bar.dataKey}
              name={bar.name}
              fill={bar.color || theme.palette.primary.main}
              stackId={stacked ? 'stack' : undefined}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default BarChart; 