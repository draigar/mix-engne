import React, { useCallback, useLayoutEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Link from 'next/link';
import { TopMenuStyle } from './style';
import { usePathname } from 'next/navigation';

function TopMenu() {
  const pathname = usePathname;
  const path = pathname();

  const settings = useCallback(() => {
    const active: any = document.querySelector('.strikingDash-top-menu a.active');
    const activeDefault = () => {
      const megaMenu = active.closest('.megaMenu-wrapper');
      const hasSubMenuLeft = active.closest('.has-subMenu-left');
      if (!megaMenu) {
        active.closest('ul').previousSibling.classList.add('active');
        if (hasSubMenuLeft) hasSubMenuLeft.closest('ul').previousSibling.classList.add('active');
      } else {
        active.closest('.megaMenu-wrapper').previousSibling.classList.add('active');
      }
    };
    typeof window !== "undefined" && window.addEventListener('load', active && activeDefault);
    return () => typeof window !== "undefined" && window.removeEventListener('load', activeDefault);
  }, [])

  useLayoutEffect(() => {
    settings();
  }, [settings]);

  const addParentActive = (event: any) => {
    document.querySelectorAll('.parent').forEach((element) => {
      element.classList.remove('active');
    });

    const hasSubMenuLeft = event.currentTarget.closest('.has-subMenu-left');
    const megaMenu = event.currentTarget.closest('.megaMenu-wrapper');
    if (!megaMenu) {
      event.currentTarget.closest('ul').previousSibling.classList.add('active');
      if (hasSubMenuLeft) hasSubMenuLeft.closest('ul').previousSibling.classList.add('active');
    } else {
      event.currentTarget.closest('.megaMenu-wrapper').previousSibling.classList.add('active');
    }
  };
  return (
    <TopMenuStyle>
      <div className="strikingDash-top-menu">
        <ul>
          <ul>
            <li>
              <Link href={`${path}/social`} onClick={addParentActive}>
                Dashboard
              </Link>
            </li>
          </ul>
        </ul>
      </div>
    </TopMenuStyle>
  );
}

export default TopMenu;
