import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(LOCALSTORAGE_KEY, `${data.seconds}`);
  }),
  100
);

const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);
player
  .getDuration()
  .then(function (duration) {
    console.log(duration);
    // duration = the duration of the video in seconds
  })
  .catch(function (error) {
    // an error occurred
  });

function xxx() {
  if (currentTime >= 571000) {
    player
      .setCurrentTime(duration)
      .then(function (seconds) {})
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            break;

          default:
            break;
        }
      });
  } else {
    player
      .setCurrentTime(currentTime)
      .then(function (seconds) {})
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            break;

          default:
            break;
        }
      });
  }
}

xxx();
