import { useState, useEffect } from "react";
import { ProjectList, ProjectListAssignees, ProjectListTitle, ProjectPagination } from "../style";
import Heading from "@/components/heading/heading";
import Link from "next/link";
import { Col, Pagination, Progress, Row, Table, Tag } from "antd";
import { Dropdown } from "@/components/dropdown/dropdown";
import FeatherIcon from 'feather-icons-react';
import { Cards } from "@/components/cards/frame/cards-frame";

import projectData from '@/demoData/projectData.json';
import { projectType } from "@/types/projects";
import { useProjects } from "@/hooks";

import dayjs from 'dayjs';

interface ProjectsContentProps {
    projectsData: projectType[]
}

export const ProjectsContent = (props: ProjectsContentProps) => {
    const {projectsData} = props;

    const onShowSizeChange = (current: number, pageSize: number) => {
        
    };

    const onHandleChange = (current: number, pageSize: number) => {
        // You can create pagination in here
    };

    const dataSource: any = [];

    if (projectsData.length) {
        projectsData.map((value) => {
            const { id, title, status, artist_name, endDate, startDate, link, note, services, engineer, createdAt, updatedAt } = value;
            return dataSource.push({
                key: id,
                project: (
                    <ProjectListTitle>
                        <Heading as="h4">
                            <Link href={`/admin/project/projectDetails/${id}`}>{title}</Link>
                        </Heading>

                        {services && services.map((el, i) => (
                            <p key={i}>{el.title}</p>
                        ))}
                    </ProjectListTitle>
                ),
                artist_name: <p>{artist_name}</p>,
                startDate: <span className="date-started">{dayjs(startDate).format('DD/MM/YYYY')}</span>,
                deadline: <span className="date-finished">{dayjs(endDate).format('DD/MM/YYYY')}</span>,
                assigned: (
                    <ProjectListAssignees>
                        <ul>
                            <li>
                                <p>{engineer.username}</p>
                                {/* <img src="@/static/img/users/1.png" alt="" /> */}
                            </li>
                        </ul>
                    </ProjectListAssignees>
                ),
                link: <Link href={link} target="_blank">{link}</Link>,
                note: <p className="truncate">{note}</p>,
                status: <Tag className={status === 0 ? 'progress' : status === 1 ? 'early' : status === 2 ? 'late' : 'complete'}>
                    {status === 0 ? 'Disabled' : status === 1 ? 'Active' : status === 2 ? 'In Progress' : 'Completed'}
                </Tag>,
                action: (
                    <Dropdown
                        className="wide-dropdwon"
                        content={
                            <>
                                <Link href="#">View</Link>
                                <Link href="#">Edit</Link>
                                <Link href="#">Delete</Link>
                            </>
                        }
                    >
                        <Link href="#">
                            <FeatherIcon icon="more-horizontal" size={18} />
                        </Link>
                    </Dropdown>
                ),
            });
        })
    }

    const columns = [
        {
            title: 'Project Name / Services',
            dataIndex: 'project',
            key: 'project',
        },
        {
            title: 'Artist Name',
            dataIndex: 'artist_name',
            key: 'artist',
        },
        {
            title: 'Start Date',
            dataIndex: 'startDate',
            key: 'startDate',
        },
        {
            title: 'Deadline',
            dataIndex: 'deadline',
            key: 'deadline',
        },
        {
            title: 'Assigned To',
            dataIndex: 'assigned',
            key: 'assigned',
        },
        {
            title: 'Link',
            dataIndex: 'link',
            key: 'link',
        },
        {
            title: 'Note',
            dataIndex: 'note',
            key: 'note',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
        },
    ];

    return (
        <Row gutter={25}>
            <Col xs={24}>
                <Cards headless>
                    <ProjectList>
                        <div className="table-responsive">
                            <Table pagination={false} dataSource={dataSource} columns={columns} />
                        </div>
                    </ProjectList>
                </Cards>
            </Col>
            <Col xs={24} className="pb-30">
                <ProjectPagination>
                    {projectsData.length ? (
                        <Pagination
                            onChange={onHandleChange}
                            showSizeChanger
                            onShowSizeChange={onShowSizeChange}
                            pageSize={10}
                            defaultCurrent={1}
                            total={40}
                        />
                    ) : null}
                </ProjectPagination>
            </Col>
        </Row>
    );
}