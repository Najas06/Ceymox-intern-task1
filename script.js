const menu = document.getElementById('menu')
menu.style.display = 'none'
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
        aside.style.backgroundColor = 'white';

        const title = document.getElementById('title')
        title.style.color = 'rgb(24, 24, 27)';

        const darkMode = document.getElementById('darkMode')
        darkMode.style.color = 'rgb(24, 24, 27)';

        const h1 = document.getElementsByTagName('h1')
        h1[0].style.color = 'rgb(24, 24, 27)'
        
        const card = document.getElementById('card')
        card.style.backgroundColor = 'white'
        card.style.color = 'black'

        const card2 = document.getElementById('card2')
        card2.style.backgroundColor = 'white'
        card2.style.color = 'black'

        const card3 = document.getElementById('card3')
        card3.style.backgroundColor = 'white'
        card3.style.color = 'black'
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
    }]
  },
  options: {
    legend: {display: false}
  }
});

