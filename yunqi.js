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
 * @param {number} birthYear - 出生年份（可选）
 * @returns {string} - HTML表格字符串
 */
function generateFateChartHTML(fateChart, currentPhase = null, birthYear = null) {
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

    // 生成金口运限表格HTML
    let jinkouHtml = generateJinkouYunqiHTML(natalBranch, birthYear);
    
    let html = `
    <div class="card">
        <div class="card-header">运限表（本命${natalBranch}）</div>
        ${currentRunInfo}
        
        <!-- 标签导航 -->
        <ul class="nav nav-tabs" id="yunqi-tabs" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="liuren-tab" data-bs-toggle="tab" data-bs-target="#liuren-tab-pane" type="button" role="tab" aria-controls="liuren-tab-pane" aria-selected="true">六壬运限</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="jinkou-tab" data-bs-toggle="tab" data-bs-target="#jinkou-tab-pane" type="button" role="tab" aria-controls="jinkou-tab-pane" aria-selected="false">金口运限</button>
            </li>
        </ul>
        
        <!-- 标签内容 -->
        <div class="tab-content" id="yunqi-tabs-content">
            <!-- 六壬运限标签页 -->
            <div class="tab-pane fade show active" id="liuren-tab-pane" role="tabpanel" aria-labelledby="liuren-tab">
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
            </div>
            
            <!-- 金口运限标签页 -->
            <div class="tab-pane fade" id="jinkou-tab-pane" role="tabpanel" aria-labelledby="jinkou-tab">
                <div class="card-body">
                    ${jinkouHtml}
                </div>
            </div>
        </div>
    </div>`;

    return html;
}

/**
 * 初始化运限表
 * @param {string} natalBranch - 本命地支
 * @param {number} birthYear - 出生年份，用于计算当前运限阶段
 */
function initFateChart(natalBranch, birthYear, isMale = true) {
    console.log('运限表初始化调用，本命地支:', natalBranch, '出生年份:', birthYear, '性别:', isMale ? '男' : '女');
    
    // 检查本命地支是否有效
    if (!natalBranch || natalBranch === '-') {
        console.error('本命地支未设置或无效，无法初始化运限表');
        return;
    }
    
    // 验证本命地支是否是有效的地支
    const validBranches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    if (!validBranches.includes(natalBranch)) {
        console.error('无效的本命地支:', natalBranch);
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
    
    const htmlContent = generateFateChartHTML(fateChart, currentPhase, birthYear);
    
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

/**
 * 生成金口运限HTML表格
 * @param {string} natalBranch - 本命地支
 * @param {number} birthYear - 出生年份
 * @returns {string} - HTML表格字符串
 */
function generateJinkouYunqiHTML(natalBranch, birthYear) {
    // 计算当前年龄
    let currentAge = null;
    if (birthYear && !isNaN(parseInt(birthYear))) {
        currentAge = new Date().getFullYear() - parseInt(birthYear);
    }
    
    // 获取用户性别
    const isMale = document.getElementById('gender-male')?.checked !== false; // 默认为男性
    console.log('金口运限计算，性别:', isMale ? '男' : '女');
    
    // 创建一个简洁的两行表格（年龄和干支）
    let html = `
    <div class="jinkou-yunqi-container">
        <h6 class="mb-3">金口运限 (本命${natalBranch})</h6>
        <div class="table-responsive">
            <table class="table table-bordered table-sm text-center">
                <thead>
                    <tr>
    `;
    
    // 生成年龄行，最多显示100岁
    const maxAge = 100;
    
    // 分成多组，每组10个年龄
    for (let startAge = 1; startAge <= maxAge; startAge += 10) {
        html += `<tr class="table-light">`;
        
        // 每组显示10个年龄
        for (let i = 0; i < 10; i++) {
            const age = startAge + i;
            if (age <= maxAge) {
                html += `<th>${age}岁</th>`;
            } else {
                html += `<th></th>`; // 超过最大年龄时显示空单元格
            }
        }
        
        html += `</tr>`;
        
        // 生成对应的干支行
        html += `<tr>`;
        for (let i = 0; i < 10; i++) {
            const age = startAge + i;
            if (age <= maxAge) {
                // 计算干支
                const isMale = document.getElementById('gender-male')?.checked !== false; // 默认为男性
                const ganZhi = calculateGanZhiForAge(age, natalBranch, birthYear, isMale);
                
                // 高亮当前年龄
                const style = (age === currentAge) ? ' style="color: red; font-weight: bold;"' : '';
                html += `<td${style}>${ganZhi}</td>`;
            } else {
                html += `<td></td>`; // 超过最大年龄时显示空单元格
            }
        }
        
        html += `</tr>`;
    }
    
    html += `</table></div></div>`;
    return html;
}

/**
 * 计算指定年龄的干支（金口运限）
 * @param {number} age - 年龄
 * @param {string} natalBranch - 本命地支
 * @param {number} birthYear - 出生年份
 * @param {boolean} isMale - 性别，默认男性
 * @returns {string} - 干支组合
 */
function calculateGanZhiForAge(age, natalBranch, birthYear, isMale = true) {
    // 如果没有出生年份，返回占位符
    if (!birthYear || isNaN(parseInt(birthYear))) {
        return `干支`;
    }
    
    // 天干和地支数组
    const HEAVENLY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const EARTHLY_BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    
    // 计算出生年的干支
    const year = parseInt(birthYear);
    const yearStemIndex = (year - 4) % 10;  // 1984是甲子年，1984 - 4 = 1980, 1980 % 10 = 0 (甲)
    const yearBranchIndex = (year - 4) % 12; // 1984是甲子年，1984 - 4 = 1980, 1980 % 12 = 8 (子)
    
    const birthYearStem = HEAVENLY_STEMS[yearStemIndex];
    const birthYearBranch = EARTHLY_BRANCHES[yearBranchIndex];
    
    // 确定甲旬
    let jiaXunType = '';
    
    // 根据出生年的干支确定甲旬类型
    if (yearStemIndex === 0) {  // 如果是甲年
        jiaXunType = yearBranchIndex;  // 直接用地支索引来表示甲旬类型
    } else {
        // 如果不是甲年，找到之前的甲年并确定其地支
        const yearsSinceJia = yearStemIndex;
        const jiaYear = year - yearsSinceJia;
        const jiaYearBranchIndex = (jiaYear - 4) % 12;
        jiaXunType = jiaYearBranchIndex;
    }
    
    // 男性从起始干支顺推，女性逆推
    let startStem = '';
    let startBranch = '';
    
    // 根据甲旬和性别确定起始干支
    switch (jiaXunType) {
        case 0: // 甲子旬
            startStem = isMale ? '丙' : '壬';
            startBranch = isMale ? '寅' : '申';
            break;
        case 10: // 甲戌旬
            startStem = isMale ? '丙' : '壬';
            startBranch = isMale ? '子' : '午';
            break;
        case 8: // 甲申旬
            startStem = isMale ? '丙' : '壬';
            startBranch = isMale ? '戌' : '辰';
            break;
        case 6: // 甲午旬
            startStem = isMale ? '丙' : '壬';
            startBranch = isMale ? '申' : '寅';
            break;
        case 4: // 甲辰旬
            startStem = isMale ? '丙' : '壬';
            startBranch = isMale ? '午' : '子';
            break;
        case 2: // 甲寅旬
            startStem = isMale ? '丙' : '壬';
            startBranch = isMale ? '辰' : '戌';
            break;
        default:
            return `未知`;
    }
    
    // 根据年龄计算干支
    const startStemIndex = HEAVENLY_STEMS.indexOf(startStem);
    const startBranchIndex = EARTHLY_BRANCHES.indexOf(startBranch);
    
    // 考虑年龄为1时的特殊情况
    const adjustedAge = age <= 0 ? 1 : age;
    const offset = adjustedAge - 1; // 因为第1岁对应的是初始干支
    
    // 计算目标干支索引
    let targetStemIndex, targetBranchIndex;
    
    if (isMale) {
        // 男性顺推
        targetStemIndex = (startStemIndex + offset) % 10;
        targetBranchIndex = (startBranchIndex + offset) % 12;
    } else {
        // 女性逆推
        targetStemIndex = (startStemIndex - offset + 10000) % 10; // 加10000确保结果为正数
        targetBranchIndex = (startBranchIndex - offset + 12000) % 12; // 加12000确保结果为正数
    }
    
    // 获取目标干支
    const targetStem = HEAVENLY_STEMS[targetStemIndex];
    const targetBranch = EARTHLY_BRANCHES[targetBranchIndex];
    
    return `${targetStem}${targetBranch}`;
}

// 为了便于调试，添加全局调用方法
window.testFateChart = function(branch, birthYear, isMale = true) {
    console.log('测试运限表生成，本命地支:', branch, '出生年份:', birthYear, '性别:', isMale ? '男' : '女');
    const testBranch = branch || '午';
    const testBirthYear = birthYear || 1990; // 默认使用1990年作为测试年份
    
    initFateChart(testBranch, testBirthYear, isMale);
    
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