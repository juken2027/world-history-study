const cards = [
{
  id: "card_001",
  question: "人類が文字を発明して、歴史を記録に残すようになるまでの時代",
  answer: "先史時代",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_002",
  question: "類人猿とは異なり〇〇を特徴とする",
  answer: "直立二足歩行",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_003",
  question: "人類の起源は〇年前に出現した",
  answer: "700万年前",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_004",
  question: "人類の起源が出現した場所は〇〇",
  answer: "アフリカ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_005",
  question: "人類の起源は〇〇とされている",
  answer: "猿人",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_006",
  question: "猿人の代表として〇〇がある",
  answer: "アウストラロピテクス",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_007",
  question: "猿人は〇〇のような簡単な道具を使用した",
  answer: "礫石器",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_008",
  question: "礫石器は〇〇石器と呼ばれている",
  answer: "打製石器",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_009",
  question: "打製石器を用いて狩猟などにより食料を獲得していた時代を〇〇時代という",
  answer: "旧石器時代",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_010",
  question: "猿人の次に〇〇が出現した",
  answer: "原人",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_026",
  question: "新人は〇〇年前に出現した",
  answer: "20万年前",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_027",
  question: "約1万年前に食料を自ら生産する〇〇時代に入った",
  answer: "新石器時代",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_028",
  question: "打製石器以外に砂などで磨かれた〇〇石器の製作が始まった",
  answer: "磨製石器",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_029",
  question: "約１万年前に調理や貯蔵のために〇〇が作成された",
  answer: "土器",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_030",
  question: "前3500年ごろから〇〇を先駆けに農業が始まった",
  answer: "メソポタミア",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},

// card_031 ～ card_050 続く
{
  id: "card_031",
  question: "前3500年ごろから農耕に必要な水を人工的に供給する〇〇農業が始まった",
  answer: "灌漑農業",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_032",
  question: "灌漑農業の結果、多くの人口をもつ〇〇が形成された",
  answer: "都市",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_033",
  question: "前3500年ごろから戦いや儀式に用いる〇〇などの金属器が作られた",
  answer: "青銅器",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_034",
  question: "前3500年ごろから政治を記録するために〇〇が発明された",
  answer: "文字",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_035",
  question: "文字が発明された以降の時代を〇〇時代という",
  answer: "歴史時代",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_036",
  question: "地質年代として〇〇と〇〇、〇〇がある",
  answer: "鮮新世・更新世・完新世",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_037",
  question: "アフリカのチャドで発見された〇〇は現在最古の化石人骨である",
  answer: "サヘラントロプス",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "S"
},
{
  id: "card_038",
  question: "約440万年前、エチオピアで〇〇猿人が生息していた",
  answer: "ラミダス猿人",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "S"
},
{
  id: "card_039",
  question: "アフリカで発見された原人には、約240万年前に〇〇が出現した",
  answer: "ホモ＝ハビリス",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_040",
  question: "原人には約180万年前に出現した〇〇がある",
  answer: "ホモ＝エレクトゥス",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_041",
  question: "オリエントには〇〇という意味がある",
  answer: "日が昇るところ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_042",
  question: "メソポタミア（現イラク）の流域は〇〇川・〇〇川である",
  answer: "ティグリス川・ユーフラテス川",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_043",
  question: "エジプトの流域は〇〇川がある",
  answer: "ナイル川",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_044",
  question: "メソポタミアでは、まず〇〇人が出現した",
  answer: "シュメール人",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_045",
  question: "シュメール人は〇〇や〇〇の都市国家を建設した",
  answer: "ウル・ウルク",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_046",
  question: "ウルでは〇〇という美術工芸品があった",
  answer: "スタンダード",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_047",
  question: "メソポタミア文明は、メソポタミア、シリア、パレスチナにかけて〇〇と呼ばれる地域で発達した",
  answer: "肥沃な三日月地帯",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_048",
  question: "ウルクの王の冒険の物語である〇〇は旧約聖書の洪水伝説の原型になった",
  answer: "ギルガメシュ叙事詩",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_049",
  question: "シュメール人は〇〇と呼ばれる聖塔を建てた",
  answer: "ジッグラト",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_050",
  question: "メソポタミアの王は神の代理人として〇〇政治を行った",
  answer: "神権政治",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_051",
  question: "シュメール人は〇〇のような自然科学を使用した",
  answer: "七曜制、占星術、六十進法、太陰暦",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_052",
  question: "〇〇語系の〇〇人がメソポタミア初の統一国家を建設した",
  answer: "セム語系、アッカド人",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_053",
  question: "アッカド王国の創始者は〇〇である",
  answer: "サルゴン1世",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_054",
  question: "ウル第3王朝をつくった〇〇は〇〇法典を作った",
  answer: "ウル＝ナンム、ウル＝ナンム法典",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_055",
  question: "〇〇人によるバビロン第1王朝は〇〇王の時にメソポタミアを統一した",
  answer: "アムル人、ハンムラビ王",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_056",
  question: "王は〇〇の原則と〇〇別の刑罰を特徴とする〇〇法典を制定した",
  answer: "同害復讐、身分別、ハンムラビ法典",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_057",
  question: "〇〇語系の〇〇にバビロン第1王朝は滅ぼされた",
  answer: "インド＝ヨーロッパ語系、ヒッタイト",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_058",
  question: "ヒッタイトは〇〇に王国を建てた",
  answer: "小アジア（アナトリア）",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_059",
  question: "メソポタミアの北部は〇〇が支配した",
  answer: "ミタンニ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_060",
  question: "メソポタミアの南部のバビロニアは〇〇が支配した",
  answer: "カッシート",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_061",
  question: "ヒッタイトは〇〇に都を置いた",
  answer: "ハットゥシャ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_062",
  question: "ヒッタイトは初めて〇〇製武器を使用して、〇〇を駆使して勢力を伸ばした",
  answer: "鉄製武器、戦車",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_063",
  question: "ヒッタイトがシリアをめぐってエジプトと戦った戦いは〇〇という",
  answer: "カデシュの戦い",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_064",
  question: "ヒッタイトは〇〇に滅ぼされた",
  answer: "海の民",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_065",
  question: "海の民は〇〇文明を滅ぼした",
  answer: "ミケーネ文明",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_066",
  question: "エジプトのことを『ナイルのたまもの』と呼んだのは〇〇",
  answer: "ヘロドトス",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_067",
  question: "ナイル川流域には約40の〇〇が成立した",
  answer: "ノモス",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_068",
  question: "エジプト王は〇〇の子として神権政治を行った",
  answer: "太陽神ラー",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_069",
  question: "エジプトの古王国は〇〇を都とした",
  answer: "メンフィス",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_070",
  question: "ギザでは〇〇王らにより多くの〇〇が建てられた",
  answer: "クフ王、ピラミッド",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_071",
  question: "エジプトの中王国は〇〇を都とした",
  answer: "テーベ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_072",
  question: "中王国の滅亡後、アジアから〇〇が侵入しエジプトを支配した",
  answer: "ヒクソス",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_073",
  question: "〇〇は唯一神〇〇の信仰を強制した",
  answer: "アメンホテプ4世（イクナートン）、アトン",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_074",
  question: "アメンホテプ4世は〇〇に遷都した",
  answer: "テル＝エル＝アマルナ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_075",
  question: "自由で写実的な美術である〇〇が開花した",
  answer: "アマルナ美術",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_076",
  question: "新王国時代の〇〇はシリアやナイル川上流を征服し最大版図を築いた",
  answer: "トトメス3世",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_077",
  question: "アメンホテプ4世の妃〇〇の胸像はアマルナ美術の代表作である",
  answer: "ネフェルティティ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_078",
  question: "地中海東岸のシリアでは〇〇人が〇〇を中心に〇〇貿易をした",
  answer: "アラム人、ダマスクス、内陸貿易",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_079",
  question: "フェニキア人は〇〇・〇〇を中心に〇〇貿易で活躍した",
  answer: "シドン・ティルス、地中海貿易",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_080",
  question: "フェニキア人は北アフリカに〇〇などの植民市を建てた",
  answer: "カルタゴ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_081",
  question: "パレスチナに定住したヘブライ人は、〇〇に率いられた",
  answer: "モーセ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_082",
  question: "ヘブライ人はモーセに率いられた『〇〇』の後に〇〇を都として〇〇王国を建てた",
  answer: "出エジプト、イェルサレム、イスラエル王国",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_083",
  question: "イスラエル王国では〇〇王とその子の〇〇王が全盛を築いた",
  answer: "ダヴィデ王、ソロモン王",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_084",
  question: "その後、イスラエル王国は北のイスラエル王国と〇〇王国に分裂した",
  answer: "ユダ王国",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_085",
  question: "出エジプトはエジプトの〇〇時代の出来事とされる",
  answer: "新王国時代",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_086",
  question: "ヤハウェはモーセを通じて〇〇を授けた",
  answer: "十戒",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_087",
  question: "イスラエルとヨルダンの間で〇〇が発見された",
  answer: "死海文書",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "S"
},
{
  id: "card_088",
  question: "シュメール人は〇〇文字を発明して〇〇に記録した",
  answer: "楔形文字、粘土板",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_089",
  question: "〇〇はダレイオス1世の磨崖碑文で、〇〇らがこれを手がかりに楔形文字を解読した",
  answer: "ベヒストゥーン碑文、ローリンソン",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_090",
  question: "エジプトでは〇〇などの自然科学が発達した",
  answer: "太陽暦",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_091",
  question: "エジプトでは〇〇などにエジプト文字が記録された",
  answer: "パピルス",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_092",
  question: "〇〇のエジプト遠征で発見された〇〇には3種類の文字が刻まれていた",
  answer: "ナポレオン、ロゼッタ＝ストーン",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_093",
  question: "ロゼッタ＝ストーンの神聖文字を〇〇が解読した",
  answer: "シャンポリオン",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_094",
  question: "アラム人のアラム文字は〇〇文字などの文字に影響",
  answer: "ソグド文字",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_095",
  question: "フェニキア人のフェニキア文字は〇〇文字などの文字に影響",
  answer: "ギリシア文字",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_096",
  question: "ヘブライ人のバビロン捕囚からの解放後に〇〇教が成立",
  answer: "ユダヤ教",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_097",
  question: "ユダヤ教は〇〇待望、〇〇思想、〇〇聖書である",
  answer: "メシア待望、選民思想、旧約聖書",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_098",
  question: "ハンムラビ法典は〇〇美術館に展示されている",
  answer: "ルーブル美術館",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_099",
  question: "北メソポタミアに建国した〇〇語系の〇〇は〇〇王国を滅ぼした",
  answer: "セム語系、アッシリア、イスラエル王国",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_100",
  question: "アッシリアは〇〇の統一に初めて成功した",
  answer: "オリエント",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_101",
  question: "アッシリアの〇〇王が最大版図を実現した",
  answer: "アッシュル＝バニパル王",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_102",
  question: "前8世紀以降、アッシリアは都を〇〇に置いた",
  answer: "ニネヴェ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_103",
  question: "アッシリアは全国を〇〇に分け、各州に〇〇を派遣した",
  answer: "州、総督",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_104",
  question: "アッシリアは〇〇貿易で栄える",
  answer: "中継貿易",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_105",
  question: "アッシリアは一時、〇〇に服属する",
  answer: "ミタンニ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_106",
  question: "アッシリアは〇〇王国に侵攻する",
  answer: "クシュ王国",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_107",
  question: "アッシリアは〇〇制を取り入れた",
  answer: "駅伝制",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_108",
  question: "古代エジプトでは霊魂の不滅を信じて〇〇が作られた",
  answer: "ミイラ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_109",
  question: "古代エジプトでは死後の審判を行う〇〇神が信仰された",
  answer: "オシリス",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_110",
  question: "イスラエルはアッシリアの〇〇にユダ王国は新バビロニアの〇〇に滅ぼされた",
  answer: "サルゴン2世、ネブカドネザル2世",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_111",
  question: "アッシリアの滅亡後、オリエントには〇〇、〇〇、〇〇、エジプトの4王国が分立した",
  answer: "メディア、リディア、新バビロニア",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_112",
  question: "新バビロニアの〇〇はユダ王国の住民を都のバビロンに連行する〇〇を行った",
  answer: "ネブカドネザル2世、バビロン捕囚",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_113",
  question: "インド＝ヨーロッパ語系の〇〇人は前6世紀ごろ〇〇朝を建国し4王国を相次いで滅ぼした",
  answer: "イラン人、アケメネス朝",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_114",
  question: "アケメネス朝の建国者は〇〇で、新バビロニアを滅ぼした際に〇〇人を解放した",
  answer: "キュロス2世、ヘブライ人",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_115",
  question: "アケメネス朝は〇〇から独立した",
  answer: "メディア",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_116",
  question: "アケメネス朝の都は〇〇である",
  answer: "スサ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_117",
  question: "アケメネス朝では〇〇文字を表音化した〇〇語、〇〇語を公用語とする",
  answer: "楔形文字、ペルシア語、アラム語",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_118",
  question: "アケメネス朝は〇〇と〇〇を発行した",
  answer: "金貨、銀貨",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_119",
  question: "リディアの都は〇〇である",
  answer: "サルデス",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_120",
  question: "メディアの都は〇〇である",
  answer: "エクバタナ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_121",
  question: "アケメネス朝は第3代の〇〇の時に全盛期を迎えた",
  answer: "ダレイオス1世",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_122",
  question: "アケメネス朝は全国を約20の州に分け、各州を〇〇と呼ばれる知事を配置した",
  answer: "サトラップ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_123",
  question: "サトラップは〇〇・〇〇と呼ばれた監察官を巡察させた",
  answer: "王の目、王の耳",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_124",
  question: "〇〇制をしき、〇〇に代表される国道を整備した",
  answer: "駅伝制、王の道",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_125",
  question: "王の道は〇〇から〇〇までである",
  answer: "スサからサルデス",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_126",
  question: "アケメネス朝は〇〇の東方遠征で滅亡した",
  answer: "アレクサンドロス大王",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_127",
  question: "オリエントにはヘレニズム諸国が成立しその一つの〇〇から自立した〇〇は東西交通路を掌握した",
  answer: "セレウコス朝シリア、パルティア",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_128",
  question: "パルティアは建国者の〇〇に由来して中国では〇〇と呼ばれた",
  answer: "アルサケス、安息",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_129",
  question: "パルティアは〇〇の建てた〇〇朝により滅ぼされた",
  answer: "アンティオキア",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_130",
  question: "パルティアは〇〇と併合した",
  answer: "メソポタミア",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_131",
  question: "パルティアは〇〇教を国教にした",
  answer: "ゾロアスター教",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_132",
  question: "パルティアは〇〇の建てた〇〇朝により滅ぼされた",
  answer: "アルダシール1世、ササン朝",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_133",
  question: "ササン朝の2代目の〇〇はローマ帝国の〇〇を捕え、東方の〇〇朝を破った",
  answer: "シャープール1世、ウァレリアヌス、クシャーナ朝",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_134",
  question: "ササン朝の都は〇〇である",
  answer: "クテシフォン",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_135",
  question: "シャープール1世は〇〇に侵入した",
  answer: "シリア",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_136",
  question: "〇〇はビザンツ皇帝の〇〇と争い、中央アジアの騎馬遊牧民〇〇を〇〇と結んで滅ぼした",
  answer: "ホスロー1世、ユスティニアヌス、エフタル、突厥",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_137",
  question: "ササン朝は〇〇勢力により〇〇の戦いで敗れて、のちに滅亡した",
  answer: "イスラーム、ニハーヴァンドの戦い",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_138",
  question: "ニハーヴァンドの戦いの敗北後、〇〇に援助を求めた",
  answer: "唐",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_139",
  question: "ゾロアスター教は〇〇を善神、〇〇を悪神とし〇〇を神聖化した",
  answer: "アフラ＝マズダ、アーリマン、火",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_140",
  question: "ゾロアスター教の教典は〇〇である",
  answer: "アヴェスター",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_141",
  question: "ゾロアスター教、仏教、キリスト教の融合宗教である〇〇は〇〇朝の時に弾圧された",
  answer: "マニ教、ササン朝",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_142",
  question: "マニ教は〇〇で国教になった",
  answer: "ウイグル",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_143",
  question: "マニ教は〇〇派にも影響を与えた",
  answer: "アルビジョワ派",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_144",
  question: "マニ教からキリスト教に改宗したのは〇〇である",
  answer: "アウグスティヌス",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_145",
  question: "インダス文明はインダス川下流の〇〇、中流の〇〇地方にある〇〇の遺跡に代表される",
  answer: "モエンジョ＝ダーロ、パンジャーブ地方、ハラッパー",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_146",
  question: "〇〇、〇〇土器、インダス文字が刻まれた〇〇などが発見された",
  answer: "青銅器、彩文土器、印章",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_147",
  question: "前1500年ごろ〇〇語系の〇〇人が〇〇峠を越えパンジャーブに侵入した",
  answer: "インド＝ヨーロッパ語系、アーリヤ人、カイバル峠",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_148",
  question: "アーリヤ人は〇〇を神として崇拝し、神々への賛歌や儀礼を〇〇にまとめた",
  answer: "自然現象、ヴェーダ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_149",
  question: "ヴェーダは〇〇教の根本聖典となり最古にできたものを〇〇という",
  answer: "バラモン、リグ＝ヴェーダ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_150",
  question: "前1000年ごろからアーリヤ人がガンジス川流域に進出する頃に〇〇の使用が始まる",
  answer: "鉄器",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_151",
  question: "アーリヤ人の征服の結果、司祭の〇〇、武士・貴族の〇〇、庶民の〇〇、隷属民の〇〇の4つの基本身分ができる",
  answer: "バラモン、クシャトリヤ、ヴァイシャ、シュードラ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_152",
  question: "アーリヤ人の4つの基本身分を〇〇といい、〇〇と結びつき後のカースト制度の基礎となる",
  answer: "ヴァルナ、ジャーティ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_153",
  question: "モエンジョ＝ダーロは〇〇造りである",
  answer: "れんが",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_154",
  question: "モエンジョ＝ダーロやハラッパーに次いで、最近発掘された遺跡は〇〇である",
  answer: "ドーラヴィーラー",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "S"
},
{
  id: "card_155",
  question: "複雑な儀式にこだわるバラモンに不満が高まって内部の反省と批判から〇〇を論じる〇〇哲学が生まれた",
  answer: "輪廻転生、ウパニシャッド哲学",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_156",
  question: "前6世紀頃にはガンジス川流域に〇〇と呼ばれる有力国家が生まれた",
  answer: "十六大国",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_157",
  question: "十六大国の中で最も有力だった国は〇〇である",
  answer: "マガダ国",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_158",
  question: "ジャイナ教の開祖は〇〇である",
  answer: "ヴァルダマーナ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_159",
  question: "ジャイナ教は〇〇を重視した",
  answer: "不殺生",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_160",
  question: "仏教の開祖は〇〇である",
  answer: "ガウタマ＝シッダールタ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_161",
  question: "ガウタマ＝シッダールタは後に〇〇と呼ばれた",
  answer: "釈迦",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_162",
  question: "仏教は〇〇からの解脱を目的とした",
  answer: "輪廻転生",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_163",
  question: "仏教は〇〇を否定した",
  answer: "カースト制度",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_164",
  question: "前4世紀末、〇〇の東方遠征によってインド北西部にギリシア文化が流入した",
  answer: "アレクサンドロス大王",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_165",
  question: "インド最初の統一国家は〇〇朝である",
  answer: "マウリヤ朝",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_166",
  question: "マウリヤ朝の建国者は〇〇である",
  answer: "チャンドラグプタ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_167",
  question: "マウリヤ朝の都は〇〇である",
  answer: "パータリプトラ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_168",
  question: "マウリヤ朝の最盛期の王は〇〇である",
  answer: "アショーカ王",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_169",
  question: "アショーカ王は〇〇戦争後に仏教へ帰依した",
  answer: "カリンガ戦争",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_170",
  question: "アショーカ王は仏教の教えを〇〇に刻んだ",
  answer: "磨崖碑・石柱碑",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_171",
  question: "アショーカ王の碑文は〇〇文字で書かれた",
  answer: "ブラーフミー文字",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_172",
  question: "マウリヤ朝滅亡後、北西インドには〇〇人が侵入した",
  answer: "インド＝ギリシア人",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_173",
  question: "その後、〇〇人が建てたクシャーナ朝が北インドを統一した",
  answer: "月氏",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_174",
  question: "クシャーナ朝の最盛期の王は〇〇である",
  answer: "カニシカ王",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_175",
  question: "カニシカ王は〇〇を保護した",
  answer: "大乗仏教",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_176",
  question: "グプタ朝では仏教は〇〇僧院を中心に教義の研究は盛んだったが、民間信仰としてはバラモン教の流れをくむ〇〇教に吸収され衰えた",
  answer: "ナーランダー僧院、ヒンドゥー教",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_177",
  question: "グプタ朝では生活の規範を定めた〇〇が成立した",
  answer: "マヌ法典",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_178",
  question: "グプタ朝は〇〇アジアの騎馬遊牧民である〇〇の侵入で衰退した",
  answer: "中央アジア、エフタル",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_179",
  question: "グプタ朝の都は〇〇",
  answer: "パータリプトラ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_180",
  question: "グプタ朝に〇〇が来訪した",
  answer: "法顕",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_181",
  question: "グプタ朝では〇〇の概念ができた",
  answer: "ゼロの概念",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_182",
  question: "グプタ美術には〇〇石窟寺院や〇〇石窟寺院)",
  answer: "アジャンター石窟寺院、エローラ石窟寺院",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_183",
  question: "ヴァルダナ朝は〇〇により建国されたが彼の死後に滅亡した",
  answer: "ハルシャ＝ヴァルダナ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_184",
  question: "ヴァルダナの都は〇〇である",
  answer: "カウナジ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_185",
  question: "ハルシャ＝ヴァルダナは〇〇を保護した",
  answer: "仏教",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_186",
  question: "ヴァルダナ朝に唐の僧の〇〇が来訪した",
  answer: "玄奘",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_187",
  question: "〇〇朝はナーランダーを中心として仏教を復活させた",
  answer: "パーラ朝",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_188",
  question: "〇〇朝はマウリヤ朝に対して独立を維持した",
  answer: "パーンディヤ朝",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_189",
  question: "チョーラ朝は〇〇に遠征した",
  answer: "シュリーヴィジャヤ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_190",
  question: "チョーラ朝とパーンディヤ朝は〇〇を輸出して栄えた",
  answer: "綿花",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_191",
  question: "チョーラ朝は〇〇に軍事遠征を行った",
  answer: "セイロン",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_192",
  question: "チョーラ朝は〇〇に施設を派遣した",
  answer: "北宋",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_193",
  question: "仏教の始祖は〇〇である",
  answer: "ガウタマ＝シッダールタ（釈迦牟尼）",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_194",
  question: "ガウタマ＝シッダールタは〇〇出身である",
  answer: "クシャトリヤ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_195",
  question: "仏教よ教義は〇〇観、〇〇実践、〇〇的修行を重視である",
  answer: "無常観、八正道、精神的修行",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_196",
  question: "仏教の支持層は〇〇である",
  answer: "クシャトリヤ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_197",
  question: "ジャイナ教の始祖は〇〇である",
  answer: "ヴァルダマーナ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_198",
  question: "ヴァルダマーナは〇〇出身である",
  answer: "クシャトリヤ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_199",
  question: "ジャイナ教の教義は極端な〇〇主義、〇〇を重視である",
  answer: "不殺生主義、戒律を重視",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_200",
  question: "ジャイナ教の支持層は〇〇と〇〇",
  answer: "ヴァイシャ、商工業者",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_201",
  question: "ヒンドゥー教は〇〇教を基礎として成立した",
  answer: "バラモン教",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_202",
  question: "ヒンドゥー教の三大神は〇〇・〇〇・〇〇",
  answer: "ブラフマー・ヴィシュヌ・シヴァ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_203",
  question: "ヒンドゥー教は〇〇制度を肯定した",
  answer: "カースト制度",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_204",
  question: "東南アジアは〇〇半島部と〇〇部に分けられる",
  answer: "インドシナ半島部・島嶼部",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_205",
  question: "東南アジアには〇〇文化と〇〇文化が伝わった",
  answer: "インド文化・中国文化",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_206",
  question: "ベトナム北部は前漢の〇〇帝に征服された",
  answer: "武帝",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_207",
  question: "ベトナムでは〇〇文字が使用された",
  answer: "漢字",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_208",
  question: "ベトナム中部では〇〇王国が栄えた",
  answer: "チャンパー",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_209",
  question: "チャンパーは〇〇系民族が建国した",
  answer: "チャム",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_210",
  question: "チャンパーは〇〇教を受容した",
  answer: "ヒンドゥー教",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_211",
  question: "メコン川流域では〇〇王国が成立した",
  answer: "扶南",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_212",
  question: "扶南の後に〇〇が成立した",
  answer: "真臘",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_213",
  question: "真臘から〇〇朝が成立した",
  answer: "アンコール朝",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_214",
  question: "アンコール朝は〇〇人が建国した",
  answer: "クメール人",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_215",
  question: "アンコール朝の都は〇〇",
  answer: "アンコール",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_216",
  question: "アンコール朝では〇〇王がアンコール＝ワットを建設した",
  answer: "スールヤヴァルマン2世",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_217",
  question: "アンコール＝ワットは〇〇教寺院である",
  answer: "ヒンドゥー教",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_218",
  question: "〇〇王はアンコール＝トムを建設した",
  answer: "ジャヤヴァルマン7世",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_219",
  question: "アンコール＝トム中心の寺院は〇〇",
  answer: "バイヨン寺院",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_220",
  question: "ジャヤヴァルマン7世は〇〇教を保護した",
  answer: "大乗仏教",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_221",
  question: "ビルマでは〇〇人がピュー人の文化を継承した",
  answer: "ビルマ人",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_222",
  question: "タイでは〇〇人が南下した",
  answer: "タイ人",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "B"
},
{
  id: "card_223",
  question: "スマトラ島では〇〇王国が栄えた",
  answer: "シュリーヴィジャヤ",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_224",
  question: "シュリーヴィジャヤは〇〇海峡を支配した",
  answer: "マラッカ海峡",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_225",
  question: "シュリーヴィジャヤは〇〇教を保護した",
  answer: "大乗仏教",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_226",
  question: "ジャワ島では〇〇朝が栄えた",
  answer: "シャイレンドラ朝",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_227",
  question: "シャイレンドラ朝は〇〇教を保護した",
  answer: "大乗仏教",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_228",
  question: "シャイレンドラ朝は〇〇を建設した",
  answer: "ボロブドゥール",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_229",
  question: "ボロブドゥールは世界最大級の〇〇遺跡",
  answer: "仏教",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_230",
  question: "シャイレンドラ朝と対立したのは〇〇朝",
  answer: "マタラム朝",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_231",
  question: "マタラム朝は〇〇教を保護した",
  answer: "ヒンドゥー教",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "D"
},
{
  id: "card_232",
  question: "マタラム朝は〇〇を建設した",
  answer: "プランバナン寺院",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_233",
  question: "プランバナン寺院は〇〇教寺院",
  answer: "ヒンドゥー教",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_234",
  question: "タイ人は〇〇王国を建国した",
  answer: "スコータイ王国",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
},
{
  id: "card_235",
  question: "アユタヤ朝では〇〇が建設された",
  answer: "日本町",
  category: "古代オリエントと古代インド・東南アジアの文明",
  level: "A"
}
];
const STORAGE_KEYS = {
  userCards: "wh_user_cards",
  knownIds: "wh_known_ids",
  memos: "wh_memos",
  currentIndex: "wh_current_index"
};

let userCards = JSON.parse(localStorage.getItem(STORAGE_KEYS.userCards) || "[]");
let knownIds = JSON.parse(localStorage.getItem(STORAGE_KEYS.knownIds) || "[]");
let weakIds = JSON.parse(localStorage.getItem("weakIds")) || [];
let selectedCategory = "all";
let memos = JSON.parse(localStorage.getItem(STORAGE_KEYS.memos) || "{}");
let currentIndex = Number(localStorage.getItem(STORAGE_KEYS.currentIndex) || 0);

const startScreen = document.getElementById("startScreen");
const studyScreen = document.getElementById("studyScreen");
const finishScreen = document.getElementById("finishScreen");
const graduateScreen = document.getElementById("graduateScreen");

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const finishResetBtn = document.getElementById("finishResetBtn");
const backHomeBtn = document.getElementById("backHomeBtn");
const graduateBtn = document.getElementById("graduateBtn");
const randomBtn = document.getElementById("randomBtn");
const graduateList = document.getElementById("graduateList");
const backFromGraduateBtn = document.getElementById("backFromGraduateBtn");
const weakFolderBtn = document.getElementById("weakFolderBtn");
const weakScreen = document.getElementById("weakScreen");
const weakList = document.getElementById("weakList");
const backFromWeakBtn = document.getElementById("backFromWeakBtn");
const weakBtn = document.getElementById("weakBtn");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchResults = document.getElementById("searchResults");
const categorySelect = document.getElementById("categorySelect");
const homeProgressBar = document.getElementById("homeProgressBar");
const homePercent = document.getElementById("homePercent");

const progressText = document.getElementById("progressText");
const studyProgressBar = document.getElementById("studyProgressBar");
const categoryText = document.getElementById("categoryText");
const levelText = document.getElementById("levelText");
const cardNumber = document.getElementById("cardNumber");
const questionText = document.getElementById("questionText");
const answerBox = document.getElementById("answerBox");
const answerText = document.getElementById("answerText");

const showAnswerBtn = document.getElementById("showAnswerBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const knownBtn = document.getElementById("knownBtn");

const memoInput = document.getElementById("memoInput");
const newQuestion = document.getElementById("newQuestion");
const newAnswer = document.getElementById("newAnswer");
const newCategory = document.getElementById("newCategory");
const addCardBtn = document.getElementById("addCardBtn");

function allCards() {
  return [...cards, ...userCards];
}

function activeCards() {
    let list = allCards().filter(card => !knownIds.includes(card.id));

    if (selectedCategory !== "all") {
        list = list.filter(card => card.category === selectedCategory);
    }

    return list
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);
}

function saveAll() {
  localStorage.setItem(STORAGE_KEYS.userCards, JSON.stringify(userCards));
  localStorage.setItem(STORAGE_KEYS.knownIds, JSON.stringify(knownIds));
  localStorage.setItem("weakIds", JSON.stringify(weakIds));
  localStorage.setItem(STORAGE_KEYS.memos, JSON.stringify(memos));
  localStorage.setItem(STORAGE_KEYS.currentIndex, String(currentIndex));
}
function setupCategorySelect() {
    if (!categorySelect) return;

    categorySelect.innerHTML = `<option value="all">全部</option>`;

    const categories = [...new Set(allCards().map(card => card.category))];

    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });

    categorySelect.addEventListener("change", () => {
        selectedCategory = categorySelect.value;
        currentIndex = 0;
        renderCard();
    });
}

function showScreen(screen) {
    startScreen.classList.add("hidden");
    studyScreen.classList.add("hidden");
    finishScreen.classList.add("hidden");
    graduateScreen.classList.add("hidden");
    weakScreen.classList.add("hidden");

    screen.classList.remove("hidden");
}

function updateHome() {
  const total = allCards().length;
  const known = knownIds.length;
  const percent = total ? Math.round((known / total) * 100) : 0;

  homeProgressText.textContent = `${known} / ${total}問`;
  homeProgressBar.style.width = `${percent}%`;
  homePercent.textContent = `${percent}%`;
}
function renderGraduateFolder() {

    graduateList.innerHTML = "";

    const graduatedCards = cards.filter(card =>
        knownIds.includes(card.id)
    );

    if (graduatedCards.length === 0) {
        graduateList.innerHTML =
            "<p>まだ卒業した問題はありません。</p>";
        return;
    }

    graduatedCards.forEach(card => {
        const item = document.createElement("div");

        item.innerHTML = `
            <div style="
                background:white;
                padding:15px;
                margin:10px 0;
                border-radius:10px;
                box-shadow:0 2px 8px rgba(0,0,0,0.1);
            ">
                <strong>${card.question}</strong><br>
                答え：${card.answer}
            </div>
        `;

        graduateList.appendChild(item);
    });
}

function renderCard() {
  const list = activeCards();

  if (list.length === 0) {
    updateHome();
    showScreen(finishScreen);
    return;
  }

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex >= list.length) currentIndex = list.length - 1;

  const card = list[currentIndex];
  const total = allCards().length;
  const known = knownIds.length;
  const percent = total ? Math.round((known / total) * 100) : 0;

  progressText.textContent = `問題 ${currentIndex + 1} / ${list.length}`;
  studyProgressBar.style.width = `${percent}%`;

  categoryText.textContent = card.category || "世界史";
  levelText.textContent = card.level ? `Lv.${card.level}` : "自作";
  cardNumber.textContent = String(currentIndex + 1).padStart(3, "0");

  questionText.textContent = card.question;
  answerText.textContent = card.answer;

  answerBox.classList.add("hidden");
  showAnswerBtn.textContent = "答えを見る";

  memoInput.value = memos[card.id] || "";

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === list.length - 1;

  saveAll();
}

function resetProgress() {
  if (!confirm("覚えたカードとメモをリセットしますか？")) return;

  knownIds = [];
  memos = {};
  currentIndex = 0;

  saveAll();
  updateHome();
  showScreen(startScreen);
}

startBtn.addEventListener("click", () => {
  showScreen(studyScreen);
  renderCard();
});

backHomeBtn.addEventListener("click", () => {
  updateHome();
  showScreen(startScreen);
});

showAnswerBtn.addEventListener("click", () => {
  answerBox.classList.toggle("hidden");

  if (answerBox.classList.contains("hidden")) {
    showAnswerBtn.textContent = "答えを見る";
  } else {
    showAnswerBtn.textContent = "答えを隠す";
  }
});

nextBtn.addEventListener("click", () => {
  currentIndex++;
  renderCard();
});

prevBtn.addEventListener("click", () => {
  currentIndex--;
  renderCard();
});

knownBtn.addEventListener("click", () => {
  const list = activeCards();
  const card = list[currentIndex];

  if (!card) return;

  if (!knownIds.includes(card.id)) {
    knownIds.push(card.id);
  }

  saveAll();
  updateHome();

  const newList = activeCards();

  if (newList.length === 0) {
    showScreen(finishScreen);
    return;
  }

  if (currentIndex >= newList.length) {
    currentIndex = newList.length - 1;
  }

  renderCard();
});
weakBtn.addEventListener("click", () => {
    const list = activeCards();
    const card = list[currentIndex];

    if (!card) return;

    if (!weakIds.includes(card.id)) {
        weakIds.push(card.id);
    }

    saveAll();

    alert("苦手フォルダに追加しました！");
});

memoInput.addEventListener("input", () => {
  const card = activeCards()[currentIndex];

  if (!card) return;

  memos[card.id] = memoInput.value;
  saveAll();
});

addCardBtn.addEventListener("click", () => {
  const q = newQuestion.value.trim();
  const a = newAnswer.value.trim();

  if (!q || !a) {
    alert("問題と答えを両方入力してください。");
    return;
  }

  const newCard = {
    id: `custom_${Date.now()}`,
    question: q,
    answer: a,
    category: newCategory.value || "自作問題",
    level: "A"
};

  userCards.push(newCard);

  newQuestion.value = "";
newAnswer.value = "";
newCategory.value = "";

  saveAll();
  updateHome();
  setupCategorySelect();

  alert("自作問題を追加しました。");
});

resetBtn.addEventListener("click", resetProgress);
finishResetBtn.addEventListener("click", resetProgress);

updateHome();
graduateBtn.addEventListener("click", () => {

    startScreen.classList.add("hidden");
    studyScreen.classList.add("hidden");
    finishScreen.classList.add("hidden");

    graduateScreen.classList.remove("hidden");

    renderGraduateFolder();

});

backFromGraduateBtn.addEventListener("click", () => {

    graduateScreen.classList.add("hidden");

    startScreen.classList.remove("hidden");

    updateHome();

});
randomBtn.addEventListener("click", () => {

    const list = cards.filter(card =>
        !knownIds.includes(card.id)
    );

    randomCards = [...list]
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);

    randomMode = true;

    currentIndex = 0;

    studyScreen.classList.remove("hidden");
    startScreen.classList.add("hidden");

    renderCard();

});
function renderWeakFolder() {
  weakList.innerHTML = "";

  const list = allCards().filter(card => weakIds.includes(card.id));

  if (list.length === 0) {
    weakList.innerHTML = "<p>まだ苦手問題はありません。</p>";
    return;
  }

  list.forEach(card => {
    const div = document.createElement("div");
    div.className = "graduate-card";

    div.innerHTML = `
      <h3>${card.question}</h3>
      <p><strong>答え：</strong>${card.answer}</p>
    `;

    weakList.appendChild(div);
  });
}

weakFolderBtn.addEventListener("click", () => {
  renderWeakFolder();
  showScreen(weakScreen);
});

backFromWeakBtn.addEventListener("click", () => {
  showScreen(startScreen);
});
searchBtn.addEventListener("click", () => {
  const keyword = searchInput.value.trim();

  searchResults.innerHTML = "";

  if (!keyword) {
    searchResults.innerHTML = "<p>検索ワードを入力してください。</p>";
    return;
  }

  const results = allCards().filter(card =>
    card.question.includes(keyword) ||
    card.answer.includes(keyword) ||
    card.category.includes(keyword)
  );

  if (results.length === 0) {
    searchResults.innerHTML = "<p>該当する問題はありません。</p>";
    return;
  }

  results.forEach(card => {
    const div = document.createElement("div");
    div.className = "graduate-card";

    div.innerHTML = `
      <h3>${card.question}</h3>
      <p><strong>答え：</strong>${card.answer}</p>
      <p>${card.category} / Lv.${card.level}</p>
    `;

    searchResults.appendChild(div);
  });
});
setupCategorySelect();