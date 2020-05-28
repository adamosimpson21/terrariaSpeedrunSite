import React from 'react';
import Icon from '../innerComponents/Icon';

// Renders a link to a player's social sites with the appropriate icon
const PlayerLinkIcon = (props) =>(
      <a href={props.player[props.site].uri} target="_blank"><Icon icon={props.site} /></a>
)

export default PlayerLinkIcon;