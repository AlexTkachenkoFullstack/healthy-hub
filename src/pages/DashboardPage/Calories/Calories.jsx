import { getDate, parseISO } from 'date-fns';
import {
  GraphicHeader,
  GraphicBody,
  GraficFrame,
  ScrollWrap,
  GraphicTitle,
  Avarage,
  Value,
} from '../DashboardPage.styled';
// import { YearCaloriesSet } from '../../../utils/DashBoard/TempData/YearCaloriesSet';
import { MonthCaloriesSet } from '../../../utils/DashBoard/TempData/MonthCaloriesSet';
import { avarageValue } from '../../../utils/DashBoard/avarageValue';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  PointElement,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, PointElement);

export const Calories = ({ name, stat }) => {
  const lables = MonthCaloriesSet.map(({ date }) => getDate(parseISO(date)));
  console.log(stat)

  const caloriesData = MonthCaloriesSet.map(({ data }) => data);

  const titleTooltip = tooltipItems => {
    return '';
  };

  const data = {
    labels: lables,

    datasets: [
      {
        data: caloriesData,
        tension: 0.1,
        borderColor: 'rgba(227, 255, 168, 1)',
        backgroundColor: 'rgba(227, 255, 168, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    // responsive:true,
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
    layout: {
      padding: {
        left: 14,
        right: 31,
        top: 25,
        bottom: 24,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
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
        color: '#B6B6B6',
        min: 0,
        max: 3000,
        ticks: {
          padding: 14,
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
        grace: 5,
        ticks: {
          padding: 6,
        },
        grid: {
          lineWidth: 0.5,
          color: 'rgba(182, 182, 182, 1)',
          drawTicks: false,
          // offset: true,
        },
        min: 0,
        max: 31,
      },
    },
  };

  return (
    <>
      <GraficFrame>
        <GraphicHeader>
          <GraphicTitle>{name}</GraphicTitle>
          <Avarage>Avarage value:<Value>{avarageValue(MonthCaloriesSet)} cal</Value>
        </Avarage>
        </GraphicHeader>
        <ScrollWrap>
          <GraphicBody>
            <Line data={data} options={options}></Line>
          </GraphicBody>
        </ScrollWrap>
      </GraficFrame>
    </>
  );
};
