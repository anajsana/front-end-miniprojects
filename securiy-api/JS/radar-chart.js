// Create the radar chart with all check scores
function createRadarChart(checkData) {
  const ctx = document.getElementById('radarChart').getContext('2d');
  // radar chart docs from chart.js: https://www.chartjs.org/docs/latest/charts/radar.html
  const radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: checkData.map(check => check.name),
      datasets: [
        {
          label: 'Score',
          data: checkData.map(check => check.score),
          fill: true,
          backgroundColor: 'rgba(123, 99, 255, 0.2)',
          borderColor: '#7b63ff',
          pointBackgroundColor: 'rgb(123, 99, 255)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(123, 99, 255)'
        }
      ]
    },
    options: {
      scales: {
        r: {
          angleLines: {
            display: true
          },
          suggestedMin: 0,
          suggestedMax: 10 // set the limit to 10 (max ranking in openssf scorecard)
        }
      },
      elements: {
        line: {
          borderWidth: 3
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}
// displays scorecard ranking and chart with check rankings
function displayScorecard(data) {
  const scorecardElement = document.getElementById('scorecardReport');

  scorecardElement.innerHTML = `
        <h3>Scorecard Results</h3>
        <p>Overall Score: ${data.score}</p>
        <h4>Checks</h4>
        <div class="radar-chart-container">
            <canvas id="radarChart"></canvas>
        </div>
    `;
  scorecardElement.style.display = 'block';
  createRadarChart(data.checks);
}
