import { useState } from '#app'

export const useTaMere = () => {
  return useState('taMere', () => 'bar')
}
