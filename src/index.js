import store from './store/';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { Router, Stack, Scene, Actions } from "react-native-router-flux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import splashScreen from "./pages/splashScreen";
import homePage from "./pages/homePage";
import newReport from './pages/newReport';
import colors from './styles/colors';
import dangerZones from './pages/dangerZones';
import newDangerZone from './pages/newDangerZone/pages/initialData';
import initialHrn from './pages/newDangerZone/pages/initialHrn';
import reduction from './pages/newDangerZone/pages/reduction';
import finalHrn from './pages/newDangerZone/pages/finalHrn';
import login from './pages/login';
import camera from './pages/camera';
import { metrics } from './styles';

export default class App extends Component {
  state = {
    loading: true,
    isLogged: false,
  }

  async componentDidMount() {
    const bool = await AsyncStorage.getItem('megamotores@login');
    await setTimeout(() => {
      if (bool == '1') {
        this.setState({
          isLogged: true,
        })

      }
      this.setState({
        loading: false,
      })
    }, 1350);
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key={"root"}>
            <Scene
              initial={this.state.loading && true}
              hideNavBar
              component={splashScreen}
              key={"splashScreen"} />

            <Scene
              initial={!this.state.loading && !this.state.isLogged && true}
              component={login}
              hideNavBar
              key={"login"} />

            <Scene
              hideNavBar
              key={'camera'}
              component={camera}
            />

            <Scene
              initial={!this.state.loading && this.state.isLogged && true}
              component={homePage}
              renderRightButton={
                <TouchableOpacity onPress={() => Actions.push('newReport')}>
                  <Icon name={'plus'} size={25} color={colors.white} style={{ marginRight: metrics.baseMargin }} />
                </TouchableOpacity>
              }
              navigationBarStyle={{ backgroundColor: colors.primary }}
              key={"homepage"}
              title={"Meus relatórios"}
              titleStyle={{ color: colors.white }} />

            <Scene
              component={newReport}
              navigationBarStyle={{ backgroundColor: colors.primary }}
              key={"newReport"}
              title={"Checklist NR-12"}
              renderLeftButton={
                <TouchableOpacity onPress={() => Actions.pop('homePage')}>
                  <Ionicons name={'ios-arrow-back'} size={25} color={colors.white} style={{ marginLeft: metrics.baseMargin }} />
                </TouchableOpacity>
              }
              titleStyle={{ color: colors.white }} />

            <Scene
              component={dangerZones}
              navigationBarStyle={{ backgroundColor: colors.primary }}
              key={"dangerZones"}
              title={"Zonas de pergio"}
              titleStyle={{ color: colors.white }}
              renderRightButton={
                <TouchableOpacity onPress={() => Actions.push('newDangerZone')}>
                  <Icon name={'plus'} style={{ marginRight: metrics.baseMargin }} size={25} color={colors.white} />
                </TouchableOpacity>
              }
              renderLeftButton={
                <TouchableOpacity onPress={() => Actions.pop('newReport')}>
                  <Ionicons name={'ios-arrow-back'} size={25} color={colors.white} style={{ marginLeft: metrics.baseMargin }} />
                </TouchableOpacity>
              } />

            <Scene
              component={newDangerZone}
              navigationBarStyle={{ backgroundColor: colors.primary }}
              key={"newDangerZone"}
              title={"Nova zona de perigo"}
              titleStyle={{ color: colors.white }}
              renderLeftButton={
                <TouchableOpacity onPress={() => Actions.pop()}>
                  <Ionicons name={'ios-arrow-back'} size={25} color={colors.white} style={{ marginLeft: metrics.baseMargin }} />
                </TouchableOpacity>
              }
              rightButtonTextStyle={{ color: 'white' }}
              leftButtonTextStyle={{ color: 'white' }}
              onRight={() => { }}
              rightTitle={'Próximo'} />
            <Scene
              component={initialHrn}
              navigationBarStyle={{ backgroundColor: colors.primary }}
              key={"initialHrn"}
              title={"Nova zona de perigo"}
              titleStyle={{ color: colors.white }}
              renderLeftButton={
                <TouchableOpacity onPress={() => Actions.pop()}>
                  <Ionicons name={'ios-arrow-back'} size={25} color={colors.white} style={{ marginLeft: metrics.baseMargin }} />
                </TouchableOpacity>
              }
              rightButtonTextStyle={{ color: 'white' }}
              leftButtonTextStyle={{ color: 'white' }}
              onRight={() => { }}
              rightTitle={'Próximo'} />

            <Scene
              component={reduction}
              navigationBarStyle={{ backgroundColor: colors.primary }}
              key={"reduction"}
              title={"Nova zona de perigo"}
              titleStyle={{ color: colors.white }}
              renderLeftButton={
                <TouchableOpacity onPress={() => Actions.pop()}>
                  <Ionicons name={'ios-arrow-back'} size={25} color={colors.white} style={{ marginLeft: metrics.baseMargin }} />
                </TouchableOpacity>
              }
              rightButtonTextStyle={{ color: 'white' }}
              leftButtonTextStyle={{ color: 'white' }}
              onRight={() => { }}
              rightTitle={'Próximo'} />

            <Scene
              component={finalHrn}
              navigationBarStyle={{ backgroundColor: colors.primary }}
              key={"finalHrn"}
              title={"Nova zona de perigo"}
              renderLeftButton={
                <TouchableOpacity onPress={() => Actions.pop()}>
                  <Ionicons name={'ios-arrow-back'} size={25} color={colors.white} style={{ marginLeft: metrics.baseMargin }} />
                </TouchableOpacity>
              }
              titleStyle={{ color: colors.white }}
              rightButtonTextStyle={{ color: 'white' }}
              leftButtonTextStyle={{ color: 'white' }}
              onRight={() => {
                Actions.push('dangerZones')
              }}
              rightTitle={'Salvar'} />
          </Stack>
        </Router>
      </Provider>
    );
  }
}
