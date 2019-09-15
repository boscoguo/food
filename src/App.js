import React, { Component } from 'react'
import { Layout } from 'antd'
import { Typography } from 'antd'
import { Icon } from 'antd'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './style'
import store from './redux/store'
import SiderBar from './components/sider'
import AppRouter from './AppRouter'
import 'antd/dist/antd.css'

const { Content, Footer, Sider } = Layout
const { Text } = Typography

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Router>
        <Layout style={{minHeight:"100%"}}>
          
          {/* left side */}
          <Sider breakpoint="xs ms" collapsedWidth="0" style={{ background: "#00152A" }}>
            <SiderBar />
          </Sider>
          <Layout style={{minHeight:"100vh"}}>
            <Content style={{background:"#212121"}}>
                <AppRouter />
            </Content>
            {/* Footer */}
            <Footer style={{background:"#F1F2F6"}}>
              <Text strong style={{ color: "#999" }}>Coperight <Icon type="copyright" /> 2018 xx Restaurant All Rights Reserved </Text>
            </Footer>
          </Layout>
          
        </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
