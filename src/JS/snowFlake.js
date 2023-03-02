const body = document.querySelector("body")

const MIN_DURATION = 5

function makeSnowflake() {
  const snowflake = document.createElement("div")
  const delay = Math.random() * 100
  const initialOpacity = Math.random() + 0.3
  // 애니메이션의 지속시간 == 속도
  const duration = Math.random() * 20 + MIN_DURATION
  const flakeWidth = snowflake.style.width

  snowflake.classList.add("snowflake")
  // snowflake.style.left = `${Math.random()*window.screen.width}px`;
  snowflake.style.left = `${Math.random() * 99}vw`
  // snowflake.style.left = `${calc(Math.random()*99vw - flakeWidthpx)}`;
  snowflake.style.animationDelay = `${delay}s`
  snowflake.style.opacity = initialOpacity
  snowflake.style.animation = `snowFall ${duration}s linear`

  body.appendChild(snowflake)

  setTimeout(() => {
    body.removeChild(snowflake)
    // makeSnowflake(); // 눈송이 무한생성
  }, (duration + delay) * 1000)
}

function makeSnowflakes(n) {
  for (let index = 0; index < n; index++) {
    // makeSnowflake();
    setTimeout(makeSnowflake, Math.random() * 20000)
  }
}

window.onload = function () {
  var mainBrandIcon = document.getElementById("rounded-brand-icon")
  mainBrandIcon.addEventListener("click", function () {
    makeSnowflakes(300 + Math.random() * 200)
  })
  // makeSnowflakes(300);
}
