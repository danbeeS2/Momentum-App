const today = document.querySelector("h2#today");

function getToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const weekArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const week = weekArr[date.getDay()];
  today.innerText = `${year}.${month}.${day} ${week}`;
}

getToday();
// setInterval(getToday, 1000);
