import React, { useState } from 'react';
import { connect } from 'react-redux';
import Times from './Times'

function Time(props: any) {

  return (
    <div>
      {props.showTime ? <Times date={props.date} /> : null}
    </div>
  )
}

export default connect()(Time);