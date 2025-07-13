// 十天干排列顺序
const HEAVENLY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];

// 十二地支排列顺序
const BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

// 天干对应的索引
const STEM_INDEX = {
    '甲': 0, '乙': 1, '丙': 2, '丁': 3, '戊': 4, '己': 5,
    '庚': 6, '辛': 7, '壬': 8, '癸': 9
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
    '贵人', '腾蛇', '朱雀', '六合', '勾陈', '青龙', 
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
    '腾蛇': '#ce2d20', '朱雀': '#ce2d20',  // 火
    '勾陈': '#98511e', '太常': '#98511e', '天空': '#98511e', '贵人': '#98511e',  // 土
    '天后': '#0803a8', '玄武': '#0803a8', '青龙': '#0803a8', '六合': '#0803a8',  // 水
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
    
    // 计算每个地盘位置的旬干
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
    
    // 排布十二天将
    arrangeTwelveTianjiangs(nobleGroundPosition) {
        const tianjiangMap = {};
        
        if (!nobleGroundPosition) {
            console.error('贵人位置未找到');
            return tianjiangMap;
        }
        
        const noblePosIndex = BRANCH_POSITIONS.indexOf(nobleGroundPosition);
        
        // 判断贵人位置决定排布方向
        // 传统规则：贵人在亥子丑寅卯辰时顺时针，在巳午未申酉戌时逆时针
        const clockwise = ['亥', '子', '丑', '寅', '卯', '辰'].includes(nobleGroundPosition);
        
        for (let i = 0; i < 12; i++) {
            let posIndex;
            if (clockwise) {
                // 顺时针排布
                posIndex = (noblePosIndex + i) % 12;
            } else {
                // 逆时针排布
                posIndex = (noblePosIndex - i + 12) % 12;
            }
            
            const branch = BRANCH_POSITIONS[posIndex];
            tianjiangMap[branch] = TWELVE_TIANJIANGS[i];
        }
        
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
            return this.createSanchuan(xiazei.tianpan, heavenPlate, tianjiangMap, '始入课');
        }
        
        // 2. 无下贼上，选择上克下（元首课）
        if (analysis.xiazei.length === 0 && analysis.shangke.length === 1) {
            const shangke = analysis.shangke[0];
            return this.createSanchuan(shangke.tianpan, heavenPlate, tianjiangMap, '元首课');
        }
        
        // 3. 有下贼上又有上克下（重审课）
        if (analysis.xiazei.length === 1 && analysis.shangke.length > 0) {
            const xiazei = analysis.xiazei[0];
            return this.createSanchuan(xiazei.tianpan, heavenPlate, tianjiangMap, '重审课');
        }
        
        return null;
    }

    // 比用法
    tryBiyongFayong(dayStem, dayBranch, analysis, heavenPlate, tianjiangMap) {
        // 多个下贼上或多个上克下时，按阴阳相比选择
        if (analysis.xiazei.length >= 2) {
            return this.selectByYinYang(dayStem, analysis.xiazei, heavenPlate, tianjiangMap, '比用课');
        }
        
        if (analysis.shangke.length >= 2) {
            return this.selectByYinYang(dayStem, analysis.shangke, heavenPlate, tianjiangMap, '知一课');
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
                    return this.createSanchuan(keRigan[0].tianpan, heavenPlate, tianjiangMap, '蒿矢');
                } else {
                    // 多个克日干时，按阴阳相比
                    return this.selectByYinYang(dayStem, keRigan, heavenPlate, tianjiangMap, '蒿矢');
                }
            }
            
            // 检查日干克二三四课（弹射）
            const riganKe = this.checkRiganKe(dayStem, sike);
            if (riganKe.length > 0) {
                if (riganKe.length === 1) {
                    return this.createSanchuan(riganKe[0].tianpan, heavenPlate, tianjiangMap, '弹射');
                } else {
                    // 多个被日干克时，按阴阳相比
                    return this.selectByYinYang(dayStem, riganKe, heavenPlate, tianjiangMap, '弹射');
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
                                        gan: this.getTianpanGan(youShangShen), 
                                        zhi: youShangShen, 
                                        tianjiang: tianjiangMap[youShangShen] || '' 
                                    },
                                    zhongchuan: { 
                                        gan: this.getTianpanGan(zhongchuan), 
                                        zhi: zhongchuan, 
                                        tianjiang: tianjiangMap[zhongchuan] || '' 
                                    },
                                    mochuan: { 
                                        gan: this.getTianpanGan(mochuan), 
                                        zhi: mochuan, 
                                        tianjiang: tianjiangMap[mochuan] || '' 
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
                                        gan: this.getTianpanGan(maoShangShen), 
                                        zhi: maoShangShen, 
                                        tianjiang: tianjiangMap[maoShangShen] || '' 
                                    },
                                    zhongchuan: { 
                                        gan: this.getTianpanGan(zhongchuan), 
                                        zhi: zhongchuan, 
                                        tianjiang: tianjiangMap[zhongchuan] || '' 
                                    },
                                    mochuan: { 
                                        gan: this.getTianpanGan(mochuan), 
                                        zhi: mochuan, 
                                        tianjiang: tianjiangMap[mochuan] || '' 
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
    createSanchuan(chuchuan, heavenPlate, tianjiangMap, kege) {
        const zhongchuan = heavenPlate[chuchuan] || '';
        const mochuan = heavenPlate[zhongchuan] || '';
        
        // 计算天盘对应的天干
        const chuchuanGan = this.getTianpanGan(chuchuan);
        const zhongchuanGan = this.getTianpanGan(zhongchuan);
        const mochuanGan = this.getTianpanGan(mochuan);
        
        return {
            chuchuan: { 
                gan: chuchuanGan, 
                zhi: chuchuan, 
                tianjiang: tianjiangMap[chuchuan] || '' 
            },
            zhongchuan: { 
                gan: zhongchuanGan, 
                zhi: zhongchuan, 
                tianjiang: tianjiangMap[zhongchuan] || '' 
            },
            mochuan: { 
                gan: mochuanGan, 
                zhi: mochuan, 
                tianjiang: tianjiangMap[mochuan] || '' 
            },
            kege: kege
        };
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
                        gan: this.getTianpanGan(chuchuan), 
                        zhi: chuchuan, 
                        tianjiang: tianjiangMap[chuchuan] || '' 
                    },
                    zhongchuan: { 
                        gan: this.getTianpanGan(zhongchuan), 
                        zhi: zhongchuan, 
                        tianjiang: tianjiangMap[zhongchuan] || '' 
                    },
                    mochuan: { 
                        gan: this.getTianpanGan(mochuan), 
                        zhi: mochuan, 
                        tianjiang: tianjiangMap[mochuan] || '' 
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
                        gan: this.getTianpanGan(chuchuan), 
                        zhi: chuchuan, 
                        tianjiang: tianjiangMap[chuchuan] || '' 
                    },
                    zhongchuan: { 
                        gan: this.getTianpanGan(zhongchuan), 
                        zhi: zhongchuan, 
                        tianjiang: tianjiangMap[zhongchuan] || '' 
                    },
                    mochuan: { 
                        gan: this.getTianpanGan(mochuan), 
                        zhi: mochuan, 
                        tianjiang: tianjiangMap[mochuan] || '' 
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
                        gan: this.getTianpanGan(chuchuan), 
                        zhi: chuchuan, 
                        tianjiang: tianjiangMap[chuchuan] || '' 
                    },
                    zhongchuan: { 
                        gan: this.getTianpanGan(zhongchuan), 
                        zhi: zhongchuan, 
                        tianjiang: tianjiangMap[zhongchuan] || '' 
                    },
                    mochuan: { 
                        gan: this.getTianpanGan(mochuan), 
                        zhi: mochuan, 
                        tianjiang: tianjiangMap[mochuan] || '' 
                    },
                    kege: '阳日伏吟'
                };
            } else {
                const chuchuan = sike.ke3.top;  // 支上
                const zhongchuan = sike.ke1.top; // 干上
                const mochuan = DIZHI_CHONG[chuchuan] || chuchuan; // 支上的对宫
                
                return {
                    chuchuan: { 
                        gan: this.getTianpanGan(chuchuan), 
                        zhi: chuchuan, 
                        tianjiang: tianjiangMap[chuchuan] || '' 
                    },
                    zhongchuan: { 
                        gan: this.getTianpanGan(zhongchuan), 
                        zhi: zhongchuan, 
                        tianjiang: tianjiangMap[zhongchuan] || '' 
                    },
                    mochuan: { 
                        gan: this.getTianpanGan(mochuan), 
                        zhi: mochuan, 
                        tianjiang: tianjiangMap[mochuan] || '' 
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
                        gan: this.getTianpanGan(chuchuan), 
                        zhi: chuchuan, 
                        tianjiang: tianjiangMap[chuchuan] || '' 
                    },
                    zhongchuan: { 
                        gan: this.getTianpanGan(zhongchuan), 
                        zhi: zhongchuan, 
                        tianjiang: tianjiangMap[zhongchuan] || '' 
                    },
                    mochuan: { 
                        gan: this.getTianpanGan(mochuan), 
                        zhi: mochuan, 
                        tianjiang: tianjiangMap[mochuan] || '' 
                    },
                    kege: '阳日反吟'
                };
            } else {
                const chuchuan = sike.ke3.top;  // 支上
                const zhongchuan = sike.ke1.top; // 干上
                const mochuan = DIZHI_CHONG[chuchuan] || chuchuan; // 支上的正冲
                
                return {
                    chuchuan: { 
                        gan: this.getTianpanGan(chuchuan), 
                        zhi: chuchuan, 
                        tianjiang: tianjiangMap[chuchuan] || '' 
                    },
                    zhongchuan: { 
                        gan: this.getTianpanGan(zhongchuan), 
                        zhi: zhongchuan, 
                        tianjiang: tianjiangMap[zhongchuan] || '' 
                    },
                    mochuan: { 
                        gan: this.getTianpanGan(mochuan), 
                        zhi: mochuan, 
                        tianjiang: tianjiangMap[mochuan] || '' 
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
                        gan: this.getTianpanGan(selectedCase.chuchuan), 
                        zhi: selectedCase.chuchuan, 
                        tianjiang: tianjiangMap[selectedCase.chuchuan] || '' 
                    },
                    zhongchuan: { 
                        gan: this.getTianpanGan(selectedCase.zhongchuan), 
                        zhi: selectedCase.zhongchuan, 
                        tianjiang: tianjiangMap[selectedCase.zhongchuan] || '' 
                    },
                    mochuan: { 
                        gan: this.getTianpanGan(selectedCase.mochuan), 
                        zhi: selectedCase.mochuan, 
                        tianjiang: tianjiangMap[selectedCase.mochuan] || '' 
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
                        gan: this.getTianpanGan(chuchuan), 
                        zhi: chuchuan, 
                        tianjiang: tianjiangMap[chuchuan] || '' 
                    },
                    zhongchuan: { 
                        gan: this.getTianpanGan(zhongchuan), 
                        zhi: zhongchuan, 
                        tianjiang: tianjiangMap[zhongchuan] || '' 
                    },
                    mochuan: { 
                        gan: this.getTianpanGan(mochuan), 
                        zhi: mochuan, 
                        tianjiang: tianjiangMap[mochuan] || '' 
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
                    gan: this.getTianpanGan(chuchuan), 
                    zhi: chuchuan, 
                    tianjiang: tianjiangMap[chuchuan] || '' 
                },
                zhongchuan: { 
                    gan: this.getTianpanGan(zhongchuan), 
                    zhi: zhongchuan, 
                    tianjiang: tianjiangMap[zhongchuan] || '' 
                },
                mochuan: { 
                    gan: this.getTianpanGan(mochuan), 
                    zhi: mochuan, 
                    tianjiang: tianjiangMap[mochuan] || '' 
                },
                kege: `日支${selectedRelation.relation}`
            };
        }
        
        return null;
    }

    // 完善按阴阳相比的选择逻辑
    selectByYinYang(dayStem, candidates, heavenPlate, tianjiangMap, kege) {
        const isYangRi = this.isYang(dayStem);
        
        // 先按阴阳相比过滤
        const matched = candidates.filter(c => this.isYang(c.tianpan) === isYangRi);
        
        if (matched.length === 1) {
            return this.createSanchuan(matched[0].tianpan, heavenPlate, tianjiangMap, kege);
        } else if (matched.length > 1) {
            // 多个匹配时，按孟仲季选择
            const mengzhongjiPriority = this.selectByMengZhongJi(matched, dayStem);
            if (mengzhongjiPriority) {
                return this.createSanchuan(mengzhongjiPriority.tianpan, heavenPlate, tianjiangMap, kege);
            }
            
            // 如果孟仲季也相同，取第一个
            return this.createSanchuan(matched[0].tianpan, heavenPlate, tianjiangMap, kege);
        } else {
            // 没有阴阳相比的，取第一个
            return this.createSanchuan(candidates[0].tianpan, heavenPlate, tianjiangMap, kege);
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

    // 计算六亲关系
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
            // 获取当前日干用于计算六亲和十神
            const now = new Date();
            const solar = Solar.fromDate(now);
            const lunar = solar.getLunar();
            const dayGZ = lunar.getDayInGanZhi();
            const dayStem = dayGZ.charAt(0);
            
            // 更新初传
            this.updateSanchuanItem(this.sanchuanElements.chuchuan, sanchuan.chuchuan, dayStem);
            
            // 更新中传
            this.updateSanchuanItem(this.sanchuanElements.zhongchuan, sanchuan.zhongchuan, dayStem);
            
            // 更新末传
            this.updateSanchuanItem(this.sanchuanElements.mochuan, sanchuan.mochuan, dayStem);
            
            console.log('三传更新完成:', sanchuan);
        } catch (error) {
            console.error('更新三传显示时出错:', error);
        }
    }

    // 更新单个三传项目
    updateSanchuanItem(elements, sanchuanData, dayStem) {
        // 计算六亲和十神
        const liuqin = this.calculateLiuqin(sanchuanData.gan, dayStem);
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
            
            // 找到天盘上贵人位置对应的地盘位置
            let nobleGroundPosition = null;
            for (let groundBranch in heavenPlate) {
                if (heavenPlate[groundBranch] === nobleBranch) {
                    nobleGroundPosition = groundBranch;
                    break;
                }
            }
            
            console.log('贵人在地盘的位置:', nobleGroundPosition);
            
            // 排布十二天将（从地盘的贵人位置开始）
            const tianjiangMap = this.arrangeTwelveTianjiangs(nobleGroundPosition);
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
                    
                    console.log(`处理地支 ${groundBranch}:`, {
                        isXunkong,
                        tianjiang: tianjiangMap[groundBranch]
                    });
                    
                    // 更新天将（天将在所有位置都显示，不受旬空影响）
                    const tianjiangElement = cell.querySelector('.tianjiang');
                    if (tianjiangElement) {
                        const oldContent = tianjiangElement.textContent;
                        const tianjiang = tianjiangMap[groundBranch] || '';
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
                        console.log(`${groundBranch} 设置天将: ${tianjiang} (原内容: ${oldContent} -> 新内容: ${tianjiangElement.textContent})`);
                    } else {
                        console.log(`${groundBranch} 找不到天将元素`);
                    }
                    
                    // 更新旬干
                    const xunganElement = cell.querySelector('.xungan');
                    if (xunganElement) {
                        if (isXunkong) {
                            xunganElement.textContent = ''; // 旬空位置空着
                            xunganElement.style.visibility = 'hidden';
                        } else {
                            const xungan = this.calculateXunganForPosition(groundBranch, dayStem, dayBranch);
                            xunganElement.textContent = xungan;
                            xunganElement.style.visibility = 'visible';
                            this.applyWuxingColor(xunganElement, xungan);
                            // 移除默认样式
                            xunganElement.style.border = 'none';
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
                const calculator = new DaLiuRenCalculator();
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
                    const calculator = new DaLiuRenCalculator();
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
        if (typeof window.daLiuRenCalculator === 'undefined') {
            console.log('强制初始化...');
            try {
                window.daLiuRenCalculator = new DaLiuRenCalculator();
            } catch (error) {
                console.error('强制初始化失败:', error);
            }
        }
    }, 5000);
}); 