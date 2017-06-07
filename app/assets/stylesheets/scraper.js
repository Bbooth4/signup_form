import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'form': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'lightblue' }],
    'background': '#f2f7ff',
    'borderRadius': '5px',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 25 }]
  },
  'form form-title': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'lightblue' }],
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'form submit': {
    'position': 'relative',
    'bottom': [{ 'unit': 'px', 'value': 20 }]
  }
});
