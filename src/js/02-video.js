import Player from '@vimeo/player';

// задержка
import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
// создаем копию
const player = new Player(iframe);

// при запуске просмотра вызываем обработку и передаем текущие секунды в onPlay с интервалом в 1 секунду
player.on('timeupdate', throttle(onPlay, 1000));

// записываем текущее значение времени
function onPlay(event) {
    localStorage.setItem('videoplayer-current-time', event.seconds);
  };


// установим текущее позицию хранилища
const currentTime = localStorage.getItem('videoplayer-current-time');

// если есть сохраненная текущая позиция и она отлична от 0, устанавливаем на плеере сохраненную текущую позицию
currentTime ? player.setCurrentTime(currentTime) : null;
