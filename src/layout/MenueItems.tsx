'use client'
import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import { useRouteMatch } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import { usePathname, useRouter } from 'next/navigation';
import { AdminMenu, UserMenu, EngineerMenu } from './menu';
import { authStore } from '@/store';

const MenuItems = ({ darkMode, toggleCollapsed, topMenu, rtl }: any) => {
  const pathname = usePathname;
  const pathName = pathname();
  const pathArray = pathName.split(pathName);
  const mainPath = pathArray[1];
  const mainPathSplit = mainPath.split('/');

  const { SubMenu } = Menu;

  const userD = authStore.user;

  const menu = userD.role === 1 ? AdminMenu : userD.role === 3 ? UserMenu : EngineerMenu;

  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const onOpenChange = (keys: any) => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = (item: any) => {
    if (item.keyPath.length === 1) setOpenKeys([]);
  };

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || typeof window !== "undefined" && window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      theme={darkMode && 'dark'}
      // // eslint-disable-next-line no-nested-ternary
      // defaultSelectedKeys={
      //   !topMenu
      //     ? [
      //       `${mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]
      //       }`,
      //     ]
      //     : []
      // }
      // defaultOpenKeys={}
      activeKey='dashboard'
      overflowedIndicator={<FeatherIcon icon="more-vertical" />}
    // openKeys={openKeys}
    >
      {menu.map((el, i) => (
        el.children ? (
          <SubMenu key={el.key} icon={!topMenu && <FeatherIcon icon={el.icon} />} title={el.title}>
            {
              el.children.map((tl, i) => (
                <Menu.Item key={tl.key}>
                  <Link onClick={toggleCollapsed} href={`${tl.url}`}>
                    {tl.title}
                  </Link>
                </Menu.Item>
              ))
            }
          </SubMenu>
        ) : (
          <Menu.Item key="home" icon={!topMenu && <FeatherIcon icon={el.icon} />}>
            <Link onClick={toggleCollapsed} href={`${el.url}`}>
              {el.title}
            </Link>
          </Menu.Item>
        )
      ))}
    </Menu>
  );
}

MenuItems.propTypes = {
  darkMode: propTypes.bool,
  topMenu: propTypes.bool,
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
