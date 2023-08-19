import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', function (data) {
  localStorage.setItem(LOCALSTORAGE_KEY, `${data.seconds}`);
});

const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
