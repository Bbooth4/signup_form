import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'section': {
    'marginLeft': [{ 'unit': 'px', 'value': 80 }],
    'marginRight': [{ 'unit': 'px', 'value': 80 }]
  },
  'section h4': {
    'marginBottom': [{ 'unit': 'px', 'value': 120 }],
    'marginLeft': [{ 'unit': 'px', 'value': 110 }],
    'position': 'relative',
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'top': [{ 'unit': 'px', 'value': 92 }]
  },
  'section icons': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 100 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 103 }],
    'display': 'flex',
    'MsFlexPack': 'justify',
    'justifyContent': 'center',
    'counterReset': 'step',
    'textAlign': 'center',
    'marginLeft': [{ 'unit': 'px', 'value': 30 }],
    'marginRight': [{ 'unit': 'px', 'value': 30 }]
  },
  'section icons icons:hover': {
    'borderColor': '#54D194 !important'
  },
  'section icons icon': {
    'display': 'block',
    'position': 'relative',
    'width': [{ 'unit': 'px', 'value': 270 }],
    'height': [{ 'unit': 'px', 'value': 270 }],
    'padding': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }],
    'paddingTop': [{ 'unit': 'px', 'value': 25 }],
    'marginBottom': [{ 'unit': 'px', 'value': 16 }],
    'borderRadius': '4px',
    'color': '#00386C',
    'boxShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'string', 'value': '#f2f4f7' }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 27 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 0 }],
    'textDecoration': 'none',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f2f4f7' }],
    'borderRadius': '5px',
    'marginLeft': [{ 'unit': 'em', 'value': 2.5 }],
    'marginRight': [{ 'unit': 'em', 'value': 2.5 }]
  },
  'section icons icon right': {
    'position': 'relative',
    'left': [{ 'unit': 'px', 'value': 50 }]
  },
  'section icons icon icon:hover': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f2f4f7' }, { 'unit': 'string', 'value': '!important' }],
    'color': '#54D194'
  },
  'section icons icon icon:focus': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f2f4f7' }, { 'unit': 'string', 'value': '!important' }],
    'color': '#54D194'
  },
  'section icons icon icon-text:hover': {
    'color': '#54D194',
    'transition': '300ms',
    'textDecoration': 'bold'
  },
  'section icons icon icon-image': {
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 84 }],
    'height': [{ 'unit': 'px', 'value': 84 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'marginBottom': [{ 'unit': 'px', 'value': 32 }]
  },
  'section icons icon icon-text': {
    'position': 'relative',
    'bottom': [{ 'unit': 'px', 'value': 40 }],
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'color': '#00386C'
  },
  'section icons icon icon-text-bottom': {
    'color': '#54D194',
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  'section icons icon instructions': {
    'color': '#425E78',
    'position': 'relative',
    'bottom': [{ 'unit': 'px', 'value': 16 }]
  },
  'section icons icon number': {
    'position': 'relative',
    'bottom': [{ 'unit': 'px', 'value': 35 }],
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'color': '#fff',
    'borderRadius': '50%',
    'zIndex': '2'
  },
  'section icons icon circle': {
    'height': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': 'px', 'value': 40 }],
    'background': '#49B882',
    'position': 'relative',
    'bottom': [{ 'unit': 'px', 'value': 195 }],
    'left': [{ 'unit': 'px', 'value': 89 }],
    'borderRadius': '50%',
    'zIndex': '1'
  },
  'top-bar': {
    'background': '#fff',
    'boxShadow': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 80 }, { 'unit': 'string', 'value': '#f2f4f7' }],
    'marginBottom': [{ 'unit': 'px', 'value': 300 }],
    'position': 'fixed',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'zIndex': '10'
  },
  'top-bar row': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }],
    'maxWidth': [{ 'unit': 'rem', 'value': 200 }]
  },
  'top-bar row logo-container': {
    'paddingLeft': [{ 'unit': 'px', 'value': 4 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'top-bar row div logo': {
    'height': [{ 'unit': 'px', 'value': 50 }],
    'width': [{ 'unit': 'px', 'value': 140 }],
    'backgroundSize': 'contain',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'center'
  },
  'top-bar row small-1': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'top-bar row small-1 h6': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'top-bar row small-1 h6 a strong': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'bottom': {
    'marginTop': [{ 'unit': 'em', 'value': 20 }],
    'textAlign': 'center'
  },
  'bottom div want-to-learn-more': {
    'marginBottom': [{ 'unit': 'px', 'value': 128 }],
    'color': '#00386C !important'
  },
  'bottom div expand': {
    'borderRadius': '20px',
    'background': '#54D194'
  },
  'bottom div bottom-button': {
    'color': '#fff',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 300 }]
  }
});
