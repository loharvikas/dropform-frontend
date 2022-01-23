import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Menu } from '../../components';
import { Loader, LoaderWrapper } from '../../globalStyles';
import { SettingsContainer } from './Settings';
import GridContainter from './SubmissionGrid';
import { getDatetime } from '../../utils/helper';
import axiosInstance from '../../lib/axios';
import APIViewContainer from './APIView';
import { DownloadSVG } from '../../assets/icons';

let ws = '';

const FormContainer = () => {
  const [menu, setMenu] = useState('Inbox');
  const [count, setCount] = useState(null);
  const [fields, setFields] = useState([]);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(false);
  const { formId } = useParams();


  useEffect(() => {
    let websocket_url;
    if (process.env.REACT_APP_DEVELOPMENT_MODE === 'true') {
      websocket_url = `ws://localhost:8000/ws/form/${formId}/`
    } else {
      websocket_url = `wss://api.dropform.co/ws/form/${formId}/`
    }
    ws = new WebSocket(websocket_url);
    fetchData() //eslint-disable-next-line
  }, [formId])

  if (ws) {
    ws.onmessage = function (e) {
      const data = JSON.parse(e.data);
      constructTableProps([data.message], false)
    }
  }

  const constructTableProps = (res, resetData) => {
    if (res.length >= 0) {
      console.log('REWSET:')
      console.log(resetData)
      const newFields = new Set(fields);
      for (let i = 0; i < res.length; i++) {
        const f = Object.keys(res[i].fields);
        for (let j = 0; j < f.length; j++) {
          newFields.add(f[j])
        }
        const files = res[i].files
        for (let j = 0; j < files.length; j++) {
          const name = files[j].name + '_FILE';
          newFields.add(name);
        }
      }

      if (!newFields.has('created_date')) {
        newFields.add('created_date')
      }

      const columns = []
      const rows = []

      newFields.forEach(item => {
        const hName = item === 'created_date' ? 'Submitted on' : item
        if (item.substring(item.length - 4) === 'FILE') {
          columns.push({
            field: item, headerName: item.substring(0, item.length - 5), headerAlign: 'left',
            headerClassName: 'table-header', flex: 1, minWidth: 150,
            renderCell: (params) => {
              const value = params.row[item.substring(0, item.length - 5)]
              return <a href={value} value='_blank' download><DownloadSVG /></a>;
            }
          })
        } else {
          columns.push({
            field: item, headerName: hName, headerAlign: 'left',
            headerClassName: 'table-header', flex: 1, minWidth: 150,
          })
        }
      })

      for (let i = 0; i < res.length; i++) {
        const fileData = {}
        const files = res[i].files
        for (let j = 0; j < files.length; j++) {
          const name = files[j].name;
          fileData[name] = files[j].file_field;
        }
        rows.push({ ...res[i].fields, 'created_date': getDatetime(res[i].created_date), id: res[i].id, ...fileData })
      }

      if (resetData === true) {
        setRows([...rows]);
        setColumns([...columns]);
        setFields(newFields)
      } else {
        setRows(prevState => [...rows, ...prevState]);
        setColumns(prevState => [...columns, ...prevState]);
        setFields(newFields)
      }
    }
  }

  const fetchData = (resetData = true, page = 1) => {
    setLoading(true);
    axiosInstance
      .get(`f/${formId}/?page=${page}`)
      .then(res => {
        setCount(res.data.count)
        console.log(res.data)
        constructTableProps(res.data.results, resetData)
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch(err => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
        setLoading(false);
      })
  }

  return (
    <>
      {loading &&
        <LoaderWrapper top='50px'>
          <Loader />
        </LoaderWrapper>
      }
      <Menu>
        <Menu.Frame>
          <Menu.Tab
            onClick={() => setMenu('Inbox')}
            active={menu === 'Inbox' ? 'true' : 'false'}
          >Inbox</Menu.Tab>
          <Menu.Tab
            onClick={() => setMenu('Spam')}
            active={menu === 'Spam' ? 'true' : 'false'}
          >Spam
          </Menu.Tab>
          <Menu.Tab
            onClick={() => setMenu('API')}
            active={menu === 'API' ? 'true' : 'false'}
          >API
          </Menu.Tab>
          <Menu.Tab
            onClick={() => setMenu('Settings')}
            active={menu === 'Settings' ? 'true' : 'false'}
          >Settings
          </Menu.Tab>
        </Menu.Frame>
      </Menu>

      {menu === 'Inbox' &&
        <GridContainter
          setLoading={setLoading}
          rows={rows}
          columns={columns}
          fetchData={fetchData}
          count={count}
        />
      }

      {menu === 'Settings' &&

        <SettingsContainer setLoading={setLoading} formId={formId} />
      }

      {menu === 'API' &&
        <APIViewContainer formId={formId} />
      }
    </>
  )
}


export default FormContainer;