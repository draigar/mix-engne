'use client'
import { PageHeader } from "@/components/page-headers/page-headers";
import { Main } from "../../styled";
import { Col, Row, Skeleton } from "antd";
import { Suspense } from "react";
import { Cards } from "@/components/cards/frame/cards-frame";
import { AuthorBox } from "./authorBox";
import { SettingWrapper } from "./style";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <PageHeader
                ghost
                title="Profile Settings"
            />
            <Main className="">
                <Row gutter={25}>
                    <Col xxl={6} lg={8} md={10} xs={24}>
                        <Suspense
                            fallback={
                                <Cards headless>
                                    <Skeleton avatar />
                                </Cards>
                            }
                        >
                            <AuthorBox />
                        </Suspense>
                    </Col>
                    <Col xxl={18} lg={16} md={14} xs={24}>
                        <SettingWrapper>
                            <Suspense
                                fallback={
                                    <Cards headless>
                                        <Skeleton paragraph={{ rows: 20 }} />
                                    </Cards>
                                }
                            >
                                {children}
                            </Suspense>
                        </SettingWrapper>
                    </Col>
                </Row>
            </Main>
        </div>
    )
}

export default ProfileLayout;