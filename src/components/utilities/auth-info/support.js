import React from 'react';
import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import { NestedDropdwon } from './auth-info-style';
import { Popover } from '../../popup/popup';
import Heading from '../../heading/heading';

function Support() {
  const content = (
    <NestedDropdwon>
      <div className="support-dropdwon">
        <ul>
          <Heading as="h5">Documentation</Heading>
          <li>
            <Link href="#">How to customize admin</Link>
          </li>
          <li>
            <Link href="#">How to use</Link>
          </li>
          <li>
            <Link href="#">The relation of vertical spacing</Link>
          </li>
        </ul>
        <ul>
          <Heading as="h5">Payments</Heading>
          <li>
            <Link href="#">How to customize admin</Link>
          </li>
          <li>
            <Link href="#">How to use</Link>
          </li>
        </ul>
        <ul>
          <Heading as="h5">Content Planner</Heading>
          <li>
            <Link href="#">How to customize admin</Link>
          </li>
          <li>
            <Link href="#">How to use</Link>
          </li>
        </ul>
      </div>
    </NestedDropdwon>
  );

  return (
    <div className="support">
      <Popover placement="bottomLeft" content={content} action="click">
        <Link href="#" className="head-example">
          <FeatherIcon icon="help-circle" size={20} />
        </Link>
      </Popover>
    </div>
  );
}

export default Support;
