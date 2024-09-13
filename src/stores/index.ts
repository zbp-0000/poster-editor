// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia'

export interface UserProps {
  isLogin: boolean
  userName?: string
}

export interface TemplateProps {
  id: number
  title: string
  coverImg: string
  author: string
  copiedCount: number
}

export interface GlobalDataProps {
  user: UserProps
  templateList: TemplateProps[]
}

const testData: TemplateProps[] = [
  {
    id: 1,
    coverImg:
      'https://gd-hbimg.huaban.com/6900bc026002b9c4e5728dcd0334142aa69ed8bfc1d1-YrD0aW_fw1200',
    title: '前端架构师直播海报',
    author: '张三',
    copiedCount: 123,
  },
  {
    id: 2,
    coverImg:
      'https://gd-hbimg.huaban.com/6900bc026002b9c4e5728dcd0334142aa69ed8bfc1d1-YrD0aW_fw1200',
    title: '前端架构师直播海报',
    author: '张三',
    copiedCount: 123,
  },
  {
    id: 3,
    coverImg:
      'https://gd-hbimg.huaban.com/6900bc026002b9c4e5728dcd0334142aa69ed8bfc1d1-YrD0aW_fw1200',
    title: '前端架构师直播海报',
    author: '张三',
    copiedCount: 123,
  },
  {
    id: 4,
    coverImg:
      'https://gd-hbimg.huaban.com/6900bc026002b9c4e5728dcd0334142aa69ed8bfc1d1-YrD0aW_fw1200',
    title: '前端架构师直播海报',
    author: '张三',
    copiedCount: 123,
  },
]

/**
 * Simulate a login
 */
function apiLogin(a: string, p: string) {
  if (a === 'ed' && p === 'ed') return Promise.resolve({ isLogin: true })
  if (p === 'ed') return Promise.resolve({ isLogin: false })
  return Promise.reject(new Error('invalid credentials'))
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): GlobalDataProps => ({
    user: {
      isLogin: false,
    },
    templateList: testData,
  }),

  actions: {
    logout() {
      this.$patch({
        user: {
          isLogin: false,
          userName: '张三',
        },
      })

      // we could do other stuff like redirecting the user
    },

    /**
     * Attempt to login a user
     */
    async login(user: string, password: string) {
      const userData = await apiLogin(user, password)

      this.$patch({
        user: userData,
      })
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
