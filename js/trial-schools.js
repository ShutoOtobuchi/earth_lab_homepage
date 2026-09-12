// ==========================================================================
// 無料体験 校舎リスト／申込URL設定
// --------------------------------------------------------------------------
// ★★★ 各校舎の申込URLは、このファイルの下の配列だけを編集すれば反映されます。
//     （全ページ共通。HTML側を触る必要はありません）
//
//   name : 一覧に表示する校舎名
//   url  : 「◯◯の無料体験申込はこちら！」を押したときに開く外部サイトのURL
//          → 申込フォーム等のURLを "https://" から貼り付けてください。
//          → 空（''）のままの校舎は「準備中」と表示され、押せない状態になります。
//
//   表示順はこの配列の順番どおりです（PCでは2列で、左上→右上→左下…の順）。
//   校舎を追加・削除する場合は、行を足す／消すだけでOKです。
// ==========================================================================
window.TRIAL_SCHOOLS = [
  // ↓↓↓ '' の中に申込URLを入力してください ↓↓↓
  { name: '金町校',   url: 'https://comiru.jp/aslabpro/customer/application/form' }, // TODO: 金町校の無料体験申込URL
  { name: '新小岩校', url: 'https://comiru.jp/aslab-shinkoiwa/customer/application/form' }, // TODO: 新小岩校の無料体験申込URL
  { name: '四街道校', url: 'https://comiru.jp/earth-academy_yotsukaido/customer/application/form' }, // TODO: 四街道校の無料体験申込URL
  { name: '佐倉校',   url: 'https://comiru.jp/earth-academy_sakura/customer/application/form' }, // TODO: 佐倉校の無料体験申込URL
  { name: '吹田校',   url: 'https://comiru.jp/reimeikobetsu/customer/application/form' }, // TODO: 吹田校の無料体験申込URL
  { name: '豊中長興寺校',   url: '' }, // TODO: 豊中長興寺校の無料体験申込URL
  // ↑↑↑ '' の中に申込URLを入力してください ↑↑↑
];
