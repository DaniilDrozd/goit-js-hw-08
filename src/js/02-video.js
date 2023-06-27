
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME_VIDEO = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
 
const onPlay = function(data) {};

player.on('play', onPlay);

const onPlay  ({}) =>
storageLocal.save(VIDEOPLAYER_CURRENT_Video, seconds);

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(videoplayerCurrentTime);