'use client'
import React from 'react';
import { Row, Col } from 'antd';
import { Aside, BoxContent, Content, } from './style';
import Heading from '@/components/heading/heading';
import './style'
import 'antd/dist/antd';
import Image from 'next/image';

export default function AuthLayout({ children }: any) {
    return (
        <Row>
            <Aside style={{ backgroundColor: '#381E7E' }}>
                <div className="auth-side-content">
                    <Image src="/static/img/auth/topShape.png" width={400} height={200} alt='' className='topShape' />
                    <Image src="/static/img/auth/bottomShape.png" width={400} height={200} alt='' className='bottomShape' />
                    {/* <Image src="/INTERTEX_LOGO.png" width={150} height={80} alt='' /> */}
                </div>
                <BoxContent>
                    {children}
                </BoxContent>
            </Aside>
        </Row>
    )
}