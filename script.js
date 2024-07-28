const menu = document.getElementById('menu')
menu.style.display = 'none'
localStorage.setItem('darkMode', body.style.backgroundColor)
const toggle = ()=>{
    const menu = document.getElementById('menu')
    menu.style.display = menu.style.display == 'none' ? 'block' : 'none'
}

const darkMode = ()=>{
    const body = document.querySelector('body')
    if(body.style.backgroundColor == 'rgb(24, 24, 27)'){
        body.style.backgroundColor = 'white'
        menu.style.backgroundColor = 'rgb(250 250 250 / var(--tw-bg-opacity)'
        dashboard.style.color = 'rgb(24, 24, 27)'

        const aside = document.getElementById('aside')
        aside.style.backgroundColor = 'rgb(250 250 250 / var(--tw-bg-opacity)';

        const title = document.getElementById('title')
        title.style.color = 'rgb(24, 24, 27)';

        const darkMode = document.getElementById('darkMode')
        darkMode.style.color = 'rgb(24, 24, 27)';

        const h1 = document.getElementsByTagName('h1')
        h1[0].style.color = 'rgb(24, 24, 27)'
        
        const card = document.getElementById('card')
        card.style.backgroundColor = 'rgb(250 250 250 / var(--tw-bg-opacity)'
        card.style.color = 'black'

        const card2 = document.getElementById('card2')
        card2.style.backgroundColor = 'rgb(250 250 250 / var(--tw-bg-opacity)'
        card2.style.color = 'black'

        const card3 = document.getElementById('card3')
        card3.style.backgroundColor = 'rgb(250 250 250 / var(--tw-bg-opacity)'
        card3.style.color = 'black'

        const card4 = document.getElementById('card4')
        card4.style.backgroundColor = 'rgb(250 250 250 / var(--tw-bg-opacity)'
        card4.style.color = 'black'

        const target = document.getElementById('target')
        target.style.color = 'rgb(24, 24, 27)'

        const revenue = document.getElementById('revenue')
        revenue.style.color = 'rgb(24, 24, 27)'

        const card5 = document.getElementById('card5')
        card5.style.backgroundColor = 'rgb(250 250 250 / var(--tw-bg-opacity)'
        card5.style.color = 'black'

        const card6 = document.getElementById('card6')
        card6.style.backgroundColor = 'rgb(250 250 250 / var(--tw-bg-opacity)'
        card6.style.color = 'black'

        const card7 = document.getElementById('card7')
        card7.style.backgroundColor = 'rgb(250 250 250 / var(--tw-bg-opacity)'
        card7.style.color = 'black'

        const right = document.getElementById('right')
        right.style.backgroundColor = 'white';
        right.style.color = 'black'

        const card8 = document.getElementById('card8')
        card8.style.backgroundColor = 'rgb(250 250 250 / var(--tw-bg-opacity)'
        card8.style.color = 'black'

        const card9 = document.getElementById('card9')
        card9.style.backgroundColor = 'rgb(250 250 250 / var(--tw-bg-opacity)'
        card9.style.color = 'black'

        const card10 = document.getElementById('card10')
        card10.style.backgroundColor = 'rgb(250 250 250 / var(--tw-bg-opacity)'
        card10.style.color = 'black'

    }
    else{
        body.style.backgroundColor = 'rgb(24, 24, 27)'
        const dashboard =   document.getElementById('dashboard')
        dashboard.style.color = 'white'

        menu.style.backgroundColor = 'rgb(24, 24, 27)';

        const search = document.getElementById('search')
        search.style.backgroundColor = 'white';
        const aside = document.getElementById('aside')
        aside.style.backgroundColor = 'rgb(24, 24, 27)';

        const title = document.getElementById('title')
        title.style.color = 'white';

        const darkMode = document.getElementById('darkMode')
        darkMode.style.color = 'white';

        const card = document.getElementById('card')
        card.style.backgroundColor = 'rgba(31,30,37,255)'
        card.style.color = 'white'

        const card2 = document.getElementById('card2')
        card2.style.backgroundColor = 'rgba(31,30,37,255)'
        card2.style.color = 'white'

        const card3 = document.getElementById('card3')
        card3.style.backgroundColor = 'rgba(31,30,37,255)'
        card3.style.color = 'white'

        const card4 = document.getElementById('card4')
        card4.style.backgroundColor = 'rgba(31,30,37,255)'
        card4.style.color = 'white'

        const target = document.getElementById('target')
        target.style.color = 'rgba(31,30,37,255)'

        const revenue = document.getElementById('revenue')
        revenue.style.color = 'rgba(31,30,37,255)'

        const card5 = document.getElementById('card5')
        card5.style.backgroundColor = 'rgba(31,30,37,255)'
        card5.style.color = 'white'

        const card6 = document.getElementById('card6')
        card6.style.backgroundColor = 'rgba(31,30,37,255)'
        card6.style.color = 'white'

        const card7 = document.getElementById('card7')
        card7.style.backgroundColor = 'rgba(31,30,37,255)'
        card7.style.color = 'white' 

        const right = document.getElementById('right')
        right.style.backgroundColor = 'rgb(24, 24, 27)';
        right.style.color = 'white';

        const card8 = document.getElementById('card8')
        card8.style.backgroundColor = 'rgba(31,30,37,255)'
        card8.style.color = 'white'

        const card9 = document.getElementById('card9')
        card9.style.backgroundColor = 'rgba(31,30,37,255)'
        card9.style.color = 'white'

        const card10 = document.getElementById('card10')
        card10.style.backgroundColor = 'rgba(31,30,37,255)'
        card10.style.color = 'white'
    }
}

const xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "#FFEBD6",
      fill: false
    }, { 
        data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
        borderColor: "orange",
      fill: false
    },
    { 
      data: [100,1500,2000,3000,5000,900,200,1110,999,800],
      borderColor: "#F3C6DE",
      fill: false
    },
  ]
  },
  options: {
    legend: {display: false}
  }
});

// document.addEventListener('DOMContentLoaded', () => {
//   const ctx = document.getElementById('halfCircleChart').getContext('2d');
//   const data = {
//     labels: ['Completed', 'Remaining'],
//     datasets: [{
//       data: [85, 15],
//       backgroundColor: ['#ff8c00', '#f4f4f4'],
//       hoverBackgroundColor: ['#ff8c00', '#f4f4f4'],
//       borderWidth: 0
//     }]
//   };

//   const options = {
//     rotation: -Math.PI,
//     circumference: Math.PI,
//     cutoutPercentage: 80, // Adjust this to control the thickness of the chart
//     plugins: {
//       legend: {
//         display: false
//       }
//     }
//   };

//   new Chart(ctx, {
//     type: 'doughnut',
//     data: data,
//     options: options
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const ctx = document.getElementById('fullCircleChart').getContext('2d');
  const data = {
    datasets: [{
      data: [85, 10, 3, 2],
      backgroundColor: ['#4caf50', '#ff9800', '#f44336', '#9e9e9e'],
      hoverBackgroundColor: ['#4caf50', '#ff9800', '#f44336', '#9e9e9e'],
      borderWidth: 3,
    }]
  };

  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    cutout: '80%',
    responsive: true,
  };

  const fullCircleChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
  });
});
