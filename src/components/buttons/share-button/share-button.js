import React from 'react';
import Link from 'next/link';
import FeatherIcon from 'feather-icons-react';
import { Popover } from '../../popup/popup';
import { Button } from '../buttons';

const ShareButtonPageHeader = () => {
  const content = (
    <>
      <Link href="#">
        <FeatherIcon size={16} icon="facebook" />
        <span>Facebook</span>
      </Link>
      <Link href="#">
        <FeatherIcon size={16} icon="twitter" />
        <span>Twitter</span>
      </Link>
      <Link href="#">
        <FeatherIcon size={16} icon="rss" />
        <span>Feed</span>
      </Link>
      <Link href="#">
        <FeatherIcon size={16} icon="linkedin" />
        <span>Linkedin</span>
      </Link>
      <Link href="#">
        <FeatherIcon size={16} icon="instagram" />
        <span>Instagram</span>
      </Link>
    </>
  );
  return (
    <Popover placement="bottomLeft" content={content} trigger="click">
      <Button size="medium" type="white" key="3">
        <FeatherIcon icon="share-2" size={14} />
        Share
      </Button>
    </Popover>
  );
};

export { ShareButtonPageHeader };
