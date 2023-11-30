'use client'
import React from 'react';
import { Row, Col } from 'antd';
import { Aside, Content } from './style';
import Heading from '@/components/heading/heading';
import './style'
import 'antd/dist/antd';
import Image from 'next/image';

export default function AuthLayout({children}: any) {
    return (
        <Row>
            <Col xxl={8} xl={9} lg={12} md={8} xs={24}>
                <Aside style={{backgroundColor: '#381E7E'}}>
                    <div className="auth-side-content">
                        <Image src="/static/img/auth/topShape.png" width={400} height={200} alt='' className='topShape' />
                        <Image src="/static/img/auth/bottomShape.png" width={400} height={200} alt='' className='bottomShape' />
                        <Content>
                            <Image src="/INTERTEX_LOGO.png" width={150} height={80} alt='' />
                            <br />
                            <br />
                            <Heading as="h1" style={{ color: 'white' }}>
                                Intertex E-commerce <br />
                                Platform
                            </Heading>
                            <Image src="/sect1.png" className="auth-content-figure" style={{ boxShadow: '0 2px 5px rgba(0,0,0, .4)', borderRadius: 8, marginTop: 20 }} alt='' width={600} height={typeof window !== "undefined" && window.innerWidth <= 990 ? 350 : 500} />
                        </Content>
                    </div>
                </Aside>
            </Col>
            <Col xxl={16} xl={15} lg={12} md={16} xs={24}>
                {children}
            </Col>
        </Row>
    )
}