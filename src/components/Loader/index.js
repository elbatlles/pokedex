import React from 'react'
import {Loader as SemanticLoader,Dimmer} from 'semantic-ui-react'

const Loader = (props) => {
  return (
    <Dimmer active={true}>
      <SemanticLoader {...props} />
    </Dimmer>
  )
};
   

export default Loader