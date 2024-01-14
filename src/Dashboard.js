
import React, { useState, useEffect } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-quartz.css'
import PieChart from './PieChart'
import BarChart from './BarChart'
import { Card, Col, Row } from 'antd';
const Dashboard = () => {
    const [missions, setMissions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.ag-grid.com/example-assets/space-mission-data.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setMissions(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching space mission data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);



    const columnDefs = [
        { headerName: 'Mission', field: 'mission', sortable: true, filter: true, width: 350, resizable: true },
        { headerName: 'Company', field: 'company', sortable: true, filter: true, width: 260, resizable: true },
        { headerName: 'Rocket', field: 'rocket', sortable: true, filter: true, width: 250, resizable: true },
        { headerName: 'Price', field: 'price', sortable: true, filter: true, width: 250, resizable: true },
        { headerName: 'Successful', field: 'successful', sortable: true, filter: true, width: 250, resizable: true },

    ];

    return (

        <>
            <div>
                <h1>Space Missions</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (

                    <div
                        className="ag-theme-quartz"
                        style={{ height: 520 }}
                    >
                        <AgGridReact
                            rowData={missions.slice(0, 50)}
                            columnDefs={columnDefs}
                            pagination={true}
                            paginationPageSize={10}
                        />
                    </div>


                )}
            </div>

            <div style={{ paddingTop: '12px' }}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card style={{ minHeight: '520px' }}>
                            <PieChart data={missions} />
                        </Card>
                    </Col>
                    
                    <Col span={12}>
                        <Card style={{ maxHeight: '520px' }}>
                            <BarChart data={missions} />
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Dashboard;
