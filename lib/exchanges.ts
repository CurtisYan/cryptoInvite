export interface Exchange {
  id: string
  name: string
  description: string
  benefits: string
  image: string
  referralLink: string
  tutorialSlug: string
  buttonText: string
}

const exchanges: Exchange[] = [
  {
    id: "binance",
    name: "币安",
    description: "全球最大的加密货币交易所，手续费最低",
    benefits: "高达25%手续费折扣",
    image: "/Binance.png",
    referralLink: "https://accounts.marketwebb.club/zh-CN/register?ref=898475908",
    tutorialSlug: "binance-guide",
    buttonText: "注册币安",
  },
  {
    id: "okx",
    name: "欧易",
    description: "具有高级交易功能的全球加密货币交易所",
    benefits: "高达40%手续费折扣",
    image: "/OKX.png",
    referralLink: "https://www.growthouyi.biz/zh-hans/join/68030337",
    tutorialSlug: "okx-guide",
    buttonText: "注册欧易",
  },
  {
    id: "bybit",
    name: "Bybit",
    description: "领先的加密货币衍生品交易所",
    benefits: "高达$4,000奖励",
    image: "/Bybit.png",
    referralLink: "https://www.bybit-global.com/zh-MY/invite/?ref=PXRLKWQ",
    tutorialSlug: "bybit-guide",
    buttonText: "注册Bybit",
  },
  {
    id: "bitget",
    name: "Bitget",
    description: "快速增长的交易所，具有跟单交易功能",
    benefits: "高达$5,000奖励",
    image: "/Bitget.png",
    referralLink: "https://www.cnbitget.com/zh-CN/referral/register?clacCode=XKPPAH1U",
    tutorialSlug: "bitget-guide",
    buttonText: "注册Bitget",
  },
  {
    id: "gate",
    name: "Gate.io",
    description: "拥有广泛山寨币选择的交易所",
    benefits: "高达30%手续费折扣",
    image: "/Gate.png",
    referralLink: "https://www.gatenode.xyz/signup/VLVFVLBDBQ?ref_type=102",
    tutorialSlug: "gate-guide",
    buttonText: "注册Gate.io",
  },
]

export function getAllExchanges(): Exchange[] {
  return exchanges
}

export function getPopularExchanges(count: number = 3): Exchange[] {
  return exchanges.slice(0, count)
}

export function getExchangeById(id: string): Exchange | undefined {
  return exchanges.find((exchange) => exchange.id === id)
}

