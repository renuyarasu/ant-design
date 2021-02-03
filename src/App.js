import './App.css';
import { Layout, Avatar, Menu, Breadcrumb } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ paddingTop: '20px' }}>
          <Title style={{ color: 'white', float: 'left' }} level={3}>
            Ant Design
          </Title>
          <Avatar style={{ float: 'right' }} src="./logo512.png" />
        </Header>
        <Layout>
          <Sider>
            <Menu defaultSelectedKeys={['Dashboard']}>
              <Menu.Item key="Dashboard">Dashboard</Menu.Item>
              <SubMenu
                title={
                  <span>
                    <icon type="mail" />
                    <span>About Us</span>
                  </span>
                }
              >
                <Menu.ItemGroup key="about" title="Item 1">
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g2" title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div
                style={{
                  background: 'white',
                  padding: '25px',
                  minHeight: '80vh',
                }}
              >
                Content
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design Created by Renu
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
