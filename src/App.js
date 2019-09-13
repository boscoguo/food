import React, { Component } from 'react'
import { Layout } from 'antd'
import { Typography } from 'antd'
import { Icon } from 'antd'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
// import Header from './common/header'
import { GlobalStyle } from './style'
import store from './redux/store'
import SiderItem from './pages/sider'
import AppRouter from './AppRouter'
import 'antd/dist/antd.css'

const { Header, Content, Footer, Sider } = Layout
const { Text } = Typography

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <Router>
        <Layout style={{minHeight:"100%"}}>
          
          {/* left side */}
          <Sider style={{ background: "lightgreen" }}>
            <SiderItem />
          </Sider>
          <Layout style={{minHeight:"100vh"}}>
            <Content>
                <AppRouter />
            </Content>
            {/* Footer */}
            <Footer style={{background:"pink"}}>
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
