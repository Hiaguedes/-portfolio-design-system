import colors from '../colors/colors'
import { ThemeProps } from './types';

const LightTheme : ThemeProps = {
    foreground: {
        default: colors.gray[9],
        muted: colors.gray[6],
        subtle: colors.gray[5],
        onEmphasis: colors.white,
    },
    canvas: {
        default: colors.white,
        overlay: colors.white,
        inset: colors.gray[0],
        subtle: colors.gray[0],
    },
    border: {
        default: colors.gray[2],
        muted: 'hsla(210,18%,87%,1)',
        subtle: 'rgba(27,31,36,0.15)'
    },
    shadow: {
        small: '0 1px 0 rgba(27,31,36,0.04)',
        medium: '0 3px 6px rgba(140,149,159,0.15)',
        large: '0 8px 24px rgba(140,149,159,0.2)',
        extraLarge: '0 12px 28px rgba(140,149,159,0.3)'
    },
    neutral: {
        emphasisPlus: colors.gray[9],
        emphasis: colors.gray[5],
        muted: 'rgba(175,184,193,0.2)',
        subtle: 'rgba(234,238,242,0.5)'
    },
    accent: {
        foreground: colors.blue[5],
        emphasis: colors.blue[5],
        muted: 'rgba(84,174,255,0.4)',
        subtle: colors.blue[0]
    },
    success: {
        foreground: colors.green[5],
        emphasis: colors.green[0],
        muted: colors.green[1],
        subtle: colors.green[0]
    },
    attention: {
        foreground: colors.yellow[5],
        emphasis: colors.yellow[0],
        muted: colors.yellow[1],
        subtle: colors.yellow[0]
    },
    danger: {
        foreground: colors.red[5],
        emphasis: colors.red[0],
        muted: colors.red[1],
        subtle: colors.red[0]
    },
    severe: {
        foreground: colors.orange[5],
        emphasis: colors.orange[5],
        muted: 'rgba(251,143,68,0.4)',
        subtle: colors.orange[0],
    },
    open: {
        foreground: colors.green[5],
        emphasis: colors.green[5],
        muted: 'rgba(74,194,107,0.4)',
        subtle: colors.green[0]
    },
    closed: {
        foreground: colors.red[5],
        emphasis: 'rgba(255,129,130,0.4)',
        muted: colors.red[1],
        subtle: colors.red[0]
    },
    done: {
        foreground: colors.purple[5],
        emphasis: colors.purple[5],
        muted: 'rgba(194,151,255,0.4)',
        subtle: colors.purple[0]
    },
}

export default LightTheme;