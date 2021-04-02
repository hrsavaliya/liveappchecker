import React, {useState, useEffect} from "react";
import ReactJson from 'react-json-view'
import {Row, Col, Input, message, Button, Table, Form, Select, Modal} from "antd";
import {DeleteOutlined, ExclamationCircleOutlined, SearchOutlined} from "@ant-design/icons";
import {
  createGrabApp,
  deleteGrabApp,
  getGrabApps,
  getGrabAppById,
  refreshData,
  getLength,
} from "../../actions";
import redirect from "../../assets/img/redirect.png"

const {confirm} = Modal;

message.config({
  top: 100,
});

const GrabData = () => {
  const [appId, setAppIp] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [total, setTotal] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [length,setLength]= useState({Live:"",Terminated:""})
  const [isTerminated, setIsTerminated] = useState(false);
  const [searchDetail, setSearchDetail] = useState({});
  const [duplicateData, setDuplicateData] = useState([]);
  const [modalData, setModalData] = useState({});
  const [isModal, setModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isSubmitLoading, setSubmitLoading] = useState(false);

  let stopRolling = false;
  let page = 0;

  useEffect(() => {
    fetchApps();
    fetchLength();
    let tableContent = document.querySelector('.ant-table-body')
    tableContent.addEventListener('scroll', async (event) => {
      if (!stopRolling) {
        let maxScroll = event.target.scrollHeight - event.target.clientHeight
        let currentScroll = event.target.scrollTop
        if (currentScroll === maxScroll) {
          // await loadMore();
        }
      }
    })
  }, [])

  const loadMore = async () => {
     setLoading(true);
    let res = await getGrabApps(`?pageSize=${30}&page=${page + 1}`);
    if (res.data[0].data.length === 0)
      stopRolling = true
    if (res && res.data) {
      page++;
      setTableData(prevState => {
        return [...prevState, ...res.data[0].data]
      });
      setDuplicateData(prevState => {
        return [...prevState, ...res.data[0].data]
      });

      setTotal(res.data[0].metadata[0].total)
      setLoading(false)
    }
  };

  const fetchApps = async () => {
    setLoading(true);
    const res = await getGrabApps(`?pageSize=${10000000}&page=${0}`);
    if (res && res.data) {
      console.log(res)
      setTableData(res.data[0].data);
      setDuplicateData(res.data[0].data)
      setTotal(res.data[0] && res.data[0].metadata[0] && res.data[0].metadata[0].total)
      setLoading(false)
    }
  };

  const fetchLength = async () => {
    setLoading(true);
    const res = await getLength();
    if (res && res.data) {
      setLoading(false)
      setLength({
        Live: res.data.live,
        Terminated: res.data.terminated
      })
    }
  };

  const onModalChange = async (id) => {
    const res = await getGrabAppById(id);
    if (res && res.data && res.data.payload) {
      setModalData(res.data.payload);
      setModal(true)
    } else {
      message.error("data not found")
    }
  };

  const handleCancel = () => {
    setModal(false)
  };

  const handleChange = (e) => {
    setAppIp(e.target.value)
    if(e.key === 'Enter' || e.keyCode === 13){
      onSubmit();
    }
  };

  const showConfirm = (record) => {
    confirm({
      title: 'Do you Want to delete this App?',
      icon: <ExclamationCircleOutlined/>,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        onDelete(record);
      },
      onCancel() {
      },
    });
  }

  const onDelete = async (record) => {
    setLoading(true);
    const res = await deleteGrabApp(record._id);
    if (res) {
      if (res.success) {
        message.success("App successfully deleted!");
      }
      if (res.error) {
        message.error(res.error);
      }
      await fetchApps();
    }
  };

  const onSubmit = async () => {
    setSubmitLoading(true);
    const res = await createGrabApp(appId);
    if (res && res.data && res.data.payload) {
      await fetchApps();
      message.success("Updated")
    } else {
      message.error("Something went wrong")
    }
    setSubmitLoading(false)
  };

  const onRefresh = async () => {
    setLoading(true);
    setTableData([])
    setDuplicateData([])
    const res = await refreshData();
    if (res && res.data && res.data.ok) {
      await fetchApps();
      let tableContent = document.querySelector('.ant-table-body')
      tableContent.addEventListener('scroll', async (event) => {
        if (!stopRolling) {
          let maxScroll = event.target.scrollHeight - event.target.clientHeight
          let currentScroll = event.target.scrollTop
          if (currentScroll === maxScroll) {
            // await loadMore();
          }
        }
      })
      message.success("Updated")
    } else {
      message.error("Something went wrong")
    }
    fetchLength();
    setLoading(false)
  };

  const searchData = (e) => {
    const {name, value} = e.target;
    setLoading(true);
    let updatedList = [...duplicateData];
    if (value === "terminated") {
      updatedList = duplicateData.filter(item => item.isTerminator);
      setIsTerminated(true);
    } else if (value === "woTerminated") {
      updatedList = duplicateData.filter(item => !item.isTerminator);
    }
    setTableData(updatedList);
    setLoading(false);
  };

  const searchName = (e) => {
    const {name, value} = e.target;
    setInputValue(value);
    let updatedList;
    if (value !== '' && value) {
      updatedList = duplicateData.filter(v => (v.title.toLowerCase().includes(value.toLowerCase()) || v.appId.toLowerCase().includes(value.toLowerCase())));
      setTableData(updatedList)
    } else {
      setTableData(duplicateData)
    }
  };

  const columns = [
    {
      title: "Icon",
      key: "icon",
      dataIndex: "icon",
      render: (record, data) => (
        <span><img src={data.icon} width={40} alt="appIcon" height={40}/></span>
      ),
    },
    {
      title: "Category",
      key: "genre",
      dataIndex: "genre",
    },
    {
      title: "Title",
      key: "title",
      render: (record, data) => (
        <span onClick={() => {
          onModalChange(data._id)
        }}>{data.title}</span>
      ),
      sorter: (a, p) => toString(a.title).toLowerCase().localeCompare(toString(p.title).toLowerCase()),
    },
    {
      title: "AppId",
      key: "appId",
      render: (record, data) => (
        <a href={data.url} target="_blank">
          <span>{data.appId}</span>
        </a>
      )
    },
    // {
    //   title: "Url",
    //   key: "isTerminator",
    //   render: (record, data) => (
    //     <a href={data.url} target="_blank">
    //       <img src={redirect} height={20} width={20}/>
    //     </a>
    //   )
    // },
    {
      title: "Status",
      key: "_id",
      render: (record, data) => (
        <>
          {
            data.isTerminator !== undefined && (data.isTerminator === true ? <span style={{color: "red"}}>
            Terminated
          </span> :
              <span>Live</span>)
          }
        </>
      )
    },
    {
      title: "MaxInstalls",
      key: "maxInstalls",
      dataIndex: "maxInstalls",
      sorter: (a, p) => parseInt(a.maxInstalls) - parseInt(p.maxInstalls)
    },
    {
      title: "Action",
      key: "_id",
      render: (record) => (
        <span>
          <DeleteOutlined
            theme="filled"
            className="cus-btn"
            onClick={() => showConfirm(record)}
            style={{color: "red"}}
          />
          </span>
      )
    }
  ];

  return (
    <>
      <div className="grabData">
      <Row style={{marginTop: 45}}>
        <Col md={6}>
          <Form.Item>
            <Input
              value={appId || ""}
              placeholder="Enter App_Id"
              name="appId"
              onChange={handleChange}
              onKeyPress={handleChange}
            />
          </Form.Item>
        </Col>
        <Col md={2}>
          <Button type="primary" onClick={onSubmit} loading={isSubmitLoading} disabled={!appId}>Submit</Button>
        </Col>
        <Select defaultValue="Select App Status " className="statusDropdown"
                onChange={value => searchData({target: {name: "dataType", value}})}>
          <Select.Option value='all'>All Apps</Select.Option>
          <Select.Option value='terminated'>Terminated Apps</Select.Option>
          <Select.Option value='woTerminated'>Live Apps</Select.Option>
        </Select>
        <div className="refresh">
          <Button type="primary" onClick={onRefresh}>Refresh</Button>
        </div>
      </Row>
      <Row>
        <Col md={20}>
        <Input className="ExportsCustomers customersDropdown" name="app" onChange={searchName}
               value={searchDetail.app}
               placeholder="Enter AppId Or Title" addonBefore={<SearchOutlined/>}/>
        </Col>
        <Col md={2}>
               <div>Live: {length.Live}</div>
        </Col>
          <Col md={2}>
        <div>Terminated: {length.Terminated}</div>
          </Col>
      </Row>
      </div>

      <Modal
        title="Apps Data"
        visible={isModal}
        onOk={handleCancel}
        onCancel={handleCancel}
        width={1000}
      >
        <ReactJson src={modalData} theme="monokai" indentWidth={5} style={{lineBreak: "anywhere"}}/>
      </Modal>
     <Table
        rowKey={record => record._id}
        dataSource={tableData || []}
        columns={columns}
        loading={isLoading}
        pagination={false}
        scroll={{x: 'calc(700px + 50%)', y: 540}}
      />
    </>
  );
};


export default GrabData;
