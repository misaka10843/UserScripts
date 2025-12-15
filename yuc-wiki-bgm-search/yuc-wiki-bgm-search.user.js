// ==UserScript==
// @name         yuc.wiki 番名点击搜索/复制
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  yuc.wiki 番名点击搜索/复制，方便直接前往bgm查找对应番剧
// @author       misaka10843
// @match        *://yuc.wiki/*
// @match        *://www.yuc.wiki/*
// @grant        GM_setClipboard
// @grant        GM_addStyle
// @grant        GM_openInTab
// ==/UserScript==

(function() {
    'use strict';
    const CONFIG = {
        STORAGE_KEY: 'yuc_script_mode_search',
        TITLE_SELECTOR: 'td[class*="future_title"]',
        THEME_COLOR: '#ee802f',
        HOVER_BG: 'rgba(238, 128, 47, 0.15)'
    };

    GM_addStyle(`
        tr:has(${CONFIG.TITLE_SELECTOR}) {
            cursor: pointer;
            transition: background-color 0.2s ease;
        }
        tr:has(${CONFIG.TITLE_SELECTOR}):hover {
            background-color: ${CONFIG.HOVER_BG} !important;
        }

        tr:has(${CONFIG.TITLE_SELECTOR}):hover ${CONFIG.TITLE_SELECTOR} {
            color: ${CONFIG.THEME_COLOR} !important;
        }

        #yuc-toast {
            position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
            background-color: #333; color: #fff; padding: 8px 16px;
            border-radius: 4px; font-size: 14px; z-index: 99999;
            opacity: 0; transition: opacity 0.3s; pointer-events: none;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        #yuc-toast.show { opacity: 1; }

        #yuc-switch-wrapper {
            margin: 10px 0; padding: 10px;
            background: #fdfdfd; border-left: 4px solid ${CONFIG.THEME_COLOR};
            display: flex; align-items: center; justify-content: space-between;
            font-size: 13px; color: #444;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .dark #yuc-switch-wrapper { background: #2d2d2d; color: #ccc; }

        .yuc-toggle { position: relative; display: inline-block; width: 36px; height: 18px; }
        .yuc-toggle input { opacity: 0; width: 0; height: 0; }
        .yuc-slider {
            position: absolute; cursor: pointer;
            top: 0; left: 0; right: 0; bottom: 0;
            background-color: #ccc; transition: .4s; border-radius: 18px;
        }
        .yuc-slider:before {
            position: absolute; content: "";
            height: 14px; width: 14px; left: 2px; bottom: 2px;
            background-color: white; transition: .4s; border-radius: 50%;
        }
        input:checked + .yuc-slider { background-color: ${CONFIG.THEME_COLOR}; }
        input:checked + .yuc-slider:before { transform: translateX(18px); }
        .future_table {
            z-index: 10;
            position: relative;
        }
    `);

    const toast = document.createElement('div');
    toast.id = 'yuc-toast';
    document.body.appendChild(toast);
    let toastTimer;

    function showToast(text) {
        toast.innerText = text;
        toast.classList.add('show');
        if (toastTimer) clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 2000);
    }

    function initSwitchUI() {
        if (document.getElementById('yuc-switch-wrapper')) return;

        const target = document.querySelector('.cc-license') ||
                       document.querySelector('.post-copyright') ||
                       document.querySelector('.sidebar-inner');

        if (!target) return;

        const isSearchMode = localStorage.getItem(CONFIG.STORAGE_KEY) === 'true';

        const wrapper = document.createElement('div');
        wrapper.id = 'yuc-switch-wrapper';
        wrapper.innerHTML = `
            <span>番名点击动作：<b id="yuc-mode-text" style="margin-left:5px">${isSearchMode ? '去搜索' : '复制文本'}</b></span>
            <label class="yuc-toggle">
                <input type="checkbox" id="yuc-mode-cb" ${isSearchMode ? 'checked' : ''}>
                <span class="yuc-slider"></span>
            </label>
        `;

        target.parentNode.insertBefore(wrapper, target);

        // 绑定事件
        const cb = wrapper.querySelector('#yuc-mode-cb');
        const txt = wrapper.querySelector('#yuc-mode-text');

        cb.addEventListener('change', (e) => {
            const val = e.target.checked;
            localStorage.setItem(CONFIG.STORAGE_KEY, val);
            txt.innerText = val ? '去搜索' : '复制文本';
            showToast(`已切换模式：${val ? '跳转搜索' : '仅复制'}`);
        });

        return true;
    }

    let checkCount = 0;
    const initInterval = setInterval(() => {
        if (initSwitchUI() || checkCount > 20) clearInterval(initInterval);
        checkCount++;
    }, 500);


    document.addEventListener('click', function(e) {
        const tr = e.target.closest('tr');
        if (!tr) return;

        const titleTd = tr.querySelector(CONFIG.TITLE_SELECTOR);
        if (!titleTd) return;

        if (e.target.closest('#yuc-switch-wrapper')) return;

        const rawText = titleTd.innerText;
        const isSearchMode = localStorage.getItem(CONFIG.STORAGE_KEY) === 'true';

        if (isSearchMode) {
            const searchText = rawText.replace(/[\r\n]+/g, ' ').trim();
            if (searchText) {
                const url = `https://bgm.tv/subject_search/${encodeURIComponent(searchText)}?cat=2`;
                GM_openInTab(url, { active: true, insert: true });
            }
        } else {
            const copyText = rawText.replace(/[\r\n]+/g, '').trim();
            if (copyText) {
                GM_setClipboard(copyText);
                showToast(`已复制: ${copyText}`);
            }
        }
    }, true);

})();
