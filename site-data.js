// site-data.js
const SITE = {
    title: "9 × 2 = 3 の部屋",
    categories: [
      // ==== 統計学 ====
      {
        key: "stat",
        label: "統計学",
        summary: "推測・検定・多変量解析の要点を学ぶ。",
        subcategories: [
          {
            key: "stat-basic-intro",
            label: "統計学の基礎の基礎",
            summary: "統計学を初めて学ぶ人のための入門ガイド。",
            articles: [
              { title: "CH01　序", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_bd0a27dd-0d69-4b7d-bb8b-c341f5d32c43.pdf" },
              { title: "CH02　確率変数の種類", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_98ff72fe-8f63-414f-915c-8f34428060b9.pdf" },
              { title: "CH03　確率変数の可視化", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_373d9e33-3e39-42d3-8651-9bd7fcd71dc0.pdf" },
              { title: "CH04　統計に必要な数学", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_f0353b81-e370-41ba-b06a-1137812e9275.pdf" },
              { title: "CH05　記述統計学", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_07ed6025-c1df-4ac3-9227-39548e34eaef.pdf" },
              { title: "CH06　推測統計学", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_21658758-7ae1-45da-95ad-69233ff8f217.pdf" },
              { title: "CH07　全体のまとめ", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_863e12b6-19db-467b-8d26-2a51277a0a44.pdf" }
            ]
          },
          {
            key: "stat-basic",
            label: "統計学の基礎",
            summary: "確率・記述統計・推測統計の基礎概念を整理します。",
            articles: [
              { title: "CH01　序", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_c0110754-da37-4c2a-a3cd-4d84443b3c1f.pdf" },
              { title: "CH02　確率変数の種類", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_ca33c29e-f36a-4270-8018-24828f7a15c4.pdf" },
              { title: "CH03　データの可視化", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_43592dbf-5dc9-4bbe-a172-363d631f8ae6.pdf" },
              { title: "CH04　ヒストグラムと箱ひげによるデータの可視化", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_d651b72e-6ca7-4542-96c0-c054d2018daa.pdf" },
              { title: "CH05　確率変数の可視化の応用", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_3d581490-dea2-430e-8cec-7c209e92051d.pdf" },
              { title: "CH06　統計に必要な数学", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_d2204786-691d-414c-9783-9b73d9fc58ae.pdf" },
              { title: "CH07　集合と場合の数", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_9123e290-ea36-494d-ab23-38d178d202c9.pdf" }
            ]
          },
          {
            key: "stat-main",
            label: "統計学",
            summary: "統計学の本格的な内容を体系的に学ぶセクションです。",
            articles: [
              { title: "CH08　平均と標準偏差および代表値", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_cb00d198-a369-4d28-8462-235d64e7bc49.pdf" },
              { title: "CH09　偏差値", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_8a33bfb4-e630-4e03-8273-bbf770a27205.pdf" },
              { title: "CH10　論理", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_809812e0-6fb6-4897-b56f-9c194b7e2f78.pdf" },
              { title: "CH11　複数グループの平均と分散", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_025b221b-70e9-4aab-8daf-fc4551978142.pdf" },
              { title: "CH12　様々な平均", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_a6125b55-30af-4b72-9bc1-f9ce030a306d.pdf" },
              { title: "CH13　確率密度の期待値", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_6f77563b-6332-427c-a0af-c42c25ce2a33.pdf" },
              { title: "CH14　確率", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_2851bbfb-20f9-4718-9bcd-b56a8c365bc9.pdf" },
              { title: "CH15　確率分布と確率密度分布", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_e6cfba04-355f-411e-83e3-05d8e0abbeea.pdf" },
              { title: "CH16　正規分布", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_39b83fd8-8dbe-431f-b74e-51523a124324.pdf" },
              { title: "CH17　 均一分布", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_cb05ad6c-c3a8-4f56-a414-cf84d52904fe.pdf" },
              { title: "CH18　 ベルヌーイ分布/二項分布", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_3a553244-2474-4138-afa1-1627a979e01d.pdf" },
              { title: "CH19　 ポアソン分布", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_b0ed170b-cc9e-4ba4-bc48-d5d67cc9efcf.pdf" },
              { title: "CH20　指数分布/ロジスチィックス曲線", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_5a7516de-06a0-4222-aa98-4b7df22f8c2d.pdf" },
              { title: "CH21　典型的な分布と関連する確率密度分布", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_b44d0894-000e-4b25-b26b-0d49af2bd3fe.pdf" },
              { title: "CH22　その他の確率分布と確率密度分布", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_dbaa646d-26ce-46cd-9050-7b557ffb2fa8.pdf" },
              { title: "CH23　 P点とP値", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_ecf3de9e-2388-46d2-ae81-91998b2f6935.pdf" },
              { title: "CH24　自由度", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_eca78afb-b509-444e-8b13-be0976654b0f.pdf" },
              { title: "CH25　確率母関数", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_b2ef8428-d152-472f-a9aa-95b1a46333e0.pdf" },
              { title: "CH26　キュムラント", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_f3501e84-d2e2-44e2-b1b6-c8cff7e5f458.pdf" },
              { title: "CH27　ピアソン分布", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_7613b375-2e5a-49ec-ae50-c37d21932e49.pdf" },
              { title: "CH28　中心極限定理", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_98bb14e6-f6bd-4f61-ac3d-ec5ba5cd3c9b.pdf" },
              { title: "CH29　相関係数", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_5acfe827-9e81-47b5-9a37-210289d8ed5d.pdf" },
              { title: "CH30　相関係数に対する確率分布", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_cf563231-6e23-43f1-9566-e0ba1dab5a4b.pdf" },
              { title: "CH31　単回帰分析", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_b35098d9-806d-4de7-ace2-cf73cd1116b5.pdf" },
              { title: "CH32　アンケートの取り方", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_8081ab28-590f-47e6-9571-3a08618c938b.pdf" },
              { title: "CH33　標本の抽出方法", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_96b752cd-9f88-4d3a-8ba1-b9240a681292.pdf" },
              { title: "CH34　標本推定", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_a2b9a3ed-c56b-4369-8457-7ed9910a5080.pdf" },
              { title: "CH35　標本検定", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_b0033320-0ab7-45ae-a895-cc04c44c9a76.pdf" },
              { title: "CH36　在庫", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_4a0bdc52-6509-45d7-a6b8-a12f480149f8.pdf" },
              { title: "CH37　標本相関係数", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_e1b1a309-c7be-43f6-b4f1-fcadc781ec1f.pdf" },
              { title: "CH38　標本単回帰分析", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_5ba9bee8-6abe-4f79-90af-2280eb1e672e.pdf" },
              { title: "CH39　乱数", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_cd303ef5-38d2-47bb-ae60-7575369ea224.pdf" },
              { title: "CH40　Excel操作まとめ", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_0869d765-d1bb-4306-8580-15de95d6ba50.pdf" },
              { title: "参考文献", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_eba1507a-8d17-4ce7-8f73-7551875e964c.pdf" }
            ]
          }
        ]
      },
  
      // ==== 数学（2階層）====
      {
        key: "math",
        label: "数学",
        summary: "線形代数・微積・最適化など理論基盤。",
        subcategories: [
          {
            key: "calc",
            label: "微分・積分",
            summary: "微分・積分の概念を基礎から体系的に学ぶ。",
            children: [
              {
                key: "calc-basic",
                label: "微分/積分の基礎",
                summary: "",
                articles: [
                  { title: "CH01　序", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_277e86ed-7a0a-4508-be97-445c98ab3bc4.pdf" },
                  { title: "CH02　微分とは何か", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_4f9d052d-ba2c-439a-9abb-cb570aba9675.pdf" },
                  { title: "CH03　三角関数", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_5a3a2f29-3e99-48bd-a445-1a04f9004a18.pdf" },
                  { title: "CH04　様々な関数の微分", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_5a3a2f29-3e99-48bd-a445-1a04f9004a18.pdf" },
                  { title: "CH05　積分の定義", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_5a3a2f29-3e99-48bd-a445-1a04f9004a18.pdf" },
                  { title: "CH06　様々な関数の積分", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_5a3a2f29-3e99-48bd-a445-1a04f9004a18.pdf" }
                ]
              },
              {
                key: "calc-main",
                label: "微分/積分",
                summary: "",
                articles: [
                  { title: "CH01　微積分についての序", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_d4368e6f-8725-4115-9a49-50b4b61d3d8e.pdf" },
                  { title: "CH02　数の種類", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_5b73df4e-9c12-4f37-ac31-6610f5277ec2.pdf" },
                  { title: "CH03　関数", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_87d83c3d-83f3-4ba0-b489-cd826589e76f.pdf" },
                  { title: "CH04　関数の極限", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_344e7816-afa7-42ba-8ce8-601e980f933f.pdf" },
                  { title: "CH05　2次曲線", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_fce2e08e-749d-4a8c-a671-2a0c1266557a.pdf" },
                  { title: "CH06　三角関数", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_776d112b-f4ff-451c-93fd-218360b5caad.pdf" },
                  { title: "CH07　指数関数と対数関数", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_a5f6825d-cc58-48df-bbf9-e65c680d5678.pdf" },
                  { title: "CH08　逆関数", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_d34980b0-0520-45f1-9ef5-c8f6b4cc3a0c.pdf" },
                  { title: "CH09　接戦と法線", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_ed5e65a7-e56a-4795-ac9c-39b2992817d4.pdf" },
                  { title: "CH10　直線と点の距離", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_956acd27-a828-4c26-8885-1ab5029d125d.pdf" },
                  { title: "CH11　平均値の定理", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_918af48c-1c75-4635-8732-13515eae1655.pdf" },
                  { title: "CH12　微分とは何か", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_8db65a1a-0cfa-44dc-9fb1-d0efdcee5ed2.pdf" },
                  { title: "CH13　様々な関数の微分", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_7f478da4-4afd-4dca-bb74-8bad0027f89a.pdf" },
                  { title: "CH14　増減表", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_d28a35cc-c134-4874-a95b-db3554472e82.pdf" },
                  { title: "CH15　漸近線", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_b0ba7b55-0c23-44e4-a9d9-9c790d191502.pdf" },
                  { title: "CH16　微分の応用", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_8606c65d-d0e0-45e1-b45a-40901737cdfd.pdf" },
                  { title: "CH17　ラグランジュの未定乗数法", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_7187ad8c-6bab-4daa-a9e6-89b02a44b977.pdf" },
                  { title: "CH18　積分とは何か", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_0d47ded6-8d79-4aad-a89f-a795b260b3e1.pdf" },
                  { title: "CH19　ベルヌーイの定理の証明", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_40659d19-0108-42e5-9124-4fdb233daec0.pdf" },
                  { title: "CH20　様々な関数の積分", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_c3844480-db92-46e4-b3d3-189fdda3113e.pdf" },
                  { title: "CH21　積分の応用", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_d6095108-0f02-48c8-b585-8853ea804243.pdf" },
                  { title: "CH22　関数の級数展開", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_caf76070-bfd5-4586-84ab-f0108ca36264.pdf" },
                  { title: "参考文献", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_e5a3affa-8e7b-49b3-a119-b6eb49eacba1.pdf" }
                ]
              }
            ]
          },
          {
            key: "linear",
            label: "線形代数",
            summary: "ベクトル・行列の基本からJordan標準形まで。",
            children: [
              {
                key: "linear-basic",
                label: "線形代数の基礎",
                summary: "",
                articles: [
                  { title: "CH01　序", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_a5a7935f-9f71-4c16-b82b-9ccada1a9910.pdf" },
                  { title: "CH02　ベクトルの定義とその演算", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_92291dd6-71ed-45c3-a53e-62cd2815ba9f.pdf" },
                  { title: "CH03　行列の定義とその演算", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_fa2218eb-9447-48b8-a1f8-486c83704391.pdf" },
                  { title: "CH04　連立方程式の行列表現", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_2cfcf7f8-e8a2-4992-bf8b-5719ccc2c9a2.pdf" },
                  { title: "CH05　連立方程式の数値解法", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_2d1249db-a86e-462a-8132-1858820ba3ed.pdf" },
                  { title: "CH06　重回帰分析の行列表現", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_3f3417a0-92d7-4f26-86a2-37249eadb31b.pdf" },
                  { title: "CH07　参考文献", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_a6901a62-d684-40ed-a656-536b233a5229.pdf" }
                ]
              },
              {
                key: "linear-main",
                label: "線形代数",
                summary: "",
                articles: [
                  { title: "CH01　序", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_cdbc59f4-bfc8-491f-ae03-d4082617bf8c.pdf" },
                  { title: "CH02　ベクトルの定義とその演算", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_18b8586a-49a8-4435-8f3c-102a244c7bcf.pdf" },
                  { title: "CH03　行列の定義とその演算", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_48e815e9-e675-441e-99c0-097a76ad782e.pdf" },
                  { title: "CH04　連立方程式の行列表現", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_e60cb115-173e-4ded-84f8-b1b9fe07578b.pdf" },
                  { title: "CH05　ランクによる連立方程式の完全解法", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_6cb6276b-4217-4786-a701-7a64fc1e5518.pdf" },
                  { title: "CH06　連立方程式の数値解法", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_d7644862-9ef1-46ce-9b91-aeb70eb64b36.pdf" },
                  { title: "CH07　重回帰分析の行列表現", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_beff04de-3d53-484d-88e5-02ee10f81773.pdf" },
                  { title: "CH08　行列式", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_179d3dd0-d0a4-4a34-803f-4fa6c3d9def5.pdf" },
                  { title: "CH09　線形変換", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_30dc6508-d995-455f-92b5-87ec1a3021e3.pdf" },
                  { title: "CH10　行列と固有ベクトルの関係", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_e664a2fc-b4d5-4ea8-9f4e-a30ed2e1f583.pdf" },
                  { title: "CH11　対称行列の固有値および固有ベクトルの数値解法", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_834486e4-22b7-4b7b-ad5b-1b4e8aa5ab9a.pdf" },
                  { title: "CH12　対称行列の固有値および固有ベクトルの数値解法", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_43511bbb-4af1-4e87-a16b-0e73ac71be25.pdf" },
                  { title: "CH13　2次のケーリーハミルトンの定理", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_60025f66-696f-4158-ac0d-f2b219de5090.pdf" },
                  { title: "CH14　ケーリー・ハミルトンの定理と最小多項式", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_fc590883-ea54-4f3e-b1f3-5527e2fd274d.pdf" },
                  { title: "CH15　Jordan標準形", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_f8805071-3bf6-438d-a700-708e2c7bc1bc.pdf" },
                  { title: "CH16　参考文献", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_da767b7f-49b4-4eef-b9e6-5f6c0a0e27a6.pdf" }
                ]
              }
            ]
          }
        ]
      },
  
      // ==== その他の解析 ====
      {
        key: "others",
        label: "その他の解析",
        summary: "数値計算・シミュレーションの実践。",
        articles: [
          { title: "水と健康", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_b445a47a-ac54-4f55-ad04-7fa010e60025.pdf" },
          { title: "放射線基礎知識", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_1a61e789-0474-4120-8486-af2600e68697.pdf" }
        ]
      },
  
      // ==== 走れメラス ====
      {
        key: "melas",
        label: "走れメラス",
        summary: "研究に寄り添う断章・エッセイ。",
        articles: [
          { title: "走れメラス 01", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_5a3a2f29-3e99-48bd-a445-1a04f9004a18.pdf" },
          { title: "走れメラス 02", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_a920e2ab-380e-414a-aa5b-544524fd130d.pdf" },
          { title: "走れメラス 03", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_266333bb-1aed-424a-9603-e15d5b1860a1.pdf" },
          { title: "走れメラス 04", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_136f5c78-0ab6-4a7d-86b0-8a97412153f9.pdf" },
          { title: "走れメラス 05", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_cf0e6aa1-8116-48fe-a007-b2e0666b323a.pdf" },
          { title: "走れメラス 06", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_7384a581-c249-4ce1-9138-0884a675ecf7.pdf" },
          { title: "走れメラス 07", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_502dd009-318c-4d6c-9c73-8982f701daf7.pdf" },
          { title: "走れメラス 08", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_3b4349ef-0bab-415f-b178-7f8b1c5e0f61.pdf" },
          { title: "走れメラス 09", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_e89fb484-0098-4e29-8ff0-a397b0e397ef.pdf" },
          { title: "走れメラス 10", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_40014060-51ee-4ad9-8669-3129211c8f95.pdf" },
          { title: "走れメラス 11", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_6aa836ca-1f42-43f2-be9c-45d688757d16.pdf" },
          { title: "走れメラス 12", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_04b9978b-0daa-42d0-ab1f-a2bcde6008ff.pdf" },
          { title: "走れメラス 13", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_93b35330-fbba-41c6-b360-5cd6b77a7113.pdf" },
          { title: "走れメラス 14", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_eb4b6c48-fb84-4007-a83f-82338751d4c2.pdf" },
          { title: "走れメラス 15", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_345f0c2f-9675-4617-b8f8-0669c672af4e.pdf" },
          { title: "走れメラス 16", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_f5335174-65c0-4578-ab32-543499faa625.pdf" },
          { title: "走れメラス 17", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_979e5470-0e32-48fd-ac5f-0be686d4a497.pdf" },
          { title: "走れメラス 18", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_87e171d0-a6ce-4416-9873-f1398ed51233.pdf" },
          { title: "走れメラス 19", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_4a1b6a80-3f3c-40e8-9b9d-c56b94c290c0.pdf" },
          { title: "走れメラス 20", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_9b6d9084-0d76-4eb5-a7d3-5f8a92f096db.pdf" }
        ]
      },
  
      // ==== 手記 ====
      {
        key: "memoir",
        label: "手記",
        summary: "研究メモや雑記。",
        articles: [
          { title: "ボート奮漕記", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_dd4d95ca-f09c-4de2-b0e3-42ed109bc52e.pdf" },
          { title: "スイス滞在手記", url: "https://storage.googleapis.com/studio-design-asset-files/projects/wQOV4jM4aD/s-1x1_49f53bf1-7cf9-4e35-8a09-231745984c87.pdf" }
        ]
      }
    ]
  };
  