import { GraphicHeader, GraphicBody } from '../DashboardPage.styled';
import { YearWaterSet } from '../../../utils/DashBoard/TempData/YearWaterSet';
import { avarageValue } from '../../../utils/DashBoard/avarageValue';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

export const Water = ({ name }) => {
  const lables = YearWaterSet.map(({ date }) => {
    return date;
  });
  console.log(lables);

  const waterData = YearWaterSet.map(({ data }) => {
    return data;
  });
  // console.log(waterData);

  const titleTooltip = tooltipItems => {
    return '';
  };

  const data = {
    type: 'line',
    labels: lables,
    datasets: [
      {
        data: waterData,
        tension: 0.9,
        lable: true,
        borderColor: 'rgba(227, 255, 168, 1)',
        spanGaps: true,
        backgroundColor: 'rgba(227, 255, 168, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    // responsive: true,
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
    plugins: {
      tooltip: {
        yAlign: 'false',
        displayColors: false,
        callbacks: {
          title: titleTooltip,
          afterLabel: function (context) {
            return 'milliliters';
          },
        },
      },
    },
    pointRadius: 0,
    scales: {
      y: {
        // beginAtZero: true,
        color: '#B6B6B6',
        min: 0,
        max: 3000,
        ticks: {
          padding: 8,
          stepSize: 1000,
          callback: value => {
            if (value !== 0) {
              return value / 1000 + 'K';
            }
            if (value === 0) {
              return value;
            }
          },
        },
        grid: {
          lineWidth: 0.5,
          color: 'rgba(182, 182, 182, 1)',
          drawTicks: false,
        },
      },
      x: {
        color: '#B6B6B6',
        ticks: {
          padding: 6,
          align: 'center',
        },
        grid: {
          lineWidth: 0.5,
          color: 'rgba(182, 182, 182, 1)',
          drawTicks: false,
        },

        min: 0,
        max: 31,
      },
    },
  };

  return (
    <>
      <GraphicHeader>
        <p>{name}</p>
        <p>Avarage value: {avarageValue(YearWaterSet)} ml</p>
      </GraphicHeader>

      <GraphicBody>
        <Line data={data} options={options}></Line>
      </GraphicBody>
    </>
  );
};
