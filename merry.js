const snowflakesContainer = document.getElementById('snowflakes');
const numberOfSnowflakes = 100;

for (let i = 0; i < numberOfSnowflakes; i++) {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.width = `${Math.random() * 5 + 5}px`;
  snowflake.style.height = snowflake.style.width;
  snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
  snowflake.style.opacity = Math.random();
  snowflake.style.animationDelay = `${Math.random() * 10}s`;
  snowflakesContainer.appendChild(snowflake);
}
