'use client'
import React, { useState } from 'react';
import { Row, Col, Form, Input } from 'antd';
import { AccountWrapper } from '../style';
import { BasicFormWrapper } from '../../../styled';
import Heading from '@/components/heading/heading';
import { Button } from '@/components/buttons/buttons';
import { Cards } from '@/components/cards/frame/cards-frame';
import { authStore } from '@/store';

function Account() {
  const [form] = Form.useForm();

  const userD = authStore.user;

  const handleSubmit = (values: any) => {
    
  };

  const handleCancel = (e: any) => {
    e.preventDefault();
    form.resetFields();
  };

  const handleChange = (e: any) => {
    
  };

  return (
    <AccountWrapper>
      <Cards
        title={
          <div className="setting-card-title">
            <Heading as="h4">Account Settings</Heading>
            <span>Update your username and manage your account</span>
          </div>
        }
      >
        <Row>
          <Col xs={24}>
            <BasicFormWrapper>
              <Form form={form} name="editAccount" onFinish={handleSubmit}>
                <div className="account-form-top">
                  <Row justify="center">
                    <Col xxl={10} lg={16} md={18} xs={24}>
                      <div className="account-form">
                        <Form.Item name="username" initialValue={userD.username} label="Username">
                          <Input onChange={handleChange} size='large' disabled />
                        </Form.Item>
                        <p style={{ marginTop: 60 }}>
                          Your Dashboard URL: http://dashboard.com/<span>{userD.username}</span>
                        </p>
                        <Form.Item
                          name="email"
                          initialValue={userD.email}
                          rules={[{ type: 'email' }]}
                          label="Email"
                        >
                          <Input size='large' disabled />
                        </Form.Item>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="account-form-bottom" style={{ marginTop: 40 }}>
                  <Row justify="center">
                    <Col xxl={10} lg={16} md={18} xs={24}>
                      <div className="account-closing">
                        <Row>
                          <Col lg={18} md={24} sm={18} xs={24}>
                            <Heading className="account-closing__title" as="h4">
                              Close Account
                            </Heading>
                            <p>Delete Your Account and Account data</p>
                          </Col>
                          <Col lg={6} md={24} sm={6} xs={24}>
                            <Button size="small" type="danger">
                              Close Account
                            </Button>
                          </Col>
                        </Row>
                      </div>
                      {/* <div className="account-action">
                        <div className="setting-form-actions">
                          <Button size="default" type="primary">
                            Save Change
                          </Button>
                          &nbsp; &nbsp;
                          <Button size="default" onClick={handleCancel} type="light">
                            Cancel
                          </Button>
                        </div>
                      </div> */}
                    </Col>
                  </Row>
                </div>
              </Form>
            </BasicFormWrapper>
          </Col>
        </Row>
      </Cards>
    </AccountWrapper>
  );
}

export default Account;
