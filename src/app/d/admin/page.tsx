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
import { AverageSalesRevenueAdmin } from './admin/AverageSalesRevenueAdmin';


const Dashboard = () => {

    return (
        <>
            <PageHeader
                ghost
                title="Dashboard"
                buttons={[
                    <div key="6" className="page-header-actions">
                        <CalendarButtonPageHeader key="1" />
                        <Button size="medium" type="white">
                            <FeatherIcon icon="download" size={14} />
                            Export
                        </Button>
                        <Button size="medium" key="4" type="primary">
                            <FeatherIcon icon="plus" size={14} />
                            Create new Project
                        </Button>
                    </div>,
                ]}
            />
            <Main className="">
                <Row gutter={25}>
                    <Col lg={8} xs={24}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <Cards headless>
                                <OverviewSalesCard>
                                    <div className="icon-box box-secondary">
                                        <Image src='/static/img/icon/New Customer.svg' alt='' width={40} height={60} />
                                    </div>
                                    <div className="card-chunk">
                                        <CardBarChart2>
                                            <h2>7,461</h2>
                                            <span>New Customer</span>
                                            <p>
                                                <span className="growth-upward">
                                                    <FeatherIcon icon="arrow-up" /> 25%
                                                </span>
                                                <span>Since last week</span>
                                            </p>
                                        </CardBarChart2>
                                    </div>
                                </OverviewSalesCard>
                            </Cards>
                        </Suspense>

                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <Cards headless>
                                <OverviewSalesCard>
                                    <div className="icon-box box-primary">
                                        <Image src='/static/img/icon/SalesRevenue.svg' alt='' width={40} height={60} />
                                    </div>
                                    <div className="card-chunk">
                                        <CardBarChart2>
                                            <h2>$28,947</h2>
                                            <span>Sales Revenue</span>
                                            <p>
                                                <span className="growth-downward">
                                                    <FeatherIcon icon="arrow-down" /> 25%
                                                </span>
                                                <span>Since last week</span>
                                            </p>
                                        </CardBarChart2>
                                    </div>
                                </OverviewSalesCard>
                            </Cards>
                        </Suspense>

                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <Cards headless>
                                <OverviewSalesCard>
                                    <div className="icon-box box-success">
                                        <Image src='/static/img/icon/Profit.svg' alt='' width={40} height={60} />
                                    </div>
                                    <div className="card-chunk">
                                        <CardBarChart2>
                                            <h2>$3,241</h2>
                                            <span>Profit</span>
                                            <p>
                                                <span className="growth-upward">
                                                    <FeatherIcon icon="arrow-up" /> 25%
                                                </span>
                                                <span>Since last week</span>
                                            </p>
                                        </CardBarChart2>
                                    </div>
                                </OverviewSalesCard>
                            </Cards>
                        </Suspense>

                    </Col>
                    <Col lg={16} xs={24}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton active />
                                </Cards>
                            }
                        >
                            <AverageSalesRevenueAdmin />
                        </Suspense>
                    </Col>
                </Row>
            </Main>
        </>
    )
}

export default Dashboard