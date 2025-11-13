import { notice, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});

const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z'];
let currentKeyIndex = 0;

const keyDisplay = document.getElementById('key');
const newGameBtn = document.getElementById('newGameBtn');


function setNewKey() {
  currentKeyIndex = Math.floor(Math.random() * keys.length);
  keyDisplay.textContent = keys[currentKeyIndex];
}


document.addEventListener('keydown', (event) => {
  const pressedKey = event.key.toLowerCase();

  if (pressedKey === keys[currentKeyIndex]) {
    notice({
      text: `Правильно! Натиснуто "${pressedKey}"`,
      delay: 1000,
    });
    setNewKey();
  } else {
    error({
      text: ` Неправильна клавіша! Треба "${keys[currentKeyIndex]}"`,
      delay: 2000,
    });
  }
});


document.addEventListener('keypress', (event) => {
  event.preventDefault();
});


newGameBtn.addEventListener('click', () => {
  setNewKey();
  notice({
    text: '🕹️ Нова гра почалася! Натисни правильну клавішу!',
    delay: 1500,
  });
});


setNewKey();

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

import Chart from 'chart.js/auto';

const chartData = {
  labels: [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17", "18", "19",
    "20", "21", "22", "23", "24", "25", "26", "27", "28",
    "29", "30"
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380,
        420, 450, 500, 550, 600, 650, 700, 750, 800, 850,
        900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350
      ],
      backgroundColor: "#2196f3",
      borderColor: "#1976d2",
      borderWidth: 2,
      fill: false,
      tension: 0.1,
    },
  ],
};

const config = {
  type: "line", 
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: "#333", font: { size: 14 } },
      },
    },
    scales: {
      x: { title: { display: true, text: "Дні місяця" } },
      y: { title: { display: true, text: "Продажі (шт.)" } },
    },
  },
};


new Chart(document.getElementById("sales-chart"), config);
