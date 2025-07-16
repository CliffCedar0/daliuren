// 贼遁位置修复脚本
document.addEventListener('DOMContentLoaded', function() {
    console.log("贼遁位置修复脚本已加载");
    
    // 等待DOM完全加载
    function fixZeidunPosition() {
        // 检查是否已经有贼遁元素
        const zeidunElements = document.querySelectorAll('.zeidun');
        if (zeidunElements.length > 0) {
            console.log("已找到贼遁元素，开始修复位置");
            applyFix();
        } else {
            // 如果还没有贼遁元素，等待排盘完成后再检查
            console.log("未找到贼遁元素，等待排盘完成...");
            setTimeout(fixZeidunPosition, 1000);
        }
    }
    
    // 应用修复
    function applyFix() {
        try {
            console.log("开始应用贼遁位置修复");
            
            // 修改CSS样式
            let styleElement = document.getElementById('zeidun-fix-style');
            if (!styleElement) {
                styleElement = document.createElement('style');
                styleElement.id = 'zeidun-fix-style';
                document.head.appendChild(styleElement);
            }
            
            styleElement.textContent = `
                .fujian-row {
                    position: relative;
                    display: flex;
                    align-items: center;
                }
                .zeidun-row {
                    display: none; /* 隐藏原始贼遁行 */
                }
                .zeidun {
                    position: absolute;
                    right: -20px;
                    top: 0;
                    font-weight: bold;
                    font-size: 14px;
                }
                
                /* 天干五行颜色 */
                .zeidun.wuxing-wood { color: #317023; }
                .zeidun.wuxing-fire { color: #ce2d20; }
                .zeidun.wuxing-earth { color: #98511e; }
                .zeidun.wuxing-metal { color: #e08433; }
                .zeidun.wuxing-water { color: #0803a8; }
            `;
            
            // 将贼遁元素移动到复建元素的右侧
            document.querySelectorAll('.branch-cell').forEach(cell => {
                const fujianRow = cell.querySelector('.fujian-row');
                const zeidunElement = cell.querySelector('.zeidun');
                
                if (fujianRow && zeidunElement) {
                    // 确保贼遁元素在复建行内部的正确位置
                    if (zeidunElement.parentNode !== fujianRow) {
                        console.log(`修复地支${cell.getAttribute('data-branch')}的贼遁位置`);
                        
                        // 克隆贼遁元素
                        const clonedZeidun = zeidunElement.cloneNode(true);
                        
                        // 应用五行颜色
                        applyWuxingColorToZeidun(clonedZeidun, clonedZeidun.textContent);
                        
                        // 将克隆的贼遁元素添加到复建行
                        fujianRow.appendChild(clonedZeidun);
                    } else {
                        // 如果已经在正确位置，只应用五行颜色
                        applyWuxingColorToZeidun(zeidunElement, zeidunElement.textContent);
                    }
                }
            });
            
            console.log("贼遁位置修复完成");
        } catch (error) {
            console.error("修复贼遁位置时出错:", error);
        }
    }
    
    // 应用五行颜色
    function applyWuxingColorToZeidun(element, gan) {
        // 移除所有现有的五行类
        element.classList.remove('wuxing-wood', 'wuxing-fire', 'wuxing-earth', 'wuxing-metal', 'wuxing-water');
        
        // 添加相应的五行类
        switch (gan) {
            case '甲':
            case '乙':
                element.classList.add('wuxing-wood');
                break;
            case '丙':
            case '丁':
                element.classList.add('wuxing-fire');
                break;
            case '戊':
            case '己':
                element.classList.add('wuxing-earth');
                break;
            case '庚':
            case '辛':
                element.classList.add('wuxing-metal');
                break;
            case '壬':
            case '癸':
                element.classList.add('wuxing-water');
                break;
        }
    }
    
    // 添加全局修复函数
    window.fixZeidunPosition = fixZeidunPosition;
    window.applyZeidunFix = applyFix;
    
    // 监听贼遁显示完成事件
    document.addEventListener('zeidunDisplayed', function() {
        console.log("收到贼遁显示完成事件，立即执行修复");
        applyFix();
    });
    
    // 监听排盘按钮点击事件
    const calculateBtn = document.getElementById('calculate-btn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function() {
            console.log("排盘按钮被点击，将在2秒后检查贼遁元素");
            setTimeout(fixZeidunPosition, 2000);
        });
    }
    
    // 监听生成图表按钮点击事件
    const generateChartBtn = document.getElementById('generate-chart-btn');
    if (generateChartBtn) {
        generateChartBtn.addEventListener('click', function() {
            console.log("生成图表按钮被点击，将在2秒后检查贼遁元素");
            setTimeout(fixZeidunPosition, 2000);
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
                        console.log("检测到天地盘显示，触发贼遁修复");
                        setTimeout(fixZeidunPosition, 1500);
                    }
                }
            });
        });
        
        chartSections.forEach(function(section) {
            observer.observe(section, { attributes: true });
        });
    }
    
    // 初始检查
    setTimeout(fixZeidunPosition, 2000);
    
    // 页面加载后自动执行一次
    setTimeout(function() {
        if (window.triggerZeidunCalculation) {
            console.log("页面加载完成，自动触发贼遁计算");
            window.triggerZeidunCalculation();
        }
    }, 3000);
}); 