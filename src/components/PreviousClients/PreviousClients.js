import React from 'react';
import { StyledPreviousClients } from './PreviousClientsStyles';
import { Image } from '../atoms';
import gli from '../../imgs/gli_home.png';
import sps from '../../imgs/sps_home.png';

const PreviousClients = () => (
  <StyledPreviousClients>
    <h3>Some previous clients:</h3>
    <Image src={gli} width={20} />
    <small>GLI Norcal Landscape Construction</small>
    <div>
      <a href="https://github.com/melissa-murphy/glinorcaldev" target="blank" rel="noreferrer">
        <i className="fab fa-github fa-2x" />
      </a>
    </div>
    <Image src={sps} width={20} />
    <small>Sacramento Philatelic Society</small>
    <div>
      <a href="https://github.com/melissa-murphy/stampSociety" target="blank" rel="noreferrer">
        <i className="fab fa-github fa-2x" />
      </a>
    </div>
  </StyledPreviousClients>
);

export default PreviousClients;
