import { createTwikoo } from 'twikoo-edge'

export async function onRequest(context) {
  const { env } = context

  const twikoo = createTwikoo({
    kv: env.TWIKOO_KV,
    path: '/',
    admin: context.env.TWIKOO_ADMIN,
    config: {
      min: { comment:2, nick:1, mail:0 },
      allowAnonymous: true,
      allowLogin: false,
      allowRegister: false,
      // 👇 开启邮件通知
      mail: false, // 关闭邮件，避免报错
       // 👇 新增 pushoo 推送
       pushoo: {
         channel: 'wecom', // 企业微信
         token: env.TWIKOO_WECOM_TOKEN // 从环境变量读取
       }
    },
    // 👇 把你的邮箱设为管理员（收通知）
    master: ['zmzaxg@qq.com'],
    cron: true
  })

  return twikoo(context)
}
