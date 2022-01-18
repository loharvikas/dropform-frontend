import React from 'react';
import styled from 'styled-components';
import { Feature } from '../../components';
import FileUploadImage from '../../assets/images/file-upload.png';
import StandardImage from '../../assets/images/standard.png';
import { CopyClipboardSVG } from '../../assets/icons';

const Wrapper = styled.div`
    width: 75%;
    margin: 10px auto;
    border-radius: 15px;
    background-color: var(--WHITE-999);
    padding: 0 40px;
`


const APIViewContainer = ({ formId }) => {
    const formEndpointURL = `https://www.dropform.co/f/${formId}/`

    return (
        <Wrapper>

            <Feature>
                <Feature.Group>
                    <Feature.Title>Form Endpoint</Feature.Title>
                    <Feature.Text>Place this URL in the action attribute of your form. Also, make sure to add <b>method="POST"</b>. Finally, ensure that each input has a <b>name</b> attribute.</Feature.Text>
                    <Feature.InputBox onClick={() => clipboardCopy(formEndpointURL)}>
                        {formEndpointURL}
                        <CopyClipboardSVG />
                    </Feature.InputBox>
                </Feature.Group>

                <Feature.Group>
                    <Feature.Title>Examples</Feature.Title>
                    <Feature.Group>
                        <Feature.SubTitle>Standard</Feature.SubTitle>
                        <img src={StandardImage} alt='Standard code example.' />
                    </Feature.Group>
                    <Feature.Group>
                        <Feature.SubTitle>File Upload</Feature.SubTitle>
                        <Feature.Text>
                            In order to allow file upload for your endpoint, add <b color='black'>enctype="multipart/form-data"</b>to your form tag and add <b color='black'>input type="file" name="file"</b> into your form.
                        </Feature.Text>
                        <img src={FileUploadImage} alt='File upload code example.' />
                    </Feature.Group>
                </Feature.Group>
            </Feature >
        </Wrapper>
    )
}

function clipboardCopy(copyText) {
    if ('clipboard' in navigator) {
        return navigator.clipboard.writeText(copyText);
    } else {
        return document.execCommand('copy', true, copyText);
    }
}

export default APIViewContainer;
