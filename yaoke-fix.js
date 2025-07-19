// 遥克法修复
// 替换script.js中的tryYaokeFayong方法

function tryYaokeFayong(dayStem, dayBranch, sike, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap) {
    // 检查是否满足遥克条件：一二三四课中，没有下克上，也没有上克下
    const analysis = this.analyzeSikeKe(sike);
    
    // 如果存在上下贼克，不符合遥克条件
    if (analysis.shangke.length > 0 || analysis.xiazei.length > 0) {
        console.log('存在上下贼克关系，不符合遥克条件');
        return null;
    }
    
    console.log('检测到遥克条件：四课中无上下贼克');
    
    // 获取干阴、支上、支阴
    const ganYin = sike.ke2.top; // 干阴
    const zhiShang = sike.ke3.top; // 支上
    const zhiYin = sike.ke4.top; // 支阴
    
    // 检查是否有克日干的
    const keRigan = [];
    
    // 检查干阴是否克日干
    if (this.isShangKe(ganYin, dayStem)) {
        keRigan.push({
            zhi: ganYin,
            type: '干阴',
            isYang: this.isYang(ganYin)
        });
    }
    
    // 检查支上是否克日干
    if (this.isShangKe(zhiShang, dayStem)) {
        keRigan.push({
            zhi: zhiShang,
            type: '支上',
            isYang: this.isYang(zhiShang)
        });
    }
    
    // 检查支阴是否克日干
    if (this.isShangKe(zhiYin, dayStem)) {
        keRigan.push({
            zhi: zhiYin,
            type: '支阴',
            isYang: this.isYang(zhiYin)
        });
    }
    
    // 检查日干是否克干阴、支上、支阴
    const riganKe = [];
    
    // 检查日干是否克干阴
    if (this.isShangKe(dayStem, ganYin)) {
        riganKe.push({
            zhi: ganYin,
            type: '干阴',
            isYang: this.isYang(ganYin)
        });
    }
    
    // 检查日干是否克支上
    if (this.isShangKe(dayStem, zhiShang)) {
        riganKe.push({
            zhi: zhiShang,
            type: '支上',
            isYang: this.isYang(zhiShang)
        });
    }
    
    // 检查日干是否克支阴
    if (this.isShangKe(dayStem, zhiYin)) {
        riganKe.push({
            zhi: zhiYin,
            type: '支阴',
            isYang: this.isYang(zhiYin)
        });
    }
    
    // 确定初传
    let chuchuan = null;
    
    // 先看二三四课来克日干者
    if (keRigan.length > 0) {
        console.log('有课克日干，优先使用');
        
        if (keRigan.length === 1) {
            // 只有一个克日干的，直接用它
            chuchuan = keRigan[0].zhi;
            console.log(`只有一个课(${keRigan[0].type}: ${chuchuan})克日干，用它作为初传`);
        } else {
            // 有多个克日干的，根据日干阴阳选择
            const isYangDay = this.isYang(dayStem);
            console.log(`日干${dayStem}是${isYangDay ? '阳' : '阴'}日`);
            
            // 阳日用阳，阴日用阴
            const filtered = keRigan.filter(item => item.isYang === isYangDay);
            
            if (filtered.length > 0) {
                // 找到了符合阴阳的
                chuchuan = filtered[0].zhi;
                console.log(`多个课克日干，${isYangDay ? '阳' : '阴'}日选择${filtered[0].type}: ${chuchuan}作为初传`);
            } else {
                // 没找到符合阴阳的，用第一个
                chuchuan = keRigan[0].zhi;
                console.log(`多个课克日干，但没有${isYangDay ? '阳' : '阴'}课，选择${keRigan[0].type}: ${chuchuan}作为初传`);
            }
        }
    } 
    // 再看日干来克二三四课
    else if (riganKe.length > 0) {
        console.log('没有课克日干，但有日干克课');
        
        if (riganKe.length === 1) {
            // 只有一个被日干克的，直接用它
            chuchuan = riganKe[0].zhi;
            console.log(`只有一个课(${riganKe[0].type}: ${chuchuan})被日干克，用它作为初传`);
        } else {
            // 有多个被日干克的，根据日干阴阳选择
            const isYangDay = this.isYang(dayStem);
            console.log(`日干${dayStem}是${isYangDay ? '阳' : '阴'}日`);
            
            // 阳日用阳，阴日用阴
            const filtered = riganKe.filter(item => item.isYang === isYangDay);
            
            if (filtered.length > 0) {
                // 找到了符合阴阳的
                chuchuan = filtered[0].zhi;
                console.log(`多个课被日干克，${isYangDay ? '阳' : '阴'}日选择${filtered[0].type}: ${chuchuan}作为初传`);
            } else {
                // 没找到符合阴阳的，用第一个
                chuchuan = riganKe[0].zhi;
                console.log(`多个课被日干克，但没有${isYangDay ? '阳' : '阴'}课，选择${riganKe[0].type}: ${chuchuan}作为初传`);
            }
        }
    } else {
        console.log('没有遥克关系，不符合遥克条件');
        return null;
    }
    
    // 如果找到了初传，计算中传和末传
    if (chuchuan) {
        // 中传为初传的上神
        const zhongchuan = heavenPlate[chuchuan] || '';
        
        // 末传为中传的上神
        const mochuan = heavenPlate[zhongchuan] || '';
        
        console.log(`遥克三传：初传=${chuchuan}，中传=${zhongchuan}，末传=${mochuan}`);
        
        return this.createSanchuan(chuchuan, heavenPlate, tianpanTianjiangMap, dipanTianjiangMap, '遥克', dayStem, dayBranch);
    }
    
    return null;
}

// 将修复后的方法应用到DaLiuRenCalculator类
window.applyYaokeFix = function() {
    if (window.calculator && typeof window.calculator.tryYaokeFayong === 'function') {
        console.log('正在应用遥克法修复...');
        window.calculator.tryYaokeFayong = tryYaokeFayong;
        console.log('遥克法修复已应用');
    } else {
        console.error('无法应用遥克法修复，calculator对象不存在或没有tryYaokeFayong方法');
    }
};

// 页面加载完成后自动应用修复
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        window.applyYaokeFix();
    }, 1000); // 延迟1秒应用修复，确保calculator已初始化
}); 