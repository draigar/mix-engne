'use client'
import React, { Suspense, useEffect, useState } from 'react';
import { Row, Col, Skeleton } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { PageHeader } from '@/components/page-headers/page-headers';
import { Cards } from '@/components/cards/frame/cards-frame';
import { Button } from '@/components/buttons/buttons';
import { Main } from '../styled';
import { CalendarButtonPageHeader } from '@/components/buttons/calendar-button/calendar-button';
import { CardBarChart2, OverviewSalesCard } from '../style';
import Image from 'next/image';
import { authStore } from '@/store';
import CardGroup from '../business/business/CardGroup';
import { UserHomeGroup } from './components/userHomeGroup';
import { Overview } from './components/overview';
import { UserProjectData } from './components/userProjectsData';


const UserDashboard = () => {

    const userD = authStore.user;

    return (
        <>
            <PageHeader
                ghost
                title={`Welcome ${userD.profile?.first_name} ${userD.profile?.last_name}`}
                buttons={[
                    <div key="1" className="page-header-actions">
                        <Button size="large" type="primary">
                            <FeatherIcon icon="plus" size={14} />
                            Add New
                        </Button>
                    </div>,
                ]}
            />
            <Main >
                <Row gutter={25}>
                    {/* <Col xxl={8} xl={10} lg={12} xs={24}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <Overview />
                        </Suspense>
                    </Col> */}
                    <Col>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <UserProjectData projectsData={[]} />
                        </Suspense>
                    </Col>
                </Row>
            </Main>
        </>
    )
}

export default UserDashboard