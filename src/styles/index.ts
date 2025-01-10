import { _SPACER } from '@constants/index';
import { DimensionValue, ViewStyle } from 'react-native';

/**
 * Common styles that can be reused throughout the application.
 */
export const hStack: ViewStyle = { flexDirection: 'row' }; // Horizontal stack

// Justify content styles
export const jc_sb: ViewStyle = { justifyContent: 'space-between' };
export const jc_c: ViewStyle = { justifyContent: 'center' };
export const jc_fe: ViewStyle = { justifyContent: 'flex-end' };
export const jc_fs: ViewStyle = { justifyContent: 'flex-start' };
export const jc_sa: ViewStyle = { justifyContent: 'space-around' };

// Align self styles
export const as_c: ViewStyle = { alignSelf: 'center' };
export const as_fe: ViewStyle = { alignSelf: 'flex-end' };

// Align items styles
export const ai_fs: ViewStyle = { alignItems: 'flex-start' };
export const ai_c: ViewStyle = { alignItems: 'center' };
export const ai_fe: ViewStyle = { alignItems: 'flex-end' };

// Padding styles
export const p_sm: ViewStyle = { padding: _SPACER.SM };
export const p_md: ViewStyle = { padding: _SPACER.MD };
export const p_lg: ViewStyle = { padding: _SPACER.LG };
export const p_xl: ViewStyle = { padding: _SPACER.XL };
export const p_xxl: ViewStyle = { padding: _SPACER.XXL };
export const p_xxxl: ViewStyle = { padding: _SPACER.XXXL };

// Padding horizontal styles
export const px_sm: ViewStyle = { paddingHorizontal: _SPACER.SM };
export const px_md: ViewStyle = { paddingHorizontal: _SPACER.MD };
export const px_lg: ViewStyle = { paddingHorizontal: _SPACER.LG };
export const px_xl: ViewStyle = { paddingHorizontal: _SPACER.XL };
export const px_xxl: ViewStyle = { paddingHorizontal: _SPACER.XXL };
export const px_xxxl: ViewStyle = { paddingHorizontal: _SPACER.XXXL };

// Padding vertical styles
export const py_sm: ViewStyle = { paddingVertical: _SPACER.SM };
export const py_md: ViewStyle = { paddingVertical: _SPACER.MD };
export const py_lg: ViewStyle = { paddingVertical: _SPACER.LG };
export const py_xl: ViewStyle = { paddingVertical: _SPACER.XL };
export const py_xxl: ViewStyle = { paddingVertical: _SPACER.XXL };
export const py_xxxl: ViewStyle = { paddingVertical: _SPACER.XXXL };

// Padding top styles
export const pt_sm: ViewStyle = { paddingTop: _SPACER.SM };
export const pt_md: ViewStyle = { paddingTop: _SPACER.MD };
export const pt_lg: ViewStyle = { paddingTop: _SPACER.LG };
export const pt_xl: ViewStyle = { paddingTop: _SPACER.XL };
export const pt_xxl: ViewStyle = { paddingTop: _SPACER.XXL };
export const pt_xxxl: ViewStyle = { paddingTop: _SPACER.XXXL };

// Padding bottom styles
export const pb_sm: ViewStyle = { paddingBottom: _SPACER.SM };
export const pb_md: ViewStyle = { paddingBottom: _SPACER.MD };
export const pb_lg: ViewStyle = { paddingBottom: _SPACER.LG };
export const pb_xl: ViewStyle = { paddingBottom: _SPACER.XL };
export const pb_xxl: ViewStyle = { paddingBottom: _SPACER.XXL };
export const pb_xxxl: ViewStyle = { paddingBottom: _SPACER.XXXL };

// Padding left styles
export const pl_sm: ViewStyle = { paddingLeft: _SPACER.SM };
export const pl_md: ViewStyle = { paddingLeft: _SPACER.MD };
export const pl_lg: ViewStyle = { paddingLeft: _SPACER.LG };
export const pl_xl: ViewStyle = { paddingLeft: _SPACER.XL };
export const pl_xxl: ViewStyle = { paddingLeft: _SPACER.XXL };
export const pl_xxxl: ViewStyle = { paddingLeft: _SPACER.XXXL };

// Padding right styles
export const pr_sm: ViewStyle = { paddingRight: _SPACER.SM };
export const pr_md: ViewStyle = { paddingRight: _SPACER.MD };
export const pr_lg: ViewStyle = { paddingRight: _SPACER.LG };
export const pr_xl: ViewStyle = { paddingRight: _SPACER.XL };
export const pr_xxl: ViewStyle = { paddingRight: _SPACER.XXL };
export const pr_xxxl: ViewStyle = { paddingRight: _SPACER.XXXL };

// Margin styles
export const m_sm: ViewStyle = { margin: _SPACER.SM };
export const m_md: ViewStyle = { margin: _SPACER.MD };
export const m_lg: ViewStyle = { margin: _SPACER.LG };
export const m_xl: ViewStyle = { margin: _SPACER.XL };
export const m_xxl: ViewStyle = { margin: _SPACER.XXL };
export const m_xxxl: ViewStyle = { margin: _SPACER.XXXL };

// Margin horizontal styles
export const mx_sm: ViewStyle = { marginHorizontal: _SPACER.SM };
export const mx_md: ViewStyle = { marginHorizontal: _SPACER.MD };
export const mx_lg: ViewStyle = { marginHorizontal: _SPACER.LG };
export const mx_xl: ViewStyle = { marginHorizontal: _SPACER.XL };
export const mx_xxl: ViewStyle = { marginHorizontal: _SPACER.XXL };
export const mx_xxxl: ViewStyle = { marginHorizontal: _SPACER.XXXL };

// Margin vertical styles
export const my_sm: ViewStyle = { marginVertical: _SPACER.SM };
export const my_md: ViewStyle = { marginVertical: _SPACER.MD };
export const my_lg: ViewStyle = { marginVertical: _SPACER.LG };
export const my_xl: ViewStyle = { marginVertical: _SPACER.XL };
export const my_xxl: ViewStyle = { marginVertical: _SPACER.XXL };
export const my_xxxl: ViewStyle = { marginVertical: _SPACER.XXXL };

// Margin top styles
export const mt_sm: ViewStyle = { marginTop: _SPACER.SM };
export const mt_md: ViewStyle = { marginTop: _SPACER.MD };
export const mt_lg: ViewStyle = { marginTop: _SPACER.LG };
export const mt_xl: ViewStyle = { marginTop: _SPACER.XL };
export const mt_xxl: ViewStyle = { marginTop: _SPACER.XXL };
export const mt_xxxl: ViewStyle = { marginTop: _SPACER.XXXL };

// Margin bottom styles
export const mb_sm: ViewStyle = { marginBottom: _SPACER.SM };
export const mb_md: ViewStyle = { marginBottom: _SPACER.MD };
export const mb_lg: ViewStyle = { marginBottom: _SPACER.LG };
export const mb_xl: ViewStyle = { marginBottom: _SPACER.XL };
export const mb_xxl: ViewStyle = { marginBottom: _SPACER.XXL };
export const mb_xxxl: ViewStyle = { marginBottom: _SPACER.XXXL };

// Flexbasis percentage style
export const flex_b = (value: number): ViewStyle => {
  return { flexBasis: `${value}%` as DimensionValue };
};

// Width percentage style
export const width_p = (value: number): ViewStyle => {
  return { width: `${value}%` as DimensionValue };
};
