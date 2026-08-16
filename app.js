/* ====================================================
   DATA — 编辑这里即可替换你自己的内容
==================================================== */
const PROJECTS = {
  clacky: {
    name: 'OpenClacky · AI Agent 市场负责人',
    desc: '2025.12 — 至今 · ClackyAI',
    tags: ['AI Agent', 'GTM', '市场验证', '商业化'],
    note: '负责 OpenClacky 从 AI 编程工具向 AI Agent 产品形态转型的市场验证、内测增长与商业化探索。通过 Workshop、种子用户访谈和香港龙虾展百人内测群，推动官网表达从 C 端用户转向 Skill 创作者，1 个月内测申请达 200 人，申请量提升约 30%。项目已获奇绩创坛、红杉、高瓴、真格等机构投资。',
    color: '#FABA1B',
    sheet: 'assets/openclacky-project-sheet.png',
    previews: [
      {
        label: 'Workshop',
        bg: '#ebe8df',
        img: 'assets/openclacky-workshop.jpg',
        generated: false
      },
      {
        label: 'Extensions',
        bg: '#101010',
        img: 'assets/openclacky-extensions.png',
        fit: 'contain',
        generated: false
      },
      {
        label: 'Growth',
        bg: '#f6f8fb',
        img: 'assets/openclacky-growth-github.png',
        fit: 'contain',
        generated: false,
        badges: ['assets/github-trending-day.png', 'assets/trendshift-month.png']
      }
    ]
  },
  topp: {
    name: '连云港托普科技 · 平台运营 & AI 负责人',
    desc: '2025.6 — 2025.11 · 阿里国际站 / 独立站 / 社媒',
    tags: ['B2B 平台增长', 'AI 提效', 'SEO', '知识库'],
    note: '独立负责阿里国际站双店、独立站及 TikTok / Facebook 等渠道运营。用 AI 优化 500+ 产品标题，重构产品链接，2 个月内店铺效果由低于行业优秀提升至持续领先，打造 3 个类目 TOP50 链接，最高冲至所属类目第 6 名，有效询盘提升 200%。同时从 0 到 1 搭建企业知识库并接入智能体，减少 70% 重复咨询。',
    color: '#1A7FD4',
    sheet: 'assets/b2b-growth-project-sheet.png',
    previews: [
      { label: '询盘转化', bg: '#f5f7fa', img: 'assets/topp-conversion.png', fit: 'contain', generated: false },
      { label: '产品榜单', bg: '#f5f7fa', img: 'assets/topp-product-ranking.png', fit: 'contain', generated: false },
      { label: '商机排名', bg: '#f5f7fa', img: 'assets/topp-opportunity-ranking.png', fit: 'contain', generated: false },
      { label: '全店增长', bg: '#f5f7fa', img: 'assets/topp-store-growth.png', fit: 'contain', generated: false },
      { label: '询盘增长', bg: '#f5f7fa', img: 'assets/topp-inquiry-growth.png', fit: 'contain', generated: false }
    ]
  },
  asus: {
    name: '华硕电脑（北京）· 品牌中心运营（实习）',
    desc: '2023.7 — 2023.8 · ASUS / ROG',
    tags: ['品牌市场', '校园渠道', '活动执行', '传播'],
    note: '参与 ASUS / ROG 品牌市场活动与校园渠道运营。梳理南京 10 所高校流程并制作《校园白皮书》，参与 2023 BW ROG 展区执行与腾讯视频 × 华硕公益 × 贵州文旅局纪录片拍摄项目，活动总曝光 50w+，品牌搜索指数提升约 12%。',
    color: '#2E2E2E',
    sheet: 'assets/community-education-project-sheet.png',
    previews: [
      { label: '华硕 e 创志愿者行动', bg: '#1f3516', img: 'assets/asus-volunteer-action.jpg', generated: false },
      { label: 'ROG · BW 展区执行', bg: '#211217', img: 'assets/asus-rog-bw-event.jpg', generated: false }
    ]
  },
  sheng: {
    name: '生生科技 · 市场与商业化负责人',
    desc: '2024.6 — 2025.5 · 南京大学 AI 初创项目',
    tags: ['AI 思想克隆', 'B 端商业化', '渠道拓展', '获客'],
    note: '参与 AI 思想克隆产品的早期市场验证与商业化探索。从 0 搭建线上 + 线下获客渠道，完成 50 位种子客户转化，开拓 3 个省级渠道合作伙伴。客户触达效率提升约 50%，意向签约成功率提升约 10%，并获得腾讯新闻头版曝光。',
    color: '#FF6EC7',
    sheet: 'assets/openclacky-project-sheet.png',
    previews: [
      { label: '奇绩创坛 · 团队交流', bg: '#173b67', img: 'assets/sheng-miracleplus-team.jpg', generated: false },
      { label: '生生科技 · 秋季发布会', bg: '#17171b', img: 'assets/sheng-launch-event.jpg', generated: false },
      { label: '江苏新闻广播 · 创客来了', bg: '#f4efe6', img: 'assets/sheng-radio-interview.jpg', generated: false },
      { label: '腾讯新闻 · 数字永生报道', bg: '#ffffff', img: 'assets/sheng-tencent-news.jpg', fit: 'contain', generated: false }
    ]
  },
  campus: {
    name: '校园集市 · 运营',
    desc: '2023.4 — 2024.3 · 校园本地生活服务平台',
    tags: ['本地生活', '冷启动', '商家联营', '跨校复制'],
    note: '参与校园本地生活服务平台从 0 到 1 冷启动与单校模型验证。通过 0 元代取快递、考试救命包等活动切入学生高频生活场景，7 天获客 3000+；3 个月拓展至南京 3 所高校，覆盖 2w+ 学生，平台综合流水增长超百万元。',
    color: '#00C9A7',
    sheet: 'assets/community-education-project-sheet.png',
    previews: [
      { label: '校园集市 · 成贤站数据', bg: '#f2f2f2', img: 'assets/campus-chengxian-dashboard.png', fit: 'contain', generated: false },
      { label: '赞噢校园集市 · 成贤站数据', bg: '#f2f2f2', img: 'assets/campus-zanao-dashboard.png', fit: 'contain', generated: false }
    ]
  },
  tree: {
    name: '树成林教育 · 课程主编 & 社群运营',
    desc: '2022.7 — 2023.1 · 高考化学教辅产品',
    tags: ['内容产品', '社群转化', '数据驱动', '教育'],
    note: '参与高考化学教辅产品内容设计与社群运营。基于 2000+ 学生错题数据重构高考化学知识模块，联合 B 站头部博主搭建学习社群，推动获客和转化效率提升约 50%，教辅产品累计销售 10w+ 册。',
    color: '#8B5CF6',
    sheet: 'assets/community-education-project-sheet.png',
    previews: [
      { label: '《高中化学重构》系列教辅', bg: '#ffffff', img: 'assets/tree-chemistry-books.jpg', fit: 'contain', generated: false }
    ]
  },
};

const PROJECT_IMAGE_SETS = {
  clacky: 'openclacky',
  topp: 'b2b-growth',
  asus: 'community-education',
  sheng: 'openclacky',
  campus: 'community-education',
  tree: 'community-education'
};

const MOBILE_QUERY = '(max-width: 900px)';

const FOLDER_META = {
  clacky: { title: 'ClackyAI', role: 'AI Agent · GTM 负责人', brand: 'OpenClacky', date: '2025.12 — 至今' },
  topp: { title: '托普科技', role: '电商运营', brand: 'TUOPU', date: '2025.06 — 2025.11' },
  asus: { title: '华硕电脑', role: '品牌运营 · 内容增长', brand: 'ASUS / ROG', date: '2023.07 — 2023.08' },
  sheng: { title: '生生科技', role: '市场策略 · 商业化', brand: 'EVERLASTING AI', date: '2024.06 — 2025.05' },
  campus: { title: '校园集市', role: '0→1 产品 · 冷启动', brand: 'CAMPUS', date: '2023.04 — 2024.03' },
  tree: { title: '树成林教育', role: '内容负责', brand: 'TREE EDU', date: '2022.07 — 2023.01' }
};

const FOLDER_PREVIEW_LAYOUTS = {
  1: [
    { x: 0, y: -66, r: -1, scale: 1.04 }
  ],
  2: [
    { x: -48, y: -48, r: -9, scale: 1.01 },
    { x: 48, y: -58, r: 9, scale: 1.03 }
  ],
  3: [
    { x: -68, y: -40, r: -12, scale: 1 },
    { x: 0, y: -72, r: -1, scale: 1.05 },
    { x: 68, y: -42, r: 12, scale: 1.01 }
  ],
  4: [
    { x: -88, y: -28, r: -14, scale: .96 },
    { x: -31, y: -66, r: -5, scale: 1.02 },
    { x: 31, y: -70, r: 5, scale: 1.03 },
    { x: 88, y: -30, r: 14, scale: .97 }
  ],
  5: [
    { x: -104, y: -18, r: -15, scale: .92 },
    { x: -55, y: -58, r: -8, scale: .98 },
    { x: 0, y: -78, r: 0, scale: 1.04 },
    { x: 55, y: -60, r: 8, scale: .99 },
    { x: 104, y: -20, r: 15, scale: .93 }
  ]
};

function getProjectPreviewImage(key, index) {
  const project = PROJECTS[key];
  const preview = project && project.previews[index];
  if (!preview) return '';
  if (preview.img) return preview.img;
  const prefix = PROJECT_IMAGE_SETS[key];
  return prefix ? `assets/${prefix}-${index + 1}.png` : '';
}

function decorateFolders() {
  const mobileLayout = window.matchMedia(MOBILE_QUERY).matches;
  document.querySelectorAll('.folder').forEach(folder => {
    const key = folder.dataset.project;
    const meta = FOLDER_META[key];
    if (!meta) return;

    if (!mobileLayout) {
      const stack = document.createElement('div');
      stack.className = 'folder-preview-stack';
      const previews = (PROJECTS[key]?.previews || []).slice(0, 5);
      const fanLayout = FOLDER_PREVIEW_LAYOUTS[previews.length] || FOLDER_PREVIEW_LAYOUTS[5];
      const center = (previews.length - 1) / 2;
      stack.dataset.count = String(previews.length);
      previews.forEach((preview, index) => {
        const src = getProjectPreviewImage(key, index);
        if (!src) return;
        const fan = fanLayout[index];
        const image = document.createElement('img');
        image.className = 'folder-preview';
        image.src = src;
        image.alt = '';
        image.loading = 'lazy';
        image.decoding = 'async';
        image.draggable = false;
        image.style.objectFit = preview.fit || 'cover';
        image.style.background = preview.bg || '#fff';
        image.style.setProperty('--peek-x', `${(index - center) * 10}px`);
        image.style.setProperty('--peek-y', `${Math.abs(index - center) * 3}px`);
        image.style.setProperty('--peek-r', `${(index - center) * 3.2}deg`);
        image.style.setProperty('--peek-scale', `${.82 + index * .008}`);
        image.style.setProperty('--fan-x', `${fan.x}px`);
        image.style.setProperty('--fan-y', `${fan.y}px`);
        image.style.setProperty('--fan-r', `${fan.r}deg`);
        image.style.setProperty('--fan-scale', `${fan.scale}`);
        image.style.setProperty('--fan-delay', `${index * 38}ms`);
        image.style.setProperty('--fan-z', `${10 - Math.round(Math.abs(index - center))}`);
        stack.appendChild(image);
      });
      folder.insertBefore(stack, folder.querySelector('.folder-svg'));
    }
    folder.tabIndex = 0;
    folder.setAttribute('role', 'button');
    folder.setAttribute('aria-label', `打开${meta.title}项目`);

    const brand = document.createElement('div');
    brand.className = 'folder-brand';
    brand.textContent = meta.brand;
    folder.appendChild(brand);

    const label = folder.querySelector('.folder-label');
    label.textContent = '';
    const title = document.createElement('span');
    title.className = 'folder-label-title';
    title.textContent = meta.title;
    const role = document.createElement('span');
    role.className = 'folder-label-role';
    role.textContent = meta.role;
    label.append(title, role);
  });
}

/* ====================================================
   STATE
==================================================== */
const isMobileLayout = () => window.matchMedia(MOBILE_QUERY).matches;
const DESKTOP_STAGE_WIDTH = 1600;
const DESKTOP_STAGE_HEIGHT = 780;
const DESKTOP_MAX_SCALE = 1.2;
const INITIAL_PAN_X = 0;
const INITIAL_PAN_Y = 0;
let panX = INITIAL_PAN_X, panY = INITIAL_PAN_Y;
let desktopScale = .92;
let desktopOffsetX = 0;
let desktopOffsetY = 24;
let isPanning = false, panStartX, panStartY;
let pointerMoved = false;
let pointerDownX = 0, pointerDownY = 0;
let openFolderId = null;
let darkMode = false;
let craftMode = false;
let sidebarCollapsed = false;

const canvas = document.getElementById('canvas');
const hero = document.getElementById('hero');
const cRing = document.getElementById('c-ring');
const sidebar = document.getElementById('sidebar');
const backBtn = document.getElementById('back-btn');
const overlay = document.getElementById('proj-overlay');
const resetBtn = document.getElementById('canvasResetBtn');
const heroName = document.getElementById('hero-name');
const heroToggle = document.getElementById('hero-toggle');
const heroDesign = document.getElementById('hero-design-mode');
const heroPlay = document.getElementById('hero-play-mode');
const ipCompanion = document.getElementById('ip-companion');
const ipActionArt = document.getElementById('ip-action-art');

function updateDesktopStageMetrics() {
  if (isMobileLayout()) {
    desktopScale = 1;
    desktopOffsetX = 0;
    desktopOffsetY = 0;
    return;
  }
  const availableWidth = Math.max(640, window.innerWidth - 48);
  const availableHeight = Math.max(520, window.innerHeight - 40);
  desktopScale = clamp(.58, Math.min(availableWidth / DESKTOP_STAGE_WIDTH, availableHeight / DESKTOP_STAGE_HEIGHT), DESKTOP_MAX_SCALE);
  desktopOffsetX = Math.max(24, (window.innerWidth - DESKTOP_STAGE_WIDTH * desktopScale) / 2);
  const spareHeight = Math.max(0, window.innerHeight - DESKTOP_STAGE_HEIGHT * desktopScale);
  desktopOffsetY = clamp(24, spareHeight * .22, 112);
}

function getCanvasScale() {
  return isMobileLayout() ? 1 : desktopScale;
}

function buildMobileTimeline() {
  if (!isMobileLayout() || document.getElementById('mobile-timeline')) return;
  const timeline = document.createElement('section');
  timeline.id = 'mobile-timeline';
  timeline.setAttribute('aria-label', '项目经历时间线');
  timeline.innerHTML = `<div class="mobile-timeline-head"><span>WORK TIMELINE</span><strong>项目经历</strong><small>点击查看项目详情</small></div>`;

  const list = document.createElement('div');
  list.className = 'mobile-project-list';
  const order = ['tree', 'campus', 'asus', 'sheng', 'graduation', 'topp', 'clacky'];
  order.forEach(key => {
    if (key === 'graduation') {
      const row = document.createElement('div');
      row.className = 'mobile-project-row mobile-graduation-row';
      row.innerHTML = `<div class="mobile-folder-thumb mobile-graduation-thumb"><span class="mobile-graduation-crest"><picture><source srcset="assets/nju-emblem-256.avif" type="image/avif"><img src="assets/nju-emblem-256.png" width="256" height="256" alt="" loading="lazy" decoding="async"></picture></span></div><div class="mobile-project-row-copy"><span class="mobile-project-date">2025.06</span><strong>毕业</strong><small>阶段节点</small></div>`;
      list.appendChild(row);
      return;
    }

    const folder = document.getElementById(`f-${key}`);
    const meta = FOLDER_META[key];
    if (!folder || !meta) return;
    const row = document.createElement('div');
    row.className = 'mobile-project-row';
    row.tabIndex = 0;
    row.setAttribute('role', 'button');
    row.setAttribute('aria-label', `打开${meta.title}项目`);
    const thumb = document.createElement('div');
    thumb.className = `mobile-folder-thumb mobile-folder-${key}`;
    const brand = document.createElement('span');
    brand.className = 'mobile-folder-brand';
    brand.textContent = meta.brand;
    thumb.appendChild(brand);
    const copy = document.createElement('div');
    copy.className = 'mobile-project-row-copy';
    copy.innerHTML = `<span class="mobile-project-date">${meta.date}</span><strong>${meta.title}</strong><small>${meta.role}</small>`;
    row.append(thumb, copy);
    const activate = () => {
      if (openFolderId || folderClosing) return;
      openFolder(folder);
    };
    row.addEventListener('click', activate);
    row.addEventListener('keydown', event => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      activate();
    });
    list.appendChild(row);
  });
  timeline.appendChild(list);

  const resume = document.createElement('a');
  resume.className = 'mobile-resume-link';
  resume.href = 'assets/yifan-yang-resume.pdf';
  resume.target = '_blank';
  resume.rel = 'noopener noreferrer';
  resume.innerHTML = `<span>PDF</span><div><strong>杨一帆 — AI GTM 简历</strong><small>2026 · 点击查看</small></div><b aria-hidden="true">↗</b>`;
  timeline.appendChild(resume);
  canvas.appendChild(timeline);
}

const IP_ACTIONS = {
  idle: ['ip-basic-front.png', '跟着光标看 · 点击切换动作'],
  wave: ['ip-basic-wave.png', '你好，欢迎来看我的作品'],
  walk: ['ip-basic-walk.png', '一起逛逛这张画布'],
  record: ['ip-basic-record.png', '记录关键信息'],
  good: ['ip-basic-good.png', '收到，好消息'],
  think: ['ip-basic-think.png', '让我想一想'],
  explain: ['ip-basic-explain.png', '我来讲讲这个项目'],
  forward: ['ip-basic-forward.png', '继续向前'],
  'content-idea': ['ip-content-idea.png', '寻找内容灵感'],
  'content-outline': ['ip-content-outline.png', '整理内容提纲'],
  'content-write': ['ip-content-write.png', '正在码字'],
  'content-illustrate': ['ip-content-illustrate.png', '给内容配图'],
  'content-shoot': ['ip-content-shoot.png', '拍摄素材'],
  'content-edit': ['ip-content-edit.png', '剪辑内容'],
  'content-publish': ['ip-content-publish.png', '发布内容'],
  'content-feedback': ['ip-content-feedback.png', '收集反馈'],
  'product-requirements': ['ip-product-requirements.png', '梳理产品需求'],
  'product-flow': ['ip-product-flow.png', '设计产品流程'],
  'product-prototype': ['ip-product-prototype.png', '搭建产品原型'],
  'product-model': ['ip-product-model.png', '调整模型'],
  'product-data': ['ip-product-data.png', '分析业务数据'],
  'product-test': ['ip-product-test.png', '进行 A/B 测试'],
  'product-review': ['ip-product-review.png', '项目讲解中'],
  'product-conclusion': ['ip-product-conclusion.png', '沉淀项目结论']
};
const IP_CLICK_ACTIONS = Object.keys(IP_ACTIONS).filter(action => !['idle', 'wave', 'walk', 'explain'].includes(action));
let ipActionTimer = null;
let ipClickIndex = 0;
let ipHomeState = null;
let ipPinnedAction = null;

function restoreIpRestingAction() {
  if (!ipCompanion || !ipCompanion.isConnected) return;
  if (openFolderId && ipCompanion.classList.contains('project-docked')) {
    setIpAction('product-review');
  } else {
    setIpAction(ipPinnedAction || 'idle');
  }
}

function setIpAction(action, duration = 0) {
  if (!ipCompanion || !ipCompanion.isConnected) return;
  if (!IP_ACTIONS[action]) action = 'idle';
  if (ipActionTimer) clearTimeout(ipActionTimer);
  ipCompanion.dataset.action = action;
  const [fileName, label] = IP_ACTIONS[action];
  if (ipActionArt && action !== 'idle') ipActionArt.src = `assets/personal-ip/${fileName}`;
  ipCompanion.ariaLabel = `杨一帆个人 IP 动态角色：${label}`;
  if (duration > 0) {
    ipActionTimer = setTimeout(() => {
      if (openFolderId && ipCompanion.classList.contains('project-docked')) {
        setIpAction(action === 'explain' ? 'product-review' : action);
      } else {
        restoreIpRestingAction();
      }
    }, duration);
  }
}

function setIpDirection(horizontalDelta) {
  if (!ipCompanion || !ipCompanion.isConnected || Math.abs(horizontalDelta) < 1.5) return;
  ipCompanion.dataset.direction = horizontalDelta < 0 ? 'left' : 'right';
}

function updateIpLook(clientX, clientY) {
  if (!ipCompanion || !ipCompanion.isConnected) return;
  const rect = ipCompanion.getBoundingClientRect();
  const centerX = rect.left + rect.width * .5;
  const centerY = rect.top + rect.height * .34;
  const x = clamp(-1, (clientX - centerX) / Math.max(240, window.innerWidth * .34), 1);
  const y = clamp(-1, (clientY - centerY) / Math.max(220, window.innerHeight * .42), 1);
  ipCompanion.style.setProperty('--eye-x', `${(x * 1.2).toFixed(2)}px`);
  ipCompanion.style.setProperty('--eye-y', `${(y * .7).toFixed(2)}px`);
}

function initIpCompanion() {
  if (!ipCompanion || !ipCompanion.isConnected) return;
  const playNextAction = () => {
    if (ipCompanion._didCanvasDrag) return;
    const action = IP_CLICK_ACTIONS[ipClickIndex % IP_CLICK_ACTIONS.length];
    ipClickIndex += 1;
    ipPinnedAction = action;
    setIpAction(action);
  };
  ipCompanion.addEventListener('pointerenter', () => {
    if (!ipPinnedAction) setIpAction('wave', 1300);
  });
  ipCompanion.addEventListener('pointerleave', () => {
    restoreIpRestingAction();
  });
  ipCompanion.addEventListener('click', playNextAction);
  ipCompanion.addEventListener('keydown', event => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    playNextAction();
  });
}

function dockIpForProject() {
  if (!ipCompanion || !ipCompanion.isConnected || ipCompanion.classList.contains('project-docked')) return;
  ipHomeState = {
    parent: ipCompanion.parentNode,
    next: ipCompanion.nextSibling
  };
  document.body.appendChild(ipCompanion);
  ipCompanion.classList.add('project-docked');
  setIpAction('explain', 1900);
}

function restoreIpFromProject() {
  if (!ipCompanion || !ipHomeState) return;
  const { parent, next } = ipHomeState;
  if (next && next.parentNode === parent) parent.insertBefore(ipCompanion, next);
  else parent.appendChild(ipCompanion);
  ipCompanion.classList.remove('project-docked');
  ipHomeState = null;
}

decorateFolders();

/* ====================================================
   FOLDER POSITION & DRAG
==================================================== */
const FOLDER_POSITIONS_KEY = 'yifan-folder-positions-v9';
const CANVAS_WIDTH = 3000;
const CANVAS_HEIGHT = 1800;
const FOLDER_W = 200;
const FOLDER_H = 188;

function initFolderPositions() {
  const mobileLayout = isMobileLayout();
  const folders = Array.from(document.querySelectorAll('.folder'));
  folders.forEach(folder => {
    folder.dataset.defaultLeft = folder.style.left || '0px';
    folder.dataset.defaultTop = folder.style.top || '0px';
    folder.dataset.left = parseInt(folder.style.left || 0, 10);
    folder.dataset.top = parseInt(folder.style.top || 0, 10);
    if (!mobileLayout) attachFolderDrag(folder);
  });
}

const CANVAS_ITEM_POSITIONS_KEY = 'yifan-canvas-item-positions-v4';

function attachCanvasItemDrag(el) {
  let sx = 0, sy = 0, ox = 0, oy = 0, lastX = 0, dragging = false, moved = false;
  el.addEventListener('pointerdown', e => {
    if (openFolderId || folderClosing || e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();
    el.setPointerCapture(e.pointerId);
    sx = e.clientX; sy = e.clientY;
    lastX = e.clientX;
    ox = parseFloat(el.style.left) || el.offsetLeft;
    oy = parseFloat(el.style.top) || el.offsetTop;
    dragging = true; moved = false; el._didCanvasDrag = false;
  });
  el.addEventListener('pointermove', e => {
    if (!dragging || !el.hasPointerCapture(e.pointerId)) return;
    const dx = e.clientX - sx;
    const dy = e.clientY - sy;
    const stepX = e.clientX - lastX;
    lastX = e.clientX;
    if (!moved && (Math.abs(dx) > 4 || Math.abs(dy) > 4)) {
      moved = true;
      el._didCanvasDrag = true;
      el.classList.add('is-dragging');
      if (el === ipCompanion) setIpAction('walk');
    }
    if (!moved) return;
    if (el === ipCompanion) {
      setIpDirection(stepX);
      if (ipCompanion.dataset.action !== 'walk') setIpAction('walk');
    }
    const scale = getCanvasScale();
    el.style.left = Math.max(0, Math.min(CANVAS_WIDTH - el.offsetWidth, ox + dx / scale)) + 'px';
    el.style.top = Math.max(0, Math.min(CANVAS_HEIGHT - el.offsetHeight, oy + dy / scale)) + 'px';
  });
  const finish = e => {
    if (!dragging) return;
    dragging = false;
    if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
    el.classList.remove('is-dragging');
    if (moved) {
      if (el === ipCompanion) {
        el.dataset.userPositioned = 'true';
        if (!openFolderId) restoreIpRestingAction();
      }
      setTimeout(() => { el._didCanvasDrag = false; }, 0);
    }
  };
  el.addEventListener('pointerup', finish);
  el.addEventListener('pointercancel', finish);

  // Mouse fallback keeps dragging reliable in embedded browsers that expose
  // mouse events without PointerEvent capture (including the local preview).
  let mouseDragging = false;
  el.addEventListener('mousedown', e => {
    if (openFolderId || folderClosing || e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();
    sx = e.clientX; sy = e.clientY;
    lastX = e.clientX;
    ox = parseFloat(el.style.left) || el.offsetLeft;
    oy = parseFloat(el.style.top) || el.offsetTop;
    mouseDragging = true; moved = false; el._didCanvasDrag = false;
  });
  window.addEventListener('mousemove', e => {
    if (!mouseDragging) return;
    const dx = e.clientX - sx;
    const dy = e.clientY - sy;
    const stepX = e.clientX - lastX;
    lastX = e.clientX;
    if (!moved && (Math.abs(dx) > 4 || Math.abs(dy) > 4)) {
      moved = true;
      el._didCanvasDrag = true;
      el.classList.add('is-dragging');
      if (el === ipCompanion) setIpAction('walk');
    }
    if (!moved) return;
    if (el === ipCompanion) {
      setIpDirection(stepX);
      if (ipCompanion.dataset.action !== 'walk') setIpAction('walk');
    }
    const scale = getCanvasScale();
    el.style.left = Math.max(0, Math.min(CANVAS_WIDTH - el.offsetWidth, ox + dx / scale)) + 'px';
    el.style.top = Math.max(0, Math.min(CANVAS_HEIGHT - el.offsetHeight, oy + dy / scale)) + 'px';
  });
  window.addEventListener('mouseup', () => {
    if (!mouseDragging) return;
    mouseDragging = false;
    el.classList.remove('is-dragging');
    if (moved) {
      if (el === ipCompanion) {
        el.dataset.userPositioned = 'true';
        if (!openFolderId) restoreIpRestingAction();
      }
      setTimeout(() => { el._didCanvasDrag = false; }, 0);
    }
  });
  el.addEventListener('dragstart', e => e.preventDefault());
  el.addEventListener('click', e => {
    if (!el._didCanvasDrag) return;
    e.preventDefault();
    e.stopPropagation();
    el._didCanvasDrag = false;
  });
}

function placeIpAtScreenCorner() {
  if (!ipCompanion || !ipCompanion.isConnected || ipCompanion.classList.contains('project-docked')) return;
  if (isMobileLayout()) return;
  const scale = getCanvasScale();
  const edge = 24;
  const renderedWidth = ipCompanion.offsetWidth * scale;
  const renderedHeight = ipCompanion.offsetHeight * scale;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const right = viewportWidth - edge - renderedWidth;
  const bottom = viewportHeight - edge - renderedHeight;
  const candidates = [
    { left: right, top: bottom },
    { left: Math.max(edge, right - 48), top: 86 },
    { left: edge, top: bottom },
    { left: edge, top: 86 }
  ];
  const obstacles = Array.from(document.querySelectorAll('.folder, .timeline-rail, .tl-year, .me-photo-card, .me-about-card, .hero, .contact-wrap'))
    .filter(el => el !== ipCompanion && getComputedStyle(el).display !== 'none')
    .map(el => el.getBoundingClientRect());
  const padding = 10;
  const overlaps = candidate => obstacles.some(rect =>
    candidate.left < rect.right + padding &&
    candidate.left + renderedWidth > rect.left - padding &&
    candidate.top < rect.bottom + padding &&
    candidate.top + renderedHeight > rect.top - padding
  );
  const target = candidates.find(candidate => !overlaps(candidate)) || candidates[0];
  const left = (target.left - desktopOffsetX) / scale;
  const top = (target.top - desktopOffsetY) / scale;
  ipCompanion.style.left = Math.max(0, Math.min(CANVAS_WIDTH - ipCompanion.offsetWidth, left)) + 'px';
  ipCompanion.style.top = Math.max(0, Math.min(CANVAS_HEIGHT - ipCompanion.offsetHeight, top)) + 'px';
}

function initCanvasItemDragging() {
  const mobileLayout = isMobileLayout();
  placeIpAtScreenCorner();
  const items = Array.from(document.querySelectorAll('#canvas > .experience-card, #canvas > .tools-card, #canvas > .me-about-card, #canvas > .me-photo-card, #canvas > .ip-companion'));
  items.forEach((el, index) => {
    const key = el.id || `${el.classList[0]}-${index}`;
    el.dataset.canvasDragKey = key;
    el.dataset.defaultLeft = el.style.left || '0px';
    el.dataset.defaultTop = el.style.top || '0px';
    if (!mobileLayout) attachCanvasItemDrag(el);
  });
}

function attachFolderDrag(folder) {
  let startX, startY, origX, origY, dragging = false, moved = false;
  const DRAG_THRESHOLD = 4;

  folder.addEventListener('pointerdown', e => {
    if (openFolderId) return; // cannot drag while a window is open
    if (e.button !== 0) return;
    e.stopPropagation();
    folder.setPointerCapture(e.pointerId);
    folder._didDrag = false;
    startX = e.clientX; startY = e.clientY;
    origX = parseInt(folder.style.left || folder.dataset.left || 0, 10);
    origY = parseInt(folder.style.top || folder.dataset.top || 0, 10);
    dragging = true; moved = false;
  });

  folder.addEventListener('pointermove', e => {
    if (!dragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (!moved && (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD)) {
      moved = true;
      folder._didDrag = true;
      folder.classList.add('is-dragging');
    }
    if (moved) {
      const scale = getCanvasScale();
      const newX = Math.max(0, Math.min(CANVAS_WIDTH - FOLDER_W, origX + dx / scale));
      const newY = Math.max(0, Math.min(CANVAS_HEIGHT - FOLDER_H, origY + dy / scale));
      folder.style.left = newX + 'px';
      folder.style.top = newY + 'px';
      folder.dataset.left = Math.round(newX);
      folder.dataset.top = Math.round(newY);
    }
  });

  const endDrag = e => {
    if (!dragging) return;
    dragging = false;
    folder.classList.remove('is-dragging');
    if (moved) {
      setTimeout(() => { folder._didDrag = false; pointerMoved = false; }, 0);
    }
  };

  folder.addEventListener('pointerup', endDrag);
  folder.addEventListener('pointercancel', endDrag);

  let mouseDragging = false;
  folder.addEventListener('mousedown', e => {
    if (openFolderId || e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();
    folder._didDrag = false;
    startX = e.clientX; startY = e.clientY;
    origX = parseInt(folder.style.left || folder.dataset.left || 0, 10);
    origY = parseInt(folder.style.top || folder.dataset.top || 0, 10);
    mouseDragging = true; moved = false;
  });
  window.addEventListener('mousemove', e => {
    if (!mouseDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (!moved && (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD)) {
      moved = true;
      folder._didDrag = true;
      folder.classList.add('is-dragging');
    }
    if (!moved) return;
    const scale = getCanvasScale();
    const newX = Math.max(0, Math.min(CANVAS_WIDTH - FOLDER_W, origX + dx / scale));
    const newY = Math.max(0, Math.min(CANVAS_HEIGHT - FOLDER_H, origY + dy / scale));
    folder.style.left = newX + 'px';
    folder.style.top = newY + 'px';
    folder.dataset.left = Math.round(newX);
    folder.dataset.top = Math.round(newY);
  });
  window.addEventListener('mouseup', () => {
    if (!mouseDragging) return;
    mouseDragging = false;
    folder.classList.remove('is-dragging');
    if (moved) {
      setTimeout(() => { folder._didDrag = false; pointerMoved = false; }, 0);
    }
  });
}

// Explicit hover state mirrors :hover and keeps the photo fan animation
// working inside iframe-based local previews.
let hoveredFolder = null;
window.addEventListener('mousemove', e => {
  const hit = document.elementFromPoint(e.clientX, e.clientY);
  const next = hit && hit.closest ? hit.closest('.folder') : null;
  if (next === hoveredFolder) return;
  if (hoveredFolder) hoveredFolder.classList.remove('is-hovered');
  hoveredFolder = next;
  if (hoveredFolder && !openFolderId) hoveredFolder.classList.add('is-hovered');
}, { passive: true });
window.addEventListener('mouseout', e => {
  if (e.relatedTarget) return;
  if (hoveredFolder) hoveredFolder.classList.remove('is-hovered');
  hoveredFolder = null;
});


/* ====================================================
   INTRO
==================================================== */
setTimeout(() => document.body.classList.remove('intro'), 100);
setTimeout(() => { const hint = document.getElementById('drag-hint'); if (hint) hint.classList.remove('in'); }, 4200);

/* ====================================================
   CUSTOM CURSOR
==================================================== */
let mouseX = 0, mouseY = 0;
window.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  if (!isPanning) updateIpLook(mouseX, mouseY);
  if (!window.matchMedia('(pointer: coarse)').matches) {
    cRing.style.left = mouseX + 'px';
    cRing.style.top = mouseY + 'px';
    cRing.style.opacity = isPanning ? '' : '1';
  }
}, { passive: true });

/* ====================================================
   CANVAS PANNING
==================================================== */
function setCanvas() {
  if (isMobileLayout()) {
    canvas.style.transform = 'none';
    hero.style.left = '';
    hero.style.top = '';
    hero.style.transform = '';
    if (ipCompanion) {
      ipCompanion.style.setProperty('--canvas-pan-x', '0px');
      ipCompanion.style.setProperty('--canvas-pan-y', '0px');
    }
    return;
  }
  canvas.style.transform = `translate(${desktopOffsetX}px, ${desktopOffsetY}px) scale(${desktopScale}) translate(${panX}px, ${panY}px)`;
  hero.style.left = '0px';
  hero.style.top = '0px';
  hero.style.transformOrigin = '0 0';
  hero.style.transform = `translate(${desktopOffsetX + 256 * desktopScale}px, ${desktopOffsetY + 34 * desktopScale}px) scale(${desktopScale})`;
  if (ipCompanion && !ipCompanion.classList.contains('project-docked')) {
    ipCompanion.style.setProperty('--canvas-pan-x', `${-panX}px`);
    ipCompanion.style.setProperty('--canvas-pan-y', `${-panY}px`);
  }
}
function lockDocumentScroll() {
  if (isMobileLayout()) return;
  if (window.scrollX || window.scrollY) window.scrollTo(0, 0);
}
window.addEventListener('scroll', lockDocumentScroll, { passive: true });
function resetCanvas() {
  if (openFolderId) return;
  panX = INITIAL_PAN_X;
  panY = INITIAL_PAN_Y;
  setCanvas();
  localStorage.removeItem(FOLDER_POSITIONS_KEY);
  localStorage.removeItem(CANVAS_ITEM_POSITIONS_KEY);
  document.querySelectorAll('.folder,[data-canvas-drag-key]').forEach(el => {
    if (el.dataset.defaultLeft !== undefined) el.style.left = el.dataset.defaultLeft;
    if (el.dataset.defaultTop !== undefined) el.style.top = el.dataset.defaultTop;
    if (el.classList.contains('folder')) {
      el.dataset.left = parseFloat(el.style.left) || 0;
      el.dataset.top = parseFloat(el.style.top) || 0;
    }
  });
}

window.addEventListener('pointerdown', e => {
  if (isMobileLayout()) return;
  if (e.target.closest('.figma-sidebar') || e.target.closest('.hero') || e.target.closest('.contact-wrap') || e.target.closest('.proj-preview-pip') || e.target.closest('#back-btn') || e.target.closest('#canvasResetBtn')) return;
  if (e.target.closest('.push-btn') || e.target.closest('.folder')) return;
  if (e.button !== 0 && e.button !== 1) return;
  pointerMoved = false;
  pointerDownX = e.clientX; pointerDownY = e.clientY;
  isPanning = true;
  const scale = getCanvasScale();
  panStartX = (e.clientX - desktopOffsetX) / scale - panX;
  panStartY = (e.clientY - desktopOffsetY) / scale - panY;
  document.body.classList.add('panning');
  cRing.style.opacity = '1';
});
window.addEventListener('pointermove', e => {
  if (!isPanning) return;
  if (Math.abs(e.clientX - pointerDownX) > 4 || Math.abs(e.clientY - pointerDownY) > 4) pointerMoved = true;
  const scale = getCanvasScale();
  panX = (e.clientX - desktopOffsetX) / scale - panStartX;
  panY = (e.clientY - desktopOffsetY) / scale - panStartY;
  setCanvas();
}, { passive: true });
window.addEventListener('pointerup', () => { isPanning = false; document.body.classList.remove('panning'); setTimeout(() => pointerMoved = false, 50); });
window.addEventListener('wheel', e => { if (openFolderId || isMobileLayout()) return; const scale = getCanvasScale(); panX -= e.deltaX / scale; panY -= e.deltaY / scale; setCanvas(); }, { passive: true });
resetBtn.addEventListener('click', resetCanvas);

/* ====================================================
   BUILD WINDOW SCREENSHOT MOCKUP
==================================================== */
function buildScreenshotScene(preview, w, h, scale, label) {
  const L = (label || 'View').toLowerCase();
  const isDark = /#3A3A3A|#4A4A4A|#2E2E2E|#1A1A1A/i.test(preview.bg);
  const col = isDark ? '#ffffff' : '#1a1a1a';
  const soft = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)';
  const soft2 = isDark ? 'rgba(255,255,255,0.28)' : 'rgba(0,0,0,0.28)';
  const panel = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.55)';
  const positive = isDark ? '#4ade80' : '#22c55e';
  const negative = isDark ? '#f87171' : '#ef4444';
  const neutral = isDark ? '#60a5fa' : '#3b82f6';

  let svg = '';
  const vbW = 400, vbH = 290;

  function miniSpark(xs, ys, color, opacity, strokeWidth) { let d = `M${xs[0]} ${ys[0]}`; for (let i = 1; i < xs.length; i++) d += ` L${xs[i]} ${ys[i]}`; return `<path d="${d}" fill="none" stroke="${color}" stroke-width="${strokeWidth || 2}" opacity="${opacity}" stroke-linecap="round" stroke-linejoin="round"/>`; }
  function miniBars(x, y, widths, height, gap, color) { let out = ''; let cx = x; widths.forEach((w, i) => { out += `<rect x="${cx}" y="${y - height[i]}" width="${w}" height="${height[i]}" rx="2" fill="${color}" opacity="${0.25 + i * 0.08}"/>`; cx += w + gap; }); return out; }
  function avatar(x, y, size, color) { return `<circle cx="${x + size/2}" cy="${y + size/2}" r="${size/2}" fill="${color}" opacity="0.18"/> <rect x="${x + size*0.25}" y="${y + size*0.3}" width="${size*0.5}" height="${size*0.4}" rx="${size*0.2}" fill="${color}" opacity="0.5"/>`; }
  function progressBar(x, y, w, h, pct, color) { return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h/2}" fill="${soft2}" opacity="0.35"/> <rect x="${x}" y="${y}" width="${w * pct}" height="${h}" rx="${h/2}" fill="${color}" opacity="0.85"/>`; }
  function tag(x, y, w, h, color, label) { return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h/2}" fill="${color}" opacity="0.15"/> <text x="${x + w/2}" y="${y + h/2 + 3}" font-size="8" font-weight="700" fill="${color}" opacity="0.85" text-anchor="middle">${label}</text>`; }

  // Browser-like top nav / header
  svg += `<rect x="0" y="0" width="${vbW}" height="40" fill="${panel}"/>`;
  svg += `<rect x="18" y="14" width="60" height="12" rx="3" fill="${soft}"/>`;
  svg += `<rect x="282" y="14" width="42" height="12" rx="3" fill="${soft2}"/>`;
  svg += `<rect x="330" y="14" width="42" height="12" rx="3" fill="${soft2}"/>`;
  svg += `<rect x="378" y="14" width="24" height="12" rx="3" fill="${soft2}"/>`;

  if (L.includes('market') || L.includes('growth') || L.includes('scale') || L.includes('sales') || L.includes('leads')) {
    // Dashboard: stat cards + chart
    const topCards = [
      {x: 18, label: 'Total users', val: '12.4K', trend: '+8.2%', good: true},
      {x: 142, label: 'MRR', val: '$48.2K', trend: '+12.5%', good: true},
      {x: 266, label: 'Churn', val: '2.1%', trend: '-0.4%', good: true}
    ];
    topCards.forEach(c => {
      svg += `<rect x="${c.x}" y="54" width="120" height="72" rx="8" fill="${panel}"/>`;
      svg += avatar(c.x + 12, 70, 20, col);
      svg += `<rect x="${c.x + 40}" y="72" width="58" height="7" rx="2" fill="${soft}"/>`;
      svg += `<text x="${c.x + 14}" y="${110}" font-size="18" font-weight="700" fill="${col}" opacity="0.9">${c.val}</text>`;
      svg += tag(c.x + 72, 100, 36, 14, c.good ? positive : negative, c.trend);
    });
    svg += `<rect x="18" y="138" width="238" height="142" rx="8" fill="${panel}"/>`;
    svg += `<rect x="32" y="154" width="100" height="8" rx="2" fill="${soft}"/>`;
    svg += `<rect x="32" y="168" width="70" height="6" rx="2" fill="${soft2}"/>`;
    const lineXs = [40, 80, 120, 160, 200, 240, 280, 320, 360, 400];
    const lineYs = [255, 235, 245, 220, 232, 210, 240, 225, 218, 205];
    let area = `M${lineXs[0]-10} 270 L${lineXs[0]} ${lineYs[0]}`;
    for (let i = 1; i < lineXs.length; i++) area += ` L${lineXs[i]} ${lineYs[i]}`;
    area += ` L${lineXs[lineXs.length-1]+10} 270 Z`;
    svg += `<path d="${area}" fill="${neutral}" opacity="0.12"/>`;
    svg += miniSpark(lineXs, lineYs, neutral, 0.85, 2.5);
    for (let i = 0; i < lineXs.length; i += 2) {
      svg += `<circle cx="${lineXs[i]}" cy="${lineYs[i]}" r="3" fill="#fff"/>`;
      svg += `<circle cx="${lineXs[i]}" cy="${lineYs[i]}" r="3" fill="${neutral}" opacity="0.85"/>`;
    }
    svg += `<rect x="270" y="138" width="112" height="142" rx="8" fill="${panel}"/>`;
    svg += `<rect x="284" y="154" width="80" height="8" rx="2" fill="${soft}"/>`;
    svg += miniBars(286, 260, [14, 14, 14, 14, 14], [42, 56, 38, 68, 48], 6, col);
    svg += `<rect x="18" y="290" width="0" height="0"/>`;
  } else if (L.includes('workshop') || L.includes('event') || L.includes('launch')) {
    // Hero + feature cards
    svg += `<rect x="18" y="52" width="200" height="18" rx="3" fill="${col}" opacity="0.85"/>`;
    svg += `<rect x="18" y="82" width="160" height="9" rx="2" fill="${soft}"/>`;
    svg += `<rect x="18" y="100" width="110" height="9" rx="2" fill="${soft2}"/>`;
    svg += `<rect x="18" y="124" width="90" height="28" rx="8" fill="${col}" opacity="0.85"/>`;
    svg += `<rect x="118" y="130" width="28" height="16" rx="8" fill="${soft2}"/>`;
    svg += `<rect x="260" y="52" width="122" height="130" rx="8" fill="${panel}"/>`;
    svg += `<rect x="272" y="66" width="98" height="76" rx="6" fill="${col}" opacity="0.08"/>`;
    svg += `<circle cx="321" cy="96" r="24" fill="${col}" opacity="0.10"/>`;
    svg += `<rect x="280" y="150" width="82" height="8" rx="2" fill="${soft}"/>`;
    svg += `<rect x="280" y="164" width="60" height="6" rx="2" fill="${soft2}"/>`;
    for (let i = 0; i < 3; i++) {
      const x = 18 + i * 130;
      svg += `<rect x="${x}" y="196" width="120" height="84" rx="8" fill="${panel}"/>`;
      svg += `<rect x="${x + 12}" y="212" width="96" height="44" rx="5" fill="${col}" opacity="0.08"/>`;
      svg += `<rect x="${x + 12}" y="212" width="96" height="44" rx="5" fill="url(#lp-grad-${i})" opacity="0.06"/>`;
      svg += `<defs><linearGradient id="lp-grad-${i}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${col}" stop-opacity="0.2"/><stop offset="1" stop-color="${col}" stop-opacity="0"/></linearGradient></defs>`;
      svg += `<rect x="${x + 12}" y="264" width="48" height="7" rx="2" fill="${soft}"/>`;
      svg += `<rect x="${x + 12}" y="278" width="80" height="5" rx="1" fill="${soft2}"/>`;
      svg += `<circle cx="${x + 100}" cy="256" r="10" fill="${col}" opacity="0.12"/>`;
      svg += `<rect x="${x + 96}" y="252" width="8" height="8" rx="2" fill="${col}" opacity="0.5"/>`;
    }
  } else if (L.includes('skill') || L.includes('kb') || L.includes('content') || L.includes('partners') || L.includes('channels')) {
    // List rows
    for (let i = 0; i < 4; i++) {
      const y = 54 + i * 58;
      svg += `<rect x="18" y="${y}" width="364" height="52" rx="8" fill="${panel}"/>`;
      svg += avatar(32, y + 12, 28, col);
      svg += `<rect x="72" y="${y + 14}" width="110" height="8" rx="2" fill="${soft}"/>`;
      svg += `<rect x="72" y="${y + 28}" width="74" height="5" rx="1" fill="${soft2}"/>`;
      svg += progressBar(72, y + 40, 90, 5, 0.4 + i * 0.15, i % 2 === 0 ? neutral : positive);
      svg += tag(290, y + 14, 48, 16, neutral, i % 2 ? 'Active' : 'New');
      svg += `<rect x="352" y="${y + 18}" width="18" height="18" rx="4" fill="${col}" opacity="0.08"/>`;
      svg += `<rect x="356" y="${y + 26}" width="10" height="2" rx="1" fill="${col}" opacity="0.35"/>`;
    }
    for (let i = 0; i < 3; i++) {
      const y = 288;
      const x = 18 + i * 128;
      svg += `<rect x="${x}" y="${y}" width="116" height="52" rx="6" fill="${panel}"/>`;
      svg += progressBar(x + 12, y + 36, 92, 5, 0.5 + i * 0.1, i % 2 ? positive : neutral);
      svg += `<rect x="${x + 12}" y="${y + 14}" width="48" height="7" rx="2" fill="${soft}"/>`;
      svg += `<rect x="${x + 12}" y="${y + 26}" width="70" height="5" rx="1" fill="${soft2}"/>`;
    }
  } else if (L.includes('seo') || L.includes('search')) {
    // Search results
    svg += `<rect x="18" y="52" width="364" height="44" rx="8" fill="${panel}"/>`;
    svg += `<rect x="34" y="70" width="180" height="9" rx="2" fill="${soft}"/>`;
    svg += `<rect x="330" y="64" width="38" height="22" rx="11" fill="${col}" opacity="0.8"/>`;
    svg += `<rect x="22" y="58" width="6" height="12" rx="1" fill="${soft2}" transform="rotate(-45 25 64)"/>`;
    svg += `<rect x="22" y="58" width="6" height="12" rx="1" fill="${soft2}" transform="rotate(45 25 64)"/>`;
    for (let i = 0; i < 4; i++) {
      const y = 108 + i * 44;
      svg += `<rect x="18" y="${y}" width="364" height="40" rx="6" fill="${panel}"/>`;
      svg += avatar(32, y + 8, 24, col);
      svg += `<rect x="68" y="${y + 10}" width="120" height="7" rx="2" fill="${soft}"/>`;
      svg += `<rect x="68" y="${y + 22}" width="90" height="5" rx="1" fill="${soft2}"/>`;
      svg += `<rect x="210" y="${y + 22}" width="60" height="5" rx="1" fill="${soft2}" opacity="0.5"/>`;
      svg += tag(330, y + 12, 38, 14, i % 2 ? positive : neutral, i % 2 ? 'SEO' : 'Ads');
    }
    svg += `<rect x="18" y="284" width="364" height="42" rx="8" fill="${panel}"/>`;
    svg += `<rect x="34" y="300" width="120" height="7" rx="2" fill="${soft}"/>`;
    svg += `<rect x="34" y="314" width="90" height="5" rx="1" fill="${soft2}"/>`;
    svg += `<rect x="300" y="302" width="66" height="20" rx="10" fill="${col}" opacity="0.75"/>`;
  } else if (L.includes('social') || L.includes('community') || L.includes('campus')) {
    // Grid cards
    for (let i = 0; i < 4; i++) {
      const x = 18 + (i % 2) * 190;
      const y = 52 + Math.floor(i / 2) * 116;
      svg += `<rect x="${x}" y="${y}" width="176" height="100" rx="8" fill="${panel}"/>`;
      svg += `<rect x="${x + 12}" y="${y + 12}" width="152" height="48" rx="5" fill="${col}" opacity="0.08"/>`;
      svg += `<rect x="${x + 12}" y="${y + 70}" width="60" height="7" rx="2" fill="${soft}"/>`;
      svg += `<rect x="${x + 12}" y="${y + 84}" width="90" height="5" rx="1" fill="${soft2}"/>`;
      svg += avatar(x + 140, y + 68, 22, col);
      svg += `<circle cx="${x + 24}" cy="${y + 88}" r="4" fill="${positive}" opacity="0.8"/>`;
      svg += `<rect x="${x + 32}" y="${y + 86}" width="30" height="5" rx="1" fill="${soft2}"/>`;
    }
    for (let i = 0; i < 3; i++) {
      const x = 18 + i * 128;
      const y = 270;
      svg += `<rect x="${x}" y="${y}" width="116" height="60" rx="6" fill="${panel}"/>`;
      svg += avatar(x + 12, y + 16, 28, col);
      svg += `<rect x="${x + 50}" y="${y + 18}" width="48" height="7" rx="2" fill="${soft}"/>`;
      svg += `<rect x="${x + 50}" y="${y + 32}" width="38" height="5" rx="1" fill="${soft2}"/>`;
      svg += tag(x + 50, y + 44, 36, 12, i % 2 ? positive : neutral, i % 2 ? 'Like' : 'Join');
    }
  } else if (L.includes('ai') || L.includes('clone')) {
    // Chat / AI interface
    svg += `<rect x="18" y="52" width="364" height="228" rx="8" fill="${panel}"/>`;
    svg += avatar(34, 68, 28, col);
    svg += `<rect x="74" y="72" width="110" height="8" rx="2" fill="${soft}"/>`;
    svg += `<rect x="74" y="86" width="210" height="40" rx="8" fill="${col}" opacity="0.08"/>`;
    svg += `<rect x="82" y="96" width="120" height="6" rx="1" fill="${soft}"/>`;
    svg += `<rect x="82" y="108" width="90" height="5" rx="1" fill="${soft2}"/>`;
    svg += `<rect x="110" y="142" width="210" height="40" rx="8" fill="${neutral}" opacity="0.12"/>`;
    svg += `<rect x="124" y="154" width="120" height="6" rx="1" fill="${neutral}" opacity="0.6"/>`;
    svg += `<rect x="124" y="166" width="90" height="5" rx="1" fill="${neutral}" opacity="0.45"/>`;
    svg += avatar(340, 142, 28, neutral);
    svg += `<rect x="74" y="194" width="210" height="40" rx="8" fill="${col}" opacity="0.08"/>`;
    svg += `<rect x="82" y="204" width="130" height="6" rx="1" fill="${soft}"/>`;
    svg += `<rect x="82" y="216" width="100" height="5" rx="1" fill="${soft2}"/>`;
    svg += `<rect x="18" y="252" width="364" height="38" rx="8" fill="${panel}"/>`;
    svg += `<rect x="34" y="266" width="240" height="10" rx="2" fill="${soft2}"/>`;
    svg += `<rect x="294" y="266" width="28" height="10" rx="2" fill="${soft2}"/>`;
    svg += `<rect x="334" y="260" width="36" height="22" rx="11" fill="${col}" opacity="0.8"/>`;
    svg += `<rect x="344" y="267" width="16" height="8" rx="2" fill="#fff"/>`;
  } else {
    // Default landing page
    svg += `<rect x="18" y="52" width="210" height="18" rx="3" fill="${col}" opacity="0.85"/>`;
    svg += `<rect x="18" y="82" width="150" height="9" rx="2" fill="${soft}"/>`;
    svg += `<rect x="18" y="104" width="70" height="28" rx="8" fill="${col}" opacity="0.85"/>`;
    svg += `<rect x="260" y="52" width="122" height="130" rx="8" fill="${panel}"/>`;
    svg += `<rect x="18" y="150" width="210" height="8" rx="2" fill="${soft2}"/>`;
    svg += `<rect x="18" y="170" width="364" height="112" rx="8" fill="${panel}"/>`;
    svg += `<rect x="34" y="186" width="332" height="80" rx="5" fill="${col}" opacity="0.06"/>`;
    svg += `<rect x="34" y="186" width="332" height="80" rx="5" fill="url(#def-grad)" opacity="0.06"/>`;
    svg += `<defs><linearGradient id="def-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${col}" stop-opacity="0.2"/><stop offset="1" stop-color="${col}" stop-opacity="0"/></linearGradient></defs>`;
    svg += `<rect x="34" y="228" width="120" height="10" rx="2" fill="${soft}"/>`;
    svg += `<rect x="34" y="244" width="90" height="6" rx="1" fill="${soft2}"/>`;
    svg += `<rect x="300" y="210" width="66" height="24" rx="12" fill="${col}" opacity="0.75"/>`;
  }

  return `<svg class="shot-svg" width="100%" height="100%" viewBox="0 0 ${vbW} ${vbH}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${svg}</svg>`;
}

function buildMockup(preview, w, h, label) {
  const sheet = preview.sheet || '';
  const image = preview.img || '';
  const quadrant = Number.isInteger(preview.quadrant) ? preview.quadrant : 0;
  const positions = ['0% 0%', '100% 0%', '0% 100%', '100% 100%'];
  const media = image
    ? `<img class="shot-image${preview.generated ? ' shot-image-generated' : ''}" src="${image}" alt="${label || '项目展示'}" loading="lazy" decoding="async" draggable="false">`
    : sheet
      ? `<div class="shot-raster" role="img" aria-label="${label || '项目展示'}" style="background-image:url('${sheet}');background-position:${positions[quadrant]};"></div>`
      : `<div class="shot-fallback">${buildScreenshotScene(preview, w, h, w / 186, label)}</div>`;
  const badges = Array.isArray(preview.badges) && preview.badges.length
    ? `<div class="shot-badges">${preview.badges.map((src, index) => `<img class="shot-badge" src="${src}" alt="${index === 0 ? 'GitHub Trending 每日第一' : 'Trendshift 月度第二'}" loading="lazy" decoding="async" draggable="false">`).join('')}</div>`
    : '';
  const fitClass = preview.fit === 'contain' ? ' shot-media-contain' : '';
  const badgeClass = badges ? ' has-badges' : '';
  return `
    <div class="shot-card">
      <div class="shot-media${fitClass}${badgeClass}" style="background:${preview.bg};">${media}${badges}</div>
    </div>
  `;
}


function buildPipCard(preview, w, h, label) {
  return `
    <div class="pip-card-wrap" style="position:relative;">
      ${buildMockup(preview, w, h, label)}
    </div>
  `;
}

/* ====================================================
   FOLDER OPEN / CLOSE — source interaction + macOS photo chrome
==================================================== */
const activePips = [];
let folderClosing = false;

function clamp(min, value, max) {
  return Math.max(min, Math.min(value, max));
}

function getDesktopDetailLayout(previewCount = 4) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const noteWidth = clamp(320, vw * .25, 420);
  const noteRight = clamp(34, vw * .04, 72);
  const noteLeft = vw - noteRight - noteWidth;
  const imageLeft = clamp(250, vw * .17, 330);
  const textGap = clamp(34, vw * .03, 60);
  const gridGap = clamp(16, vw * .0125, 24);
  const gridTop = clamp(48, vh * .055, 72);
  const gridBottom = clamp(40, vh * .06, 68);
  const imageRight = noteLeft - textGap;
  const gridWidth = imageRight - imageLeft;
  const gridHeight = vh - gridTop - gridBottom;
  const cardWidth = Math.max(250, (gridWidth - gridGap) / 2);
  const cardHeight = Math.max(230, (gridHeight - gridGap) / 2);
  const pips = previewCount === 1
    ? (() => {
        const singleWidth = Math.max(520, gridWidth * .86);
        const singleHeight = Math.max(340, Math.min(gridHeight * .76, singleWidth / 1.42));
        return [{ w: singleWidth, h: singleHeight, left: imageLeft + (gridWidth - singleWidth) / 2, top: gridTop + (gridHeight - singleHeight) / 2, rot: -.65 }];
      })()
    : previewCount === 2
      ? (() => {
        const wideWidth = Math.max(480, gridWidth * .64);
        const wideHeight = Math.max(280, Math.min(gridHeight * .58, wideWidth / 1.55));
        return [
          { w: wideWidth, h: wideHeight, left: imageLeft, top: gridTop + 14, rot: -1.35 },
          { w: wideWidth, h: wideHeight, left: imageLeft + gridWidth - wideWidth, top: gridTop + gridHeight - wideHeight - 12, rot: 1.15 }
        ];
      })()
    : previewCount === 3
    ? (() => {
        const topHeight = Math.max(230, (gridHeight - gridGap) * .47);
        const bottomHeight = Math.max(230, gridHeight - gridGap - topHeight);
        return [
          { w: cardWidth, h: topHeight, left: imageLeft, top: gridTop, rot: -1.35 },
          { w: cardWidth, h: topHeight, left: imageLeft + cardWidth + gridGap, top: gridTop, rot: 1.15 },
          { w: gridWidth, h: bottomHeight, left: imageLeft, top: gridTop + topHeight + gridGap, rot: -.45 }
        ];
      })()
    : previewCount === 5
      ? (() => {
          const rowHeight = Math.max(170, (gridHeight - gridGap * 2) / 3);
          const secondRowTop = gridTop + rowHeight + gridGap;
          const thirdRowTop = secondRowTop + rowHeight + gridGap;
          return [
            { w: cardWidth, h: rowHeight, left: imageLeft, top: gridTop, rot: -1.1 },
            { w: cardWidth, h: rowHeight, left: imageLeft + cardWidth + gridGap, top: gridTop, rot: 1.05 },
            { w: cardWidth, h: rowHeight, left: imageLeft, top: secondRowTop, rot: .65 },
            { w: cardWidth, h: rowHeight, left: imageLeft + cardWidth + gridGap, top: secondRowTop, rot: -.8 },
            { w: cardWidth, h: rowHeight, left: imageLeft + (gridWidth - cardWidth) / 2, top: thirdRowTop, rot: .25 }
          ];
        })()
    : [
        { w: cardWidth, h: cardHeight, left: imageLeft, top: gridTop, rot: -1.5 },
        { w: cardWidth, h: cardHeight, left: imageLeft + cardWidth + gridGap, top: gridTop, rot: 1.4 },
        { w: cardWidth, h: cardHeight, left: imageLeft, top: gridTop + cardHeight + gridGap, rot: .9 },
        { w: cardWidth, h: cardHeight, left: imageLeft + cardWidth + gridGap, top: gridTop + cardHeight + gridGap, rot: -1.2 }
      ];

  return {
    folderLeft: clamp(38, vw * .03, 60),
    folderTop: clamp(98, vh * .12, 132),
    noteLeft,
    noteWidth,
    pips
  };
}

function makeFloatingDraggable(el, handleSelector) {
  const handle = handleSelector ? el.querySelector(handleSelector) : el;
  if (!handle) return;
  let sx = 0, sy = 0, ox = 0, oy = 0, dragging = false;
  handle.addEventListener('pointerdown', e => {
    if (el.classList.contains('is-fullscreen') || e.target.closest('a,button,.os-traffic')) return;
    e.preventDefault();
    e.stopPropagation();
    dragging = true;
    sx = e.clientX; sy = e.clientY;
    ox = parseFloat(el.style.left) || el.offsetLeft;
    oy = parseFloat(el.style.top) || el.offsetTop;
    el.style.zIndex = 9800 + activePips.indexOf(el);
    handle.setPointerCapture(e.pointerId);
  });
  handle.addEventListener('pointermove', e => {
    if (!dragging || !handle.hasPointerCapture(e.pointerId)) return;
    el.style.left = (ox + e.clientX - sx) + 'px';
    el.style.top = (oy + e.clientY - sy) + 'px';
  });
  const finish = e => {
    if (!dragging) return;
    dragging = false;
    if (handle.hasPointerCapture(e.pointerId)) handle.releasePointerCapture(e.pointerId);
  };
  handle.addEventListener('pointerup', finish);
  handle.addEventListener('pointercancel', finish);

  let mouseDragging = false;
  handle.addEventListener('mousedown', e => {
    if (el.classList.contains('is-fullscreen') || e.button !== 0 || e.target.closest('a,button,.os-traffic')) return;
    e.preventDefault();
    e.stopPropagation();
    mouseDragging = true;
    sx = e.clientX; sy = e.clientY;
    ox = parseFloat(el.style.left) || el.offsetLeft;
    oy = parseFloat(el.style.top) || el.offsetTop;
    el.style.zIndex = 9800 + Math.max(0, activePips.indexOf(el));
  });
  window.addEventListener('mousemove', e => {
    if (!mouseDragging) return;
    el.style.left = (ox + e.clientX - sx) + 'px';
    el.style.top = (oy + e.clientY - sy) + 'px';
  });
  window.addEventListener('mouseup', () => { mouseDragging = false; });
}

function enterPhotoFullscreen(pip) {
  if (!pip || pip.classList.contains('is-fullscreen')) return;
  pip._restoreState = {
    left: pip.style.left,
    top: pip.style.top,
    width: pip.style.width,
    height: pip.style.height,
    zIndex: pip.style.zIndex,
    transform: `rotate(${pip._rot || 0}deg)`
  };
  pip.classList.add('is-fullscreen');
  document.body.classList.add('photo-fullscreen');
  pip.style.transition = 'left .52s cubic-bezier(.22,1,.36,1), top .52s cubic-bezier(.22,1,.36,1), width .52s cubic-bezier(.22,1,.36,1), height .52s cubic-bezier(.22,1,.36,1), transform .52s cubic-bezier(.22,1,.36,1), box-shadow .3s ease';
  pip.style.left = '24px';
  pip.style.top = '24px';
  pip.style.width = Math.max(320, window.innerWidth - 48) + 'px';
  pip.style.height = Math.max(260, window.innerHeight - 48) + 'px';
  pip.style.transform = 'rotate(0deg)';
  pip.style.zIndex = '10020';
  const maxButton = pip.querySelector('.tl-max');
  if (maxButton) {
    maxButton.ariaLabel = '还原图片窗口';
    maxButton.title = '还原窗口';
  }
  const closeButton = pip.querySelector('.tl-close');
  if (closeButton) {
    closeButton.ariaLabel = '还原图片窗口';
    closeButton.title = '还原窗口';
  }
}

function restorePhotoWindow(pip) {
  if (!pip || !pip.classList.contains('is-fullscreen') || !pip._restoreState) return;
  const state = pip._restoreState;
  pip.classList.remove('is-fullscreen');
  document.body.classList.remove('photo-fullscreen');
  pip.style.transition = 'left .5s cubic-bezier(.4,0,.2,1), top .5s cubic-bezier(.4,0,.2,1), width .5s cubic-bezier(.4,0,.2,1), height .5s cubic-bezier(.4,0,.2,1), transform .5s cubic-bezier(.4,0,.2,1), box-shadow .3s ease';
  pip.style.left = state.left;
  pip.style.top = state.top;
  pip.style.width = state.width;
  pip.style.height = state.height;
  pip.style.transform = state.transform;
  pip.style.zIndex = state.zIndex;
  pip._restoreState = null;
  const maxButton = pip.querySelector('.tl-max');
  if (maxButton) {
    maxButton.ariaLabel = '全屏查看图片';
    maxButton.title = '全屏查看';
  }
  const closeButton = pip.querySelector('.tl-close');
  if (closeButton) {
    closeButton.ariaLabel = '关闭照片';
    closeButton.title = '关闭照片';
  }
}

function buildMacPhotoPip(proj, key, preview, index, cfg, left, top, folder) {
  const imagePrefix = PROJECT_IMAGE_SETS[key];
  const enriched = Object.assign({
    quadrant: index,
    sheet: proj.sheet || preview.sheet || '',
    img: preview.img || (imagePrefix ? `assets/${imagePrefix}-${index + 1}.png` : ''),
    generated: Boolean(imagePrefix)
  }, preview);
  const pip = document.createElement('div');
  pip.className = 'proj-preview-pip mac-photo-pip';
  pip.dataset.project = key;
  pip.dataset.preview = index;
  pip._rot = cfg.rot;
  pip.style.cssText = `left:${left}px;top:${top}px;width:${cfg.w}px;height:${cfg.h}px;z-index:${index === 3 ? 9190 : 9200 + index};--rot:${cfg.rot}deg;`;
  pip.innerHTML = `
    <div class="pip-window-bar">
      <div class="os-traffic" aria-label="窗口控制">
        <button class="tl-close" type="button" aria-label="关闭照片"></button>
        <span class="tl-min"></span><button class="tl-max" type="button" aria-label="全屏查看图片" title="全屏查看"></button>
      </div>
      <span class="pip-window-title">${preview.label || proj.name}</span>
    </div>
    <div class="pip-window-body">${buildMockup(enriched, cfg.w, cfg.h - 34, preview.label)}</div>`;
  document.body.appendChild(pip);
  activePips.push(pip);

  const folderRect = folder.getBoundingClientRect();
  const targetX = folderRect.left + folderRect.width / 2;
  const targetY = folderRect.top + folderRect.height / 2;
  const pipRect = pip.getBoundingClientRect();
  const fromX = targetX - (pipRect.left + pipRect.width / 2);
  const fromY = targetY - (pipRect.top + pipRect.height / 2);
  pip.style.transform = `translate(${fromX}px,${fromY}px) scale(.04) rotate(0deg)`;
  pip.style.opacity = '0';
  pip.style.filter = 'blur(2px)';
  requestAnimationFrame(() => requestAnimationFrame(() => {
    const delay = 150 + index * 92;
    pip.style.transition = `transform .82s cubic-bezier(.22,1.18,.36,1) ${delay}ms, opacity .22s ease ${delay}ms, filter .38s ease ${delay}ms`;
    pip.style.transform = `rotate(${cfg.rot}deg)`;
    pip.style.opacity = '1';
    pip.style.filter = 'blur(0)';
  }));

  pip.querySelector('.tl-close').addEventListener('click', e => {
    e.stopPropagation();
    if (pip.classList.contains('is-fullscreen')) restorePhotoWindow(pip);
    else closeSinglePip(pip, folder);
  });
  pip.querySelector('.tl-max').addEventListener('click', e => {
    e.stopPropagation();
    if (pip.classList.contains('is-fullscreen')) restorePhotoWindow(pip);
    else enterPhotoFullscreen(pip);
  });
  pip.querySelector('.pip-window-body').addEventListener('click', e => {
    if (e.button !== 0 || pip.classList.contains('is-fullscreen')) return;
    enterPhotoFullscreen(pip);
  });
  makeFloatingDraggable(pip, '.pip-window-bar');
  return pip;
}

function closeSinglePip(pip, folder, delay = 0) {
  const idx = activePips.indexOf(pip);
  if (idx >= 0) activePips.splice(idx, 1);
  if (!pip.isConnected) return;
  if (pip.classList.contains('is-fullscreen')) document.body.classList.remove('photo-fullscreen');
  const rect = pip.getBoundingClientRect();
  const folderRect = folder ? folder.getBoundingClientRect() : { left: 70, top: 110, width: 240, height: 226 };
  const dx = folderRect.left + folderRect.width / 2 - (rect.left + rect.width / 2);
  const dy = folderRect.top + folderRect.height / 2 - (rect.top + rect.height / 2);
  pip.style.transition = `transform .58s cubic-bezier(.55,0,.35,1) ${delay}ms, opacity .26s ease ${delay + 220}ms, filter .3s ease ${delay + 140}ms`;
  pip.style.transform = `translate(${dx}px,${dy}px) scale(.04) rotate(0deg)`;
  pip.style.opacity = '0';
  pip.style.filter = 'blur(2px)';
  setTimeout(() => pip.remove(), 620 + delay);
}

function buildProjectNote(proj, layout) {
  const note = document.createElement('div');
  note.className = 'proj-note-card';
  note.style.left = layout.noteLeft + 'px';
  note.style.width = layout.noteWidth + 'px';
  note.innerHTML = `
    <div class="note-kicker">Project overview</div>
    <div class="note-title">${proj.name}</div>
    <div class="note-meta">${proj.desc}</div>
    <div class="pip-tags">${proj.tags.map(tag => `<span class="pip-tag">${tag}</span>`).join('')}</div>
    <div class="note-desc"><p>${proj.note}</p></div>`;
  document.body.appendChild(note);
  activePips.push(note);
  return note;
}

function openFolder(folder) {
  if (openFolderId || folderClosing) return;
  const key = folder.dataset.project;
  const proj = PROJECTS[key];
  if (!proj) return;
  const isMobileDetail = isMobileLayout();
  lockDocumentScroll();

  const dragHint = document.getElementById('drag-hint');
  if (dragHint) dragHint.classList.remove('in');
  openFolderId = folder.id;

  overlay.classList.add('show');
  sidebar.classList.add('folder-open');
  document.body.classList.add('folder-open');
  backBtn.classList.add('visible');
  resetBtn.classList.remove('show');
  const contacts = document.getElementById('contact-btns');
  contacts.style.opacity = '0';
  contacts.style.pointerEvents = 'none';

  if (isMobileDetail) {
    const scroller = document.createElement('div');
    scroller.className = 'mobile-folder-scroll';
    scroller.setAttribute('role', 'dialog');
    scroller.setAttribute('aria-label', `${FOLDER_META[key]?.title || '项目'}详情`);
    const projectCopy = `<section class="mobile-project-copy"><span class="mobile-project-kicker">PROJECT OVERVIEW</span><div class="pip-title">${proj.name}</div><div class="pip-meta">${proj.desc}</div><div class="pip-tags">${proj.tags.map(t => `<span class="pip-tag">${t}</span>`).join('')}</div><div class="pip-desc">${proj.note}</div></section>`;
    const projectImages = proj.previews.slice(0, 5).map((preview, i) => {
      const prefix = PROJECT_IMAGE_SETS[key];
      const enriched = Object.assign({img: preview.img || (prefix ? `assets/${prefix}-${i + 1}.png` : '')}, preview);
      return `<div class="mobile-folder-img"><span class="mobile-shot-label">${String(i + 1).padStart(2, '0')} · ${preview.label || '项目展示'}</span>${buildMockup(enriched, 362, 280, preview.label)}</div>`;
    }).join('');
    scroller.innerHTML = projectCopy + projectImages;
    document.body.appendChild(scroller);
    activePips.push(scroller);
    requestAnimationFrame(() => {
      scroller.classList.add('in');
      scroller.querySelectorAll('.mobile-folder-img').forEach((item, index) => {
        setTimeout(() => item.classList.add('in'), 70 + index * 85);
      });
    });
    return;
  }

  dockIpForProject();
  const rect = folder.getBoundingClientRect();
  folder._openState = {
    parent: folder.parentNode,
    next: folder.nextSibling,
    left: folder.style.left,
    top: folder.style.top,
    position: folder.style.position,
    zIndex: folder.style.zIndex,
    rect
  };
  const detailLayout = getDesktopDetailLayout(proj.previews.length);
  folder.classList.add('is-open');
  folder.style.cssText += `;position:fixed;left:${rect.left}px;top:${rect.top}px;z-index:9100;`;
  document.body.appendChild(folder);
  void folder.offsetWidth;
  folder.style.transition = 'left .68s cubic-bezier(.22,1,.36,1), top .68s cubic-bezier(.22,1,.36,1), transform .48s cubic-bezier(.34,1.56,.64,1)';
  folder.style.left = detailLayout.folderLeft + 'px';
  folder.style.top = detailLayout.folderTop + 'px';

  proj.previews.slice(0, 5).forEach((preview, index) => {
    const cfg = detailLayout.pips[index];
    buildMacPhotoPip(proj, key, preview, index, cfg, cfg.left, cfg.top, folder);
  });
  buildProjectNote(proj, detailLayout);
}

function closeFolder() {
  if (!openFolderId || folderClosing) return;
  if (isMobileLayout()) {
    folderClosing = true;
    openFolderId = null;
    const closing = activePips.splice(0);
    closing.forEach(pip => {
      pip.style.transition = 'opacity .18s ease, transform .22s ease';
      pip.style.opacity = '0';
      pip.style.transform = 'translateY(10px)';
      setTimeout(() => pip.remove(), 220);
    });
    setTimeout(() => {
      overlay.classList.remove('show');
      sidebar.classList.remove('folder-open');
      document.body.classList.remove('folder-open');
      backBtn.classList.remove('visible');
      const contacts = document.getElementById('contact-btns');
      contacts.style.opacity = '1';
      contacts.style.pointerEvents = 'auto';
      setIpAction('good', 900);
      folderClosing = false;
    }, 230);
    return;
  }
  lockDocumentScroll();
  folderClosing = true;
  const folder = document.getElementById(openFolderId);
  openFolderId = null;
  const closing = activePips.splice(0);
  const photoPips = closing.filter(pip => pip.classList.contains('mac-photo-pip'));
  photoPips.forEach((pip, index) => {
    closeSinglePip(pip, folder, (photoPips.length - index - 1) * 58);
  });
  closing.filter(pip => !pip.classList.contains('mac-photo-pip')).forEach(pip => {
    if (pip.classList.contains('proj-note-card')) {
      pip.style.transition = 'opacity .24s ease, transform .36s cubic-bezier(.4,0,.2,1)';
      pip.style.opacity = '0';
      pip.style.transform = 'translate(30px,-50%) scale(.96)';
    } else {
      pip.style.transition = 'opacity .25s ease, transform .3s ease';
      pip.style.opacity = '0';
      pip.style.transform = 'scale(.9) translateY(12px)';
    }
    setTimeout(() => pip.remove(), 380);
  });

  if (folder && folder._openState) {
    const state = folder._openState;
    setTimeout(() => {
      folder.style.transition = 'left .58s cubic-bezier(.4,0,.2,1), top .58s cubic-bezier(.4,0,.2,1), transform .5s cubic-bezier(.4,0,.2,1)';
      folder.style.left = state.rect.left + 'px';
      folder.style.top = state.rect.top + 'px';
      folder.classList.remove('is-open');
      setTimeout(() => {
        folder.style.position = state.position || 'absolute';
        folder.style.left = state.left;
        folder.style.top = state.top;
        folder.style.zIndex = state.zIndex;
        folder.style.transition = '';
        if (state.next && state.next.parentNode === state.parent) state.parent.insertBefore(folder, state.next);
        else state.parent.appendChild(folder);
        folder._openState = null;
      }, 600);
    }, 470);
  }

  setTimeout(() => {
    lockDocumentScroll();
    overlay.classList.remove('show');
    sidebar.classList.remove('folder-open');
    document.body.classList.remove('folder-open');
    backBtn.classList.remove('visible');
    const contacts = document.getElementById('contact-btns');
    contacts.style.opacity = '1';
    contacts.style.pointerEvents = 'auto';
    restoreIpFromProject();
    setIpAction('good', 1400);
    folderClosing = false;
  }, 1080);
}

backBtn.addEventListener('click', closeFolder);
overlay.addEventListener('click', closeFolder);

/* ====================================================
   FOLDER CLICKS — click the selected folder to fold everything back
==================================================== */
document.querySelectorAll('.folder').forEach(folder => {
  folder.addEventListener('click', () => {
    if (folder._didDrag) { folder._didDrag = false; return; }
    if (folder.id === openFolderId) { closeFolder(); return; }
    if (openFolderId || folderClosing) return;
    openFolder(folder);
  });
  folder.addEventListener('keydown', event => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    if (openFolderId || folderClosing) return;
    openFolder(folder);
  });
});

document.querySelectorAll('.sb-row[data-folder]').forEach(row => {
  row.addEventListener('click', () => {
    const folder = document.getElementById('f-' + row.dataset.folder);
    if (!folder || openFolderId || folderClosing) return;
    sidebarCollapsed = true;
    sidebar.classList.add('collapsed');
    document.body.classList.add('sidebar-collapsed');
    setTimeout(() => openFolder(folder), 120);
  });
});

/* ====================================================
   HERO / MODE TOGGLES
==================================================== */
function toggleCraft() {
  craftMode = !craftMode;
  document.body.classList.toggle('craft', craftMode);
}
heroToggle?.addEventListener('click', toggleCraft);
heroDesign?.addEventListener('click', () => { if (craftMode) toggleCraft(); });
heroPlay?.addEventListener('click', () => { if (!craftMode) toggleCraft(); });
heroName?.addEventListener('click', () => { if (openFolderId) closeFolder(); else resetCanvas(); });

/* ====================================================
   SIDEBAR & THEME
==================================================== */
document.getElementById('sb-toggle').addEventListener('click', () => {
  sidebarCollapsed = !sidebarCollapsed;
  sidebar.classList.toggle('collapsed', sidebarCollapsed);
  document.body.classList.toggle('sidebar-collapsed', sidebarCollapsed);
});

document.getElementById('theme-toggle').addEventListener('click', () => {
  darkMode = !darkMode;
  document.body.classList.toggle('dark', darkMode);
});

/* ====================================================
   KEYBOARD
==================================================== */
window.addEventListener('keydown', e => { if (e.key === 'Escape') closeFolder(); });
window.addEventListener('resize', () => {
  // Re-baseline the canvas for the new breakpoint so desktop/mobile
  // layouts never mix stale pan values with fresh media-query positions.
  const mobileNow = isMobileLayout();
  panX = 0;
  panY = 0;
  updateDesktopStageMetrics();
  if (mobileNow) buildMobileTimeline();
  setCanvas();
  if (!ipCompanion?.dataset.userPositioned && !openFolderId) placeIpAtScreenCorner();
});

// The portfolio may be rearranged for play, but every fresh visit should start
// from the authored composition instead of inheriting stale positions.
try {
  localStorage.removeItem(FOLDER_POSITIONS_KEY);
  localStorage.removeItem(CANVAS_ITEM_POSITIONS_KEY);
} catch (e) {}

updateDesktopStageMetrics();
setCanvas();
lockDocumentScroll();
initFolderPositions();
initIpCompanion();
initCanvasItemDragging();
buildMobileTimeline();
