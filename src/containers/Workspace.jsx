import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Form } from '../components';
import { FormSVG } from '../assets/forms';
import { Workspace } from '../components';
import axiosInstance from '../lib/axios';
import { Close, Inner, OverLay } from '../globalStyles';
import { getDatetime } from '../utils/helper';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes'

const WorkspaceContainer = ({ workspace }) => {
    const [forms, setForms] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formName, setFormName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    useEffect(() => {
        if(workspace) {
            axiosInstance
                .get(`forms/${workspace.id}/`)
                .then(res => {
                    setForms(res.data)
                })
                .catch((err) => {
                    console.error(err)
                })
        }
    }, [workspace])

    useEffect(() => {
        document.title = 'Dashboard -Formstack'
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        setError('');
        axiosInstance
            .post('forms/', {name: formName, workspace: workspace.id})
            .then(res => {
                setLoading(false);
                setShowForm(false);
                setFormName('');
                setForms([res.data, ...forms]);
            })
            .catch(err => {
                setLoading(false);
                setFormName('');
                setError(err)
            })
    }
    return (
        <>
            { workspace &&
            
            <>
            { showForm && 
                ReactDOM.createPortal(
                    <OverLay>
                        <Inner>
                            <Form.Wrapper>
                                { loading && <Form.Loader /> }
                                <Form.Title>Create new Form</Form.Title>
                                { error && <Form.Error>{ error }</Form.Error>}
                                <Form.Base onSubmit={handleSubmit}>
                                    <Form.Input 
                                        type='text'
                                        placeholder='Form name...'
                                        value={formName}
                                        onChange={({ target }) => setFormName(target.value)}
                                    />
                                    <Form.Submit type='submit'>
                                        Create
                                    </Form.Submit>
                                </Form.Base>
                                <Close onClick={() => setShowForm(false)}/>
                            </Form.Wrapper>
                        </Inner>
                    </OverLay>, document.body)
            }
            <Workspace>
                <Workspace.Frame>
                    <Workspace.Group>
                        <Workspace.Title>
                            { workspace.name }
                        </Workspace.Title>
                    </Workspace.Group>
                    <Workspace.Group>
                        <Workspace.Button onClick={() => setShowForm(true)} danger='true'>Delete this workspace</Workspace.Button>
                        <Workspace.Button onClick={() => setShowForm(true)}>New Form</Workspace.Button>
                    </Workspace.Group>
                </Workspace.Frame>
                { forms.length > 0 &&
                <Workspace.Items>
                    { forms.map(item => (
                        <Link to={ROUTES.FORMS + `${item.uuid}`} key={item.id}>
                            <Workspace.Item>
                                <Workspace.Group>
                                    <FormSVG />
                                    <Workspace.ItemTitle>{item.name}</Workspace.ItemTitle>
                                </Workspace.Group>
                                <Workspace.Group>
                                    <Workspace.ItemDate>{ getDatetime(item.created_date)}</Workspace.ItemDate>
                                </Workspace.Group>
                            </Workspace.Item>
                        </Link>
                    ))}
                </Workspace.Items>
                }
            </Workspace>

            </>
            }
    </>
    )
}



export default WorkspaceContainer;