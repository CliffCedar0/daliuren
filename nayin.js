// 纳音功能实现
class NayinManager {
    constructor(calculator) {
        this.calculator = calculator;
        this.initNayin();
    }

    // 初始化纳音功能
    initNayin() {
        // 监听排盘按钮点击，在排盘后更新纳音显示
        const calculateBtn = document.getElementById('calculate-btn');
        if (calculateBtn) {
            calculateBtn.addEventListener('click', () => {
                setTimeout(() => this.updateNayinDisplay(), 1000);
            });
        }

        // 监听生成图表按钮点击
        const generateChartBtn = document.getElementById('generate-chart-btn');
        if (generateChartBtn) {
            generateChartBtn.addEventListener('click', () => {
                setTimeout(() => this.updateNayinDisplay(), 1000);
            });
        }

        // 初始化时更新一次纳音显示
        setTimeout(() => this.updateNayinDisplay(), 1500);
    }

    // 更新所有格子中的纳音显示
    // updateNayinDisplay() {
    //     console.log('更新纳音显示...');
    //     document.querySelectorAll('.branch-cell').forEach(cell => {
    //         const tianpanBranch = cell.querySelector('.tianpan-branch')?.textContent;
    //         if (!tianpanBranch) return;

    //         // 更新人遁纳音
    //         this.updateCellNayin(cell, '.rendun-display', '.rendun-nayin', tianpanBranch);
            
    //         // 更新天遁纳音
    //         this.updateCellNayin(cell, '.tiandun-display', '.tiandun-nayin', tianpanBranch);
            
    //         // 更新旬遁纳音
    //         this.updateCellNayin(cell, '.xungan-display', '.xungan-nayin', tianpanBranch);
            
    //         // 更新建干纳音
    //         this.updateCellNayin(cell, '.jiangan', '.jiangan-nayin', tianpanBranch);
            
    //         // 更新复建纳音
    //         this.updateCellNayin(cell, '.fujian', '.fujian-nayin', tianpanBranch);
    //     });
    // }

    // 更新单个格子中的特定纳音
    updateCellNayin(cell, ganSelector, nayinSelector, tianpanBranch) {
        const ganElement = cell.querySelector(ganSelector);
        const nayinElement = cell.querySelector(nayinSelector);
        
        if (ganElement && nayinElement && ganElement.textContent) {
            const gan = ganElement.textContent;
            const nayin = this.calculateNayin(gan, tianpanBranch);
            const wuxing = this.getNayinWuxing(nayin);
            
            // 显示纳音
            nayinElement.textContent = nayin;
            nayinElement.style.display = 'block';
            
            // 应用五行颜色
            this.applyWuxingColor(nayinElement, wuxing);
        }
    }

    // 计算纳音
    calculateNayin(gan, zhi) {
        if (!gan || !zhi) return '';
        
        // 干支纳音表
        const nayinTable = {
            '甲子': '海中金', '乙丑': '海中金', '丙寅': '炉中火', '丁卯': '炉中火',
            '戊辰': '大林木', '己巳': '大林木', '庚午': '路旁土', '辛未': '路旁土',
            '壬申': '剑锋金', '癸酉': '剑锋金', '甲戌': '山头火', '乙亥': '山头火',
            '丙子': '涧下水', '丁丑': '涧下水', '戊寅': '城头土', '己卯': '城头土',
            '庚辰': '白蜡金', '辛巳': '白蜡金', '壬午': '杨柳木', '癸未': '杨柳木',
            '甲申': '泉中水', '乙酉': '泉中水', '丙戌': '屋上土', '丁亥': '屋上土',
            '戊子': '霹雳火', '己丑': '霹雳火', '庚寅': '松柏木', '辛卯': '松柏木',
            '壬辰': '长流水', '癸巳': '长流水', '甲午': '沙中金', '乙未': '沙中金',
            '丙申': '山下火', '丁酉': '山下火', '戊戌': '平地木', '己亥': '平地木',
            '庚子': '壁上土', '辛丑': '壁上土', '壬寅': '金箔金', '癸卯': '金箔金',
            '甲辰': '覆灯火', '乙巳': '覆灯火', '丙午': '天河水', '丁未': '天河水',
            '戊申': '大驿土', '己酉': '大驿土', '庚戌': '钗钏金', '辛亥': '钗钏金',
            '壬子': '桑柘木', '癸丑': '桑柘木', '甲寅': '大溪水', '乙卯': '大溪水',
            '丙辰': '沙中土', '丁巳': '沙中土', '戊午': '天上火', '己未': '天上火',
            '庚申': '石榴木', '辛酉': '石榴木', '壬戌': '大海水', '癸亥': '大海水'
        };
        
        const ganZhi = gan + zhi;
        return nayinTable[ganZhi] || '';
    }

    // 获取纳音五行
    getNayinWuxing(nayin) {
        // 纳音五行映射表
        const nayinWuxing = {
            '海中金': '金', '炉中火': '火', '大林木': '木', '路旁土': '土', '剑锋金': '金',
            '山头火': '火', '涧下水': '水', '城头土': '土', '白蜡金': '金', '杨柳木': '木',
            '泉中水': '水', '屋上土': '土', '霹雳火': '火', '松柏木': '木', '长流水': '水',
            '沙中金': '金', '山下火': '火', '平地木': '木', '壁上土': '土', '金箔金': '金',
            '覆灯火': '火', '天河水': '水', '大驿土': '土', '钗钏金': '金', '桑柘木': '木',
            '大溪水': '水', '沙中土': '土', '天上火': '火', '石榴木': '木', '大海水': '水'
        };
        
        return nayinWuxing[nayin] || '';
    }

    // 应用五行颜色
    applyWuxingColor(element, wuxing) {
        if (!element || !wuxing) return;
        
        // 纳音五行颜色映射
        const wuxingColors = {
            '金': '#e08433',  // 金色 (参考白虎)
            '木': '#228b22',  // 绿色
            '水': '#4169e1',  // 蓝色
            '火': '#dc143c',  // 红色
            '土': '#98511e'   // 土色 (参考天空)
        };
        
        if (wuxingColors[wuxing]) {
            element.style.color = wuxingColors[wuxing];
            element.style.fontWeight = 'bold';
        }
    }
}

// 当文档加载完成后，初始化纳音管理器
document.addEventListener('DOMContentLoaded', () => {
    // 等待calculator实例化完成后再初始化NayinManager
    const checkCalculator = setInterval(() => {
        if (window.calculator) {
            clearInterval(checkCalculator);
            window.nayinManager = new NayinManager(window.calculator);
            console.log('纳音管理器初始化完成');
        }
    }, 500);
}); 