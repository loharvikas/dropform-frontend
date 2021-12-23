import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Menu  } from '../../components';
import axiosInstance from '../../lib/axios';
import { SettingsContainer } from './Settings';
import { Feature, FeatureTitle } from '../../globalStyles';
import '../../assets/table.css';
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarExport,
    gridClasses,
  } from '@mui/x-data-grid';
import { getDatetime } from '../../utils/helper';


function CustomToolbar() {
    return (
      <GridToolbarContainer className={gridClasses.toolbarContainer}>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
}   


let ws = '';

const FormContainer = () => {
    const [menu, setMenu] = useState('Inbox');
    const [fields, setFields] = useState([]);
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([]);
    const { formId } = useParams();
    
    const constructTableProps = (res) => {
        if(res.length > 0) {
          const newFields = new Set(fields);
          console.log({res})
          for (let i = 0; i < res.length; i++) {
            const f = Object.keys(res[i].fields);
            for (let j = 0; j < f.length; j++) {
                newFields.add(f[j])
            }
          }
    
          if (!newFields.has('created_date')) {
            newFields.add('created_date')
          }
          
          const columns = []
          const rows = []
          
          newFields.forEach(item => {
            const hName = item === 'created_date' ? 'Submitted on': item
            columns.push({field:item, headerName:hName, headerAlign: 'left',
            headerClassName:'table-header', flex:1})
          })
          
          for (let i=0; i<res.length; i++) {
            rows.push({...res[i].fields, 'created_date':getDatetime(res[i].created_date), id:res[i].id})
          }
          setRows(prevState => [...rows, ...prevState])
          setColumns(prevState => [...columns, ...prevState]);
          setFields(newFields)
      }
    }
    
    useEffect(() => {
        ws = new WebSocket(`ws://127.0.0.1:8000/ws/form/${formId}/`)
        axiosInstance
            .get(`f/${formId}`)
            .then(res => {
                constructTableProps(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            
    }, [formId]) // eslint-disable-next-line react-hooks/exhaustive-deps

    if (ws) {
      ws.onmessage = function(e) {
        const data = JSON.parse(e.data);
        constructTableProps([data.message])
      }
    }
    
    return (
        <>
            <Menu>
                <Menu.Frame>
                    <Menu.Tab 
                        onClick={() => setMenu('Inbox')} 
                        active={menu==='Inbox' ? 'true' : 'false'}
                        >Inbox</Menu.Tab>
                    <Menu.Tab 
                        onClick={() => setMenu('Spam')}
                        active={menu==='Spam' ? 'true' : 'false'}
                        >Spam
                    </Menu.Tab>
                    <Menu.Tab 
                        onClick={() => setMenu('API')}
                        active={menu==='API' ? 'true' : 'false'}
                        >API
                    </Menu.Tab>
                    <Menu.Tab 
                        onClick={() => setMenu('Settings')}
                        active={menu==='Settings' ? 'true' : 'false'}
                        >Settings
                    </Menu.Tab>
                </Menu.Frame>
            </Menu>
            {menu ==='Inbox' &&
                  (rows.length > 0 ? 
                  <div style={{height:'100%', padding:"0 20px"}} >
                      <DataGrid
                          disableColumnResize={false}
                          rowHeight={40}
                          rows={rows}
                          columns={columns}
                          rowsPerPageOptions={[10, 20, 30, 40, 50, 100]}
                          checkboxSelection
                          getRowClassName={() => 'new-world'}
                          sx={{
                            border: 0,
                          }}
                          components={{
                              Toolbar: CustomToolbar,
                            }}
                          componentsProps={{
                              columnMenu: { background: 'red', counter: rows.length },
                            }}
                      />
                  </div>
                  :
                  (
                    <Feature>
                        <FeatureTitle>No submissions yet</FeatureTitle>
                    </Feature>
                  )
                  
              )
            }
            
            {menu==='Settings' && 
              <SettingsContainer formId={formId}/>
            }
        </>
    )
}

export default FormContainer;