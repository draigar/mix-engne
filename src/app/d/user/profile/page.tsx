'use client'
import { authStore } from '@/store';
import React, { useState } from 'react';
import { Row, Col, Form, Input, Select } from 'antd';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Button } from '../../../../components/buttons/buttons';
import { BasicFormWrapper, TagInput } from '../../styled';
import Heading from '../../../../components/heading/heading';
import { Tag } from '../../../../components/tags/tags';
import { GridStyle } from '@/components/GridStyled';
import { useUser } from '@/hooks';
import { apiResponse, errorResponse, updateProfile } from '@/types';
import { OpenNotification, functions } from '@/helpers';

const { Option } = Select;
const UserDashboard = () => {

    const userD = authStore.user;

    const [form] = Form.useForm();

    const {updateProfile, fetchUserDetails} = useUser();

    const handleSubmit = (values: any) => {
        const payload: updateProfile = {
            first_name: values.first_name,
            last_name: values.last_name,
            gender: values.gender,
        }
        updateProfile.mutate(payload, {
            onSuccess: (val: apiResponse) => {
                if (val.status) {
                    fetchUserDetails.refetch()
                    OpenNotification({
                        type: 'success',
                        title: 'Profile Update',
                        description: 'You have updated your profile'
                    })
                } else {
                    const er: any = val;
                    const error: errorResponse = er;
                    const message = error.response.data.message
                    functions.displayErrorMessages(message, 'Profile Update', 'error')
                }
            },
            onError: (e) => {
                console.log('error here ', e)
            }
        })
    };

    const handleCancel = (e: any) => {
        e.preventDefault();
        form.resetFields();
    };

    return (
        <Cards
            title={
                <div className="setting-card-title">
                    <Heading as="h4">Edit Profile</Heading>
                    <span>Update Your Personal Information</span>
                </div>
            }
        >
            <Row justify="center">
                <Col xl={12} lg={16} xs={24}>
                    <BasicFormWrapper>
                        <Form name="editProfile" onFinish={handleSubmit}>
                            <Form.Item required name="first_name" initialValue={userD.profile?.first_name} label="First Name">
                                <Input required size='large' />
                            </Form.Item>
                            <Form.Item required name="last_name" initialValue={userD.profile?.last_name} label="Last Name" style={{ marginTop: 50 }}>
                                <Input required size='large' />
                            </Form.Item>
                            <Form.Item required name="gender" initialValue="" label="Select Gender" style={{ marginTop: 60 }} >
                                <Select style={{ width: '100%' }}>
                                    <Option value="">Please Select</Option>
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                    <Option value="any">Rather not say</Option>
                                </Select>
                            </Form.Item>
                            <div className="setting-form-actions" style={{ marginTop: 60 }} >
                                <Button size="default" type="primary" load={updateProfile.isLoading}>
                                    Update Profile
                                </Button>
                                &nbsp; &nbsp;
                                <Button size="default" onClick={handleCancel} type="light">
                                    Cancel
                                </Button>
                            </div>
                        </Form>
                    </BasicFormWrapper>
                </Col>
            </Row>
        </Cards>
    )
}

export default UserDashboard