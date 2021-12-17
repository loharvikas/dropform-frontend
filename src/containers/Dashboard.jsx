import React, { useEffect }from 'react';
import { WorkspaceContainer } from '.';

const DashboardContainer = ({ workspace }) => {
    useEffect(() => {
        document.title = 'Dashboard -Formstack'
    }, [])
    
    return (
        <>
        { workspace &&
            <WorkspaceContainer workspace={workspace}/>
        }
        </>
    )
}


export default DashboardContainer;
