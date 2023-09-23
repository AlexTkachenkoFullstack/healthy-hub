import { getDate, parseISO } from 'date-fns';
import { GraphicHeader, GraphicBody } from '../DashboardPage.styled';
// import { YearCaloriesSet } from '../../../utils/DashBoard/TempData/YearCaloriesSet';
import { MonthCaloriesSet } from '../../../utils/DashBoard/TempData/MonthCaloriesSet';
import { avarageValue } from '../../../utils/DashBoard/avarageValue';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export const Calories = ({ name }) => {
  const lables = MonthCaloriesSet.map(({ date }) => getDate(parseISO(date)));
  // const dat = getDate(parseISO(lables[0]))
  // console.log(dat);

  const caloriesData = MonthCaloriesSet.map(({ data }) => data);

   const titleTooltip = tooltipItems => {
     return '';
  };
  
  // console.log(caloriesData);
  const data = {
    labels: lables,

    datasets: [
      {
        data: caloriesData,
        tension: 0.2,
        borderColor: 'rgba(227, 255, 168, 1)',
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
        <p>Avarage value: {avarageValue(MonthCaloriesSet)} cal</p>
      </GraphicHeader>
      <GraphicBody>
        <Line data={data} options={options}></Line>
      </GraphicBody>
    </>
  );
};
