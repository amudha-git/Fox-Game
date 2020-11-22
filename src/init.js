import gameState, { handleUserAction } from './gameState';
import { TICK_RATE, ICONS } from '/constants';
import initButtons from './buttons';


function tick() {
  console.log( "tick", Date.now() );
}

async function init()
{
   initButtons( handleUserAction );

  let nextTimeToTick = Date.now();

  function nextAnimationFrame()
  {
    const now = Date.now();

    if( nextTimeToTick <= now )
    {
      gameState.tick();
      
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame( nextAnimationFrame );
  }

  requestAnimationFrame( nextAnimationFrame );

}

init();
