import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Menu  } from '../../components';
import axiosInstance from '../../lib/axios';
import { SettingsContainer } from './Settings';
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

const FormContainer = () => {
    const [menu, setMenu] = useState('Inbox');
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([]);
    const { formId } = useParams();

    // const columns = [
    //     { field: 'id', headerName: 'ID', flex: 1, headerAlign: 'left', align:'left', headerClassName:'table-header', cellClassName: 'super-app-theme--cell',},
    //     { field: 'firstName', headerName: 'First name',  flex: 1, headerAlign: 'left',
    //     headerClassName:'table-header', 
    //     align:'left'},
    //     { field: 'lastName', headerName: 'Last name',  flex: 1, headerAlign: 'left', align:'left', headerClassName:'table-header'},
    //     {
    //       field: 'age',
    //       headerName: 'Age',
    //       type: 'number',
    //       flex:1,
    //       headerAlign: 'left',
    //       align:'left',
    //       headerClassName:'table-header', 
    //     },
    //     {
    //       field: 'fullName',
    //       headerName: 'Full name',
    //       description: 'This column has a value getter and is not sortable.',
    //       sortable: false,
    //       headerAlign: 'left',
    //       align:'left',
    //       flex:1,
    //       headerClassName:'table-header', 
    //       valueGetter: (params) =>
    //         `${params.getValue(params.id, 'firstName') || ''} ${
    //           params.getValue(params.id, 'lastName') || ''
    //         }`,
    //     },
    //   ];
    
    // const rows = [
    //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    //   ];
    
    function defineData(res) {
      if(res.length > 0) {
          const fields = new Set();
          
          for (let i = 0; i < res.length; i++) {
            const f = Object.keys(res[i].fields);
            for (let j = 0; j < f.length; j++) {
                fields.add(f[j])
            }
          }
          
          const columns = []
          const rows = []
          
          fields.forEach(item => {
            columns.push({field:item, headerName:item, headerAlign: 'left',
            headerClassName:'table-header', flex:1})
          })
          columns.push({field:'created_date', headerName:'Submited on',  headerAlign: 'left', headerClassName:'table-header', flex:1})
          
          for (let i=0; i<res.length; i++) {
            rows.push({...res[i].fields, 'created_date':getDatetime(res[i].created_date), id:i})
          }
          setRows(rows)
          setColumns(columns);
          console.log(columns)
      }
    }
    
    useEffect(() => {
        axiosInstance
            .get(`f/${formId}`)
            .then(res => {
                defineData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            
    }, [formId])
    
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
            {menu==='Inbox' && 
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
            }
            {menu==='Settings' && 
              <SettingsContainer formId={formId}/>
          }
        </>
    )
}

export default FormContainer;