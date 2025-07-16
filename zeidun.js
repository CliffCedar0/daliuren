// 贼遁功能实现
document.addEventListener('DOMContentLoaded', function() {
    console.log("贼遁功能脚本已加载");
    
    // 等待calculator实例初始化完成
    function initZeidun() {
        if (!window.calculator) {
            console.log("等待calculator实例初始化...");
            setTimeout(initZeidun, 500);
            return;
        }
        
        console.log("calculator实例已初始化，开始设置贼遁功能");
        
        // 扩展DaLiuRenCalculator类，添加贼遁计算方法
        const originalCalculatePlates = window.calculator.calculatePlates;
        window.calculator.calculatePlates = function() {
            // 调用原始方法
            const result = originalCalculatePlates.apply(this, arguments);
            
            // 计算贼遁
            try {
                // 延迟执行贼遁计算，确保天地盘已经完成排列
                setTimeout(() => {
                    this.calculateZeidun();
                    console.log("贼遁计算已延迟执行");
                }, 1000);
            } catch (error) {
                console.error("计算贼遁时出错:", error);
            }
            
            return result;
        };
        
        // 添加贼遁计算方法
        window.calculator.calculateZeidun = function() {
            console.log("开始计算贼遁...");
            
            try {
                // 检查天地盘是否已经排好
                const plateContainer = document.querySelector('.plate-container');
                if (plateContainer && plateContainer.style.display === 'none') {
                    console.warn("天地盘尚未显示，取消贼遁计算");
                    return;
                }
                
                // 1. 获取天盘天将为贵人所对应的地盘地支
                const dayStem = document.getElementById('day-gan').textContent;
                const timeBranch = document.getElementById('time-branch').value;
                
                console.log("日干:", dayStem, "时支:", timeBranch);
                
                // 获取贵人位置
                const nobles = this.getBothNoblePersons(dayStem, timeBranch);
                const tianpanNoble = nobles.tianpanNoble;
                console.log("天盘贵人位置:", tianpanNoble);
                
                // 找到贵人在地盘的位置
                let guirenGroundPosition = null;
                const heavenPlate = {};
                const cells = document.querySelectorAll('.branch-cell');
                cells.forEach(cell => {
                    const groundBranch = cell.getAttribute('data-branch');
                    const heavenBranchElement = cell.querySelector('.tianpan-branch');
                    if (heavenBranchElement) {
                        const heavenBranch = heavenBranchElement.textContent;
                        heavenPlate[groundBranch] = heavenBranch;
                        if (heavenBranch === tianpanNoble) {
                            guirenGroundPosition = groundBranch;
                        }
                    }
                });
                
                if (!guirenGroundPosition) {
                    console.error("未找到贵人在地盘的位置");
                    return;
                }
                
                console.log("贵人在地盘的位置:", guirenGroundPosition);
                
                // 2. 地盘地支所对应天盘地支宫，并找到该宫的复建
                const tianpanBranch = heavenPlate[guirenGroundPosition];
                console.log("贵人地盘位置对应的天盘地支:", tianpanBranch);
                
                // 找到对应宫的复建
                let fujianGan = null;
                document.querySelectorAll('.branch-cell').forEach(cell => {
                    const branch = cell.getAttribute('data-branch');
                    if (branch === tianpanBranch) {
                        const fujianElement = cell.querySelector('.fujian');
                        if (fujianElement) {
                            fujianGan = fujianElement.textContent;
                            console.log(`在地支${branch}找到复建:`, fujianGan);
                        } else {
                            console.warn(`在地支${branch}未找到复建元素`);
                        }
                    }
                });
                
                if (!fujianGan) {
                    console.error("未找到对应宫的复建");
                    return;
                }
                
                console.log("对应宫的复建:", fujianGan);
                
                // 3. 复建起五子元遁，找到开始的天干
                const wuziYuanDunGan = this.getWuziYuanDunZiStem(fujianGan);
                console.log("五子元遁起始天干:", wuziYuanDunGan);
                
                // 4. 将找到的天干放入地盘地支为子的宫格，并顺时针排十干
                this.displayZeidun(wuziYuanDunGan);
                
                console.log("贼遁计算完成");
            } catch (error) {
                console.error("计算贼遁过程中出错:", error);
            }
        };
        
        // 添加贼遁显示方法
        window.calculator.displayZeidun = function(startGan) {
            console.log("开始显示贼遁，起始天干:", startGan);
            
            // 十天干排列顺序
            const HEAVENLY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
            // 十二地支排列顺序（顺时针）
            const BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
            
            // 找到起始天干的索引
            const startIndex = HEAVENLY_STEMS.indexOf(startGan);
            if (startIndex === -1) {
                console.error("无效的起始天干:", startGan);
                return;
            }
            
            // 为每个地支宫格添加贼遁天干
            BRANCHES.forEach((branch, index) => {
                // 计算当前宫格的天干索引（顺时针排列）
                const ganIndex = (startIndex + index) % 10;
                const gan = HEAVENLY_STEMS[ganIndex];
                
                console.log(`为地支${branch}添加贼遁天干:${gan}`);
                
                // 找到对应的宫格
                document.querySelectorAll('.branch-cell').forEach(cell => {
                    if (cell.getAttribute('data-branch') === branch) {
                        // 检查是否已有贼遁元素
                        let zeidunElement = cell.querySelector('.zeidun');
                        
                        // 如果已存在，先移除
                        if (zeidunElement) {
                            zeidunElement.parentNode.removeChild(zeidunElement);
                        }
                        
                        // 创建一个新的贼遁元素
                        zeidunElement = document.createElement('div');
                        zeidunElement.className = 'zeidun';
                        zeidunElement.textContent = gan;
                        
                        // 找到复建行
                        const fujianRow = cell.querySelector('.fujian-row');
                        if (fujianRow) {
                            // 直接将贼遁元素添加到复建行中
                            fujianRow.appendChild(zeidunElement);
                            console.log(`已将贼遁天干${gan}添加到地支${branch}的复建行`);
                        } else {
                            console.error(`未找到地支${branch}的复建行`);
                            
                            // 如果找不到复建行，尝试添加到甲干行
                            const jiaganRow = cell.querySelector('.jiangan-row');
                            if (jiaganRow) {
                                jiaganRow.appendChild(zeidunElement);
                                console.log(`已将贼遁天干${gan}添加到地支${branch}的甲干行`);
                            } else {
                                console.error(`未找到地支${branch}的甲干行`);
                            }
                        }
                        
                        // 应用五行颜色
                        this.applyWuxingColor(zeidunElement, gan);
                    }
                });
            });
            
            // 触发贼遁位置修复
            setTimeout(() => {
                const event = new Event('zeidunDisplayed');
                document.dispatchEvent(event);
                console.log("已触发贼遁显示完成事件");
            }, 500);
        };
        
        // 添加直接触发贼遁计算的方法
        window.triggerZeidunCalculation = function() {
            console.log("手动触发贼遁计算");
            if (window.calculator) {
                setTimeout(() => {
                    window.calculator.calculateZeidun();
                }, 500);
            } else {
                console.error("Calculator实例不存在，无法计算贼遁");
            }
        };
        
        // 添加CSS样式
        const style = document.createElement('style');
        style.textContent = `
            .zeidun-row {
                display: flex;
                align-items: center;
                margin-top: 2px;
            }
            .zeidun {
                font-weight: bold;
                font-size: 14px;
                margin-left: 2px;
            }
        `;
        document.head.appendChild(style);
        
        console.log("贼遁功能设置完成");
    }
    
    // 启动初始化
    initZeidun();
    
    // 监听排盘按钮点击事件
    const calculateBtn = document.getElementById('calculate-btn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function() {
            console.log("排盘按钮被点击，将在天地盘排列完成后计算贼遁");
        });
    }
    
    // 监听生成图表按钮点击事件
    const generateChartBtn = document.getElementById('generate-chart-btn');
    if (generateChartBtn) {
        generateChartBtn.addEventListener('click', function() {
            console.log("生成图表按钮被点击，将在天地盘排列完成后计算贼遁");
        });
    }
    
    // 监听图表区域显示变化
    const chartSections = document.querySelectorAll('.chart-section');
    if (chartSections.length > 0) {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    const plateContainer = document.querySelector('.plate-container');
                    if (plateContainer && plateContainer.style.display !== 'none') {
                        console.log("检测到天地盘显示，触发贼遁计算");
                        setTimeout(() => {
                            if (window.triggerZeidunCalculation) {
                                window.triggerZeidunCalculation();
                            }
                        }, 1000);
                    }
                }
            });
        });
        
        chartSections.forEach(function(section) {
            observer.observe(section, { attributes: true });
        });
    }
}); 