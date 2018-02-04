import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import './burger-menu.css';

const Heading = styled.div`
  border-bottom: 1px #c1c6d1 solid;
  color: #232323;
  text-transform: uppercase;
  margin: 10px;
  padding: 0 0 10px 0;
  text-align: center;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  color: #fefefe;
  list-style: none;
  padding: 5px 0;

  &:hover {
    background: #fefefe;
    cursor: pointer;

    > a {
      color: #232323;

      > img {
        -webkit-filter: none;
        filter: none;
      }
    }
  }
`;

const Icon = styled.img`
  height: 16px;
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
  margin-left: 15px;
  margin-top: 2px;
  float: left;
  width: 16px;
`;

const Link = styled.a`
  color: #4a5a73;
  font-size: 16px;
  padding-left: 15px;
  padding-right: 26px;
  line-height: 20px;
  text-decoration: none;

  &.active,
  &:hover {
    color: #232323;
    text-decoration: none;
  }
`;

class Sidebar extends React.Component {
  /**
   * Default state.
   *
   * @var {object}
   */
  state = {
    current: '',
    open: false
  };

  /**
   * Update state and trigger `onClick` prop when site is clicked.
   *
   * @param {string} url
   */
  onClick(url) {
    this.setState({
      current: url,
      open: false
    });
    this.props.onClick(url);
  }

  /**
   * Update state when props change.
   *
   * @param {object} props
   */
  componentWillReceiveProps(props) {
    this.setState({
      open: props.open
    });
  }

  /**
   * Render component.
   */
  render() {
    return (
      <Menu isOpen={this.state.open} width={250} right>
        <Heading>{this.props.title}</Heading>
        <List>
          {this.props.items.map(item => (
            <Item
              key={item.url}
              onClick={() => this.onClick.bind(this)(item.url)}
            >
              <Link
                href="#"
                className={this.state.current === item.url ? 'active' : ''}
              >
                <Icon
                  src={
                    'https://s2.googleusercontent.com/s2/favicons?domain_url=' +
                    item.url
                  }
                />
                {item.title}
              </Link>
            </Item>
          ))}
        </List>
      </Menu>
    );
  }
}

Sidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string
    })
  ),
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool,
  title: PropTypes.string
};

Sidebar.defaultProps = {
  items: [],
  open: true,
  title: 'News'
};

export default Sidebar;
