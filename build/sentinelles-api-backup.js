<script defer>
  const chartOptions1 = {
      series: [{
        name: "Incidence",
        data: []
      }],
      xaxis: {
        categories: []
      },
      chart: {
        height: 192,
        type: 'line',
      },
      stroke: { colors: ['#4150f5'], curve: 'smooth', width: 4 },
      title: { text: 'Incidence de la maladie de Lyme en France' },
      yaxis: { min: 0, max: 120 }
    }
async function fetchSentiwebData() {
  try {
    const response = await fetch("https://www.sentiweb.fr/api/v1/datasets/rest/dataset?id=inc-18-PAY");
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }
    const json = await response.json();
    const data = json.data.map(item => item.inc100).reverse();
    const year = json.data.map(item => item.year).reverse();

    chartOptions1.series[0].data = data;
    chartOptions1.xaxis.categories = year;
  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error);
  }
}
fetchSentiwebData();
</script>