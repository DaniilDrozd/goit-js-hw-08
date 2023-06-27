
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME_VIDEO = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
 
const onPlay = function(data) {
    player.getCurrentTime().then(seconds => {
        localStorage.setItem(CURRENT_TIME_VIDEO, seconds);
      });
};

player.on('play', onPlay);


player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem( 'videoplayer-current-time' ));