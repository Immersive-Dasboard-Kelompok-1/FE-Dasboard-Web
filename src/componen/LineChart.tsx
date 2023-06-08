import React, { useEffect, useRef } from 'react';
import { Chart, LineController, LinearScale, CategoryScale, PointElement } from 'chart.js';

const LineChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      Chart.register(LineController, LinearScale, CategoryScale, PointElement);
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [
              {
                label: 'Data 1',
                data: [12, 19, 3, 5, 2],
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                fill: false,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      }
    }
  }, []);

  return <canvas ref={chartRef} />;
};

export default LineChart;
