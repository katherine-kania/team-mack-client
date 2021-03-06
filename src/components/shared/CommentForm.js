import { Form, Container, Button } from 'react-bootstrap'

const CommentForm = (props) => {
    
    const { comment, handleChange, handleSubmit } = props
    
    return (
        <Container className="justify-content-center">
            <Form onSubmit={handleSubmit}>
                <Form.Label>Comment</Form.Label>
                <Form.Control 
                    placeholder="enter your thoughts on the performer, event or venue here..."
                    name='comment'
                    value={comment.text}
                    onChange={handleChange}
                />
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default CommentForm
