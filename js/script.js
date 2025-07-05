
// Configuración del gráfico
const ctx = document.getElementById('graficoVentas').getContext('2d');
const graficoVentas = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jul 2024', 'Ago 2024', 'Sep 2024', 'Oct 2024', 'Nov 2024', 'Dic 2024',
            'Ene 2025', 'Feb 2025', 'Mar 2025', 'Abr 2025', 'May 2025', 'Jun 2025'],
        datasets: [{
            label: 'Ventas 2025',
            data: [95000, 110000, 125000, 140000, 135000, 165000, 145000, 155000, 175000, 185000, 195000, 210000],
            borderColor: '#1f4788',
            backgroundColor: 'rgba(31, 71, 136, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        }, {
            label: 'Ventas 2024 (Comparativo)',
            data: [85000, 90000, 95000, 100000, 105000, 120000, 110000, 115000, 125000, 130000, 135000, 145000],
            borderColor: '#28a745',
            backgroundColor: 'rgba(40, 167, 69, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        family: 'Poppins',
                        size: 12
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return context.dataset.label + ': L' + context.parsed.y.toLocaleString();
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return 'L' + (value / 1000) + 'K';
                    }
                }
            }
        }
    }
});

// Event listeners para filtros
['filtroTemporal', 'filtroGeografico', 'filtroVendedor', 'filtroProducto'].forEach(filtro => {
    document.getElementById(filtro).addEventListener('change', function () {
        console.log(`${filtro} seleccionado:`, this.value);
        // Aquí implementarías la lógica de filtrado
    });
});
