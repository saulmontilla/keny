import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DashboardSidebar from './DashboardSidebar'
import { PageProps } from '@/types'
import DashboardLayoutContextProvider from '@/Context/Layouts/DashboardLayoutContext'
import DashboardNavbar from './DashboardNavbar'
import styles from './DashboardLayout.module.css'
import DashboardTokenContainer from './DashboardTokenContainer'

export default function DashboardLayout(props: React.PropsWithChildren) {
    return (
        <DashboardLayoutContextProvider>
            <Container fluid>
                <Row>
                    <Col xs='auto' className='d-flex vh-100 p-0 position-relative'>
                        <DashboardSidebar />
                    </Col>
                    <Col className={styles.mainContainer}>
                        <DashboardNavbar />
                        <main className='container mt-3'>
                            {props.children}
                        </main>
                    </Col>
                </Row>
            </Container>
        </DashboardLayoutContextProvider>
    )
}
