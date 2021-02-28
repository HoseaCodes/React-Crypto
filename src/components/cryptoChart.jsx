import React, { useEffect } from 'react';
import Chart from 'chart.js';

const CryptoChart = ({ crypto }) => {
    useEffect(() => {

        const ctx = document.getElementById('myChart');
        Chart.defaults.global.defaultFontSize = 10;
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                datasets: [{
                    data: [crypto.circulating_supply, crypto.total_supply - crypto.circulating_supply],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                cutoutPercentage: 0,
                responsive: true,
                animation: {
                    animateScale: true,
                    animateRotate: true
                },
                legend: {
                    boxWidth: 1
                },
            }
        });
    })

    return (
        <>
            <canvas id="myChart" width="100" height="100"
                aria-label="Hello ARIA World" role="img">
            </canvas>

        </>
    )
}

export default CryptoChart;