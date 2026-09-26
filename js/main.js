// ==========================================================================
// アースラボ 共通スクリプト
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
  initTrialModal();
  initDetailModals();
});

// --- ハンバーガーメニュー ------------------------------------------------
function initNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when a link is tapped (mobile)
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// --- 無料体験モーダル（校舎一覧） ----------------------------------------
// 「無料体験」系ボタン（data-trial-trigger）を押すと、校舎の一覧を表示する。
// 校舎名と申込URLは js/trial-schools.js で設定する。
function initTrialModal() {
  const triggers = document.querySelectorAll('[data-trial-trigger]');
  const schools = window.TRIAL_SCHOOLS;

  // JSが読み込めていない場合は、リンク本来の href（contact.html）に任せる
  if (!triggers.length || !Array.isArray(schools) || !schools.length) return;

  const modal = buildTrialModal(schools);
  document.body.appendChild(modal);

  let lastFocused = null;

  const open = (event) => {
    event.preventDefault();
    lastFocused = event.currentTarget;
    modal.classList.add('is-open');
    document.body.classList.add('is-modal-open');
    // 先頭の校舎リンク（無ければ閉じるボタン）にフォーカスを移す
    const first =
      modal.querySelector('a.trial-school__button') ||
      modal.querySelector('.trial-modal__close');
    if (first) first.focus();
  };

  const close = () => {
    if (!modal.classList.contains('is-open')) return;
    modal.classList.remove('is-open');
    document.body.classList.remove('is-modal-open');
    if (lastFocused) lastFocused.focus();
  };

  triggers.forEach((trigger) => trigger.addEventListener('click', open));

  // オーバーレイ・閉じるボタン
  modal.querySelectorAll('[data-trial-close]').forEach((el) => {
    el.addEventListener('click', close);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
}

// --- 詳細モーダル（コース詳細など） --------------------------------------
// data-modal-open="モーダルのid" を持つボタンを押すと、そのidのモーダルを表示する。
// モーダル側は HTML に hidden 付きで記述し、閉じる要素に data-modal-close を付ける。
function initDetailModals() {
  document.querySelectorAll('[data-modal-open]').forEach((trigger) => {
    const modal = document.getElementById(trigger.dataset.modalOpen);
    if (!modal) return;

    const open = () => {
      modal.hidden = false;
      modal.classList.add('is-open');
      document.body.classList.add('is-modal-open');
      modal.scrollTop = 0;
      const closeButton = modal.querySelector('[data-modal-close]:not(.trial-modal__overlay)');
      if (closeButton) closeButton.focus();
    };

    const close = () => {
      if (modal.hidden) return;
      modal.hidden = true;
      modal.classList.remove('is-open');
      document.body.classList.remove('is-modal-open');
      trigger.focus();
    };

    trigger.addEventListener('click', open);

    modal.querySelectorAll('[data-modal-close]').forEach((el) => {
      el.addEventListener('click', close);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') close();
    });
  });
}

function buildTrialModal(schools) {
  const modal = document.createElement('div');
  modal.className = 'trial-modal';

  const items = schools
    .map((school) => {
      const name = escapeHtml(school.name);
      // URL未設定の校舎は、誤って空リンクを押させないよう「準備中」表示にする
      const action = school.url
        ? `<a class="trial-school__button" href="${escapeHtml(school.url)}" target="_blank" rel="noopener noreferrer">${name}の無料体験申込はこちら！</a>`
        : '<span class="trial-school__button is-disabled" aria-disabled="true">準備中</span>';

      return `<li class="trial-school"><h3 class="trial-school__name">${name}</h3>${action}</li>`;
    })
    .join('');

  modal.innerHTML = `
    <div class="trial-modal__overlay" data-trial-close></div>
    <div class="trial-modal__panel" role="dialog" aria-modal="true" aria-labelledby="trial-modal-title">
      <button type="button" class="trial-modal__close" data-trial-close aria-label="閉じる"></button>
      <p class="trial-modal__en">Free Trial</p>
      <h2 class="trial-modal__title" id="trial-modal-title">無料体験のお申し込み</h2>
      <p class="trial-modal__lead">ご希望の校舎を選択してください。</p>
      <ul class="trial-school-grid" role="list">${items}</ul>
    </div>
  `;

  return modal;
}

function escapeHtml(value) {
  return String(value == null ? '' : value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[char]));
}
