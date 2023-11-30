import React, { useEffect, useState } from 'react';
import { Badge } from 'antd';
import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import { useSelector } from 'react-redux';
import { AtbdTopDropdwon } from './auth-info-style';
import { Popover } from '../../popup/popup';
import Heading from '../../heading/heading';
import { layoutMode } from '@/types';
import * as con from '@/store';
import { observer } from "mobx-react";
import { CSSProperties } from 'styled-components';

function NotificationBox() {
  const [appLayoutMode, setAppLayoutMode] = useState<Partial<layoutMode>>({})
  const { rtl } = appLayoutMode;

  const _PropTypes: any = PropTypes;

  useEffect(() => {
    const _config = con.config;
    const appLayoutMode: any = _config.layoutMode
    setAppLayoutMode(appLayoutMode);
  }, [])

  function renderThumb({ style, ...props }: any) {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: '#F1F2F6',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  }

  const renderTrackVertical = () => {
    const thumbStyle: CSSProperties = {
      position: 'absolute',
      width: '6px',
      transition: 'opacity 200ms ease 0s',
      opacity: 0,
      [rtl ? 'left' : 'right']: '2px',
      bottom: '2px',
      top: '2px',
      borderRadius: '3px',
    };
    return <div className="hello" style={thumbStyle} />;
  };

  function renderView({ style, ...props }: any) {
    const customStyle = {
      marginRight: rtl && 'auto',
      [rtl ? 'marginLeft' : 'marginRight']: '-17px',
    };
    return <div {...props} style={{ ...style, ...customStyle }} />;
  }

  renderThumb.propTypes = {
    style: PropTypes.shape(_PropTypes.object),
  };

  renderView.propTypes = {
    style: PropTypes.shape(_PropTypes.object),
  };

  const content = (
    <AtbdTopDropdwon className="atbd-top-dropdwon">
      <Heading as="h5" className="atbd-top-dropdwon__title">
        <span className="title-text">Notifications</span>
        <Badge className="badge-success" count={3} />
      </Heading>
      <Scrollbars
        autoHeight
        autoHide
        renderThumbVertical={renderThumb}
        renderView={renderView}
        renderTrackVertical={renderTrackVertical}
      >
        <ul className="atbd-top-dropdwon__nav notification-list">
          <li>
            <Link href="#">
              <div className="atbd-top-dropdwon__content notifications">
                <div className="notification-icon bg-primary">
                  <FeatherIcon icon="hard-drive" />
                </div>
                <div className="notification-content d-flex">
                  <div className="notification-text">
                    <Heading as="h5">
                      <span>James</span> sent you a message
                    </Heading>
                    <p>5 hours ago</p>
                  </div>
                  <div className="notification-status">
                    <Badge dot />
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className="atbd-top-dropdwon__content notifications">
                <div className="notification-icon bg-secondary">
                  <FeatherIcon icon="share" />
                </div>
                <div className="notification-content d-flex">
                  <div className="notification-text">
                    <Heading as="h5">
                      <span>James</span> sent you a message
                    </Heading>
                    <p>5 hours ago</p>
                  </div>

                  <div className="notification-status">
                    <Badge dot />
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className="atbd-top-dropdwon__content notifications">
                <div className="notification-icon bg-secondary">
                  <FeatherIcon icon="share" />
                </div>
                <div className="notification-content d-flex">
                  <div className="notification-text">
                    <Heading as="h5">
                      <span>James</span> sent you a message
                    </Heading>
                    <p>5 hours ago</p>
                  </div>

                  <div className="notification-status">
                    <Badge dot />
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className="atbd-top-dropdwon__content notifications">
                <div className="notification-icon bg-secondary">
                  <FeatherIcon icon="share" />
                </div>
                <div className="notification-content d-flex">
                  <div className="notification-text">
                    <Heading as="h5">
                      <span>James</span> sent you a message
                    </Heading>
                    <p>5 hours ago</p>
                  </div>

                  <div className="notification-status">
                    <Badge dot />
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <div className="atbd-top-dropdwon__content notifications">
                <div className="notification-icon bg-secondary">
                  <FeatherIcon icon="share" />
                </div>
                <div className="notification-content d-flex">
                  <div className="notification-text">
                    <Heading as="h5">
                      <span>James</span> sent you a message
                    </Heading>
                    <p>5 hours ago</p>
                  </div>

                  <div className="notification-status">
                    <Badge dot />
                  </div>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </Scrollbars>
      <Link className="btn-seeAll" href="#">
        See all incoming activity
      </Link>
    </AtbdTopDropdwon>
  );

  return (
    <div className="notification">
      <Popover placement="bottomLeft" content={content} action="click">
        <Badge dot offset={[-8, -5]}>
          <Link href="#" className="head-example">
            <FeatherIcon icon="bell" size={20} />
          </Link>
        </Badge>
      </Popover>
    </div>
  );
}

export default observer(NotificationBox);
