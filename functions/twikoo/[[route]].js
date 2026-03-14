import { createTwikoo } from 'twikoo-edge'

export async function onRequest(context) {
  const { env } = context

  const twikoo = createTwikoo({
    kv: env.TWIKOO_KV,
    path: '/',
    config: {
      min: { comment:2, nick:1, mail:0 },
      allowAnonymous: true,
      allowLogin: false,
      allowRegister: false,
      // 👇 开启邮件通知
      mail: true
    },
    // 👇 把你的邮箱设为管理员（收通知）
    master: ['zmzaxg@qq.com'],
    cron: true
  })

  return twikoo(context)
}
