import colors from '../colors/colors'
import { ThemeProps } from './types'

const DarkTheme : ThemeProps = {
    foreground: {
        default: colors.gray[1],
        muted: colors.gray[3],
        subtle: colors.gray[4],
        onEmphasis: colors.white,
    },
    canvas: {
        default: colors.gray[9],
        overlay: colors.gray[8],
        subtle: colors.gray[8],
        inset: colors.black,
    },
    border: {
        default: colors.gray[6],
        muted: colors.gray[7],
        subtle: 'rgba(240,246,252,0.1)'
    },
    shadow: {
        small: '0 0 transparent',
        medium: '0 3px 6px #010409',
        large: '0 8px 24px #010409',
        extraLarge: '0 12px 48px #010409'
    },
    neutral: {
        muted: 'rgba(110,118,129,0.4)',
        subtle: 'rgba(110,118,129,0.1)',
        emphasis: colors.gray[4],
        emphasisPlus: colors.gray[4],
    },
    accent: {
        emphasis: colors.blue[5],
        foreground: colors.blue[3],
        muted: 'rgba(56,139,253,0.4)',
        subtle: 'rgba(56,139,253,0.15)'
    },
    success: {
        foreground: colors.green[3],
        emphasis: colors.green[5],
        muted: 'rgba(46,160,67,0.4)',
        subtle: 'rgba(46,160,67,0.15)'
    },
    attention: {
        foreground: colors.yellow[3],
        emphasis: colors.yellow[5],
        muted: 'rgba(187,128,9,0.4)',
        subtle: 'rgba(187,128,9,0.15)'
    },
    severe: {
        foreground: colors.orange[4],
        emphasis: colors.orange[5],
        muted: 'rgba(219,109,40,0.4)',
        subtle: 'rgba(219,109,40,0.15)'
    },
    danger: {
        foreground: colors.red[4],
        emphasis: colors.red[5],
        muted: 'rgba(248,81,73,0.4)',
        subtle: 'rgba(248,81,73,0.15)'
    },
    done: {
        foreground: colors.purple[4],
        emphasis: colors.purple[5],
        muted: 'rgba(163,113,247,0.4)',
        subtle: 'rgba(163,113,247,0.15)'
    },
    open: {
        foreground: colors.green[3],
        emphasis: colors.green[5],
        muted: 'rgba(46,160,67,0.4)',
        subtle: 'rgba(46,160,67,0.15)'
    },
    closed: {
        foreground: colors.red[4],
        emphasis: colors.red[5],
        muted: 'rgba(248,81,73,0.4)',
        subtle: 'rgba(248,81,73,0.15)'
    }
}

export default DarkTheme;