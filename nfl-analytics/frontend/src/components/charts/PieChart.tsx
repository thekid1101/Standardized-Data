import { useTheme } from '@mui/material/styles';
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import ChartContainer from './ChartContainer';

interface DataPoint {
  name: string;
  value: number;
  color?: string;
}

interface PieChartProps {
  title: string;
  data: DataPoint[];
  height?: number | string;
  width?: number | string;
}

const PieChart = ({ 
  title, 
  data,
  height,
  width 
}: PieChartProps) => {
  const theme = useTheme();

  const COLORS = [
    theme.palette.primary.main,
    theme.palette.secondary.main,
    theme.palette.success.main,
    theme.palette.warning.main,
    theme.palette.error.main,
    theme.palette.info.main,
  ];

  return (
    <ChartContainer title={title} height={height} width={width}>
      <ResponsiveContainer>
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill={theme.palette.primary.main}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color || COLORS[index % COLORS.length]} 
              />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{
              backgroundColor: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
            }}
          />
          <Legend />
        </RechartsPieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default PieChart; 