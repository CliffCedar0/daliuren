// 使用IIFE确保初始化和全局范围可用
(function() {

// 十二地支对应太玄数
const TAIXUAN_NUMBERS = {
    '子': 9,
    '午': 9,
    '丑': 8,
    '未': 8,
    '寅': 7,
    '申': 7,
    '卯': 6,
    '酉': 6,
    '辰': 5,
    '戌': 5,
    '巳': 4,
    '亥': 4
};

// 十二地支排列顺序
const BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

/**
 * 计算运限表
 * @param {string} natalBranch - 本命地支
 * @param {number} maxAge - 最大年龄（可选，默认100岁）
 * @returns {Array} - 运限信息数组
 */
function calculateFateChart(natalBranch, maxAge = 100) {
    // 获取本命太玄数
    const natalTaixuan = TAIXUAN_NUMBERS[natalBranch];
    if (!natalTaixuan) {
        console.error('无效的本命地支:', natalBranch);
        return [];
    }

    // 找到本命地支在BRANCHES中的索引
    const natalIndex = BRANCHES.indexOf(natalBranch);
    if (natalIndex === -1) {
        console.error('找不到地支索引:', natalBranch);
        return [];
    }

    const fateChart = [];
    let currentAge = 0;
    let currentPhase = 1;

    // 第一阶段 - 从0岁开始，持续本命太玄数+1年
    fateChart.push({
        phase: currentPhase++,
        branch: natalBranch,
        taixuan: natalTaixuan,
        startAge: currentAge,
        endAge: currentAge + natalTaixuan - 1,
        ageRange: `${currentAge}-${currentAge + natalTaixuan }岁`
    });
    // 更新下一阶段的起始年龄
    currentAge = currentAge + natalTaixuan + 1;

    // 后续阶段 - 逆排地支，累积太玄数
    let currentBranchIndex = natalIndex;

    while (currentAge < maxAge) {
        // 逆向获取下一个地支索引（循环数组）
        currentBranchIndex = (currentBranchIndex - 1 + BRANCHES.length) % BRANCHES.length;
        const currentBranch = BRANCHES[currentBranchIndex];
        const currentTaixuan = TAIXUAN_NUMBERS[currentBranch];

        // 添加此阶段
        fateChart.push({
            phase: currentPhase++,
            branch: currentBranch,
            taixuan: currentTaixuan,
            startAge: currentAge,
            endAge: currentAge + currentTaixuan,
            ageRange: `${currentAge}-${currentAge + currentTaixuan -1}岁`
        });

        // 更新下一阶段的起始年龄
        currentAge = currentAge + currentTaixuan + 1;
    }

    return fateChart;
}

/**
 * 生成运限表HTML
 * @param {Array} fateChart - 运限信息数组
 * @param {number} currentPhase - 当前所处的运限阶段索引（可选）
 * @returns {string} - HTML表格字符串
 */
function generateFateChartHTML(fateChart, currentPhase = null) {
    if (!fateChart || !fateChart.length) {
        return '<div class="alert alert-warning">无法计算运限表</div>';
    }

    // 获取本命地支信息（第一个阶段的地支）
    const natalBranch = fateChart[0].branch;
    const natalTaixuan = fateChart[0].taixuan;
    
    // 如果提供了当前阶段，生成当前运限信息
    let currentRunInfo = '';
    if (currentPhase !== null && fateChart[currentPhase]) {
        const currentPeriod = fateChart[currentPhase];
        currentRunInfo = `<div class="alert alert-info">
            <strong>当前运限：</strong>第${currentPeriod.phase}步运 (${currentPeriod.branch})
            <br><span class="small">运限年龄范围: ${currentPeriod.ageRange}</span>
        </div>`;
    }

    let html = `
    <div class="card">
        <div class="card-header">六壬运限命${natalBranch}命）</div>
        ${currentRunInfo}
        <div class="card-body p-0">
            <table class="table table-bordered mb-0 text-center">
                <thead class="table-light">
                    <tr>
                        <th>阶段</th>
                        <th>年龄范围</th>
                    </tr>
                </thead>
                <tbody>
    `;

    fateChart.forEach((period, index) => {
        // 如果是当前阶段，添加高亮样式
        const isCurrentPhase = (index === currentPhase);
        const rowStyle = isCurrentPhase ? ' style="color: red; font-weight: bold;"' : '';
        
        html += `
            <tr${rowStyle}>
                <td>${period.branch}运</td>
                <td>${period.ageRange}</td>
            </tr>
        `;
    });

    html += `
                </tbody>
            </table>
        </div>
    </div>`;

    return html;
}

/**
 * 初始化运限表
 * @param {string} natalBranch - 本命地支
 * @param {number} birthYear - 出生年份，用于计算当前运限阶段
 */
function initFateChart(natalBranch, birthYear) {
    console.log('运限表初始化调用，本命地支:', natalBranch, '出生年份:', birthYear);
    
    if (!natalBranch) {
        console.error('本命地支未设置，无法初始化运限表');
        return;
    }

    const fateChart = calculateFateChart(natalBranch);
    
    // 计算当前年龄和运限阶段
    let currentAge = null;
    let currentPhase = null;
    
    if (birthYear && !isNaN(parseInt(birthYear))) {
        const currentYear = new Date().getFullYear();
        currentAge = currentYear - parseInt(birthYear);
        console.log('当前年份:', currentYear, '出生年份:', birthYear, '当前年龄:', currentAge);
        
        // 找出当前年龄所在的运限阶段
        for (let i = 0; i < fateChart.length; i++) {
            // 检查年龄是否在此阶段范围内
            if (currentAge >= fateChart[i].startAge && currentAge <= fateChart[i].endAge) {
                currentPhase = i;
                console.log('找到当前运限阶段:', i + 1, '范围:', fateChart[i].startAge, '-', fateChart[i].endAge);
                break;
            }
        }
        
        if (currentPhase === null) {
            console.warn('无法找到匹配的运限阶段，尝试使用近似匹配');
            // 备用方案：找到最接近的运限阶段
            let closestPhase = 0;
            let minDistance = Number.MAX_SAFE_INTEGER;
            
            for (let i = 0; i < fateChart.length; i++) {
                // 计算当前年龄与此阶段中点的距离
                const phaseMidpoint = (fateChart[i].startAge + fateChart[i].endAge) / 2;
                const distance = Math.abs(currentAge - phaseMidpoint);
                
                if (distance < minDistance) {
                    minDistance = distance;
                    closestPhase = i;
                }
            }
            
            currentPhase = closestPhase;
            console.log('使用近似匹配找到阶段:', currentPhase + 1);
        }
        
        console.log('当前年龄:', currentAge, '当前运限阶段:', currentPhase !== null ? currentPhase + 1 : '未知');
    }
    
    const htmlContent = generateFateChartHTML(fateChart, currentPhase);
    
    // 获取容器并插入HTML
    const container = document.getElementById('fate-chart-container');
    if (container) {
        container.innerHTML = htmlContent;
        container.style.display = 'block';
        console.log('运限表已生成并显示，本命地支:', natalBranch);
        
        // 显示调试按钮
        const debugDiv = document.getElementById('yunqi-debug');
        if (debugDiv) {
            debugDiv.style.display = 'block';
        }
    } else {
        console.error('找不到运限表容器元素');
    }
}

// 导出函数供主程序使用 - 确保在全局作用域可用
window.initFateChart = initFateChart;

// 页面加载完成后执行初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('运限模块已加载，等待调用...');
    
    // 尝试初始化运限表 - 如果有本命地支
    setTimeout(function() {
        const benmingZhi = document.getElementById('benming-zhi');
        if (benmingZhi && benmingZhi.textContent && benmingZhi.textContent !== '-') {
            const natalBranch = benmingZhi.textContent;
            console.log('页面加载后尝试初始化运限表，本命地支:', natalBranch);
            initFateChart(natalBranch);
        }
    }, 1500); // 等待1.5秒，确保其他脚本已初始化
});

// 为了便于调试，添加全局调用方法
window.testFateChart = function(branch, birthYear) {
    console.log('测试运限表生成，本命地支:', branch, '出生年份:', birthYear);
    const testBranch = branch || '午';
    const testBirthYear = birthYear || 1990; // 默认使用1990年作为测试年份
    
    initFateChart(testBranch, testBirthYear);
    
    // 确保运限表容器可见
    const container = document.getElementById('fate-chart-container');
    if (container) {
        container.style.display = 'block';
        console.log('运限表容器已设为可见');
    } else {
        console.error('找不到运限表容器!');
    }
};

// 结束IIFE
})();