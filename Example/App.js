import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  Button
} from 'react-native';
import Theme from 'react-native-themes';
import styleSheet from './AppStyles';
import Colors from './Colors';


let styles;
let currentTheme;
export default class App extends Component {

  constructor(props) {
    super(props);
    global.lang = 'en';
    this.state = {
      currentTheme: Theme.getColorTheme()
    };
  }

  componentWillMount() {
    this.listener = Theme.addThemeListener(() => {
      this.setState({});
    });
  }

  componentWillUnmount() {
    Theme.removeThemeListener(this.listener);
  }



  changeTheme = () => {
    if (Theme.getColorTheme() === 'regular') {
      Theme.setColorTheme('darkTheme');
    } else {
      Theme.setColorTheme('regular');
    }
    this.setState({ currentTheme: Theme.getColorTheme() });
  };

  render() {
    styles = Theme.getStyles(styleSheet);
    //const colors = Theme.getColors();

    return (
      <View style={styles.container}>
        <View style={styles.staticContainer}>
          <Text style={styles.title}>
            This is static titleColor
          </Text>
          <Text style={styles.text}>
            This is static fontColor
          </Text>
          <Text style={styles.title}>{'Current Theme: ' + this.state.currentTheme}</Text>
          <Button title='Change Theme' onPress={() => this.changeTheme()} />
        </View>
      </View>
    );
  }
}


