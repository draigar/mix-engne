'use client'
import { PageHeader } from "@/components/page-headers/page-headers";
import { Button, Col, Row, Select, Spin } from "antd";
import FeatherIcon from 'feather-icons-react';
import { Main } from "../../styled";

const Transactions = () => {
    return (
        <>
            <PageHeader
                ghost
                title="Transactions"
            />

            <Main className=""></Main>
        </>
    )
}

export default Transactions;