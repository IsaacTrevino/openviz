import { 
  colors, 
  createMuiTheme, 
  responsiveFontSizes 
} from '@material-ui/core';
import typography from './typography';
import { softShadows, strongShadows } from './shadows';
import { merge } from 'lodash';


const baseConfig = <any>{
  direction: 'ltr',
  typography,
  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: 'hidden'
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32
      }
    },
    MuiChip: {
      root: {
        backgroundColor: 'rgba(0,0,0,0.075)'
      }
    }
  }
};

const themeConfigs = [
  {
    overrides: {
      MuiInputBase: {
        input: {
          '&::placeholder': {
            opacity: 1,
            color: colors.blueGrey[600]
          }
        }
      }
    },
    palette: {
      type: 'light',
      action: {
        active: colors.blueGrey[600]
      },
      background: {
        default: colors.common.white,
        dark: '#f4f6f8',
        paper: colors.common.white,
        read: '#eeebcf',
      },
      primary: {
        main: colors.blue[600]
      },
      secondary: {
        main: colors.green[600]
      },
      text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600],
        read: '#000000'
      },
      error: {
        main: colors.red[500]
      },
      warning: {
        main: colors.yellow.A700
      },
      success: {
        main: colors.green.A700
      }
    },
    shadows: softShadows
  },
  {
    palette: {
      type: 'dark',
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)'
      },
      background: {
        default: '#282C34',
        dark: '#1c2025',
        paper: '#282C34',
        read: '#eeebcf',
      },
      primary: {
        main: colors.blue[700]
      },
      secondary: {
        main: colors.green[700]
      },
      text: {
        primary: '#e6e5e8',
        secondary: '#adb0bb',
        read: '#000000'
      },
      error: {
        main: colors.red.A700
      },
      warning: {
        main: colors.yellow.A700
      },
      success: {
        main: colors.green.A700
      }
    },
    shadows: strongShadows
  },
];


export function createTheme(darkMode: boolean) {
  const themeOptions = merge({}, darkMode ? themeConfigs[1] : themeConfigs[0], baseConfig);
  return responsiveFontSizes(createMuiTheme(themeOptions));
}

