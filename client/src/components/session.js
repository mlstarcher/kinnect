import React, { useState, useEffect } from 'react';

import UpdateSequenceForm from './UpdateSequenceForm';
import Sequence from './Sequence';

export default function Session({ socket, currentSequence }) {

  return (
      <>
        <Sequence
          socket={socket}
          currentSequence={currentSequence}
        />
      </>
    )
}