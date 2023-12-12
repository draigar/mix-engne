import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Col, Row, DatePicker, Button } from 'antd';
import propTypes from 'prop-types';
// import { Button } from '@/components/buttons/buttons';
import { Modal } from '@/components/modals/antd-modals';
import { CheckboxGroup } from '@/components/checkbox/checkbox';
import { BasicFormWrapper } from '../../../styled';
import { useAdmin, useProjects, useServices } from '@/hooks';
import { createProject } from '@/types/projects';
import dayjs from 'dayjs';
import { OpenNotification } from '@/helpers';
import { apiResponse } from '@/types';

const { Option } = Select;
const dateFormat = 'MM/DD/YYYY';

interface CreateProjectComponentProps {
    visible: boolean;
    onCancel: any;
    closeModal: any;
}

export const CreateProjectComponent = (props: CreateProjectComponentProps) => {
    const { onCancel, visible, closeModal } = props;

    const { serviceData } = useServices({ enableFetchServices: true });
    const { engineersData } = useAdmin({ enableFetchEngineers: true })
    const {createProject} = useProjects();

    const [form] = Form.useForm();

    const [state, setState] = useState({
        visible: false,
        modalType: 'primary',
        checked: [],
    });

    const handleOk = async (values: any) => {
        const payload: createProject = {
            title: values.title,
            artist_name: values.artist,
            link: values.link,
            note: values.note,
            startDate: values.start,
            endDate: values.end,
            engineerId: parseInt(values.engineer, 10),
            serviceIds: values.services,
        }
        const stDate = dayjs(payload.startDate).format('DD/MM/YYYY')
        const enDate = dayjs(payload.endDate).format('DD/MM/YYYY')
        const cuDate = dayjs().format('DD/MM/YYYY')
        if (stDate > enDate) {
            OpenNotification({
                type: 'warning',
                title: 'Project Creation',
                description: 'Start Date cannot be greater than End Date'
            })
            alert('Start Date cannot be greater than End Date')
        } else if (stDate < cuDate) {
            OpenNotification({
                type: 'warning',
                title: 'Project Creation',
                description: 'Start Date cannot be less than Today\'s Date'
            })
            alert('Start Date cannot be less than Today\'s Date')
        } else if (enDate < cuDate) {
            OpenNotification({
                type: 'warning',
                title: 'Project Creation',
                description: 'End Date cannot be less than Today\'s Date'
            })
            alert('End Date cannot be less than Today\'s Date')
        } else if (enDate < stDate && enDate === stDate) {
            OpenNotification({
                type: 'warning',
                title: 'Project Creation',
                description: 'End Date must not be equal or less than Start Date'
            })
            alert('End Date must not be equal or less than Start Date')
        } else {
            createProject.mutate(payload, {
                onSuccess: (val: apiResponse) => {
                    if (val.status) {
                        onCancel();
                        OpenNotification({
                            type: 'success',
                            title: 'Project Creation',
                            description: 'Your project has been created'
                        })
                    } else {
                        OpenNotification({
                            type: 'error',
                            title: 'Project Creation',
                            description: val.message
                        })
                    }
                }
            })
        }
    };

    const handleCancel = () => {
        onCancel();
    };

    const options = [
        {
            label: 'Active',
            value: '1',
        },
        {
            label: 'In Progress',
            value: '2',
        },
        {
            label: 'Complete',
            value: '3',
        },
        {
            label: 'Disabled',
            value: '0',
        },
    ];

    return (
        <Modal
            type={state.modalType}
            title="Create Project"
            open={visible}
            footer={[
                <div key="1" className="project-modal-footer">
                    {/* <Button className="btn-signin" htmlType="submit" type="primary" size="large">
                        Add New Project
                    </Button> */}
                    {/* <Button size="default" type="primary" key="submit" onClick={handleOk}>
                        Add New Project
                    </Button>
                    <Button size="default" type="white" key="back" outlined onClick={handleCancel}>
                        Cancel
                    </Button> */}
                </div>,
            ]}
            onCancel={handleCancel}
        >
            <div className="project-modal">
                <BasicFormWrapper>
                    <Form form={form} name="createProject" onFinish={handleOk}>
                        <Form.Item name="title" label="Title" required>
                            <Input placeholder="Title" size='large' />
                        </Form.Item>
                        <Form.Item name="artist" label="Artist Name" style={{ marginTop: 60 }} required>
                            <Input placeholder="Artist Name" size='large' />
                        </Form.Item>
                        <Form.Item name="services" initialValue={[]} label="Select Service" style={{ marginTop: 60 }} required>
                            <Select style={{ width: '100%' }} mode="multiple" className="sDash_fullwidth-select">
                                {serviceData.map((el, i) => (
                                    <Option value={el.id} key={i}>{el.title}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item name="note" label="Project Note" style={{ marginTop: 60 }} required>
                            <Input.TextArea rows={4} placeholder="Project Note" />
                        </Form.Item>
                        <Form.Item name="link" label="Link" required style={{ marginTop: 120 }}>
                            <Input placeholder="Link" size='large' />
                        </Form.Item>
                        <Form.Item name="status" initialValue={'1'} label="Project Status" className='mb-30' style={{ marginTop: 60 }}>
                            <Select style={{ width: '100%' }}>
                                {options.map((el, i) => (
                                    <Option value={el.value} key={i}>{el.label}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                        {/* <Form.Item name="engineer" label="Assign an Engineer" style={{ marginTop: 80 }}>
                            <Input placeholder="Search Members" />
                        </Form.Item> */}
                        <Form.Item name="engineer" initialValue={'0'} label="Assign an Engineer" style={{ marginTop: 80, marginBottom: 80 }}>
                            <Select style={{ width: '100%' }}>
                                <Option value="0">Choose an Engineer</Option>
                                {engineersData.map((el, i) => (
                                    <Option value={el.id} key={i}>{el.username}</Option>
                                ))}
                            </Select>
                        </Form.Item>
                        {/* <div className="projects-members mb-30" style={{ border: 'solid 1px', marginTop: 50 }}>
                            <img style={{ width: '35px' }} src="@/static/img/users/1.png" alt="" />
                        </div> */}
                        <Row gutter={15} style={{ marginBottom: 80 }}>
                            <Col md={12}>
                                <Form.Item name="start" label="Start Date" required>
                                    <DatePicker placeholder="mm/dd/yyyy" format={dateFormat} />
                                </Form.Item>
                            </Col>
                            <Col md={12}>
                                <Form.Item name="end" label="End Date" required>
                                    <DatePicker placeholder="mm/dd/yyyy" format={dateFormat} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item style={{ marginBottom: 50 }}>
                            <Button className="btn-signin" htmlType="submit" type="primary" size="large">
                                Add New Project
                            </Button>
                            <Button htmlType="submit" type="dashed" size="large" style={{marginLeft: 10}}>
                                Cancel
                            </Button>
                        </Form.Item>
                    </Form>
                </BasicFormWrapper>
            </div>
        </Modal>
    )
}