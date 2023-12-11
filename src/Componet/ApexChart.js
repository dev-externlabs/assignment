import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const [chartData, setChartData] = useState({
    series: [{
      name:"Cash Balance",
      data: [

        [1330556400000,33.10],
        [1330642800000,35.20],
        [1330902000000,31.30],
        [1330988400000,30],
        [1331074800000,32.41],
        [1331161200000,33.05],
        [1331247600000,33.64],
        [1331506800000,33.56],
        [1331593200000,34.22],
        [1331679600000,33.77],
        [1331766000000,34.17],
        [1331852400000,33.82],
        [1332111600000,1],
        [1332198000000,33.16],
        [1332284400000,33.56],
        [1332370800000,33.71],
        [1332457200000,33.81],
        [1332712800000,34.40],
        [1332799200000,34.63],
        [1332885600000,34.46],
        [1332972000000,34.48],
        [1333058400000,34.31],
        [1333317600000,34.70],
        [1333404000000,34.31],
        [1333490400000,33.46],
        [1333576800000,33.59],
        [1333922400000,33.22],
        [1334008800000,32.61],
        [1334095200000,33.01],
        [1334181600000,33.55],
        [1334268000000,33.18],
        [1334527200000,32.84],
        [1334613600000,33.84],
        [1334700000000,33.39],
      ]
    }],
    options: {
      chart: {
        id: 'smooth-curved-line-chart',
        type: 'area',
        height: 10,
        zoom: {
          autoScaleYaxis: true
        }
      },
      annotations: {
        // ... (annotations data)
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0,
        style: 'hollow',
      },
      xaxis: {
        type: 'datetime',
        min: new Date('01 Mar 2012').getTime(),
        tickAmount: 1,
      },
      yaxis:{
        labels:{
          formatter:(value) => {return value+"M"}
        }
      },
      stroke:{
        curve:'smooth',
        width:1
      },
      tooltip: {
        x: {
          format: 'dd MMM yyyy'
        },
        y:{
          formatter: function(value) {
            return "$"+value + "M";
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.5,
          stops: [0, 100]
        }
      },
    },
    selection: 'one_year',
  });

  useEffect(() => {
    updateData(chartData.selection);
  }, [chartData.selection]);

  const updateData = (timeline) => {
    setChartData(prevData => ({
      ...prevData,
      selection: timeline
    }));

    switch (timeline) {
      case 'one_month':
        break;
      case 'six_months':
        break;
      case 'one_year':
        break;
      case 'ytd':
        break;
      case 'all':
        break;
      default:
    }
  }

  return (
    <div id="chart">
      <div className="toolbar">
        <button
          id="one_month"
          onClick={() => updateData('one_month')}
          className={chartData.selection === 'one_month' ? 'active' : ''}
        >
          1M
        </button>
        &nbsp;
        <button
          id="six_months"
          onClick={() => updateData('six_months')}
          className={chartData.selection === 'six_months' ? 'active' : ''}
        >
          6M
        </button>
        &nbsp;
        <button
          id="one_year"
          onClick={() => updateData('one_year')}
          className={chartData.selection === 'one_year' ? 'active' : ''}
        >
          1Y
        </button>
        &nbsp;
        <button
          id="ytd"
          onClick={() => updateData('ytd')}
          className={chartData.selection === 'ytd' ? 'active' : ''}
        >
          YTD
        </button>
        &nbsp;
        <button
          id="all"
          onClick={() => updateData('all')}
          className={chartData.selection === 'all' ? 'active' : ''}
        >
          ALL
        </button>
      </div>

      <div id="chart-timeline">
        <ReactApexChart options={chartData.options} series={chartData.series} type="area" height={350} />
      </div>
    </div>
  );
}

export default ApexChart;
