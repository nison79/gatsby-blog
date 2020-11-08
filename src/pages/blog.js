import React from 'react'
import Layout from '../components/Layout'
import { Button, Container } from 'react-bootstrap'

const BlogPage = () => {
    return (
        <Layout>
            <h1>Blog</h1>
            <p>Posts will show here</p>
            <Container>
                <Button>hello</Button>
            </Container>
        </Layout>
    )
}

export default BlogPage
