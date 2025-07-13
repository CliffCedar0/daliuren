// 十天干排列顺序
const HEAVENLY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];

// 十二地支排列顺序
const BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

// 天干对应的索引
const STEM_INDEX = {
    '甲': 0, '乙': 1, '丙': 2, '丁': 3, '戊': 4, '己': 5,
    '庚': 6, '辛': 7, '壬': 8, '癸': 9
};

// 钤法数据 - 天将加地支的含义
const QIANFA_DATA = {
    '贵人': {
        '子': { name: '贵人加子曰解纷', desc: '找贵人帮忙解决麻烦，多见于司法诉讼或托人办事' },
        '丑': { name: '贵人居丑曰升堂', desc: '告状、对峙、打官司' },
        '寅': { name: '贵人居寅曰凭几', desc: '贵人坐书案前，对应文职、老师等行业' },
        '卯': { name: '贵人居卯曰登车', desc: '出行、大客户上门、豪车' },
        '辰': { name: '贵人居辰曰天牢', desc: '贵人自身难保，无法发挥作用' },
        '巳': { name: '贵人居巳曰受贡', desc: '求人办事、送礼、尊敬有加' },
        '午': { name: '贵人居午曰受贡', desc: '求人办事、送礼、尊敬有加' },
        '未': { name: '贵人居未曰列席', desc: '请贵人吃饭，含入座、录取等意' },
        '申': { name: '贵人居申曰移角', desc: '在路上，动中吉' },
        '酉': { name: '贵人居酉入私门', desc: '走后门、包养、受贿等' },
        '戌': { name: '贵人居戌曰地狱', desc: '贵人自身难保，不能发挥作用' },
        '亥': { name: '贵人加亥登天门', desc: '指政府公务人员或关系强大的达官贵人' }
    },
    '螣蛇': {
        '子': { name: '螣蛇加子曰掩目', desc: '遗漏、疏忽、逃避、头疼' },
        '丑': { name: '螣蛇居丑曰蟠龟', desc: '转危为安，宜静不宜动' },
        '寅': { name: '螣蛇居寅曰生角', desc: '事情耗时久、钻牛角尖' },
        '卯': { name: '螣蛇居卯曰当门', desc: '家里有糟心事、事到临头' },
        '辰': { name: '螣蛇居辰曰象龙', desc: '自信心爆棚、狂妄、虚假广告等' },
        '巳': { name: '螣蛇居巳曰乘雾', desc: '烟雾弹、假话、虚实难辨' },
        '午': { name: '螣蛇居午曰飞空', desc: '想法不切实际' },
        '未': { name: '螣蛇居未曰入林', desc: '心思深、隐藏' },
        '申': { name: '螣蛇居申曰衔剑', desc: '隐患大、精神紧张' },
        '酉': { name: '螣蛇居酉曰露齿', desc: '有毒、想害人、骂人难听等' },
        '戌': { name: '螣蛇居戌曰入冢', desc: '多余担心、自闭症' },
        '亥': { name: '螣蛇加亥曰坠水', desc: '测走失大凶，担心、后怕' }
    },
    '朱雀': {
        '子': { name: '朱雀加子曰损羽', desc: '考试成绩差、收不到信息文书' },
        '丑': { name: '朱雀居丑曰掩目', desc: '争论休止、文书信息不来等' },
        '寅': { name: '朱雀居寅曰安巢', desc: '真消息、文书状态好、分数高' },
        '卯': { name: '朱雀居卯曰安巢', desc: '真消息、文书状态好、分数高' },
        '辰': { name: '朱雀居辰曰投网', desc: '投标、上传、信息录入、没消息' },
        '巳': { name: '朱雀居巳曰昼翔', desc: '信息即将到来' },
        '午': { name: '朱雀居午曰衔符', desc: '真消息、文书状态好、分数高、白热化' },
        '未': { name: '朱雀居未曰临坟', desc: '没消息、不联系、逃避' },
        '申': { name: '朱雀居申曰厉嘴', desc: '口才好、争论强胜' },
        '酉': { name: '朱雀居酉曰夜噪', desc: '吵架、辩论、官非' },
        '戌': { name: '朱雀居戌曰投网', desc: '投标、上传、信息录入、没消息' },
        '亥': { name: '朱雀加亥曰入水', desc: '文书信息因问题不来、停滞' }
    },
    '六合': {
        '子': { name: '六合加子曰反目', desc: '翻脸、关系恶化，测感情不佳' },
        '丑': { name: '六合居丑曰妆严', desc: '谄媚、有心机、谨慎' },
        '寅': { name: '六合居寅曰乘轩', desc: '相亲介绍、测感情吉' },
        '卯': { name: '六合居卯曰入室', desc: '上门、同居、室内会谈' },
        '辰': { name: '六合居辰曰违理', desc: '违背常规，合作走后门、感情关系非正常' },
        '巳': { name: '六合居巳曰不谐', desc: '感情不合、三观不合' },
        '午': { name: '六合居午曰升堂', desc: '对峙、走法律途径，问感情见父母' },
        '未': { name: '六合居未曰纳采', desc: '结婚、宴请吃饭' },
        '申': { name: '六合居申曰结发', desc: '感情稳定、相濡以沫' },
        '酉': { name: '六合居酉曰私窜', desc: '托关系走后门、男女关系混乱' },
        '戌': { name: '六合居戌曰亡羞', desc: '恼羞成怒、后悔' },
        '亥': { name: '六合加亥曰待命', desc: '等待指示、录取' }
    },
    '勾陈': {
        '子': { name: '勾陈加子曰投机', desc: '侥幸、坏心思、想坑人' },
        '丑': { name: '勾陈居丑曰受越', desc: '利益纷争、不顾劝阻强行而为' },
        '寅': { name: '勾陈居寅曰遭囚', desc: '被官方制止' },
        '卯': { name: '勾陈居卯曰临门', desc: '家庭不和、家暴、警察上门' },
        '辰': { name: '勾陈居辰曰升堂', desc: '上法庭、向领导坦白' },
        '巳': { name: '勾陈居巳曰铸印', desc: '测文书吉，合同录取等事成' },
        '午': { name: '勾陈居午曰反目', desc: '翻脸、关系恶化，多遭公检法严查' },
        '未': { name: '勾陈居未曰入驿', desc: '出门、出差、在路上' },
        '申': { name: '勾陈居申曰趋户', desc: '上门、约好去某地' },
        '酉': { name: '勾陈居酉曰披刃', desc: '手术、刀伤、打架、情绪暴戾' },
        '戌': { name: '勾陈居戌曰下狱', desc: '坐牢、被孤立、无晋升希望' },
        '亥': { name: '勾陈加亥曰寨裳', desc: '心惊肉跳、失眠多梦' }
    },
    '青龙': {
        '子': { name: '青龙加子曰入海', desc: '青龙状态好，有钱、大钱' },
        '丑': { name: '青龙居丑曰蟠泥', desc: '状态不好，财务问题、被拖欠' },
        '寅': { name: '青龙居寅曰乘云', desc: '状态好，利经商' },
        '卯': { name: '青龙居卯曰驱雷', desc: '状态好，有钱' },
        '辰': { name: '青龙居辰曰飞天', desc: '状态好，有钱、大钱，适合大生意合作' },
        '巳': { name: '青龙居巳曰掩目', desc: '损财、财物失窃' },
        '午': { name: '青龙居午曰烧身', desc: '损财、经济压力大' },
        '未': { name: '青龙居未曰在陆', desc: '财务有问题但有转机' },
        '申': { name: '青龙居申曰临鳞', desc: '损财、破财较大' },
        '酉': { name: '青龙居酉曰摧角', desc: '损财、破财更大' },
        '戌': { name: '青龙居戌曰登魁', desc: '考试学业吉，中标、拔得头筹' },
        '亥': { name: '青龙加亥曰游江', desc: '青龙状态好，有钱、大钱但不如"入海"' }
    },
    '天空': {
        '子': { name: '天空加子曰伏室', desc: '宅家不出、多因女人起祸' },
        '丑': { name: '天空居丑曰侍侧', desc: '身边有小人、背后举报等' },
        '寅': { name: '天空居寅曰乘侮', desc: '上当受骗、见小人' },
        '卯': { name: '天空居卯曰乘侮', desc: '上当受骗、见小人' },
        '辰': { name: '天空居辰曰凶恶', desc: '报官无用、狼狈为奸' },
        '巳': { name: '天空居巳曰受辱', desc: '被辱骂欺凌' },
        '午': { name: '天空居午曰识字', desc: '暴露、测文书利' },
        '未': { name: '天空居未曰趋进', desc: '图财、贪财' },
        '申': { name: '天空居申曰鼓舌', desc: '说话多、哄骗、费口舌' },
        '酉': { name: '天空居酉曰巧说', desc: '花言巧语、哄骗、销售' },
        '戌': { name: '天空居戌曰居家', desc: '宅家不出、小人得志' },
        '亥': { name: '天空加亥曰诬词', desc: '诽谤、有心机' }
    },
    '白虎': {
        '子': { name: '白虎加子曰溺水', desc: '绝望、道路受阻，寻人忌得' },
        '丑': { name: '白虎居丑曰在野', desc: '出行在外' },
        '寅': { name: '白虎居寅曰登山', desc: '气势强、来势汹汹' },
        '卯': { name: '白虎居卯曰临门', desc: '祸乱临头' },
        '辰': { name: '白虎居辰曰咥人', desc: '气愤、大怒' },
        '巳': { name: '白虎居巳曰焚身', desc: '焦急' },
        '午': { name: '白虎居午曰焚身', desc: '焦急' },
        '未': { name: '白虎居未曰在野', desc: '出行在外' },
        '申': { name: '白虎居申曰衔牒', desc: '信息传送' },
        '酉': { name: '白虎居酉曰临门', desc: '祸乱临头' },
        '戌': { name: '白虎居戌曰落井', desc: '绝望、掉坑' },
        '亥': { name: '白虎加亥曰溺水', desc: '绝望、道路受阻，寻人忌得' }
    },
    '太常': {
        '子': { name: '太常加子曰遭枷', desc: '受制、背债务、受罚，问官司忌得' },
        '丑': { name: '太常居丑曰受爵', desc: '升官晋爵、利升迁比赛卦' },
        '寅': { name: '太常居寅曰侧目', desc: '敢怒不敢言、受关注' },
        '卯': { name: '太常居卯曰掩冠', desc: '意外之财、财物有失、奸情' },
        '辰': { name: '太常居辰曰佩印', desc: '获证书、新官上任，利升迁考试等' },
        '巳': { name: '太常居巳曰铸印', desc: '喜事、测文书吉，合同录取事成' },
        '午': { name: '太常居午曰乘轩', desc: '测官运吉，升职加薪' },
        '未': { name: '太常居未曰捧觞', desc: '喝酒、喜庆、谈生意' },
        '申': { name: '太常居申曰衔杯', desc: '喝酒、谈生意' },
        '酉': { name: '太常居酉曰券书', desc: '文书合同、学习，刚愎自用' },
        '戌': { name: '太常居戌曰逆命', desc: '反悔、跑路、不服气' },
        '亥': { name: '太常加亥曰征召', desc: '找人、叫人、通知' }
    },
    '玄武': {
        '子': { name: '玄武加子曰散发', desc: '失眠、惊惶、担惊受怕' },
        '丑': { name: '玄武居丑曰升堂', desc: '报警、对簿公堂、以权谋私' },
        '寅': { name: '玄武居寅曰入林', desc: '无影无踪' },
        '卯': { name: '玄武居卯曰窥户', desc: '家中失窃、暗昧之事' },
        '辰': { name: '玄武居辰曰失路', desc: '失踪、迷路' },
        '巳': { name: '玄武居巳曰反顾', desc: '惶恐、虚惊' },
        '午': { name: '玄武居午曰截路', desc: '道路不通、测病凶' },
        '未': { name: '玄武居未曰不成', desc: '失物不失、诸事难成' },
        '申': { name: '玄武居申曰折足', desc: '半途而废、腿脚不便' },
        '酉': { name: '玄武居酉曰拔剑', desc: '剑拔弩张、形势严峻' },
        '戌': { name: '玄武居戌曰遭囚', desc: '身处困境、利捕盗' },
        '亥': { name: '玄武加亥曰伏藏', desc: '躲起来、逃避' }
    },
    '太阴': {
        '子': { name: '太阴加子曰垂帘', desc: '背后交易、睡觉' },
        '丑': { name: '太阴居丑曰入内', desc: '钱财入账' },
        '寅': { name: '太阴居寅曰踯躅', desc: '文书财物动作、男女共寝' },
        '卯': { name: '太阴居卯曰微行', desc: '谨慎行事、怕被抓把柄' },
        '辰': { name: '太阴居辰曰造庭', desc: '谄媚、游龙戏凤' },
        '巳': { name: '太阴居巳曰伏枕', desc: '精神不济、卧病在床' },
        '午': { name: '太阴居午曰脱巾', desc: '文书财物动作、脱衣服遗失' },
        '未': { name: '太阴居未曰观书', desc: '文书相关、看书' },
        '申': { name: '太阴居申曰执政', desc: '执行计划、女人管事' },
        '酉': { name: '太阴居酉曰闭户', desc: '闭门不出' },
        '戌': { name: '太阴居戌曰被察', desc: '被发现、露端倪' },
        '亥': { name: '太阴加亥曰裸形', desc: '情色暧昧、卧床、惊疑' }
    },
    '天后': {
        '子': { name: '天后加子曰守闺', desc: '居家不出' },
        '丑': { name: '天后居丑曰偷窥', desc: '惊恐、打探消息' },
        '寅': { name: '天后居寅曰理发', desc: '悠游闲暇' },
        '卯': { name: '天后居卯曰临门', desc: '女人上门、走后门' },
        '辰': { name: '天后居辰曰毁妆', desc: '羞愤、悔恨，测寻人凶' },
        '巳': { name: '天后居巳曰裸体', desc: '坦诚、测寻人凶' },
        '午': { name: '天后居午曰伏枕', desc: '卧床不起、事情难遂' },
        '未': { name: '天后居未曰沐浴', desc: '惊惶，课内见青龙有男女情色象，寻人在水里' },
        '申': { name: '天后居申曰整容', desc: '穿衣打扮、医美、悠闲' },
        '酉': { name: '天后居酉曰倚户', desc: '家中有女人、涉色情美容业' },
        '戌': { name: '天后居戌曰褰帷', desc: '卧病、事情受阻' },
        '亥': { name: '天后加亥曰治事', desc: '持家管理有方、采取行动' }
    }
};

// 地支对应的索引
const BRANCH_INDEX = {
    '子': 0, '丑': 1, '寅': 2, '卯': 3, '辰': 4, '巳': 5,
    '午': 6, '未': 7, '申': 8, '酉': 9, '戌': 10, '亥': 11
};

// 地支对应的时间
const BRANCH_TIMES = {
    '子': '23:00-1:00',
    '丑': '1:00-3:00',
    '寅': '3:00-5:00',
    '卯': '5:00-7:00',
    '辰': '7:00-9:00',
    '巳': '9:00-11:00',
    '午': '11:00-13:00',
    '未': '13:00-15:00',
    '申': '15:00-17:00',
    '酉': '17:00-19:00',
    '戌': '19:00-21:00',
    '亥': '21:00-23:00'
};

// 月将名称
const MONTH_GENERALS = {
    '子': '神后',
    '丑': '大吉',
    '寅': '功曹',
    '卯': '太冲',
    '辰': '天罡',
    '巳': '太乙',
    '午': '胜光',
    '未': '小吉',
    '申': '传送',
    '酉': '从魁',
    '戌': '河魁',
    '亥': '登明'
};

// 贵人对应表
const NOBLE_PERSON_MAP = {
    '甲': ['丑', '未'], '戊': ['丑', '未'], '庚': ['丑', '未'],
    '乙': ['子', '申'], '己': ['子', '申'],
    '丙': ['亥', '酉'], '丁': ['亥', '酉'],
    '壬': ['巳', '卯'], '癸': ['巳', '卯'],
    '辛': ['午', '寅']
};

// 十二天将
const TWELVE_TIANJIANGS = [
    '贵人', '螣蛇', '朱雀', '六合', '勾陈', '青龙', 
    '天空', '白虎', '太常', '玄武', '太阴', '天后'
];

// 昼夜判断：卯至申为昼，酉至寅为夜
const DAY_BRANCHES = ['卯', '辰', '巳', '午', '未', '申'];
const NIGHT_BRANCHES = ['酉', '戌', '亥', '子', '丑', '寅'];

// 地支在表格中的顺序（用于天将排布）
const BRANCH_POSITIONS = [
    '巳', '午', '未', '申', '酉', '戌', '亥', '子', '丑', '寅', '卯', '辰'
];

// 标准地支顺序（用于天将排布）
const STANDARD_BRANCH_ORDER = [
    '子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'
];

// 干支寄宫映射表（四正位子午卯酉不用）
const STEM_LODGE_MAP = {
    '甲': '寅', '乙': '辰', '丙': '巳', '丁': '未', '戊': '巳',
    '己': '未', '庚': '申', '辛': '戌', '壬': '亥', '癸': '丑'
};

// 五行颜色映射表
const WUXING_COLORS = {
    '甲': '#317023', '乙': '#317023',  // 木
    '丙': '#ce2d20', '丁': '#ce2d20',  // 火
    '戊': '#98511e', '己': '#98511e',  // 土
    '庚': '#e08433', '辛': '#e08433',  // 金
    '壬': '#0803a8', '癸': '#0803a8',  // 水
    '子': '#0803a8', '丑': '#98511e', '寅': '#317023',
    '卯': '#317023', '辰': '#98511e', '巳': '#ce2d20',
    '午': '#ce2d20', '未': '#98511e', '申': '#e08433',
    '酉': '#e08433', '戌': '#98511e', '亥': '#0803a8'
};

// 天将五行颜色映射表
const TIANJIANG_COLORS = {
    '螣蛇': '#ce2d20', '朱雀': '#ce2d20',  // 火
    '勾陈': '#98511e', '太常': '#98511e', '天空': '#98511e', '贵人': '#98511e',  // 土
    '六合': '#317023', '青龙': '#317023',  // 木
    '天后': '#0803a8', '玄武': '#0803a8',  // 水
    '白虎': '#e08433', '太阴': '#e08433'   // 金
};

// 天干合化表
const TIANGAN_HE = {
    '甲': '己', '己': '甲',
    '乙': '庚', '庚': '乙',
    '丙': '辛', '辛': '丙',
    '丁': '壬', '壬': '丁',
    '戊': '癸', '癸': '戊'
};

// 地支刑冲表
const DIZHI_XING = {
    '子': '卯', '卯': '子',
    '丑': '戌', '戌': '未', '未': '丑',
    '寅': '巳', '巳': '申', '申': '寅',
    '辰': '辰', '午': '午', '酉': '酉', '亥': '亥'  // 自刑
};

const DIZHI_CHONG = {
    '子': '午', '午': '子',
    '丑': '未', '未': '丑',
    '寅': '申', '申': '寅',
    '卯': '酉', '酉': '卯',
    '辰': '戌', '戌': '辰',
    '巳': '亥', '亥': '巳'
};

// 地支三合表
const DIZHI_SANHE = {
    '申': ['子', '辰'], '子': ['申', '辰'], '辰': ['申', '子'],
    '亥': ['卯', '未'], '卯': ['亥', '未'], '未': ['亥', '卯'],
    '寅': ['午', '戌'], '午': ['寅', '戌'], '戌': ['寅', '午'],
    '巳': ['酉', '丑'], '酉': ['巳', '丑'], '丑': ['巳', '酉']
};

// 驿马表
const YIMA = {
    '申': '寅', '子': '寅', '辰': '寅',
    '寅': '申', '午': '申', '戌': '申',
    '巳': '亥', '酉': '亥', '丑': '亥',
    '亥': '巳', '卯': '巳', '未': '巳'
};

// 孟仲季分类
const MENGZHONGJI = {
    '孟': ['寅', '申', '巳', '亥'],
    '仲': ['子', '午', '卯', '酉'],
    '季': ['辰', '戌', '丑', '未']
};

// 五行相克表
const WUXING_KE = {
    '甲': '土', '乙': '土',  // 木克土
    '丙': '金', '丁': '金',  // 火克金
    '戊': '水', '己': '水',  // 土克水
    '庚': '木', '辛': '木',  // 金克木
    '壬': '火', '癸': '火',  // 水克火
    '寅': '土', '卯': '土',  // 木克土
    '巳': '金', '午': '金',  // 火克金
    '辰': '水', '戌': '水', '丑': '水', '未': '水',  // 土克水
    '申': '木', '酉': '木',  // 金克木
    '亥': '火', '子': '火'   // 水克火
};

// 五行被克表
const WUXING_BEI_KE = {
    '甲': '金', '乙': '金',  // 木被金克
    '丙': '水', '丁': '水',  // 火被水克
    '戊': '木', '己': '木',  // 土被木克
    '庚': '火', '辛': '火',  // 金被火克
    '壬': '土', '癸': '土',  // 水被土克
    '寅': '金', '卯': '金',  // 木被金克
    '巳': '水', '午': '水',  // 火被水克
    '辰': '木', '戌': '木', '丑': '木', '未': '木',  // 土被木克
    '申': '火', '酉': '火',  // 金被火克
    '亥': '土', '子': '土'   // 水被土克
};

class DaLiuRenCalculator {
    constructor() {
        this.autoUpdateTimer = null;
        this.isAutoUpdate = false;
        this.timeUpdateTimer = null;
        this.sizhuUpdateTimer = null;
        
        // 添加全局引用用于调试
        window.daLiuRenCalculator = this;
        
        this.initializeElements();
        this.setCurrentDateTime();
        this.bindEvents();
        this.calculatePlates();
        this.updateSizhu();
        this.startTimeUpdate();
        this.startSizhuUpdate();
        
        // 立即强制更新一次四柱
        setTimeout(() => {
            console.log('强制更新四柱...');
            this.updateSizhu();
            
            // 强制更新天将
            setTimeout(() => {
                console.log('强制更新天将...');
                const currentTimeBranch = this.getCurrentTimeBranch();
                this.updateTianjiangAndXungan(currentTimeBranch);
            }, 500);
        }, 1000);
        
        // 添加测试函数
        this.testNoblePersonCalculation();
    }
    
    // 测试贵人计算函数
    testNoblePersonCalculation() {
        console.log('=== 测试贵人计算 ===');
        
        // 测试癸日申时（当前的四柱）
        const testCases = [
            { stem: '癸', timeBranch: '申', expected: '巳', description: '癸日申时(昼贵)' },
            { stem: '癸', timeBranch: '酉', expected: '卯', description: '癸日酉时(夜贵)' },
            { stem: '甲', timeBranch: '卯', expected: '丑', description: '甲日卯时(昼贵)' },
            { stem: '甲', timeBranch: '亥', expected: '未', description: '甲日亥时(夜贵)' }
        ];
        
        testCases.forEach(testCase => {
            const result = this.calculateNoblePerson(testCase.stem, testCase.timeBranch);
            const isCorrect = result === testCase.expected;
            console.log(`${testCase.description}: 期望=${testCase.expected}, 实际=${result}, ${isCorrect ? '✓' : '✗'}`);
        });
        
        console.log('=== 测试完成 ===');
    }

    initializeElements() {
        this.monthGeneralSelect = document.getElementById('month-general');
        this.timeBranchSelect = document.getElementById('time-branch');
        this.calculateBtn = document.getElementById('calculate-btn');
        this.autoUpdateBtn = document.getElementById('auto-update-btn');
        this.plateTable = document.querySelector('.plate-table');
        this.calculationInfo = document.getElementById('calculation-info');
        this.centerTime = document.getElementById('center-time');
        this.centerTime2 = document.getElementById('center-time2');
        this.currentTime = document.getElementById('current-time');
        
        // 四柱元素
        this.yearGan = document.getElementById('year-gan');
        this.yearZhi = document.getElementById('year-zhi');
        this.monthGan = document.getElementById('month-gan');
        this.monthZhi = document.getElementById('month-zhi');
        this.dayGan = document.getElementById('day-gan');
        this.dayZhi = document.getElementById('day-zhi');
        this.hourGan = document.getElementById('hour-gan');
        this.hourZhi = document.getElementById('hour-zhi');
        
        // 中心四柱元素
        this.centerYearGan = document.getElementById('center-year-gan');
        this.centerYearZhi = document.getElementById('center-year-zhi');
        this.centerMonthGan = document.getElementById('center-month-gan');
        this.centerMonthZhi = document.getElementById('center-month-zhi');
        this.centerDayGan = document.getElementById('center-day-gan');
        this.centerDayZhi = document.getElementById('center-day-zhi');
        this.centerHourGan = document.getElementById('center-hour-gan');
        this.centerHourZhi = document.getElementById('center-hour-zhi');
        
        // 第二个中心四柱元素
        this.centerYearGan2 = document.getElementById('center-year-gan2');
        this.centerYearZhi2 = document.getElementById('center-year-zhi2');
        this.centerMonthGan2 = document.getElementById('center-month-gan2');
        this.centerMonthZhi2 = document.getElementById('center-month-zhi2');
        this.centerDayGan2 = document.getElementById('center-day-gan2');
        this.centerDayZhi2 = document.getElementById('center-day-zhi2');
        this.centerHourGan2 = document.getElementById('center-hour-gan2');
        this.centerHourZhi2 = document.getElementById('center-hour-zhi2');
        
        // 旬干元素
        this.xunganValue = document.getElementById('xungan-value');
        
        // 四课元素
        this.sikeElements = {
            ke1: {
                top: document.getElementById('sike-1-top'),
                tianjiang: document.getElementById('sike-1-tianjiang'),
                bottom: document.getElementById('sike-1-bottom')
            },
            ke2: {
                top: document.getElementById('sike-2-top'),
                tianjiang: document.getElementById('sike-2-tianjiang'),
                bottom: document.getElementById('sike-2-bottom')
            },
            ke3: {
                top: document.getElementById('sike-3-top'),
                tianjiang: document.getElementById('sike-3-tianjiang'),
                bottom: document.getElementById('sike-3-bottom')
            },
            ke4: {
                top: document.getElementById('sike-4-top'),
                tianjiang: document.getElementById('sike-4-tianjiang'),
                bottom: document.getElementById('sike-4-bottom')
            }
        };

        // 三传元素
        this.sanchuanElements = {
            chuchuan: {
                liuqin: document.getElementById('chuchuan-liuqin'),
                shishen: document.getElementById('chuchuan-shishen'),
                gan: document.getElementById('chuchuan-gan'),
                zhi: document.getElementById('chuchuan-zhi'),
                tianjiang: document.getElementById('chuchuan-tianjiang')
            },
            zhongchuan: {
                liuqin: document.getElementById('zhongchuan-liuqin'),
                shishen: document.getElementById('zhongchuan-shishen'),
                gan: document.getElementById('zhongchuan-gan'),
                zhi: document.getElementById('zhongchuan-zhi'),
                tianjiang: document.getElementById('zhongchuan-tianjiang')
            },
            mochuan: {
                liuqin: document.getElementById('mochuan-liuqin'),
                shishen: document.getElementById('mochuan-shishen'),
                gan: document.getElementById('mochuan-gan'),
                zhi: document.getElementById('mochuan-zhi'),
                tianjiang: document.getElementById('mochuan-tianjiang')
            }
        };
    }

    bindEvents() {
        this.calculateBtn.addEventListener('click', () => {
            console.log('用户点击排盘按钮，强制更新');
            this.setCurrentDateTime();
            this.calculatePlates();
            this.updateSizhu();
            console.log('强制更新完成');
        });
        
        this.autoUpdateBtn.addEventListener('click', () => this.toggleAutoUpdate());
        
        // 实时计算
        this.monthGeneralSelect.addEventListener('change', () => this.calculatePlates());
        this.timeBranchSelect.addEventListener('change', () => this.calculatePlates());
        
        // 钤法弹出框事件
        this.initQianfaModal();
        
        // 添加一个全局更新函数，方便调试
        window.forceUpdateSizhu = () => {
            console.log('手动强制更新四柱');
            this.updateSizhu();
        };
        
        window.forceUpdateTianjiang = () => {
            console.log('手动强制更新天将');
            const currentTimeBranch = this.getCurrentTimeBranch();
            this.updateTianjiangAndXungan(currentTimeBranch);
        };
        
        window.testTianjiang = () => {
            console.log('测试天将显示');
            // 直接设置所有天将为测试值
            const cells = this.plateTable.querySelectorAll('.branch-cell');
            cells.forEach((cell, index) => {
                const tianjiangElement = cell.querySelector('.tianjiang');
                if (tianjiangElement) {
                    tianjiangElement.textContent = TWELVE_TIANJIANGS[index % 12];
                    tianjiangElement.style.visibility = 'visible';
                    console.log(`设置 ${cell.getAttribute('data-branch')} 的天将为: ${TWELVE_TIANJIANGS[index % 12]}`);
                }
            });
        };
        
        window.testTianjiangArrangement = () => {
            console.log('=== 测试天将排布 ===');
            const dayStem = '癸';
            const timeBranch = '酉';
            const monthGeneral = this.monthGeneralSelect.value;
            
            // 计算贵人位置（天盘）
            const nobleBranch = this.calculateNoblePerson(dayStem, timeBranch);
            console.log(`日干: ${dayStem}, 时支: ${timeBranch}`);
            console.log(`贵人位置（天盘）: ${nobleBranch}`);
            
            // 计算天盘
            const heavenPlate = this.calculateHeavenPlate(monthGeneral, timeBranch);
            console.log('天盘:', heavenPlate);
            
            // 找到天盘上贵人位置对应的地盘位置
            let nobleGroundPosition = null;
            for (let groundBranch in heavenPlate) {
                if (heavenPlate[groundBranch] === nobleBranch) {
                    nobleGroundPosition = groundBranch;
                    break;
                }
            }
            
            console.log(`贵人在地盘的位置: ${nobleGroundPosition}`);
            
            if (nobleGroundPosition) {
                const tianjiangMap = this.arrangeTwelveTianjiangs(nobleGroundPosition);
                console.log('天将排布方向:', ['亥', '子', '丑', '寅', '卯', '辰'].includes(nobleGroundPosition) ? '顺时针' : '逆时针');
                console.log('天将排布:');
                
                // 按照地盘位置顺序显示
                BRANCH_POSITIONS.forEach((branch, index) => {
                    console.log(`${branch}: ${tianjiangMap[branch]}`);
                });
            }
            
            console.log('=== 测试完成 ===');
        };
        
        window.checkTianjiangDOM = () => {
            console.log('=== 检查天将DOM状态 ===');
            const cells = document.querySelectorAll('.branch-cell');
            cells.forEach(cell => {
                const branch = cell.getAttribute('data-branch');
                const tianjiangElement = cell.querySelector('.tianjiang');
                if (tianjiangElement) {
                    console.log(`${branch}: 天将内容="${tianjiangElement.textContent}", 可见性=${tianjiangElement.style.visibility === 'hidden' ? '隐藏' : '显示'}`);
                } else {
                    console.log(`${branch}: 找不到天将元素`);
                }
            });
            console.log('=== 检查完成 ===');
        };
        
        window.fullTianjiangTest = () => {
            console.log('=== 完整天将测试 ===');
            testTianjiangArrangement();
            console.log('');
            forceUpdateTianjiang();
            console.log('');
            checkTianjiangDOM();
            console.log('=== 完整测试完成 ===');
        };
        
        window.testHeavenPlate = () => {
            console.log('=== 测试天盘计算 ===');
            const monthGeneral = this.monthGeneralSelect.value;
            const timeBranch = this.timeBranchSelect.value;
            
            console.log(`月将: ${monthGeneral}, 时支: ${timeBranch}`);
            
            const heavenPlate = this.calculateHeavenPlate(monthGeneral, timeBranch);
            console.log('天盘排布:');
            
            // 按照地盘位置顺序显示天盘
            BRANCH_POSITIONS.forEach((groundBranch, index) => {
                const heavenBranch = heavenPlate[groundBranch];
                console.log(`地盘${groundBranch} -> 天盘${heavenBranch}`);
            });
            
            console.log('=== 测试完成 ===');
        };
        
        window.testSike = () => {
            console.log('=== 测试四课计算 ===');
            const monthGeneral = this.monthGeneralSelect.value;
            const timeBranch = this.timeBranchSelect.value;
            
            // 获取当前日干支
            const now = new Date();
            const solar = Solar.fromDate(now);
            const lunar = solar.getLunar();
            const dayGZ = lunar.getDayInGanZhi();
            const dayStem = dayGZ.charAt(0);
            const dayBranch = dayGZ.charAt(1);
            
            console.log(`日干支: ${dayGZ} (${dayStem}${dayBranch})`);
            console.log(`日干寄宫: ${STEM_LODGE_MAP[dayStem]}`);
            
            // 计算天盘
            const heavenPlate = this.calculateHeavenPlate(monthGeneral, timeBranch);
            
            // 计算天将映射
            const nobleGroundPosition = this.calculateNoblePerson(dayStem, timeBranch);
            const tianjiangMap = this.arrangeTwelveTianjiangs(nobleGroundPosition);
            
            // 计算四课
            const sike = this.calculateSike(dayStem, dayBranch, heavenPlate, tianjiangMap);
            
            console.log('四课计算结果:');
            console.log(`第一课: ${sike.ke1.top} / ${sike.ke1.bottom} (干上) - 天盘${sike.ke1.top}的天将: ${sike.ke1.tianjiang}`);
            console.log(`第二课: ${sike.ke2.top} / ${sike.ke2.bottom} (干阴) - 天盘${sike.ke2.top}的天将: ${sike.ke2.tianjiang}`);
            console.log(`第三课: ${sike.ke3.top} / ${sike.ke3.bottom} (支上) - 天盘${sike.ke3.top}的天将: ${sike.ke3.tianjiang}`);
            console.log(`第四课: ${sike.ke4.top} / ${sike.ke4.bottom} (支阴) - 天盘${sike.ke4.top}的天将: ${sike.ke4.tianjiang}`);
            
            console.log('=== 测试完成 ===');
        };
        
        window.testWuxingColors = () => {
            console.log('=== 测试五行颜色 ===');
            
            // 显示五行颜色映射
            console.log('五行颜色映射:');
            console.log('木:', WUXING_COLORS['甲'], '(甲乙寅卯)');
            console.log('火:', WUXING_COLORS['丙'], '(丙丁巳午)');
            console.log('土:', WUXING_COLORS['戊'], '(戊己辰戌丑未)');
            console.log('金:', WUXING_COLORS['庚'], '(庚辛申酉)');
            console.log('水:', WUXING_COLORS['壬'], '(壬癸亥子)');
            
            // 检查页面上的颜色应用
            const testElements = [
                { selector: '#year-gan', name: '年干' },
                { selector: '#day-gan', name: '日干' },
                { selector: '#sike-1-top', name: '第一课上' },
                { selector: '.heaven-branch', name: '天盘地支' },
                { selector: '.tianjiang', name: '天将' },
                { selector: '.xungan', name: '旬干' },
                { selector: '.ground-branch', name: '地盘地支' }
            ];
            
            testElements.forEach(test => {
                const element = document.querySelector(test.selector);
                if (element) {
                    const text = element.textContent;
                    const color = element.style.color;
                    const bgColor = element.style.backgroundColor || element.style.background;
                    const expectedColor = WUXING_COLORS[text];
                    console.log(`${test.name}: "${text}" -> 颜色=${color}, 背景=${bgColor}, 期望=${expectedColor}`);
                } else {
                    console.log(`${test.name}: 未找到元素`);
                }
            });
            
            console.log('=== 测试完成 ===');
        };
        
        window.testNoBackgrounds = () => {
            console.log('=== 检查背景颜色清除 ===');
            
            // 检查所有相关元素的背景颜色
            const selectors = [
                '.tianjiang', '.heaven-branch', '.xungan', '.ground-branch', 
                '.sike-cell'
            ];
            
            selectors.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                console.log(`${selector}: 找到 ${elements.length} 个元素`);
                
                elements.forEach((element, index) => {
                    const bgColor = element.style.backgroundColor || element.style.background;
                    const hasBg = bgColor && bgColor !== 'transparent' && bgColor !== '';
                    if (hasBg) {
                        console.log(`  ${selector}[${index}]: 仍有背景颜色 ${bgColor}`);
                    }
                });
            });
            
            console.log('=== 检查完成 ===');
        };

        window.testTianjiangColors = () => {
            console.log('=== 测试天将颜色 ===');
            
            // 显示天将颜色映射
            console.log('天将颜色映射:');
            Object.entries(TIANJIANG_COLORS).forEach(([tianjiang, color]) => {
                console.log(`${tianjiang}: ${color}`);
            });
            
            // 检查页面上的天将颜色
            const tianjiangElements = document.querySelectorAll('.tianjiang');
            console.log(`检查 ${tianjiangElements.length} 个天将元素的颜色`);
            
            tianjiangElements.forEach((element, index) => {
                const tianjiangText = element.textContent;
                const actualColor = element.style.color;
                const expectedColor = TIANJIANG_COLORS[tianjiangText];
                
                if (tianjiangText) {
                    console.log(`天将 ${tianjiangText}: 实际颜色=${actualColor}, 期望颜色=${expectedColor}`);
                    if (actualColor !== expectedColor) {
                        console.warn(`颜色不匹配: ${tianjiangText}`);
                    }
                }
            });
            
            console.log('=== 测试完成 ===');
        };

        window.testSikeTianjiang = () => {
            console.log('=== 测试四课天将 ===');
            
            // 检查四课天将元素
            const sikeElements = [
                { id: 'sike-1-tianjiang', name: '第一课天将' },
                { id: 'sike-2-tianjiang', name: '第二课天将' },
                { id: 'sike-3-tianjiang', name: '第三课天将' },
                { id: 'sike-4-tianjiang', name: '第四课天将' }
            ];
            
            sikeElements.forEach(test => {
                const element = document.getElementById(test.id);
                if (element) {
                    const tianjiangText = element.textContent;
                    const actualColor = element.style.color;
                    const expectedColor = TIANJIANG_COLORS[tianjiangText];
                    
                    console.log(`${test.name}: 内容="${tianjiangText}", 颜色=${actualColor}, 期望颜色=${expectedColor}`);
                    
                    if (tianjiangText && actualColor !== expectedColor) {
                        console.warn(`颜色不匹配: ${test.name}`);
                    }
                } else {
                    console.error(`找不到元素: ${test.id}`);
                }
            });
            
            console.log('=== 测试完成 ===');
        };

        window.testSanchuan = () => {
            console.log('=== 测试三传计算 ===');
            
            // 获取当前时间和干支
            const now = new Date();
            const solar = Solar.fromDate(now);
            const lunar = solar.getLunar();
            const dayGZ = lunar.getDayInGanZhi();
            const dayStem = dayGZ.charAt(0);
            const dayBranch = dayGZ.charAt(1);
            const timeBranch = this.getCurrentTimeBranch();
            
            console.log(`当前时间: ${dayStem}${dayBranch}日 ${timeBranch}时`);
            
            // 计算天盘和天将
            const monthGeneral = this.getCurrentMonthGeneral();
            const heavenPlate = this.calculateHeavenPlate(monthGeneral, timeBranch);
            const nobleGroundPosition = this.calculateNoblePerson(dayStem, timeBranch);
            const tianjiangMap = this.arrangeTwelveTianjiangs(nobleGroundPosition);
            
            // 计算四课
            const sike = this.calculateSike(dayStem, dayBranch, heavenPlate, tianjiangMap);
            console.log('四课:', sike);
            
            // 分析四课
            const analysis = this.analyzeSikeKe(sike);
            console.log('四课分析:', analysis);
            
            // 计算三传
            const sanchuan = this.calculateSanchuan(dayStem, dayBranch, sike, heavenPlate, tianjiangMap);
            console.log('三传结果:', sanchuan);
            
            // 检查三传元素显示
            const sanchuanElements = [
                { id: 'chuchuan-zhi', name: '初传地支' },
                { id: 'chuchuan-tianjiang', name: '初传天将' },
                { id: 'zhongchuan-zhi', name: '中传地支' },
                { id: 'zhongchuan-tianjiang', name: '中传天将' },
                { id: 'mochuan-zhi', name: '末传地支' },
                { id: 'mochuan-tianjiang', name: '末传天将' }
            ];
            
            sanchuanElements.forEach(test => {
                const element = document.getElementById(test.id);
                if (element) {
                    console.log(`${test.name}: "${element.textContent}"`);
                } else {
                    console.error(`找不到元素: ${test.id}`);
                }
            });
            
            console.log('=== 测试完成 ===');
        };

        // 测试九宗门的完整实现
        window.testJiuzongmen = () => {
            console.log('=== 测试九宗门完整实现 ===');
            
            // 测试用例集合
            const testCases = [
                { 
                    name: '八专法测试', 
                    dayStem: '甲', 
                    dayBranch: '甲',
                    description: '日干日支相同的情况'
                },
                { 
                    name: '普通贼克法测试', 
                    dayStem: '癸', 
                    dayBranch: '酉',
                    description: '当前时间的正常情况'
                },
                { 
                    name: '伏吟法测试', 
                    dayStem: '壬', 
                    dayBranch: '子',
                    description: '可能出现伏吟的情况'
                },
                { 
                    name: '反吟法测试', 
                    dayStem: '庚', 
                    dayBranch: '午',
                    description: '可能出现反吟的情况'
                }
            ];
            
            testCases.forEach(testCase => {
                console.log(`\n--- ${testCase.name} ---`);
                console.log(`描述: ${testCase.description}`);
                console.log(`日干支: ${testCase.dayStem}${testCase.dayBranch}`);
                
                try {
                    const timeBranch = this.getCurrentTimeBranch();
                    const monthGeneral = this.getCurrentMonthGeneral();
                    const heavenPlate = this.calculateHeavenPlate(monthGeneral, timeBranch);
                    const nobleGroundPosition = this.calculateNoblePerson(testCase.dayStem, timeBranch);
                    const tianjiangMap = this.arrangeTwelveTianjiangs(nobleGroundPosition);
                    const sike = this.calculateSike(testCase.dayStem, testCase.dayBranch, heavenPlate, tianjiangMap);
                    
                    // 测试各个门课
                    const methods = [
                        { name: '八专法', method: this.tryBazhuanFayong },
                        { name: '伏吟法', method: this.tryFuyinFayong },
                        { name: '反吟法', method: this.tryFanyinFayong },
                        { name: '贼克法', method: this.tryZeikeFayong },
                        { name: '比用法', method: this.tryBiyongFayong },
                        { name: '遥克法', method: this.tryYaokeFayong },
                        { name: '别责法', method: this.tryBiezeFayong },
                        { name: '昴星法', method: this.tryMaoxingFayong },
                        { name: '九丑法', method: this.tryJiuchouFayong }
                    ];
                    
                    let appliedMethod = null;
                    
                    for (let methodInfo of methods) {
                        let result = null;
                        
                        if (methodInfo.name === '贼克法' || methodInfo.name === '比用法') {
                            const analysis = this.analyzeSikeKe(sike);
                            result = methodInfo.method.call(this, testCase.dayStem, testCase.dayBranch, analysis, heavenPlate, tianjiangMap);
                        } else {
                            result = methodInfo.method.call(this, testCase.dayStem, testCase.dayBranch, sike, heavenPlate, tianjiangMap);
                        }
                        
                        if (result) {
                            appliedMethod = methodInfo.name;
                            console.log(`应用方法: ${methodInfo.name}`);
                            console.log(`课格: ${result.kege}`);
                            console.log(`三传: ${result.chuchuan.zhi} -> ${result.zhongchuan.zhi} -> ${result.mochuan.zhi}`);
                            break;
                        }
                    }
                    
                    if (!appliedMethod) {
                        console.log('未找到适用的门课方法');
                    }
                    
                } catch (error) {
                    console.error(`测试 ${testCase.name} 时出错:`, error);
                }
            });
            
            console.log('\n=== 九宗门测试完成 ===');
        };

        // 测试所有门课的详细逻辑
        window.testAllMethods = () => {
            console.log('=== 测试所有门课方法 ===');
            
            const dayStem = '癸';
            const dayBranch = '酉';
            const timeBranch = this.getCurrentTimeBranch();
            const monthGeneral = this.getCurrentMonthGeneral();
            const heavenPlate = this.calculateHeavenPlate(monthGeneral, timeBranch);
            const nobleGroundPosition = this.calculateNoblePerson(dayStem, timeBranch);
            const tianjiangMap = this.arrangeTwelveTianjiangs(nobleGroundPosition);
            const sike = this.calculateSike(dayStem, dayBranch, heavenPlate, tianjiangMap);
            const analysis = this.analyzeSikeKe(sike);
            
            console.log('基础数据:');
            console.log('- 日干支:', dayStem + dayBranch);
            console.log('- 时支:', timeBranch);
            console.log('- 月将:', monthGeneral);
            console.log('- 四课:', sike);
            console.log('- 四课分析:', analysis);
            
            // 测试每个方法
            const methods = [
                { 
                    name: '八专法', 
                    test: () => this.tryBazhuanFayong(dayStem, dayBranch, sike, heavenPlate, tianjiangMap),
                    condition: '日干日支相同'
                },
                { 
                    name: '伏吟法', 
                    test: () => this.tryFuyinFayong(dayStem, dayBranch, sike, heavenPlate, tianjiangMap),
                    condition: '天盘与地盘相同的位置>=6'
                },
                { 
                    name: '反吟法', 
                    test: () => this.tryFanyinFayong(dayStem, dayBranch, sike, heavenPlate, tianjiangMap),
                    condition: '天盘与地盘相冲的位置>=6'
                },
                { 
                    name: '贼克法', 
                    test: () => this.tryZeikeFayong(dayStem, dayBranch, analysis, heavenPlate, tianjiangMap),
                    condition: '有上克下或下贼上'
                },
                { 
                    name: '比用法', 
                    test: () => this.tryBiyongFayong(dayStem, dayBranch, analysis, heavenPlate, tianjiangMap),
                    condition: '多个上克下或下贼上'
                },
                { 
                    name: '遥克法', 
                    test: () => this.tryYaokeFayong(dayStem, dayBranch, sike, heavenPlate, tianjiangMap),
                    condition: '无上下贼克但有遥克'
                },
                { 
                    name: '别责法', 
                    test: () => this.tryBiezeFayong(dayStem, dayBranch, sike, heavenPlate, tianjiangMap),
                    condition: '特殊的刑冲关系'
                },
                { 
                    name: '昴星法', 
                    test: () => this.tryMaoxingFayong(dayStem, dayBranch, sike, heavenPlate, tianjiangMap),
                    condition: '四课俱全且无贼克无遥克'
                },
                { 
                    name: '九丑法', 
                    test: () => this.tryJiuchouFayong(dayStem, dayBranch, sike, heavenPlate, tianjiangMap),
                    condition: '所有其他方法都不适用'
                }
            ];
            
            methods.forEach(method => {
                console.log(`\n--- ${method.name} ---`);
                console.log(`适用条件: ${method.condition}`);
                
                try {
                    const result = method.test();
                    if (result) {
                        console.log(`✓ 方法适用`);
                        console.log(`  课格: ${result.kege}`);
                        console.log(`  三传: ${result.chuchuan.zhi} -> ${result.zhongchuan.zhi} -> ${result.mochuan.zhi}`);
                    } else {
                        console.log(`✗ 方法不适用`);
                    }
                } catch (error) {
                    console.error(`✗ 方法执行出错:`, error);
                }
            });
            
            console.log('\n=== 所有方法测试完成 ===');
        };

        // 测试天干计算
        window.testTianganCalculation = () => {
            console.log('=== 测试天干计算 ===');
            
            try {
                // 获取当前日干支
                const now = new Date();
                const solar = Solar.fromDate(now);
                const lunar = solar.getLunar();
                const dayGZ = lunar.getDayInGanZhi();
                const dayStem = dayGZ.charAt(0);
                const dayBranch = dayGZ.charAt(1);
                
                console.log(`当前日干支: ${dayGZ}`);
                
                // 计算旬首
                const xunshou = this.calculateXunshou(dayStem, dayBranch);
                console.log(`旬首: ${xunshou}`);
                
                // 测试每个地支的天干计算
                console.log('\n各地支对应的天干:');
                BRANCHES.forEach(branch => {
                    const gan = this.getTianpanGan(branch);
                    const ganzhi = gan ? gan + branch : branch + '(空亡)';
                    console.log(`${branch} -> ${ganzhi}`);
                });
                
                // 测试当前三传的天干
                console.log('\n当前三传天干测试:');
                const timeBranch = this.getCurrentTimeBranch();
                const monthGeneral = this.getCurrentMonthGeneral();
                const heavenPlate = this.calculateHeavenPlate(monthGeneral, timeBranch);
                const nobleGroundPosition = this.calculateNoblePerson(dayStem, timeBranch);
                const tianjiangMap = this.arrangeTwelveTianjiangs(nobleGroundPosition);
                const sike = this.calculateSike(dayStem, dayBranch, heavenPlate, tianjiangMap);
                const sanchuan = this.calculateSanchuan(dayStem, dayBranch, sike, heavenPlate, tianjiangMap);
                
                console.log('三传结果:');
                console.log(`初传: ${sanchuan.chuchuan.gan}${sanchuan.chuchuan.zhi}`);
                console.log(`中传: ${sanchuan.zhongchuan.gan}${sanchuan.zhongchuan.zhi}`);
                console.log(`末传: ${sanchuan.mochuan.gan}${sanchuan.mochuan.zhi}`);
                console.log(`课格: ${sanchuan.kege}`);
                
            } catch (error) {
                console.error('测试天干计算时出错:', error);
            }
            
            console.log('\n=== 天干计算测试完成 ===');
        };

        // 测试六亲和十神计算
        window.testLiuqinShishen = () => {
            console.log('=== 测试六亲和十神计算 ===');
            
            try {
                // 获取当前日干
                const now = new Date();
                const solar = Solar.fromDate(now);
                const lunar = solar.getLunar();
                const dayGZ = lunar.getDayInGanZhi();
                const dayStem = dayGZ.charAt(0);
                
                console.log(`当前日干: ${dayStem}`);
                console.log(`日干五行: ${this.getWuxing(dayStem)}`);
                console.log(`日干阴阳: ${this.isYang(dayStem) ? '阳' : '阴'}`);
                
                // 测试所有天干的六亲和十神关系
                console.log('\n各天干与日干的六亲和十神关系:');
                HEAVENLY_STEMS.forEach(gan => {
                    const liuqin = this.calculateLiuqin(gan, dayStem);
                    const shishen = this.calculateShishen(gan, dayStem);
                    const wuxing = this.getWuxing(gan);
                    const yinyang = this.isYang(gan) ? '阳' : '阴';
                    
                    console.log(`${gan}(${wuxing}${yinyang}) -> 六亲: ${liuqin}, 十神: ${shishen}`);
                });
                
                // 测试当前三传的六亲和十神
                console.log('\n当前三传六亲十神测试:');
                const timeBranch = this.getCurrentTimeBranch();
                const monthGeneral = this.getCurrentMonthGeneral();
                const heavenPlate = this.calculateHeavenPlate(monthGeneral, timeBranch);
                const dayBranch = dayGZ.charAt(1);
                const nobleGroundPosition = this.calculateNoblePerson(dayStem, timeBranch);
                const tianjiangMap = this.arrangeTwelveTianjiangs(nobleGroundPosition);
                const sike = this.calculateSike(dayStem, dayBranch, heavenPlate, tianjiangMap);
                const sanchuan = this.calculateSanchuan(dayStem, dayBranch, sike, heavenPlate, tianjiangMap);
                
                const chuanNames = ['初传', '中传', '末传'];
                const chuanData = [sanchuan.chuchuan, sanchuan.zhongchuan, sanchuan.mochuan];
                
                chuanData.forEach((chuan, index) => {
                    if (chuan.gan) {
                        const liuqin = this.calculateLiuqin(chuan.gan, dayStem);
                        const shishen = this.calculateShishen(chuan.gan, dayStem);
                        console.log(`${chuanNames[index]}: ${chuan.gan}${chuan.zhi} - 六亲: ${liuqin}, 十神: ${shishen}`);
                    }
                });
                
                console.log(`课格: ${sanchuan.kege}`);
                
            } catch (error) {
                console.error('测试六亲十神时出错:', error);
            }
            
            console.log('\n=== 六亲十神测试完成 ===');
        };

        // 测试六亲十神颜色
        window.testLiuqinShishenColors = () => {
            console.log('=== 测试六亲十神颜色 ===');
            
            // 测试六亲颜色
            console.log('六亲颜色:');
            ['父母', '兄弟', '子孙', '妻财', '官鬼'].forEach(liuqin => {
                const color = this.getLiuqinColor(liuqin);
                console.log(`${liuqin}: ${color}`);
            });
            
            // 测试十神颜色
            console.log('\n十神颜色:');
            ['比肩', '劫财', '正印', '偏印', '食神', '伤官', '正财', '偏财', '正官', '七杀'].forEach(shishen => {
                const color = this.getShishenColor(shishen);
                console.log(`${shishen}: ${color}`);
            });
            
            console.log('\n=== 颜色测试完成 ===');
        };

        // 测试三传天干和天将的修复
        window.testSanchuanFix = () => {
            console.log('=== 测试三传天干和天将修复 ===');
            
            try {
                // 获取当前日干支
                const now = new Date();
                const solar = Solar.fromDate(now);
                const lunar = solar.getLunar();
                const dayGZ = lunar.getDayInGanZhi();
                const dayStem = dayGZ.charAt(0);
                const dayBranch = dayGZ.charAt(1);
                const timeBranch = this.getCurrentTimeBranch();
                const monthGeneral = this.getCurrentMonthGeneral();
                
                console.log(`当前日干支: ${dayGZ}, 时支: ${timeBranch}, 月将: ${monthGeneral}`);
                
                // 计算天盘
                const heavenPlate = this.calculateHeavenPlate(monthGeneral, timeBranch);
                console.log('天盘:', heavenPlate);
                
                // 计算天将
                const nobleGroundPosition = this.calculateNoblePerson(dayStem, timeBranch);
                const tianjiangMap = this.arrangeTwelveTianjiangs(nobleGroundPosition);
                console.log('天将排布:', tianjiangMap);
                
                // 计算四课
                const sike = this.calculateSike(dayStem, dayBranch, heavenPlate, tianjiangMap);
                console.log('四课:', sike);
                
                // 计算三传
                const sanchuan = this.calculateSanchuan(dayStem, dayBranch, sike, heavenPlate, tianjiangMap);
                console.log('三传结果:', sanchuan);
                
                // 测试三传天干和天将的正确性
                console.log('\n=== 验证三传天干和天将 ===');
                
                // 初传
                const chuchuanZhi = sanchuan.chuchuan.zhi;
                console.log(`初传地支: ${chuchuanZhi}`);
                
                // 查找初传地支在天盘中的位置
                let chuchuanPosition = null;
                for (let groundPos in heavenPlate) {
                    if (heavenPlate[groundPos] === chuchuanZhi) {
                        chuchuanPosition = groundPos;
                        break;
                    }
                }
                console.log(`初传地支 ${chuchuanZhi} 在天盘中的位置: ${chuchuanPosition}`);
                
                // 验证天将
                const expectedTianjiang = tianjiangMap[chuchuanPosition];
                const actualTianjiang = sanchuan.chuchuan.tianjiang;
                console.log(`初传天将 - 期望: ${expectedTianjiang}, 实际: ${actualTianjiang}, 正确: ${expectedTianjiang === actualTianjiang}`);
                
                // 验证天干（旬遁）
                const expectedGan = this.calculateXunganForPosition(chuchuanPosition, dayStem, dayBranch);
                const actualGan = sanchuan.chuchuan.gan;
                console.log(`初传天干 - 期望: ${expectedGan}, 实际: ${actualGan}, 正确: ${expectedGan === actualGan}`);
                
                // 同样验证中传和末传
                const zhongchuanZhi = sanchuan.zhongchuan.zhi;
                let zhongchuanPosition = null;
                for (let groundPos in heavenPlate) {
                    if (heavenPlate[groundPos] === zhongchuanZhi) {
                        zhongchuanPosition = groundPos;
                        break;
                    }
                }
                console.log(`中传地支 ${zhongchuanZhi} 在天盘中的位置: ${zhongchuanPosition}`);
                
                const expectedZhongchuanTianjiang = tianjiangMap[zhongchuanPosition];
                const actualZhongchuanTianjiang = sanchuan.zhongchuan.tianjiang;
                console.log(`中传天将 - 期望: ${expectedZhongchuanTianjiang}, 实际: ${actualZhongchuanTianjiang}, 正确: ${expectedZhongchuanTianjiang === actualZhongchuanTianjiang}`);
                
                const expectedZhongchuanGan = this.calculateXunganForPosition(zhongchuanPosition, dayStem, dayBranch);
                const actualZhongchuanGan = sanchuan.zhongchuan.gan;
                console.log(`中传天干 - 期望: ${expectedZhongchuanGan}, 实际: ${actualZhongchuanGan}, 正确: ${expectedZhongchuanGan === actualZhongchuanGan}`);
                
                // 验证末传
                const mochuanZhi = sanchuan.mochuan.zhi;
                let mochuanPosition = null;
                for (let groundPos in heavenPlate) {
                    if (heavenPlate[groundPos] === mochuanZhi) {
                        mochuanPosition = groundPos;
                        break;
                    }
                }
                console.log(`末传地支 ${mochuanZhi} 在天盘中的位置: ${mochuanPosition}`);
                
                const expectedMochuanTianjiang = tianjiangMap[mochuanPosition];
                const actualMochuanTianjiang = sanchuan.mochuan.tianjiang;
                console.log(`末传天将 - 期望: ${expectedMochuanTianjiang}, 实际: ${actualMochuanTianjiang}, 正确: ${expectedMochuanTianjiang === actualMochuanTianjiang}`);
                
                const expectedMochuanGan = this.calculateXunganForPosition(mochuanPosition, dayStem, dayBranch);
                const actualMochuanGan = sanchuan.mochuan.gan;
                console.log(`末传天干 - 期望: ${expectedMochuanGan}, 实际: ${actualMochuanGan}, 正确: ${expectedMochuanGan === actualMochuanGan}`);
                
                console.log('\n=== 修复验证完成 ===');
                
            } catch (error) {
                console.error('测试三传修复时出错:', error);
            }
        };
    }

    startTimeUpdate() {
        // 更新当前时间显示
        this.updateCurrentTime();
        
        // 每秒更新一次当前时间
        this.timeUpdateTimer = setInterval(() => {
            this.updateCurrentTime();
        }, 1000);
    }

    startSizhuUpdate() {
        // 每分钟更新一次四柱（因为时柱是按小时变化的）
        this.sizhuUpdateTimer = setInterval(() => {
            this.updateSizhu();
            // 同时更新月将和占时
            this.setCurrentDateTime();
            this.calculatePlates();
        }, 60000); // 60秒更新一次
    }

    updateCurrentTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('zh-CN', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        if (this.currentTime) {
            this.currentTime.textContent = timeString;
        }
    }

    toggleAutoUpdate() {
        this.isAutoUpdate = !this.isAutoUpdate;
        
        if (this.isAutoUpdate) {
            this.autoUpdateBtn.textContent = '停止更新';
            this.autoUpdateBtn.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)';
            
            // 立即更新一次
            this.setCurrentDateTime();
            this.calculatePlates();
            this.updateSizhu();
            
            // 每分钟自动更新
            this.autoUpdateTimer = setInterval(() => {
                this.setCurrentDateTime();
                this.calculatePlates();
                this.updateSizhu();
            }, 60000); // 60秒更新一次
            
        } else {
            this.autoUpdateBtn.textContent = '自动更新';
            this.autoUpdateBtn.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)';
            
            if (this.autoUpdateTimer) {
                clearInterval(this.autoUpdateTimer);
                this.autoUpdateTimer = null;
            }
        }
    }

    getCurrentTimeBranch() {
        const now = new Date();
        const hour = now.getHours();
        
        // 根据时间确定地支
        if (hour >= 23 || hour < 1) return '子';
        if (hour >= 1 && hour < 3) return '丑';
        if (hour >= 3 && hour < 5) return '寅';
        if (hour >= 5 && hour < 7) return '卯';
        if (hour >= 7 && hour < 9) return '辰';
        if (hour >= 9 && hour < 11) return '巳';
        if (hour >= 11 && hour < 13) return '午';
        if (hour >= 13 && hour < 15) return '未';
        if (hour >= 15 && hour < 17) return '申';
        if (hour >= 17 && hour < 19) return '酉';
        if (hour >= 19 && hour < 21) return '戌';
        if (hour >= 21 && hour < 23) return '亥';
        
        return '子'; // 默认值
    }

    getCurrentMonthGeneral() {
        try {
            // 检查lunar-javascript是否加载完成
            if (typeof Solar === 'undefined') {
                console.warn('lunar-javascript库未加载，使用默认月将');
                return '未';
            }

            const now = new Date();
            const solar = Solar.fromDate(now);
            const lunar = solar.getLunar();
            
            // 获取当前的节气信息，更精确的计算月将
            const currentMonth = now.getMonth() + 1; // 当前公历月份
            const currentDay = now.getDate();
            
            // 基于传统节气的月将计算
            // 7月夏至后到大暑前应该是未
            const monthGeneralMap = {
                1: '子',    // 小寒后
                2: '亥',    // 雨水后
                3: '戌',    // 春分后
                4: '酉',    // 谷雨后
                5: '申',    // 小满后
                6: '未',    // 夏至后
                7: '未',    // 夏至后（7月大暑前仍为未）
                8: '巳',    // 处暑后
                9: '辰',    // 秋分后
                10: '卯',   // 霜降后
                11: '寅',   // 小雪后
                12: '丑'    // 大雪后
            };
            
            return monthGeneralMap[currentMonth] || '未';
        } catch (error) {
            console.error('获取当前月将失败:', error);
            return '未';
        }
    }

    // 计算贵人位置
    calculateNoblePerson(dayStem, timeBranch) {
        const nobles = NOBLE_PERSON_MAP[dayStem];
        if (!nobles) return '丑'; // 默认值
        
        // 判断昼夜
        const isDayTime = DAY_BRANCHES.includes(timeBranch);
        
        // 昼贵（阳贵）用前一个，夜贵（阴贵）用后一个
        return isDayTime ? nobles[0] : nobles[1];
    }
    
    // 计算每个地盘位置的旬干（地遁）
    calculateXunganForPosition(groundBranch, dayStem, dayBranch) {
        // 首先确定旬首
        const xunshou = this.calculateXunshou(dayStem, dayBranch);
        const xunshouStem = xunshou.charAt(0);
        const xunshouBranch = xunshou.charAt(1);
        
        // 获取旬首的天干和地支索引
        const xunshouStemIndex = STEM_INDEX[xunshouStem];
        const xunshouBranchIndex = BRANCH_INDEX[xunshouBranch];
        
        // 获取地盘地支的索引
        const groundBranchIndex = BRANCH_INDEX[groundBranch];
        
        // 构建当前旬的地支到天干的映射
        // 从旬首开始，按天干顺序（甲到癸）依次与地支配对
        const xunMapping = {};
        for (let i = 0; i < 10; i++) {
            const stemIndex = (xunshouStemIndex + i) % 10;
            const branchIndex = (xunshouBranchIndex + i) % 12;
            const stem = HEAVENLY_STEMS[stemIndex];
            const branch = BRANCHES[branchIndex];
            xunMapping[branch] = stem;
        }
        
        // 返回地盘地支对应的天干，如果没有对应关系（空亡），返回空字符串
        return xunMapping[groundBranch] || '';
    }

    // 计算天遁（时旬遁干）
    calculateTianDun(groundBranch, timeBranch) {
        // 计算时干
        const timeGZ = this.getTimeGanZhi(timeBranch);
        const timeStem = timeGZ.charAt(0);
        
        // 计算时旬的旬首
        const timeXunshou = this.calculateXunshou(timeStem, timeBranch);
        const xunshouStem = timeXunshou.charAt(0);
        const xunshouBranch = timeXunshou.charAt(1);
        
        // 获取旬首的天干和地支索引
        const xunshouStemIndex = STEM_INDEX[xunshouStem];
        const xunshouBranchIndex = BRANCH_INDEX[xunshouBranch];
        
        // 构建时旬的地支到天干的映射
        const xunMapping = {};
        for (let i = 0; i < 10; i++) {
            const stemIndex = (xunshouStemIndex + i) % 10;
            const branchIndex = (xunshouBranchIndex + i) % 12;
            const stem = HEAVENLY_STEMS[stemIndex];
            const branch = BRANCHES[branchIndex];
            xunMapping[branch] = stem;
        }
        
        return xunMapping[groundBranch] || '';
    }

    // 计算人遁
    calculateRendun(groundBranch, nobleGroundPosition) {
        if (!nobleGroundPosition) return '';
        
        // 从子时开始计算遁干
        const ziTimeGZ = this.getTimeGanZhi('子');
        const ziTimeStem = ziTimeGZ.charAt(0);
        
        // 计算子时旬的旬首
        const ziXunshou = this.calculateXunshou(ziTimeStem, '子');
        const xunshouStem = ziXunshou.charAt(0);
        const xunshouBranch = ziXunshou.charAt(1);
        
        // 获取旬首和贵人位置的索引
        const xunshouStemIndex = STEM_INDEX[xunshouStem];
        const xunshouBranchIndex = BRANCH_INDEX[xunshouBranch];
        const nobleGroundIndex = BRANCH_INDEX[nobleGroundPosition];
        
        // 计算从子时到贵人位置的距离
        let stepsToNoble = (nobleGroundIndex - 0 + 12) % 12; // 从子(0)到贵人位置
        
        // 五子元遁：从子时开始，天干按五子元遁的顺序
        // 甲己日：甲子、乙丑、丙寅、丁卯、戊辰、己巳、庚午、辛未、壬申、癸酉
        // 乙庚日：丙子、丁丑、戊寅、己卯、庚辰、辛巳、壬午、癸未、甲申、乙酉
        // 丙辛日：戊子、己丑、庚寅、辛卯、壬辰、癸巳、甲午、乙未、丙申、丁酉
        // 丁壬日：庚子、辛丑、壬寅、癸卯、甲辰、乙巳、丙午、丁未、戊申、己酉
        // 戊癸日：壬子、癸丑、甲寅、乙卯、丙辰、丁巳、戊午、己未、庚申、辛酉
        
        // 根据日干确定子时的起始天干
        const now = new Date();
        const solar = Solar.fromDate(now);
        const lunar = solar.getLunar();
        const dayGZ = lunar.getDayInGanZhi();
        const dayStem = dayGZ.charAt(0);
        
        let ziStemIndex;
        switch (dayStem) {
            case '甲': case '己': ziStemIndex = 0; break; // 甲
            case '乙': case '庚': ziStemIndex = 2; break; // 丙
            case '丙': case '辛': ziStemIndex = 4; break; // 戊
            case '丁': case '壬': ziStemIndex = 6; break; // 庚
            case '戊': case '癸': ziStemIndex = 8; break; // 壬
            default: ziStemIndex = 0;
        }
        
        // 计算到贵人位置的遁干
        const targetStemIndex = (ziStemIndex + stepsToNoble) % 10;
        const targetStem = HEAVENLY_STEMS[targetStemIndex];
        
        // 现在从贵人位置开始，按五子元遁计算该位置的遁干
        const nobleSteps = (BRANCH_INDEX[groundBranch] - nobleGroundIndex + 12) % 12;
        const finalStemIndex = (targetStemIndex + nobleSteps) % 10;
        
        return HEAVENLY_STEMS[finalStemIndex];
    }

    // 根据时支获取时干支
    getTimeGanZhi(timeBranch) {
        const now = new Date();
        const solar = Solar.fromDate(now);
        const lunar = solar.getLunar();
        const dayGZ = lunar.getDayInGanZhi();
        const dayStem = dayGZ.charAt(0);
        
        // 根据日干和时支计算时干
        let timeStemIndex;
        const timeBranchIndex = BRANCH_INDEX[timeBranch];
        const dayStemIndex = STEM_INDEX[dayStem];
        
        // 子时的时干根据日干计算
        // 甲己日子时起甲子，乙庚日子时起丙子，丙辛日子时起戊子，丁壬日子时起庚子，戊癸日子时起壬子
        let ziStemIndex;
        switch (dayStem) {
            case '甲': case '己': ziStemIndex = 0; break; // 甲
            case '乙': case '庚': ziStemIndex = 2; break; // 丙
            case '丙': case '辛': ziStemIndex = 4; break; // 戊
            case '丁': case '壬': ziStemIndex = 6; break; // 庚
            case '戊': case '癸': ziStemIndex = 8; break; // 壬
            default: ziStemIndex = 0;
        }
        
        // 计算时干
        timeStemIndex = (ziStemIndex + timeBranchIndex) % 10;
        const timeStem = HEAVENLY_STEMS[timeStemIndex];
        
        return timeStem + timeBranch;
    }
    
    // 排布十二天将
    arrangeTwelveTianjiangs(nobleGroundPosition) {
        const tianjiangMap = {};
        
        if (!nobleGroundPosition) {
            console.error('贵人位置未找到');
            return tianjiangMap;
        }
        
        // 使用标准地支顺序进行天将排布
        const noblePosIndex = STANDARD_BRANCH_ORDER.indexOf(nobleGroundPosition);
        
        // 判断贵人在地盘位置决定排布方向
        // 传统规则：贵人在地盘的亥子丑寅卯辰时逆时针，在地盘的巳午未申酉戌时顺时针
        const counterclockwiseGroup = ['亥', '子', '丑', '寅', '卯', '辰'];
        const clockwiseGroup = ['巳', '午', '未', '申', '酉', '戌'];
        
        const clockwise = clockwiseGroup.includes(nobleGroundPosition);
        
        console.log(`天将排布（地盘位置判断）：`);
        console.log(`  贵人在地盘位置：${nobleGroundPosition}`);
        console.log(`  标准索引：${noblePosIndex}`);
        console.log(`  逆时针组（亥子丑寅卯辰）：${counterclockwiseGroup.join(' ')}`);
        console.log(`  顺时针组（巳午未申酉戌）：${clockwiseGroup.join(' ')}`);
        console.log(`  贵人在逆时针组？${counterclockwiseGroup.includes(nobleGroundPosition)}`);
        console.log(`  贵人在顺时针组？${clockwiseGroup.includes(nobleGroundPosition)}`);
        console.log(`  使用方向：${clockwise ? '顺时针' : '逆时针'}`);
        
        for (let i = 0; i < 12; i++) {
            let posIndex;
            if (clockwise) {
                // 顺时针排布
                posIndex = (noblePosIndex + i) % 12;
            } else {
                // 逆时针排布
                posIndex = (noblePosIndex - i + 12) % 12;
            }
            
            const branch = STANDARD_BRANCH_ORDER[posIndex];
            tianjiangMap[branch] = TWELVE_TIANJIANGS[i];
        }
        
        // 显示完整的天将排布结果
        console.log(`天将排布结果：`);
        STANDARD_BRANCH_ORDER.forEach(branch => {
            const marker = branch === nobleGroundPosition ? ' ← 贵人' : '';
            console.log(`  ${branch} -> ${tianjiangMap[branch]}${marker}`);
        });
        
        return tianjiangMap;
    }
    
    // 计算旬首（原旬干功能）
    calculateXunshou(dayStem, dayBranch) {
        // 六十甲子中的旬首对应表
        const xunganTable = {
            // 甲子旬
            '甲子': '甲子', '乙丑': '甲子', '丙寅': '甲子', '丁卯': '甲子', '戊辰': '甲子',
            '己巳': '甲子', '庚午': '甲子', '辛未': '甲子', '壬申': '甲子', '癸酉': '甲子',
            // 甲戌旬
            '甲戌': '甲戌', '乙亥': '甲戌', '丙子': '甲戌', '丁丑': '甲戌', '戊寅': '甲戌',
            '己卯': '甲戌', '庚辰': '甲戌', '辛巳': '甲戌', '壬午': '甲戌', '癸未': '甲戌',
            // 甲申旬
            '甲申': '甲申', '乙酉': '甲申', '丙戌': '甲申', '丁亥': '甲申', '戊子': '甲申',
            '己丑': '甲申', '庚寅': '甲申', '辛卯': '甲申', '壬辰': '甲申', '癸巳': '甲申',
            // 甲午旬
            '甲午': '甲午', '乙未': '甲午', '丙申': '甲午', '丁酉': '甲午', '戊戌': '甲午',
            '己亥': '甲午', '庚子': '甲午', '辛丑': '甲午', '壬寅': '甲午', '癸卯': '甲午',
            // 甲辰旬
            '甲辰': '甲辰', '乙巳': '甲辰', '丙午': '甲辰', '丁未': '甲辰', '戊申': '甲辰',
            '己酉': '甲辰', '庚戌': '甲辰', '辛亥': '甲辰', '壬子': '甲辰', '癸丑': '甲辰',
            // 甲寅旬
            '甲寅': '甲寅', '乙卯': '甲寅', '丙辰': '甲寅', '丁巳': '甲寅', '戊午': '甲寅',
            '己未': '甲寅', '庚申': '甲寅', '辛酉': '甲寅', '壬戌': '甲寅', '癸亥': '甲寅'
        };
        
        const dayGanzhi = dayStem + dayBranch;
        return xunganTable[dayGanzhi] || '甲子';
    }

    // 计算旬空
    calculateXunkong(dayStem, dayBranch) {
        // 旬空对应表：每个旬缺失的两个地支
        const xunkongTable = {
            // 甲子旬空戌亥
            '甲子': ['戌', '亥'], '乙丑': ['戌', '亥'], '丙寅': ['戌', '亥'], '丁卯': ['戌', '亥'], '戊辰': ['戌', '亥'],
            '己巳': ['戌', '亥'], '庚午': ['戌', '亥'], '辛未': ['戌', '亥'], '壬申': ['戌', '亥'], '癸酉': ['戌', '亥'],
            // 甲戌旬空申酉
            '甲戌': ['申', '酉'], '乙亥': ['申', '酉'], '丙子': ['申', '酉'], '丁丑': ['申', '酉'], '戊寅': ['申', '酉'],
            '己卯': ['申', '酉'], '庚辰': ['申', '酉'], '辛巳': ['申', '酉'], '壬午': ['申', '酉'], '癸未': ['申', '酉'],
            // 甲申旬空午未
            '甲申': ['午', '未'], '乙酉': ['午', '未'], '丙戌': ['午', '未'], '丁亥': ['午', '未'], '戊子': ['午', '未'],
            '己丑': ['午', '未'], '庚寅': ['午', '未'], '辛卯': ['午', '未'], '壬辰': ['午', '未'], '癸巳': ['午', '未'],
            // 甲午旬空辰巳
            '甲午': ['辰', '巳'], '乙未': ['辰', '巳'], '丙申': ['辰', '巳'], '丁酉': ['辰', '巳'], '戊戌': ['辰', '巳'],
            '己亥': ['辰', '巳'], '庚子': ['辰', '巳'], '辛丑': ['辰', '巳'], '壬寅': ['辰', '巳'], '癸卯': ['辰', '巳'],
            // 甲辰旬空寅卯
            '甲辰': ['寅', '卯'], '乙巳': ['寅', '卯'], '丙午': ['寅', '卯'], '丁未': ['寅', '卯'], '戊申': ['寅', '卯'],
            '己酉': ['寅', '卯'], '庚戌': ['寅', '卯'], '辛亥': ['寅', '卯'], '壬子': ['寅', '卯'], '癸丑': ['寅', '卯'],
            // 甲寅旬空子丑
            '甲寅': ['子', '丑'], '乙卯': ['子', '丑'], '丙辰': ['子', '丑'], '丁巳': ['子', '丑'], '戊午': ['子', '丑'],
            '己未': ['子', '丑'], '庚申': ['子', '丑'], '辛酉': ['子', '丑'], '壬戌': ['子', '丑'], '癸亥': ['子', '丑']
        };
        
        const dayGanzhi = dayStem + dayBranch;
        return xunkongTable[dayGanzhi] || [];
    }

    // 计算四课
    calculateSike(dayStem, dayBranch, heavenPlate, tianjiangMap) {
        const sike = {};
        
        // 第一课：日干寄宫上的天盘字 / 日干
        const stemLodge = STEM_LODGE_MAP[dayStem];
        const ke1Top = heavenPlate[stemLodge] || '';
        sike.ke1 = {
            top: ke1Top,
            bottom: dayStem,
            tianjiang: tianjiangMap[ke1Top] || ''  // 天盘字对应的天将
        };
        
        // 第二课：第一课天盘字在地盘的位置上的天盘字 / 第一课天盘字
        const ke2Top = heavenPlate[ke1Top] || '';
        sike.ke2 = {
            top: ke2Top,
            bottom: ke1Top,
            tianjiang: tianjiangMap[ke2Top] || ''  // 天盘字对应的天将
        };
        
        // 第三课：日支上的天盘字 / 日支
        const ke3Top = heavenPlate[dayBranch] || '';
        sike.ke3 = {
            top: ke3Top,
            bottom: dayBranch,
            tianjiang: tianjiangMap[ke3Top] || ''  // 天盘字对应的天将
        };
        
        // 第四课：第三课天盘字在地盘的位置上的天盘字 / 第三课天盘字
        const ke4Top = heavenPlate[ke3Top] || '';
        sike.ke4 = {
            top: ke4Top,
            bottom: ke3Top,
            tianjiang: tianjiangMap[ke4Top] || ''  // 天盘字对应的天将
        };
        
        return sike;
    }

    // 更新四课显示
    updateSikeDisplay(sike) {
        if (!this.sikeElements) return;
        
        // 更新第一课
        if (this.sikeElements.ke1.top) {
            this.sikeElements.ke1.top.textContent = sike.ke1.top;
            this.applyWuxingColor(this.sikeElements.ke1.top, sike.ke1.top);
        }
        if (this.sikeElements.ke1.tianjiang) {
            this.sikeElements.ke1.tianjiang.textContent = sike.ke1.tianjiang;
            if (sike.ke1.tianjiang && TIANJIANG_COLORS[sike.ke1.tianjiang]) {
                this.sikeElements.ke1.tianjiang.style.color = TIANJIANG_COLORS[sike.ke1.tianjiang];
                this.sikeElements.ke1.tianjiang.style.fontWeight = 'bold';
            }
        }
        if (this.sikeElements.ke1.bottom) {
            this.sikeElements.ke1.bottom.textContent = sike.ke1.bottom;
            this.applyWuxingColor(this.sikeElements.ke1.bottom, sike.ke1.bottom);
        }
        
        // 更新第二课
        if (this.sikeElements.ke2.top) {
            this.sikeElements.ke2.top.textContent = sike.ke2.top;
            this.applyWuxingColor(this.sikeElements.ke2.top, sike.ke2.top);
        }
        if (this.sikeElements.ke2.tianjiang) {
            this.sikeElements.ke2.tianjiang.textContent = sike.ke2.tianjiang;
            if (sike.ke2.tianjiang && TIANJIANG_COLORS[sike.ke2.tianjiang]) {
                this.sikeElements.ke2.tianjiang.style.color = TIANJIANG_COLORS[sike.ke2.tianjiang];
                this.sikeElements.ke2.tianjiang.style.fontWeight = 'bold';
            }
        }
        if (this.sikeElements.ke2.bottom) {
            this.sikeElements.ke2.bottom.textContent = sike.ke2.bottom;
            this.applyWuxingColor(this.sikeElements.ke2.bottom, sike.ke2.bottom);
        }
        
        // 更新第三课
        if (this.sikeElements.ke3.top) {
            this.sikeElements.ke3.top.textContent = sike.ke3.top;
            this.applyWuxingColor(this.sikeElements.ke3.top, sike.ke3.top);
        }
        if (this.sikeElements.ke3.tianjiang) {
            this.sikeElements.ke3.tianjiang.textContent = sike.ke3.tianjiang;
            if (sike.ke3.tianjiang && TIANJIANG_COLORS[sike.ke3.tianjiang]) {
                this.sikeElements.ke3.tianjiang.style.color = TIANJIANG_COLORS[sike.ke3.tianjiang];
                this.sikeElements.ke3.tianjiang.style.fontWeight = 'bold';
            }
        }
        if (this.sikeElements.ke3.bottom) {
            this.sikeElements.ke3.bottom.textContent = sike.ke3.bottom;
            this.applyWuxingColor(this.sikeElements.ke3.bottom, sike.ke3.bottom);
        }
        
        // 更新第四课
        if (this.sikeElements.ke4.top) {
            this.sikeElements.ke4.top.textContent = sike.ke4.top;
            this.applyWuxingColor(this.sikeElements.ke4.top, sike.ke4.top);
        }
        if (this.sikeElements.ke4.tianjiang) {
            this.sikeElements.ke4.tianjiang.textContent = sike.ke4.tianjiang;
            if (sike.ke4.tianjiang && TIANJIANG_COLORS[sike.ke4.tianjiang]) {
                this.sikeElements.ke4.tianjiang.style.color = TIANJIANG_COLORS[sike.ke4.tianjiang];
                this.sikeElements.ke4.tianjiang.style.fontWeight = 'bold';
            }
        }
        if (this.sikeElements.ke4.bottom) {
            this.sikeElements.ke4.bottom.textContent = sike.ke4.bottom;
            this.applyWuxingColor(this.sikeElements.ke4.bottom, sike.ke4.bottom);
        }
    }

    // 应用五行颜色
    applyWuxingColor(element, character) {
        if (element && character && WUXING_COLORS[character]) {
            element.style.color = WUXING_COLORS[character];
            element.style.fontWeight = 'bold';
            // 确保没有背景颜色
            element.style.background = 'transparent';
            element.style.backgroundColor = 'transparent';
        }
    }

    // 判断是否为阳干支
    isYang(ganzhi) {
        const yangChars = ['甲', '丙', '戊', '庚', '壬', '子', '寅', '辰', '午', '申', '戌'];
        return yangChars.includes(ganzhi);
    }

    // 判断天盘是否克地盘
    isShangKe(tianpan, dipan) {
        const tianpanWuxing = this.getWuxing(tianpan);
        const dipanWuxing = this.getWuxing(dipan);
        return this.wuxingKe(tianpanWuxing, dipanWuxing);
    }

    // 判断地盘是否克天盘
    isXiaZei(tianpan, dipan) {
        const tianpanWuxing = this.getWuxing(tianpan);
        const dipanWuxing = this.getWuxing(dipan);
        return this.wuxingKe(dipanWuxing, tianpanWuxing);
    }

    // 判断五行相克
    wuxingKe(keZhe, beiKeZhe) {
        const keRelation = {
            '木': '土',
            '火': '金',
            '土': '水',
            '金': '木',
            '水': '火'
        };
        return keRelation[keZhe] === beiKeZhe;
    }

    // 获取五行属性
    getWuxing(ganzhi) {
        if (['甲', '乙', '寅', '卯'].includes(ganzhi)) return '木';
        if (['丙', '丁', '巳', '午'].includes(ganzhi)) return '火';
        if (['戊', '己', '辰', '戌', '丑', '未'].includes(ganzhi)) return '土';
        if (['庚', '辛', '申', '酉'].includes(ganzhi)) return '金';
        if (['壬', '癸', '亥', '子'].includes(ganzhi)) return '水';
        return '';
    }

    // 获取孟仲季类型
    getMengZhongJi(zhi) {
        if (MENGZHONGJI['孟'].includes(zhi)) return '孟';
        if (MENGZHONGJI['仲'].includes(zhi)) return '仲';
        if (MENGZHONGJI['季'].includes(zhi)) return '季';
        return '';
    }

    // 分析四课的贼克情况
    analyzeSikeKe(sike) {
        const analysis = {
            shangke: [],  // 上克下的课
            xiazei: [],   // 下贼上的课
            wuke: []      // 无克的课
        };

        for (let i = 1; i <= 4; i++) {
            const ke = sike[`ke${i}`];
            if (this.isShangKe(ke.top, ke.bottom)) {
                analysis.shangke.push({
                    index: i,
                    tianpan: ke.top,
                    dipan: ke.bottom,
                    tianjiang: ke.tianjiang
                });
            } else if (this.isXiaZei(ke.top, ke.bottom)) {
                analysis.xiazei.push({
                    index: i,
                    tianpan: ke.top,
                    dipan: ke.bottom,
                    tianjiang: ke.tianjiang
                });
            } else {
                analysis.wuke.push({
                    index: i,
                    tianpan: ke.top,
                    dipan: ke.bottom,
                    tianjiang: ke.tianjiang
                });
            }
        }

        return analysis;
    }

    // 九宗门起三传的主要逻辑
    calculateSanchuan(dayStem, dayBranch, sike, heavenPlate, tianjiangMap) {
        const analysis = this.analyzeSikeKe(sike);
        
        console.log('四课分析:', analysis);
        
        // 检查是否为特殊课格
        // 一、八专法（日干日支相同）
        const bazhuanFayong = this.tryBazhuanFayong(dayStem, dayBranch, sike, heavenPlate, tianjiangMap);
        if (bazhuanFayong) {
            console.log('使用八专法:', bazhuanFayong);
            return bazhuanFayong;
        }
        
        // 二、伏吟法（天盘与地盘相同）
        const fuyinFayong = this.tryFuyinFayong(dayStem, dayBranch, sike, heavenPlate, tianjiangMap);
        if (fuyinFayong) {
            console.log('使用伏吟法:', fuyinFayong);
            return fuyinFayong;
        }
        
        // 三、反吟法（天盘与地盘相冲）
        const fanyinFayong = this.tryFanyinFayong(dayStem, dayBranch, sike, heavenPlate, tianjiangMap);
        if (fanyinFayong) {
            console.log('使用反吟法:', fanyinFayong);
            return fanyinFayong;
        }
        
        // 四、贼克法
        const zeikeFayong = this.tryZeikeFayong(dayStem, dayBranch, analysis, heavenPlate, tianjiangMap);
        if (zeikeFayong) {
            console.log('使用贼克法:', zeikeFayong);
            return zeikeFayong;
        }
        
        // 五、比用法
        const biyongFayong = this.tryBiyongFayong(dayStem, dayBranch, analysis, heavenPlate, tianjiangMap);
        if (biyongFayong) {
            console.log('使用比用法:', biyongFayong);
            return biyongFayong;
        }
        
        // 六、遥克法
        const yaokeFayong = this.tryYaokeFayong(dayStem, dayBranch, sike, heavenPlate, tianjiangMap);
        if (yaokeFayong) {
            console.log('使用遥克法:', yaokeFayong);
            return yaokeFayong;
        }
        
        // 七、别责法
        const biezeFayong = this.tryBiezeFayong(dayStem, dayBranch, sike, heavenPlate, tianjiangMap);
        if (biezeFayong) {
            console.log('使用别责法:', biezeFayong);
            return biezeFayong;
        }
        
        // 八、昴星法
        const maoxingFayong = this.tryMaoxingFayong(dayStem, dayBranch, sike, heavenPlate, tianjiangMap);
        if (maoxingFayong) {
            console.log('使用昴星法:', maoxingFayong);
            return maoxingFayong;
        }
        
        // 九、九丑法
        const jiuchouFayong = this.tryJiuchouFayong(dayStem, dayBranch, sike, heavenPlate, tianjiangMap);
        if (jiuchouFayong) {
            console.log('使用九丑法:', jiuchouFayong);
            return jiuchouFayong;
        }
        
        // 默认返回空的三传
        return this.createEmptySanchuan();
    }

    // 贼克法
    tryZeikeFayong(dayStem, dayBranch, analysis, heavenPlate, tianjiangMap) {
        // 1. 优先选择下贼上（始入课）
        if (analysis.xiazei.length === 1) {
            const xiazei = analysis.xiazei[0];
            return this.createSanchuan(xiazei.tianpan, heavenPlate, tianjiangMap, '始入课', dayStem, dayBranch);
        }
        
        // 2. 无下贼上，选择上克下（元首课）
        if (analysis.xiazei.length === 0 && analysis.shangke.length === 1) {
            const shangke = analysis.shangke[0];
            return this.createSanchuan(shangke.tianpan, heavenPlate, tianjiangMap, '元首课', dayStem, dayBranch);
        }
        
        // 3. 有下贼上又有上克下（重审课）
        if (analysis.xiazei.length === 1 && analysis.shangke.length > 0) {
            const xiazei = analysis.xiazei[0];
            return this.createSanchuan(xiazei.tianpan, heavenPlate, tianjiangMap, '重审课', dayStem, dayBranch);
        }
        
        return null;
    }

    // 比用法
    tryBiyongFayong(dayStem, dayBranch, analysis, heavenPlate, tianjiangMap) {
        // 多个下贼上或多个上克下时，按阴阳相比选择
        if (analysis.xiazei.length >= 2) {
            return this.selectByYinYang(dayStem, analysis.xiazei, heavenPlate, tianjiangMap, '比用课', dayBranch);
        }
        
        if (analysis.shangke.length >= 2) {
            return this.selectByYinYang(dayStem, analysis.shangke, heavenPlate, tianjiangMap, '知一课', dayBranch);
        }
        
        return null;
    }

    // 遥克法
    tryYaokeFayong(dayStem, dayBranch, sike, heavenPlate, tianjiangMap) {
        // 四课中既无上克下，也无下贼上
        const analysis = this.analyzeSikeKe(sike);
        if (analysis.shangke.length === 0 && analysis.xiazei.length === 0) {
            // 检查二三四课来克日干（蒿矢）
            const keRigan = this.checkKeRigan(dayStem, sike);
            if (keRigan.length > 0) {
                if (keRigan.length === 1) {
                    return this.createSanchuan(keRigan[0].tianpan, heavenPlate, tianjiangMap, '蒿矢', dayStem, dayBranch);
                } else {
                    // 多个克日干时，按阴阳相比
                    return this.selectByYinYang(dayStem, keRigan, heavenPlate, tianjiangMap, '蒿矢', dayBranch);
                }
            }
            
            // 检查日干克二三四课（弹射）
            const riganKe = this.checkRiganKe(dayStem, sike);
            if (riganKe.length > 0) {
                if (riganKe.length === 1) {
                    return this.createSanchuan(riganKe[0].tianpan, heavenPlate, tianjiangMap, '弹射', dayStem, dayBranch);
                } else {
                    // 多个被日干克时，按阴阳相比
                    return this.selectByYinYang(dayStem, riganKe, heavenPlate, tianjiangMap, '弹射', dayBranch);
                }
            }
            
            // 检查日支的特殊情况
            const rizhiSpecial = this.checkRizhiSpecial(dayStem, dayBranch, sike, heavenPlate, tianjiangMap);
            if (rizhiSpecial) {
                return rizhiSpecial;
            }
        }
        
        return null;
    }

    // 昴星法
    tryMaoxingFayong(dayStem, dayBranch, sike, heavenPlate, tianjiangMap) {
        const analysis = this.analyzeSikeKe(sike);
        
        // 四课俱全，既无上下贼克，也无遥克
        if (analysis.shangke.length === 0 && analysis.xiazei.length === 0) {
            const keRigan = this.checkKeRigan(dayStem, sike);
            const riganKe = this.checkRiganKe(dayStem, sike);
            
            if (keRigan.length === 0 && riganKe.length === 0) {
                // 检查四课是否俱全且无重复
                const sikeCount = Object.keys(sike).length;
                if (sikeCount === 4) {
                    // 检查是否有重复的上神
                    const uniqueTopGods = new Set([sike.ke1.top, sike.ke2.top, sike.ke3.top, sike.ke4.top]);
                    
                    if (uniqueTopGods.size === 4) { // 四课上神都不相同
                        if (this.isYang(dayStem)) {
                            // 阳日虎视：取酉上神为初传
                            const youShangShen = heavenPlate['酉'] || '';
                            if (youShangShen) {
                                const zhongchuan = sike.ke3.top; // 支上神
                                const mochuan = sike.ke1.top;    // 干上神
                                return {
                                    chuchuan: { 
                                        gan: this.getSanchuanGan(youShangShen, heavenPlate, dayStem, dayBranch), 
                                        zhi: youShangShen, 
                                        tianjiang: this.getSanchuanTianjiang(youShangShen, heavenPlate, tianjiangMap)
                                    },
                                    zhongchuan: { 
                                        gan: this.getSanchuanGan(zhongchuan, heavenPlate, dayStem, dayBranch), 
                                        zhi: zhongchuan, 
                                        tianjiang: this.getSanchuanTianjiang(zhongchuan, heavenPlate, tianjiangMap)
                                    },
                                    mochuan: { 
                                        gan: this.getSanchuanGan(mochuan, heavenPlate, dayStem, dayBranch), 
                                        zhi: mochuan, 
                                        tianjiang: this.getSanchuanTianjiang(mochuan, heavenPlate, tianjiangMap)
                                    },
                                    kege: '虎视'
                                };
                            }
                        } else {
                            // 阴日冬蛇掩目：取卯上神为初传
                            const maoShangShen = heavenPlate['卯'] || '';
                            if (maoShangShen) {
                                const zhongchuan = sike.ke1.top; // 干上神
                                const mochuan = sike.ke3.top;    // 支上神
                                return {
                                    chuchuan: { 
                                        gan: this.getSanchuanGan(maoShangShen, heavenPlate, dayStem, dayBranch), 
                                        zhi: maoShangShen, 
                                        tianjiang: this.getSanchuanTianjiang(maoShangShen, heavenPlate, tianjiangMap)
                                    },
                                    zhongchuan: { 
                                        gan: this.getSanchuanGan(zhongchuan, heavenPlate, dayStem, dayBranch), 
                                        zhi: zhongchuan, 
                                        tianjiang: this.getSanchuanTianjiang(zhongchuan, heavenPlate, tianjiangMap)
                                    },
                                    mochuan: { 
                                        gan: this.getSanchuanGan(mochuan, heavenPlate, dayStem, dayBranch), 
                                        zhi: mochuan, 
                                        tianjiang: this.getSanchuanTianjiang(mochuan, heavenPlate, tianjiangMap)
                                    },
                                    kege: '冬蛇掩目'
                                };
                            }
                        }
                    }
                }
            }
        }
        
        return null;
    }



    // 检查二三四课是否克日干
    checkKeRigan(dayStem, sike) {
        const keRigan = [];
        for (let i = 2; i <= 4; i++) {
            const ke = sike[`ke${i}`];
            if (this.isShangKe(ke.top, dayStem)) {
                keRigan.push({
                    index: i,
                    tianpan: ke.top,
                    dipan: ke.bottom,
                    tianjiang: ke.tianjiang
                });
            }
        }
        return keRigan;
    }

    // 检查日干是否克二三四课
    checkRiganKe(dayStem, sike) {
        const riganKe = [];
        for (let i = 2; i <= 4; i++) {
            const ke = sike[`ke${i}`];
            if (this.isShangKe(dayStem, ke.top)) {
                riganKe.push({
                    index: i,
                    tianpan: ke.top,
                    dipan: ke.bottom,
                    tianjiang: ke.tianjiang
                });
            }
        }
        return riganKe;
    }

    // 创建三传结构
    createSanchuan(chuchuan, heavenPlate, tianjiangMap, kege, dayStem, dayBranch) {
        const zhongchuan = heavenPlate[chuchuan] || '';
        const mochuan = heavenPlate[zhongchuan] || '';
        
        // 计算三传天干：三传的地支在天盘上对应格子的旬遁
        const chuchuanGan = this.getSanchuanGan(chuchuan, heavenPlate, dayStem, dayBranch);
        const zhongchuanGan = this.getSanchuanGan(zhongchuan, heavenPlate, dayStem, dayBranch);
        const mochuanGan = this.getSanchuanGan(mochuan, heavenPlate, dayStem, dayBranch);
        
        // 计算三传天将：三传的地支在天盘上对应格子的天将
        const chuchuanTianjiang = this.getSanchuanTianjiang(chuchuan, heavenPlate, tianjiangMap);
        const zhongchuanTianjiang = this.getSanchuanTianjiang(zhongchuan, heavenPlate, tianjiangMap);
        const mochuanTianjiang = this.getSanchuanTianjiang(mochuan, heavenPlate, tianjiangMap);
        
        return {
            chuchuan: { 
                gan: chuchuanGan, 
                zhi: chuchuan, 
                tianjiang: chuchuanTianjiang
            },
            zhongchuan: { 
                gan: zhongchuanGan, 
                zhi: zhongchuan, 
                tianjiang: zhongchuanTianjiang
            },
            mochuan: { 
                gan: mochuanGan, 
                zhi: mochuan, 
                tianjiang: mochuanTianjiang
            },
            kege: kege
        };
    }

    // 根据天盘位置获取天将
    getTianjiangByHeavenPlatePosition(targetBranch, heavenPlate, tianjiangMap) {
        if (!targetBranch) return '';
        
        // 找到目标地支在天盘中所在的宫位
        for (let groundPosition in heavenPlate) {
            if (heavenPlate[groundPosition] === targetBranch) {
                // 找到了目标地支在天盘中的位置，返回该位置的天将
                return tianjiangMap[groundPosition] || '';
            }
        }
        
        // 如果在天盘中没找到，可能是地盘本位，直接返回该位置的天将
        return tianjiangMap[targetBranch] || '';
    }

    // 创建空的三传
    createEmptySanchuan() {
        return {
            chuchuan: { gan: '', zhi: '', tianjiang: '' },
            zhongchuan: { gan: '', zhi: '', tianjiang: '' },
            mochuan: { gan: '', zhi: '', tianjiang: '' },
            kege: '未定'
        };
    }

    // 八专法（日干日支相同）
    tryBazhuanFayong(dayStem, dayBranch, sike, heavenPlate, tianjiangMap) {
        // 检查是否为八专日（日干日支相同）
        if (dayStem === dayBranch) {
            console.log('检测到八专日：', dayStem + dayBranch);
            
            // 八专的特殊处理
            // 阳日：干上 -> 支上 -> 干上的地盘位置
            // 阴日：支上 -> 干上 -> 支上的地盘位置
            const isYangRi = this.isYang(dayStem);
            
            if (isYangRi) {
                // 阳日八专：干上 -> 支上 -> 干上的地盘位置
                const chuchuan = sike.ke1.top;  // 干上
                const zhongchuan = sike.ke3.top; // 支上
                
                // 末传为初传（干上）在地盘的位置
                const mochuan = dayStem; // 因为是八专，干支相同
                
                return {
                    chuchuan: { 
                        gan: this.getSanchuanGan(chuchuan, heavenPlate, dayStem, dayBranch), 
                        zhi: chuchuan, 
                        tianjiang: this.getSanchuanTianjiang(chuchuan, heavenPlate, tianjiangMap)
                    },
                    zhongchuan: { 
                        gan: this.getSanchuanGan(zhongchuan, heavenPlate, dayStem, dayBranch), 
                        zhi: zhongchuan, 
                        tianjiang: this.getSanchuanTianjiang(zhongchuan, heavenPlate, tianjiangMap)
                    },
                    mochuan: { 
                        gan: this.getSanchuanGan(mochuan, heavenPlate, dayStem, dayBranch), 
                        zhi: mochuan, 
                        tianjiang: this.getSanchuanTianjiang(mochuan, heavenPlate, tianjiangMap)
                    },
                    kege: '阳日八专'
                };
            } else {
                // 阴日八专：支上 -> 干上 -> 支上的地盘位置
                const chuchuan = sike.ke3.top;  // 支上
                const zhongchuan = sike.ke1.top; // 干上
                
                // 末传为初传（支上）在地盘的位置
                const mochuan = dayBranch; // 因为是八专，干支相同
                
                return {
                    chuchuan: { 
                        gan: this.getSanchuanGan(chuchuan, heavenPlate, dayStem, dayBranch), 
                        zhi: chuchuan, 
                        tianjiang: this.getSanchuanTianjiang(chuchuan, heavenPlate, tianjiangMap)
                    },
                    zhongchuan: { 
                        gan: this.getSanchuanGan(zhongchuan, heavenPlate, dayStem, dayBranch), 
                        zhi: zhongchuan, 
                        tianjiang: this.getSanchuanTianjiang(zhongchuan, heavenPlate, tianjiangMap)
                    },
                    mochuan: { 
                        gan: this.getSanchuanGan(mochuan, heavenPlate, dayStem, dayBranch), 
                        zhi: mochuan, 
                        tianjiang: this.getSanchuanTianjiang(mochuan, heavenPlate, tianjiangMap)
                    },
                    kege: '阴日八专'
                };
            }
        }
        
        return null;
    }

    // 伏吟法（天盘与地盘相同）
    tryFuyinFayong(dayStem, dayBranch, sike, heavenPlate, tianjiangMap) {
        // 检查是否为伏吟（天盘与地盘相同的位置数量）
        let fuyinCount = 0;
        const fuyinPositions = [];
        
        for (let groundBranch in heavenPlate) {
            if (groundBranch === heavenPlate[groundBranch]) {
                fuyinCount++;
                fuyinPositions.push(groundBranch);
            }
        }
        
        // 如果有6个或更多位置为伏吟，则为伏吟课
        if (fuyinCount >= 6) {
            console.log('检测到伏吟课，伏吟位置：', fuyinPositions);
            
            // 伏吟三传的特殊取法
            // 阳日：干上 -> 支上 -> 干上的对宫
            // 阴日：支上 -> 干上 -> 支上的对宫
            const isYangRi = this.isYang(dayStem);
            
            if (isYangRi) {
                const chuchuan = sike.ke1.top;  // 干上
                const zhongchuan = sike.ke3.top; // 支上
                const mochuan = DIZHI_CHONG[chuchuan] || chuchuan; // 干上的对宫
                
                return {
                    chuchuan: { 
                        gan: this.getSanchuanGan(chuchuan, heavenPlate, dayStem, dayBranch), 
                        zhi: chuchuan, 
                        tianjiang: this.getSanchuanTianjiang(chuchuan, heavenPlate, tianjiangMap)
                    },
                    zhongchuan: { 
                        gan: this.getSanchuanGan(zhongchuan, heavenPlate, dayStem, dayBranch), 
                        zhi: zhongchuan, 
                        tianjiang: this.getSanchuanTianjiang(zhongchuan, heavenPlate, tianjiangMap)
                    },
                    mochuan: { 
                        gan: this.getSanchuanGan(mochuan, heavenPlate, dayStem, dayBranch), 
                        zhi: mochuan, 
                        tianjiang: this.getSanchuanTianjiang(mochuan, heavenPlate, tianjiangMap)
                    },
                    kege: '阳日伏吟'
                };
            } else {
                const chuchuan = sike.ke3.top;  // 支上
                const zhongchuan = sike.ke1.top; // 干上
                const mochuan = DIZHI_CHONG[chuchuan] || chuchuan; // 支上的对宫
                
                return {
                    chuchuan: { 
                        gan: this.getSanchuanGan(chuchuan, heavenPlate, dayStem, dayBranch), 
                        zhi: chuchuan, 
                        tianjiang: this.getSanchuanTianjiang(chuchuan, heavenPlate, tianjiangMap)
                    },
                    zhongchuan: { 
                        gan: this.getSanchuanGan(zhongchuan, heavenPlate, dayStem, dayBranch), 
                        zhi: zhongchuan, 
                        tianjiang: this.getSanchuanTianjiang(zhongchuan, heavenPlate, tianjiangMap)
                    },
                    mochuan: { 
                        gan: this.getSanchuanGan(mochuan, heavenPlate, dayStem, dayBranch), 
                        zhi: mochuan, 
                        tianjiang: this.getSanchuanTianjiang(mochuan, heavenPlate, tianjiangMap)
                    },
                    kege: '阴日伏吟'
                };
            }
        }
        
        return null;
    }

    // 反吟法（天盘与地盘相冲）
    tryFanyinFayong(dayStem, dayBranch, sike, heavenPlate, tianjiangMap) {
        // 检查是否为反吟（天盘与地盘相冲的位置数量）
        let fanyinCount = 0;
        const fanyinPositions = [];
        
        for (let groundBranch in heavenPlate) {
            const heavenBranch = heavenPlate[groundBranch];
            if (DIZHI_CHONG[groundBranch] === heavenBranch) {
                fanyinCount++;
                fanyinPositions.push(groundBranch);
            }
        }
        
        // 如果有6个或更多位置为反吟，则为反吟课
        if (fanyinCount >= 6) {
            console.log('检测到反吟课，反吟位置：', fanyinPositions);
            
            // 反吟三传的特殊取法
            // 阳日：干上 -> 支上 -> 干上的正冲
            // 阴日：支上 -> 干上 -> 支上的正冲
            const isYangRi = this.isYang(dayStem);
            
            if (isYangRi) {
                const chuchuan = sike.ke1.top;  // 干上
                const zhongchuan = sike.ke3.top; // 支上
                const mochuan = DIZHI_CHONG[chuchuan] || chuchuan; // 干上的正冲
                
                return {
                    chuchuan: { 
                        gan: this.getSanchuanGan(chuchuan, heavenPlate, dayStem, dayBranch), 
                        zhi: chuchuan, 
                        tianjiang: this.getSanchuanTianjiang(chuchuan, heavenPlate, tianjiangMap)
                    },
                    zhongchuan: { 
                        gan: this.getSanchuanGan(zhongchuan, heavenPlate, dayStem, dayBranch), 
                        zhi: zhongchuan, 
                        tianjiang: this.getSanchuanTianjiang(zhongchuan, heavenPlate, tianjiangMap)
                    },
                    mochuan: { 
                        gan: this.getSanchuanGan(mochuan, heavenPlate, dayStem, dayBranch), 
                        zhi: mochuan, 
                        tianjiang: this.getSanchuanTianjiang(mochuan, heavenPlate, tianjiangMap)
                    },
                    kege: '阳日反吟'
                };
            } else {
                const chuchuan = sike.ke3.top;  // 支上
                const zhongchuan = sike.ke1.top; // 干上
                const mochuan = DIZHI_CHONG[chuchuan] || chuchuan; // 支上的正冲
                
                return {
                    chuchuan: { 
                        gan: this.getSanchuanGan(chuchuan, heavenPlate, dayStem, dayBranch), 
                        zhi: chuchuan, 
                        tianjiang: this.getSanchuanTianjiang(chuchuan, heavenPlate, tianjiangMap)
                    },
                    zhongchuan: { 
                        gan: this.getSanchuanGan(zhongchuan, heavenPlate, dayStem, dayBranch), 
                        zhi: zhongchuan, 
                        tianjiang: this.getSanchuanTianjiang(zhongchuan, heavenPlate, tianjiangMap)
                    },
                    mochuan: { 
                        gan: this.getSanchuanGan(mochuan, heavenPlate, dayStem, dayBranch), 
                        zhi: mochuan, 
                        tianjiang: this.getSanchuanTianjiang(mochuan, heavenPlate, tianjiangMap)
                    },
                    kege: '阴日反吟'
                };
            }
        }
        
        return null;
    }

    // 别责法
    tryBiezeFayong(dayStem, dayBranch, sike, heavenPlate, tianjiangMap) {
        // 别责法适用于特殊的复杂情况
        // 当前面的方法都不适用时，进行特殊判断
        
        // 检查是否有特殊的刑冲情况
        const analysis = this.analyzeSikeKe(sike);
        
        // 如果四课都无贼克，且前面的方法都不适用
        if (analysis.shangke.length === 0 && analysis.xiazei.length === 0) {
            // 检查是否有特殊的刑冲关系
            const specialCases = this.findSpecialXingChong(dayStem, dayBranch, sike);
            
            if (specialCases.length > 0) {
                const selectedCase = specialCases[0]; // 选择第一个特殊情况
                
                return {
                    chuchuan: { 
                        gan: this.getSanchuanGan(selectedCase.chuchuan, heavenPlate, dayStem, dayBranch), 
                        zhi: selectedCase.chuchuan, 
                        tianjiang: this.getSanchuanTianjiang(selectedCase.chuchuan, heavenPlate, tianjiangMap)
                    },
                    zhongchuan: { 
                        gan: this.getSanchuanGan(selectedCase.zhongchuan, heavenPlate, dayStem, dayBranch), 
                        zhi: selectedCase.zhongchuan, 
                        tianjiang: this.getSanchuanTianjiang(selectedCase.zhongchuan, heavenPlate, tianjiangMap)
                    },
                    mochuan: { 
                        gan: this.getSanchuanGan(selectedCase.mochuan, heavenPlate, dayStem, dayBranch), 
                        zhi: selectedCase.mochuan, 
                        tianjiang: this.getSanchuanTianjiang(selectedCase.mochuan, heavenPlate, tianjiangMap)
                    },
                    kege: '别责课'
                };
            }
        }
        
        return null;
    }

    // 九丑法
    tryJiuchouFayong(dayStem, dayBranch, sike, heavenPlate, tianjiangMap) {
        // 九丑法是最后的判断方法
        // 当所有其他方法都不适用时使用
        
        // 九丑的特殊取法：按固定顺序取三传
        const jiuchouOrder = ['丑', '未', '戌', '辰', '亥', '巳', '申', '寅', '酉'];
        
        // 找到第一个可用的作为初传
        for (let i = 0; i < jiuchouOrder.length; i++) {
            const potential = jiuchouOrder[i];
            if (heavenPlate[potential]) {
                const chuchuan = potential;
                const zhongchuan = heavenPlate[chuchuan] || '';
                const mochuan = heavenPlate[zhongchuan] || '';
                
                return {
                    chuchuan: { 
                        gan: this.getSanchuanGan(chuchuan, heavenPlate, dayStem, dayBranch), 
                        zhi: chuchuan, 
                        tianjiang: this.getSanchuanTianjiang(chuchuan, heavenPlate, tianjiangMap)
                    },
                    zhongchuan: { 
                        gan: this.getSanchuanGan(zhongchuan, heavenPlate, dayStem, dayBranch), 
                        zhi: zhongchuan, 
                        tianjiang: this.getSanchuanTianjiang(zhongchuan, heavenPlate, tianjiangMap)
                    },
                    mochuan: { 
                        gan: this.getSanchuanGan(mochuan, heavenPlate, dayStem, dayBranch), 
                        zhi: mochuan, 
                        tianjiang: this.getSanchuanTianjiang(mochuan, heavenPlate, tianjiangMap)
                    },
                    kege: '九丑课'
                };
            }
        }
        
        return null;
    }

    // 寻找特殊的刑冲关系
    findSpecialXingChong(dayStem, dayBranch, sike) {
        const specialCases = [];
        
        // 检查四课中的特殊刑冲关系
        for (let i = 1; i <= 4; i++) {
            const ke = sike[`ke${i}`];
            
            // 检查是否有刑冲关系
            if (DIZHI_XING[ke.top] && DIZHI_XING[ke.top] === ke.bottom) {
                specialCases.push({
                    chuchuan: ke.top,
                    zhongchuan: ke.bottom,
                    mochuan: DIZHI_CHONG[ke.top] || ke.top,
                    type: '刑'
                });
            }
            
            if (DIZHI_CHONG[ke.top] && DIZHI_CHONG[ke.top] === ke.bottom) {
                specialCases.push({
                    chuchuan: ke.top,
                    zhongchuan: ke.bottom,
                    mochuan: DIZHI_XING[ke.top] || ke.top,
                    type: '冲'
                });
            }
        }
        
        return specialCases;
    }

    // 检查日支的特殊情况
    checkRizhiSpecial(dayStem, dayBranch, sike, heavenPlate, tianjiangMap) {
        // 检查日支与其他地支的特殊关系
        const rizhiRelations = [];
        
        // 检查日支的三合关系
        const sanhePartners = DIZHI_SANHE[dayBranch] || [];
        for (let partner of sanhePartners) {
            if (heavenPlate[partner]) {
                rizhiRelations.push({
                    branch: partner,
                    relation: '三合',
                    strength: 3
                });
            }
        }
        
        // 检查日支的驿马
        const yima = YIMA[dayBranch];
        if (yima && heavenPlate[yima]) {
            rizhiRelations.push({
                branch: yima,
                relation: '驿马',
                strength: 2
            });
        }
        
        // 如果有特殊关系，选择最强的作为初传
        if (rizhiRelations.length > 0) {
            rizhiRelations.sort((a, b) => b.strength - a.strength);
            const selectedRelation = rizhiRelations[0];
            
            const chuchuan = selectedRelation.branch;
            const zhongchuan = heavenPlate[chuchuan] || '';
            const mochuan = heavenPlate[zhongchuan] || '';
            
            return {
                chuchuan: { 
                    gan: this.getSanchuanGan(chuchuan, heavenPlate, dayStem, dayBranch), 
                    zhi: chuchuan, 
                    tianjiang: this.getSanchuanTianjiang(chuchuan, heavenPlate, tianjiangMap)
                },
                zhongchuan: { 
                    gan: this.getSanchuanGan(zhongchuan, heavenPlate, dayStem, dayBranch), 
                    zhi: zhongchuan, 
                    tianjiang: this.getSanchuanTianjiang(zhongchuan, heavenPlate, tianjiangMap)
                },
                mochuan: { 
                    gan: this.getSanchuanGan(mochuan, heavenPlate, dayStem, dayBranch), 
                    zhi: mochuan, 
                    tianjiang: this.getSanchuanTianjiang(mochuan, heavenPlate, tianjiangMap)
                },
                kege: `日支${selectedRelation.relation}`
            };
        }
        
        return null;
    }

    // 完善按阴阳相比的选择逻辑
    selectByYinYang(dayStem, candidates, heavenPlate, tianjiangMap, kege, dayBranch) {
        const isYangRi = this.isYang(dayStem);
        
        // 先按阴阳相比过滤
        const matched = candidates.filter(c => this.isYang(c.tianpan) === isYangRi);
        
        if (matched.length === 1) {
            return this.createSanchuan(matched[0].tianpan, heavenPlate, tianjiangMap, kege, dayStem, dayBranch);
        } else if (matched.length > 1) {
            // 多个匹配时，按孟仲季选择
            const mengzhongjiPriority = this.selectByMengZhongJi(matched, dayStem);
            if (mengzhongjiPriority) {
                return this.createSanchuan(mengzhongjiPriority.tianpan, heavenPlate, tianjiangMap, kege, dayStem, dayBranch);
            }
            
            // 如果孟仲季也相同，取第一个
            return this.createSanchuan(matched[0].tianpan, heavenPlate, tianjiangMap, kege, dayStem, dayBranch);
        } else {
            // 没有阴阳相比的，取第一个
            return this.createSanchuan(candidates[0].tianpan, heavenPlate, tianjiangMap, kege, dayStem, dayBranch);
        }
    }

    // 按孟仲季选择
    selectByMengZhongJi(candidates, dayStem) {
        const dayMengZhongJi = this.getMengZhongJi(STEM_LODGE_MAP[dayStem]);
        
        // 优先选择与日干寄宫同类的孟仲季
        const sameType = candidates.filter(c => 
            this.getMengZhongJi(c.tianpan) === dayMengZhongJi
        );
        
        if (sameType.length > 0) {
            return sameType[0];
        }
        
        // 按孟仲季优先级选择：孟 > 仲 > 季
        const mengCandidates = candidates.filter(c => this.getMengZhongJi(c.tianpan) === '孟');
        if (mengCandidates.length > 0) return mengCandidates[0];
        
        const zhongCandidates = candidates.filter(c => this.getMengZhongJi(c.tianpan) === '仲');
        if (zhongCandidates.length > 0) return zhongCandidates[0];
        
        const jiCandidates = candidates.filter(c => this.getMengZhongJi(c.tianpan) === '季');
        if (jiCandidates.length > 0) return jiCandidates[0];
        
        return null;
    }

    // 获取天盘地支对应的天干
    getTianpanGan(tianpanZhi) {
        if (!tianpanZhi) return '';
        
        try {
            // 获取当前的日干支来确定旬首
            const now = new Date();
            const solar = Solar.fromDate(now);
            const lunar = solar.getLunar();
            const dayGZ = lunar.getDayInGanZhi();
            const dayStem = dayGZ.charAt(0);
            const dayBranch = dayGZ.charAt(1);
            
            // 计算旬首
            const xunshou = this.calculateXunshou(dayStem, dayBranch);
            const xunshouStem = xunshou.charAt(0);
            const xunshouBranch = xunshou.charAt(1);
            
            // 获取旬首的天干和地支索引
            const xunshouStemIndex = STEM_INDEX[xunshouStem];
            const xunshouBranchIndex = BRANCH_INDEX[xunshouBranch];
            
            // 获取天盘地支的索引
            const tianpanZhiIndex = BRANCH_INDEX[tianpanZhi];
            
            // 计算天盘地支距离旬首地支的步数
            const steps = (tianpanZhiIndex - xunshouBranchIndex + 12) % 12;
            
            // 计算对应的天干索引
            const tianpanGanIndex = (xunshouStemIndex + steps) % 10;
            
            // 返回对应的天干，如果超出旬的范围（>9）则为空亡
            if (steps >= 10) {
                return ''; // 空亡
            }
            
            return HEAVENLY_STEMS[tianpanGanIndex];
            
        } catch (error) {
            console.error('计算天盘天干时出错:', error);
            return '';
        }
    }

    // 计算六亲关系（基于天干）
    calculateLiuqin(targetGan, dayStem) {
        if (!targetGan || !dayStem) return '';
        
        const dayWuxing = this.getWuxing(dayStem);
        const targetWuxing = this.getWuxing(targetGan);
        
        if (dayWuxing === targetWuxing) {
            return '兄弟';  // 同我者兄弟
        } else if (this.wuxingSheng(targetWuxing, dayWuxing)) {
            return '父母';  // 生我者父母
        } else if (this.wuxingSheng(dayWuxing, targetWuxing)) {
            return '子孙';  // 我生者子孙
        } else if (this.wuxingKe(targetWuxing, dayWuxing)) {
            return '官鬼';  // 克我者官鬼
        } else if (this.wuxingKe(dayWuxing, targetWuxing)) {
            return '妻财';  // 我克者妻财
        }
        
        return '';
    }

    // 计算六亲关系（基于地支）
    calculateLiuqinByZhi(targetZhi, dayBranch) {
        if (!targetZhi || !dayBranch) return '';
        
        const dayWuxing = this.getWuxing(dayBranch);
        const targetWuxing = this.getWuxing(targetZhi);
        
        if (dayWuxing === targetWuxing) {
            return '兄弟';  // 同我者兄弟
        } else if (this.wuxingSheng(targetWuxing, dayWuxing)) {
            return '父母';  // 生我者父母
        } else if (this.wuxingSheng(dayWuxing, targetWuxing)) {
            return '子孙';  // 我生者子孙
        } else if (this.wuxingKe(targetWuxing, dayWuxing)) {
            return '官鬼';  // 克我者官鬼
        } else if (this.wuxingKe(dayWuxing, targetWuxing)) {
            return '妻财';  // 我克者妻财
        }
        
        return '';
    }

    // 计算六亲关系（日干与地支对比）
    calculateLiuqinGanZhi(dayStem, targetZhi) {
        if (!dayStem || !targetZhi) return '';
        
        const dayWuxing = this.getWuxing(dayStem);
        const targetWuxing = this.getWuxing(targetZhi);
        
        if (dayWuxing === targetWuxing) {
            return '兄弟';  // 同我者兄弟
        } else if (this.wuxingSheng(targetWuxing, dayWuxing)) {
            return '父母';  // 生我者父母
        } else if (this.wuxingSheng(dayWuxing, targetWuxing)) {
            return '子孙';  // 我生者子孙
        } else if (this.wuxingKe(targetWuxing, dayWuxing)) {
            return '官鬼';  // 克我者官鬼
        } else if (this.wuxingKe(dayWuxing, targetWuxing)) {
            return '妻财';  // 我克者妻财
        }
        
        return '';
    }

    // 计算十神关系
    calculateShishen(targetGan, dayStem) {
        if (!targetGan || !dayStem) return '';
        
        const dayWuxing = this.getWuxing(dayStem);
        const targetWuxing = this.getWuxing(targetGan);
        const dayYinYang = this.isYang(dayStem);
        const targetYinYang = this.isYang(targetGan);
        const sameYinYang = dayYinYang === targetYinYang;
        
        if (dayWuxing === targetWuxing) {
            // 与日干五行相同者
            return sameYinYang ? '比肩' : '劫财';
        } else if (this.wuxingSheng(targetWuxing, dayWuxing)) {
            // 生日干者
            return sameYinYang ? '偏印' : '正印';
        } else if (this.wuxingSheng(dayWuxing, targetWuxing)) {
            // 日干所生者
            return sameYinYang ? '食神' : '伤官';
        } else if (this.wuxingKe(dayWuxing, targetWuxing)) {
            // 日干所克者
            return sameYinYang ? '偏财' : '正财';
        } else if (this.wuxingKe(targetWuxing, dayWuxing)) {
            // 克日干者
            return sameYinYang ? '七杀' : '正官';
        }
        
        return '';
    }

    // 五行相生关系
    wuxingSheng(shengZhe, beiShengZhe) {
        const shengRelation = {
            '木': '火',
            '火': '土',
            '土': '金',
            '金': '水',
            '水': '木'
        };
        return shengRelation[shengZhe] === beiShengZhe;
    }

    // 更新三传显示
    updateSanchuanDisplay(sanchuan) {
        if (!this.sanchuanElements) return;
        
        try {
            // 获取当前日干支用于计算六亲和十神
            const now = new Date();
            const solar = Solar.fromDate(now);
            const lunar = solar.getLunar();
            const dayGZ = lunar.getDayInGanZhi();
            const dayStem = dayGZ.charAt(0);
            const dayBranch = dayGZ.charAt(1);
            
            // 更新初传
            this.updateSanchuanItem(this.sanchuanElements.chuchuan, sanchuan.chuchuan, dayStem, dayBranch);
            
            // 更新中传
            this.updateSanchuanItem(this.sanchuanElements.zhongchuan, sanchuan.zhongchuan, dayStem, dayBranch);
            
            // 更新末传
            this.updateSanchuanItem(this.sanchuanElements.mochuan, sanchuan.mochuan, dayStem, dayBranch);
            
            console.log('三传更新完成:', sanchuan);
        } catch (error) {
            console.error('更新三传显示时出错:', error);
        }
    }

    // 更新单个三传项目
    updateSanchuanItem(elements, sanchuanData, dayStem, dayBranch) {
        // 计算六亲和十神
        // 六亲基于日干与三传的支来比较
        const liuqin = this.calculateLiuqinGanZhi(dayStem, sanchuanData.zhi);
        // 十神仍然基于天干计算
        const shishen = this.calculateShishen(sanchuanData.gan, dayStem);
        
        // 更新六亲
        if (elements.liuqin) {
            elements.liuqin.textContent = liuqin;
            elements.liuqin.style.color = this.getLiuqinColor(liuqin);
            elements.liuqin.style.fontWeight = 'bold';
        }
        
        // 更新十神
        if (elements.shishen) {
            elements.shishen.textContent = shishen;
            elements.shishen.style.color = this.getShishenColor(shishen);
            elements.shishen.style.fontWeight = 'bold';
        }
        
        // 更新天干
        if (elements.gan) {
            elements.gan.textContent = sanchuanData.gan;
            this.applyWuxingColor(elements.gan, sanchuanData.gan);
        }
        
        // 更新地支
        if (elements.zhi) {
            elements.zhi.textContent = sanchuanData.zhi;
            this.applyWuxingColor(elements.zhi, sanchuanData.zhi);
        }
        
        // 更新天将
        if (elements.tianjiang) {
            elements.tianjiang.textContent = sanchuanData.tianjiang;
            if (sanchuanData.tianjiang && TIANJIANG_COLORS[sanchuanData.tianjiang]) {
                elements.tianjiang.style.color = TIANJIANG_COLORS[sanchuanData.tianjiang];
                elements.tianjiang.style.fontWeight = 'bold';
            }
        }
    }

    // 获取六亲颜色
    getLiuqinColor(liuqin) {
        const liuqinColors = {
            '父母': '#8B4513',  // 棕色
            '兄弟': '#228B22',  // 森林绿
            '子孙': '#FF4500',  // 橙红色
            '妻财': '#FFD700',  // 金色
            '官鬼': '#4B0082'   // 靛蓝色
        };
        return liuqinColors[liuqin] || '#333';
    }

    // 获取十神颜色
    getShishenColor(shishen) {
        const shishenColors = {
            '比肩': '#228B22',  // 森林绿
            '劫财': '#32CD32',  // 柠檬绿
            '正印': '#8B4513',  // 棕色
            '偏印': '#A0522D',  // 赭石色
            '食神': '#FF4500',  // 橙红色
            '伤官': '#FF6347',  // 番茄色
            '正财': '#FFD700',  // 金色
            '偏财': '#FFA500',  // 橙色
            '正官': '#4B0082',  // 靛蓝色
            '七杀': '#8A2BE2'   // 蓝紫色
        };
        return shishenColors[shishen] || '#333';
    }

    // 根据当前时间更新四课
    updateSikeFromCurrentTime(heavenPlate) {
        try {
            // 获取日干支（基于当前时间）
            const now = new Date();
            const solar = Solar.fromDate(now);
            const lunar = solar.getLunar();
            const dayGZ = lunar.getDayInGanZhi();
            const dayStem = dayGZ.charAt(0);
            const dayBranch = dayGZ.charAt(1);
            
            // 获取时辰
            const timeBranch = this.getCurrentTimeBranch();
            
            console.log('计算四课，日干支:', dayGZ, '时辰:', timeBranch);
            
            // 计算天将映射
            const nobleGroundPosition = this.calculateNoblePerson(dayStem, timeBranch);
            const tianjiangMap = this.arrangeTwelveTianjiangs(nobleGroundPosition);
            
            // 计算四课
            const sike = this.calculateSike(dayStem, dayBranch, heavenPlate, tianjiangMap);
            console.log('四课计算结果:', sike);
            
            // 更新四课显示
            this.updateSikeDisplay(sike);
            
            // 计算三传
            const sanchuan = this.calculateSanchuan(dayStem, dayBranch, sike, heavenPlate, tianjiangMap);
            console.log('三传计算结果:', sanchuan);
            
            // 更新三传显示
            this.updateSanchuanDisplay(sanchuan);
        } catch (error) {
            console.error('计算四课和三传时出错:', error);
        }
    }

    updateSizhu() {
        try {
            if (typeof Solar === 'undefined') {
                console.warn('lunar-javascript库未加载，无法计算四柱');
                // 如果库未加载，显示提示信息
                this.yearGan.textContent = '加';
                this.yearZhi.textContent = '载';
                this.monthGan.textContent = '中';
                this.monthZhi.textContent = '...';
                return;
            }

            console.log('开始更新四柱，当前时间:', new Date().toLocaleString());

            // 使用当前时间动态计算四柱
            const now = new Date();
            const solar = Solar.fromDate(now);
            const lunar = solar.getLunar();
            
            // 获取四柱信息（这里会根据当前时间动态变化）
            const yearGZ = lunar.getYearInGanZhi();
            const monthGZ = lunar.getMonthInGanZhi();
            const dayGZ = lunar.getDayInGanZhi();
            const timeGZ = lunar.getTimeInGanZhi();
            
            console.log('计算得到的四柱:', yearGZ, monthGZ, dayGZ, timeGZ);
            
            // 更新四柱显示
            if (this.yearGan) {
                this.yearGan.textContent = yearGZ.charAt(0);
                this.applyWuxingColor(this.yearGan, yearGZ.charAt(0));
            }
            if (this.yearZhi) {
                this.yearZhi.textContent = yearGZ.charAt(1);
                this.applyWuxingColor(this.yearZhi, yearGZ.charAt(1));
            }
            if (this.monthGan) {
                this.monthGan.textContent = monthGZ.charAt(0);
                this.applyWuxingColor(this.monthGan, monthGZ.charAt(0));
            }
            if (this.monthZhi) {
                this.monthZhi.textContent = monthGZ.charAt(1);
                this.applyWuxingColor(this.monthZhi, monthGZ.charAt(1));
            }
            if (this.dayGan) {
                this.dayGan.textContent = dayGZ.charAt(0);
                this.applyWuxingColor(this.dayGan, dayGZ.charAt(0));
            }
            if (this.dayZhi) {
                this.dayZhi.textContent = dayGZ.charAt(1);
                this.applyWuxingColor(this.dayZhi, dayGZ.charAt(1));
            }
            if (this.hourGan) {
                this.hourGan.textContent = timeGZ.charAt(0);
                this.applyWuxingColor(this.hourGan, timeGZ.charAt(0));
            }
            if (this.hourZhi) {
                this.hourZhi.textContent = timeGZ.charAt(1);
                this.applyWuxingColor(this.hourZhi, timeGZ.charAt(1));
            }
            
            // 更新中心四柱显示
            if (this.centerYearGan) {
                this.centerYearGan.textContent = yearGZ.charAt(0);
                this.applyWuxingColor(this.centerYearGan, yearGZ.charAt(0));
            }
            if (this.centerYearZhi) {
                this.centerYearZhi.textContent = yearGZ.charAt(1);
                this.applyWuxingColor(this.centerYearZhi, yearGZ.charAt(1));
            }
            if (this.centerMonthGan) {
                this.centerMonthGan.textContent = monthGZ.charAt(0);
                this.applyWuxingColor(this.centerMonthGan, monthGZ.charAt(0));
            }
            if (this.centerMonthZhi) {
                this.centerMonthZhi.textContent = monthGZ.charAt(1);
                this.applyWuxingColor(this.centerMonthZhi, monthGZ.charAt(1));
            }
            if (this.centerDayGan) {
                this.centerDayGan.textContent = dayGZ.charAt(0);
                this.applyWuxingColor(this.centerDayGan, dayGZ.charAt(0));
            }
            if (this.centerDayZhi) {
                this.centerDayZhi.textContent = dayGZ.charAt(1);
                this.applyWuxingColor(this.centerDayZhi, dayGZ.charAt(1));
            }
            if (this.centerHourGan) {
                this.centerHourGan.textContent = timeGZ.charAt(0);
                this.applyWuxingColor(this.centerHourGan, timeGZ.charAt(0));
            }
            if (this.centerHourZhi) {
                this.centerHourZhi.textContent = timeGZ.charAt(1);
                this.applyWuxingColor(this.centerHourZhi, timeGZ.charAt(1));
            }
            
            // 更新第二个中心四柱显示
            if (this.centerYearGan2) {
                this.centerYearGan2.textContent = yearGZ.charAt(0);
                this.applyWuxingColor(this.centerYearGan2, yearGZ.charAt(0));
            }
            if (this.centerYearZhi2) {
                this.centerYearZhi2.textContent = yearGZ.charAt(1);
                this.applyWuxingColor(this.centerYearZhi2, yearGZ.charAt(1));
            }
            if (this.centerMonthGan2) {
                this.centerMonthGan2.textContent = monthGZ.charAt(0);
                this.applyWuxingColor(this.centerMonthGan2, monthGZ.charAt(0));
            }
            if (this.centerMonthZhi2) {
                this.centerMonthZhi2.textContent = monthGZ.charAt(1);
                this.applyWuxingColor(this.centerMonthZhi2, monthGZ.charAt(1));
            }
            if (this.centerDayGan2) {
                this.centerDayGan2.textContent = dayGZ.charAt(0);
                this.applyWuxingColor(this.centerDayGan2, dayGZ.charAt(0));
            }
            if (this.centerDayZhi2) {
                this.centerDayZhi2.textContent = dayGZ.charAt(1);
                this.applyWuxingColor(this.centerDayZhi2, dayGZ.charAt(1));
            }
            if (this.centerHourGan2) {
                this.centerHourGan2.textContent = timeGZ.charAt(0);
                this.applyWuxingColor(this.centerHourGan2, timeGZ.charAt(0));
            }
            if (this.centerHourZhi2) {
                this.centerHourZhi2.textContent = timeGZ.charAt(1);
                this.applyWuxingColor(this.centerHourZhi2, timeGZ.charAt(1));
            }
            
            // 计算并更新旬首
            const dayStem = dayGZ.charAt(0);
            const dayBranch = dayGZ.charAt(1);
            const xungan = this.calculateXunshou(dayStem, dayBranch);
            if (this.xunganValue) this.xunganValue.textContent = xungan;
            
            console.log('四柱更新完成');
            
            // 同时更新天将和旬干（基于当前时间）
            const currentTimeBranch = this.getCurrentTimeBranch();
            this.updateTianjiangAndXungan(currentTimeBranch);
            
        } catch (error) {
            console.error('更新四柱失败:', error);
            // 显示错误状态
            if (this.yearGan) this.yearGan.textContent = '错';
            if (this.yearZhi) this.yearZhi.textContent = '误';
        }
    }

    setCurrentDateTime() {
        // 设置当前时间对应的占时
        const currentBranch = this.getCurrentTimeBranch();
        this.timeBranchSelect.value = currentBranch;
        
        // 设置当前月份对应的月将
        const currentMonthGeneral = this.getCurrentMonthGeneral();
        this.monthGeneralSelect.value = currentMonthGeneral;
        
        // 更新中心时间显示
        this.updateCenterTime();
        
        // 更新提示信息
        this.calculationInfo.textContent = '已自动设置为当前时间';
    }

    updateCenterTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('zh-CN', {
            hour: '2-digit',
            minute: '2-digit'
        });
        
        if (this.centerTime) {
            this.centerTime.textContent = timeString;
        }
        if (this.centerTime2) {
            this.centerTime2.textContent = timeString;
        }
    }

    calculatePlates() {
        const monthGeneral = this.monthGeneralSelect.value;
        const timeBranch = this.timeBranchSelect.value;
        
        if (!monthGeneral || !timeBranch) {
            this.calculationInfo.textContent = '请选择月将和占时';
            return;
        }

        // 计算天盘
        const heavenPlate = this.calculateHeavenPlate(monthGeneral, timeBranch);
        
        // 更新天盘显示
        this.updateCombinedPlate(heavenPlate);
        
        // 计算和更新天将、旬干
        this.updateTianjiangAndXungan(timeBranch);
        
        // 计算和更新四课
        this.updateSikeFromCurrentTime(heavenPlate);
        
        // 更新计算信息
        this.updateCalculationInfo(monthGeneral, timeBranch);
        
        // 更新中心时间
        this.updateCenterTime();
    }

    calculateHeavenPlate(monthGeneral, timeBranch) {
        const heavenPlate = {};
        
        // 月将加时：传统大六壬计算方法
        const monthGeneralIndex = BRANCH_INDEX[monthGeneral];
        const timeBranchIndex = BRANCH_INDEX[timeBranch];
        
        // 计算每个地盘位置对应的天盘地支
        for (let i = 0; i < 12; i++) {
            const groundBranch = BRANCHES[i];
            
            // 计算天盘地支：从月将开始，按地支顺序顺时针排列
            const stepsFromTime = (i - timeBranchIndex + 12) % 12;
            const heavenBranchIndex = (monthGeneralIndex + stepsFromTime) % 12;
            const heavenBranch = BRANCHES[heavenBranchIndex];
            
            heavenPlate[groundBranch] = heavenBranch;
        }
        
        return heavenPlate;
    }

    updateCombinedPlate(heavenPlate) {
        const cells = this.plateTable.querySelectorAll('.branch-cell');
        
        cells.forEach(cell => {
            const groundBranch = cell.getAttribute('data-branch');
            if (groundBranch && heavenPlate[groundBranch]) {
                // 更新天盘地支
                const heavenBranchElement = cell.querySelector('.heaven-branch');
                if (heavenBranchElement) {
                    heavenBranchElement.textContent = heavenPlate[groundBranch];
                    this.applyWuxingColor(heavenBranchElement, heavenPlate[groundBranch]);
                    // 移除默认样式
                    heavenBranchElement.style.border = 'none';
                }
                
                // 为地盘地支应用颜色
                const groundBranchElement = cell.querySelector('.ground-branch');
                if (groundBranchElement) {
                    this.applyWuxingColor(groundBranchElement, groundBranch);
                }
            }
        });
    }
    
    // 更新天将和旬干
    updateTianjiangAndXungan(timeBranch) {
        try {
            // 获取日干支（基于当前时间）
            const now = new Date();
            const solar = Solar.fromDate(now);
            const lunar = solar.getLunar();
            const dayGZ = lunar.getDayInGanZhi();
            const dayStem = dayGZ.charAt(0);
            const dayBranch = dayGZ.charAt(1);
            
            console.log('更新天将和旬干，日干支:', dayGZ, '占时:', timeBranch);
            
            // 计算贵人位置（天盘上的位置）
            const nobleBranch = this.calculateNoblePerson(dayStem, timeBranch);
            console.log('计算得到的贵人位置（天盘）:', nobleBranch);
            
            // 获取天盘信息
            const monthGeneral = this.monthGeneralSelect.value;
            const heavenPlate = this.calculateHeavenPlate(monthGeneral, timeBranch);
            
            // 找到天盘上贵人位置对应的地盘位置（仅用于调试）
            let nobleGroundPosition = null;
            for (let groundBranch in heavenPlate) {
                if (heavenPlate[groundBranch] === nobleBranch) {
                    nobleGroundPosition = groundBranch;
                    break;
                }
            }
            
            console.log('贵人在地盘的位置:', nobleGroundPosition);
            
            // 排布十二天将（从天盘的贵人位置开始）
            const tianjiangMap = this.arrangeTwelveTianjiangs(nobleBranch);
            console.log('天将排布:', tianjiangMap);
            
            // 计算旬空
            const xunkongBranches = this.calculateXunkong(dayStem, dayBranch);
            console.log('旬空地支:', xunkongBranches);
            
            // 更新显示
            const cells = this.plateTable.querySelectorAll('.branch-cell');
            console.log('找到的单元格数量:', cells.length);
            
            cells.forEach(cell => {
                const groundBranch = cell.getAttribute('data-branch');
                if (groundBranch) {
                    const isXunkong = xunkongBranches.includes(groundBranch);
                    
                    // 获取天盘上在该地盘位置的地支
                    const heavenBranch = heavenPlate[groundBranch];
                    // 天将跟随天盘：天盘上的地支对应的天将显示在当前地盘位置
                    const tianjiang = tianjiangMap[heavenBranch] || '';
                    
                    console.log(`处理地支 ${groundBranch}:`, {
                        isXunkong,
                        heavenBranch,
                        tianjiang
                    });
                    
                    // 更新天将（天将在所有位置都显示，不受旬空影响）
                    const tianjiangElement = cell.querySelector('.tianjiang');
                    if (tianjiangElement) {
                        const oldContent = tianjiangElement.textContent;
                        tianjiangElement.textContent = tianjiang;
                        tianjiangElement.style.visibility = 'visible';
                        // 移除天将的默认样式，只保留文字
                        tianjiangElement.style.background = 'transparent';
                        tianjiangElement.style.backgroundColor = 'transparent';
                        tianjiangElement.style.border = 'none';
                        // 应用天将五行颜色
                        if (tianjiang && TIANJIANG_COLORS[tianjiang]) {
                            tianjiangElement.style.color = TIANJIANG_COLORS[tianjiang];
                        }
                        console.log(`${groundBranch} 设置天将: ${tianjiang} (天盘${heavenBranch}的天将，原内容: ${oldContent} -> 新内容: ${tianjiangElement.textContent})`);
                    } else {
                        console.log(`${groundBranch} 找不到天将元素`);
                    }
                    
                    // 更新三遁：天遁、人遁、旬遁
                    const dunInfoElement = cell.querySelector('.dun-info');
                    if (dunInfoElement) {
                        const tiandunElement = dunInfoElement.querySelector('.tiandun');
                        const rendunElement = dunInfoElement.querySelector('.rendun');
                        const xunganElement = dunInfoElement.querySelector('.xungan');
                        
                        if (isXunkong) {
                            // 旬空位置：天遁和人遁显示，旬遁空着
                            if (tiandunElement) {
                                const tiandun = this.calculateTianDun(groundBranch, timeBranch);
                                tiandunElement.textContent = tiandun;
                                tiandunElement.style.visibility = tiandun ? 'visible' : 'hidden';
                            }
                            if (rendunElement) {
                                const rendun = this.calculateRendun(groundBranch, nobleGroundPosition);
                                rendunElement.textContent = rendun;
                                rendunElement.style.visibility = rendun ? 'visible' : 'hidden';
                            }
                            if (xunganElement) {
                                xunganElement.textContent = '';
                                xunganElement.style.visibility = 'hidden';
                            }
                        } else {
                            // 非旬空位置：显示所有三遁
                            if (tiandunElement) {
                                const tiandun = this.calculateTianDun(groundBranch, timeBranch);
                                tiandunElement.textContent = tiandun;
                                tiandunElement.style.visibility = tiandun ? 'visible' : 'hidden';
                            }
                            if (rendunElement) {
                                const rendun = this.calculateRendun(groundBranch, nobleGroundPosition);
                                rendunElement.textContent = rendun;
                                rendunElement.style.visibility = rendun ? 'visible' : 'hidden';
                            }
                            if (xunganElement) {
                                const xungan = this.calculateXunganForPosition(groundBranch, dayStem, dayBranch);
                                xunganElement.textContent = xungan;
                                xunganElement.style.visibility = xungan ? 'visible' : 'hidden';
                            }
                        }
                    }
                }
            });
            
        } catch (error) {
            console.error('更新天将和旬干失败:', error);
        }
    }

    updateCalculationInfo(monthGeneral, timeBranch) {
        const monthGeneralName = MONTH_GENERALS[monthGeneral];
        const timeBranchTime = BRANCH_TIMES[timeBranch];
        
        let lunarInfo = '';
        try {
            if (typeof Solar !== 'undefined') {
                const now = new Date();
                const solar = Solar.fromDate(now);
                const lunar = solar.getLunar();
                
                lunarInfo = `
                    当前时间：${solar.toYmdHms()}<br>
                    农历：${lunar.toString()}<br>
                    节气：${solar.getTerm() || '无'}<br>
                    生肖：${lunar.getYearShengXiao()}<br>
                `;
            }
        } catch (error) {
            console.error('获取农历信息失败:', error);
            lunarInfo = `当前时间：${new Date().toLocaleString('zh-CN')}<br>`;
        }
        
        this.calculationInfo.innerHTML = `
            <strong>大六壬排盘结果：</strong><br>
            ${lunarInfo}
            月将：${monthGeneral}（${monthGeneralName}）<br>
            占时：${timeBranch}时（${timeBranchTime}）<br>
            <strong>天盘已按"月将加时"逻辑生成</strong><br>
            ${monthGeneral}加在${timeBranch}位置上
        `;
    }

    // 钤法弹出框相关方法
    initQianfaModal() {
        this.qianfaModal = document.getElementById('qianfa-modal');
        this.qianfaContent = document.getElementById('qianfa-content');
        this.closeBtn = this.qianfaModal.querySelector('.close');
        
        // 为每个天地盘位置添加点击事件
        this.plateTable.addEventListener('click', (e) => {
            const branchCell = e.target.closest('.branch-cell');
            if (branchCell) {
                const branch = branchCell.getAttribute('data-branch');
                const tianjiang = branchCell.querySelector('.tianjiang').textContent;
                const heavenBranch = branchCell.querySelector('.heaven-branch').textContent;
                
                if (tianjiang) {
                    this.showQianfaModal(tianjiang, branch, heavenBranch);
                }
            }
        });
        
        // 关闭按钮事件
        this.closeBtn.addEventListener('click', () => {
            this.hideQianfaModal();
        });
        
        // 点击弹出框外部关闭
        this.qianfaModal.addEventListener('click', (e) => {
            if (e.target === this.qianfaModal) {
                this.hideQianfaModal();
            }
        });
        
        // ESC键关闭弹出框
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.qianfaModal.style.display === 'block') {
                this.hideQianfaModal();
            }
        });
    }
    
    showQianfaModal(tianjiang, groundBranch, heavenBranch) {
        this.currentTianjiang = tianjiang;
        this.currentGroundBranch = groundBranch;
        this.currentHeavenBranch = heavenBranch;
        
        // 显示弹出框
        this.qianfaModal.style.display = 'block';
        
        // 显示钤法内容
        this.updateQianfaContent();
    }
    
    hideQianfaModal() {
        this.qianfaModal.style.display = 'none';
    }
    
    updateQianfaContent() {
        if (!this.currentTianjiang || !this.currentGroundBranch || !this.currentHeavenBranch) return;
        
        let content = '';
        
        // 天将加天盘
        content += `<div class="qianfa-section">
            <h3>天将加天盘 - ${this.currentTianjiang}加${this.currentHeavenBranch}</h3>
            ${this.generateQianfaItem(this.currentTianjiang, this.currentHeavenBranch)}
        </div>`;
        
        // 天将加地盘
        content += `<div class="qianfa-section">
            <h3>天将加地盘 - ${this.currentTianjiang}加${this.currentGroundBranch}</h3>
            ${this.generateQianfaItem(this.currentTianjiang, this.currentGroundBranch)}
        </div>`;
        
        this.qianfaContent.innerHTML = content;
    }
    
    generateQianfaItem(tianjiang, branch) {
        let html = '';
        
        if (QIANFA_DATA[tianjiang] && QIANFA_DATA[tianjiang][branch]) {
            const qianfa = QIANFA_DATA[tianjiang][branch];
            html = `<div class="qianfa-item">
                <div class="qianfa-name">${qianfa.name}</div>
                <div class="qianfa-desc">${qianfa.desc}</div>
            </div>`;
        } else {
            html = '<p style="text-align: center; color: #666; margin: 20px 0;">暂无钤法数据</p>';
        }
        
        return html;
    }

    // 销毁计时器
    destroy() {
        if (this.autoUpdateTimer) {
            clearInterval(this.autoUpdateTimer);
        }
        if (this.timeUpdateTimer) {
            clearInterval(this.timeUpdateTimer);
        }
        if (this.sizhuUpdateTimer) {
            clearInterval(this.sizhuUpdateTimer);
        }
    }

    // 新增：获取三传地支在天盘上对应格子的天将
    getSanchuanTianjiang(sanchuanZhi, heavenPlate, tianjiangMap) {
        if (!sanchuanZhi) return '';
        
        // 现在天将跟随天盘移动，三传天将应该是三传地支本身对应的天将
        const tianjiang = tianjiangMap[sanchuanZhi] || '';
        console.log(`${sanchuanZhi} 的天将: ${tianjiang}`);
        return tianjiang;
    }

    // 新增：获取三传地支在天盘上对应格子的旬遁
    getSanchuanGan(sanchuanZhi, heavenPlate, dayStem, dayBranch) {
        if (!sanchuanZhi) return '';
        
        // 三传的地支作为天盘地支，找到天盘上对应的格子
        // 查找哪个地盘位置的天盘地支等于三传地支
        for (let groundPosition in heavenPlate) {
            if (heavenPlate[groundPosition] === sanchuanZhi) {
                // 找到了天盘上三传地支所在的格子，返回该格子的旬遁
                return this.calculateXunganForPosition(groundPosition, dayStem, dayBranch);
            }
        }
        
        // 如果没找到，返回空
        return '';
    }

    // 添加调试函数
    debugTianjiangMapping() {
        console.log('=== 调试天将分布 ===');
        console.log('TWELVE_TIANJIANGS:', TWELVE_TIANJIANGS);
        console.log('BRANCH_POSITIONS:', BRANCH_POSITIONS);
        
        // 获取当前时间
        const now = new Date();
        const timeBranch = this.getCurrentTimeBranch();
        const monthGeneral = this.getCurrentMonthGeneral();
        
        console.log('当前时支:', timeBranch);
        console.log('当前月将:', monthGeneral);
        
        // 计算贵人位置
        const dayStem = this.getCurrentDayStem();
        const noblePerson = this.calculateNoblePerson(dayStem, timeBranch);
        
        console.log('日干:', dayStem);
        console.log('贵人位置:', noblePerson);
        
        // 计算天将分布
        const tianjiangMap = this.arrangeTwelveTianjiangs(noblePerson);
        
        console.log('天将分布 (tianjiangMap):');
        BRANCH_POSITIONS.forEach((branch, index) => {
            console.log(`${branch} -> ${tianjiangMap[branch]}`);
        });
        
        // 比较实际显示的天将
        console.log('\n=== 对比实际显示 ===');
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            const branch = cell.getAttribute('data-branch');
            const tianjiang = cell.querySelector('.tianjiang').textContent;
            const expectedTianjiang = tianjiangMap[branch];
            
            if (tianjiang !== expectedTianjiang) {
                console.log(`❌ ${branch}: 显示=${tianjiang}, 预期=${expectedTianjiang}`);
            } else {
                console.log(`✅ ${branch}: ${tianjiang}`);
            }
        });
        
        return tianjiangMap;
    }

    // 获取当前日干
    getCurrentDayStem() {
        const now = new Date();
        const lunarDate = Lunar.fromDate(now);
        const dayGanZhi = lunarDate.getDayInGanZhi();
        return dayGanZhi.charAt(0); // 返回天干
    }

    // 测试天将分布
    testTianjiangDistribution() {
        console.log('=== 测试天将分布 ===');
        
        // 检查当前实际的天将映射
        const dayStem = this.getCurrentDayStem();
        const timeBranch = this.getCurrentTimeBranch();
        const noblePerson = this.calculateNoblePerson(dayStem, timeBranch);
        
        console.log('当前日干:', dayStem);
        console.log('当前时支:', timeBranch);
        console.log('贵人位置:', noblePerson);
        
        const tianjiangMap = this.arrangeTwelveTianjiangs(noblePerson);
        
        console.log('实际天将分布:');
        ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'].forEach(branch => {
            console.log(`${branch} -> ${tianjiangMap[branch]}`);
        });
        
        // 对比页面显示的天将
        console.log('\n=== 对比页面显示的天将 ===');
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            const branch = cell.getAttribute('data-branch');
            const displayedTianjiang = cell.querySelector('.tianjiang').textContent;
            const calculatedTianjiang = tianjiangMap[branch];
            
            if (displayedTianjiang !== calculatedTianjiang) {
                console.log(`❌ ${branch}: 显示=${displayedTianjiang}, 计算=${calculatedTianjiang}`);
            } else {
                console.log(`✅ ${branch}: ${displayedTianjiang}`);
            }
        });
        
        // 测试三传天将计算
        const monthGeneral = this.getCurrentMonthGeneral();
        const heavenPlate = this.calculateHeavenPlate(monthGeneral, timeBranch);
        
        console.log('\n=== 测试三传天将（使用实际天盘）===');
        const testBranches = ['戌', '未', '辰'];
        testBranches.forEach(branch => {
            const tianjiang = this.getSanchuanTianjiang(branch, heavenPlate, tianjiangMap);
            console.log(`${branch} -> ${tianjiang}`);
        });
        
        return tianjiangMap;
    }
    
    // 验证天将排布规则
    verifyTianjiangArrangement() {
        console.log('=== 验证天将排布规则 ===');
        
        // 测试当前实际时间的情况
        const currentTimeBranch = this.getCurrentTimeBranch();
        const currentDayStem = this.getCurrentDayStem();
        
        console.log(`当前时间：${currentDayStem}日${currentTimeBranch}时`);
        
        // 计算贵人位置
        const noblePerson = this.calculateNoblePerson(currentDayStem, currentTimeBranch);
        console.log(`贵人位置: ${noblePerson}`);
        
        // 判断应该用什么方向排布
        const counterclockwiseGroup = ['亥', '子', '丑', '寅', '卯', '辰'];
        const clockwiseGroup = ['巳', '午', '未', '申', '酉', '戌'];
        const isClockwise = clockwiseGroup.includes(noblePerson);
        console.log(`${noblePerson}位贵人应该用${isClockwise ? '顺时针' : '逆时针'}排布`);
        
        // 排布天将
        const tianjiangMap = this.arrangeTwelveTianjiangs(noblePerson);
        
        console.log('\n当前时间的天将排布：');
        STANDARD_BRANCH_ORDER.forEach(branch => {
            const marker = branch === noblePerson ? ' ← 贵人' : '';
            console.log(`${branch}: ${tianjiangMap[branch]}${marker}`);
        });
        
        // 同时测试一个午位贵人的例子（顺时针）
        console.log('\n=== 测试午位贵人（顺时针）===');
        const wuTianjiangMap = this.arrangeTwelveTianjiangs('午');
        console.log('午位贵人，顺时针排布：');
        STANDARD_BRANCH_ORDER.forEach(branch => {
            const marker = branch === '午' ? ' ← 贵人' : '';
            console.log(`${branch}: ${wuTianjiangMap[branch]}${marker}`);
        });
        
        return tianjiangMap;
    }

    // 测试三传天将修复
    testSanchuanTianjiangFix() {
        console.log('=== 测试三传天将修复 ===');
        
        // 强制重新计算排盘
        this.calculatePlates();
        
        // 等待一下让更新完成
        setTimeout(() => {
            console.log('\n=== 检查修复后的结果 ===');
            
            // 获取三传显示的天将
            const chuchuanTianjiang = document.getElementById('chuchuan-tianjiang').textContent;
            const zhongchuanTianjiang = document.getElementById('zhongchuan-tianjiang').textContent; 
            const mochuanTianjiang = document.getElementById('mochuan-tianjiang').textContent;
            
            console.log('三传显示的天将:');
            console.log(`初传: ${chuchuanTianjiang}`);
            console.log(`中传: ${zhongchuanTianjiang}`);
            console.log(`末传: ${mochuanTianjiang}`);
            
            // 获取对应地支在页面上显示的天将
            const chuchuanZhi = document.getElementById('chuchuan-zhi').textContent;
            const zhongchuanZhi = document.getElementById('zhongchuan-zhi').textContent;
            const mochuanZhi = document.getElementById('mochuan-zhi').textContent;
            
            console.log('\n三传地支在页面上显示的天将:');
            const getDisplayedTianjiang = (branch) => {
                const cell = document.querySelector(`.cell[data-branch="${branch}"]`);
                return cell ? cell.querySelector('.tianjiang').textContent : '未找到';
            };
            
            console.log(`${chuchuanZhi}: ${getDisplayedTianjiang(chuchuanZhi)}`);
            console.log(`${zhongchuanZhi}: ${getDisplayedTianjiang(zhongchuanZhi)}`);
            console.log(`${mochuanZhi}: ${getDisplayedTianjiang(mochuanZhi)}`);
            
            // 检查是否匹配
            console.log('\n=== 检查是否匹配 ===');
            const matches = [
                chuchuanTianjiang === getDisplayedTianjiang(chuchuanZhi),
                zhongchuanTianjiang === getDisplayedTianjiang(zhongchuanZhi),
                mochuanTianjiang === getDisplayedTianjiang(mochuanZhi)
            ];
            
            console.log(`初传匹配: ${matches[0] ? '✅' : '❌'} (${chuchuanTianjiang} vs ${getDisplayedTianjiang(chuchuanZhi)})`);
            console.log(`中传匹配: ${matches[1] ? '✅' : '❌'} (${zhongchuanTianjiang} vs ${getDisplayedTianjiang(zhongchuanZhi)})`);
            console.log(`末传匹配: ${matches[2] ? '✅' : '❌'} (${mochuanTianjiang} vs ${getDisplayedTianjiang(mochuanZhi)})`);
            
            if (matches.every(m => m)) {
                console.log('🎉 修复成功！三传天将现在正确显示了！');
            } else {
                console.log('❌ 还有问题需要进一步调试');
                
                // 额外的调试信息
                console.log('\n=== 额外调试信息 ===');
                const dayStem = this.getCurrentDayStem();
                const timeBranch = this.getCurrentTimeBranch();
                const noblePerson = this.calculateNoblePerson(dayStem, timeBranch);
                const tianjiangMap = this.arrangeTwelveTianjiangs(noblePerson);
                
                console.log('天将映射:', tianjiangMap);
                console.log('三传地支本身的天将:');
                console.log(`${chuchuanZhi} -> ${tianjiangMap[chuchuanZhi]}`);
                console.log(`${zhongchuanZhi} -> ${tianjiangMap[zhongchuanZhi]}`);
                console.log(`${mochuanZhi} -> ${tianjiangMap[mochuanZhi]}`);
            }
        }, 100);
    }

    // 测试当前时间的天将排布
    testCurrentTianjiangArrangement() {
        console.log('========= 测试当前时间的天将排布 =========');
        
        // 获取当前时间信息
        const currentTime = new Date();
        const currentTimeBranch = this.getCurrentTimeBranch();
        const currentDayStem = this.getCurrentDayStem();
        const monthGeneral = this.getCurrentMonthGeneral();
        const nobleGroundPosition = this.calculateNoblePerson(currentDayStem, currentTimeBranch);
        
        console.log(`当前时间：${currentTime.toLocaleString()}`);
        console.log(`当前小时：${currentTime.getHours()}`);
        console.log(`时支：${currentTimeBranch}`);
        console.log(`日干：${currentDayStem}`);
        console.log(`月将：${monthGeneral}`);
        console.log(`贵人位置：${nobleGroundPosition}`);
        
        // 检查昼夜时间
        const isDayTime = DAY_BRANCHES.includes(currentTimeBranch);
        console.log(`当前是${isDayTime ? '昼' : '夜'}时`);
        
        // 检查贵人在地盘位置决定排布方向
        const counterclockwiseGroup = ['亥', '子', '丑', '寅', '卯', '辰'];
        const clockwiseGroup = ['巳', '午', '未', '申', '酉', '戌'];
        
        const isInClockwiseGroup = clockwiseGroup.includes(nobleGroundPosition);
        const isInCounterclockwiseGroup = counterclockwiseGroup.includes(nobleGroundPosition);
        
        console.log(`贵人在地盘${isInCounterclockwiseGroup ? '逆时针' : '顺时针'}组 (${isInCounterclockwiseGroup ? '亥子丑寅卯辰' : '巳午未申酉戌'})`);
        console.log(`应该使用${isInCounterclockwiseGroup ? '逆时针' : '顺时针'}排布`);
        
        // 验证贵人计算是否正确
        const nobleOptions = NOBLE_PERSON_MAP[currentDayStem];
        console.log(`日干${currentDayStem}的贵人选项：${nobleOptions}`);
        console.log(`${isDayTime ? '昼' : '夜'}时取${isDayTime ? '第一个' : '第二个'}：${nobleGroundPosition}`);
        
        // 生成天将排布
        const tianjiangMap = this.arrangeTwelveTianjiangs(nobleGroundPosition);
        
        // 验证是否符合传统规则
        console.log('\n验证传统规则：');
        const expectedClockwise = clockwiseGroup.includes(nobleGroundPosition);
        const actualClockwise = ['巳', '午', '未', '申', '酉', '戌'].includes(nobleGroundPosition);
        
        console.log(`规则判断：${expectedClockwise === actualClockwise ? '✓' : '✗'}`);
        
        // 特别检查当前时间的逻辑
        console.log('\n当前时间逻辑检查：');
        console.log(`当前时间：${currentTime.getHours()}时`);
        console.log(`时支：${currentTimeBranch}`);
        console.log(`是否在昼时组(卯辰巳午未申)：${DAY_BRANCHES.includes(currentTimeBranch)}`);
        console.log(`是否在夜时组(酉戌亥子丑寅)：${NIGHT_BRANCHES.includes(currentTimeBranch)}`);
        
        // 检查实际界面显示的天将是否正确
        console.log('\n实际界面天将检查：');
        console.log(`如果贵人在${nobleGroundPosition}，应该${isInCounterclockwiseGroup ? '逆时针' : '顺时针'}排布`);
        console.log(`现在逻辑已修正：卯位贵人应该逆时针排布`);
        
        return tianjiangMap;
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    console.log('页面DOM加载完成');
    
    let retryCount = 0;
    const maxRetries = 10;
    
    // 等待lunar-javascript库加载完成
    const checkLunarLoaded = () => {
        console.log(`检查lunar-javascript库加载状态 (第${retryCount + 1}次)...`);
        
        if (typeof Solar !== 'undefined') {
            console.log('lunar-javascript库已加载，开始初始化');
            try {
                window.calculator = new DaLiuRenCalculator();
                console.log('大六壬计算器初始化成功');
            } catch (error) {
                console.error('大六壬计算器初始化失败:', error);
            }
        } else {
            retryCount++;
            if (retryCount < maxRetries) {
                console.log(`lunar-javascript库未加载，${1000}ms后重试...`);
                setTimeout(checkLunarLoaded, 1000);
            } else {
                console.error('lunar-javascript库加载失败，已达到最大重试次数');
                // 即使库加载失败，也要初始化基本功能
                try {
                    window.calculator = new DaLiuRenCalculator();
                    console.log('使用基本功能初始化');
                } catch (error) {
                    console.error('基本功能初始化也失败:', error);
                }
            }
        }
    };
    
    // 立即检查一次，然后如果需要会自动重试
    checkLunarLoaded();
    
    // 额外的安全措施：5秒后强制初始化
    setTimeout(() => {
        if (typeof window.calculator === 'undefined') {
            console.log('强制初始化...');
            try {
                window.calculator = new DaLiuRenCalculator();
            } catch (error) {
                console.error('强制初始化失败:', error);
            }
        }
    }, 5000);
}); 

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', () => {
    if (typeof calculator === 'undefined') {
        window.calculator = new DaLiuRenCalculator();
    }
    
    // 测试当前时间的天将排布
    window.calculator.testCurrentTianjiangArrangement();
}); 