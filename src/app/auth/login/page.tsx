'use client'
import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import { AuthWrapper } from '../style';
import { Checkbox } from '@/components/checkbox/checkbox';
import Heading from '@/components/heading/heading';
import Link from 'next/link';
import { useAuth } from '@/hooks';
import { OpenNotification } from '@/helpers';
import { apiResponse } from '@/types';
import { useRouter } from 'next/navigation';
import { config } from '@/store';

export default function Login() {

    const { doLogin } = useAuth();

    const router = useRouter();

    const [form] = Form.useForm();
    const [state, setState] = useState({
        checked: false,
    });

    const handleSubmit = async (values: any) => {
        doLogin.mutate(values, {
            onSuccess: (val: apiResponse) => {
                console.log('res ', val)
                if (val.status) {
                    const data: any = val.data
                    OpenNotification({
                        title: 'Login Success',
                        description: `Welcome ${data.user.username} - Reloading to dashboard`,
                        type: 'success'
                    })
                    if (data.user.role === 1) {
                        router.push('/d/admin');
                    }
                }
            },
            onError: (e: any) => {
                OpenNotification({
                    title: 'Login Error',
                    description: e.response.data.message,
                    type: 'error'
                })
            }
        })
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const onChange = (checked: boolean) => {
        setState({ ...state, checked });
    };

    return (
        <>
            <AuthWrapper>
                <p className="auth-notice">
                    Don&rsquo;t have an account? <Link href="#">Sign up now</Link>
                </p>
                <div className="auth-contents">
                    <Form name="login" form={form} onFinish={handleSubmit} layout="vertical" onFinishFailed={onFinishFailed}>
                        <Heading as="h3">
                            Sign in to <span className="color-secondary">{config.AppName}</span>
                        </Heading>
                        <Form.Item
                            name="email"
                            rules={[{ message: 'Please input your Email!', required: true }]}
                            initialValue="viktor-khatoon647@rediffmail.com"
                            label="Email Address"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item name="password" initialValue="@secret16" label="Password">
                            <Input.Password placeholder="Password" />
                        </Form.Item>
                        <div className="auth-form-action">
                            <Checkbox onChange={onChange}>Keep me logged in</Checkbox>
                            <Link className="forgot-pass-link" href="#">
                                Forgot password?
                            </Link>
                        </div>
                        <Form.Item>
                            <Button className="btn-signin" htmlType="submit" type="primary" size="large">
                                {doLogin.isLoading ? 'Processing...' : 'Sign In'}
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </AuthWrapper>
        </>
    )
}
