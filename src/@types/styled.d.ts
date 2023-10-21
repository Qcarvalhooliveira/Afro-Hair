import 'styled-components'
import { DarkTheme } from '../styles/themes/barbie'

type ThemeType = typeof DarkTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
