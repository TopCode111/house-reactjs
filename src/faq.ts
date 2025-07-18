interface FAQ {
  q: string;
  a: string;
}

export const FAQs: FAQ[] = [
  {
    q: "セカンドオピニオンとは何ですか？",
    a: "セカンドオピニオンとは、既に提供された最初の意見や提案に対して、別の専門家や第三者から行われる追加の意見やアドバイスのことです。AIセカンドオピニオンサービスでは、設計施工会社やハウスメーカーによる住居設備商品・部品の提案に対し、中立的な専門家やAIからセカンドオピニオンを得ることができます。これにより、より客観的な視点からお客様の判断をサポートし、後悔の少ない住まいづくりをご支援しています。",
  },
  {
    q: "住まいのセカンドオピニオンAIサービスとは何ですか",
    a: "住まいのセカンドオピニオンAIサービスは、あなたの住宅やリノベーションの見積もりをAIが解析し、工事費用や設備の適正価格を自動的に調査・比較して提案するサービスです。さらに専門家のセカンドオピニオンも得られるため、安心して住宅やリノベーションを進めることができます。",
  },
  {
    q: "住まいのセカンドオピニオンAIサービスはどのように私の見積りデータを活用しますか？",
    a: "住まいのセカンドオピニオンAIサービスは、あなたがアップロードした見積りデータを独自のDocument AI技術と様々な前処理により解析し、使用が想定されている商品・部材の型番・ブランド名・モデル名・サイズ・単価・業者名や地域・総工費・工事別単価、などの主要な情報を理解します。",
  },
  {
    q: "セカンドオピニオンエンジンはどのように機能していますか？",
    a: "セカンドオピニオンエンジンは、抽出した情報と最新の大規模WEB情報を組み合わせて、使用が想定されている商品・部材の最安値や同等機能を持ちつつより納得感のある代替品のオススメなどを提供します。また、相見積もりデータ間の工事費用比較や業者別の減額幅比較、割引率比較なども行います。さらにセカオピプラットホームに登録されている設計士やインテリアコーディネーター等エキスパートからの信頼できる個別のセカンドオピニオンを安価に受けることも出来ます。",
  },
  {
    q: "エキスパートとのセカンドオピニオン契約はどのようにできますか？",
    a: "エキスパートと個別にセカンドオピニオン契約をすることができます。登録された建築士やホームインスペクター、インテリアコーディネーターなどのエキスパートが、あなたに対して中立な意見やアドバイスを提供します。",
  },
  {
    q: "施主支給支援機能とは具体的にどのような仕組みですか？",
    a: "施主支給とは、施主が発注・支給し施工だけ業者に依頼することで、費用を抑えて満足度の高める仕組みです。一般的に住宅で使用される住宅設備機器は多岐に渡るため施主支給の効果がいかに大きくても施主のみで管理することは大きな手間が伴います。セカオピは施主支給品の候補比較、リスト管理、納期管理、過去比較等を支援することで、ユーザーは予算内で理想的な家づくりを実現することができます。セカオピを活用しハウスメーカーへ積極的に施主支給しましょう。",
  },
  {
    q: "自分で施主支給をすることにはどのようなメリットと注意点がありますか？",
    a: "コスト削減: 施主支給では、住居設備品や部品を自身で購入することができます。そのため、業者が利益を上乗せした価格よりも安価に購入することができ、総工費を削減することができます。\n好みの選択: 自身の好みやニーズに合わせた住居設備品や部品を選ぶことができます。自分自身が納得できるデザインや機能性を備えたアイテムを選ぶことができ、理想の住まいを実現できます。\nプロジェクトのコントロール: 施主支給を行うことで、自身がプロジェクトのコントロールを行うことができます。購入から納品までの進捗状況や品質管理を自分で管理し、工事の進行をスムーズにコーディネートすることができます。\n注意点としては以下のようなものがあります：\n専門知識と時間の必要性: 施主支給を行うには、住居設備品や部品に関する専門的な知識や調査・比較の時間が必要です。製品の選定や価格交渉、納品管理など、自身で行うためのリソースと時間を確保する必要があります。\nリスク管理: 自身で施主支給を行う場合、製品の品質や保証、配送・取り付けのリスクを自身で負うことになります。信頼できるメーカーやサプライヤーを選ぶこと、保証やアフターサービスについて確認することが重要です。\nコミュニケーションと調整: 自身が購入した住居設備品や部品の工事において、業者とのコミュニケーションと調整が必要となります。スケジュールや仕様の確認、工事の進捗管理など、円滑なコミュニケーションを図ることが重要です。",
  },
  {
    q: "AIセカンドオピニオンサービスの料金体系はどのようになっていますか？",
    a: "機能リリース時に公開いたします。",
  },
  {
    q: "サービスを利用するためには、どのような技術的な知識が必要ですか？",
    a: "当サービスはユーザーフレンドリーなインターフェースを提供しており、特別な技術的知識は必要ありません。見積りデータのアップロードや抽出された情報の確認など、シンプルな手順でサービスを利用できます。エキスパートとの契約やオファー受け取りも、サービス内で簡単に行えます。",
  },
  {
    q: "サービスのプライバシーとセキュリティは保証されていますか？",
    a: "お客様がアップロードした見積もりデータは、個人情報のマスキングなどの前処理を行った上で解析されます。また、データは厳重に管理され、不必要な情報は削除または匿名化されます。詳細はプライバシーポリシーをご参照ください。",
  },
  {
    q: "見積データがないとこのサービスは使えませんか？",
    a: "まだ見積もりデータを持っていない方でも、住宅やリノベーションに関する基本的な情報を提供していただければ、一部のサービスを利用することは可能です。",
  },
  {
    q: "このサービスはどのような人に向いていますか？ ",
    a: "このサービスは、新築やリノベーションを考えている方、特に初めて家を建てる方やリノベーションを行う方に向いています。また、自分で情報を集める時間がない方や、専門的な知識がない方にも有用です。",
  },
];
