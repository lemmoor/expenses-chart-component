// fetch("./data.JSON")
// .then(res => res.json())
// .then(data => {
const data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]

const chartBars = document.querySelectorAll(".chart-bar");
let amount = data.map(e => e.amount);
let max = Math.max(...amount);
chartBars.forEach((bar, i) => {
    bar.style.height = (amount[i] / max) * 100 + "%";
    bar.dataset.amount = "$" + amount[i];
    });
// })

