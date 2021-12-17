import React, { useState, useContext, useEffect, useCallback } from 'react';
import { Sidebar } from '../components';
import { PlusSVG } from '../assets/plus';
import { AuthContext } from '../context/AuthContext';
import axiosInstance from '../lib/axios';

const SidebarContainer = ({ workspace, setWorkspace }) => {
    const [ value, setValue ] = useState('');
    const [ workspaceList, setWorkspaceList ] = useState([]);
    const [ createToggle, setCreateToggle ] = useState(false);
    
    const { user } = useContext(AuthContext);
    
    const createWorkspace = useCallback(e => {
        if (e.code === 'Enter' && value.length > 0) {
            const payload = {
                'name': value,
                'user': user.id
            }
            axiosInstance
                .post('workspace/', payload)
                .then((res) => {
                    setWorkspaceList([...workspaceList, res.data])
                })
                .catch(err => console.log(err))
            setValue('');
            setCreateToggle(false);
        }
    }, [value, user.id, workspaceList])

    useEffect(() => {
        document.addEventListener('keydown', createWorkspace);
        return () => document.removeEventListener('keydown', createWorkspace);
    }, [createWorkspace])
    
    useEffect(() => {
        axiosInstance
            .get(`workspace/${user.id}`)
            .then(res => {
                setWorkspaceList(res.data);
            })
            .catch(error => {
                console.error(error)
            });
        
    }, [user.id]);


    const handleChange = e => {
        setValue(e.target.value);
    }
    
    return (
        <Sidebar>
            <Sidebar.Header>
                <Sidebar.Image src='https://avatars.dicebear.com/api/adventurer/wo.svg'/>
                <Sidebar.Title>{ user.full_name }</Sidebar.Title>
            </Sidebar.Header>
            <Sidebar.Items>
                <Sidebar.ItemsTitle>Your workspace</Sidebar.ItemsTitle>
                <Sidebar.Button onClick={() => setCreateToggle(prevState => !prevState) }>
                    <PlusSVG />
                    Create new workspace
                </Sidebar.Button>
                {
                    workspaceList.map(item => (
                        <Sidebar.TextLink 
                            key={item.id}
                            onClick={() => setWorkspace(item)}
                            active={item.id === workspace?.id ? 'true' : 'false'}
                        >
                            {item.name}
                        </Sidebar.TextLink>
                    ))
                }
            </Sidebar.Items>
            { createToggle && <Sidebar.TextInput 
                                value={value}
                                onChange={handleChange} 
                                placeholder='workspace...' />}
        </Sidebar>
    )
}

export default SidebarContainer
