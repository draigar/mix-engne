import React, { useEffect, useState } from 'react';
import { Input, Row, Col } from 'antd';
import Link from 'next/link';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Div } from './header-search-style';
import { headerSearchAction } from '../../redux/headerSearch/actionCreator';
import { Popover } from '../popup/popup';
import { layoutMode } from '@/types';
import * as con from '@/store';
import { observer } from 'mobx-react';

const HeaderSearch = observer(() => {
  const [appLayoutMode, setAppLayoutMode] = useState<Partial<layoutMode>>({})
  const { rtl, darkMode } = appLayoutMode;
  // const searchData: any = useSelector((state: any) => state.headerSearchData);
  const searchData: [] = []

  const search = (e: any) => {
    const disp: any = headerSearchAction(e.target.value);
  };

  useEffect(() => {
    const _config = con.config;
    const appLayoutMode: any = _config.layoutMode
    setAppLayoutMode(appLayoutMode);
  }, [])

  const content = (
    <div>
      {searchData.length ? (
        searchData.map((group: any) => {
          const { title, count, id } = group;
          return (
            <Link key={id} href="#">
              {title}
              <span className="certain-search-item-count">{count} people</span>
            </Link>
          );
        })
      ) : (
        <Link href="#">Data Not found....</Link>
      )}
    </div>
  );

  return (
    <>
      <Div className="certain-category-search-wrapper" style={{ width: '100%' }} darkMode={darkMode}>
        <Row className="ant-row-middle">
          <Col md={2} xs={1} className={rtl ? 'text-left' : 'text-right'}>
            <span className="certain-category-icon">
              <FeatherIcon icon="search" size={16} />
            </span>
          </Col>
          <Col md={22} xs={23}>
            <Popover
              placement={!rtl ? 'bottomLeft' : 'bottomRight'}
              content={content}
              title="Search List"
              action="focus"
            >
              <Input placeholder="Search..." onInput={search} />
            </Popover>
          </Col>
        </Row>
      </Div>
    </>
  );
});

export default HeaderSearch;
