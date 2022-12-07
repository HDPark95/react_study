import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';

const Signup = () => (
    <MDBCard alignment='center'>
        <MDBCardHeader>회원가입</MDBCardHeader>
        <MDBCardBody>
            <form>
                <MDBRow className='mb-4'>
                    <MDBCol>
                        <MDBInput id='form3Example1' label='First name' />
                    </MDBCol>
                    <MDBCol>
                        <MDBInput id='form3Example2' label='Last name' />
                    </MDBCol>
                </MDBRow>
                <MDBInput className='mb-4' type='email' id='form3Example3' label='Email address' />
                <MDBInput className='mb-4' type='password' id='form3Example4' label='Password' />
                <MDBBtn type='submit' className='mb-4' block>
                    Sign in
                </MDBBtn>
            </form>
        </MDBCardBody>
    </MDBCard>
);
export default Signup;
