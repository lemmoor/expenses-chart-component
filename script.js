fetch("data.JSON")
.then(res => res.json())
.then(data => {
    const chartBars = document.querySelectorAll(".chart-bar");
    let amount = data.map(e => e.amount);
    let max = Math.max(...amount);
    chartBars.forEach((bar, i) => {
        bar.style.height = (amount[i] / max) * 100 + "%";
        bar.dataset.amount = "$" + amount[i];
    })
})

