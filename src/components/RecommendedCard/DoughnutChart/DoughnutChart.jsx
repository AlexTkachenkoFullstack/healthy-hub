import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const chartOptions = {
  rotation: 0,
  cutout: '80%',
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    }
  },
  animation: {
    animateRotate: true,
    animateScale: true,
  },
};

const bcgCircle = {
  id: 'bcgCircle',
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const { ctx } = chart;

    ctx.save();

    const xCoor = chart.getDatasetMeta(0).data[0].x;
    const yCoor = chart.getDatasetMeta(0).data[0].y;
    const innerRad = chart.getDatasetMeta(0).data[0].innerRadius;
    const outerRad = chart.getDatasetMeta(0).data[0].outerRadius;
    const width = outerRad - innerRad;
    const angle = Math.PI / 180;

    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = 'rgba(41, 41, 40, 1)';
    ctx.arc(xCoor, yCoor, outerRad - width / 2, 0, angle * 360, false);
    ctx.stroke();
  },
};

export const DoughnutChart = ({ valueNorm, inputValue, chartBcg }) => {
  if (inputValue > valueNorm) {
    inputValue = 1700;
    chartBcg = 'red';
  }
  const emptyValue = valueNorm - inputValue;

  const data = {
    datasets: [
      {
        label: [],
        data: [inputValue, emptyValue],
        backgroundColor: [chartBcg, 'transparent'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 0,
        borderRadius: 20,
      },
    ],
  };
  return (
    <>
      <Doughnut options={chartOptions} data={data} plugins={[bcgCircle]} />
    </>
  );
};
