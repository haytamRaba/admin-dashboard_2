// SIDEBAR TOGGLE

function showcount() {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  const productCountElement = document.getElementById("productsCount-js");
  if (productCountElement) {
    productCountElement.textContent = products.length;
  }
}

// Mettre à jour le compteur au chargement de la page
document.addEventListener('DOMContentLoaded', showcount);

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}
let countPhones = 0;
  let countLaptops = 0;
  let countMonitors = 0;
  let countHeadphones = 0;
  let countCameras = 0;
  topProducts();

//Top 5 products
function topProducts() {

  let products = JSON.parse(localStorage.getItem("products")) || [];
for(let i=0 ;i<products.length;i++){
  if(products[i].category =='phone'){
    countPhones++;
  }
  else if(products[i].category =='laptop'){
    countLaptops++;
  }
  else if(products[i].category =='monitor'){
    countMonitors++;
  }
  else if(products[i].category =='headphones'){
    countHeadphones++;
  }
  else if(products[i].category =='camera'){
    countCameras++;
  }
}
}
// ---------- CHARTS ----------

// BAR CHART
const barChartOptions = {
  series: [
    {
      data: [countPhones, countLaptops, countMonitors,countHeadphones , countCameras],
      name: 'Products',
    },
  ],
  chart: {
    type: 'bar',
    background: 'transparent',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  stroke: {
    colors: ['transparent'],
    show: true,
    width: 2,
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
  xaxis: {
    categories: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Camera'],
    title: {
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      show: true,
      color: '#55596e',
    },
    axisTicks: {
      show: true,
      color: '#55596e',
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: {
    title: {
      text: 'Count',
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

// AREA CHART
// const areaChartOptions = {
//   series: [
//     {
//       name: 'Purchase Orders',
//       data: [31, 40, 28, 51, 42, 109, 100],
//     },
//     {
//       name: 'Sales Orders',
//       data: [11, 32, 45, 32, 34, 52, 41],
//     },
//   ],
//   chart: {
//     type: 'area',
//     background: 'transparent',
//     height: 350,
//     stacked: false,
//     toolbar: {
//       show: false,
//     },
//   },
//   colors: ['#00ab57', '#d50000'],
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//   dataLabels: {
//     enabled: false,
//   },
//   fill: {
//     gradient: {
//       opacityFrom: 0.4,
//       opacityTo: 0.1,
//       shadeIntensity: 1,
//       stops: [0, 100],
//       type: 'vertical',
//     },
//     type: 'gradient',
//   },
//   grid: {
//     borderColor: '#55596e',
//     yaxis: {
//       lines: {
//         show: true,
//       },
//     },
//     xaxis: {
//       lines: {
//         show: true,
//       },
//     },
//   },
//   legend: {
//     labels: {
//       colors: '#f5f7ff',
//     },
//     show: true,
//     position: 'top',
//   },
//   markers: {
//     size: 6,
//     strokeColors: '#1b2635',
//     strokeWidth: 3,
//   },
//   stroke: {
//     curve: 'smooth',
//   },
//   xaxis: {
//     axisBorder: {
//       color: '#55596e',
//       show: true,
//     },
//     axisTicks: {
//       color: '#55596e',
//       show: true,
//     },
//     labels: {
//       offsetY: 5,
//       style: {
//         colors: '#f5f7ff',
//       },
//     },
//   },
//   yaxis: [
//     {
//       title: {
//         text: 'Purchase Orders',
//         style: {
//           color: '#f5f7ff',
//         },
//       },
//       labels: {
//         style: {
//           colors: ['#f5f7ff'],
//         },
//       },
//     },
//     {
//       opposite: true,
//       title: {
//         text: 'Sales Orders',
//         style: {
//           color: '#f5f7ff',
//         },
//       },
//       labels: {
//         style: {
//           colors: ['#f5f7ff'],
//         },
//       },
//     },
//   ],
//   tooltip: {
//     shared: true,
//     intersect: false,
//     theme: 'dark',
//   },
// };

// const areaChart = new ApexCharts(
//   document.querySelector('#area-chart'),
//   areaChartOptions
// );
// areaChart.render();
