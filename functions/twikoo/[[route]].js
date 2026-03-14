import { createTwikoo } from 'twikoo-edge'

export async function onRequest(context) {
  const { env } = context

  const twikoo = createTwikoo({
    kv: env.TWIKOO_KV,
    path: '/',

    // 这里会自动在 KV 里生成 config:min 相关配置
    config: {
      min: {
        comment: 2,
        nick: 1,
        mail: 0
      },
      allowAnonymous: true,  // 允许匿名
      allowLogin: false,
      allowRegister: false
    },

    master: [],
    cron: true
  })

  return twikoo(context)
}
