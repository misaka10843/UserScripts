// ==UserScript==
// @name:zh-TW   holodex繁体轉簡体
// @name         holodex繁体转简体
// @namespace    Created from hoothin Modify misaka10843
// @supportURL   https://github.com/misaka10843/UserScripts
// @homepageURL  https://github.com/misaka10843/UserScripts
// @version      1.0
// @description:zh-TW  修改自hoothin的簡繁自由切換，來讓Holodex支持簡體中文
// @description        修改自hoothin的簡繁自由切換，来让Holodex支持简体中文
// @author       Created from hoothin Modify misaka10843
// @include      https://*.holodex.net/*
// @include      https://holodex.net/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_notification
// @icon https://holodex.net/favicon.ico
// ==/UserScript==
//因一簡對多繁，所以簡轉繁需要優先排除異體字，並根據詞匯轉換。其他需要語義分析的，暫時無解。整理繁簡對照表很費時，因此不打臉的話不再更新，如有需求，刪減自用。更精細的需求可自行申請相應API或自行訓練語義AI並搭建對照數據庫。在油猴脚本裏面如此這般折騰，我是覺得沒有意義啦。。。
(function() {
	'use strict';
	var auto = auto; //是否自動切換至OS使用的默認語言
	//此處為單字轉換
	var scStr = '皑蔼碍爱翱袄奥坝罢摆败颁办绊帮绑镑谤剥饱宝报鲍辈贝钡狈备惫绷笔毕毙闭边编贬变辩辫鳖瘪濒滨宾摈饼拨钵铂驳卜补参蚕残惭惨灿苍舱仓沧厕侧册测层诧搀掺蝉馋谗缠铲产阐颤场尝长偿肠厂畅钞车彻尘陈衬撑称惩诚骋痴迟驰耻齿炽冲虫宠畴踌筹绸丑橱厨锄雏础储触处传疮闯创锤纯绰辞词赐聪葱囱从丛凑窜错达带贷担单郸掸胆惮诞弹当挡党荡档捣岛祷导盗灯邓敌涤递缔点垫电淀钓调谍叠钉顶锭订东动栋冻斗犊独读赌镀锻断缎兑队对吨顿钝夺鹅额讹恶饿儿尔饵贰发罚阀珐矾钒烦范贩饭访纺飞废费纷坟奋愤粪丰枫锋风疯冯缝讽凤肤辐抚辅赋复负讣妇缚该钙盖干赶秆赣冈刚钢纲岗皋镐搁鸽阁铬个给龚宫巩贡钩沟构购够蛊顾剐关观馆惯贯广规硅归龟闺轨诡柜贵刽辊滚锅国过骇韩汉阂鹤贺横轰鸿红后壶护沪户哗华画划话怀坏欢环还缓换唤痪焕涣黄谎挥辉毁贿秽会烩汇讳诲绘荤浑伙获货祸击机积饥讥鸡绩缉极辑级挤几蓟剂济计记际继纪夹荚颊贾钾价驾歼监坚笺间艰缄茧检碱硷拣捡简俭减荐槛鉴践贱见键舰剑饯渐溅涧浆蒋桨奖讲酱胶浇骄娇搅铰矫侥脚饺缴绞轿较秸阶节茎惊经颈静镜径痉竞净纠厩旧驹举据锯惧剧鹃绢杰洁结诫届紧锦仅谨进晋烬尽劲荆觉决诀绝钧军骏开凯颗壳课垦恳抠库裤夸块侩宽矿旷况亏岿窥馈溃扩阔蜡腊莱来赖蓝栏拦篮阑兰澜谰揽览懒缆烂滥捞劳涝乐镭垒类泪篱离里鲤礼丽厉励砾历沥隶俩联莲连镰怜涟帘敛脸链恋炼练粮凉两辆谅疗辽镣猎临邻鳞凛赁龄铃凌灵岭领馏刘龙聋咙笼垄拢陇楼娄搂篓芦卢颅庐炉掳卤虏鲁赂禄录陆驴吕铝侣屡缕虑滤绿峦挛孪滦乱抡轮伦仑沦纶论萝罗逻锣箩骡骆络妈玛码蚂马骂吗买麦卖迈脉瞒馒蛮满谩猫锚铆贸么霉没镁门闷们锰梦谜弥觅绵缅庙灭悯闽鸣铭谬谋亩钠纳难挠脑恼闹馁腻撵捻酿鸟聂啮镊镍柠狞宁拧泞钮纽脓浓农疟诺欧鸥殴呕沤盘庞赔喷鹏骗飘频贫苹凭评泼颇扑铺朴谱脐齐骑岂启气弃讫牵扦钎铅迁签谦钱钳潜浅谴堑枪呛墙蔷强抢锹桥乔侨翘窍窃钦亲轻氢倾顷请庆琼穷趋区躯驱龋颧权劝却鹊让饶扰绕热韧认纫荣绒软锐闰润洒萨鳃赛伞丧骚扫涩杀纱筛晒闪陕赡缮伤赏烧绍赊摄慑设绅审婶肾渗声绳胜圣师狮湿诗尸时蚀实识驶势释饰视试寿兽枢输书赎属术树竖数帅双谁税顺说硕烁丝饲耸怂颂讼诵擞苏诉肃虽绥岁孙损笋缩琐锁獭挞抬摊贪瘫滩坛谭谈叹汤烫涛绦腾誊锑题体屉条贴铁厅听烃铜统头图涂团颓蜕脱鸵驮驼椭洼袜弯湾顽万网韦违围为潍维苇伟伪纬谓卫温闻纹稳问瓮挝蜗涡窝呜钨乌诬无芜吴坞雾务误锡牺袭习铣戏细虾辖峡侠狭厦锨鲜纤咸贤衔闲显险现献县馅羡宪线厢镶乡详响项萧销晓啸蝎协挟携胁谐写泻谢锌衅兴汹锈绣虚嘘须许绪续轩悬选癣绚学勋询寻驯训讯逊压鸦鸭哑亚讶阉烟盐严颜阎艳厌砚彦谚验鸯杨扬疡阳痒养样瑶摇尧遥窑谣药爷页业叶医铱颐遗仪彝蚁艺亿忆义诣议谊译异绎荫阴银饮樱婴鹰应缨莹萤营荧蝇颖哟拥佣痈踊咏涌优忧邮铀犹游诱舆鱼渔娱与屿语吁御狱誉预驭鸳渊辕园员圆缘远愿约跃钥岳粤悦阅云郧匀陨运蕴酝晕韵杂灾载攒暂赞赃脏凿枣灶责择则泽贼赠扎札轧铡闸诈斋债毡盏斩辗崭栈战绽张涨帐账胀赵蛰辙锗这贞针侦诊镇阵挣睁狰帧郑证织职执纸挚掷帜质钟终种肿众诌轴皱昼骤猪诸诛烛瞩嘱贮铸筑驻专砖转赚桩庄装妆壮状锥赘坠缀谆浊兹资渍踪综总纵邹诅组钻致钟么为只凶准启板里雳余链泄厘裆着周赞松于态内众撸剥躏号唉冲制纮恺镳标确将志并删鱿荞麸谷签咨宽系发面托恶跡喂啰喽锈诶岩呐布卷随历闲复跶呆唠产裢隐卧刹姜郁虱鉴宁巨注浏';
	var tcStr = '皚藹礙愛翺襖奧壩罷擺敗頒辦絆幫綁鎊謗剝飽寶報鮑輩貝鋇狽備憊繃筆畢斃閉邊編貶變辯辮鼈癟瀕濱賓擯餅撥缽鉑駁蔔補參蠶殘慚慘燦蒼艙倉滄廁側冊測層詫攙摻蟬饞讒纏鏟産闡顫場嘗長償腸廠暢鈔車徹塵陳襯撐稱懲誠騁癡遲馳恥齒熾沖蟲寵疇躊籌綢醜櫥廚鋤雛礎儲觸處傳瘡闖創錘純綽辭詞賜聰蔥囪從叢湊竄錯達帶貸擔單鄲撣膽憚誕彈當擋黨蕩檔搗島禱導盜燈鄧敵滌遞締點墊電澱釣調諜疊釘頂錠訂東動棟凍鬥犢獨讀賭鍍鍛斷緞兌隊對噸頓鈍奪鵝額訛惡餓兒爾餌貳發罰閥琺礬釩煩範販飯訪紡飛廢費紛墳奮憤糞豐楓鋒風瘋馮縫諷鳳膚輻撫輔賦複負訃婦縛該鈣蓋幹趕稈贛岡剛鋼綱崗臯鎬擱鴿閣鉻個給龔宮鞏貢鈎溝構購夠蠱顧剮關觀館慣貫廣規矽歸龜閨軌詭櫃貴劊輥滾鍋國過駭韓漢閡鶴賀橫轟鴻紅後壺護滬戶嘩華畫劃話懷壞歡環還緩換喚瘓煥渙黃謊揮輝毀賄穢會燴彙諱誨繪葷渾夥獲貨禍擊機積饑譏雞績緝極輯級擠幾薊劑濟計記際繼紀夾莢頰賈鉀價駕殲監堅箋間艱緘繭檢堿鹼揀撿簡儉減薦檻鑒踐賤見鍵艦劍餞漸濺澗漿蔣槳獎講醬膠澆驕嬌攪鉸矯僥腳餃繳絞轎較稭階節莖驚經頸靜鏡徑痙競淨糾廄舊駒舉據鋸懼劇鵑絹傑潔結誡屆緊錦僅謹進晉燼盡勁荊覺決訣絕鈞軍駿開凱顆殼課墾懇摳庫褲誇塊儈寬礦曠況虧巋窺饋潰擴闊蠟臘萊來賴藍欄攔籃闌蘭瀾讕攬覽懶纜爛濫撈勞澇樂鐳壘類淚籬離裏鯉禮麗厲勵礫曆瀝隸倆聯蓮連鐮憐漣簾斂臉鏈戀煉練糧涼兩輛諒療遼鐐獵臨鄰鱗凜賃齡鈴淩靈嶺領餾劉龍聾嚨籠壟攏隴樓婁摟簍蘆盧顱廬爐擄鹵虜魯賂祿錄陸驢呂鋁侶屢縷慮濾綠巒攣孿灤亂掄輪倫侖淪綸論蘿羅邏鑼籮騾駱絡媽瑪碼螞馬罵嗎買麥賣邁脈瞞饅蠻滿謾貓錨鉚貿麽黴沒鎂門悶們錳夢謎彌覓綿緬廟滅憫閩鳴銘謬謀畝鈉納難撓腦惱鬧餒膩攆撚釀鳥聶齧鑷鎳檸獰甯擰濘鈕紐膿濃農瘧諾歐鷗毆嘔漚盤龐賠噴鵬騙飄頻貧蘋憑評潑頗撲鋪樸譜臍齊騎豈啓氣棄訖牽扡釺鉛遷簽謙錢鉗潛淺譴塹槍嗆牆薔強搶鍬橋喬僑翹竅竊欽親輕氫傾頃請慶瓊窮趨區軀驅齲顴權勸卻鵲讓饒擾繞熱韌認紉榮絨軟銳閏潤灑薩鰓賽傘喪騷掃澀殺紗篩曬閃陝贍繕傷賞燒紹賒攝懾設紳審嬸腎滲聲繩勝聖師獅濕詩屍時蝕實識駛勢釋飾視試壽獸樞輸書贖屬術樹豎數帥雙誰稅順說碩爍絲飼聳慫頌訟誦擻蘇訴肅雖綏歲孫損筍縮瑣鎖獺撻擡攤貪癱灘壇譚談歎湯燙濤縧騰謄銻題體屜條貼鐵廳聽烴銅統頭圖塗團頹蛻脫鴕馱駝橢窪襪彎灣頑萬網韋違圍爲濰維葦偉僞緯謂衛溫聞紋穩問甕撾蝸渦窩嗚鎢烏誣無蕪吳塢霧務誤錫犧襲習銑戲細蝦轄峽俠狹廈鍁鮮纖鹹賢銜閑顯險現獻縣餡羨憲線廂鑲鄉詳響項蕭銷曉嘯蠍協挾攜脅諧寫瀉謝鋅釁興洶鏽繡虛噓須許緒續軒懸選癬絢學勳詢尋馴訓訊遜壓鴉鴨啞亞訝閹煙鹽嚴顔閻豔厭硯彥諺驗鴦楊揚瘍陽癢養樣瑤搖堯遙窯謠藥爺頁業葉醫銥頤遺儀彜蟻藝億憶義詣議誼譯異繹蔭陰銀飲櫻嬰鷹應纓瑩螢營熒蠅穎喲擁傭癰踴詠湧優憂郵鈾猶遊誘輿魚漁娛與嶼語籲禦獄譽預馭鴛淵轅園員圓緣遠願約躍鑰嶽粵悅閱雲鄖勻隕運蘊醞暈韻雜災載攢暫贊贓髒鑿棗竈責擇則澤賊贈紮劄軋鍘閘詐齋債氈盞斬輾嶄棧戰綻張漲帳賬脹趙蟄轍鍺這貞針偵診鎮陣掙睜猙幀鄭證織職執紙摯擲幟質鍾終種腫衆謅軸皺晝驟豬諸誅燭矚囑貯鑄築駐專磚轉賺樁莊裝妝壯狀錐贅墜綴諄濁茲資漬蹤綜總縱鄒詛組鑽緻鐘麼為隻兇準啟闆裡靂餘鍊洩釐襠著週讚鬆於態內眾擼褫躪號欸衝製紘愷钀標確將誌並刪魷蕎麩穀籤諮寛係髮麵託噁蹟餵囉嘍銹誒巖吶佈捲隨歷閒復躂獃嘮產褳隱臥剎薑鬱蝨鑑寧鉅註瀏';
	//此處為匹配上具體詞語就優先轉換的單字
	var sc2tc = {
		'为': '爲',
		'剥': '剝',
		'产': '產',
		'么': '麼',
		'宁': '寧',
		'启': '啟',
		'锈': '鏽',
		'周': ['周', ['週', '周报', '周期', '周会', '周日', '周刊', '周波', '周岁', '周末', '周考', '一周', '抓周', '双周刊', '名剧周', '黄金周', '周休二日']],
		'冲': ['沖', ['衝', '冲奖', '冲高', '冲决', '冲浪', '冲子', '冲力', '冲要', '冲破', '冲口', '冲顶', '冲床', '冲突', '冲刺', '冲金', '冲模', '冲撞', '冲腾', '冲锋', '冲量', '冲动', '冲程', '冲压', '冲杀', '冲激', '冲击', '俯冲', '反冲', '折冲', '缓冲', '脉冲', '要冲', '冲锋枪', '冲孔机', '冲浪板', '冲劲', '冲金点', '冲压机', '冲击波', '反冲力', '冲锋', '横冲', '冲冠', '首当其冲']],
		'恶': ['惡', ['噁', '恶心']],
		'发': ['發', ['髮', '发网', '发际', '发箍', '发丝', '发式', '发带', '发型', '发卡', '发妻', '发指', '发廊', '发饰', '发乳', '发夹', '发菜', '发屋', '发姐', '发油', '发套', '发蜡', '发鬓', '发髻', '发雕', '发辫', '发胶', '发浆', '一发', '假发', '健发', '削发', '卷发', '握发', '束发', '染发', '植发', '栉发', '毛发', '毫发', '烫发', '理发', '白发', '短发', '秀发', '秃发', '结发', '美发', '胎发', '脱发', '华发', '落发', '蓄发', '护发', '金发', '银发', '头发', '驳发', '鬓发', '须发', '发小', '剃发令', '洗发', '发短心长', '怒发冲冠', '断发文身', '被发', '鹤发', '黄发垂髫', '擢发难数', '庞眉皓发', '披头散发', '间不容发']],
		'复': ['復', ['複', '复诊', '复印', '复写', '复查', '复习', '复式', '复种', '复姓', '复核', '复音', '复决', '复利', '复眼', '复句', '复合', '复果', '复述', '复胃', '复本', '复方', '复验', '复选', '复赛', '复议', '复制', '复检', '复杂', '复叶', '复线', '复诵', '复视', '复试', '复数', '复评', '复审', '繁复', '重复', '复元音', '复读机', '复辅音', '复共轭的', '合义复词', '衍声复词', '山重水复']],
		'鉴': ['鑒', ['鑑', '鉴于', '鉴识', '鉴赏', '鉴证', '鉴真', '鉴谅', '鉴别', '鉴定', '鉴戒', '人鉴', '借鉴', '印鉴', '可鉴', '品鉴', '唐鉴', '图鉴', '年鉴', '殷鉴', '洞鉴', '王鉴', '评鉴', '赏鉴', '通鉴', '风鉴', '龟鉴', '明通鉴', '鉴往知来', '鉴古推今', '有鉴于此', '渊鉴类函', '引为鉴戒', '之鉴', '宝鉴', '玉鉴', '引以为鉴', '手鉴']],
		'历': ['歷', ['曆', '历书', '历象', '历元', '历法', '公历', '回历', '国历', '夏历', '年历', '弘历', '挂历', '日历', '月历', '校历', '桌历', '殷历', '皇历', '旧历', '藏历', '西历', '农历', '阴历', '阳历', '黄历', '台历', '万历帝', '藏历年', '陀历道', '阳历年', '七曜历', '三统历', '乾象历', '天体历', '太初历', '格里历', '统天历', '行事历', '农民历', '农家历', '戊寅元历']],
		'链': ['鏈', ['鍊', '链子', '拉链', '精链', '锻链', '项链']],
		'签': ['簽', ['籤', '签子', '签诗', '抽签', '掣签', '书签', '标签', '求签', '牙签', '竹签', '贴标签', '唐音统签', '金瓶掣签', '云笈七签']],
		'闲': ['閒', ['閑', '闲闲', '熟闲', '高闲', '闲居', '幽闲', '逾闲']],
		'赞': ['贊', ['讚', '赞赏', '赞佩', '赞美', '赞誉', '赞歌', '赞叹', '赞许', '赞扬', '赞颂', '赞语', '按赞', '盛赞', '礼赞', '称赞', '夸赞', '颂赞', '点赞', '赞不绝口']],
		'钟': ['鍾', ['鐘', '钟摆', '钟点', '钟乳', '钟楼', '钟头', '钟鼎', '分钟', '丧钟', '座钟', '挂钟', '摆钟', '时钟', '洪钟', '空钟', '编钟', '诗钟', '警钟', '电钟', '闹钟', '点钟', '钟点房', '钟鼓', '钟点工', '钟鼎文', '大钟寺', '石钟乳', '光学钟', '原子钟', '大本钟', '大笨钟', '宗周钟', '平安钟', '打卡钟', '抖空钟', '撞丧钟', '救命钟', '敲警钟', '敲丧钟', '潜水钟', '生物钟', '石英钟', '自鸣钟', '电子钟', '钟鸣', '晨钟', '黄钟', '撞钟']],
		'只': ['隻', ['只', '只有', '只管', '只消', '只当', '只好', '只要', '只能', '只会', '只是', '只怕', '只得', '只见', '只顾', '只许', '只因', '不只', '仅只', '只不过', '只此一家', '只欠东风', '只争朝夕']]
	};
	//此處為用語轉換
	var sc2tcComb = {
		'鼠标': '滑鼠',
		'U盘': '隨身碟',
		'硬盘': '硬碟',
		'软件': '軟體',
		'笔记本': '筆記型電腦',
		'台式机': '桌上型電腦',
		'网络': '網路',
		'打印': '列印',
		'复印': '影印',
		'充电宝': '行動電源',
		'排插': '延長綫',
		'程序': '程式',
		'代码': 'code',
		'光盘': '光碟',
		'音频': '音訊',
		'屏幕': '熒幕',
		'卸载': '解除安裝',
		'回车': 'Enter',
		'文件夹': '檔案夾',
		'升级': '更新',
		'局域网': '區域網路',
		'打伞': '撐傘',
		'洗面奶': '洗面乳',
		'洗发水': '洗髮乳',
		'打底裤': '内搭褲',
		'电饭煲': '電鍋',
		'发卡': '髮夾',
		'聊天群': '聊天視窗',
		'普通话': '國語',
		'简历': '履歷',
		'公交车': '公車',
		'打车': '叫車',
		'出租车': '計程車',
		'地铁': '捷運',
		'自行车': '脚踏車',
		'摩托车': '機車',
		'巴士': '客運',
		'耐克': 'NIKE',
		'赛百味': 'Subway',
		'哈根达斯': 'Haagen Dazs',
		'优衣库': 'UNIQLO',
		'宝马': 'BMW',
		'奔驰': '賓士',
		'挺好的': '滿好的',
		'牛逼': '厲害',
		'左拐': '左轉',
		'估计': '大概',
		'竖的': '直的',
		'让一下': '借過',
		'等会儿': '等一下',
		'凉水': '冰水',
		'打包': '外帶',
		'外卖': '外送',
		'地道': '道地',
		'很火': '很紅',
		'宾馆': '飯店',
		'旅馆': '賓館',
		'包间': '包廂',
		'卫生间': '化妝室',
		'幼儿园': '幼稚園',
		'公安局': '警察局',
		'饭店': '餐廳',
		'酒店': '飯店',
		'高校': '大學',
		'写字楼': '辦公大樓',
		'换乘站': '轉運站',
		'豆腐脑': '豆花',
		'菠萝': '鳳梨',
		'薯片': '洋芋片',
		'土豆': '馬鈴薯',
		'花生': '土豆',
		'方便面': '泡麵',
		'芝士': '起司',
		'猕猴桃': '奇異果',
		'盒饭': '便當',
		'夜宵': '宵夜',
		'金枪鱼': '鮪魚',
		'三文鱼': '鮭魚',
		'番石榴': '芭樂',
		'冰激淋': '冰淇淋',
		'冰棍': '冰棒',
		'快餐': '速食',
		'绿色食品': '健康食品',
		'西红柿': '番茄',
		'西兰花': '花椰菜',
		'创可贴': 'OK綳',
		'输液': '打點滴',
		'献血': '捐血',
		'B超': '超音波檢查',
		'非典': 'SARS',
		'疯牛病': '狂牛病',
		'台球': '撞球',
		'乒乓球': '桌球',
		'自由泳': '自由式',
		'蛙泳': '蛙式',
		'初中生': '國中生',
		'本科生': '大學生',
		'师傅': '司機',
		'女士': '小姐',
		'程序员': '程式設計師',
		'师兄': '學長',
		'妹子': '女孩',
		'传销': '直銷',
		'宇航员': '太空人',
		'超声波': '超音波',
		'北京时间': '中原標準時間',
		'保质期': '保存期限',
		'甲肝': 'A肝',
		'乙肝': 'B肝',
		'丙肝': 'C肝',
		'塑料': '塑膠',
		'知识产权': '智慧財產權',
		'三维': '3D',
		'直播': '實況',
		'列表': '清單',
		'缩略图': '縮圖',
		'视频': '影片',
		'主题': '佈景主題',
		'联动': '連動',
		'联系': '聯絡',
		'扩展': '擴充功能',
		'上个月': 'last month',
		'昨天': 'yesterday',
		'歌曲': 'Songs',
		'视频': 'Videos',
		'烤肉MAN': 'Subbers',
		'VTB': 'VTubers',
		'链接': '連結',
		'通道': '管道',
		'表达反馈': '表達回饋',
		'服务器': '伺服器',
		'计划': '計畫',
		'登录': '登入',
		'搜索': '搜尋',
		'全局': '全域'
	};
	//此處為姦文盲親娘
	var fuckIlliteracy = {
		'yyds': '永遠的神'
	};
	var lang = navigator.appName == "Netscape" ? navigator.language: navigator.userLanguage;
	lang = lang.toLowerCase();
	//此處為補丁，因爲考慮到港澳臺繁體可能各有不同
	switch (lang) {
	case "zh-tw":
		/*sc2tc["只"]=[
                '隻',
                ['','']
            ];*/
		/*sc2tcComb['三维']='';
            */
		break;
	default:
		break;
	}

	var isSimple = (lang === "zh-cn" || lang === "zh-hans" || lang === "zh-sg" || lang === "zh-my");
	var action = 2;

	var stDict = {},
	tsDict = {};
	for (let i in scStr) {
		stDict[scStr[i]] = tcStr[i];
		tsDict[tcStr[i]] = scStr[i];
	}
	var sc2tcCombTree = {},
	tc2scCombTree = {},
	fuckIlliteracyTree = {};
	for (let key in sc2tcComb) {
		let value = sc2tcComb[key];
		let curTree = sc2tcCombTree;
		for (let i = 0; i < key.length; i++) {
			let newTree = {};
			if (i == key.length - 1) {
				newTree = {
					"end": value
				};
			}
			let branch = curTree[key.charAt(i)];
			if (!branch) {
				curTree[key.charAt(i)] = newTree;
				curTree = newTree;
			} else {
				curTree = branch;
			}
		}
		curTree = tc2scCombTree;
		for (let i = 0; i < value.length; i++) {
			let newTree = {};
			if (i == value.length - 1) {
				newTree = {
					"end": key
				};
			}
			let branch = curTree[value.charAt(i)];
			if (!branch) {
				curTree[value.charAt(i)] = newTree;
				curTree = newTree;
			} else {
				curTree = branch;
			}
		}
	}
	for (let key in fuckIlliteracy) {
		let value = fuckIlliteracy[key];
		let curTree = fuckIlliteracyTree;
		for (let i = 0; i < key.length; i++) {
			let newTree = {};
			if (i == key.length - 1) {
				newTree = {
					"end": value
				};
			}
			let branch = curTree[key.charAt(i)];
			if (!branch) {
				curTree[key.charAt(i)] = newTree;
				curTree = newTree;
			} else {
				curTree = branch;
			}
		}
	}

	function stranText(txt) {
		if (!txt) return "";
		if (action == 2) {
			return simplized(txt);
		}
	}

	function stranBody(pNode) {
		var childs;
		if (pNode) {
			childs = pNode.childNodes;
		} else {
			childs = document.documentElement.childNodes;
		}
		if (childs) {
			for (var i = 0; i < childs.length; i++) {
				var child = childs.item(i);
				if (/BR|META|SCRIPT|HR|TEXTAREA/.test(child.tagName)) continue;
				if (child.title) {
					let title = stranText(child.title);
					if (child.title != title) {
						child.title = title;
					}
				}
				if (child.alt) {
					let alt = stranText(child.alt);
					if (child.alt != alt) {
						child.alt = alt;
					}
				}
				if (child.tagName == "INPUT" && child.value !== "" && child.type != "text" && child.type != "search" && child.type != "hidden") {
					let value = stranText(child.value);
					if (child.value != value) {
						child.value = value;
					}
				} else if (child.nodeType == 3) {
					let data = stranText(child.data);
					if (child.data != data) {
						child.data = data;
					}
				} else stranBody(child);
			}
		}
	}
	function simplized(orgStr) {
		var str = '',
		char;
		for (var i = 0; i < orgStr.length; i++) {
			char = orgStr.charAt(i);
			let search = tc2scCombTree[char],
			searchIndex = i,
			hasMatch = false;
			while (search && searchIndex < orgStr.length) {
				if (search.end) {
					hasMatch = true;
					i = searchIndex;
					str += search.end;
					break;
				}
				search = search[orgStr.charAt(++searchIndex)];
			}
			if (hasMatch) {
				continue;
			}
			search = fuckIlliteracyTree[char];
			searchIndex = i;
			while (search && searchIndex < orgStr.length) {
				let downTree = null;
				if (searchIndex < orgStr.length - 1) {
					downTree = search[orgStr.charAt(searchIndex + 1)];
				}
				if (!downTree && search.end) {
					hasMatch = true;
					i = searchIndex;
					for (let s = 0; s < search.end.length; s++) {
						let curChar = search.end.charAt(s);
						str += tsDict[curChar] || curChar;
					}
					break;
				}
				searchIndex++;
				search = downTree;
			}
			if (hasMatch) {
				continue;
			}
			if (char.charCodeAt(0) > 10000) {
				var sChar = tsDict[char];
				if (sChar) str += sChar;
				else str += char;
			} else str += char;
		}
		return str;
	}

	function setLanguage() {
		GM_setValue("action_" + location.hostname.toString().replace(/\./g, "_"), action);
		switch (action) {
		case 2:
			GM_notification("已切换至简体中文");
			break;
		}
		if (action > 1) {
			stranBody();
		}
	}

	var saveAction = GM_getValue("action_" + location.hostname.toString().replace(/\./g, "_"));
	action = saveAction ? saveAction: (isSimple ? (auto ? 2 : 3) : (auto ? 3 : 2));
	if ((auto || saveAction) && action > 1) {
		setTimeout(function() {
			stranBody();
			var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
			var observer = new MutationObserver(function(records) {
				records.map(function(record) {
					if (record.addedNodes) { [].forEach.call(record.addedNodes,
						function(item) {
							stranBody(item);
						});
					}
				});
			});
			var option = {
				'childList': true,
				'subtree': true
			};
			observer.observe(document.body, option);
		},
		50);
	}
})();
