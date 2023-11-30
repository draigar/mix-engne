import React from 'react';
import Link from 'next/link';
import FeatherIcon from 'feather-icons-react';
import { Popover } from '../../popup/popup';
import { Button } from '../buttons';

const ExportButtonPageHeader = () => {
  const content = (
    <>
      <Link href="#">
        <FeatherIcon size={16} icon="printer" />
        <span>Printer</span>
      </Link>
      <Link href="#">
        <FeatherIcon size={16} icon="book-open" />
        <span>PDF</span>
      </Link>
      <Link href="#">
        <FeatherIcon size={16} icon="file-text" />
        <span>Google Sheets</span>
      </Link>
      <Link href="#">
        <FeatherIcon size={16} icon="x" />
        <span>Excel (XLSX)</span>
      </Link>
      <Link href="#">
        <FeatherIcon size={16} icon="file" />
        <span>CSV</span>
      </Link>
    </>
  );
  return (
    <Popover placement="bottomLeft" content={content} trigger="click">
      <Button size="medium" type="white">
        <FeatherIcon icon="download" size={14} />
        Export
      </Button>
    </Popover>
  );
};

export { ExportButtonPageHeader };
