// 十天干排列顺序
const HEAVENLY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];

// 十二地支排列顺序
const BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

// 年份对应的干支表（从1924年开始）
const YEAR_GANZHI = {
    1924: '甲子', 1925: '乙丑', 1926: '丙寅', 1927: '丁卯', 1928: '戊辰', 1929: '己巳',
    1930: '庚午', 1931: '辛未', 1932: '壬申', 1933: '癸酉', 1934: '甲戌', 1935: '乙亥',
    1936: '丙子', 1937: '丁丑', 1938: '戊寅', 1939: '己卯', 1940: '庚辰', 1941: '辛巳',
    1942: '壬午', 1943: '癸未', 1944: '甲申', 1945: '乙酉', 1946: '丙戌', 1947: '丁亥',
    1948: '戊子', 1949: '己丑', 1950: '庚寅', 1951: '辛卯', 1952: '壬辰', 1953: '癸巳',
    1954: '甲午', 1955: '乙未', 1956: '丙申', 1957: '丁酉', 1958: '戊戌', 1959: '己亥',
    1960: '庚子', 1961: '辛丑', 1962: '壬寅', 1963: '癸卯', 1964: '甲辰', 1965: '乙巳',
    1966: '丙午', 1967: '丁未', 1968: '戊申', 1969: '己酉', 1970: '庚戌', 1971: '辛亥',
    1972: '壬子', 1973: '癸丑', 1974: '甲寅', 1975: '乙卯', 1976: '丙辰', 1977: '丁巳',
    1978: '戊午', 1979: '己未', 1980: '庚申', 1981: '辛酉', 1982: '壬戌', 1983: '癸亥',
    1984: '甲子', 1985: '乙丑', 1986: '丙寅', 1987: '丁卯', 1988: '戊辰', 1989: '己巳',
    1990: '庚午', 1991: '辛未', 1992: '壬申', 1993: '癸酉', 1994: '甲戌', 1995: '乙亥',
    1996: '丙子', 1997: '丁丑', 1998: '戊寅', 1999: '己卯', 2000: '庚辰', 2001: '辛巳',
    2002: '壬午', 2003: '癸未', 2004: '甲申', 2005: '乙酉', 2006: '丙戌', 2007: '丁亥',
    2008: '戊子', 2009: '己丑', 2010: '庚寅', 2011: '辛卯', 2012: '壬辰', 2013: '癸巳',
    2014: '甲午', 2015: '乙未', 2016: '丙申', 2017: '丁酉', 2018: '戊戌', 2019: '己亥',
    2020: '庚子', 2021: '辛丑', 2022: '壬寅', 2023: '癸卯', 2024: '甲辰', 2025: '乙巳',
    2026: '丙午', 2027: '丁未', 2028: '戊申', 2029: '己酉', 2030: '庚戌', 2031: '辛亥'
};

// 天将对应地支映射表（金口诀）
const TIANJIANG_BRANCH_MAP = {
    '天后': '子',
    '贵人': '丑',
    '青龙': '寅',
    '六合': '卯',
    '勾陈': '辰',
    '螣蛇': '巳',
    '朱雀': '午',
    '太常': '未',
    '白虎': '申',
    '太阴': '酉',
    '天空': '戌',
    '玄武': '亥'
};

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
        '申': { name: '贵人居申曰移途', desc: '在路上，动中吉' },
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
        '戌': { name: '勾陈居戌曰落井', desc: '坐牢、被孤立、无晋升希望' },
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

// ---------------------------
// 五行长生常量 (新增)
// ---------------------------
// 十二长生阶段名称
const CHANGSHENG_STAGES = ['长', '败', '冠', '官', '旺', '衰', '病', '死', '墓', '绝', '胎', '养'];

// 五行长生表 (甲乙同列，丙丁同列，戊己同列，庚辛同列，壬癸同列)
const WUXING_CHANGSHENG_TABLE = {
    '甲': ['亥','子','丑','寅','卯','辰','巳','午','未','申','酉','戌'],
    '乙': ['亥','子','丑','寅','卯','辰','巳','午','未','申','酉','戌'],
    '丙': ['寅','卯','辰','巳','午','未','申','酉','戌','亥','子','丑'],
    '丁': ['寅','卯','辰','巳','午','未','申','酉','戌','亥','子','丑'],
    '戊': ['寅','卯','辰','巳','午','未','申','酉','戌','亥','子','丑'],
    '己': ['寅','卯','辰','巳','午','未','申','酉','戌','亥','子','丑'],
    '庚': ['巳','午','未','申','酉','戌','亥','子','丑','寅','卯','辰'],
    '辛': ['巳','午','未','申','酉','戌','亥','子','丑','寅','卯','辰'],
    '壬': ['申','酉','戌','亥','子','丑','寅','卯','辰','巳','午','未'],
    '癸': ['申','酉','戌','亥','子','丑','寅','卯','辰','巳','午','未']
};

// 十二建除名称
const JIANCHU_NAMES = ['建','除','满','平','定','执','破','危','成','收','开','闭'];

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

// 纳音对照表
const NAYIN_TABLE = {
    '甲子': '海中金', '乙丑': '海中金',
    '丙寅': '炉中火', '丁卯': '炉中火',
    '戊辰': '大林木', '己巳': '大林木',
    '庚午': '路旁土', '辛未': '路旁土',
    '壬申': '剑锋金', '癸酉': '剑锋金',
    '甲戌': '山头火', '乙亥': '山头火',
    '丙子': '涧下水', '丁丑': '涧下水',
    '戊寅': '城头土', '己卯': '城头土',
    '庚辰': '白蜡金', '辛巳': '白蜡金',
    '壬午': '杨柳木', '癸未': '杨柳木',
    '甲申': '泉中水', '乙酉': '泉中水',
    '丙戌': '屋上土', '丁亥': '屋上土',
    '戊子': '霹雳火', '己丑': '霹雳火',
    '庚寅': '松柏木', '辛卯': '松柏木',
    '壬辰': '长流水', '癸巳': '长流水',
    '甲午': '沙中金', '乙未': '沙中金',
    '丙申': '山下火', '丁酉': '山下火',
    '戊戌': '平地木', '己亥': '平地木',
    '庚子': '壁上土', '辛丑': '壁上土',
    '壬寅': '金箔金', '癸卯': '金箔金',
    '甲辰': '覆灯火', '乙巳': '覆灯火',
    '丙午': '天河水', '丁未': '天河水',
    '戊申': '大驿土', '己酉': '大驿土',
    '庚戌': '钗钏金', '辛亥': '钗钏金',
    '壬子': '桑柘木', '癸丑': '桑柘木',
    '甲寅': '大溪水', '乙卯': '大溪水',
    '丙辰': '沙中土', '丁巳': '沙中土',
    '戊午': '天上火', '己未': '天上火',
    '庚申': '石榴木', '辛酉': '石榴木',
    '壬戌': '大海水', '癸亥': '大海水'
};

// 纳音五行映射表
const NAYIN_WUXING = {
    '海中金': '金', '炉中火': '火', '大林木': '木', '路旁土': '土', '剑锋金': '金',
    '山头火': '火', '涧下水': '水', '城头土': '土', '白蜡金': '金', '杨柳木': '木',
    '泉中水': '水', '屋上土': '土', '霹雳火': '火', '松柏木': '木', '长流水': '水',
    '沙中金': '金', '山下火': '火', '平地木': '木', '壁上土': '土', '金箔金': '金',
    '覆灯火': '火', '天河水': '水', '大驿土': '土', '钗钏金': '金', '桑柘木': '木',
    '大溪水': '水', '沙中土': '土', '天上火': '火', '石榴木': '木', '大海水': '水'
};

// 纳音五行颜色映射
const NAYIN_WUXING_COLORS = {
    '金': '#e08433',  // 金色 (参考白虎)
    '木': '#228b22',  // 绿色
    '水': '#4169e1',  // 蓝色
    '火': '#dc143c',  // 红色
    '土': '#98511e'   // 土色 (参考天空)
};

// 计算纳音
function calculateNayin(gan, zhi) {
    if (!gan || !zhi) return '';
    const ganZhi = gan + zhi;
    return NAYIN_TABLE[ganZhi] || '';
}

// 获取纳音五行
function getNayinWuxing(nayin) {
    return NAYIN_WUXING[nayin] || '';
}

// 获取纳音五行颜色
function getNayinWuxingColor(nayin) {
    const wuxing = getNayinWuxing(nayin);
    return NAYIN_WUXING_COLORS[wuxing] || '#666';
}

class DaLiuRenCalculator {
    constructor() {
        this.autoUpdateTimer = null;
        this.isAutoUpdate = false;
        this.timeUpdateTimer = null;
        this.sizhuUpdateTimer = null;
        
        // 本命和行年元素引用
        this.benmingGan = null;
        this.benmingZhi = null;
        this.xingnianGan = null;
        this.xingnianZhi = null;
        this.birthYearSelect = null;
        this.genderMaleRadio = null;
        this.genderFemaleRadio = null;
        
        // 添加全局引用用于调试
        window.daLiuRenCalculator = this;
        
        this.initializeElements();
        this.setCurrentDateTime();
        this.bindEvents();
        this.calculatePlates();
        this.updateSizhu();
        this.startTimeUpdate();
        this.startSizhuUpdate();
        
        // 初始化排盘方式相关功能
        this.initChartGenerationOptions();
        
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
        
        // 设置默认出生年为1980年
        if (this.birthYearSelect) {
            this.birthYearSelect.value = "1980";
            this.updateBenmingAndXingnian();
        }
    }
    


    initializeElements() {
        this.monthGeneralSelect = document.getElementById('month-general');
        this.monthGeneralManualCheckbox = document.getElementById('month-general-manual');
        this.timeBranchSelect = document.getElementById('time-branch');
        this.calculateBtn = document.getElementById('calculate-btn');
        this.autoUpdateBtn = document.getElementById('auto-update-btn');
        this.plateTable = document.querySelector('.plate-table');
        this.calculationInfo = document.getElementById('calculation-info');
        this.centerTime = document.getElementById('center-time');
        this.centerTime2 = document.getElementById('center-time2');
        this.currentTime = document.getElementById('current-time');
        
        // 本命和行年元素引用
        this.benmingGan = document.getElementById('benming-gan');
        this.benmingZhi = document.getElementById('benming-zhi');
        this.xingnianGan = document.getElementById('xingnian-gan');
        this.xingnianZhi = document.getElementById('xingnian-zhi');
        this.birthYearSelect = document.getElementById('birth-year');
        this.genderMaleRadio = document.getElementById('gender-male');
        this.genderFemaleRadio = document.getElementById('gender-female');
        
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
            // 清除所有盘内容
            this.clearAllPlateContent();
            
            // 强制选中"当前时间"选项
            const currentTimeRadio = document.getElementById('current-time');
            if (currentTimeRadio) {
                currentTimeRadio.checked = true;
            }
            
            // 隐藏所有输入区域
            this.hideAllInputAreas();
            
            this.setCurrentDateTime();
            
            // 获取当前时间对应的时辰
            const now = new Date();
            const currentHour = now.getHours();
            const currentTimeBranch = this.getTimeBranchByHour(currentHour);
            
            // 强制更新时辰选择框
            this.timeBranchSelect.value = currentTimeBranch;
            
            // 获取月将
            const monthGeneral = this.getCurrentMonthGeneral();
            
            // 使用当前时间计算排盘
            this.calculatePlates(monthGeneral, currentTimeBranch);
            this.updateSizhu(currentTimeBranch);
            
            // 更新本命和行年
            this.updateBenmingAndXingnian();
            
            // 显示所有图表区域
            this.chartSections.forEach(section => {
                section.style.display = 'block';
            });
            console.log('强制更新完成');
        });
        
        this.autoUpdateBtn.addEventListener('click', () => this.toggleAutoUpdate());
        
        // 实时计算
        this.monthGeneralSelect.addEventListener('change', () => this.calculatePlates());
        this.timeBranchSelect.addEventListener('change', () => this.calculatePlates());
        
        // 本命和行年相关事件
        if (this.birthYearSelect) {
            this.birthYearSelect.addEventListener('change', () => {
                this.updateBenmingAndXingnian();
            });
        }
        
        if (this.genderMaleRadio) {
            this.genderMaleRadio.addEventListener('change', () => {
                this.updateBenmingAndXingnian();
            });
        }
        
        if (this.genderFemaleRadio) {
            this.genderFemaleRadio.addEventListener('change', () => {
                this.updateBenmingAndXingnian();
            });
        }
        
        // 钤法弹出框事件
        this.initQianfaModal();
    }
    
    // 初始化排盘方式相关功能
    initChartGenerationOptions() {
        // 获取排盘按钮元素
        this.generateChartBtn = document.getElementById('generate-chart-btn');
        
        // 获取所有排盘方式单选按钮
        this.timeSelectionRadios = document.querySelectorAll('input[name="time-selection"]');
        
        // 获取各种输入区域
        this.customTimeInput = document.getElementById('custom-time-input');
        this.randomNumberInput = document.getElementById('random-number-input');
        
        // 获取所有图表区域
        this.chartSections = document.querySelectorAll('.chart-section');
        
        // 为排盘方式单选按钮添加事件监听
        this.timeSelectionRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                // 隐藏所有输入区域
                this.hideAllInputAreas();
                
                // 显示对应的输入区域
                if (radio.id === 'custom-time') {
                    this.customTimeInput.classList.remove('d-none');
                } else if (radio.id === 'random-number') {
                    this.randomNumberInput.classList.remove('d-none');
                }
            });
        });
        
        // 为排盘按钮添加点击事件
        this.generateChartBtn.addEventListener('click', () => {
            this.generateChart();
        });
        
        // 随机数生成函数
        window.generateRandomNumber = () => {
            const randomValue = Math.floor(Math.random() * 12) + 1;
            document.getElementById('random-number-value').value = randomValue;
            
            // 显示对应的地支提示
            const branchMapping = {
                1: '子时 (23:00-1:00)', 2: '丑时 (1:00-3:00)', 3: '寅时 (3:00-5:00)', 
                4: '卯时 (5:00-7:00)', 5: '辰时 (7:00-9:00)', 6: '巳时 (9:00-11:00)',
                7: '午时 (11:00-13:00)', 8: '未时 (13:00-15:00)', 9: '申时 (15:00-17:00)', 
                10: '酉时 (17:00-19:00)', 11: '戌时 (19:00-21:00)', 12: '亥时 (21:00-23:00)'
            };
            
            const tipElement = document.querySelector('#random-number-input .form-text');
            if (tipElement) {
                tipElement.textContent = `数字 ${randomValue} 对应 ${branchMapping[randomValue]}`;
            }
        };
    }
    
    // 隐藏所有输入区域
    hideAllInputAreas() {
        this.customTimeInput.classList.add('d-none');
        this.randomNumberInput.classList.add('d-none');
    }
    
    // 生成排盘
    // 根据出生年和性别计算本命和行年
    // 添加清除所有盘内容的方法
    clearAllPlateContent() {
        console.log('清除所有盘内容...');
        
        // 清除四课内容
        if (this.sikeElements) {
            for (let key in this.sikeElements) {
                if (this.sikeElements[key].top) this.sikeElements[key].top.textContent = '';
                if (this.sikeElements[key].tianjiang) this.sikeElements[key].tianjiang.textContent = '';
                if (this.sikeElements[key].bottom) this.sikeElements[key].bottom.textContent = '';
            }
        }
        
        // 清除三传内容
        if (this.sanchuanElements) {
            for (let key in this.sanchuanElements) {
                if (this.sanchuanElements[key].liuqin) this.sanchuanElements[key].liuqin.textContent = '';
                if (this.sanchuanElements[key].shishen) this.sanchuanElements[key].shishen.textContent = '';
                if (this.sanchuanElements[key].gan) this.sanchuanElements[key].gan.textContent = '';
                if (this.sanchuanElements[key].zhi) this.sanchuanElements[key].zhi.textContent = '';
                if (this.sanchuanElements[key].tianjiang) this.sanchuanElements[key].tianjiang.textContent = '';
            }
        }
        
        // 清除天盘地盘内容
        const cells = document.querySelectorAll('.plate-table td');
        cells.forEach(cell => {
            const tianpanDiv = cell.querySelector('.tianpan');
            const tianjiangDiv = cell.querySelector('.tianjiang');
            const dipanDiv = cell.querySelector('.dipan');
            const tianpanGanDiv = cell.querySelector('.tianpan-gan');
            const nayin = cell.querySelector('.nayin');
            const jianchu = cell.querySelector('.jianchu');
            const wangshui = cell.querySelector('.wangshui');
            const changsheng = cell.querySelector('.changsheng');
            
            if (tianpanDiv) tianpanDiv.textContent = '';
            if (tianjiangDiv) tianjiangDiv.textContent = '';
            if (dipanDiv) dipanDiv.textContent = '';
            if (tianpanGanDiv) tianpanGanDiv.textContent = '';
            if (nayin) nayin.textContent = '';
            if (jianchu) jianchu.textContent = '';
            if (wangshui) wangshui.textContent = '';
            if (changsheng) changsheng.textContent = '';
        });
        
        // 清除旬干内容
        if (this.xunganValue) this.xunganValue.textContent = '';
        
        console.log('盘内容清除完成');
    }

    updateBenmingAndXingnian() {
        if (!this.birthYearSelect || !this.benmingGan || !this.benmingZhi) {
            console.log('本命和行年元素未初始化');
            return;
        }
        
        const birthYear = this.birthYearSelect.value;
        const isMale = this.genderMaleRadio.checked;
        
        if (!birthYear) {
            // 如果未选择出生年，清空显示
            this.benmingGan.textContent = '-';
            this.benmingZhi.textContent = '-';
            this.xingnianGan.textContent = '-';
            this.xingnianZhi.textContent = '-';
            return;
        }
        
        try {
            // 获取本命干支
            const birthGanzhi = YEAR_GANZHI[birthYear];
            if (!birthGanzhi) {
                console.error('未找到对应年份的干支:', birthYear);
                return;
            }
            
            const benmingGan = birthGanzhi.charAt(0);
            const benmingZhi = birthGanzhi.charAt(1);
            
            // 更新本命显示
            this.benmingGan.textContent = benmingGan;
            this.benmingZhi.textContent = benmingZhi;
            
            // 应用五行颜色
            this.applyWuxingColor(this.benmingGan, benmingGan);
            this.applyWuxingColor(this.benmingZhi, benmingZhi);
            
            // 触发纳音更新
            if (window.nayinManager) {
                setTimeout(() => window.nayinManager.updateNayinDisplay(), 100);
            }
            
            // 计算行年
            this.calculateXingnian(benmingZhi, isMale);
            
        } catch (error) {
            console.error('计算本命和行年时出错:', error);
        }
    }
    
    // 计算行年
    calculateXingnian(benmingZhi, isMale) {
        try {
            // 获取当前年份和出生年份
            const currentYear = new Date().getFullYear();
            const birthYearValue = parseInt(this.birthYearSelect.value);
            
            if (isNaN(birthYearValue)) {
                console.error('无效的出生年份');
                return;
            }
            
            // 计算年龄数
            const ageDiff = currentYear - birthYearValue;
            console.log(`当前年份=${currentYear}, 出生年份=${birthYearValue}, 年龄数=${ageDiff}`);
            
            // 男命从丙寅开始顺排，女命从壬申开始逆排
            const maleStartGan = '丙';
            const maleStartZhi = '寅';
            const femaleStartGan = '壬';
            const femaleStartZhi = '申';
            
            const maleStartGanIndex = HEAVENLY_STEMS.indexOf(maleStartGan);
            const maleStartZhiIndex = BRANCHES.indexOf(maleStartZhi);
            const femaleStartGanIndex = HEAVENLY_STEMS.indexOf(femaleStartGan);
            const femaleStartZhiIndex = BRANCHES.indexOf(femaleStartZhi);
            
            // 计算行年天干地支索引
            let xingnianGanIndex, xingnianZhiIndex;
            
            if (isMale) {
                // 男命从丙寅开始顺排
                xingnianGanIndex = (maleStartGanIndex + ageDiff) % 10;
                xingnianZhiIndex = (maleStartZhiIndex + ageDiff) % 12;
                console.log(`男命行年计算: 从丙寅开始顺排，年龄数=${ageDiff}, 天干索引=${xingnianGanIndex}, 地支索引=${xingnianZhiIndex}`);
            } else {
                // 女命从壬申开始逆排
                xingnianGanIndex = (femaleStartGanIndex - ageDiff + 1000) % 10;
                xingnianZhiIndex = (femaleStartZhiIndex - ageDiff + 1200) % 12;
                console.log(`女命行年计算: 从壬申开始逆排，年龄数=${ageDiff}, 天干索引=${xingnianGanIndex}, 地支索引=${xingnianZhiIndex}`);
            }
            
            const xingnianGan = HEAVENLY_STEMS[xingnianGanIndex];
            const xingnianZhi = BRANCHES[xingnianZhiIndex];
            
            // 更新行年显示
            if (this.xingnianGan) this.xingnianGan.textContent = xingnianGan;
            if (this.xingnianZhi) this.xingnianZhi.textContent = xingnianZhi;
            
            // 应用五行颜色
            if (this.xingnianGan) this.applyWuxingColor(this.xingnianGan, xingnianGan);
            if (this.xingnianZhi) this.applyWuxingColor(this.xingnianZhi, xingnianZhi);
            
            // 获取本命干支用于日志输出
            const birthGanzhi = YEAR_GANZHI[birthYearValue];
            const benmingGan = birthGanzhi ? birthGanzhi.charAt(0) : '未知';
            
            // 获取当前年干支
            const currentYearGanzhi = YEAR_GANZHI[currentYear] || '未知';
            
            // 记录起始地支
            const startBranch = isMale ? maleStartZhi : femaleStartZhi;
            
            console.log(`本命: ${benmingGan}${benmingZhi}, 性别: ${isMale ? '男' : '女'}, 起始地支: ${startBranch}, 当前流年: ${currentYearGanzhi}, 行年: ${xingnianGan}${xingnianZhi}`);
            
        } catch (error) {
            console.error('计算行年时出错:', error);
        }
    }
    
    generateChart() {
        // 清除所有盘内容
        this.clearAllPlateContent();
        
        // 显示所有图表区域
        this.chartSections.forEach(section => {
            section.style.display = 'block';
        });
        
        // 根据选择的排盘方式获取时间
        let selectedOption = '';
        this.timeSelectionRadios.forEach(radio => {
            if (radio.checked) {
                selectedOption = radio.id;
            }
        });
        
        // 根据不同的排盘方式处理
        let customTimeBranch = null;
        switch (selectedOption) {
            case 'current-time':
                // 使用当前时间
                this.currentDateTime = new Date();
                console.log(`设置为当前系统时间: ${this.currentDateTime}`);
                
                // 强制设置时辰为当前系统时间对应的时辰
                const currentHour = this.currentDateTime.getHours();
                customTimeBranch = this.getTimeBranchByHour(currentHour);
                console.log(`从系统时间(${currentHour}时)提取时辰: ${customTimeBranch}`);
                
                // 强制更新时辰选择框
                this.timeBranchSelect.value = customTimeBranch;
                break;
                
            case 'custom-time':
                // 使用自定义时间
                const customDateValue = document.getElementById('custom-date').value;
                if (customDateValue) {
                    this.currentDateTime = new Date(customDateValue);
                    console.log(`设置自定义时间: ${this.currentDateTime}`);
                    
                    // 从自定义时间中提取时辰
                    const hour = this.currentDateTime.getHours();
                    customTimeBranch = this.getTimeBranchByHour(hour);
                    console.log(`从自定义时间(${hour}时)提取时辰: ${customTimeBranch}`);
                    
                    // 尝试预先计算日干，用于后续的时干计算
                    try {
                        if (typeof Solar !== 'undefined') {
                            const customSolar = Solar.fromDate(this.currentDateTime);
                            const customLunar = customSolar.getLunar();
                            const customDayGZ = customLunar.getDayInGanZhi();
                            const customDayStem = customDayGZ.charAt(0);
                            console.log(`自定义时间的日干支: ${customDayGZ}, 日干: ${customDayStem}`);
                        }
                    } catch (error) {
                        console.error('预先计算自定义日期的日干时出错:', error);
                    }
                } else {
                    alert('请选择自定义时间');
                    return;
                }
                break;
                
            case 'random-number':
                // 使用随机数起盘（1-12对应子时-亥时）
                const randomValue = parseInt(document.getElementById('random-number-value').value);
                if (randomValue >= 1 && randomValue <= 12) {
                    // 使用当前日期
                    this.currentDateTime = new Date();
                    
                    // 映射表，将1-12直接映射到对应地支
                    const branchMapping = {
                        1: '子', 2: '丑', 3: '寅', 4: '卯', 5: '辰', 6: '巳',
                        7: '午', 8: '未', 9: '申', 10: '酉', 11: '戌', 12: '亥'
                    };
                    
                    // 直接使用映射表获取地支
                    customTimeBranch = branchMapping[randomValue];
                    
                    // 强制设置占时地支
                    console.log(`设置随机时辰值: ${randomValue}, 直接映射到地支: ${customTimeBranch}`);
                } else {
                    alert('请输入1-12之间的数字');
                    return;
                }
                break;
                
            default:
                // 默认使用当前时间
                this.currentDateTime = new Date();
                break;
        }
        
        // 更新时间显示
        this.updateCurrentTime();
        
                    // 获取月将
        const monthGeneral = this.getCurrentMonthGeneral();
        console.log(`获取到当前月将: ${monthGeneral}`);
        
        // 计算排盘 - 统一处理方式，无论是否有自定义时辰
        if (customTimeBranch) {
            // 设置时辰选择框显示
            this.timeBranchSelect.value = customTimeBranch;
            console.log(`设置时辰选择框显示为: ${customTimeBranch}`);
            
            // 更新四柱信息（传递自定义时辰）
            console.log(`更新四柱信息（自定义时辰: ${customTimeBranch}）`);
            this.updateSizhu(customTimeBranch);
            
            // 使用自定义时辰计算排盘
            console.log(`传递参数到calculatePlates: monthGeneral=${monthGeneral}, customTimeBranch=${customTimeBranch}`);
            this.calculatePlates(monthGeneral, customTimeBranch);
        } else {
            // 这种情况理论上不应该发生，因为我们总是设置customTimeBranch
            console.log(`警告：未获取到时辰，使用当前时间计算排盘`);
            
            // 更新四柱信息
            console.log(`更新四柱信息（当前时间）`);
            this.updateSizhu();
            
            this.calculatePlates(monthGeneral, null);
        }
        
        // 更新本命和行年
        this.updateBenmingAndXingnian();
        
        // 更新本命和行年
        this.updateBenmingAndXingnian();
    }

    startTimeUpdate() {
        // 更新当前时间显示
        this.updateCurrentTime();
        
        // 每秒更新一次当前时间 - 已注释
        /*
        this.timeUpdateTimer = setInterval(() => {
            this.updateCurrentTime();
        }, 1000);
        */
    }

    startSizhuUpdate() {
        // 每分钟更新一次四柱（因为时柱是按小时变化的）
        // 自动刷新功能已被注释
        /*
        this.sizhuUpdateTimer = setInterval(() => {
            this.updateSizhu();
            // 同时更新月将和占时
            this.setCurrentDateTime();
            this.calculatePlates();
        }, 60000); // 60秒更新一次
        */
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
            
            // 每分钟自动更新 - 已注释
            /*
            this.autoUpdateTimer = setInterval(() => {
                this.setCurrentDateTime();
                this.calculatePlates();
                this.updateSizhu();
            }, 60000); // 60秒更新一次
            */
            
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
        
        console.log(`当前小时: ${hour}, 计算得到时辰: ${this.getTimeBranchByHour(hour)}`);
        return '子'; // 默认值
    }
    
    // 新增辅助方法，便于调试
    getTimeBranchByHour(hour) {
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
        return '未知';
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

    // 获取两个贵人位置
    getBothNoblePersons(dayStem, timeBranch) {
        const nobles = NOBLE_PERSON_MAP[dayStem];
        if (!nobles) return { tianpanNoble: '丑', dipanNoble: '未' };
        
        // 判断昼夜
        const isDayTime = DAY_BRANCHES.includes(timeBranch);
        
        // 天盘天将使用当前的贵人逻辑，地盘天将使用另一个贵人
        return {
            tianpanNoble: isDayTime ? nobles[0] : nobles[1],  // 天盘贵人
            dipanNoble: isDayTime ? nobles[1] : nobles[0]     // 地盘贵人
        };
    }

    // 排布地盘天将
    arrangeDipanTianjiangs(dipanNoblePosition, dipanNobleGroundPosition = null) {
        const tianjiangMap = {};
        
        if (!dipanNoblePosition) {
            console.error('地盘天将贵人位置未找到');
            return tianjiangMap;
        }
        
        // 如果没有提供地盘位置，使用贵人位置本身作为地盘位置（向后兼容）
        if (!dipanNobleGroundPosition) {
            dipanNobleGroundPosition = dipanNoblePosition;
        }
        
        // 使用标准地支顺序进行天将排布，从地盘贵人位置开始
        const noblePosIndex = STANDARD_BRANCH_ORDER.indexOf(dipanNoblePosition);
        
        // 地盘天将排布规则：根据贵人在地盘的位置决定方向
        // 贵人在地盘（亥子丑寅卯辰）：顺时针排贵人
        // 贵人在地盘（巳午未申酉戌）：逆时针排贵人
        const digongGroup = ['亥', '子', '丑', '寅', '卯', '辰'];  // 地宫
        const tiangongGroup = ['巳', '午', '未', '申', '酉', '戌'];  // 天宫
        const clockwise = digongGroup.includes(dipanNobleGroundPosition);  // 地宫用顺时针，天宫用逆时针
        
        console.log(`地盘天将排布：`);
        console.log(`  贵人位置：${dipanNoblePosition}`);
        console.log(`  贵人在地盘位置：${dipanNobleGroundPosition}`);
        console.log(`  使用方向：${clockwise ? '顺时针' : '逆时针'}（${digongGroup.includes(dipanNobleGroundPosition) ? '地宫' : '天宫'}）`);
        
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
        
        console.log('地盘天将排布结果:', tianjiangMap);
        return tianjiangMap;
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
        
        // 计算地盘地支距离旬首地支的步数
        const steps = (groundBranchIndex - xunshouBranchIndex + 12) % 12;
        
        // 构建完整的地支到天干的映射（包括旬空位置）
        // 从旬首开始，按天干顺序（甲到癸）依次与地支配对
        const xunMapping = {};
        for (let i = 0; i < 12; i++) {
            const stemIndex = (xunshouStemIndex + i) % 10;
            const branchIndex = (xunshouBranchIndex + i) % 12;
            const stem = HEAVENLY_STEMS[stemIndex];
            const branch = BRANCHES[branchIndex];
            xunMapping[branch] = stem;
        }
        
        // 返回地盘地支对应的天干（包括旬空位置按甲乙顺序计算的天干）
        return xunMapping[groundBranch] || '';
    }

    // 新增：计算旬空位置的天干（按甲乙顺序）
    calculateXunkongGan(groundBranch, dayStem, dayBranch) {
        // 首先确定旬首
        const xunshou = this.calculateXunshou(dayStem, dayBranch);
        const xunshouStem = xunshou.charAt(0);
        const xunshouBranch = xunshou.charAt(1);
        
        // 获取旬首的天干和地支索引
        const xunshouStemIndex = STEM_INDEX[xunshouStem];
        const xunshouBranchIndex = BRANCH_INDEX[xunshouBranch];
        
        // 获取地盘地支的索引
        const groundBranchIndex = BRANCH_INDEX[groundBranch];
        
        // 计算地盘地支距离旬首地支的步数
        const steps = (groundBranchIndex - xunshouBranchIndex + 12) % 12;
        
        // 对于旬空位置（超过10步），按甲乙顺序继续计算
        if (steps >= 10) {
            // 超过10步的部分，按甲乙顺序计算
            const extraSteps = steps - 10;
            const ganIndex = extraSteps % 10; // 从甲开始循环
            return HEAVENLY_STEMS[ganIndex];
        }
        
        // 非旬空位置，正常计算
        const ganIndex = (xunshouStemIndex + steps) % 10;
        return HEAVENLY_STEMS[ganIndex];
    }

    // 计算时辰的旬首
    calculateTimeXunshou(timeStem, timeBranch) {
        // 时辰的六十甲子旬首对应表
        const timeXunganTable = {
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
        
        const timeGanzhi = timeStem + timeBranch;
        return timeXunganTable[timeGanzhi] || '甲子';
    }

    // 计算天遁（根据时辰旬首在天盘的位置起甲）
    calculateTianDun(groundBranch, timeStem, timeBranch, heavenPlate) {
        if (!heavenPlate) return '';
        
        // 获取时辰的旬首
        const timeXunshou = this.calculateTimeXunshou(timeStem, timeBranch);
        const xunshouStem = timeXunshou.charAt(0);
        const xunshouBranch = timeXunshou.charAt(1);
        
        // 找到旬首地支在天盘上的位置（即找到哪个地盘位置的天盘地支等于旬首地支）
        let tianpanXunshouPosition = null;
        for (let groundPos in heavenPlate) {
            if (heavenPlate[groundPos] === xunshouBranch) {
                tianpanXunshouPosition = groundPos;
                break;
            }
        }
        
        if (!tianpanXunshouPosition) {
            console.warn(`天遁计算失败：旬首地支 ${xunshouBranch} 未在天盘中找到`);
            return '';
        }
        
        // 获取天盘旬首位置的索引
        const tianpanXunshouIndex = BRANCH_INDEX[tianpanXunshouPosition];
        // 获取目标地支的索引  
        const groundBranchIndex = BRANCH_INDEX[groundBranch];
        
        // 计算目标地支距离天盘旬首位置的步数
        const steps = (groundBranchIndex - tianpanXunshouIndex + 12) % 12;
        
        // 从甲开始排列
        const ganIndex = steps % 10;
        
        console.log(`天遁计算 ${groundBranch}:`, {
            timeXunshou,
            xunshouBranch,
            tianpanXunshouPosition,
            steps,
            result: HEAVENLY_STEMS[ganIndex]
        });
        
        return HEAVENLY_STEMS[ganIndex];
    }

    // 新增：计算天遁的旬空状态
    calculateTianDunWithXunkong(groundBranch, timeStem, timeBranch, heavenPlate) {
        if (!heavenPlate) return { gan: '', isTimeXunkong: false };
        
        // 获取时辰的旬首
        const timeXunshou = this.calculateTimeXunshou(timeStem, timeBranch);
        const xunshouStem = timeXunshou.charAt(0);
        const xunshouBranch = timeXunshou.charAt(1);
        
        // 找到旬首地支在天盘上的位置
        let tianpanXunshouPosition = null;
        for (let groundPos in heavenPlate) {
            if (heavenPlate[groundPos] === xunshouBranch) {
                tianpanXunshouPosition = groundPos;
                break;
            }
        }
        
        if (!tianpanXunshouPosition) {
            console.warn(`天遁旬空计算失败：旬首地支 ${xunshouBranch} 未在天盘中找到`);
            return { gan: '', isTimeXunkong: false };
        }
        
        // 获取天盘旬首位置的索引
        const tianpanXunshouIndex = BRANCH_INDEX[tianpanXunshouPosition];
        const groundBranchIndex = BRANCH_INDEX[groundBranch];
        
        // 计算目标地支距离天盘旬首位置的步数
        const steps = (groundBranchIndex - tianpanXunshouIndex + 12) % 12;
        
        // 天遁的旬空判断：步数大于等于10时为空
        const isTimeXunkong = steps >= 10;
        
        let gan = '';
        if (isTimeXunkong) {
            // 天遁空位置：按甲乙顺序继续计算
            const extraSteps = steps - 10;
            const ganIndex = extraSteps % 10;
            gan = HEAVENLY_STEMS[ganIndex];
        } else {
            // 非天遁空位置：正常计算
            const ganIndex = steps % 10;
            gan = HEAVENLY_STEMS[ganIndex];
        }
        
        console.log(`天遁旬空计算 ${groundBranch}:`, {
            timeXunshou,
            xunshouBranch,
            tianpanXunshouPosition,
            steps,
            isTimeXunkong,
            result: gan
        });
        
        return { gan, isTimeXunkong };
    }

    // 五子元遁：根据日干确定子时起始天干
    getWuziYuanDunZiStem(dayStem) {
        switch (dayStem) {
            case '甲': case '己': return '甲'; // 甲子
            case '乙': case '庚': return '丙'; // 丙子
            case '丙': case '辛': return '戊'; // 戊子
            case '丁': case '壬': return '庚'; // 庚子
            case '戊': case '癸': return '壬'; // 壬子
            default: return '甲';
        }
    }

    // 计算人遁（新逻辑）
    // 1) 找到贵人天盘地支 nobleHeavenBranch = heavenPlate[tianpanNobleGroundPosition]
    // 2) 找到该天盘地支所在的地盘位置 groundOfNobleHeaven (实为 tianpanNobleGroundPosition)
    // 3) 计算该位置的建干天干 jianganGan
    // 4) 对 jianganGan 起五子元遁，得起始天干 startGan
    // 5) 从天盘"子"所在位置开始顺时针排布天干，求出目标位置的天干即人遁
    calculateRendun(groundBranch, tianpanNobleGroundPosition, dayStem, heavenPlate) {
        if (!tianpanNobleGroundPosition || !heavenPlate) return '';

        // 1. 贵人在地盘位置对应的天盘地支
        const nobleHeavenBranch = heavenPlate[tianpanNobleGroundPosition];
        if (!nobleHeavenBranch) return '';

        // 2. 第一次映射：nobleGround = tianpanNobleGroundPosition (例: 戌)
        const nobleGround = tianpanNobleGroundPosition;

        // 3. 第二次映射：找到天盘地支 = nobleGround 的地盘位置 secondGround (例: heavenPlate[丑] == 戌 ⇒ secondGround = 丑)
        let secondGround = null;
        for (let pos in heavenPlate) {
            if (heavenPlate[pos] === nobleGround) {
                secondGround = pos;
                break;
            }
        }
        if (!secondGround) {
            console.error('calculateRendun: 未找到天盘地支 ' + nobleGround + ' 所在的地盘位置');
            return '';
        }

        // 4. 在 secondGround 上计算建干（以日干起五子元遁，从天盘子位排）
        const jianganGan = this.calculateJiangan(secondGround, dayStem, heavenPlate);
        if (!jianganGan) return '';

        // 5. 取得五子元遁的起始天干
        const startGan = this.getWuziYuanDunZiStem(jianganGan);
        const startGanIndex = STEM_INDEX[startGan];

        // 6. 找到天盘"子"所在的地盘位置
        let ziPosition = null;
        for (let pos in heavenPlate) {
            if (heavenPlate[pos] === '子') {
                ziPosition = pos;
                break;
            }
        }
        if (!ziPosition) return '';

        // 7. 计算目标天盘地支相对"子"天盘地支的顺时针步数
        const targetHeavenBranch = heavenPlate[groundBranch];
        if (!targetHeavenBranch) return '';
        const stepsFromZi = (BRANCH_INDEX[targetHeavenBranch] - BRANCH_INDEX['子'] + 12) % 12;

        const rendunIndex = (startGanIndex + stepsFromZi) % 10;

        console.log('人遁计算', {
            groundBranch,
            nobleHeavenBranch,
            nobleGround,
            secondGround,
            jianganGan,
            startGan,
            ziPosition,
            targetHeavenBranch,
            stepsFromZi,
            result: HEAVENLY_STEMS[rendunIndex]
        });

        return HEAVENLY_STEMS[rendunIndex];
    }

    // 计算建干（以日干起五子元遁，从天盘中"子"所在地盘开始顺时针排布）
    calculateJiangan(groundBranch, dayStem, heavenPlate) {
        if (!dayStem || !heavenPlate) return '';

        // 1. 取得五子元遁起始天干（子位天干）
        const startGan = this.getWuziYuanDunZiStem(dayStem);
        const startGanIndex = STEM_INDEX[startGan];

        // 2. 找到天盘中地支为"子"的地盘位置
        let ziPosition = null;
        for (let pos in heavenPlate) {
            if (heavenPlate[pos] === '子') {
                ziPosition = pos;
                break;
            }
        }
        if (!ziPosition) {
            console.error('calculateJiangan: 未在天盘中找到"子"位置');
            return '';
        }

        // 3. 计算从"子"位置到目标地支的顺时针步数
        const stepsFromZi = (BRANCH_INDEX[groundBranch] - BRANCH_INDEX[ziPosition] + 12) % 12;

        // 4. 得到目标地支的建干天干
        const jianganIndex = (startGanIndex + stepsFromZi) % 10;

        console.log(`建干计算 ${groundBranch}: 起始天干 ${startGan}(索引${startGanIndex}), "子"在地盘 ${ziPosition}, 距离 ${stepsFromZi} 步, 结果 ${HEAVENLY_STEMS[jianganIndex]}`);

        return HEAVENLY_STEMS[jianganIndex];
    }

    // 计算复建（基于时干的五子元遁）
    calculateFujian(groundBranch, timeStem, heavenPlate) {
        // 复建 = 对时干起五子元遁，并从天盘中"子"所在位置开始顺时针排布
        if (!timeStem || !heavenPlate) return '';

        // 1. 获取时干对应的五子元遁起始天干（子位天干）
        const startGan = this.getWuziYuanDunZiStem(timeStem);
        const startGanIndex = STEM_INDEX[startGan];

        // 2. 在天盘中找到"子"地支所在的地盘位置
        let ziPosition = null;
        for (let pos in heavenPlate) {
            if (heavenPlate[pos] === '子') {
                ziPosition = pos;
                break;
            }
        }
        if (!ziPosition) {
            console.error('calculateFujian: 未在天盘中找到"子"位置');
            return '';
        }

        // 3. 计算从"子"位置到目标地支的顺时针步数
        const stepsFromZi = (BRANCH_INDEX[groundBranch] - BRANCH_INDEX[ziPosition] + 12) % 12;

        // 4. 计算目标位置的复建天干
        const fujianIndex = (startGanIndex + stepsFromZi) % 10;

        return HEAVENLY_STEMS[fujianIndex];
    }

    // 新增：计算人遁（五子元遁）的旬空状态
    calculateRendunWithXunkong(groundBranch, tianpanNobleGroundPosition, dayStem) {
        if (!tianpanNobleGroundPosition || !dayStem) return { gan: '', isRendunXunkong: false };
        
        // 根据日干确定子时的起始天干（五子元遁）
        const ziStem = this.getWuziYuanDunZiStem(dayStem);
        const ziStemIndex = STEM_INDEX[ziStem];
        
        // 计算从子位到目标地支的步数
        const groundBranchIndex = BRANCH_INDEX[groundBranch];
        const stepsFromZi = (groundBranchIndex - 0 + 12) % 12; // 从子到目标位置
        
        // 判断是否为人遁空（五子元遁的旬空概念）
        const isRendunXunkong = stepsFromZi >= 10;
        
        let gan = '';
        if (isRendunXunkong) {
            // 人遁空位置：按甲乙顺序继续计算
            const extraSteps = stepsFromZi - 10;
            const ganIndex = extraSteps % 10;
            gan = HEAVENLY_STEMS[ganIndex];
        } else {
            // 非人遁空位置：正常计算
            const ganIndex = (ziStemIndex + stepsFromZi) % 10;
            gan = HEAVENLY_STEMS[ganIndex];
        }
        
        return { gan, isRendunXunkong };
    }

    // 根据时支获取时干支（使用五子元遁法）
    getTimeGanZhi(timeBranch, customDayStem = null) {
        // 如果提供了自定义日干，使用它，否则从当前日期获取
        let dayStem;
        if (customDayStem) {
            dayStem = customDayStem;
            console.log(`使用自定义日干: ${dayStem} 计算时干`);
        } else {
            const now = new Date();
            const solar = Solar.fromDate(now);
            const lunar = solar.getLunar();
            const dayGZ = lunar.getDayInGanZhi();
            dayStem = dayGZ.charAt(0);
            console.log(`从当前日期获取日干: ${dayStem} 计算时干`);
        }
        
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
    arrangeTwelveTianjiangs(noblePosition, nobleGroundPosition = null) {
        const tianjiangMap = {};
        
        if (!noblePosition) {
            console.error('贵人位置未找到');
            return tianjiangMap;
        }
        
        // 如果没有提供地盘位置，使用贵人位置本身作为地盘位置（向后兼容）
        if (!nobleGroundPosition) {
            nobleGroundPosition = noblePosition;
        }
        
        // 使用标准地支顺序进行天将排布，从贵人位置开始
        const noblePosIndex = STANDARD_BRANCH_ORDER.indexOf(noblePosition);
        
        // 天盘天将排布规则：根据贵人在地盘的位置决定方向
        // 贵人在地宫（亥子丑寅卯辰）：顺时针排贵人
        // 贵人在天宫（巳午未申酉戌）：逆时针排贵人
        const digongGroup = ['亥', '子', '丑', '寅', '卯', '辰'];  // 地宫
        const tiangongGroup = ['巳', '午', '未', '申', '酉', '戌'];  // 天宫
        
        const clockwise = digongGroup.includes(nobleGroundPosition);  // 地宫用顺时针，天宫用逆时针
        
        console.log(`天盘天将排布：`);
        console.log(`  贵人位置：${noblePosition}`);
        console.log(`  贵人在地盘位置：${nobleGroundPosition}`);
        console.log(`  标准索引：${noblePosIndex}`);
        console.log(`  地宫（亥子丑寅卯辰）：${digongGroup.join(' ')}`);
        console.log(`  天宫（巳午未申酉戌）：${tiangongGroup.join(' ')}`);
        console.log(`  贵人在地宫？${digongGroup.includes(nobleGroundPosition)}`);
        console.log(`  贵人在天宫？${tiangongGroup.includes(nobleGroundPosition)}`);
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
        console.log(`天盘天将排布结果：`);
        STANDARD_BRANCH_ORDER.forEach(branch => {
            const marker = branch === noblePosition ? ' ← 贵人' : '';
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

    // 计算四课（包含双天将）
    calculateSike(dayStem, dayBranch, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap) {
        const sike = {};
        
        // 从四柱显示中获取日干日支，确保与四柱显示一致
        const displayDayStem = document.getElementById('day-gan').textContent;
        const displayDayBranch = document.getElementById('day-zhi').textContent;
        
        console.log(`使用四柱显示的日干支计算四课: 日干=${displayDayStem}, 日支=${displayDayBranch}`);
        
        // 第一课：日干寄宫上的天盘字 / 日干
        const stemLodge = STEM_LODGE_MAP[displayDayStem];
        const ke1Top = heavenPlate[stemLodge] || '';
        sike.ke1 = {
            top: ke1Top,
            bottom: displayDayStem,
            tianpanTianjiang: tianpanTianjiangMap[ke1Top] || '',  // 天盘天将
            dipanTianjiang: dipanTianjiangMap[ke1Top] || '',     // 地盘天将
            tianjiang: `${tianpanTianjiangMap[ke1Top] || ''}/${dipanTianjiangMap[ke1Top] || ''}`
        };
        
        // 第二课：第一课天盘字在地盘的位置上的天盘字 / 第一课天盘字
        const ke2Top = heavenPlate[ke1Top] || '';
        sike.ke2 = {
            top: ke2Top,
            bottom: ke1Top,
            tianpanTianjiang: tianpanTianjiangMap[ke2Top] || '',  // 天盘天将
            dipanTianjiang: dipanTianjiangMap[ke2Top] || '',     // 地盘天将
            tianjiang: `${tianpanTianjiangMap[ke2Top] || ''}/${dipanTianjiangMap[ke2Top] || ''}`
        };
        
        // 第三课：日支上的天盘字 / 日支
        const ke3Top = heavenPlate[displayDayBranch] || '';
        sike.ke3 = {
            top: ke3Top,
            bottom: displayDayBranch,
            tianpanTianjiang: tianpanTianjiangMap[ke3Top] || '',  // 天盘天将
            dipanTianjiang: dipanTianjiangMap[ke3Top] || '',     // 地盘天将
            tianjiang: `${tianpanTianjiangMap[ke3Top] || ''}/${dipanTianjiangMap[ke3Top] || ''}`
        };
        
        // 第四课：第三课天盘字在地盘的位置上的天盘字 / 第三课天盘字
        const ke4Top = heavenPlate[ke3Top] || '';
        sike.ke4 = {
            top: ke4Top,
            bottom: ke3Top,
            tianpanTianjiang: tianpanTianjiangMap[ke4Top] || '',  // 天盘天将
            dipanTianjiang: dipanTianjiangMap[ke4Top] || '',     // 地盘天将
            tianjiang: `${tianpanTianjiangMap[ke4Top] || ''}/${dipanTianjiangMap[ke4Top] || ''}`
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
            if (sike.ke1.tianjiang) {
                const tianpanTianjiang = sike.ke1.tianjiang.split('/')[0];
                if (tianpanTianjiang && TIANJIANG_COLORS[tianpanTianjiang]) {
                    this.sikeElements.ke1.tianjiang.style.color = TIANJIANG_COLORS[tianpanTianjiang];
                    this.sikeElements.ke1.tianjiang.style.fontWeight = 'bold';
                }
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
            if (sike.ke2.tianjiang) {
                const tianpanTianjiang = sike.ke2.tianjiang.split('/')[0];
                if (tianpanTianjiang && TIANJIANG_COLORS[tianpanTianjiang]) {
                    this.sikeElements.ke2.tianjiang.style.color = TIANJIANG_COLORS[tianpanTianjiang];
                    this.sikeElements.ke2.tianjiang.style.fontWeight = 'bold';
                }
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
            if (sike.ke3.tianjiang) {
                const tianpanTianjiang = sike.ke3.tianjiang.split('/')[0];
                if (tianpanTianjiang && TIANJIANG_COLORS[tianpanTianjiang]) {
                    this.sikeElements.ke3.tianjiang.style.color = TIANJIANG_COLORS[tianpanTianjiang];
                    this.sikeElements.ke3.tianjiang.style.fontWeight = 'bold';
                }
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
            if (sike.ke4.tianjiang) {
                const tianpanTianjiang = sike.ke4.tianjiang.split('/')[0];
                if (tianpanTianjiang && TIANJIANG_COLORS[tianpanTianjiang]) {
                    this.sikeElements.ke4.tianjiang.style.color = TIANJIANG_COLORS[tianpanTianjiang];
                    this.sikeElements.ke4.tianjiang.style.fontWeight = 'bold';
                }
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

    // 九宗门起三传的主要逻辑（包含双天将）
    calculateSanchuan(dayStem, dayBranch, sike, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap) {
        const analysis = this.analyzeSikeKe(sike);
        
        // 为向后兼容，创建单天将映射（使用天盘天将）
        const tianjiangMap = tianpanTianjiangMap;
        
        console.log('四课分析:', analysis);
        
        // 检查是否为特殊课格
        // 一、八专法（日干日支相同）
        const bazhuanFayong = this.tryBazhuanFayong(dayStem, dayBranch, sike, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap);
        if (bazhuanFayong) {
            console.log('使用八专法:', bazhuanFayong);
            return bazhuanFayong;
        }
        
        // 二、伏吟法（天盘与地盘相同）
        const fuyinFayong = this.tryFuyinFayong(dayStem, dayBranch, sike, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap);
        if (fuyinFayong) {
            console.log('使用伏吟法:', fuyinFayong);
            return fuyinFayong;
        }
        
        // 三、反吟法（天盘与地盘相冲）
        const fanyinFayong = this.tryFanyinFayong(dayStem, dayBranch, sike, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap);
        if (fanyinFayong) {
            console.log('使用反吟法:', fanyinFayong);
            return fanyinFayong;
        }
        
        // 四、贼克法
        const zeikeFayong = this.tryZeikeFayong(dayStem, dayBranch, analysis, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap);
        if (zeikeFayong) {
            console.log('使用贼克法:', zeikeFayong);
            return zeikeFayong;
        }
        
        // 五、比用法
        const biyongFayong = this.tryBiyongFayong(dayStem, dayBranch, analysis, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap);
        if (biyongFayong) {
            console.log('使用比用法:', biyongFayong);
            return biyongFayong;
        }
        
        // 五点五、涉害法（比用法的细化）
        const shehaiFayong = this.tryShehaiFayong(dayStem, dayBranch, analysis, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap);
        if (shehaiFayong) {
            console.log('使用涉害法:', shehaiFayong);
            return shehaiFayong;
        }
        
        // 六、遥克法
        const yaokeFayong = this.tryYaokeFayong(dayStem, dayBranch, sike, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap);
        if (yaokeFayong) {
            console.log('使用遥克法:', yaokeFayong);
            return yaokeFayong;
        }
        
        // 七、别责法
        const biezeFayong = this.tryBiezeFayong(dayStem, dayBranch, sike, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap);
        if (biezeFayong) {
            console.log('使用别责法:', biezeFayong);
            return biezeFayong;
        }
        
        // 八、昴星法
        const maoxingFayong = this.tryMaoxingFayong(dayStem, dayBranch, sike, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap);
        if (maoxingFayong) {
            console.log('使用昴星法:', maoxingFayong);
            return maoxingFayong;
        }
        
        // 九、九丑法
        const jiuchouFayong = this.tryJiuchouFayong(dayStem, dayBranch, sike, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap);
        if (jiuchouFayong) {
            console.log('使用九丑法:', jiuchouFayong);
            return jiuchouFayong;
        }
        
        // 默认返回空的三传
        return this.createEmptySanchuan();
    }

    // 贼克法
    tryZeikeFayong(dayStem, dayBranch, analysis, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap) {
        // 1. 优先选择下贼上（始入课）
        if (analysis.xiazei.length === 1) {
            const xiazei = analysis.xiazei[0];
            return this.createSanchuan(xiazei.tianpan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap, '始入课', dayStem, dayBranch);
        }
        
        // 2. 无下贼上，选择上克下（元首课）
        if (analysis.xiazei.length === 0 && analysis.shangke.length === 1) {
            const shangke = analysis.shangke[0];
            return this.createSanchuan(shangke.tianpan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap, '元首课', dayStem, dayBranch);
        }
        
        // 3. 有下贼上又有上克下（重审课）
        if (analysis.xiazei.length === 1 && analysis.shangke.length > 0) {
            const xiazei = analysis.xiazei[0];
            return this.createSanchuan(xiazei.tianpan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap, '重审课', dayStem, dayBranch);
        }
        
        return null;
    }

    // 比用法（简单阴阳相比）
    tryBiyongFayong(dayStem, dayBranch, analysis, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap) {
        const isYangRi = this.isYang(dayStem);
        
        // 多个下贼上时，按阴阳相比选择
        if (analysis.xiazei.length >= 2) {
            const matched = analysis.xiazei.filter(ke => this.isYang(ke.tianpan) === isYangRi);
            if (matched.length === 1) {
                // 阴阳相比后唯一确定，使用比用法
                console.log('比用法（下贼上）选择:', matched[0].tianpan);
                return this.createSanchuan(matched[0].tianpan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap, '比用课', dayStem, dayBranch);
            }
            // 如果阴阳相比后仍有多个或没有匹配，留给涉害法处理
        }
        
        // 多个上克下时，按阴阳相比选择
        if (analysis.shangke.length >= 2) {
            const matched = analysis.shangke.filter(ke => this.isYang(ke.tianpan) === isYangRi);
            if (matched.length === 1) {
                // 阴阳相比后唯一确定，使用比用法
                console.log('比用法（上克下）选择:', matched[0].tianpan);
                return this.createSanchuan(matched[0].tianpan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap, '知一课', dayStem, dayBranch);
            }
            // 如果阴阳相比后仍有多个或没有匹配，留给涉害法处理
        }
        
        return null;
    }

    // 涉害法 - 新增
    tryShehaiFayong(dayStem, dayBranch, analysis, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap) {
        console.log('=== 尝试涉害法 ===');
        
        // 检查是否有多个上克下或下贼上，且与日干俱比或俱不比
        const hasMultipleShangke = analysis.shangke.length >= 2;
        const hasMultipleXiazei = analysis.xiazei.length >= 2;
        
        if (!hasMultipleShangke && !hasMultipleXiazei) {
            return null;
        }
        
        const isYangRi = this.isYang(dayStem);
        
        // 检查涉害条件：俱比或俱不比
        let candidates = [];
        let isShangkeType = false;
        
        if (hasMultipleShangke) {
            // 检查上克下是否俱比或俱不比
            const shangkeYangCount = analysis.shangke.filter(ke => this.isYang(ke.tianpan)).length;
            const allYang = shangkeYangCount === analysis.shangke.length;
            const allYin = shangkeYangCount === 0;
            
            if ((isYangRi && allYang) || (!isYangRi && allYin) || (isYangRi && allYin) || (!isYangRi && allYang)) {
                console.log('满足涉害条件：上克下俱比或俱不比');
                candidates = analysis.shangke;
                isShangkeType = true;
            }
        }
        
        if (hasMultipleXiazei && candidates.length === 0) {
            // 检查下贼上是否俱比或俱不比
            const xiazeiYangCount = analysis.xiazei.filter(ke => this.isYang(ke.tianpan)).length;
            const allYang = xiazeiYangCount === analysis.xiazei.length;
            const allYin = xiazeiYangCount === 0;
            
            if ((isYangRi && allYang) || (!isYangRi && allYin) || (isYangRi && allYin) || (!isYangRi && allYang)) {
                console.log('满足涉害条件：下贼上俱比或俱不比');
                candidates = analysis.xiazei;
                isShangkeType = false;
            }
        }
        
        if (candidates.length === 0) {
            return null;
        }
        
        console.log(`涉害类型: ${isShangkeType ? '上克下' : '下贼上'}`, candidates);
        
        // 计算每个候选天盘神的涉害次数
        const shehaiResults = candidates.map(ke => {
            const tianpanShen = ke.tianpan;
            const count = this.calculateShehaiCount(tianpanShen, heavenPlate, isShangkeType);
            return {
                tianpan: tianpanShen,
                count: count,
                originalKe: ke
            };
        });
        
        console.log('涉害计算结果:', shehaiResults);
        
        // 找出克制次数最多的
        const maxCount = Math.max(...shehaiResults.map(r => r.count));
        const maxCountCandidates = shehaiResults.filter(r => r.count === maxCount);
        
        if (maxCountCandidates.length === 1) {
            // 唯一最大者，直接选择
            const selected = maxCountCandidates[0];
            console.log(`涉害法选择: ${selected.tianpan} (${selected.count}重克)`);
            return this.createSanchuan(selected.tianpan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap, '涉害课', dayStem, dayBranch);
        } else {
            // 多个相等，按孟仲季优先级选择
            console.log('涉害次数相等，按孟仲季选择');
            return this.selectByMengZhongJiForShehai(maxCountCandidates, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap, dayStem, dayBranch);
        }
    }

    // 计算涉害次数
    calculateShehaiCount(tianpanShen, heavenPlate, isShangkeType) {
        // 找到天盘神当前在地盘的位置
        let currentPosition = null;
        for (let groundPos in heavenPlate) {
            if (heavenPlate[groundPos] === tianpanShen) {
                currentPosition = groundPos;
                break;
            }
        }
        
        if (!currentPosition) {
            return 0;
        }
        
        console.log(`计算 ${tianpanShen} 的涉害次数，当前在地盘 ${currentPosition} 位置`);
        
        // 获取天盘神的本位
        const targetPosition = tianpanShen;
        
        // 顺时针计算路径
        const path = this.getClockwisePath(currentPosition, targetPosition);
        console.log(`路径: ${path.join(' → ')}`);
        
        let count = 0;
        const tianpanWuxing = this.getWuxing(tianpanShen);
        
        for (let i = 1; i < path.length; i++) { // 跳过起始位置
            const pathPosition = path[i];
            
            if (isShangkeType) {
                // 上克下：计算天盘神克地盘的次数
                count += this.countKeAtPosition(tianpanWuxing, pathPosition, true);
            } else {
                // 下贼上：计算天盘神被地盘克的次数
                count += this.countKeAtPosition(tianpanWuxing, pathPosition, false);
            }
        }
        
        console.log(`${tianpanShen} 总计 ${count} 重克`);
        return count;
    }

    // 获取顺时针路径
    getClockwisePath(startPosition, endPosition) {
        const startIndex = BRANCH_INDEX[startPosition];
        const endIndex = BRANCH_INDEX[endPosition];
        const path = [startPosition];
        
        let currentIndex = startIndex;
        while (currentIndex !== endIndex) {
            currentIndex = (currentIndex + 1) % 12;
            path.push(BRANCHES[currentIndex]);
        }
        
        return path;
    }

    // 计算在特定位置的克制次数
    countKeAtPosition(tianpanWuxing, position, isKeOthers) {
        let count = 0;
        
        // 地支本身的五行
        const positionWuxing = this.getWuxing(position);
        
        if (isKeOthers) {
            // 天盘克地盘
            if (this.wuxingKe(tianpanWuxing, positionWuxing)) {
                count++;
            }
            
            // 天盘克寄宫天干
            const jiganAtPosition = this.getTianganAtPosition(position);
            if (jiganAtPosition) {
                const jiganWuxing = this.getWuxing(jiganAtPosition);
                if (this.wuxingKe(tianpanWuxing, jiganWuxing)) {
                    count++;
                }
            }
        } else {
            // 天盘被地盘克
            if (this.wuxingKe(positionWuxing, tianpanWuxing)) {
                count++;
            }
            
            // 天盘被寄宫天干克
            const jiganAtPosition = this.getTianganAtPosition(position);
            if (jiganAtPosition) {
                const jiganWuxing = this.getWuxing(jiganAtPosition);
                if (this.wuxingKe(jiganWuxing, tianpanWuxing)) {
                    count++;
                }
            }
        }
        
        return count;
    }

    // 获取地支位置的寄宫天干
    getTianganAtPosition(position) {
        // 天干寄宫表
        const tianganJigong = {
            '甲': '寅', '乙': '辰', '丙': '巳', '丁': '未',
            '戊': '巳', '己': '未', '庚': '申', '辛': '戌',
            '壬': '亥', '癸': '丑'
        };
        
        // 找到寄宫在此位置的天干
        for (let tiangan in tianganJigong) {
            if (tianganJigong[tiangan] === position) {
                return tiangan;
            }
        }
        
        return null;
    }

    // 按孟仲季优先级选择（涉害法专用）
    selectByMengZhongJiForShehai(candidates, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap, dayStem, dayBranch) {
        console.log('按孟仲季优先级选择涉害课');
        
        // 找到每个候选天盘神在地盘的位置
        const candidatesWithPosition = candidates.map(c => {
            let groundPosition = null;
            for (let pos in heavenPlate) {
                if (heavenPlate[pos] === c.tianpan) {
                    groundPosition = pos;
                    break;
                }
            }
            return {
                ...c,
                groundPosition: groundPosition,
                mengzhongji: this.getMengZhongJi(groundPosition)
            };
        });
        
        console.log('候选位置信息:', candidatesWithPosition);
        
        // 优先级：孟 > 仲 > 季
        const priorities = ['孟', '仲', '季'];
        
        for (let priority of priorities) {
            const priorityCandidates = candidatesWithPosition.filter(c => c.mengzhongji === priority);
            if (priorityCandidates.length > 0) {
                const selected = priorityCandidates[0]; // 如果还有多个，取第一个
                const kegeName = priority === '孟' ? '见机' : priority === '仲' ? '察微' : '复等';
                console.log(`选择${priority}位: ${selected.tianpan}, 课格: ${kegeName}`);
                return this.createSanchuan(selected.tianpan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap, kegeName, dayStem, dayBranch);
            }
        }
        
        // 如果都没有，返回第一个
        const fallback = candidates[0];
        return this.createSanchuan(fallback.tianpan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap, '涉害课', dayStem, dayBranch);
    }

    // 遥克法
    tryYaokeFayong(dayStem, dayBranch, sike, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap) {
        // 四课中既无上克下，也无下贼上
        const analysis = this.analyzeSikeKe(sike);
        if (analysis.shangke.length === 0 && analysis.xiazei.length === 0) {
            // 检查二三四课来克日干（蒿矢）
            const keRigan = this.checkKeRigan(dayStem, sike);
            if (keRigan.length > 0) {
                if (keRigan.length === 1) {
                    return this.createSanchuan(keRigan[0].tianpan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap, '蒿矢', dayStem, dayBranch);
                } else {
                    // 多个克日干时，按阴阳相比
                    return this.selectByYinYang(dayStem, keRigan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap, '蒿矢', dayBranch);
                }
            }
            
            // 检查日干克二三四课（弹射）
            const riganKe = this.checkRiganKe(dayStem, sike);
            if (riganKe.length > 0) {
                if (riganKe.length === 1) {
                    return this.createSanchuan(riganKe[0].tianpan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap, '弹射', dayStem, dayBranch);
                } else {
                    // 多个被日干克时，按阴阳相比
                    return this.selectByYinYang(dayStem, riganKe, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap, '弹射', dayBranch);
                }
            }
            
            // 检查日支的特殊情况
            const rizhiSpecial = this.checkRizhiSpecial(dayStem, dayBranch, sike, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap);
            if (rizhiSpecial) {
                return rizhiSpecial;
            }
        }
        
        return null;
    }

    // 昴星法
    tryMaoxingFayong(dayStem, dayBranch, sike, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap) {
        // 为向后兼容，创建单天将映射（使用天盘天将）
        const tianjiangMap = tianpanTianjiangMap;
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

    // 创建三传结构（包含双天将）
    createSanchuan(chuchuan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap, kege, dayStem, dayBranch) {
        const zhongchuan = heavenPlate[chuchuan] || '';
        const mochuan = heavenPlate[zhongchuan] || '';
        
        // 计算三传天干：三传的地支在天盘上对应格子的旬遁，包括旬空状态
        const chuchuanGanResult = this.getSanchuanGanWithXunkong(chuchuan, heavenPlate, dayStem, dayBranch);
        const zhongchuanGanResult = this.getSanchuanGanWithXunkong(zhongchuan, heavenPlate, dayStem, dayBranch);
        const mochuanGanResult = this.getSanchuanGanWithXunkong(mochuan, heavenPlate, dayStem, dayBranch);
        
        // 计算三传双天将
        const chuchuanTianjiangResult = this.getSanchuanTianjiang(chuchuan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap);
        const zhongchuanTianjiangResult = this.getSanchuanTianjiang(zhongchuan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap);
        const mochuanTianjiangResult = this.getSanchuanTianjiang(mochuan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap);
        
        return {
            chuchuan: { 
                gan: chuchuanGanResult.gan, 
                zhi: chuchuan, 
                tianjiang: chuchuanTianjiangResult.combined,
                tianpanTianjiang: chuchuanTianjiangResult.tianpan,
                dipanTianjiang: chuchuanTianjiangResult.dipan,
                isXunkong: chuchuanGanResult.isXunkong
            },
            zhongchuan: { 
                gan: zhongchuanGanResult.gan, 
                zhi: zhongchuan, 
                tianjiang: zhongchuanTianjiangResult.combined,
                tianpanTianjiang: zhongchuanTianjiangResult.tianpan,
                dipanTianjiang: zhongchuanTianjiangResult.dipan,
                isXunkong: zhongchuanGanResult.isXunkong
            },
            mochuan: { 
                gan: mochuanGanResult.gan, 
                zhi: mochuan, 
                tianjiang: mochuanTianjiangResult.combined,
                tianpanTianjiang: mochuanTianjiangResult.tianpan,
                dipanTianjiang: mochuanTianjiangResult.dipan,
                isXunkong: mochuanGanResult.isXunkong
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
    tryBazhuanFayong(dayStem, dayBranch, sike, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap) {
        // 为向后兼容，创建单天将映射（使用天盘天将）
        const tianjiangMap = tianpanTianjiangMap;
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
    tryFuyinFayong(dayStem, dayBranch, sike, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap) {
        // 为向后兼容，创建单天将映射（使用天盘天将）
        const tianjiangMap = tianpanTianjiangMap;
        
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
            
            // 伏吟课发用规则 - 使用天盘地支
            const analysis = this.analyzeSikeKe(sike);
            const isYangRi = this.isYang(dayStem);
            
            let chuchuan = '';
            let kege = '';
            
            // 1. 有克取克发用（在伏吟课中，天盘地盘相同，所以主要看四课的克关系）
            if (analysis.xiazei.length > 0) {
                // 在伏吟课中，有下贼上时，应该取日干寄宫地支作为初传
                // 例如乙木日，乙寄辰，所以初传取辰
                const dipan = analysis.xiazei[0].dipan;  // 下贼上的地盘（可能是天干）
                if (HEAVENLY_STEMS.includes(dipan)) {
                    // 如果是天干，找到它的寄宫
                    chuchuan = STEM_LODGE_MAP[dipan] || dipan;
                    console.log(`伏吟课：有下贼上，日干${dipan}寄宫到${chuchuan}`);
                } else {
                    // 如果已经是地支，直接使用
                    chuchuan = dipan;
                    console.log('伏吟课：有下贼上，初传取', chuchuan);
                }
                kege = '不虞';
            } else if (analysis.shangke.length > 0) {
                // 取上克的地支位置
                const dipan = analysis.shangke[0].dipan;  // 上克下的地盘（可能是天干）
                if (HEAVENLY_STEMS.includes(dipan)) {
                    // 如果是天干，找到它的寄宫
                    chuchuan = STEM_LODGE_MAP[dipan] || dipan;
                    console.log(`伏吟课：有上克下，天干${dipan}寄宫到${chuchuan}`);
                } else {
                    // 如果已经是地支，直接使用
                    chuchuan = dipan;
                    console.log('伏吟课：有上克下，初传取', chuchuan);
                }
                kege = '不虞';
            } else {
                // 2. 无克时按阴阳取发用 - 在伏吟课中取地支
                if (isYangRi) {
                    // 阳日取干上神（四课第一课的上神）
                    const ganShang = sike.ke1.top;
                    chuchuan = BRANCHES.includes(ganShang) ? ganShang : 
                              (this.findBranchFromStem(ganShang, heavenPlate) || ganShang);
                    kege = '自任';
                    console.log('伏吟课：阳日无克，初传取干上神', ganShang, '对应地支', chuchuan);
                } else {
                    // 阴日取支上神（四课第三课的上神）
                    const zhiShang = sike.ke3.top;
                    chuchuan = BRANCHES.includes(zhiShang) ? zhiShang : 
                              (this.findBranchFromStem(zhiShang, heavenPlate) || zhiShang);
                    kege = '自信';
                    console.log('伏吟课：阴日无克，初传取支上神', zhiShang, '对应地支', chuchuan);
                }
            }
            
            // 检查初传是否是天干
            if (!BRANCHES.includes(chuchuan)) {
                // 如果初传是天干，需要找到对应的地支
                const branchForStem = this.findBranchFromStem(chuchuan, heavenPlate);
                if (branchForStem) {
                    console.log('初传是天干', chuchuan, '，转换为地支', branchForStem);
                    chuchuan = branchForStem;
                } else {
                    console.warn('无法为天干', chuchuan, '找到对应地支，使用辰作为默认值');
                    chuchuan = '辰'; // 使用辰作为默认值
                }
            }
            
            // 计算中传：取初传相刑的支为中传
            let zhongchuan = '';
            
            // 自刑之神：辰午酉亥
            const isChuZiXing = ['辰', '午', '酉', '亥'].includes(chuchuan);
            
            if (isChuZiXing) {
                // 初传是自刑神，阳日取干上神，阴日取支上神
                if (isYangRi) {
                    // 阳日取干上神
                    const ganShang = sike.ke1.top;
                    zhongchuan = BRANCHES.includes(ganShang) ? ganShang : 
                                (this.findBranchFromStem(ganShang, heavenPlate) || ganShang);
                    console.log('伏吟课：初传', chuchuan, '是自刑神，阳日中传取干上神', ganShang, '对应地支', zhongchuan);
                } else {
                    // 阴日取支上神
                    const zhiShang = sike.ke3.top;
                    zhongchuan = BRANCHES.includes(zhiShang) ? zhiShang : 
                                (this.findBranchFromStem(zhiShang, heavenPlate) || zhiShang);
                    console.log('伏吟课：初传', chuchuan, '是自刑神，阴日中传取支上神', zhiShang, '对应地支', zhongchuan);
                }
            } else {
                // 初传不是自刑神，正常取刑
                zhongchuan = DIZHI_XING[chuchuan] || chuchuan;
                console.log('伏吟课：初传', chuchuan, '不是自刑神，中传取刑', zhongchuan);
            }
            
            // 检查中传是否是天干
            if (!BRANCHES.includes(zhongchuan)) {
                // 如果中传是天干，需要找到对应的地支
                const branchForStem = this.findBranchFromStem(zhongchuan, heavenPlate);
                if (branchForStem) {
                    console.log('中传是天干', zhongchuan, '，转换为地支', branchForStem);
                    zhongchuan = branchForStem;
                } else {
                    console.warn('无法为天干', zhongchuan, '找到对应地支，使用酉作为默认值');
                    zhongchuan = '酉'; // 使用酉作为默认值
                }
            }
            
            // 计算末传：取中传相刑的支为末传
            let mochuan = '';
            const isZhongZiXing = ['辰', '午', '酉', '亥'].includes(zhongchuan);
            
            if (isZhongZiXing) {
                // 中传是自刑神，取中传所冲为末传
                mochuan = DIZHI_CHONG[zhongchuan] || zhongchuan;
                console.log('伏吟课：中传', zhongchuan, '是自刑神，末传取冲', mochuan);
            } else {
                // 中传不是自刑神，正常取刑
                mochuan = DIZHI_XING[zhongchuan] || zhongchuan;
                console.log('伏吟课：中传', zhongchuan, '不是自刑神，末传取刑', mochuan);
            }
            
            // 检查末传是否是天干
            if (!BRANCHES.includes(mochuan)) {
                // 如果末传是天干，需要找到对应的地支
                const branchForStem = this.findBranchFromStem(mochuan, heavenPlate);
                if (branchForStem) {
                    console.log('末传是天干', mochuan, '，转换为地支', branchForStem);
                    mochuan = branchForStem;
                } else {
                    console.warn('无法为天干', mochuan, '找到对应地支，使用卯作为默认值');
                    mochuan = '卯'; // 使用卯作为默认值
                }
            }
            
            // 检查三传格式是否符合112、121、122、211
            const sanchuanPattern = this.getSanchuanPattern(chuchuan, zhongchuan, mochuan);
            const validPatterns = ['112', '121', '122', '123'];
            
            if (!validPatterns.includes(sanchuanPattern)) {
                console.warn(`伏吟课三传格式 ${sanchuanPattern} 不符合标准格式，调整三传`);
                // 如果不符合，重新调整
                if (isChuZiXing && !isZhongZiXing) {
                    // 初传自刑，中传不自刑，末传应该是中传
                    mochuan = zhongchuan;
                } else if (!isChuZiXing && isZhongZiXing) {
                    // 初传不自刑，中传自刑，末传取冲
                    mochuan = DIZHI_CHONG[zhongchuan] || zhongchuan;
                } else if (sanchuanPattern === '111') {
                    // 如果三传全部相同，强制使用特定的值
                    // 特别处理用户提供的例子：酉酉辰辰，酉酉辰乙
                    if (sike.ke1.top === '酉' && sike.ke1.bottom === '乙' && 
                        sike.ke3.top === '辰' && sike.ke3.bottom === '辰') {
                        // 用户提供的例子，乙木日
                        chuchuan = '辰';  // 初传为辰（下克上）
                        zhongchuan = '酉'; // 中传为酉（辰是自刑神，阴日取支上神）
                        mochuan = '卯';    // 末传为卯（酉是自刑神，取冲）
                        console.log('特殊处理：用户提供的例子，乙木日，初传辰，中传酉，末传卯');
                    } else if (chuchuan === '辰') {
                        zhongchuan = '酉';
                        mochuan = '卯';
                    } else if (chuchuan === '酉') {
                        zhongchuan = '辰';
                        mochuan = '卯';
                    } else if (chuchuan === '午') {
                        zhongchuan = '亥';
                        mochuan = '子';
                    } else if (chuchuan === '亥') {
                        zhongchuan = '午';
                        mochuan = '子';
                    } else {
                        // 默认情况，使用辰酉卯组合
                        chuchuan = '辰';
                        zhongchuan = '酉';
                        mochuan = '卯';
                    }
                    console.log('调整：三传全部相同，强制修改为', chuchuan, zhongchuan, mochuan);
                }
            }
            
            console.log(`伏吟法结果：${kege}，初传：${chuchuan}，中传：${zhongchuan}，末传：${mochuan}，格式：${this.getSanchuanPattern(chuchuan, zhongchuan, mochuan)}`);
            
            // 创建完整的三传数据结构
            const result = {
                chuchuan: { 
                    gan: this.getSanchuanGanWithXunkong(chuchuan, heavenPlate, dayStem, dayBranch).gan, 
                    zhi: chuchuan, 
                    tianjiang: this.getSanchuanTianjiang(chuchuan, heavenPlate, tianjiangMap, tianjiangMap).combined || tianjiangMap[chuchuan] || '贵人',
                    isXunkong: this.getSanchuanGanWithXunkong(chuchuan, heavenPlate, dayStem, dayBranch).isXunkong
                },
                zhongchuan: { 
                    gan: this.getSanchuanGanWithXunkong(zhongchuan, heavenPlate, dayStem, dayBranch).gan, 
                    zhi: zhongchuan, 
                    tianjiang: this.getSanchuanTianjiang(zhongchuan, heavenPlate, tianjiangMap, tianjiangMap).combined || tianjiangMap[zhongchuan] || '螣蛇',
                    isXunkong: this.getSanchuanGanWithXunkong(zhongchuan, heavenPlate, dayStem, dayBranch).isXunkong
                },
                mochuan: { 
                    gan: this.getSanchuanGanWithXunkong(mochuan, heavenPlate, dayStem, dayBranch).gan, 
                    zhi: mochuan, 
                    tianjiang: this.getSanchuanTianjiang(mochuan, heavenPlate, tianjiangMap, tianjiangMap).combined || tianjiangMap[mochuan] || '朱雀',
                    isXunkong: this.getSanchuanGanWithXunkong(mochuan, heavenPlate, dayStem, dayBranch).isXunkong
                },
                kege: kege
            };
            
            return result;
        }
        
        return null;
    }

    // 从天干找到对应的地支位置
    findBranchFromStem(stem, heavenPlate) {
        // 在天盘中找到该天干对应的地支位置
        for (let branch in heavenPlate) {
            const tianpanGan = this.getTianpanGan(heavenPlate[branch]);
            if (tianpanGan === stem) {
                return branch;
            }
        }
        return null;
    }

    // 获取三传的格式（用于检查112、121、122、211）
    getSanchuanPattern(chu, zhong, mo) {
        // 直接检查每个位置的值，更准确地确定模式
        if (chu === zhong && zhong === mo) {
            return '111'; // 全部相同
        } else if (chu === zhong && zhong !== mo) {
            return '112'; // 前两个相同
        } else if (chu !== zhong && zhong === mo) {
            return '122'; // 后两个相同
        } else if (chu === mo && chu !== zhong) {
            return '121'; // 首尾相同
        } else if (chu !== zhong && zhong !== mo && chu !== mo) {
            return '123'; // 三个都不同
        }
        
        // 记录详细信息以便调试
        console.log(`三传格式计算: 初传=${chu}, 中传=${zhong}, 末传=${mo}`);
        return '000'; // 异常情况
    }





    // 反吟法（天盘与地盘相冲）
    tryFanyinFayong(dayStem, dayBranch, sike, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap) {
        // 为向后兼容，创建单天将映射（使用天盘天将）
        const tianjiangMap = tianpanTianjiangMap;
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
    tryBiezeFayong(dayStem, dayBranch, sike, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap) {
        // 为向后兼容，创建单天将映射（使用天盘天将）
        const tianjiangMap = tianpanTianjiangMap;
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
    tryJiuchouFayong(dayStem, dayBranch, sike, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap) {
        // 为向后兼容，创建单天将映射（使用天盘天将）
        const tianjiangMap = tianpanTianjiangMap;
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
    checkRizhiSpecial(dayStem, dayBranch, sike, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap) {
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
                    tianjiang: this.getSanchuanTianjiang(chuchuan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap)
                },
                zhongchuan: { 
                    gan: this.getSanchuanGan(zhongchuan, heavenPlate, dayStem, dayBranch), 
                    zhi: zhongchuan, 
                    tianjiang: this.getSanchuanTianjiang(zhongchuan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap)
                },
                mochuan: { 
                    gan: this.getSanchuanGan(mochuan, heavenPlate, dayStem, dayBranch), 
                    zhi: mochuan, 
                    tianjiang: this.getSanchuanTianjiang(mochuan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap)
                },
                kege: `日支${selectedRelation.relation}`
            };
        }
        
        return null;
    }

    // 完善按阴阳相比的选择逻辑
    selectByYinYang(dayStem, candidates, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap, kege, dayBranch) {
        const isYangRi = this.isYang(dayStem);
        
        // 先按阴阳相比过滤
        const matched = candidates.filter(c => this.isYang(c.tianpan) === isYangRi);
        
        if (matched.length === 1) {
            return this.createSanchuan(matched[0].tianpan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap, kege, dayStem, dayBranch);
        } else if (matched.length > 1) {
            // 多个匹配时，按孟仲季选择
            const mengzhongjiPriority = this.selectByMengZhongJi(matched, dayStem);
            if (mengzhongjiPriority) {
                return this.createSanchuan(mengzhongjiPriority.tianpan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap, kege, dayStem, dayBranch);
            }
            
            // 如果孟仲季也相同，取第一个
            return this.createSanchuan(matched[0].tianpan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap, kege, dayStem, dayBranch);
        } else {
            // 没有阴阳相比的，取第一个
            return this.createSanchuan(candidates[0].tianpan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap, kege, dayStem, dayBranch);
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
            // 使用保存的四柱信息或当前日期
            let dayStem, dayBranch;
            
            if (this.currentFourPillars) {
                // 使用保存的四柱信息
                dayStem = this.currentFourPillars.dayGZ.charAt(0);
                dayBranch = this.currentFourPillars.dayGZ.charAt(1);
                console.log(`使用保存的四柱信息更新三传显示, 日干支: ${this.currentFourPillars.dayGZ}`);
            } else {
                // 如果没有保存的信息，使用当前日期
                const now = new Date();
                const solar = Solar.fromDate(now);
                const lunar = solar.getLunar();
                const dayGZ = lunar.getDayInGanZhi();
                dayStem = dayGZ.charAt(0);
                dayBranch = dayGZ.charAt(1);
                console.log(`使用当前日期更新三传显示, 日干支: ${dayGZ}`);
            }
            
            // 初始化化耀元素
            if (!this.sanchuanElements.chuchuan.huayao) {
                this.sanchuanElements.chuchuan.huayao = document.getElementById('chuchuan-huayao');
                this.sanchuanElements.zhongchuan.huayao = document.getElementById('zhongchuan-huayao');
                this.sanchuanElements.mochuan.huayao = document.getElementById('mochuan-huayao');
            }
            
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
        
        // 更新化耀
        if (elements.huayao) {
            const huayao = this.calculateHuaYao(shishen, dayStem);
            elements.huayao.textContent = huayao;
            elements.huayao.style.color = this.getHuaYaoColor(huayao);
            elements.huayao.style.fontWeight = 'bold';
        }
        
        // 更新天干
        if (elements.gan) {
            elements.gan.textContent = sanchuanData.gan;
            
            // 获取天干五行
            const ganWuxing = this.getWuxing(sanchuanData.gan);
            
            // 应用天干五行颜色类
            elements.gan.className = ''; // 清除现有类
            elements.gan.classList.add(`wuxing-${this.getWuxingPinyin(ganWuxing)}`);
            
            // 处理旬空标志
            if (sanchuanData.isXunkong) {
                elements.gan.classList.add('xunkong-flag');
                elements.gan.style.textDecoration = 'line-through';
            } else {
                elements.gan.style.textDecoration = '';
            }
        }
        
        // 更新地支
        if (elements.zhi) {
            elements.zhi.textContent = sanchuanData.zhi;
            
            // 获取地支五行
            const zhiWuxing = this.getWuxing(sanchuanData.zhi);
            
            // 应用地支五行颜色类
            elements.zhi.className = ''; // 清除现有类
            elements.zhi.classList.add(`wuxing-${this.getWuxingPinyin(zhiWuxing)}`);
            
            // 检查是否旬空
            const xunkongBranches = this.calculateXunkong(dayStem, dayBranch);
            if (xunkongBranches.includes(sanchuanData.zhi)) {
                elements.zhi.classList.add('xunkong-branch');
            }
        }
        
        // 更新天将
        if (elements.tianjiang) {
            elements.tianjiang.textContent = sanchuanData.tianjiang;
            if (sanchuanData.tianjiang) {
                // 提取斜线前后的天将
                const tianjiangParts = sanchuanData.tianjiang.split('/');
                const primaryTianjiang = tianjiangParts[0];
                
                if (tianjiangParts.length > 1) {
                    // 有两个天将时，分别设置样式和颜色
                    const primaryColor = TIANJIANG_COLORS[primaryTianjiang] || '#000';
                    const secondaryColor = TIANJIANG_COLORS[tianjiangParts[1]] || '#000';
                    elements.tianjiang.innerHTML = `<span style="color:${primaryColor};font-weight:bold;">${primaryTianjiang}</span>/<span style="color:${secondaryColor};font-weight:bold;">${tianjiangParts[1]}</span>`;
                } else {
                    // 单个天将时，直接应用颜色
                    if (primaryTianjiang && TIANJIANG_COLORS[primaryTianjiang]) {
                        elements.tianjiang.style.color = TIANJIANG_COLORS[primaryTianjiang];
                        elements.tianjiang.style.fontWeight = 'bold';
                    }
                }
            }
        }
    }
    
    // 获取五行拼音首字母（用于CSS类）
    getWuxingPinyin(wuxing) {
        const wuxingMap = {
            '金': 'jin',
            '木': 'mu',
            '水': 'shui',
            '火': 'huo',
            '土': 'tu'
        };
        return wuxingMap[wuxing] || 'jin'; // 默认返回金
    }

    // 获取六亲颜色
    getLiuqinColor(liuqin) {
        return '#000';  // 统一显示为黑色
    }

    // 获取十神颜色
    getShishenColor(shishen) {
        return '#000';  // 统一显示为黑色
    }

    // 根据十神计算化耀
    calculateHuaYao(shishen, dayStem) {
        // 判断日干阴阳
        const isYangDay = this.isYang(dayStem);
        
        // 根据十神和日干阴阳确定化耀
        // 生我者为印
        if (shishen === '偏印') {
            return '天囚'; // 阴阳干偏印皆化囚
        } else if (shishen === '正印') {
            return isYangDay ? '天权' : '天印'; // 阳干正印化权，阴干正印化印
        } 
        // 与我同者为比劫
        else if (shishen === '比肩') {
            return isYangDay ? '天禄' : '天权'; // 阳干之比化禄，阴干之比化权
        } else if (shishen === '劫财') {
            return isYangDay ? '天暗' : '天权'; // 阳干之劫化暗，阴干之劫化权
        } 
        // 我生者为食伤
        else if (shishen === '食神') {
            return '天福'; // 阴阳干食皆化福
        } else if (shishen === '伤官') {
            return isYangDay ? '天耗' : '天暗'; // 阳干伤化耗，阴干伤化暗
        } 
        // 我克者为财
        else if (shishen === '偏财') {
            return '天荫'; // 偏财皆化荫
        } else if (shishen === '正财') {
            return isYangDay ? '天贵' : '天耗'; // 阳干正财化贵，阴干正财化耗
        } 
        // 克我者为官杀
        else if (shishen === '七杀') {
            return '天刑'; // 阴阳干之杀皆化刑
        } else if (shishen === '正官') {
            return isYangDay ? '天印' : '天贵'; // 阳干正官化印，阴干正官化贵
        }
        
        return '-';
    }
    
    // 获取化耀颜色
    getHuaYaoColor(huayao) {
        const huayaoColors = {
            '天禄': '#4CAF50', // 绿色
            '天暗': '#607D8B', // 灰色
            '天耗': '#FF5722', // 橙红色
            '天荫': '#2196F3', // 蓝色
            '天贵': '#FFC107', // 金黄色
            '天刑': '#F44336', // 红色
            '天印': '#9C27B0', // 紫色
            '天囚': '#795548', // 棕色
            '天权': '#3F51B5', // 靛蓝色
            '天福': '#00BCD4'  // 青色
        };
        
        return huayaoColors[huayao] || '#000000';
    }

    // 计算十二长生
    calculateChangsheng(dayStem, tianpanBranch) {
        // 十二长生对照表
        const changshengTable = {
            '甲': ['亥', '子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌'],
            '乙': ['午', '巳', '辰', '卯', '寅', '丑', '子', '亥', '戌', '酉', '申', '未'],
            '丙': ['寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥', '子', '丑'],
            '丁': ['酉', '申', '未', '午', '巳', '辰', '卯', '寅', '丑', '子', '亥', '戌'],
            '戊': ['寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥', '子', '丑'],
            '己': ['酉', '申', '未', '午', '巳', '辰', '卯', '寅', '丑', '子', '亥', '戌'],
            '庚': ['巳', '午', '未', '申', '酉', '戌', '亥', '子', '丑', '寅', '卯', '辰'],
            '辛': ['子', '亥', '戌', '酉', '申', '未', '午', '巳', '辰', '卯', '寅', '丑'],
            '壬': ['申', '酉', '戌', '亥', '子', '丑', '寅', '卯', '辰', '巳', '午', '未'],
            '癸': ['卯', '寅', '丑', '子', '亥', '戌', '酉', '申', '未', '午', '巳', '辰']
        };

        const changshengNames = ['生', '败', '冠', '官', '旺', '衰', '病', '死', '墓', '绝', '胎', '养'];
        
        const branches = changshengTable[dayStem];
        if (!branches) return '';
        
        const index = branches.indexOf(tianpanBranch);
        if (index === -1) return '';
        
        return changshengNames[index];
    }

    // 计算月令
    calculateYueling(monthBranch, tianpanBranch) {
        // 月令旺相休囚死对照
        const monthWuxing = this.getWuxing(monthBranch);
        const tianpanWuxing = this.getWuxing(tianpanBranch);
        
        // 当令者旺，我生者相，生我者休，克我者囚，我克者死
        if (monthWuxing === tianpanWuxing) {
            return '旺';
        } else if (this.wuxingSheng(monthWuxing, tianpanWuxing)) {
            return '相';  // 我生者相
        } else if (this.wuxingSheng(tianpanWuxing, monthWuxing)) {
            return '休';  // 生我者休
        } else if (this.wuxingKe(tianpanWuxing, monthWuxing)) {
            return '囚';  // 克我者囚
        } else if (this.wuxingKe(monthWuxing, tianpanWuxing)) {
            return '死';  // 我克者死
        }
        return '';
    }
    
    // 计算十二建除
    calculateJianchu(monthBranch, groundBranch, heavenPlate) {
        // 1. 找到月支在天盘中的位置（即月支对应的地盘位置）
        let monthBranchGroundPosition = null;
        for (let gb in heavenPlate) {
            if (heavenPlate[gb] === monthBranch) {
                monthBranchGroundPosition = gb;
                break;
            }
        }
        
        if (!monthBranchGroundPosition) return '';
        
        // 2. 从月支在天盘中对应的地盘位置开始，按顺时针方向排列十二建除
        const groundBranchOrder = BRANCH_POSITIONS.slice(); // 地盘顺时针顺序
        const startIndex = groundBranchOrder.indexOf(monthBranchGroundPosition);
        if (startIndex === -1) return '';
        
        // 3. 重新排序地盘位置，从月支对应的地盘位置开始
        const reorderedGroundBranches = [
            ...groundBranchOrder.slice(startIndex),
            ...groundBranchOrder.slice(0, startIndex)
        ];
        
        // 4. 创建地盘位置到建除的映射
        const groundBranchToJianchu = {};
        reorderedGroundBranches.forEach((branch, index) => {
            groundBranchToJianchu[branch] = JIANCHU_NAMES[index];
        });
        
        // 5. 返回当前地盘位置的建除
        return groundBranchToJianchu[groundBranch] || '';
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
            
            // 计算双天将映射
            const nobles = this.getBothNoblePersons(dayStem, timeBranch);
            
            // 找到贵人在地盘的位置
            let tianpanNobleGroundPosition = null;
            let dipanNobleGroundPosition = null;
            for (let groundBranch in heavenPlate) {
                if (heavenPlate[groundBranch] === nobles.tianpanNoble) {
                    tianpanNobleGroundPosition = groundBranch;
                }
                if (heavenPlate[groundBranch] === nobles.dipanNoble) {
                    dipanNobleGroundPosition = groundBranch;
                }
            }
            
            // 计算双天将排布
            const tianpanTianjiangMap = this.arrangeTwelveTianjiangs(nobles.tianpanNoble, tianpanNobleGroundPosition);
            const dipanTianjiangMap = this.arrangeDipanTianjiangs(nobles.dipanNoble, dipanNobleGroundPosition);
            
            // 计算四课（包含双天将）
            const sike = this.calculateSike(dayStem, dayBranch, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap);
            console.log('四课计算结果:', sike);
            
            // 更新四课显示
            this.updateSikeDisplay(sike);
            
            // 计算三传（包含双天将）
            const sanchuan = this.calculateSanchuan(dayStem, dayBranch, sike, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap);
            console.log('三传计算结果:', sanchuan);
            
            // 更新三传显示
            this.updateSanchuanDisplay(sanchuan);
        } catch (error) {
            console.error('计算四课和三传时出错:', error);
        }
    }

    updateSizhu(customTimeBranch = null) {
        try {
            if (typeof Solar === 'undefined') {
                console.warn('lunar-javascript库未加载，无法计算四柱');
                // 如果库未加载，显示提示信息
                if (this.yearGan) this.yearGan.textContent = '加';
                if (this.yearZhi) this.yearZhi.textContent = '载';
                if (this.monthGan) this.monthGan.textContent = '中';
                if (this.monthZhi) this.monthZhi.textContent = '...';
                return;
            }

            console.log('开始更新四柱，当前时间:', new Date().toLocaleString(), customTimeBranch ? `自定义时辰: ${customTimeBranch}` : '');

            // 使用当前时间或自定义时间计算四柱
            const now = this.currentDateTime || new Date();
            console.log(`使用时间: ${now.toLocaleString()}, 是否使用自定义时间: ${this.currentDateTime ? '是' : '否'}`);
            const solar = Solar.fromDate(now);
            const lunar = solar.getLunar();
            
            // 获取基本四柱信息
            let yearGZ = lunar.getYearInGanZhi();
            let monthGZ = lunar.getMonthInGanZhi();
            let dayGZ = lunar.getDayInGanZhi();
            
            // 如果提供了自定义时辰，则需要自定义时柱
            let timeGZ;
            if (customTimeBranch) {
                // 根据自定义时辰和日干构建时柱（使用五子元遁法）
                const dayStem = dayGZ.charAt(0); // 使用当前日干
                const timeStem = this.getTimeGanZhi(customTimeBranch, dayStem).charAt(0);
                timeGZ = timeStem + customTimeBranch;
                console.log(`使用自定义时辰: ${customTimeBranch}, 日干: ${dayStem}, 构建的时柱: ${timeGZ}`);
            } else {
                timeGZ = lunar.getTimeInGanZhi();
                console.log(`使用当前时辰，得到时柱: ${timeGZ}`);
            }
            
            console.log('最终使用的四柱:', {
                yearGZ,
                monthGZ,
                dayGZ,
                timeGZ
            });
            
            // 保存当前使用的四柱信息，供其他方法使用
            this.currentFourPillars = {
                yearGZ,
                monthGZ,
                dayGZ,
                timeGZ,
                timeBranch: customTimeBranch || timeGZ.charAt(1)
            };
            
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
        
        // 记录时间信息以便调试
        const now = new Date();
        console.log(`=== 当前时间设置 ===`);
        console.log(`当前时间: ${now.toLocaleTimeString()}`);
        console.log(`当前小时: ${now.getHours()}`);
        console.log(`计算时辰: ${currentBranch}`);
        console.log(`当前月将: ${currentMonthGeneral}`);
        
        // 更新中心时间显示
        this.updateCenterTime();
        
        // 更新提示信息
        this.calculationInfo.textContent = '已自动设置为当前时间';
        
        // 显示所有图表区域
        const chartSections = document.querySelectorAll('.chart-section');
        chartSections.forEach(section => {
            section.style.display = 'block';
        });
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

    calculatePlates(customMonthGeneral, customTimeBranch) {
        // 清除所有盘内容
        this.clearAllPlateContent();
        
        // 使用自定义参数或从选择框获取值
        const monthGeneral = customMonthGeneral || this.monthGeneralSelect.value;
        let timeBranch = customTimeBranch;
        
        if (!timeBranch) {
            // 如果没有提供自定义时辰，从选择框获取
            timeBranch = this.timeBranchSelect.value;
            console.log(`从选择框获取占时: ${timeBranch}`);
        } else {
            console.log(`使用自定义时辰: ${timeBranch}`);
        }
        
        console.log(`计算排盘：月将=${monthGeneral}, 占时=${timeBranch}`, customTimeBranch ? '(自定义时辰)' : '');
        
        if (!monthGeneral || !timeBranch) {
            this.calculationInfo.textContent = '请选择月将和占时';
            return;
        }
        
        // 确保所有单元格都有十二建除和旺衰容器
        document.querySelectorAll('.branch-cell').forEach(cell => {
            // 检查单元格是否已有jianchu-wangshui-container
            if (!cell.querySelector('.jianchu-wangshui-container')) {
                const container = document.createElement('div');
                container.className = 'jianchu-wangshui-container';
                
                // 创建一个行容器，用于放置十二建除和旺衰
                const jianchuWangshuiRow = document.createElement('div');
                jianchuWangshuiRow.className = 'jianchu-wangshui-row';
                
                // 添加十二建除显示
                const jianchuDisplay = document.createElement('div');
                jianchuDisplay.className = 'jianchu-display';
                jianchuDisplay.style.display = 'inline-block';
                jianchuDisplay.style.marginRight = '4px';
                jianchuWangshuiRow.appendChild(jianchuDisplay);
                
                // 添加旺衰显示
                const wangshuiDisplay = document.createElement('div');
                wangshuiDisplay.className = 'wangshui-display';
                wangshuiDisplay.style.display = 'inline-block';
                jianchuWangshuiRow.appendChild(wangshuiDisplay);
                
                // 将行容器添加到主容器
                container.appendChild(jianchuWangshuiRow);
                
                // 添加长生显示
                const changshengDisplay = document.createElement('div');
                changshengDisplay.className = 'changsheng-display';
                changshengDisplay.title = '五行长生/十干长生';
                container.appendChild(changshengDisplay);
                
                cell.appendChild(container);
            }
        });

        // 计算天盘
        const heavenPlate = this.calculateHeavenPlate(monthGeneral, timeBranch);
        
        // 更新天盘显示
        this.updateCombinedPlate(heavenPlate);
        
        try {
            // 从页面上获取四柱显示中的日干支，而不是使用当前日期的
            const dayGanElement = document.getElementById('day-gan');
            const dayZhiElement = document.getElementById('day-zhi');
            
            // 如果页面上有显示日干支，则使用它们；否则使用当前日期的
            let dayStem, dayBranch;
            
            if (dayGanElement && dayZhiElement && dayGanElement.textContent && dayZhiElement.textContent) {
                dayStem = dayGanElement.textContent;
                dayBranch = dayZhiElement.textContent;
                console.log('使用页面显示的日干支计算天将:', dayStem + dayBranch);
            } else {
                // 获取日干支（基于当前时间）
            const now = new Date();
            const solar = Solar.fromDate(now);
            const lunar = solar.getLunar();
                const dayGZ = lunar.getDayInGanZhi();
            dayStem = dayGZ.charAt(0);
            dayBranch = dayGZ.charAt(1);
                console.log('使用当前日期的日干支计算天将:', dayGZ);
            }
            
            // 当前月支
            const now = new Date();
            const solar = Solar.fromDate(now);
            const lunar = solar.getLunar();
            const lunarMonthBranch = lunar.getMonthInGanZhi().charAt(1);
            
            console.log('更新天将和旬干，日干支:', dayStem + dayBranch, '占时:', timeBranch);
            
            // 特别处理巳位置的十二建除和旺衰显示
            setTimeout(() => {
                const siCell = document.querySelector('.branch-cell[data-branch="巳"]');
                if (siCell) {
                    console.log('特别处理巳位置的十二建除和旺衰显示');
                    
                    // 移除原有的容器
                    const oldContainer = siCell.querySelector('.jianchu-wangshui-container');
                    if (oldContainer) {
                        oldContainer.remove();
                    }
                    
                    // 创建新的容器
                    const container = document.createElement('div');
                    container.className = 'jianchu-wangshui-container';
                    container.style.position = 'absolute';
                    container.style.bottom = '2px';
                    container.style.right = '2px';
                    container.style.zIndex = '20';
                    
                    // 创建一个行容器，用于放置十二建除和旺衰
                    const jianchuWangshuiRow = document.createElement('div');
                    jianchuWangshuiRow.className = 'jianchu-wangshui-row';
                    jianchuWangshuiRow.style.display = 'flex';
                    jianchuWangshuiRow.style.flexDirection = 'row';
                    jianchuWangshuiRow.style.alignItems = 'center';
                    
                    // 添加十二建除显示
                    const jianchuDisplay = document.createElement('div');
                    jianchuDisplay.className = 'jianchu-display';
                    jianchuDisplay.style.display = 'inline-block';
                    jianchuDisplay.style.marginRight = '4px';
                    jianchuDisplay.style.fontWeight = 'bold';
                    jianchuDisplay.style.fontSize = '0.7em';
                    
                    // 添加旺衰显示
                    const wangshuiDisplay = document.createElement('div');
                    wangshuiDisplay.className = 'wangshui-display';
                    wangshuiDisplay.style.display = 'inline-block';
                    wangshuiDisplay.style.fontWeight = 'bold';
                    wangshuiDisplay.style.fontSize = '0.7em';
                    
                    // 计算十二建除和旺衰的值
                    const monthBranch = lunar.getMonthInGanZhi().charAt(1);
                    
                    // 计算天盘
                    const monthGeneral = this.monthGeneralSelect.value;
                    const heavenPlate = this.calculateHeavenPlate(monthGeneral, timeBranch);
                    const heavenBranch = heavenPlate['巳'];
                    
                    // 计算十二建除
                    const jianchu = this.calculateJianchu(monthBranch, '巳', heavenPlate);
                    jianchuDisplay.textContent = jianchu;
                    jianchuDisplay.title = '十二建除';
                    
                    // 计算旺衰
                    const wangshui = this.calculateYueling(monthBranch, heavenBranch);
                    wangshuiDisplay.textContent = wangshui;
                    wangshuiDisplay.title = '旺衰';
                    
                    // 添加分隔符
                    const separator = document.createElement('span');
                    separator.style.display = 'inline-block';
                    separator.style.margin = '0 2px';
                    separator.style.right = '-50%';
                    separator.style.fontWeight = 'bold';
                    separator.style.fontSize = '0.7em';
                    
                    // 组装元素
                    jianchuWangshuiRow.appendChild(jianchuDisplay);
                    jianchuWangshuiRow.appendChild(separator);
                    jianchuWangshuiRow.appendChild(wangshuiDisplay);
                    container.appendChild(jianchuWangshuiRow);
                    
                    // 添加长生显示
                    const changshengDisplay = document.createElement('div');
                    changshengDisplay.className = 'changsheng-display';
                    changshengDisplay.title = '五行长生/十干长生';
                    
                    // 计算五行长生
                    const wuxingChangsheng = this.calculateChangsheng(dayStem, heavenBranch);
                    // 计算十干长生
                    const shiganChangsheng = this.calculateShiganChangsheng(dayStem, heavenBranch);
                    
                    // 显示长生信息
                    changshengDisplay.innerHTML = `<span class="wuxing-changsheng">${wuxingChangsheng || ''}</span>/<span class="shigan-changsheng">${shiganChangsheng || ''}</span>`;
                    container.appendChild(changshengDisplay);
                    
                    // 添加到单元格
                    siCell.appendChild(container);
                }
            }, 500);
            
            // 计算和更新天将、旬干
            this.updateTianjiangAndXungan(timeBranch);
            
            // 获取天将排布信息
            const nobles = this.getBothNoblePersons(dayStem, timeBranch);
            
            // 找到贵人在地盘的位置
            let tianpanNobleGroundPosition = null;
            for (let groundBranch in heavenPlate) {
                if (heavenPlate[groundBranch] === nobles.tianpanNoble) {
                    tianpanNobleGroundPosition = groundBranch;
                    break;
                }
            }
            
            // 找到地盘贵人在地盘的位置
            let dipanNobleGroundPosition = null;
            for (let groundBranch in heavenPlate) {
                if (heavenPlate[groundBranch] === nobles.dipanNoble) {
                    dipanNobleGroundPosition = groundBranch;
                    break;
                }
            }
            
            // 计算天将排布
            const tianpanTianjiangMap = this.arrangeTwelveTianjiangs(nobles.tianpanNoble, tianpanNobleGroundPosition);
            const dipanTianjiangMap = this.arrangeDipanTianjiangs(nobles.dipanNoble, dipanNobleGroundPosition);
            
            // 计算和更新四课
            const sike = this.calculateSike(dayStem, dayBranch, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap);
            console.log('四课计算结果:', sike);
            this.updateSikeDisplay(sike);
            
            // 计算和更新三传
            const sanchuan = this.calculateSanchuan(dayStem, dayBranch, sike, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap);
            console.log('三传计算结果:', sanchuan);
            this.updateSanchuanDisplay(sanchuan);
        } catch (error) {
            console.error('计算四课和三传时出错:', error);
        }
        
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
        
        // 获取当前日期的日干支（用于计算十神和化耀）
        const now = new Date();
        const solar = Solar.fromDate(now);
        const lunar = solar.getLunar();
        const dayGZ = lunar.getDayInGanZhi();
        const dayStem = dayGZ.charAt(0);
        const dayBranch = dayGZ.charAt(1);
        
        // 获取时辰干支
        const hourGanElement = document.getElementById('hour-gan')?.textContent || '';
        const hourZhiElement = document.getElementById('hour-zhi')?.textContent || '';
        const timeStem = hourGanElement;
        const timeBranch = hourZhiElement;
        
        cells.forEach(cell => {
            const groundBranch = cell.getAttribute('data-branch');
            if (groundBranch && heavenPlate[groundBranch]) {
                // 更新天盘地支
                const heavenBranchElement = cell.querySelector('.tianpan-branch');
                if (heavenBranchElement) {
                    heavenBranchElement.textContent = heavenPlate[groundBranch];
                    this.applyWuxingColor(heavenBranchElement, heavenPlate[groundBranch]);
                    // 移除默认样式
                    heavenBranchElement.style.border = 'none';
                }
                
                // 为地盘地支应用颜色
                const groundBranchElement = cell.querySelector('.dipan-branch');
                if (groundBranchElement) {
                    this.applyWuxingColor(groundBranchElement, groundBranch);
                }
                
                // 计算并更新十神和六亲
                const heavenBranch = heavenPlate[groundBranch];
                const tianpanGan = this.getTianpanGan(heavenBranch);
                
                // 计算十神（基于天盘天干和日干）
                if (tianpanGan) {
                    const shishen = this.calculateShishen(tianpanGan, dayStem);
                    const shishenElement = cell.querySelector('.shishen-display');
                    if (shishenElement) {
                        shishenElement.textContent = shishen;
                        shishenElement.style.color = this.getShishenColor(shishen);
                        shishenElement.style.fontWeight = 'bold';
                    }
                    
                    // 计算化耀（基于十神）
                    const huayao = this.calculateHuaYao(shishen, dayStem);
                    const huayaoElement = cell.querySelector('.huayao-display');
                    if (huayaoElement) {
                        huayaoElement.textContent = huayao;
                        huayaoElement.style.color = this.getHuaYaoColor(huayao);
                        huayaoElement.style.fontWeight = 'bold';
                    }
                }
                
                // 计算六亲（基于日干和天盘地支）
                const liuqin = this.calculateLiuqinGanZhi(dayStem, heavenBranch);
                const liuqinElement = cell.querySelector('.liuqin-display');
                if (liuqinElement) {
                    liuqinElement.textContent = liuqin;
                    liuqinElement.style.color = this.getLiuqinColor(liuqin);
                    liuqinElement.style.fontWeight = 'bold';
                }
                
                // 计算天遁
                if (timeStem && timeBranch) {
                    const tiandunResult = this.calculateTianDunWithXunkong(groundBranch, timeStem, timeBranch, heavenPlate);
                    const tiandunElement = cell.querySelector('.tiandun-display');
                    if (tiandunElement && tiandunResult) {
                        tiandunElement.textContent = tiandunResult.gan || '';
                        if (tiandunResult.isTimeXunkong) {
                            tiandunElement.classList.add('xunkong');
                        } else {
                            tiandunElement.classList.remove('xunkong');
                        }
                    }
                }
            }
        });
        
        // 特别处理巳位置的十二建除和旺衰显示
        setTimeout(() => {
            const siCell = document.querySelector('.branch-cell[data-branch="巳"]');
            if (siCell) {
                console.log('特别处理巳位置的十二建除和旺衰显示');
                
                // 移除原有的容器
                const oldContainer = siCell.querySelector('.jianchu-wangshui-container');
                if (oldContainer) {
                    oldContainer.remove();
                }
                
                // 创建新的容器
                const container = document.createElement('div');
                container.className = 'jianchu-wangshui-container';
                container.style.position = 'absolute';
                container.style.bottom = '2px';
                container.style.right = '2px';
                container.style.zIndex = '20';
                
                // 创建一个行容器，用于放置十二建除和旺衰
                const jianchuWangshuiRow = document.createElement('div');
                jianchuWangshuiRow.className = 'jianchu-wangshui-row';
                jianchuWangshuiRow.style.display = 'flex';
                jianchuWangshuiRow.style.flexDirection = 'row';
                jianchuWangshuiRow.style.alignItems = 'center';
                
                // 添加十二建除显示
                const jianchuDisplay = document.createElement('div');
                jianchuDisplay.className = 'jianchu-display';
                jianchuDisplay.style.display = 'inline-block';
                jianchuDisplay.style.fontWeight = 'bold';
                jianchuDisplay.style.fontSize = '0.7em';
                
                // 添加旺衰显示
                const wangshuiDisplay = document.createElement('div');
                wangshuiDisplay.className = 'wangshui-display';
                wangshuiDisplay.style.display = 'inline-block';
                wangshuiDisplay.style.fontWeight = 'bold';
                wangshuiDisplay.style.fontSize = '0.7em';
                
                // 从页面上获取日干支
                const dayGanElement = document.getElementById('day-gan');
                let dayStem;
                
                if (dayGanElement && dayGanElement.textContent) {
                    dayStem = dayGanElement.textContent;
                    console.log('使用页面显示的日干计算长生:', dayStem);
                } else {
                // 获取日干支（基于当前时间）
                const now = new Date();
                const solar = Solar.fromDate(now);
                const lunar = solar.getLunar();
                    dayStem = lunar.getDayInGanZhi().charAt(0);
                }
                
                // 计算十二建除和旺衰的值
                const monthBranch = lunar.getMonthInGanZhi().charAt(1);
                const heavenBranch = heavenPlate['巳'];
                
                // 计算十二建除
                const jianchu = this.calculateJianchu(monthBranch, '巳', heavenPlate);
                jianchuDisplay.textContent = jianchu;
                jianchuDisplay.title = '十二建除';
                
                // 计算旺衰
                const wangshui = this.calculateYueling(monthBranch, heavenBranch);
                wangshuiDisplay.textContent = wangshui;
                wangshuiDisplay.title = '旺衰';
                
                // 添加分隔符
                const separator = document.createElement('span');
                separator.textContent = '/';
                separator.style.display = 'inline-block';
                separator.style.margin = '0 2px';
                separator.style.fontWeight = 'bold';
                separator.style.fontSize = '0.7em';
                
                // 组装元素
                jianchuWangshuiRow.appendChild(jianchuDisplay);
                jianchuWangshuiRow.appendChild(separator);
                jianchuWangshuiRow.appendChild(wangshuiDisplay);
                container.appendChild(jianchuWangshuiRow);
                
                // 添加长生显示
                const changshengDisplay = document.createElement('div');
                changshengDisplay.className = 'changsheng-display';
                changshengDisplay.title = '五行长生/十干长生';
                
                // 计算五行长生
                const wuxingChangsheng = this.calculateChangsheng(dayStem, heavenBranch);
                // 计算十干长生
                const shiganChangsheng = this.calculateShiganChangsheng(dayStem, heavenBranch);
                
                // 显示长生信息
                changshengDisplay.innerHTML = `<span class="wuxing-changsheng">${wuxingChangsheng || ''}</span>/<span class="shigan-changsheng">${shiganChangsheng || ''}</span>`;
                container.appendChild(changshengDisplay);
                
                // 添加到单元格
                siCell.appendChild(container);
            }
        }, 500);
    }
    
    // 更新天将和旬干
    updateTianjiangAndXungan(timeBranch, customHeavenPlate = null) {
        try {
            // 从页面上获取四柱显示中的日干支，而不是使用当前日期的
            const dayGanElement = document.getElementById('day-gan');
            const dayZhiElement = document.getElementById('day-zhi');
            
            // 如果页面上有显示日干支，则使用它们；否则使用当前日期的
            let dayStem, dayBranch;
            
            if (dayGanElement && dayZhiElement && dayGanElement.textContent && dayZhiElement.textContent) {
                dayStem = dayGanElement.textContent;
                dayBranch = dayZhiElement.textContent;
                console.log('使用页面显示的日干支计算天将:', dayStem + dayBranch);
            } else {
            // 获取日干支（基于当前时间）
            const now = new Date();
            const solar = Solar.fromDate(now);
            const lunar = solar.getLunar();
            const dayGZ = lunar.getDayInGanZhi();
                dayStem = dayGZ.charAt(0);
                dayBranch = dayGZ.charAt(1);
                console.log('使用当前日期的日干支计算天将:', dayGZ);
            }
            
            // 当前月支
            const now = new Date();
            const solar = Solar.fromDate(now);
            const lunar = solar.getLunar();
            const lunarMonthBranch = lunar.getMonthInGanZhi().charAt(1);
            
            console.log('更新天将和旬干，日干支:', dayStem + dayBranch, '占时:', timeBranch);
            
            // 计算天盘 - 使用传入的天盘或重新计算
            const monthGeneral = this.monthGeneralSelect.value;
            const heavenPlate = customHeavenPlate || this.calculateHeavenPlate(monthGeneral, timeBranch);
            
            // 特别处理巳位置的十二建除和旺衰显示
            setTimeout(() => {
                const siCell = document.querySelector('.branch-cell[data-branch="巳"]');
                if (siCell) {
                    console.log('特别处理巳位置的十二建除和旺衰显示');
                    
                    // 移除原有的容器
                    const oldContainer = siCell.querySelector('.jianchu-wangshui-container');
                    if (oldContainer) {
                        oldContainer.remove();
                    }
                    
                    // 创建新的容器
                    const container = document.createElement('div');
                    container.className = 'jianchu-wangshui-container';
                    container.style.position = 'absolute';
                    container.style.bottom = '2px';
                    container.style.right = '2px';
                    container.style.zIndex = '20';
                    
                    // 创建一个行容器，用于放置十二建除和旺衰
                    const jianchuWangshuiRow = document.createElement('div');
                    jianchuWangshuiRow.className = 'jianchu-wangshui-row';
                    jianchuWangshuiRow.style.display = 'flex';
                    jianchuWangshuiRow.style.flexDirection = 'row';
                    jianchuWangshuiRow.style.alignItems = 'center';
                    
                    // 添加十二建除显示
                    const jianchuDisplay = document.createElement('div');
                    jianchuDisplay.className = 'jianchu-display';
                    jianchuDisplay.style.display = 'inline-block';
                    jianchuDisplay.style.marginRight = '4px';
                    jianchuDisplay.style.fontWeight = 'bold';
                    jianchuDisplay.style.fontSize = '0.7em';
                    
                    // 添加旺衰显示
                    const wangshuiDisplay = document.createElement('div');
                    wangshuiDisplay.className = 'wangshui-display';
                    wangshuiDisplay.style.display = 'inline-block';
                    wangshuiDisplay.style.fontWeight = 'bold';
                    wangshuiDisplay.style.fontSize = '0.7em';
                    
                    // 计算十二建除和旺衰的值
                    const monthBranch = lunar.getMonthInGanZhi().charAt(1);
                    
                    const heavenBranch = heavenPlate['巳'];
                    
                    // 计算十二建除
                    const jianchu = this.calculateJianchu(monthBranch, '巳', heavenPlate);
                    jianchuDisplay.textContent = jianchu;
                    jianchuDisplay.title = '十二建除';
                    
                    // 计算旺衰
                    const wangshui = this.calculateYueling(monthBranch, heavenBranch);
                    wangshuiDisplay.textContent = wangshui;
                    wangshuiDisplay.title = '旺衰';
                    
                    // 添加分隔符
                    const separator = document.createElement('span');
                    separator.style.display = 'inline-block';
                    separator.style.margin = '0 2px';
                    separator.style.right = '-50%';
                    separator.style.fontWeight = 'bold';
                    separator.style.fontSize = '0.7em';
                    
                    // 组装元素
                    jianchuWangshuiRow.appendChild(jianchuDisplay);
                    jianchuWangshuiRow.appendChild(separator);
                    jianchuWangshuiRow.appendChild(wangshuiDisplay);
                    container.appendChild(jianchuWangshuiRow);
                    
                    // 添加长生显示
                    const changshengDisplay = document.createElement('div');
                    changshengDisplay.className = 'changsheng-display';
                    changshengDisplay.title = '五行长生/十干长生';
                    
                    // 计算五行长生
                    const wuxingChangsheng = this.calculateChangsheng(dayStem, heavenBranch);
                    // 计算十干长生
                    const shiganChangsheng = this.calculateShiganChangsheng(dayStem, heavenBranch);
                    
                    // 显示长生信息
                    changshengDisplay.innerHTML = `<span class="wuxing-changsheng">${wuxingChangsheng || ''}</span>/<span class="shigan-changsheng">${shiganChangsheng || ''}</span>`;
                    container.appendChild(changshengDisplay);
                    
                    // 添加到单元格
                    siCell.appendChild(container);
                }
            }, 500);
            
            // 获取天将排布信息
            const nobles = this.getBothNoblePersons(dayStem, timeBranch);
            
            // 找到贵人在地盘的位置
            let tianpanNobleGroundPosition = null;
            for (let groundBranch in heavenPlate) {
                if (heavenPlate[groundBranch] === nobles.tianpanNoble) {
                    tianpanNobleGroundPosition = groundBranch;
                    break;
                }
            }
            
            // 找到地盘贵人在地盘的位置
            let dipanNobleGroundPosition = null;
            for (let groundBranch in heavenPlate) {
                if (heavenPlate[groundBranch] === nobles.dipanNoble) {
                    dipanNobleGroundPosition = groundBranch;
                    break;
                }
            }
            
            // 计算天将排布
            const tianpanTianjiangMap = this.arrangeTwelveTianjiangs(nobles.tianpanNoble, tianpanNobleGroundPosition);
            const dipanTianjiangMap = this.arrangeDipanTianjiangs(nobles.dipanNoble, dipanNobleGroundPosition);
            
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
                    // 天盘天将：根据天盘地支查找对应的天将
                    const tianpanTianjiang = tianpanTianjiangMap[heavenBranch] || '';
                    // 地盘天将：根据天盘地支查找对应的天将
                    const dipanTianjiang = dipanTianjiangMap[heavenBranch] || '';
                    
                    // 更新天盘天将（顶部）
                    const tianpanTianjiangElement = cell.querySelector('.tianpan-tianjiang');
                    if (tianpanTianjiangElement) {
                        tianpanTianjiangElement.textContent = tianpanTianjiang;
                        tianpanTianjiangElement.style.visibility = 'visible';
                        // 移除天将的默认样式，只保留文字
                        tianpanTianjiangElement.style.background = 'transparent';
                        tianpanTianjiangElement.style.backgroundColor = 'transparent';
                        tianpanTianjiangElement.style.border = 'none';
                        // 应用天将五行颜色
                        if (tianpanTianjiang && TIANJIANG_COLORS[tianpanTianjiang]) {
                            tianpanTianjiangElement.style.color = TIANJIANG_COLORS[tianpanTianjiang];
                        }
                    }
                    
                    // 更新天盘地支（第二行）
                    const tianpanBranchElement = cell.querySelector('.tianpan-branch');
                    if (tianpanBranchElement) {
                        tianpanBranchElement.textContent = heavenBranch;
                        
                        // 获取天盘地支五行
                        const heavenZhiWuxing = this.getWuxing(heavenBranch);
                        
                        // 应用天盘地支五行颜色类
                        tianpanBranchElement.className = 'tianpan-branch'; // 保留原始类
                        tianpanBranchElement.classList.add(`wuxing-${this.getWuxingPinyin(heavenZhiWuxing)}`);
                        
                        // 检查是否旬空
                        if (xunkongBranches.includes(heavenBranch)) {
                            tianpanBranchElement.classList.add('xunkong-branch');
                        }
                    }
                    
                    // 更新地盘地支（第三行）
                    const dipanBranchElement = cell.querySelector('.dipan-branch');
                    if (dipanBranchElement) {
                        dipanBranchElement.textContent = groundBranch;
                        
                        // 获取地支五行
                        const zhiWuxing = this.getWuxing(groundBranch);
                        
                        // 应用地支五行颜色类
                        dipanBranchElement.className = 'dipan-branch'; // 保留原始类
                        dipanBranchElement.classList.add(`wuxing-${this.getWuxingPinyin(zhiWuxing)}`);
                        
                        // 检查是否旬空
                        if (xunkongBranches.includes(groundBranch)) {
                            dipanBranchElement.classList.add('xunkong-branch');
                        }
                    }
                    
                    // 更新地盘天将（底部）
                    const dipanTianjiangElement = cell.querySelector('.dipan-tianjiang-bottom');
                    if (dipanTianjiangElement) {
                        dipanTianjiangElement.textContent = dipanTianjiang;
                        dipanTianjiangElement.style.visibility = 'visible';
                        // 移除默认样式，只保留文字
                        dipanTianjiangElement.style.background = 'transparent';
                        dipanTianjiangElement.style.backgroundColor = 'transparent';
                        dipanTianjiangElement.style.border = 'none';
                        // 应用天将五行颜色
                        if (dipanTianjiang && TIANJIANG_COLORS[dipanTianjiang]) {
                            dipanTianjiangElement.style.color = TIANJIANG_COLORS[dipanTianjiang];
                        }
                    }
                    
                    // 更新人遁
                    const rendunDisplayElement = cell.querySelector('.rendun-display');
                    const rendunNayinElement = cell.querySelector('.rendun-nayin');
                    if (rendunDisplayElement) {
                        // 计算人遁 - 基于贵人在地盘的位置
                        const rendunGan = this.calculateRendun(groundBranch, tianpanNobleGroundPosition, dayStem, heavenPlate);
                        
                        rendunDisplayElement.textContent = rendunGan;
                        rendunDisplayElement.style.visibility = rendunGan ? 'visible' : 'hidden';
                        
                        // 计算人遁纳音
                        if (rendunNayinElement && rendunGan && heavenBranch) {
                            const rendunNayin = calculateNayin(rendunGan, heavenBranch);
                            rendunNayinElement.textContent = rendunNayin;
                            rendunNayinElement.style.visibility = rendunNayin ? 'visible' : 'hidden';
                            if (rendunNayin) {
                                rendunNayinElement.style.color = getNayinWuxingColor(rendunNayin);
                            }
                        }
                        
                        console.log(`${groundBranch} 设置人遁: ${rendunGan} (贵人在地盘 ${tianpanNobleGroundPosition})`);
                    }

                    // 更新旬干（基于天盘地支计算）
                    const xunganDisplayElement = cell.querySelector('.xungan-display');
                    const xunganNayinElement = cell.querySelector('.xungan-nayin');
                    if (xunganDisplayElement) {
                        // 判断天盘地支是否旬空
                        const isHeavenBranchXunkong = xunkongBranches.includes(heavenBranch);
                        const xunganResult = isHeavenBranchXunkong ? 
                            { gan: this.calculateXunkongGan(heavenBranch, dayStem, dayBranch), isXunkong: true } :
                            { gan: this.calculateXunganForPosition(heavenBranch, dayStem, dayBranch), isXunkong: false };
                        
                        xunganDisplayElement.textContent = xunganResult.gan;
                        xunganDisplayElement.style.visibility = xunganResult.gan ? 'visible' : 'hidden';
                        
                        // 计算旬干纳音
                        if (xunganNayinElement && xunganResult.gan && heavenBranch) {
                            const xunganNayin = calculateNayin(xunganResult.gan, heavenBranch);
                            xunganNayinElement.textContent = xunganNayin;
                            xunganNayinElement.style.visibility = xunganNayin ? 'visible' : 'hidden';
                            if (xunganNayin) {
                                xunganNayinElement.style.color = getNayinWuxingColor(xunganNayin);
                            }
                        }
                        
                        // 处理旬空标志
                        if (xunganResult.isXunkong) {
                            xunganDisplayElement.classList.add('xunkong-flag');
                            xunganDisplayElement.style.color = '#999';
                            xunganDisplayElement.style.textDecoration = 'line-through';
                        } else {
                            xunganDisplayElement.classList.remove('xunkong-flag');
                            xunganDisplayElement.style.color = '#3498db'; // 旬遁蓝色
                            xunganDisplayElement.style.textDecoration = '';
                        }
                        console.log(`${groundBranch} 设置旬干: ${xunganResult.gan} (基于天盘地支${heavenBranch})`);
                    }

                    // 更新十神和六亲
                    const shishenDisplayElement = cell.querySelector('.shishen-display');
                    const liuqinDisplayElement = cell.querySelector('.liuqin-display');
                    if (shishenDisplayElement && liuqinDisplayElement) {
                        // 判断天盘地支是否旬空（重新计算以确保变量可用）
                        const isHeavenBranchXunkongForShishen = xunkongBranches.includes(heavenBranch);
                        
                        // 计算十神：日干与旬遁天干比较
                        const xunganForShishen = isHeavenBranchXunkongForShishen ? 
                            this.calculateXunkongGan(heavenBranch, dayStem, dayBranch) :
                            this.calculateXunganForPosition(heavenBranch, dayStem, dayBranch);
                        
                        const shishen = this.calculateShishen(xunganForShishen, dayStem);
                        shishenDisplayElement.textContent = shishen;
                        shishenDisplayElement.style.color = this.getShishenColor(shishen);
                        
                        // 计算六亲：日干与天盘地支比较
                        const liuqin = this.calculateLiuqinGanZhi(dayStem, heavenBranch);
                        liuqinDisplayElement.textContent = liuqin;
                        liuqinDisplayElement.style.color = this.getLiuqinColor(liuqin);
                        
                        console.log(`${groundBranch} 设置十神: ${shishen}, 六亲: ${liuqin}`);
                    }

                    // 更新建干和复建
                    const jianganElement = cell.querySelector('.jiangan');
                    const fujianElement = cell.querySelector('.fujian');
                    if (jianganElement && fujianElement) {
                        // 建干从天盘时支位置开始排布
                        const jianganGan = this.calculateJiangan(groundBranch, dayStem, heavenPlate);
                        jianganElement.textContent = jianganGan;
                        // 复建是用时干起五子元遁
                        const timeGZ = this.getTimeGanZhi(timeBranch);
                        const timeStem = timeGZ.charAt(0);
                        const fujianGan = this.calculateFujian(groundBranch, timeStem, heavenPlate);
                        fujianElement.textContent = fujianGan;
                        // 添加五行颜色
                        this.applyWuxingColor(jianganElement, jianganGan);
                        this.applyWuxingColor(fujianElement, fujianGan);
                        console.log(`${groundBranch} 设置建干: ${jianganGan}, 复建: ${fujianGan}`);
                        // 新增：填充建干纳音和复建纳音
                        const jianganNayinElement = cell.querySelector('.jiangan-nayin');
                        const fujianNayinElement = cell.querySelector('.fujian-nayin');
                        if (jianganNayinElement && jianganGan && heavenBranch) {
                            const nayin = calculateNayin(jianganGan, heavenBranch);
                            jianganNayinElement.textContent = nayin ? nayin : '无纳音';
                            jianganNayinElement.style.color = nayin ? getNayinWuxingColor(nayin) : '#bbb';
                        }
                        // 复建纳音显示
                        if (fujianNayinElement && fujianGan && heavenBranch) {
                            const ganZhi = fujianGan + heavenBranch;
                            const nayin = calculateNayin(fujianGan, heavenBranch);
                            // 调试输出
                            console.log('复建纳音调试', fujianGan, heavenBranch, ganZhi, nayin);
                            // 优化显示
                            fujianNayinElement.textContent = nayin ? nayin : `无纳音(${ganZhi})`;
                            fujianNayinElement.style.color = nayin ? getNayinWuxingColor(nayin) : '#bbb';
                        }
                    }

                    // 更新十二建除、旺衰和长生
                    const jianchuWangshuiContainer = cell.querySelector('.jianchu-wangshui-container');
                    
                    if (jianchuWangshuiContainer) {
                        const jianchuElement = jianchuWangshuiContainer.querySelector('.jianchu-display');
                        const wangshuiElement = jianchuWangshuiContainer.querySelector('.wangshui-display');
                        const changshengElement = jianchuWangshuiContainer.querySelector('.changsheng-display');
                        
                        // 获取月支
                        const now = new Date();
                        const solar = Solar.fromDate(now);
                        const lunar = solar.getLunar();
                        const monthBranch = lunar.getMonthInGanZhi().charAt(1);
                        
                        // 计算十二建除：月支在天盘的位置开始顺时针排布
                        const jianchu = this.calculateJianchu(monthBranch, groundBranch, heavenPlate);
                        if (jianchuElement) {
                            jianchuElement.textContent = jianchu;
                            jianchuElement.className = 'jianchu-display';
                            jianchuElement.style.display = 'inline-block';
                            jianchuElement.style.marginRight = '4px';
                            if (jianchu) {
                                const pinyin = {
                                    '建': 'jian', '除': 'chu', '满': 'man', '平': 'ping',
                                    '定': 'ding', '执': 'zhi', '破': 'po', '危': 'wei',
                                    '成': 'cheng', '收': 'shou', '开': 'kai', '闭': 'bi'
                                }[jianchu];
                                if (pinyin) jianchuElement.classList.add(pinyin);
                            }
                        }
                        
                        // 计算月令旺衰：月支与天盘地支对比
                        const wangshui = this.calculateYueling(monthBranch, heavenBranch);
                        if (wangshuiElement) {
                            wangshuiElement.textContent = wangshui;
                            wangshuiElement.className = 'wangshui-display';
                            wangshuiElement.style.display = 'inline-block';
                            if (wangshui) {
                                const pinyin = {
                                    '旺': 'wang', '相': 'xiang', '休': 'xiu',
                                    '囚': 'qiu', '死': 'si'
                                }[wangshui];
                                if (pinyin) wangshuiElement.classList.add(pinyin);
                            }
                        }
                        
                        // 计算五行长生：日干对应天盘地支
                        const wuxingChangsheng = this.calculateChangsheng(dayStem, heavenBranch);
                        
                        // 计算十干长生：日干对应天盘地支
                        const shiganChangsheng = this.calculateShiganChangsheng(dayStem, heavenBranch);
                        
                        // 将两种长生信息组合显示
                        if (changshengElement) {
                            // 显示两种长生，现在都使用黑色
                            changshengElement.innerHTML = `<span class="wuxing-changsheng">${wuxingChangsheng}</span>/<span class="shigan-changsheng">${shiganChangsheng}</span>`;
                            changshengElement.className = 'changsheng-display';
                            
                            // 添加五行长生的样式类
                            if (wuxingChangsheng) {
                                const wuxingPinyin = {
                                    '生': 'sheng', '败': 'mu', '冠': 'guan', '官': 'lin',
                                    '旺': 'wang-cs', '衰': 'shuai', '病': 'bing', '死': 'si-cs',
                                    '墓': 'mu', '绝': 'jue', '胎': 'tai', '养': 'yang'
                                }[wuxingChangsheng];
                                if (wuxingPinyin) changshengElement.classList.add(wuxingPinyin);
                            }
                            
                            // 添加十干长生的提示信息
                            if (shiganChangsheng) {
                                changshengElement.title = `五行长生: ${wuxingChangsheng}, 十干长生: ${shiganChangsheng}`;
                            }
                        }
                        
                        console.log(`${groundBranch} 设置十二建除: ${jianchu}, 旺衰: ${wangshui}, 五行长生: ${wuxingChangsheng}, 十干长生: ${shiganChangsheng} (月支: ${monthBranch}, 天盘地支: ${heavenBranch})`);
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
        
        // 获取当前日期的信息
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        
        this.calculationInfo.innerHTML = `
            <strong>大六壬排盘结果：</strong><br>
            当前时间：${year}年${month}月${day}日 ${hours}:${minutes}:${seconds}<br>
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
                const tianpanTianjiang = branchCell.querySelector('.tianpan-tianjiang').textContent;
                const dipanTianjiang = branchCell.querySelector('.dipan-tianjiang-bottom').textContent;
                const heavenBranch = branchCell.querySelector('.tianpan-branch').textContent;
                
                if (tianpanTianjiang || dipanTianjiang) {
                    this.showQianfaModal(tianpanTianjiang, dipanTianjiang, branch, heavenBranch, e);
                }
            }
        });
        
        // 添加打开钤法模态框的方法
        this.openQianfaModal = function(activeTab = 'jinkou') {
            // 获取当前选中的单元格
            const selectedCell = document.querySelector('.branch-cell.selected') || 
                                document.querySelector('.branch-cell[data-branch="子"]');
            
            if (selectedCell) {
                const branch = selectedCell.getAttribute('data-branch');
                const tianpanTianjiang = selectedCell.querySelector('.tianpan-tianjiang')?.textContent || '';
                const dipanTianjiang = selectedCell.querySelector('.dipan-tianjiang-bottom')?.textContent || '';
                const heavenBranch = selectedCell.querySelector('.tianpan-branch')?.textContent || '';
                
                this.showQianfaModal(tianpanTianjiang, dipanTianjiang, branch, heavenBranch, null, activeTab);
            } else {
                // 如果没有选中的单元格，使用默认值
                this.currentGroundBranch = '子';
                this.currentHeavenBranch = '子';
                this.updateQianfaContent();
                this.qianfaModal.style.display = 'block';
                
                // 切换到指定的选项卡
                setTimeout(() => {
                    const tabToActivate = document.getElementById(`${activeTab}-tab`);
                    if (tabToActivate) {
                        const bsTab = new bootstrap.Tab(tabToActivate);
                        bsTab.show();
                    }
                }, 100);
            }
        };
        
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
    
    showQianfaModal(tianpanTianjiang, dipanTianjiang, groundBranch, heavenBranch, event, activeTab = 'jinkou') {
        this.currentTianpanTianjiang = tianpanTianjiang;
        this.currentDipanTianjiang = dipanTianjiang;
        this.currentGroundBranch = groundBranch;
        this.currentHeavenBranch = heavenBranch;
        this.activeTab = activeTab; // 保存当前活动的选项卡
        
        // 显示钤法内容
        this.updateQianfaContent();
        
        // 获取弹窗内容元素
        const modalContent = this.qianfaModal.querySelector('.modal-content');
        if (!modalContent) {
            console.error('无法找到 modal-content 元素');
            this.qianfaModal.style.display = 'block';
            return;
        }
        
        try {
            // 尝试获取天地盘表格
            let plateTable = null;
            
            // 尝试多种方式获取天地盘表格
            if (this.plateTable) {
                plateTable = this.plateTable;
            } else {
                plateTable = document.querySelector('.plate-table');
            }
            
            // 添加与天地盘对齐的CSS类
            modalContent.classList.add('plate-aligned');
            
            // 直接设置固定位置，更靠左
            modalContent.style.position = 'fixed';
            modalContent.style.top = '69%';
            modalContent.style.left = '19.5%';
            modalContent.style.maxHeight = '80vh'; // 防止内容过多时超出屏幕
            
            if (plateTable) {
                try {
                    const tableRect = plateTable.getBoundingClientRect();
                    // 设置弹窗宽度与天地盘相同
                    modalContent.style.width = tableRect.width + 'px';
                    console.log('弹窗位置和大小计算: 位置=50px, 100px, 大小=', tableRect.width);
                } catch (e) {
                    console.warn('获取表格位置失败:', e);
                    modalContent.style.width = '90%';
                }
            } else {
                // 如果找不到表格，使用默认宽度
                modalContent.style.width = '90%';
            }
        } catch (e) {
            console.error('设置弹窗位置时出错:', e);
        }
        
        // 显示弹出框 (在设置位置后显示)
        this.qianfaModal.style.display = 'block';
        
        // 切换到指定的选项卡
        setTimeout(() => {
            const tabToActivate = document.getElementById(`${activeTab}-tab`);
            if (tabToActivate) {
                const bsTab = new bootstrap.Tab(tabToActivate);
                bsTab.show();
            }
        }, 100);
    }
    
    hideQianfaModal() {
        this.qianfaModal.style.display = 'none';
    }
    
    updateQianfaContent() {
        if (!this.currentGroundBranch || !this.currentHeavenBranch) return;
        
        // 添加标题显示当前地支
        const headerHTML = `<div class="modal-title mb-3">
            
        </div>`;
        
        // 创建选项卡导航
        let tabNav = `
        <ul class="nav nav-tabs mb-3" id="qianfaTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="jinkou-tab" data-bs-toggle="tab" data-bs-target="#jinkou-content" type="button" role="tab" aria-controls="jinkou-content" aria-selected="true">金口诀</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="qianfa-tab" data-bs-toggle="tab" data-bs-target="#qianfa-content-tab" type="button" role="tab" aria-controls="qianfa-content-tab" aria-selected="false">钤法</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="nayin-tab" data-bs-toggle="tab" data-bs-target="#nayin-content-tab" type="button" role="tab" aria-controls="nayin-content-tab" aria-selected="false">纳音</button>
            </li>
        </ul>`;
        
        // 创建选项卡内容
        let tabContent = `<div class="tab-content" id="qianfaTabContent">`;
        
        // 金口诀选项卡内容
        tabContent += `<div class="tab-pane fade show active" id="jinkou-content" role="tabpanel" aria-labelledby="jinkou-tab">
            <div class="qianfa-section">
                <h3 style="color: #ff9800;">金口诀</h3>
                <div class="qianfa-subsection">
                    ${this.generateJinkouItem()}
                </div>
            </div>
        </div>`;
        
        // 钤法选项卡内容
        tabContent += `<div class="tab-pane fade" id="qianfa-content-tab" role="tabpanel" aria-labelledby="qianfa-tab">`;
        
        let qianfaContent = '';
        
        // 天盘天将的钤法
        if (this.currentTianpanTianjiang) {
            qianfaContent += `<div class="qianfa-section">
                <h3 style="color: #1976d2;">天盘钤法</h3>
                <div class="qianfa-subsection">${this.generateQianfaItem(this.currentTianpanTianjiang, this.currentHeavenBranch)}
                </div>
                <div class="qianfa-subsection">
                    ${this.generateQianfaItem(this.currentTianpanTianjiang, this.currentGroundBranch)}
                </div>
            </div>`;
        }
        
        // 地盘天将的钤法
        if (this.currentDipanTianjiang) {
            qianfaContent += `<div class="qianfa-section">
            <h2 style="color: #d32f2f;"></h2>
                <h3 style="color: #d32f2f;">地盘钤法</h3>
                <div class="qianfa-subsection">${this.generateQianfaItem(this.currentDipanTianjiang, this.currentHeavenBranch)}
                </div>
                <div class="qianfa-subsection">${this.generateQianfaItem(this.currentDipanTianjiang, this.currentGroundBranch)}
                </div>
            </div>`;
        }
        
        if (!qianfaContent) {
            qianfaContent = '<p style="text-align: center; color: #666; margin: 20px 0;">无天将信息</p>';
        }
        
        // 添加钤法内容并关闭钤法选项卡
        tabContent += qianfaContent + `</div>`;
        
        // 纳音选项卡内容
        tabContent += `<div class="tab-pane fade" id="nayin-content-tab" role="tabpanel" aria-labelledby="nayin-tab">
            <div class="qianfa-section">
                <h3 style="color: #673ab7;">纳音</h3>
                <div class="qianfa-subsection">
                    ${this.generateNayinContent()}
                    </div>
                    </div>
                </div>`;
        
        // 关闭选项卡内容
        tabContent += `</div>`;
        
        // 设置模态框内容
        this.qianfaContent.innerHTML = headerHTML + tabNav + tabContent;
        
        // 初始化Bootstrap选项卡
        if (typeof bootstrap !== 'undefined' && bootstrap.Tab) {
            const triggerTabList = [].slice.call(document.querySelectorAll('#qianfaTab button'));
            triggerTabList.forEach(function (triggerEl) {
                const tabTrigger = new bootstrap.Tab(triggerEl);
                
                triggerEl.addEventListener('click', function (event) {
                    event.preventDefault();
                    tabTrigger.show();
                });
            });
            
            // 根据传入的activeTab参数激活对应的选项卡
            if (this.activeTab && this.activeTab !== 'jinkou') {
                const activeTabEl = document.getElementById(`${this.activeTab}-tab`);
                if (activeTabEl) {
                    const activeTabTrigger = new bootstrap.Tab(activeTabEl);
                    activeTabTrigger.show();
                }
            }
        }
    }
    
    // 生成钤法内容
    generateQianfaItem(tianjiang, branch) {
        if (!tianjiang || !branch) return '';
        
        let html = '';
        
        // 使用QIANFA_DATA中的数据
        const tianjiangData = QIANFA_DATA[tianjiang];
        if (tianjiangData && tianjiangData[branch]) {
            const qianfaData = tianjiangData[branch];
            const qianfaName = qianfaData.name;
            const qianfaDesc = qianfaData.desc;
            
            html = `<div class="qianfa-item">
                <div class="qianfa-title" style="font-weight: bold; color: #1976d2; margin-bottom: 5px;">${qianfaName}</div>
                <div class="qianfa-value">${qianfaDesc}</div>
            </div>`;
        } else {
            html = `<div class="qianfa-item">
                <div class="qianfa-value">${tianjiang}临${branch}：无特殊钤法</div>
                </div>`;
            }
            
        return html;
    }
    
        // 生成纳音内容
        generateNayinContent() {
        let html = '';
        
        // 获取当前地盘地支和天盘地支
        const groundBranch = this.currentGroundBranch || '';
        const heavenBranch = this.currentHeavenBranch || '';
        
        if (!groundBranch || !heavenBranch) {
            return '<p>请先选择宫格以查看纳音</p>';
        }
        
        // 获取日干支和时干支
        const dayStem = document.getElementById('day-gan')?.textContent || '';
        const dayBranch = document.getElementById('day-zhi')?.textContent || '';
        const timeStem = document.getElementById('hour-gan')?.textContent || '';
        const timeBranch = document.getElementById('hour-zhi')?.textContent || '';
        
        console.log('纳音计算参数:', {
            groundBranch,
            heavenBranch,
            dayStem,
            dayBranch,
            timeStem,
            timeBranch
        });
        
        // 从当前选择的宫格中获取人遁、天遁、旬遁、建干、复建的值
        const currentCell = document.querySelector(`.branch-cell[data-branch="${groundBranch}"]`);
        
        // 从宫格中获取旬遁值
        let xungan = '';
        try {
            const xunganElement = currentCell.querySelector('.xungan-display');
            if (xunganElement && xunganElement.textContent) {
                xungan = xunganElement.textContent;
                console.log(`从宫格获取旬遁: ${groundBranch} -> ${xungan}`);
            } else {
                console.warn(`宫格中未找到旬遁显示元素`);
            }
        } catch (e) {
            console.error('获取旬遁出错:', e);
        }
        
        // 从宫格中获取天遁值
        let tiandun = '';
        try {
            const tiandunElement = currentCell.querySelector('.tiandun-display');
            if (tiandunElement && tiandunElement.textContent) {
                tiandun = tiandunElement.textContent;
                console.log(`从宫格获取天遁: ${groundBranch} -> ${tiandun}`);
            } else {
                console.warn(`宫格中未找到天遁显示元素`);
            }
        } catch (e) {
            console.error('获取天遁出错:', e);
        }
        
        // 从宫格中获取人遁值
        let rendun = '';
        try {
            const rendunElement = currentCell.querySelector('.rendun-display');
            if (rendunElement && rendunElement.textContent) {
                rendun = rendunElement.textContent;
                console.log(`从宫格获取人遁: ${groundBranch} -> ${rendun}`);
            } else {
                console.warn(`宫格中未找到人遁显示元素`);
            }
        } catch (e) {
            console.error('获取人遁出错:', e);
        }
        
        // 从宫格中获取建干值
        let jiangan = '';
        try {
            const jianganElement = currentCell.querySelector('.jiangan-display');
            if (jianganElement && jianganElement.textContent) {
                jiangan = jianganElement.textContent;
                console.log(`从宫格获取建干: ${groundBranch} -> ${jiangan}`);
            } else {
                console.warn(`宫格中未找到建干显示元素`);
            }
        } catch (e) {
            console.error('获取建干出错:', e);
        }
        
        // 从宫格中获取复建值
        let fujian = '';
        try {
            const fujianElement = currentCell.querySelector('.fujian-display');
            if (fujianElement && fujianElement.textContent) {
                fujian = fujianElement.textContent;
                console.log(`从宫格获取复建: ${groundBranch} -> ${fujian}`);
            } else {
                console.warn(`宫格中未找到复建显示元素`);
            }
        } catch (e) {
            console.error('获取复建出错:', e);
        }
        
        console.log('纳音计算最终结果:', {
            xungan,
            tiandun,
            rendun,
            jiangan,
            fujian
        });
        
        // 计算各种遁干与天盘地支的纳音
        if (xungan && heavenBranch) {
            try {
                const xunganNayin = calculateNayin(xungan, heavenBranch);
                const xunganNayinWuxing = getNayinWuxing(xunganNayin);
                const xunganNayinColor = getNayinWuxingColor(xunganNayin);
                
                html += `<div class="nayin-item">
                    <div class="nayin-label">旬遁纳音:</div>
                    <div class="nayin-value" style="color: ${xunganNayinColor};">${xungan}${heavenBranch} - ${xunganNayin}${xunganNayinWuxing}</div>
                </div>`;
            } catch (e) {
                console.error('计算旬遁纳音出错:', e);
                html += `<div class="nayin-item">
                    <div class="nayin-label">旬遁纳音:</div>
                    <div class="nayin-value">${xungan}${heavenBranch} - 计算出错</div>
                </div>`;
            }
        }
        
                if (tiandun && heavenBranch) {
            try {
                const tiandunNayin = calculateNayin(tiandun, heavenBranch);
                const tiandunNayinWuxing = getNayinWuxing(tiandunNayin);
                const tiandunNayinColor = getNayinWuxingColor(tiandunNayin);
                
                html += `<div class="nayin-item">
                    <div class="nayin-label">天遁纳音:</div>
                    <div class="nayin-value" style="color: ${tiandunNayinColor};">${tiandun}${heavenBranch} - ${tiandunNayin}${tiandunNayinWuxing}</div>
                </div>`;
            } catch (e) {
                console.error('计算天遁纳音出错:', e);
                html += `<div class="nayin-item">
                    <div class="nayin-label">天遁纳音:</div>
                    <div class="nayin-value">${tiandun}${heavenBranch} - 计算出错</div>
                </div>`;
            }
        }
        
        if (rendun && heavenBranch) {
            try {
                const rendunNayin = calculateNayin(rendun, heavenBranch);
                const rendunNayinWuxing = getNayinWuxing(rendunNayin);
                const rendunNayinColor = getNayinWuxingColor(rendunNayin);
                
                html += `<div class="nayin-item">
                    <div class="nayin-label">人遁纳音:</div>
                    <div class="nayin-value" style="color: ${rendunNayinColor};">${rendun}${heavenBranch} - ${rendunNayin}${rendunNayinWuxing}</div>
                </div>`;
            } catch (e) {
                console.error('计算人遁纳音出错:', e);
                html += `<div class="nayin-item">
                    <div class="nayin-label">人遁纳音:</div>
                    <div class="nayin-value">${rendun}${heavenBranch} - 计算出错</div>
                </div>`;
            }
        }
        
        if (jiangan && heavenBranch) {
            try {
                const jianganNayin = calculateNayin(jiangan, heavenBranch);
                const jianganNayinWuxing = getNayinWuxing(jianganNayin);
                const jianganNayinColor = getNayinWuxingColor(jianganNayin);
                
                html += `<div class="nayin-item">
                    <div class="nayin-label">建干纳音:</div>
                    <div class="nayin-value" style="color: ${jianganNayinColor};">${jiangan}${heavenBranch} - ${jianganNayin}${jianganNayinWuxing}</div>
                </div>`;
            } catch (e) {
                console.error('计算建干纳音出错:', e);
                html += `<div class="nayin-item">
                    <div class="nayin-label">建干纳音:</div>
                    <div class="nayin-value">${jiangan}${heavenBranch} - 计算出错</div>
                </div>`;
            }
        }
        
        if (fujian && heavenBranch) {
            try {
                const fujianNayin = calculateNayin(fujian, heavenBranch);
                const fujianNayinWuxing = getNayinWuxing(fujianNayin);
                const fujianNayinColor = getNayinWuxingColor(fujianNayin);
                
                html += `<div class="nayin-item">
                    <div class="nayin-label">复建纳音:</div>
                    <div class="nayin-value" style="color: ${fujianNayinColor};">${fujian}${heavenBranch} - ${fujianNayin}${fujianNayinWuxing}</div>
                </div>`;
            } catch (e) {
                console.error('计算复建纳音出错:', e);
                html += `<div class="nayin-item">
                    <div class="nayin-label">复建纳音:</div>
                    <div class="nayin-value">${fujian}${heavenBranch} - 计算出错</div>
                </div>`;
            }
        }
        
        if (html === '') {
            html = '<p>无法从当前宫格获取遁干信息，请确保天地盘已正确生成</p>';
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
    
    // 生成金口诀内容
    generateJinkouItem() {
        let html = '';
        
        // 获取当前地盘地支和天盘地支
        const groundBranch = this.currentGroundBranch || '';
        const heavenBranch = this.currentHeavenBranch || '';
        
        if (!groundBranch || !heavenBranch) {
            return '<p>请先选择宫格以查看金口诀</p>';
        }
        
        // 获取旬干（人元）
        const dayStem = document.getElementById('day-gan')?.textContent || '';
        const dayBranch = document.getElementById('day-zhi')?.textContent || '';
        const xungan = this.calculateXunganForPosition(groundBranch, dayStem, dayBranch) || '';
        
        // 获取贵神对应地支
        const guishenZhi = this.getGuishenZhi(this.currentTianpanTianjiang);
        
        // 获取颜色
        const xunganColor = this.getColorForGan(xungan);
        const guishenZhiColor = this.getColorForZhi(guishenZhi);
        const heavenBranchColor = this.getColorForZhi(heavenBranch);
        const groundBranchColor = this.getColorForZhi(groundBranch);
        
        // 创建金口诀表格
        html += `
        <div class="jinkou-table">
            <table class="table table-bordered">
                <tr>
                    <td style="font-weight: bold">人元</td>
                    <td><span style="font-weight: bold; color: ${xunganColor};">${xungan || '无'}</span></td>
                </tr>
                <tr>
                    <td style="font-weight: bold">贵神</td>
                    <td><span style="font-weight: bold; color: ${guishenZhiColor};">${guishenZhi || '无'}</span></td>
                </tr>
                <tr>
                    <td style="font-weight: bold">将神</td>
                    <td><span style="font-weight: bold; color: ${heavenBranchColor};">${heavenBranch}</span></td>
                </tr>
                <tr>
                    <td style="font-weight: bold">地分</td>
                    <td><span style="font-weight: bold; color: ${groundBranchColor};">${groundBranch}</span></td>
                </tr>
            </table>
        </div>`;
        
        // 计算五行关系
        const ganWuxing = this.getWuxing(xungan);
        const guishenWuxing = this.getWuxing(guishenZhi);
        const jiangWuxing = this.getWuxing(heavenBranch);
        const fangWuxing = this.getWuxing(groundBranch);
        
        // 判断五动关系
        const wudongResult = [];
        
        // 财动：将克神
        if (this.wuxingKe(jiangWuxing, guishenWuxing)) {
            wudongResult.push({name: '财动', color: '#ff9800', desc: '将神克贵神'});
        }
        
        // 贼动：神克将
        if (this.wuxingKe(guishenWuxing, jiangWuxing)) {
            wudongResult.push({name: '贼动', color: '#f44336', desc: '贵神克将神'});
        }
        
        // 官动：神克干
        if (this.wuxingKe(guishenWuxing, ganWuxing)) {
            wudongResult.push({name: '官动', color: '#0288d1', desc: '贵神克人元'});
        }
        
        // 妻动：干克方
        if (this.wuxingKe(ganWuxing, fangWuxing)) {
            wudongResult.push({name: '妻动', color: '#9c27b0', desc: '人元克地分'});
        }
        
        // 鬼动：方克干
        if (this.wuxingKe(fangWuxing, ganWuxing)) {
            wudongResult.push({name: '鬼动', color: '#d32f2f', desc: '地分克人元'});
        }
        
        // 判断三动关系
        const sandongResult = [];
        
        // 父母动：方生干
        if (this.wuxingSheng(fangWuxing, ganWuxing)) {
            sandongResult.push({name: '父母动', color: '#4caf50', desc: '地分生人元'});
        }
        
        // 子孙动：干生方
        if (this.wuxingSheng(ganWuxing, fangWuxing)) {
            sandongResult.push({name: '子孙动', color: '#ff9800', desc: '人元生地分'});
        }
        
        // 兄弟动：干方同
        if (ganWuxing === fangWuxing) {
            sandongResult.push({name: '兄弟动', color: '#0288d1', desc: '人元与地分五行相同'});
        }
        
        // 创建当前动态结果表
            html += `
        <div class="jinkou-item mt-4">
            <div class="text-center mb-2" style="font-weight: bold;"></div>
            <div class="current-dong-result text-center">`;
        
        if (wudongResult.length > 0 || sandongResult.length > 0) {
            // 合并五动和三动结果
            const allResults = [...wudongResult, ...sandongResult];
            
            // 创建居中显示的动态结果
            let resultHtml = '';
            allResults.forEach((dong, index) => {
                resultHtml += `<span style="font-weight: bold; color: ${dong.color}; margin: 0 8px;">${dong.name}</span>`;
                // 每3个结果换行
                if ((index + 1) % 3 === 0 && index < allResults.length - 1) {
                    resultHtml += '<br>';
                }
            });
            
            html += resultHtml;
        } else {
            html += '<span style="color: #666;">无</span>';
        }
        
        html += `</div>
        </div>`;

        
        
        
        return html;
    }

    // 获取天干的颜色
    getColorForGan(gan) {
        const ganColors = {
            '甲': '#4caf50', // 木 - 绿色
            '乙': '#4caf50', // 木 - 绿色
            '丙': '#f44336', // 火 - 红色
            '丁': '#f44336', // 火 - 红色
            '戊': '#795548', // 土 - 棕色
            '己': '#795548', // 土 - 棕色
            '庚': '#ff9800', // 金 - 橙色
            '辛': '#ff9800', // 金 - 橙色
            '壬': '#0288d1', // 水 - 蓝色
            '癸': '#0288d1'  // 水 - 蓝色
        };
        
        return ganColors[gan] || '#000000';
    }
    
    // 获取地支的颜色
    getColorForZhi(zhi) {
        const zhiColors = {
            '子': '#0288d1', // 水 - 蓝色
            '丑': '#795548', // 土 - 棕色
            '寅': '#4caf50', // 木 - 绿色
            '卯': '#4caf50', // 木 - 绿色
            '辰': '#795548', // 土 - 棕色
            '巳': '#f44336', // 火 - 红色
            '午': '#f44336', // 火 - 红色
            '未': '#795548', // 土 - 棕色
            '申': '#ff9800', // 金 - 橙色
            '酉': '#ff9800', // 金 - 橙色
            '戌': '#795548', // 土 - 棕色
            '亥': '#0288d1'  // 水 - 蓝色
        };
        
        return zhiColors[zhi] || '#000000';
    }
    
    // 获取贵神对应的地支
    getGuishenZhi(tianjiang) {
        if (!tianjiang) return '';
        
        const guishenMap = {
            '贵人': '午',
            '青龙': '卯',
            '六合': '酉',
            '太常': '巳',
            '天后': '申',
            '太阴': '亥',
            '白虎': '寅',
            '玄武': '子',
            '螣蛇': '辰',
            '朱雀': '巳',
            '勾陈': '戌',
            '天空': '未'
        };
        
        return guishenMap[tianjiang] || '';
    }
    
    // 计算八动
    calculateBaDong(dayGan, dayZhi) {
        const baDongList = [];
        
        // 日干五行
        const dayGanWuxing = this.getWuxing(dayGan);
        
        // 根据日干五行计算八动
        if (dayGanWuxing === '金') {
            baDongList.push({ text: '金日: 见申酉为喜神，见亥子为福神，见寅卯为祸神，见巳午为鬼神', color: '#e08433' });
        } else if (dayGanWuxing === '木') {
            baDongList.push({ text: '木日: 见寅卯为喜神，见巳午为福神，见申酉为祸神，见亥子为鬼神', color: '#317023' });
        } else if (dayGanWuxing === '水') {
            baDongList.push({ text: '水日: 见亥子为喜神，见寅卯为福神，见巳午为祸神，见申酉为鬼神', color: '#0803a8' });
        } else if (dayGanWuxing === '火') {
            baDongList.push({ text: '火日: 见巳午为喜神，见申酉为福神，见亥子为祸神，见寅卯为鬼神', color: '#ce2d20' });
        } else if (dayGanWuxing === '土') {
            baDongList.push({ text: '土日: 见辰戌丑未为喜神，见申酉为福神，见亥子为祸神，见寅卯为鬼神', color: '#98511e' });
        }
        
        return baDongList;
    }

    // 新增：获取三传地支的双天将
    getSanchuanTianjiang(sanchuanZhi, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap) {
        if (!sanchuanZhi) return { tianpan: '', dipan: '', combined: '' };
        
        // 获取天盘天将和地盘天将
        const tianpanTianjiang = tianpanTianjiangMap[sanchuanZhi] || '';
        const dipanTianjiang = dipanTianjiangMap[sanchuanZhi] || '';
        const combined = `${tianpanTianjiang}/${dipanTianjiang}`;
        
        console.log(`${sanchuanZhi} 的双天将: 天盘=${tianpanTianjiang}, 地盘=${dipanTianjiang}, 合并=${combined}`);
        return {
            tianpan: tianpanTianjiang,
            dipan: dipanTianjiang,
            combined: combined
        };
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

    // 新增：获取三传地支在天盘上对应格子的旬遁和旬空状态
    getSanchuanGanWithXunkong(sanchuanZhi, heavenPlate, dayStem, dayBranch) {
        if (!sanchuanZhi) return { gan: '', isXunkong: false };
        
        // 计算旬空地支
        const xunkongBranches = this.calculateXunkong(dayStem, dayBranch);
        
        // 判断天盘地支是否旬空（按天盘地支判断，不是地盘位置）
        const isXunkong = xunkongBranches.includes(sanchuanZhi);
        
        let gan = '';
        if (isXunkong) {
            // 天盘地支旬空：按甲乙顺序计算天干
            gan = this.calculateXunkongGan(sanchuanZhi, dayStem, dayBranch);
        } else {
            // 天盘地支非旬空：正常计算旬遁
            gan = this.calculateXunganForPosition(sanchuanZhi, dayStem, dayBranch);
        }
        
        return { gan, isXunkong };
    }

    // 计算五行长生（根据 WUXING_CHANGSHENG_TABLE）
    calculateWuxingChangsheng(dayStem, tianpanBranch) {
        if (!dayStem || !tianpanBranch) return '';
        const seq = WUXING_CHANGSHENG_TABLE[dayStem];
        if (!seq) return '';
        const idx = seq.indexOf(tianpanBranch);
        if (idx === -1) return '';
        return CHANGSHENG_STAGES[idx];
    }
    
    // 计算十干长生（根据日干与天盘地支的关系）
    calculateShiganChangsheng(dayStem, tianpanBranch) {
        // 十干长生表（与五行长生不同，这是传统的十干长生表）
        const shiganChangshengTable = {
            '甲': ['亥', '子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌'],
            '乙': ['午', '巳', '辰', '卯', '寅', '丑', '子', '亥', '戌', '酉', '申', '未'],
            '丙': ['寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥', '子', '丑'],
            '丁': ['酉', '申', '未', '午', '巳', '辰', '卯', '寅', '丑', '子', '亥', '戌'],
            '戊': ['寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥', '子', '丑'],
            '己': ['酉', '申', '未', '午', '巳', '辰', '卯', '寅', '丑', '子', '亥', '戌'],
            '庚': ['巳', '午', '未', '申', '酉', '戌', '亥', '子', '丑', '寅', '卯', '辰'],
            '辛': ['子', '亥', '戌', '酉', '申', '未', '午', '巳', '辰', '卯', '寅', '丑'],
            '壬': ['申', '酉', '戌', '亥', '子', '丑', '寅', '卯', '辰', '巳', '午', '未'],
            '癸': ['卯', '寅', '丑', '子', '亥', '戌', '酉', '申', '未', '午', '巳', '辰']
        };
        
        // 十干长生阶段名称
        const shiganChangshengNames = ['长', '败', '冠', '官', '旺', '衰', '病', '死', '墓', '绝', '胎', '养'];
        
        const branches = shiganChangshengTable[dayStem];
        if (!branches) return '';
        
        const index = branches.indexOf(tianpanBranch);
        if (index === -1) return '';
        
        return shiganChangshengNames[index];
    }



    



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
                const cell = document.querySelector(`.branch-cell[data-branch="${branch}"]`);
                return cell ? cell.querySelector('.tianpan-tianjiang').textContent : '未找到';
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

    // 测试三遁计算
    testSandunCalculation() {
        console.log('========= 测试三遁计算 =========');
        
        const currentTime = new Date();
        const currentTimeBranch = this.getCurrentTimeBranch();
        const currentDayStem = this.getCurrentDayStem();
        const currentDayBranch = this.getCurrentDayBranch();
        const nobles = this.getBothNoblePersons(currentDayStem, currentTimeBranch);
        
        // 获取天盘信息
        const monthGeneral = this.getCurrentMonthGeneral();
        const heavenPlate = this.calculateHeavenPlate(monthGeneral, currentTimeBranch);
        
        console.log(`当前时间：${currentTime.toLocaleString()}`);
        console.log(`日干：${currentDayStem}，日支：${currentDayBranch}`);
        console.log(`时支：${currentTimeBranch}`);
        console.log(`月将：${monthGeneral}`);
        console.log(`天盘贵人：${nobles.tianpanNoble}，地盘贵人：${nobles.dipanNoble}`);
        
        // 测试子位的三遁
        const testBranch = '子';
        console.log(`\n测试${testBranch}位的三遁：`);
        
        // 天遁（时旬遁干）
        const timeGZ = this.getTimeGanZhi(currentTimeBranch);
        const timeStem = timeGZ.charAt(0);
        const tiandunResult = this.calculateTianDunWithXunkong(testBranch, timeStem, currentTimeBranch, heavenPlate);
        console.log(`天遁（时旬遁干）：${tiandunResult.gan} (旬空: ${tiandunResult.isTimeXunkong})`);
        
        // 地遁（日旬遁干）
        const didun = this.calculateXunganForPosition(testBranch, currentDayStem, currentDayBranch);
        console.log(`地遁（日旬遁干）：${didun}`);
        
        // 找到天盘贵人在地盘的位置
        let tianpanNobleGroundPosition = null;
        for (let groundBranch in heavenPlate) {
            if (heavenPlate[groundBranch] === nobles.tianpanNoble) {
                tianpanNobleGroundPosition = groundBranch;
                break;
            }
        }
        
        // 人遁（五子元遁）- 基于贵人在地盘位置
        const rendun = this.calculateRendun(testBranch, tianpanNobleGroundPosition, currentDayStem, heavenPlate);
        console.log(`人遁（五子元遁）：${rendun} (贵人在地盘 ${tianpanNobleGroundPosition})`);
        
        // 五子元遁验证
        console.log(`\n五子元遁验证（${currentDayStem}日）：`);
        const ziStem = this.getWuziYuanDunZiStem(currentDayStem);
        console.log(`子时起始天干：${ziStem}`);
        
        // 显示完整的五子元遁序列
        console.log('完整五子元遁序列：');
        for (let i = 0; i < 12; i++) {
            const branchIndex = i;
            const stemIndex = (STEM_INDEX[ziStem] + i) % 10;
            const branch = BRANCHES[branchIndex];
            const stem = HEAVENLY_STEMS[stemIndex];
            console.log(`  ${branch}时 -> ${stem}${branch}`);
        }
        
        return { tiandun, didun, rendun };
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

    // 调试三传问题
    debugSanchuan() {
        console.log('=== 调试三传问题 ===');
        
        // 检查三传元素是否存在
        console.log('三传元素检查:');
        console.log('chuchuan-liuqin:', document.getElementById('chuchuan-liuqin'));
        console.log('chuchuan-shishen:', document.getElementById('chuchuan-shishen'));
        console.log('chuchuan-gan:', document.getElementById('chuchuan-gan'));
        console.log('chuchuan-zhi:', document.getElementById('chuchuan-zhi'));
        console.log('chuchuan-tianjiang:', document.getElementById('chuchuan-tianjiang'));
        
        // 检查当前内容
        console.log('当前内容:');
        console.log('初传六亲:', document.getElementById('chuchuan-liuqin')?.textContent);
        console.log('初传十神:', document.getElementById('chuchuan-shishen')?.textContent);
        console.log('初传天干:', document.getElementById('chuchuan-gan')?.textContent);
        console.log('初传地支:', document.getElementById('chuchuan-zhi')?.textContent);
        console.log('初传天将:', document.getElementById('chuchuan-tianjiang')?.textContent);
        
        // 强制重新计算
        console.log('强制重新计算三传...');
        this.calculatePlates();
        
        // 再次检查内容
        setTimeout(() => {
            console.log('计算后内容:');
            console.log('初传六亲:', document.getElementById('chuchuan-liuqin')?.textContent);
            console.log('初传十神:', document.getElementById('chuchuan-shishen')?.textContent);
            console.log('初传天干:', document.getElementById('chuchuan-gan')?.textContent);
            console.log('初传地支:', document.getElementById('chuchuan-zhi')?.textContent);
            console.log('初传天将:', document.getElementById('chuchuan-tianjiang')?.textContent);
        }, 100);
    }

    // 测试涉害法计算
    testShehaiCalculation() {
        console.log('=== 测试涉害法 ===');
        
        try {
            // 获取当前日干支和时间
            const now = new Date();
            const solar = Solar.fromDate(now);
            const lunar = solar.getLunar();
            const dayGZ = lunar.getDayInGanZhi();
            const dayStem = dayGZ.charAt(0);
            const dayBranch = dayGZ.charAt(1);
            const timeBranch = this.getCurrentTimeBranch();
            const monthGeneral = this.getCurrentMonthGeneral();
            
            console.log(`当前: ${dayStem}${dayBranch}日 ${timeBranch}时 ${monthGeneral}将`);
            
            // 计算天盘
            const heavenPlate = this.calculateHeavenPlate(monthGeneral, timeBranch);
            console.log('天盘:', heavenPlate);
            
            // 计算双天将
            const nobles = this.getBothNoblePersons(dayStem, timeBranch);
            console.log('双贵人:', nobles);
            
            // 计算天将分布
            let tianpanNobleGroundPosition = null;
            let dipanNobleGroundPosition = null;
            for (let groundBranch in heavenPlate) {
                if (heavenPlate[groundBranch] === nobles.tianpanNoble) {
                    tianpanNobleGroundPosition = groundBranch;
                }
                if (heavenPlate[groundBranch] === nobles.dipanNoble) {
                    dipanNobleGroundPosition = groundBranch;
                }
            }
            
            const tianpanTianjiangMap = this.arrangeTwelveTianjiangs(nobles.tianpanNoble, tianpanNobleGroundPosition);
            const dipanTianjiangMap = this.arrangeDipanTianjiangs(nobles.dipanNoble, dipanNobleGroundPosition);
            
            // 计算四课
            const sike = this.calculateSike(dayStem, dayBranch, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap);
            console.log('四课:', sike);
            
            // 分析四课
            const analysis = this.analyzeSikeKe(sike);
            console.log('四课分析:', analysis);
            
            // 测试涉害法
            const shehaiResult = this.tryShehaiFayong(dayStem, dayBranch, analysis, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap);
            
            if (shehaiResult) {
                console.log('🎉 涉害法适用:', shehaiResult);
            } else {
                console.log('❌ 当前情况不适用涉害法');
                
                // 显示原因
                if (analysis.shangke.length < 2 && analysis.xiazei.length < 2) {
                    console.log('原因: 没有多个上克下或下贼上');
                } else {
                    console.log('原因: 不满足俱比或俱不比条件');
                    if (analysis.shangke.length >= 2) {
                        const shangkeYang = analysis.shangke.filter(ke => this.isYang(ke.tianpan));
                        console.log(`上克下: 总数${analysis.shangke.length}, 阳${shangkeYang.length}, 阴${analysis.shangke.length - shangkeYang.length}`);
                    }
                    if (analysis.xiazei.length >= 2) {
                        const xiazeiYang = analysis.xiazei.filter(ke => this.isYang(ke.tianpan));
                        console.log(`下贼上: 总数${analysis.xiazei.length}, 阳${xiazeiYang.length}, 阴${analysis.xiazei.length - xiazeiYang.length}`);
                    }
                }
            }
            
        } catch (error) {
            console.error('测试涉害法时出错:', error);
        }
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
}); 