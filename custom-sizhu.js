// 添加自定义四柱处理逻辑
document.addEventListener("DOMContentLoaded", function() {
    // 定义60甲子
    const JIAZI_CYCLE = [
        "甲子", "乙丑", "丙寅", "丁卯", "戊辰", "己巳", "庚午", "辛未", "壬申", "癸酉",
        "甲戌", "乙亥", "丙子", "丁丑", "戊寅", "己卯", "庚辰", "辛巳", "壬午", "癸未",
        "甲申", "乙酉", "丙戌", "丁亥", "戊子", "己丑", "庚寅", "辛卯", "壬辰", "癸巳",
        "甲午", "乙未", "丙申", "丁酉", "戊戌", "己亥", "庚子", "辛丑", "壬寅", "癸卯",
        "甲辰", "乙巳", "丙午", "丁未", "戊申", "己酉", "庚戌", "辛亥", "壬子", "癸丑",
        "甲寅", "乙卯", "丙辰", "丁巳", "戊午", "己未", "庚申", "辛酉", "壬戌", "癸亥"
    ];

    // 天干和地支数组
    const HEAVENLY_STEMS = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
    const EARTHLY_BRANCHES = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

    // 获取自定义四柱单选框和输入区域
    const customSizhuRadio = document.getElementById("custom-sizhu");
    const customSizhuInput = document.getElementById("custom-sizhu-input");
    const monthGeneralContainer = document.getElementById("month-general-container");
    const timeBranchSelect = document.getElementById("time-branch");
    
    // 获取所有单选按钮
    const timeSelectionRadios = document.querySelectorAll('input[name="time-selection"]');
    
    // 获取所有天干地支选择框
    const yearGanSelect = document.getElementById("custom-year-gan");
    const yearZhiSelect = document.getElementById("custom-year-zhi");
    const monthGanSelect = document.getElementById("custom-month-gan");
    const monthZhiSelect = document.getElementById("custom-month-zhi");
    const dayGanSelect = document.getElementById("custom-day-gan");
    const dayZhiSelect = document.getElementById("custom-day-zhi");
    const hourGanSelect = document.getElementById("custom-hour-gan");
    const hourZhiSelect = document.getElementById("custom-hour-zhi");
    
    // 初始化天干地支选择框
    function initGanZhiSelects() {
        // 初始化年柱
        setupGanZhiPair(yearGanSelect, yearZhiSelect);
        
        // 初始化月柱
        setupGanZhiPair(monthGanSelect, monthZhiSelect);
        
        // 初始化日柱
        setupGanZhiPair(dayGanSelect, dayZhiSelect);
        
        // 初始化时柱
        setupGanZhiPair(hourGanSelect, hourZhiSelect);
    }
    
    // 设置天干地支配对
    function setupGanZhiPair(ganSelect, zhiSelect) {
        if (!ganSelect || !zhiSelect) return;
        
        // 清空现有选项
        ganSelect.innerHTML = '';
        zhiSelect.innerHTML = '';
        
        // 添加天干选项
        HEAVENLY_STEMS.forEach(gan => {
            const option = document.createElement('option');
            option.value = gan;
            option.textContent = gan;
            ganSelect.appendChild(option);
        });
        
        // 添加地支选项
        EARTHLY_BRANCHES.forEach(zhi => {
            const option = document.createElement('option');
            option.value = zhi;
            option.textContent = zhi;
            zhiSelect.appendChild(option);
        });
        
        // 设置默认值为甲子
        ganSelect.value = "甲";
        zhiSelect.value = "子";
        
        // 添加天干变化事件
        ganSelect.addEventListener('change', function() {
            updateMatchingZhi(ganSelect, zhiSelect);
        });
        
        // 添加地支变化事件
        zhiSelect.addEventListener('change', function() {
            updateMatchingGan(ganSelect, zhiSelect);
        });
    }
    
    // 根据天干更新匹配的地支
    function updateMatchingZhi(ganSelect, zhiSelect) {
        const selectedGan = ganSelect.value;
        const currentZhi = zhiSelect.value;
        
        // 获取与当前天干匹配的所有地支
        const matchingPairs = JIAZI_CYCLE.filter(pair => pair.startsWith(selectedGan));
        const matchingZhis = matchingPairs.map(pair => pair.charAt(1));
        
        // 如果当前地支不在匹配列表中，选择第一个匹配的地支
        if (!matchingZhis.includes(currentZhi)) {
            zhiSelect.value = matchingZhis[0];
        }
    }
    
    // 根据地支更新匹配的天干
    function updateMatchingGan(ganSelect, zhiSelect) {
        const selectedZhi = zhiSelect.value;
        const currentGan = ganSelect.value;
        
        // 获取与当前地支匹配的所有天干
        const matchingPairs = JIAZI_CYCLE.filter(pair => pair.endsWith(selectedZhi));
        const matchingGans = matchingPairs.map(pair => pair.charAt(0));
        
        // 如果当前天干不在匹配列表中，选择第一个匹配的天干
        if (!matchingGans.includes(currentGan)) {
            ganSelect.value = matchingGans[0];
        }
    }
    
    // 为所有单选按钮添加事件监听
    if (timeSelectionRadios.length > 0) {
        timeSelectionRadios.forEach(radio => {
            radio.addEventListener("change", function() {
                // 隐藏所有输入区域
                const allInputs = [
                    document.getElementById("custom-time-input"),
                    document.getElementById("random-number-input"),
                    document.getElementById("custom-sizhu-input")
                ];
                
                allInputs.forEach(input => {
                    if (input) {
                        input.classList.add("d-none");
                    }
                });
                
                // 默认隐藏占时选择框
                if (timeBranchSelect && timeBranchSelect.parentElement) {
                    timeBranchSelect.parentElement.style.display = "none";
                }
                
                // 根据选择的单选按钮显示对应的输入区域
                if (this.id === "current-time") {
                    // 显示占时选择框
                    if (timeBranchSelect && timeBranchSelect.parentElement) {
                        timeBranchSelect.parentElement.style.display = "block";
                    }
                    
                    // 显示月将选择
                    if (monthGeneralContainer) {
                        monthGeneralContainer.style.display = "flex";
                    }
                } else if (this.id === "custom-time") {
                    const customTimeInput = document.getElementById("custom-time-input");
                    if (customTimeInput) {
                        customTimeInput.classList.remove("d-none");
                    }
                    // 显示月将选择
                    if (monthGeneralContainer) {
                        monthGeneralContainer.style.display = "flex";
                    }
                } else if (this.id === "random-number") {
                    const randomNumberInput = document.getElementById("random-number-input");
                    if (randomNumberInput) {
                        randomNumberInput.classList.remove("d-none");
                    }
                    // 显示月将选择
                    if (monthGeneralContainer) {
                        monthGeneralContainer.style.display = "flex";
                    }
                } else if (this.id === "custom-sizhu") {
                    const customSizhuInput = document.getElementById("custom-sizhu-input");
                    if (customSizhuInput) {
                        customSizhuInput.classList.remove("d-none");
                        // 初始化天干地支选择框
                        initGanZhiSelects();
                    }
                    // 隐藏月将选择
                    if (monthGeneralContainer) {
                        monthGeneralContainer.style.display = "none";
                    }
                }
            });
        });
    }
    
    // 初始化时检查默认选中的单选按钮
    function initRadioState() {
        const checkedRadio = document.querySelector('input[name="time-selection"]:checked');
        if (checkedRadio) {
            if (checkedRadio.id === "custom-sizhu") {
                // 如果默认选中自定义四柱，则隐藏月将选择和占时选择框
                if (monthGeneralContainer) {
                    monthGeneralContainer.style.display = "none";
                }
                if (timeBranchSelect && timeBranchSelect.parentElement) {
                    timeBranchSelect.parentElement.style.display = "none";
                }
                // 显示自定义四柱输入区域
                if (customSizhuInput) {
                    customSizhuInput.classList.remove("d-none");
                    initGanZhiSelects();
                }
            } else if (checkedRadio.id === "current-time") {
                // 如果默认选中当前时间，则显示月将选择和占时选择框
                if (monthGeneralContainer) {
                    monthGeneralContainer.style.display = "flex";
                }
                if (timeBranchSelect && timeBranchSelect.parentElement) {
                    timeBranchSelect.parentElement.style.display = "block";
                }
            } else {
                // 其他选项则显示月将选择，隐藏占时选择框
                if (monthGeneralContainer) {
                    monthGeneralContainer.style.display = "flex";
                }
                if (timeBranchSelect && timeBranchSelect.parentElement) {
                    timeBranchSelect.parentElement.style.display = "none";
                }
                
                // 显示对应的输入区域
                if (checkedRadio.id === "custom-time") {
                    const customTimeInput = document.getElementById("custom-time-input");
                    if (customTimeInput) {
                        customTimeInput.classList.remove("d-none");
                    }
                } else if (checkedRadio.id === "random-number") {
                    const randomNumberInput = document.getElementById("random-number-input");
                    if (randomNumberInput) {
                        randomNumberInput.classList.remove("d-none");
                    }
                }
            }
        }
    }
    
    // 页面加载时初始化单选按钮状态
    initRadioState();
    
    // 获取生成图表按钮
    const generateChartBtn = document.getElementById("generate-chart-btn");
    
    // 监听生成图表按钮点击事件
    if (generateChartBtn) {
        const originalClick = generateChartBtn.onclick;
        
        generateChartBtn.onclick = function(event) {
            // 检查是否选中了自定义四柱
            if (customSizhuRadio && customSizhuRadio.checked) {
                // 获取自定义四柱值
                const yearGan = yearGanSelect.value;
                const yearZhi = yearZhiSelect.value;
                const monthGan = monthGanSelect.value;
                const monthZhi = monthZhiSelect.value;
                const dayGan = dayGanSelect.value;
                const dayZhi = dayZhiSelect.value;
                const hourGan = hourGanSelect.value;
                const hourZhi = hourZhiSelect.value;
                // 使用排盘方式区域的月将选择框
                const monthGeneral = document.getElementById("month-general").value;
                
                // 验证四柱是否符合60甲子
                if (!validateGanZhiPair(yearGan, yearZhi) ||
                    !validateGanZhiPair(monthGan, monthZhi) ||
                    !validateGanZhiPair(dayGan, dayZhi) ||
                    !validateGanZhiPair(hourGan, hourZhi)) {
                    alert("四柱中存在不符合60甲子规则的组合，请检查！");
                    return false;
                }
                
                console.log(`自定义四柱: ${yearGan}${yearZhi} ${monthGan}${monthZhi} ${dayGan}${dayZhi} ${hourGan}${hourZhi}, 月将: ${monthGeneral}`);
                
                // 显示所有图表区域
                const chartSections = document.querySelectorAll(".chart-section");
                chartSections.forEach(section => {
                    section.style.display = "block";
                });
                
                // 更新四柱显示
                updateSizhuDisplay(yearGan, yearZhi, monthGan, monthZhi, dayGan, dayZhi, hourGan, hourZhi);
                
                // 获取计算器实例
                if (window.calculator) {
                    // 清除所有盘内容
                    window.calculator.clearAllPlateContent();
                    
                    // 创建一个临时函数来保存原始的calculatePlates方法
                    const originalCalculatePlates = window.calculator.calculatePlates;
                    
                    // 临时替换calculatePlates方法
                    window.calculator.calculatePlates = function(customMonthGeneral, customTimeBranch) {
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
                        
                        // 计算天盘
                        const heavenPlate = this.calculateHeavenPlate(monthGeneral, timeBranch);
                        
                        // 更新天盘显示
                        this.updateCombinedPlate(heavenPlate);
                        
                        try {
                            // 使用自定义四柱中的日干支
                            const dayStem = dayGan;  // 使用自定义日干
                            const dayBranch = dayZhi; // 使用自定义日支
                            console.log(`使用自定义四柱计算四课三传, 日干支: ${dayStem}${dayBranch}, 占时: ${timeBranch}`);
                            
                            // 确保四柱表格中显示的日干支与自定义的一致
                            const dayGanElement = document.getElementById("day-gan");
                            const dayZhiElement = document.getElementById("day-zhi");
                            if (dayGanElement) dayGanElement.textContent = dayStem;
                            if (dayZhiElement) dayZhiElement.textContent = dayBranch;
                            
                            // 计算和更新天将、旬干 - 传递heavenPlate
                            this.updateTianjiangAndXungan(timeBranch, heavenPlate);
                            
                            // 获取天将排布信息 - 使用自定义的日干支
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
                    };
                    
                    // 使用自定义时辰和月将计算排盘
                    window.calculator.calculatePlates(monthGeneral, hourZhi);
                    
                    // 还原原始的calculatePlates方法
                    window.calculator.calculatePlates = originalCalculatePlates;
                    
                    // 更新本命和行年
                    window.calculator.updateBenmingAndXingnian();
                }
                
                // 阻止事件继续传播
                event.preventDefault();
                return false;
            } else if (originalClick) {
                // 如果不是自定义四柱，则执行原始点击事件
                return originalClick.call(this, event);
            }
        };
    }
    
    // 更新四柱显示
    function updateSizhuDisplay(yearGan, yearZhi, monthGan, monthZhi, dayGan, dayZhi, hourGan, hourZhi) {
        // 更新四柱显示
        const yearGanElement = document.getElementById("year-gan");
        const yearZhiElement = document.getElementById("year-zhi");
        const monthGanElement = document.getElementById("month-gan");
        const monthZhiElement = document.getElementById("month-zhi");
        const dayGanElement = document.getElementById("day-gan");
        const dayZhiElement = document.getElementById("day-zhi");
        const hourGanElement = document.getElementById("hour-gan");
        const hourZhiElement = document.getElementById("hour-zhi");
        
        if (yearGanElement) yearGanElement.textContent = yearGan;
        if (yearZhiElement) yearZhiElement.textContent = yearZhi;
        if (monthGanElement) monthGanElement.textContent = monthGan;
        if (monthZhiElement) monthZhiElement.textContent = monthZhi;
        if (dayGanElement) dayGanElement.textContent = dayGan;
        if (dayZhiElement) dayZhiElement.textContent = dayZhi;
        if (hourGanElement) hourGanElement.textContent = hourGan;
        if (hourZhiElement) hourZhiElement.textContent = hourZhi;
        
        // 应用五行颜色（如果有）
        if (window.calculator && window.calculator.applyWuxingColor) {
            if (yearGanElement) window.calculator.applyWuxingColor(yearGanElement, yearGan);
            if (yearZhiElement) window.calculator.applyWuxingColor(yearZhiElement, yearZhi);
            if (monthGanElement) window.calculator.applyWuxingColor(monthGanElement, monthGan);
            if (monthZhiElement) window.calculator.applyWuxingColor(monthZhiElement, monthZhi);
            if (dayGanElement) window.calculator.applyWuxingColor(dayGanElement, dayGan);
            if (dayZhiElement) window.calculator.applyWuxingColor(dayZhiElement, dayZhi);
            if (hourGanElement) window.calculator.applyWuxingColor(hourGanElement, hourGan);
            if (hourZhiElement) window.calculator.applyWuxingColor(hourZhiElement, hourZhi);
        }
    }
    
    // 验证天干地支配对是否符合60甲子
    function validateGanZhiPair(gan, zhi) {
        return JIAZI_CYCLE.includes(gan + zhi);
    }
});
