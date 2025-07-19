// 反吟法修复
// 替换script.js中的tryFanyinFayong方法

function tryFanyinFayong(dayStem, dayBranch, sike, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap) {
    // 检查是否满足反吟条件：天盘地盘相冲
    const tianpanZhi = heavenPlate[dayBranch];
    
    // 检查天盘地盘是否相冲
    if (this.isChong(tianpanZhi, dayBranch)) {
        console.log(`检测到反吟：天盘地支${tianpanZhi}与地盘地支${dayBranch}相冲`);
        
        // 修改后的反吟规则：
        // 1. 如果四课中有贼克，以贼克为初传，初传上神为中传，中传上神为末传
        // 2. 如果四课无贼克，则以日支的驿马为初传，日支上神为中传，日干上神为末传
        
        // 分析四课贼克情况
        const analysis = this.analyzeSikeKe(sike);
        const hasZeiKe = analysis.shangke.length > 0 || analysis.xiazei.length > 0;
        
        if (hasZeiKe) {
            console.log('四课中有贼克，以贼克为初传');
            
            // 优先使用上贼（上克），其次使用下贼（下克）
            let keInfo;
            if (analysis.shangke.length > 0) {
                keInfo = analysis.shangke[0];
                console.log(`使用上贼：${keInfo.tianpan}克${keInfo.dipan}`);
            } else {
                keInfo = analysis.xiazei[0];
                console.log(`使用下贼：${keInfo.dipan}克${keInfo.tianpan}`);
            }
            
            // 初传为贼克课的天盘
            const chuchuan = keInfo.tianpan;
            
            // 中传为初传上神
            const zhongchuan = heavenPlate[chuchuan] || '';
            
            // 末传为中传上神
            const mochuan = heavenPlate[zhongchuan] || '';
            
            console.log(`反吟三传：初传=${chuchuan}，中传=${zhongchuan}，末传=${mochuan}`);
            
            return this.createSanchuan(chuchuan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap, '反吟-贼克', dayStem, dayBranch);
        } else {
            console.log('四课中无贼克，以日支驿马为初传');
            
            // 获取日支的驿马
            const yima = this.getYima(dayBranch);
            
            // 中传为日支上神
            const zhongchuan = heavenPlate[dayBranch] || '';
            
            // 末传为日干上神
            const mochuan = sike.ke1.top;
            
            console.log(`反吟三传：初传=${yima}(日支${dayBranch}的驿马)，中传=${zhongchuan}(日支上神)，末传=${mochuan}(日干上神)`);
            
            // 创建三传
            return {
                chuchuan: { 
                    gan: this.getSanchuanGanWithXunkong(yima, heavenPlate, dayStem, dayBranch).gan, 
                    zhi: yima, 
                    tianjiang: this.getSanchuanTianjiang(yima, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap).combined,
                    tianpanTianjiang: this.getSanchuanTianjiang(yima, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap).tianpan,
                    dipanTianjiang: this.getSanchuanTianjiang(yima, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap).dipan,
                    isXunkong: this.getSanchuanGanWithXunkong(yima, heavenPlate, dayStem, dayBranch).isXunkong
                },
                zhongchuan: { 
                    gan: this.getSanchuanGanWithXunkong(zhongchuan, heavenPlate, dayStem, dayBranch).gan, 
                    zhi: zhongchuan, 
                    tianjiang: this.getSanchuanTianjiang(zhongchuan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap).combined,
                    tianpanTianjiang: this.getSanchuanTianjiang(zhongchuan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap).tianpan,
                    dipanTianjiang: this.getSanchuanTianjiang(zhongchuan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap).dipan,
                    isXunkong: this.getSanchuanGanWithXunkong(zhongchuan, heavenPlate, dayStem, dayBranch).isXunkong
                },
                mochuan: { 
                    gan: this.getSanchuanGanWithXunkong(mochuan, heavenPlate, dayStem, dayBranch).gan, 
                    zhi: mochuan, 
                    tianjiang: this.getSanchuanTianjiang(mochuan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap).combined,
                    tianpanTianjiang: this.getSanchuanTianjiang(mochuan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap).tianpan,
                    dipanTianjiang: this.getSanchuanTianjiang(mochuan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap).dipan,
                    isXunkong: this.getSanchuanGanWithXunkong(mochuan, heavenPlate, dayStem, dayBranch).isXunkong
                },
                kege: '反吟-驿马'
            };
        }
    }
    
    return null;
}

// 获取地支的驿马
function getYima(branch) {
    // 申、子、辰驿马在寅
    if (['申', '子', '辰'].includes(branch)) {
        return '寅';
    }
    // 寅、午、戌驿马在申
    else if (['寅', '午', '戌'].includes(branch)) {
        return '申';
    }
    // 巳、酉、丑驿马在亥
    else if (['巳', '酉', '丑'].includes(branch)) {
        return '亥';
    }
    // 亥、卯、未驿马在巳
    else if (['亥', '卯', '未'].includes(branch)) {
        return '巳';
    }
    
    // 默认返回原地支（理论上不会走到这一步）
    return branch;
}

// 检查两个地支是否相冲
function isChong(zhi1, zhi2) {
    const chongPairs = [
        ['子', '午'],
        ['丑', '未'],
        ['寅', '申'],
        ['卯', '酉'],
        ['辰', '戌'],
        ['巳', '亥']
    ];
    
    for (const pair of chongPairs) {
        if ((pair[0] === zhi1 && pair[1] === zhi2) || (pair[1] === zhi1 && pair[0] === zhi2)) {
            return true;
        }
    }
    
    return false;
}

// 将修复后的方法应用到DaLiuRenCalculator类
window.applyFanyinFix = function() {
    if (window.calculator && typeof window.calculator.tryFanyinFayong === 'function') {
        console.log('正在应用反吟法修复...');
        window.calculator.tryFanyinFayong = tryFanyinFayong;
        window.calculator.getYima = getYima;
        window.calculator.isChong = isChong;
        console.log('反吟法修复已应用');
    } else {
        console.error('无法应用反吟法修复，calculator对象不存在或没有tryFanyinFayong方法');
    }
};

// 页面加载完成后自动应用修复
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        window.applyFanyinFix();
    }, 1000); // 延迟1秒应用修复，确保calculator已初始化
}); 