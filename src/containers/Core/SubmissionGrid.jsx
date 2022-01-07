import { useRef, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import '../../assets/table.css';
import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarExport,
    gridClasses,
} from '@mui/x-data-grid';
import { GlobalButton, Feature, FeatureTitle } from '../../globalStyles';
import axiosInstance from '../../lib/axios';
import { Modal } from '../../components';

import * as STYLES from '../../constants/styles';

function CustomToolbar() {
    return (
        <GridToolbarContainer className={gridClasses.toolbarContainer}>
            <GridToolbarExport />
        </GridToolbarContainer>
    );
}


const GridContainter = ({ setLoading, rows, columns, fetchData, count }) => {
    const [toggle, setToggle] = useState(false);
    const [rowValue, setRowValue] = useState({});

    function useApiRef() {
        const apiRef = useRef(null);

        const _columns = useMemo(
            () =>
                columns.concat({
                    field: "__HIDDEN__",
                    width: 0,
                    renderCell: (params) => {
                        apiRef.current = params.api;
                        return null;
                    }
                }), //eslint-disable-next-line
            [columns]
        );

        return { apiRef, columns: _columns };
    }

    const { apiRef, columns: newColumns } = useApiRef();

    const handleClickButton = () => {
        const selectedRows = apiRef.current.getSelectedRows();
        const rowIds = [...selectedRows.keys()];
        setLoading(true)

        if (rowIds.length > 0) {
            axiosInstance
                .delete(`submissions/${rowIds[0]}`, {
                    data: {
                        rowIds: rowIds
                    }
                })
                .then(res => {
                    setLoading(false)
                    fetchData(true)
                })
                .catch(err => {
                    setLoading(false)
                })
        }
    };

    const handlePageChange = (newPage) => {
        fetchData(true, newPage + 1)
    };

    return (
        (rows.length > 0 ?
            <>
                {toggle && ReactDOM.createPortal(
                    <InfoContainer value={rowValue} setToggle={setToggle} />,
                    document.body)}
                <GlobalButton
                    onClick={handleClickButton}
                    style={{
                        width: '100px', marginLeft: 'auto', marginRight: '20px',
                        position: 'absolute', top: '90px', right: '20px'
                    }}
                >
                    Delete
                </GlobalButton>
                <div style={{ height: '100%', padding: "0 20px", overflowX: 'scroll' }} >

                    <DataGrid
                        rowHeight={40}
                        rows={rows}
                        columns={newColumns}
                        rowsPerPageOptions={[50]}
                        pagination
                        pageSize={50}
                        rowCount={count}
                        paginationMode="server"
                        onPageChange={handlePageChange}
                        checkboxSelection
                        getRowClassName={() => 'new-world'}
                        onRowClick={(params) => {
                            setToggle(prevState => !prevState);
                            setRowValue(params.row);
                        }}
                        disableSelectionOnClick
                        sx={{
                            border: 0,
                        }}
                        components={{
                            Toolbar: CustomToolbar,
                        }}
                    />
                </div>
            </>
            :
            (
                <Feature>
                    <FeatureTitle>No submissions yet</FeatureTitle>
                </Feature>
            )
        )
    )
}

const InfoContainer = ({ value, setToggle }) => {
    const info = Object.entries(value)
    console.log({ info });
    return (
        <Modal>
            <Modal.Inner>
                <Modal.Header>
                    <Modal.Title>
                        Form Info
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ margin: '10px 30px', minWidth: '600px' }}>
                        {
                            info.map(item => (
                                <div style={{ marginBottom: '20px' }}>
                                    <h5 style={{ marginBottom: '1px' }}>{item[0]}</h5>
                                    <small>{item[1]}</small>
                                </div>
                            ))
                        }
                    </div>
                    <Modal.Close onClick={() => setToggle(false)} />
                </Modal.Body>
                <Modal.Footer>
                    <div>
                        <Modal.Button subType={STYLES.BUTTON_SECONDARY} onClick={() => setToggle(false)}>
                            Done
                        </Modal.Button>
                    </div>
                </Modal.Footer>
            </Modal.Inner>
        </Modal>
    )
}

export default GridContainter;