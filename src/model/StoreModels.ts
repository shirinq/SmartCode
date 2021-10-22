export type _Direction = 'ltr' | 'rtl'

export interface AppSettingModel {
  token: string | null,
  language: string,
  direction: _Direction,
  alignment: 'flex-end' | 'flex-start',
  textAlignment: 'right' | 'left';
  flexDirection: 'row-reverse' | 'row'
}
