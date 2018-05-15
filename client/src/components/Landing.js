import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Nootristack</h1>
      <p>
        Organize and budget your Nootropic supplements!
      </p>
      <RaisedButton href="/stacks" label="Get Started" primary={true} style={{ marginTop: '20px' }} />
    </div>
  )
}

export default Landing;
