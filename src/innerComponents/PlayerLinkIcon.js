import React from 'react';
import Icon from '../innerComponents/Icon';

const PlayerLinkIcon = (props) =>(
      <a href={props.player[props.site].uri} target="_blank"><Icon icon={props.site} /></a>
)

export default PlayerLinkIcon;