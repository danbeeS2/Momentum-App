const AIP_KEY = "85065b946105af2bf6375b2a27afcc51";

const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:nth-child(2)");
const temp = document.querySelector("#weather span:nth-child(3)");
const clothes = document.querySelector("#weather div:last-child");

function clothesByTemp(temp) {
  let wear = "";
  if (temp >= 27) {
    wear = `민소매, 반바지, 민소매 원피스
    27도 이상 한여름 날씨 최대한 얇게 입어주세요!`;
  } else if (temp >= 23 && temp < 27) {
    wear = `반소매, 얇은 셔츠,  얇은 긴소매, 반바지, 얇은 면바지
    23도~26도 가벼운 소재라면 긴 소매도 OK! 추위를 많이 탄다면 얇은 겉 옷을 챙기세요!`;
  } else if (temp >= 20 && temp < 23) {
    wear = `긴소매, 얇은 가디건, 블라우스, 후드티, 얇은 면바지, 슬랙스, 스키니
    20~22도 옷 코디하기 좋은 기온~ 두께가 얇은 소매 긴 옷 입어주세요!`;
  } else if (temp >= 17 && temp < 20) {
    wear = `셔츠, 얇은 니트, 얇은 가디건, 후드티, 맨투맨, 청바지 면바지, 슬랙스, 원피스
    17~20도 외출 전 얇은 외투 챙기고 추위를 많이 탄다면 안에도 긴 소매!`;
  } else if (temp >= 12 && temp < 17) {
    wear = `얇은 자켓, 셔츠, 가디건, 간절기 야상, 맨투맨, 니트, 살구색 스타킹
    12~16도 17도 이하는 감기 걸리기 쉬운 기온입니다. 아우터 안에 가디건 필수!`;
  } else if (temp >= 10 && temp < 12) {
    wear = `자켓, 트렌치코트, 간절기야상, 레이어드 껴입기, 검은색 스타킹
    10도~11도 쌀쌀해요 레이어드는 필수!`;
  } else if (temp >= 6 && temp < 10) {
    wear = `코트 필수, 가죽자켓 필수, 패딩조끼, 니트, 스카프, 두꺼운 바지, 히트텍
    6~9도 레이어드 필수!`;
  } else if (temp >= 0 && temp < 6) {
    wear = `패딩, 두꺼운 코트, 목도리, 히트텍, 기모제품
    0~5도 최대한 많이 껴입자!`;
  } else {
    wear = `영하 모자달린 두꺼운 패딩, 목도리, 귀마개, 부츠, 장갑, 모자`;
  }
  clothes.innerText = wear;
}

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${AIP_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weather.innerText = data.weather[0].main;
      city.innerText = data.name;
      temp.innerText = `${data.main.temp}°C`;
      clothes = clothesByTemp(data.main.temp);
    });
}

function onGeoError() {
  alert(`Can't find you. So I can't tell you the weather.`);
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
