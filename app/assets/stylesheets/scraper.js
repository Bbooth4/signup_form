import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'form': {
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 120 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'lightblue' }],
    'background': '#f2f7ff',
    'borderRadius': '5px',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 25 }]
  },
  'form form-title': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'lightblue' }],
    'width': [{ 'unit': '%H', 'value': 0.9 }],
    'marginLeft': [{ 'unit': '%H', 'value': 0.05 }],
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }]
  },
  'form form-title div form-tag': {
    'color': 'lightblue'
  },
  'form submit': {
    'position': 'relative',
    'bottom': [{ 'unit': 'px', 'value': 20 }]
  }
});
