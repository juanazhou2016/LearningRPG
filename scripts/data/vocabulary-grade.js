// 词汇年级难度映射
// Grade 3: 基础词汇（颜色、家庭、食物、动物、身体部位、衣物、日用品等）
// Grade 4: 中级词汇（天气、职业、形状、日常动作、星期月份等）
// Grade 5: 较难词汇（恐龙、太空基础、职业、消防、童话故事等）
// Grade 6: 高难度词汇（太空科学、力与运动、环保、抽象概念等）

export const vocabularyGrades = {
  // 1. Tea Party（茶会）- 基础食物词汇 - Grade 3
  teaParty: {
    grade: 3,
    words: {
      bread: "面包",
      jam: "果酱",
      cake: "蛋糕",
      cucumber: "黄瓜",
      tomatoes: "西红柿",
      butter: "黄油",
      cheese: "奶酪",
      crisps: "薯片",
      squash: "果汁饮料",
      scones: "司康饼",
      strawberries: "草莓",
      lemonade: "柠檬水",
      oranges: "橙子",
      apples: "苹果",
      cream: "奶油"
    }
  },

  // 2. The Three Billy Goats Gruff - 童话故事基础词汇 - Grade 3
  threeBillyGoatsGruff: {
    grade: 3,
    words: {
      valley: "山谷",
      small: "小的",
      grass: "草",
      goats: "山羊",
      river: "河流",
      medium: "中等的",
      bridge: "桥",
      big: "大的",
      hooves: "蹄子",
      troll: "巨魔"
    }
  },

  // 3. Three Little Pigs - 童话故事 - Grade 3
  threeLittlePigs: {
    grade: 3,
    words: {
      roof: "屋顶",
      blow: "吹",
      "huffed and puffed": "用力吹（呼呼喘气）",
      "little pigs": "小猪",
      wolf: "狼",
      straw: "稻草",
      pot: "锅",
      chimney: "烟囱",
      "straw house": "稻草屋",
      "wooden house": "木屋",
      "brick house": "砖房",
      brick: "砖块",
      wood: "木头"
    }
  },

  // 4. Transport（交通工具）- 交通工具词汇 - Grade 4
  transport: {
    grade: 4,
    words: {
      "steam train": "蒸汽火车",
      airship: "飞艇",
      ship: "轮船",
      tram: "有轨电车",
      helicopter: "直升机",
      truck: "卡车",
      bus: "公共汽车",
      "hot air balloon": "热气球",
      tractor: "拖拉机",
      train: "火车",
      "space shuttle": "航天飞机",
      car: "小汽车",
      lorry: "货车",
      bicycle: "自行车",
      aeroplane: "飞机",
      van: "厢式货车",
      ferry: "渡轮",
      submarine: "潜水艇",
      "racing car": "赛车",
      boat: "小船"
    }
  },

  // 5. Under the Sea（海底生物）- 海洋生物 - Grade 4-5
  underTheSea: {
    grade: 4,
    words: {
      shark: "鲨鱼",
      jellyfish: "水母",
      squid: "鱿鱼",
      shell: "贝壳",
      crab: "螃蟹",
      starfish: "海星",
      fish: "鱼",
      seahorse: "海马",
      turtle: "海龟",
      angelfish: "神仙鱼",
      "hermit crab": "寄居蟹",
      swordfish: "剑鱼",
      diver: "潜水员",
      anchor: "锚",
      whale: "鲸鱼",
      "coral snake": "珊瑚蛇",
      shipwreck: "沉船",
      pufferfish: "河豚",
      octopus: "章鱼",
      "manta ray": "蝠鲼",
      clownfish: "小丑鱼",
      coral: "珊瑚"
    }
  },

  // 6. Vegetables（蔬菜）- 蔬菜词汇 - Grade 3
  vegetables: {
    grade: 3,
    words: {
      carrot: "胡萝卜",
      onion: "洋葱",
      cauliflower: "花椰菜",
      lettuce: "生菜",
      potato: "土豆",
      celery: "芹菜",
      turnip: "萝卜",
      leek: "韭葱",
      marrow: "西葫芦",
      sprout: "芽苗菜",
      peas: "豌豆",
      "runner beans": "四季豆",
      sweetcorn: "甜玉米",
      cabbage: "卷心菜",
      spinach: "菠菜",
      "sweet potato": "红薯",
      broccoli: "西兰花",
      pepper: "彩椒",
      aubergine: "茄子",
      cucumber: "黄瓜"
    }
  },

  // 7. Weather（天气）- 天气词汇 - Grade 4
  weather: {
    grade: 4,
    words: {
      fog: "雾",
      cold: "寒冷的",
      clouds: "云",
      showers: "阵雨",
      wet: "湿的",
      snow: "雪",
      stormy: "暴风雨的",
      dry: "干燥的",
      hot: "炎热的",
      sleet: "雨夹雪",
      thunder: "雷声",
      lightning: "闪电",
      shine: "照耀",
      hail: "冰雹",
      ice: "冰",
      rainbow: "彩虹",
      windy: "有风的",
      sunny: "晴朗的",
      rain: "雨",
      drizzle: "毛毛雨"
    }
  },

  // 8. Winter（冬天）- 冬季词汇 - Grade 3-4
  winter: {
    grade: 3,
    words: {
      "sea lion": "海狮",
      icicles: "冰柱",
      jumper: "毛衣",
      Christmas: "圣诞节",
      inuit: "因纽特人",
      cold: "寒冷的",
      skis: "滑雪板",
      "dogs and sled": "狗拉雪橇",
      "Arctic hare": "北极兔",
      seal: "海豹",
      snowman: "雪人",
      ice: "冰",
      scarf: "围巾",
      "snowy owl": "雪鸮",
      "ice skating": "滑冰",
      gloves: "手套",
      penguin: "企鹅",
      "polar bear": "北极熊",
      snowballs: "雪球",
      "woolly hat": "毛线帽",
      igloo: "冰屋",
      winter: "冬天"
    }
  },

  // 9. Police（警察）- 警察相关词汇 - Grade 3-4
  police: {
    grade: 3,
    words: {
      "finger print": "指纹",
      radio: "对讲机",
      "police dog": "警犬",
      helmet: "头盔",
      "police horse": "警用马",
      "police helicopter": "警用直升机",
      "police officer": "警察",
      "police car": "警车",
      "police note pad": "警用记事本",
      "police van": "警用面包车",
      "police station": "警察局",
      siren: "警笛",
      torch: "手电筒",
      handcuffs: "手铐"
    }
  },

  // 10. Recycling（回收）- 环保相关 - Grade 4-5
  recycling: {
    grade: 4,
    words: {
      cardboard: "硬纸板",
      bin: "垃圾桶",
      compost: "堆肥",
      plastic: "塑料",
      waste: "垃圾/废弃物",
      environment: "环境",
      cans: "金属罐",
      glass: "玻璃",
      clothes: "衣物",
      landfill: "垃圾填埋场",
      paper: "纸",
      recycle: "回收",
      reuse: "再利用",
      tip: "垃圾场"
    }
  },

  // 11. Sleeping Beauty（睡美人）- 童话故事 - Grade 3-4
  sleepingBeauty: {
    grade: 3,
    words: {
      sleep: "睡觉",
      magic: "魔法",
      baby: "婴儿",
      Queen: "女王",
      castle: "城堡",
      curse: "诅咒",
      gifts: "礼物",
      woke: "醒来",
      "spinning wheel": "纺车",
      King: "国王",
      Forest: "森林",
      fairies: "仙女",
      Prince: "王子",
      "wicked fairy": "邪恶仙女",
      kiss: "亲吻"
    }
  },

  // 12. Snow White and the Seven Dwarfs - 童话故事 - Grade 3-4
  snowWhite: {
    grade: 3,
    words: {
      beautiful: "美丽的",
      jealous: "嫉妒的",
      stepmother: "继母",
      "Snow White": "白雪公主",
      poisoned: "有毒的",
      "The Queen": "王后",
      potion: "药水",
      apple: "苹果",
      "magic mirror": "魔镜",
      heart: "心脏",
      pig: "猪",
      cottage: "小屋",
      forest: "森林",
      fairest: "最美的",
      kiss: "亲吻",
      "old hag": "老巫婆",
      "seven dwarfs": "七个小矮人",
      asleep: "睡着的",
      huntsman: "猎人",
      "The Prince": "王子"
    }
  },

  // 13. Space（太空）- 太空词汇 - Grade 5
  space: {
    grade: 5,
    words: {
      Mercury: "水星",
      Venus: "金星",
      Earth: "地球",
      Mars: "火星",
      Jupiter: "木星",
      Saturn: "土星",
      Uranus: "天王星",
      Neptune: "海王星",
      Pluto: "冥王星",
      moon: "月亮",
      asteroids: "小行星",
      comet: "彗星",
      sun: "太阳",
      galaxy: "星系",
      "space shuttle": "航天飞机",
      rocket: "火箭",
      vacuum: "真空",
      stars: "星星",
      satellite: "卫星"
    }
  },

  // 14. Superhero（超级英雄）- 超级英雄词汇 - Grade 4-5
  superhero: {
    grade: 4,
    words: {
      fire: "火",
      ice: "冰",
      fast: "快的",
      transform: "变身",
      costume: "战衣",
      superhero: "超级英雄",
      lightning: "闪电",
      flying: "飞行",
      invisibility: "隐身",
      "x-ray": "X光",
      strong: "强壮的",
      vision: "视力",
      mask: "面具",
      cape: "披风",
      boots: "靴子",
      sidekick: "助手"
    }
  },

  // 15. Bear Hunt（猎熊）- 故事词汇 - Grade 3-4
  bearHunt: {
    grade: 3,
    words: {
      bear: "熊",
      cave: "洞穴",
      forest: "森林",
      snowstorm: "暴风雪",
      mud: "泥",
      grass: "草",
      cold: "寒冷的",
      thick: "厚的/浓密的",
      wavy: "波浪起伏的",
      river: "河流",
      catch: "抓住",
      dark: "黑暗的",
      narrow: "狭窄的",
      whirling: "旋转的",
      gloomy: "阴暗的"
    }
  },

  // 16. Character Adjectives（外貌性格）- 性格形容词 - Grade 4-5
  characterAdjectives: {
    grade: 4,
    words: {
      pretty: "漂亮的",
      ugly: "丑陋的",
      fat: "胖的",
      brave: "勇敢的",
      tall: "高的",
      short: "矮的",
      scary: "吓人的",
      dirty: "脏的",
      fierce: "凶猛的",
      thin: "瘦的",
      foolish: "愚蠢的",
      proud: "骄傲的",
      caring: "体贴的",
      cheerful: "开朗的",
      poor: "贫穷的",
      mean: "刻薄的",
      smelly: "臭的",
      polite: "有礼貌的",
      rich: "富有的",
      annoying: "烦人的",
      generous: "大方的"
    }
  },

  // 17. Emotion Adjectives（情绪）- 情绪形容词 - Grade 3-4
  emotionAdjectives: {
    grade: 3,
    words: {
      shy: "害羞的",
      bored: "无聊的",
      angry: "生气的",
      worried: "担心的",
      sleepy: "困的",
      excited: "兴奋的",
      nervous: "紧张的",
      surprised: "惊讶的",
      energetic: "精力充沛的",
      confused: "困惑的",
      happy: "开心的",
      upset: "难过的",
      quiet: "安静的",
      jolly: "快乐的",
      grumpy: "脾气坏的",
      terrified: "恐惧的",
      frustrated: "沮丧的",
      rude: "粗鲁的",
      intelligent: "聪明的",
      beautiful: "美丽的",
      sensible: "懂事的",
      clever: "机灵的",
      friendly: "友好的",
      nasty: "恶毒的"
    }
  },

  // 18. Cinderella（灰姑娘）- 童话故事 - Grade 3
  cinderella: {
    grade: 3,
    words: {
      clock: "时钟",
      Prince: "王子",
      Cinderella: "灰姑娘",
      footmen: "男仆",
      foot: "脚",
      lizard: "蜥蜴",
      horses: "马",
      "glass slippers": "水晶鞋",
      ballroom: "舞厅",
      rat: "老鼠",
      invitation: "邀请函",
      coach: "马车",
      "ugly sisters": "恶毒的姐姐",
      coachman: "车夫",
      pumpkin: "南瓜",
      "fairy Godmother": "仙女教母",
      "wicked stepmother": "恶毒继母",
      palace: "宫殿"
    }
  },

  // 19. Clothes（衣物）- 衣物词汇 - Grade 3
  clothes: {
    grade: 3,
    words: {
      "T-shirt": "T恤",
      jeans: "牛仔裤",
      dress: "连衣裙",
      "football shirt": "足球衫",
      jacket: "夹克",
      vest: "背心",
      skirt: "短裙",
      shorts: "短裤",
      trousers: "长裤",
      underwear: "内衣",
      raincoat: "雨衣",
      jumper: "毛衣",
      "swimming costume": "泳衣",
      knickers: "女式内裤",
      pants: "内裤/长裤",
      tights: "连裤袜",
      cap: "帽子",
      mittens: "连指手套",
      shirt: "衬衫",
      "swimming trunks": "泳裤",
      boxers: "平角内裤",
      socks: "袜子",
      hoodie: "连帽衫",
      "duffel coat": "粗呢大衣",
      cardigan: "开衫",
      scarf: "围巾",
      hat: "帽子"
    }
  },

  // 20. Desert Animals（沙漠动物）- 沙漠动物 - Grade 4
  desertAnimals: {
    grade: 4,
    words: {
      camel: "骆驼",
      meerkat: "狐獴",
      snake: "蛇",
      tarantula: "狼蛛",
      vulture: "秃鹫",
      lizard: "蜥蜴",
      scorpion: "蝎子"
    }
  },

  // 21. Dinosaurs（恐龙）- 恐龙名称 - Grade 5
  dinosaurs: {
    grade: 5,
    words: {
      Stegosaurus: "剑龙",
      Iguanodon: "禽龙",
      Pterodactyl: "翼龙",
      "Tyrannosaurus rex": "霸王龙",
      Brachiosaurus: "腕龙",
      Triceratops: "三角龙",
      Plesiosaur: "蛇颈龙",
      Velociraptor: "迅猛龙",
      Apatosaurus: "迷惑龙"
    }
  },

  // 22. My Family（家庭）- 家庭成员 - Grade 3
  myFamily: {
    grade: 3,
    words: {
      mother: "妈妈",
      father: "爸爸",
      baby: "婴儿",
      parents: "父母",
      daughter: "女儿",
      son: "儿子",
      stepmother: "继母",
      stepfather: "继父",
      aunt: "姑姑/阿姨",
      family: "家庭",
      uncle: "叔叔/舅舅",
      grandmother: "奶奶/外婆",
      sister: "姐姐/妹妹",
      brother: "哥哥/弟弟",
      niece: "侄女/外甥女",
      nephew: "侄子/外甥",
      grandfather: "爷爷/外公",
      grandchildren: "孙辈",
      cousins: "堂/表兄弟姐妹"
    }
  },

  // 23. Farm Animals（农场动物）- 农场动物 - Grade 3
  farmAnimals: {
    grade: 3,
    words: {
      cow: "奶牛",
      pig: "猪",
      dog: "狗",
      cat: "猫",
      duck: "鸭子",
      goose: "鹅",
      donkey: "驴",
      horse: "马",
      sheep: "绵羊",
      turkey: "火鸡",
      goat: "山羊",
      chicken: "鸡"
    }
  },

  // 24. Fire Brigade（消防队）- 消防词汇 - Grade 4-5
  fireBrigade: {
    grade: 4,
    words: {
      "fire siren": "消防警笛",
      axe: "斧头",
      "fire station": "消防站",
      "fire engine": "消防车",
      "extendable ladder": "伸缩梯",
      radio: "对讲机",
      "fire fighter": "消防员",
      helmet: "头盔",
      mask: "面罩",
      "fire hydrant": "消防栓",
      "hose pipe": "消防水管",
      "fire alarm": "火警报警器",
      "fire extinguisher": "灭火器"
    }
  },

  // 25. Food（食物）- 食物词汇 - Grade 3
  food: {
    grade: 3,
    words: {
      soup: "汤",
      sandwiches: "三明治",
      pizza: "披萨",
      lentils: "小扁豆",
      chickpeas: "鹰嘴豆",
      spaghetti: "意大利面",
      "fried eggs": "煎蛋",
      sausages: "香肠",
      toast: "吐司",
      bacon: "培根",
      fruit: "水果",
      beans: "豆子",
      chocolate: "巧克力",
      cereal: "麦片",
      "steak pie": "牛排派",
      "ice cream": "冰淇淋",
      "cherry pie": "樱桃派",
      pasta: "意面",
      vegetables: "蔬菜",
      nuts: "坚果",
      "Chinese food": "中餐",
      "bangers and mash": "香肠土豆泥",
      "fish fingers": "鱼条",
      "fish and chips": "炸鱼薯条",
      "Sunday roast": "周日烤肉"
    }
  },

  // 26. Forces and Motion（力与运动）- 物理概念 - Grade 5-6
  forcesAndMotion: {
    grade: 5,
    words: {
      up: "向上",
      down: "向下",
      spin: "旋转",
      pull: "拉",
      push: "推",
      stretch: "拉伸",
      rub: "摩擦",
      slide: "滑动",
      spring: "弹簧",
      roll: "滚动",
      bounce: "弹跳",
      gravity: "重力",
      magnetise: "磁化",
      repel: "排斥",
      force: "力",
      fast: "快的",
      slow: "慢的",
      sink: "下沉",
      float: "漂浮"
    }
  },

  // 27. Fruit（水果）- 水果词汇 - Grade 3
  fruit: {
    grade: 3,
    words: {
      apple: "苹果",
      banana: "香蕉",
      blackberry: "黑莓",
      cherry: "樱桃",
      peach: "桃子",
      guava: "番石榴",
      avocado: "牛油果",
      grapes: "葡萄",
      lemon: "柠檬",
      lime: "青柠",
      mango: "芒果",
      orange: "橙子",
      melon: "甜瓜",
      papaya: "木瓜",
      "passion fruit": "百香果",
      pear: "梨",
      pineapple: "菠萝",
      plum: "李子",
      raspberry: "树莓",
      satsuma: "小蜜橘",
      strawberry: "草莓"
    }
  },

  // 28. Goldilocks and the Three Bears - 童话故事 - Grade 3
  goldilocks: {
    grade: 3,
    words: {
      Goldilocks: "金发姑娘",
      "Daddy Bear": "熊爸爸",
      "Mummy Bear": "熊妈妈",
      "Baby Bear": "熊宝宝",
      porridge: "粥",
      cottage: "小屋",
      woods: "树林",
      spoon: "勺子",
      bowl: "碗",
      bed: "床",
      chair: "椅子",
      milk: "牛奶",
      oven: "烤箱"
    }
  },

  // 29. Jack and the Beanstalk - 童话故事 - Grade 3
  jackAndTheBeanstalk: {
    grade: 3,
    words: {
      poor: "贫穷的",
      clouds: "云",
      eggs: "鸡蛋",
      hen: "母鸡",
      giant: "巨人",
      "Jack's mother": "杰克的妈妈",
      cottage: "小屋",
      cow: "奶牛",
      "magic beans": "魔法豆",
      axe: "斧头",
      beanstalk: "豆茎",
      harp: "竖琴",
      gold: "金子",
      golden: "金色的",
      castle: "城堡"
    }
  },

  // 30. Jungle and Rainforest（丛林雨林）- 丛林动物 - Grade 4-5
  jungleAndRainforest: {
    grade: 4,
    words: {
      ant: "蚂蚁",
      tiger: "老虎",
      python: "蟒蛇",
      anteater: "食蚁兽",
      butterfly: "蝴蝶",
      sloth: "树懒",
      panda: "熊猫",
      termite: "白蚁",
      "fruit bat": "果蝠",
      orangutan: "猩猩",
      chimpanzee: "黑猩猩",
      ocelot: "虎猫",
      piranha: "食人鱼",
      macaw: "金刚鹦鹉",
      iguana: "鬣蜥",
      "tree frog": "树蛙",
      tapir: "貘",
      lemur: "狐猴",
      caiman: "凯门鳄",
      gorilla: "大猩猩",
      leopard: "豹子"
    }
  },

  // 31. Little Red Riding Hood（小红帽）- 童话故事 - Grade 3
  littleRedRidingHood: {
    grade: 3,
    words: {
      basket: "篮子",
      see: "看见",
      ears: "耳朵",
      Granny: "外婆",
      Grandmother: "奶奶/外婆",
      food: "食物",
      forest: "森林",
      "Little Red Riding Hood": "小红帽",
      wolf: "狼",
      teeth: "牙齿",
      woodcutter: "樵夫",
      eat: "吃",
      house: "房子",
      eyes: "眼睛",
      bed: "床"
    }
  },

  // 32. Lost and Found（失物招领）- 故事词汇 - Grade 3-4
  lostAndFound: {
    grade: 3,
    words: {
      friends: "朋友",
      umbrella: "雨伞",
      penguin: "企鹅",
      boy: "男孩",
      "South Pole": "南极",
      duck: "鸭子",
      birds: "鸟",
      waves: "波浪",
      rowboat: "划艇"
    }
  },

  // 33. Bedroom（卧室）- 房间家具词汇 - Grade 3
  bedroom: {
    grade: 3,
    words: {
      bedroom: "卧室",
      "chest of drawers": "五斗柜",
      cot: "婴儿床",
      curtains: "窗帘",
      "bedside table": "床头柜",
      duvet: "羽绒被",
      cushion: "靠垫",
      pillows: "枕头",
      rug: "小地毯",
      lamp: "台灯",
      wardrobe: "衣柜",
      mobile: "床铃",
      toys: "玩具",
      bed: "床",
      teddy: "泰迪熊"
    }
  },

  // 34. Bathroom（浴室）- 浴室物品词汇 - Grade 3
  bathroom: {
    grade: 3,
    words: {
      bathroom: "浴室",
      bath: "浴缸",
      mat: "地垫",
      "hand towel": "手巾",
      shower: "淋浴",
      soap: "肥皂",
      mirror: "镜子",
      toothpaste: "牙膏",
      "mouth wash": "漱口水",
      toilet: "马桶",
      "toilet roll": "卫生纸",
      sink: "洗手池",
      tap: "水龙头",
      bin: "垃圾桶",
      toothbrush: "牙刷"
    }
  },

  // 35. Lounge（客厅）- 客厅物品词汇 - Grade 3
  lounge: {
    grade: 3,
    words: {
      lounge: "客厅",
      curtains: "窗帘",
      television: "电视",
      "hi-fi system": "音响",
      cushion: "靠垫",
      rug: "地毯",
      radio: "收音机",
      lamp: "落地灯",
      "dvd player": "DVD播放器",
      "coffee table": "茶几",
      armchair: "扶手椅",
      sofa: "沙发",
      "games console": "游戏机"
    }
  },

  // 36. Kitchen（厨房）- 厨房物品词汇 - Grade 3
  kitchen: {
    grade: 3,
    words: {
      kitchen: "厨房",
      crockery: "陶瓷餐具",
      cutlery: "餐具",
      fridge: "冰箱",
      hob: "炉灶",
      microwave: "微波炉",
      iron: "熨斗",
      "ironing board": "熨衣板",
      kettle: "水壶",
      radio: "收音机",
      oven: "烤箱",
      sink: "水槽",
      "washing up gloves": "洗碗手套",
      toaster: "烤面包机",
      "washing machine": "洗衣机"
    }
  },

  // 37. Dining Room（餐厅）- 餐厅物品词汇 - Grade 3
  diningRoom: {
    grade: 3,
    words: {
      "dining room": "餐厅",
      table: "桌子",
      chair: "椅子",
      cutlery: "餐具",
      placemat: "餐垫",
      rug: "地毯",
      candle: "蜡烛",
      napkin: "餐巾"
    }
  },

  // 38. Garden（花园）- 花园词汇 - Grade 3-4
  garden: {
    grade: 3,
    words: {
      garden: "花园",
      greenhouse: "温室",
      grass: "草",
      flowers: "花",
      "potted plant": "盆栽",
      shed: "工具棚",
      bush: "灌木丛",
      patio: "露台",
      tree: "树",
      "vegetable patch": "菜园",
      "swimming pool": "游泳池",
      path: "小路",
      pond: "池塘"
    }
  },

  // 39. People Who Help Us 1（职业1）- 职业词汇 - Grade 3
  peopleWhoHelpUs1: {
    grade: 3,
    words: {
      vet: "兽医",
      teacher: "老师",
      "lollipop person": "交通协管员",
      "road worker": "修路工人",
      "police officer": "警察",
      "lunchtime supervisor": "午餐管理员",
      paramedic: "护理人员",
      nurse: "护士",
      "milk deliverer": "送奶工",
      mechanic: "修理工",
      doctor: "医生",
      "taxi driver": "出租车司机"
    }
  },

  // 40. People Who Help Us 2（职业2）- 职业词汇 - Grade 3
  peopleWhoHelpUs2: {
    grade: 3,
    words: {
      dentist: "牙医",
      librarian: "图书管理员",
      firefighter: "消防员",
      "refuse collector": "垃圾清运工",
      "bus driver": "公交车司机",
      mechanic: "技工",
      caretaker: "管理员",
      "mountain rescuer": "山地救援员",
      builder: "建筑工人",
      "post deliverer": "邮递员",
      "life guard": "救生员"
    }
  },

  // 41. Pets（宠物）- 宠物词汇 - Grade 3
  pets: {
    grade: 3,
    words: {
      snail: "蜗牛",
      lizard: "蜥蜴",
      chipmunk: "花栗鼠",
      chicken: "小鸡",
      dog: "狗",
      rat: "老鼠",
      mouse: "小老鼠",
      tortoise: "乌龟",
      "guinea pig": "豚鼠",
      cat: "猫",
      snake: "蛇",
      parrot: "鹦鹉",
      spider: "蜘蛛",
      hamster: "仓鼠",
      budgie: "虎皮鹦鹉",
      fish: "鱼",
      rabbit: "兔子"
    }
  },

  // 42. Pirates（海盗）- 海盗主题词汇 - Grade 4
  pirates: {
    grade: 4,
    words: {
      ship: "船",
      sea: "大海",
      hook: "铁钩",
      "pirate flag": "海盗旗",
      pirate: "海盗",
      "treasure map": "藏宝图",
      captain: "船长",
      "treasure chest": "宝箱",
      "desert island": "荒岛",
      eyepatch: "眼罩",
      treasure: "宝藏",
      compass: "指南针"
    }
  },

  // 43. Polar Animals（极地动物）- 极地动物词汇 - Grade 4
  polarAnimals: {
    grade: 4,
    words: {
      penguin: "企鹅",
      "arctic fox": "北极狐",
      walrus: "海象",
      "killer whale": "虎鲸",
      wolf: "狼",
      narwhal: "一角鲸",
      "arctic hare": "北极兔",
      seal: "海豹",
      "beluga whale": "白鲸",
      "snowy owl": "雪鸮",
      "polar bear": "北极熊",
      reindeer: "驯鹿",
      albatross: "信天翁",
      "musk ox": "麝牛"
    }
  },

  // 44. Various shapes（各种形状）- 形状词汇 - Grade 3
  variousShapes: {
    grade: 3,
    words: {
      Circle: "圆形",
      Square: "正方形",
      Rectangle: "长方形",
      Triangle: "三角形",
      Oval: "椭圆形",
      Diamond: "菱形",
      Star: "星形",
      Heart: "心形"
    }
  },

  // 45. Peel an egg（剥鸡蛋）- 动作词汇 - Grade 3
  peelAnEgg: {
    grade: 3,
    words: {
      "boiled egg": "水煮蛋",
      "cool water": "冷水",
      Tap: "轻敲",
      Roll: "滚动",
      shell: "壳",
      "Watch out": "注意",
      Smooth: "光滑"
    }
  },

  // 46. Snack（吃零食）- 零食相关词汇 - Grade 3
  snack: {
    grade: 3,
    words: {
      snack: "零食",
      share: "分享",
      expire: "过期",
      "wash hands": "洗手",
      "too much": "太多",
      sample: "尝试",
      open: "打开"
    }
  },

  // 47. Wash hair（洗头发）- 日常动作词汇 - Grade 3
  washHair: {
    grade: 3,
    words: {
      "wash hair": "洗头发",
      shampoo: "洗发水",
      massage: "按摩",
      Rinse: "冲洗",
      Conditioner: "护发素",
      towel: "毛巾",
      hairdryer: "吹风机",
      comb: "梳子"
    }
  },

  // 48. Eat at home（在家吃饭）- 日常动作词汇 - Grade 3
  eatAtHome: {
    grade: 3,
    words: {
      rice: "米饭",
      spoon: "勺子",
      chopsticks: "筷子",
      tissue: "纸巾",
      chew: "咀嚼",
      bowl: "碗",
      slurp: "吸食"
    }
  },

  // 49. Washing dishes（洗碗）- 日常动作词汇 - Grade 3
  washingDishes: {
    grade: 3,
    words: {
      "washing dishes": "洗碗",
      "dish soap": "洗洁精",
      rinse: "冲洗",
      sponge: "海绵",
      chopsticks: "筷子",
      brush: "刷子",
      dry: "擦干",
      cupboard: "橱柜"
    }
  },

  // 50. Summer sweat（夏天出汗）- 夏季活动词汇 - Grade 3
  summerSweat: {
    grade: 3,
    words: {
      sweat: "出汗",
      wipe: "擦",
      "cool down": "降温",
      "drip down": "滴下",
      running: "跑步",
      tissue: "纸巾",
      water: "水"
    }
  },

  // 51. Waste sorting（垃圾分类）- 环保词汇 - Grade 4-5
  wasteSorting: {
    grade: 4,
    words: {
      "waste sorting": "垃圾分类",
      "recyclable waste": "可回收垃圾",
      "food waste": "厨余垃圾",
      "hazardous waste": "有害垃圾",
      "other waste": "其他垃圾",
      clothes: "衣物"
    }
  },

  // 52. Do housework（做家务）- 日常家务词汇 - Grade 3
  doHousework: {
    grade: 3,
    words: {
      "fold the clothes": "叠衣服",
      "sweep the floor": "扫地",
      "wash dishes": "洗碗",
      toy: "玩具",
      water: "浇水",
      "make bed": "整理床铺",
      trash: "垃圾"
    }
  }
};
