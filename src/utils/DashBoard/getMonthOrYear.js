export const getMonthOrYear = (data, period) => {
  if (period === 'lastYear' && data.length > 0) {
    const per = data[0];

    const result = new Date(per.date);

    return result.toLocaleString('en-US', { month: 'long' });
  }

  if (period === 'lastMonth' && data.length > 0) {
    const result = new Date();

    return result.getFullYear();
  }

  return;
};
