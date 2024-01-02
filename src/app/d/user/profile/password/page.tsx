'use client'
import React, { useState } from 'react';
import { Row, Col, Form, Input } from 'antd';
import { ChangePasswordWrapper } from '../style';
import { BasicFormWrapper } from '../../../styled';
import Heading from '@/components/heading/heading';
import { Cards } from '@/components/cards/frame/cards-frame';
import { Button } from '@/components/buttons/buttons';
import { useUser } from '@/hooks';
import { OpenNotification, functions } from '@/helpers';
import { apiResponse, errorResponse } from '@/types';

function Password() {
  const [form] = Form.useForm();

  const {updatePassword} = useUser()
  
  const handleSubmit = (values: any) => {
    const payload = {
        oldPassword: values.old,
        password: values.new
    }
    updatePassword.mutate(payload, {
        onSuccess: (val: apiResponse) => {
            console.log('result ', val.status)
            if (val.status) {
                OpenNotification({
                    type: 'success',
                    title: 'Password Update',
                    description: 'You have updated your profile'
                })
            } else {
                const er: any = val;
                const error: errorResponse = er;
                const message = error.response.data.message
                console.log('front ', val)
                functions.displayErrorMessages(message, 'Password Update', 'error')
            }
        },
    })
  };
  const handleCancel = (e: any) => {
    e.preventDefault();
    form.resetFields();
  };

  return (
    <ChangePasswordWrapper>
      <Cards
        title={
          <div className="setting-card-title">
            <Heading as="h4">Password Settings</Heading>
            <span>Change or reset your account password</span>
          </div>
        }
      >
        <Row justify="center">
          <Col lg={12} sm={20} xs={24}>
            <BasicFormWrapper>
              <Form form={form} name="changePassword" onFinish={handleSubmit}>
                <Form.Item name="old" required label="Old Password">
                  <Input.Password size='small' required />
                </Form.Item>
                <Form.Item name="new" required label="New Password" style={{ marginTop: 60 }}>
                  <Input.Password required size="small" />
                </Form.Item>
                <p className="input-message" style={{ marginTop: 60 }}>Minimum 6 characters</p>
                <Form.Item>
                  <div className="setting-form-actions">
                    <Button htmlType="submit" load={updatePassword.isLoading} type="primary">
                      Change Password
                    </Button>
                    &nbsp; &nbsp;
                    <Button onClick={handleCancel}>
                      Cancel
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </BasicFormWrapper>
          </Col>
        </Row>
      </Cards>
    </ChangePasswordWrapper>
  );
}

export default Password;
