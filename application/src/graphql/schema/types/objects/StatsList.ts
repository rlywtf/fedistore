import { objectType } from 'nexus'
import { Stats } from './Stats.js'

export const StatsList = objectType({
  name: 'StatsList',
  definition: (t) => {
    t.nonNull.list.nonNull.field('items', { type: Stats })
  }
})
