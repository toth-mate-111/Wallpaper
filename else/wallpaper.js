const wallpaper_list = [
    '5283618.jpg',
    '885286.jpg',
    '203524.jpg',
    '1506250.jpg',
    'Screenshot From 2026-10-12 23-59-26.png',
    'lake.jpg',
    '1732290.jpg',
    'deer-forest.jpg',
    '203043.jpg',
    '812553.jpg',
];

const ID = document.getElementById('wallpaper_array');

wallpaper_list.forEach((array) => {
    ID.innerHTML += `<li class="wallpaper";"><img class="wallpaper-image" alt="valami" src="./images/wallpapers/${array}"></li>`
});

//find . -maxdepth 1 -type f -printf "'%f',\n"