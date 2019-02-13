// adapted from https://github.com/react-community/react-native-safe-area-view/
import { Dimensions, Platform } from 'react-native'

// See https://mydevice.io/devices/ for device dimensions
const X_WIDTHS = [375, 414]
const X_HEIGHTS = [812, 896]
const PAD_WIDTH = 768

const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get('window')

export const isIPhoneX =
  Platform.OS === 'web'
    ? false
    : Platform.OS === 'ios' &&
      ((X_HEIGHTS.includes(D_HEIGHT) && X_WIDTHS.includes(D_WIDTH)) ||
        (X_WIDTHS.includes(D_HEIGHT) && X_HEIGHTS.includes(D_WIDTH)))

const drawUnderNavigatioBar = Platform.OS === 'android' && Platform.Version >= 21

export const isIPad =
  Platform.OS === 'ios' &&
  !isIPhoneX &&
  (D_HEIGHT < D_WIDTH ? D_HEIGHT >= PAD_WIDTH : D_WIDTH >= PAD_WIDTH)

const statusBarHeight = (isLandscape) => {
  /**
   * This is a temporary workaround because we don't have a way to detect
   * if the status bar is translucent or opaque. If opaque, we don't need to
   * factor in the height here; if translucent (content renders under it) then
   * we do.
   */
  if (Platform.OS === 'android') {
    if (global.Expo) return global.Expo.Constants.statusBarHeight
    else return 0
  }
  if (isIPhoneX) return isLandscape ? 0 : 44
  if (isIPad) return 20
  return isLandscape ? 0 : 20
}

export const getSafeAreaInsets = () => {
  let horizontal, vertical, bottom
  const { height, width } = Dimensions.get('window')
  if (height < width) {
    // landscape
    horizontal = isIPhoneX ? 44 : 0
    vertical = statusBarHeight(true)
    bottom = isIPhoneX ? 24 : 0
  } else {
    // portrait
    horizontal = drawUnderNavigatioBar ? 48 : 0
    vertical = statusBarHeight(false)
    bottom = isIPhoneX ? 34 : horizontal
  }
  return {
    horizontal,
    right: horizontal,
    left: horizontal,
    vertical,
    top: vertical,
    bottom,
  }
}

export { SafeAreaView } from 'react-native'
