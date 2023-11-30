'use client'
import { PageHeader } from "@/components/page-headers/page-headers";
import { Main } from "../../styled";
// import { Button } from "@/components/buttons/buttons";
import { Button, Col, Row, Select, Spin } from "antd";
import FeatherIcon from 'feather-icons-react';
import { ProjectSortingComponent } from "./components/projectSorting";
import { Suspense, useState } from "react";
import { ProjectsContent } from "./components/projectsContent";
import { CreateProjectComponent } from "./components/createProject";

const Projects = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        console.log('clicked modal')
        setModalVisible(true)
    };

    const onCancel = () => {
        setModalVisible(false);
    };

    return (
        <>
            <PageHeader
                ghost
                title="Projects"
                subTitle={<>12 Running Projects</>}
                buttons={[
                    <Button type="primary" onClick={showModal} size="large" key="1" style={{ display: 'flex', alignItems: 'center' }}>
                        <FeatherIcon icon="plus" size={14} />
                        Create new Project
                    </Button>
                    // <Button size="medium" key="4" type="primary">
                    //     <FeatherIcon icon="plus" size={14} />
                    //     Create new Project
                    // </Button>
                ]}
            />
            <Main className="">
                <Row gutter={25}>
                    <Col xs={24}>
                        <ProjectSortingComponent />
                        <div>
                            <Suspense
                                fallback={
                                    <div className="spin">
                                        <Spin />
                                    </div>
                                }
                            >
                                <ProjectsContent />
                            </Suspense>
                        </div>
                    </Col>
                </Row>
                <CreateProjectComponent onCancel={() => onCancel()} visible={modalVisible} closeModal={() => onCancel()} />
            </Main>
        </>
    )
}

export default Projects;