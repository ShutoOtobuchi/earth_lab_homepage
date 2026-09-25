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
//
//   ※このファイルを更新したら、全HTMLの <script src="js/trial-schools.js?v=…"> の
//     v= の値（例：日付）も変えてください。古いキャッシュが使われるのを防ぎます。
// ==========================================================================
window.TRIAL_SCHOOLS = [
  // ↓↓↓ '' の中に申込URLを入力してください ↓↓↓
  { name: '金町校',   url: 'https://comiru.jp/aslabpro/customer/application/form' },
  { name: '新小岩校', url: 'https://comiru.jp/aslab-shinkoiwa/customer/application/form' },
  { name: '四街道校', url: 'https://comiru.jp/earth-academy_yotsukaido/customer/application/form' },
  { name: '佐倉校',   url: 'https://comiru.jp/earth-academy_sakura/customer/application/form' },
  { name: '吹田校',   url: 'https://comiru.jp/reimeikobetsu/customer/application/form' },
  { name: '豊中長興寺校',   url: 'https://comiru.jp/earth-academy_toyonakachokoji/customer/application/form' },
  // ↑↑↑ '' の中に申込URLを入力してください ↑↑↑
];
