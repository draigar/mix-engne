import React from 'react';
import { Upload } from 'antd';
import FeatherIcon from 'feather-icons-react';

import { ProfileAuthorBox } from './style';
import { Cards } from '@/components/cards/frame/cards-frame';
import Heading from '@/components/heading/heading';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { functions } from '@/helpers';
import { authStore } from '@/store';
import Image from 'next/image';

export const AuthorBox = () => {
    const path = '/d/user/profile';

  const userD = authStore.user;

  const userAvatar = functions.userImage(userD.username ?? '')

  return (
    <ProfileAuthorBox>
      <Cards headless>
        <div className="author-info">
          <figure>
          <Image alt={userD.username ?? ''} src={userAvatar} width={120} height={120}  />
            {/* <Upload>
              <Link href="#">
                <FeatherIcon icon="camera" size={16} />
              </Link>
            </Upload> */}
          </figure>
          <figcaption>
            <div className="info">
              <Heading as="h4">{userD.profile?.first_name} {userD.profile?.last_name}</Heading>
              <p>@{userD.username}</p>
            </div>
          </figcaption>
        </div>
        <nav className="settings-menmulist">
          <ul>
            <li>
              <Link href={`${path}/`}>
                <FeatherIcon icon="user" size={14} />
                Edit Profile
              </Link>
            </li>
            <li>
              <Link href={`${path}/account`}>
                <FeatherIcon icon="settings" size={14} />
                Account Settings
              </Link>
            </li>
            <li>
              <Link href={`${path}/password`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-key"
                >
                  <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                </svg>
                Change Password
              </Link>
            </li>
            {/* <li>
              <Link href={`${path}/social`}>
                <FeatherIcon icon="users" size={14} />
                Social Profile
              </Link>
            </li>
            <li>
              <Link href={`${path}/notification`}>
                <FeatherIcon icon="bell" size={14} />
                Notification
              </Link>
            </li> */}
          </ul>
        </nav>
      </Cards>
    </ProfileAuthorBox>
  );
}

AuthorBox.propTypes = {};
