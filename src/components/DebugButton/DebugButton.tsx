import React from 'react'
import { ReactElement } from 'react';
import { useRecoilCallback } from 'recoil';

const consoleStyles = {
  debugHeader: 'font: 2.5em/1 Arial; color: crimson;',
  debugText: 'font: bold 1.3em/1 Arial; color: midnightblue',
}

export function DebugButton(): ReactElement {

    const onClick = useRecoilCallback(({snapshot}) => async () => {
      console.log('%cAtom values:', consoleStyles.debugHeader, '' );
      for (const node of snapshot.getNodes_UNSTABLE()) {
        const value = await snapshot.getPromise(node);
        console.log('%c%s : %O', consoleStyles.debugText, node.key, value);
      }
    }, []);
  
    return <button onClick={onClick}>Dump State</button>
  }
