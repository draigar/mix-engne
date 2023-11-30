import React, { useState } from 'react';
import { Avatar } from 'antd';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import FeatherIcon from 'feather-icons-react';
import { InfoWraper, NavAuth, UserDropDwon } from './auth-info-style';
import Message from './message';
import Notification from './notification';
import Settings from './settings';
import Support from './support';
import { Popover } from '../../popup/popup';
import { Dropdown } from '../../dropdown/dropdown';
import { logOut } from '../../../redux/authentication/actionCreator';
import Heading from '../../heading/heading';
import { authStore } from '@/store';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

function AuthInfo() {
  const [state, setState] = useState({
    flag: 'english',
  });
  const { flag } = state;

  const userD = authStore.user;

  const router = useRouter()

  const SignOut = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    Cookies.set('Auth', {})
    authStore.logout()
    router.push('/auth/login')
  };

  const userContent = (
    <UserDropDwon>
      <div className="user-dropdwon">
        <figure className="user-dropdwon__info">
          <img src="/static/img/avatar/chat-auth.png" alt="" />
          <figcaption>
            <Heading as="h5">{userD.first_name} {userD.last_name}</Heading>
            <p>UI Expert</p>
          </figcaption>
        </figure>
        <ul className="user-dropdwon__links">
          <li>
            <Link href="#">
              <FeatherIcon icon="user" /> Profile
            </Link>
          </li>
          <li>
            <Link href="#">
              <FeatherIcon icon="settings" /> Settings
            </Link>
          </li>
          <li>
            <Link href="#">
              <FeatherIcon icon="dollar-sign" /> Billing
            </Link>
          </li>
          <li>
            <Link href="#">
              <FeatherIcon icon="users" /> Activity
            </Link>
          </li>
          <li>
            <Link href="#">
              <FeatherIcon icon="bell" /> Help
            </Link>
          </li>
        </ul>
        <Link className="user-dropdwon__bottomAction" onClick={SignOut} href="#">
          <FeatherIcon icon="log-out" /> Sign Out
        </Link>
      </div>
    </UserDropDwon>
  );

  const onFlagChangeHandle = (value: string) => {
    setState({
      ...state,
      flag: value,
    });
  };

  const country = (
    <NavAuth>
      <Link onClick={() => onFlagChangeHandle('english')} href="#">
        <img src="/static/img/flag/english.png" alt="" />
        <span>English</span>
      </Link>
      <Link onClick={() => onFlagChangeHandle('germany')} href="#">
        <img src="/static/img/flag/germany.png" alt="" />
        <span>Germany</span>
      </Link>
      <Link onClick={() => onFlagChangeHandle('spain')} href="#">
        <img src="/static/img/flag/spain.png" alt="" />
        <span>Spain</span>
      </Link>
      <Link onClick={() => onFlagChangeHandle('turky')} href="#">
        <img src="/static/img/flag/turky.png" alt="" />
        <span>Turky</span>
      </Link>
    </NavAuth>
  );

  return (
    <InfoWraper>
      <Message />
      <Notification />

      <Settings />
      <Support />
      <div className="nav-author">
        <Dropdown placement="bottomRight" content={country}>
          <Link href="#" className="head-example">
            <img src={`/static/img/flag/${flag}.png`} alt="" />
          </Link>
        </Dropdown>
      </div>

      <div className="nav-author">
        <Popover placement="bottomRight" content={userContent} action="click">
          <Link href="#" className="head-example">
            <Avatar src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png" />
          </Link>
        </Popover>
      </div>
    </InfoWraper>
  );
}

export default AuthInfo;
