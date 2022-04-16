import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/nft-card',
    name: 'nft-card',
    component: () => import('@/components/nft-card/NftComponent.vue')
  },
  {
    path: '/message-board',
    name: 'message-board',
    component: () => import('@/components/messages-board/MessagesBoard.vue')
  },
  {
    path: '/timeline',
    name: 'timeline',
    component: () => import('@/components/timeline/Timeline.vue')
  },
  {
    path: '/rcok-paper-scissors',
    name: 'rcok-paper-scissors',
    component: () => import('@/components/rcok-paper-scissors/RcokPaperScissors.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
