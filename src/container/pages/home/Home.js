import React , {useState , useEffect } from 'react'
import Layout, { Header, Content, Footer } from 'antd/lib/layout/layout';
import { Table, Row, Col } from 'antd';
import axios from 'axios';
//import 'antd/dist/antd.css';
import 'antd/dist/reset.css';
import { Modal, Button } from 'antd';
import './style.css'
function Home() {

 
    const [data, setdata] = useState([]);
    const [modaldata, setmodaldata] = useState([]);
  
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'uname',
      },
      {
        title: 'Email',
        dataIndex: 'emailss',
        key: 'uemail',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'uaddress',
      },
      {
        title: 'Edit User',
        dataIndex: 'id',
        key: 'id',
        render: (index, record) => (
          <Button type="primary" onClick={() => showModal(record)}>
            Edit
          </Button>
        ),
      },
    ];
  
    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      setdata(
        res.data.map((row) => ({
          id: row.id,
          name: row.name,
          emailss: row.email,
          address: row.address.city,
        }))
      );
    };
  
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const showModal = (record) => {
      console.log(record);
      setmodaldata(record);
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  
    return (
<>
<div class="wrapper">
  <div class="row">
    <div class="col-lg-12">
      <h2 class="heading">Admin Dashboard Stat</h2>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <a class="dashboard-stat red" href="#">
        <div class="visual">
          <i class="fa fa-usd"></i>
        </div>
        <div class="details">
          <div class="number">
            <span>312</span>
          </div>
          <div class="desc">Total Profit</div>
        </div>
      </a>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <a class="dashboard-stat blue" href="#">
        <div class="visual">
          <i class="fa fa-bar-chart-o"></i>
        </div>
        <div class="details">
          <div class="number">
            <span>12.5</span>
          </div>
          <div class="desc">New Order</div>
        </div>
      </a>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <a class="dashboard-stat hoki" href="#">
        <div class="visual">
          <i class="fa fa-credit-card"></i>
        </div>
        <div class="details">
          <div class="number">
            <span>+ 53%</span>
          </div>
          <div class="desc">Popularity</div>
        </div>
      </a>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <a class="dashboard-stat purple" href="#">
        <div class="visual">
          <i class="fa fa-comments"></i>
        </div>
        <div class="details">
          <div class="number">
            <span>689</span>
          </div>
          <div class="desc">New Feedback</div>
        </div>
      </a>
    </div>
  </div>
</div>
<div class="wrapper-table">
<Layout>
        {/* <Header>Header 1</Header> */}
        <Content style={{ padding: 50 }}>
          <Row>
            <Col span={3} />
            <Col span={18}>
              <Table dataSource={data} columns={columns} 
              pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '20']}}
              />
            </Col>
            <Col span={3} />
          </Row>
        </Content>
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Name: {modaldata.name}</p>
          <p>Email: {modaldata.emailss}</p>
          <p>Address: {modaldata.address}</p>
        </Modal>
        <Footer></Footer>
      </Layout>
</div>

</>

 
    );
  };
  
  export default Home;