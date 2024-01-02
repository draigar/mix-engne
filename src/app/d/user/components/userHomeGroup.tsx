'use client'
import React from 'react';
import { Row, Col, Progress } from 'antd';
import { RatioCard } from '../../style';
import { Cards } from '@/components/cards/frame/cards-frame';
import Heading from '@/components/heading/heading';

export const UserHomeGroup = () => {
    return (
        <Row gutter={25}>
            <Col xxl={6} md={12} sm={12} xs={24}>
                <RatioCard>
                    <Cards headless title="Quick Ratio">
                        <div className="ratio-content">
                            <Heading as="h1">1.8</Heading>
                            <Progress percent={80} className="progress-success" />
                            <p>
                                <strong>1 or higher</strong> quick ratio target
                            </p>
                        </div>
                    </Cards>
                </RatioCard>
            </Col>
            <Col xxl={6} md={12} sm={12} xs={24}>
                <RatioCard>
                    <Cards headless title="Quick Ratio">
                        <div className="ratio-content">
                            <Heading as="h1">1.8</Heading>
                            <Progress percent={80} className="progress-success" />
                            <p>
                                <strong>1 or higher</strong> quick ratio target
                            </p>
                        </div>
                    </Cards>
                </RatioCard>
            </Col>
            <Col xxl={6} md={12} sm={12} xs={24}>
                <RatioCard>
                    <Cards headless title="Quick Ratio">
                        <div className="ratio-content">
                            <Heading as="h1">1.8</Heading>
                            <Progress percent={80} className="progress-success" />
                            <p>
                                <strong>1 or higher</strong> quick ratio target
                            </p>
                        </div>
                    </Cards>
                </RatioCard>
            </Col>
            <Col xxl={6} md={12} sm={12} xs={24}>
                <RatioCard>
                    <Cards headless title="Quick Ratio">
                        <div className="ratio-content">
                            <Heading as="h1">1.8</Heading>
                            <Progress percent={80} className="progress-success" />
                            <p>
                                <strong>1 or higher</strong> quick ratio target
                            </p>
                        </div>
                    </Cards>
                </RatioCard>
            </Col>
        </Row>
    )
}