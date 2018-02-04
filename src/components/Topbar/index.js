import React from 'react';
import styled from 'styled-components';

const Topbar = styled.div`
  background-color: #e8e6e8;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgb(232, 230, 232)),
    to(rgb(210, 208, 210))
  );
  background-image: -webkit-linear-gradient(
    top,
    rgb(232, 230, 232),
    rgb(210, 208, 210)
  );
  background-image: -moz-linear-gradient(
    top,
    rgb(232, 230, 232),
    rgb(210, 208, 210)
  );
  background-image: -o-linear-gradient(
    top,
    rgb(232, 230, 232),
    rgb(210, 208, 210)
  );
  background-image: -ms-linear-gradient(
    top,
    rgb(232, 230, 232),
    rgb(210, 208, 210)
  );
  background-image: linear-gradient(
    top,
    rgb(232, 230, 232),
    rgb(210, 208, 210)
  );
  filter: progid:DXImageTransform.Microsoft.gradient(
      GradientType=0,
      StartColorStr='#e8e6e8',
      EndColorStr='#d2d0d2'
    );
  border-bottom: 1px #b3b1b3 solid;
  height: 22px;
  margin-top: -25px;
  position: fixed;
  text-align: center;
  padding-top: 3px;
  width: 100%;
`;

export default ({ title = '' }) => <Topbar>{title}</Topbar>;
