import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player';

const LOCAL_KEY = 'videoplayer-current-time';
const THROTTLE_TIME = 1000;

const player = new Vimeo('vimeo-player');
player.setCurrentTime(getTimeWhenPaused());

player.on('timeupdate', throttle(timeUpdate, THROTTLE_TIME));

function timeUpdate({ seconds }) {
  saveTimeToLocal(seconds);
}

function saveTimeToLocal(time) {
  localStorage.setItem(LOCAL_KEY, String(time));
}

function getTimeWhenPaused() {
  return Number(localStorage.getItem(LOCAL_KEY)) || 0;
}
