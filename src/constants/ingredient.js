import cerealIcon from 'assets/ingredient/cereal';
import meatSeafoodIcon from 'assets/ingredient/meatSeafood';
import processedAndMilkIcon from 'assets/ingredient/processedAndMilk';
import seasoningIcon from 'assets/ingredient/seasoning';
import vegetableIcon from 'assets/ingredient/vegetable';

const INGREDIENT_TITLE = [
  '채소/과일',
  '쌀/면/잡곡/견과류',
  '정육/계란/수산/건어물',
  '양념/오일',
  '가공/유제품/기타',
];

const VEGETALBLE = {
  'Bean Sprouts': '콩나물',
  'Water Dropwort': '미나리',
  'Chopped Green Onion': '다진파',
  'Chopped Garlic': '다진마늘',
  'Mung Bean Sprouts': '숙주',
  'Bellflower Root': '도라지',
  Bracken: '고사리',
  'Shiitake Mushroom': '표고버섯',
  pumpkin: '호박',
  Carrot: '당근',
  'Garlic Chives': '부추',
  'Green Chili Pepper': '청고추',
  'Red Chili Pepper': '홍고추',
  'Green Onion': '파',
  Garlic: '마늘',
  'Peeled Chestnut': '깐밤',
  Jujube: '대추',
  'Chayote Squash': '청동호박',
  Potato: '감자',
  Onion: '양파',
  'Green pimento': '청피망',
  'Red pimento': '홍피망',
  Cucumber: '오이',
  'Kabocha Squash': '애호박',
  Leek: '실파',
  Pear: '배',
  'Seasoned Radish': '동치미무',
  'Yeolmu Radish': '열무',
  Scallion: '대파',
  'Chopped Ginger': '다진생강',
  Lettuce: '상추',
  'Perilla Leaves': '깻잎',
  'Bamboo Shoots': '죽순',
  Kimchi: '김치',
  Radish: '무',
  Chestnut: '밤',
  'Enoki Mushroom': '목이버섯',
  'Cherry Tomato': '방울토마토',
  'Assorted Vegetables': '모듬채소',
  Celery: '샐러리',
  Rucola: '루콜라',
  Treviso: '트레비소',
  Basil: '바질',
  'Black Olive': '블랙올리브',
  'Green Olive': '그린올리브',
  'Oyster Mushroom': '느타리버섯',
  'Bell Pepper': '피망',
  Ginger: '생강',
  'Lettuce Leaf': '상추잎',
  'Red Cabbage Leaf': '적양배추잎',
  Paprika: '파프리카',
  'Thai Pepper': '실고추',
  'Burdock Root': '우엉',
  Tomato: '토마토',
  'Chopped Onion': '다진양파',
  'Hot Pepper': '고추',
  'Cabbage Leaf': '양배추잎',
  Chestnut: '밤',
  'Enoki Mushroom': '목이버섯',
  Pineapple: '파인애플',
  'Whole Garlic': '통마늘',
  Walnut: '은행',
  'Napa Cabbage': '배추',
  'Mustard Greens': '갓',
  'Napa Cabbage Kimchi': '배추김치',
  'White Bean': '흰콩',
  'Napa Cabbage Leaf': '배춧잎',
  'Baby Napa Cabbage': '풋배추',
  'Korean Radish': '총각무',
  'Maitake Mushroom': '싸리버섯',
  Chwinamul: '쑥갓',
  'Cirsium japonicum': '우거지',
  'Shimeji Mushroom': '팽이버섯',
  'Wood Ear Mushroom': '석이버섯',
  'Dried Shiitake Mushroom': '말린표고버섯',
  'Whole Ginger': '통생강',
  'Lotus Root': '연근',
  Fernbrake: '냉이',
  'Cornelian Cherry': '더덕',
  Pepper: '꽈리고추',
  'Garlic Scapes': '마늘종',
  'Whole Bellflower Root': '통도라지',
  Cabbage: '양배추',
  Chicory: '치커리',
  'Thin Green Onion': '가는파',
  'Thick Green Onion': '굵은파',
  Eggplant: '가지',
  'Dried Pepper': '마른고추',
  'Mountain Ginseng': '수삼',
  'Romaine Lettuce': '양상추',
  Cauliflower: '컬리플라워',
  Apple: '사과',
  Grapefruit: '자몽',
  Strawberry: '딸기',
  Endive: '앤다이브',
  Treviso: '트레비소',
  Spinach: '시금치',
  'Whole Tomato': '홀토마토',
  Raisin: '건포도',
  'Red Pepper': '붉은 고추',
  'Radish Greens': '무순',
  Mugwort: '쑥',
  'Pine Needle': '솔잎',
  Taro: '토란',
  'Chopped Green Onion for Beef Marinade': '[쇠고기양념] 다진파',
  'Chopped Green Onion and Parsley': '다진파슬리',
  'Red Bell Pepper': '적파프리카',
  'Yellow Bell Pepper': '황파프리카',
  Broccoli: '브로콜리',
  'Boiled Red Beans': '삶은팥',
  'Sweet Potato Stems': '고구마줄기',
  Knotweed: '취나물',
  'Chopped Green Chili Pepper': '다진풋고추',
  Kale: '케일',
  'Chingensai (Chinese Cabbage)': '청경채',
  'Mustard Leaves': '겨자잎',
  'Wild Sesame Leaves': '달래',
  'Green Chili Pepper': '청양고추',
  'Shiitake Mushroom': '양송이',
  'Chrysanthemum Greens': '봄동',
  Corn: '옥수수',
  'Green Chili Pepper': '풋고추',
  'Enoki Mushroom': '송이버섯',
  'Kimchi Leaves': '김치잎',
  'Young Radish Leaves': '근대잎',
  'Dried Shiitake Mushroom': '말린 표고버섯',
  Lemon: '레몬',
  'Sweet Potato': '고구마',
  'Lettuce Blossom': '꽃상추',
  Grapes: '포도',
  Kohlrabi: '고들빼기',
  'Bellflower Root': '두릅',
  'Chamnamul (Mugwort)': '참나물',
  Asparagus: '아스파라거스',
  'Young Garlic': '풋마늘',
  Cherry: '체리',
  'Chopped Scallion': '다진대파',
  'Perilla Leaves': '김칫잎',
  'Grown Arugula': '아욱',
  'Oyster Mushroom': '새송이버섯',
  'Mung Bean Sprout Greens': '숙주나물',
  'Chinese Chives': '중국부추',
  'Wild Sesame Leaves': '들깻잎',
  'Sweet Pumpkin': '단호박',
  Kiwi: '키위',
  Avocado: '아보카도',
  'Green Onion White Part': '박고지',
  Olive: '올리브',
  Banana: '바나나',
  'Red Leaf Lettuce': '적채',
  'Cherry Tomato': '체리알',
  'Water Dropwort': '치자',
  'Sliced Garlic': '채썬마늘',
  'Sliced Ginger': '채썬생강',
  Vegetables: '채소',
  Chestnut: '생밤',
  'Nutritious Chives': '영양부추',
  Radish: '무,래디쉬',
  'Minced Garlic': '간마늘',
  'Minced Ginger': '간생강',
  'Savoy Cabbage': '얼갈이배추',
  'Garlic Chives': '쪽파',
  'Young Radish Greens': '근대',
  'Red Crown Daisy': '붉은갓',
  'Sliced Red Pepper': '삭힌고추',
  'Sautéed Garlic': '저민마늘',
  'Whole Green Onion': '통파',
  Thyme: '타임',
  'Spinach Greens': '시금치나물',
  'Bellflower Root Greens': '도라지나물',
  'Bracken Fern Greens': '고사리나물',
  'Seasoned Chopped Green Onion': '[양념장] 다진파',
  Beet: '비트',
  Orange: '오렌지',
  'Sprouts Vegetables': '새싹채소',
  'Mini Bell Pepper': '미니파프리카',
  'Roasted Seaweed': '구운김',
  'Salad Greens': '샐러드채소',
  'Italian Parsley': '이태리파슬리',
  'Italian Chili Pepper': '이태리고추',
  'Salad Lettuce': '사라다나(버터헤드, 상추종류)',
  'Seasoned Beets': '비트 간 것',
  'Kabocha Squash Flesh': '애호박(속살)',
  'Shiitake Mushroom': '표고',
  'Whole Scallion': '대파 대',
  'Red Napa Cabbage': '적양배추',
  'Red Bell Pepper, Yellow Bell Pepper, Green Bell Pepper':
    '빨강파프리카·노랑 파프리카·청피망',
  'Green Bell Pepper': '녹색피망',
  'Yellow/Red Bell Pepper': '노랑/빨강 파프리카',
  Broccolini: '브로코리',
  'Bay Leaves': '월계수 잎',
  'Chopped Garlic': '다진 마늘',
  'Chili Pepper': '칠리',
  'Red Bell Pepper, Green Bell Pepper': '홍피망, 청피망 각각',
  Ginseng: '인삼',
  'Radish Greens': '시래기',
  'Salted Cabbage': '절인 배추',
  'Chopped Ginger': '다진생각(다진생강)',
  'Steamed Corn Kernels': '찐옥수수 알갱이',
  'Rainbow Chili Pepper': '무지개고추',
  'Radish for Broth': '육수용 무',
  'Scallion for Broth': '육수용 대파',
  Mushroom: '버섯',
  Kelp: '도라지나물',
  'Green Onion Roots': '파뿌리',
  'Yellow Bell Pepper': '노란 파프리카',
  'Red Bell Pepper': '붉은 파프리카',
  'Mini Oyster Mushroom': '미니새송이버섯',
  'Chopped Garlic Chives': '다진쪽파',
  Zucchini: '노각',
  'Sweet Potato Leaves': '고구마잎',
  'Zucchini Leaves': '호박잎',
  'Round Zucchini': '둥근호박',
  'Young Leafy Greens': '어린잎채소',
  Lime: '라임',
  'Chopped Scallion': '다진식파',
  'White Cucumber': '백오이',
  'Radish Slices': '무채',
  'Carrot Leaves': '당근잎',
  'Carrot Slices': '당근채',
  'Cabbage Leaves': '배추잎',
  'Dried Blueberries': '건블루베리',
  Celery: '셀러리',
};

const CEREAL = {
  Rice: '쌀',
  'Glutinous Rice': '멥쌀',
  'Sweet Rice': '찹쌀',
  Sorghum: '수수',
  "Job's Tears": '차조',
  Soybeans: '콩',
  'Red Beans': '팥',
  'Cooked Rice': '밥',
  'Pine Nuts': '잣',
  'Black Sesame Seeds': '흑임자',
  'Mung Beans': '완두콩',
  'Cold Noodles': '냉면',
  Dangmyeon: '당면',
  Noodles: '국수',
  'Glutinous Rice Flour': '찹쌀가루',
  Starch: '전분',
  'Wheat Flour': '밀가루',
  Cornstarch: '녹말',
  'Ground Peanuts': '날콩가루',
  'Knife-Cut Noodles': '칼국수면',
  'Bread Crumbs': '빵가루',
  'Wheat Noodles': '밀국수',
  'Starch Powder': '녹말가루',
  'Fermented Soybeans': '메주콩',
  'Instant Noodles': '라면',
  'Thin Noodles': '소면',
  Spaghetti: '스파게티',
  'Udon Noodles': '우동면',
  'High-Gluten Flour': '강력분',
  'Dry Yeast': '드라이이스트',
  'Raw Peanuts': '풋콩',
  'Sesame Seeds': '깨',
  'Mung Beans': '녹두',
  'Frying Powder': '튀김가루',
  'Cold Rice': '찬밥',
  'Rice Flour': '쌀가루',
  Walnuts: '호두',
  'Potato Starch': '감자전분',
  'Rice Cake Slices for Rice Cake Soup': '떡국떡',
  Multigrain: '오곡곡물',
  'Chewy Noodles': '쫄면',
  'White Rice Cake': '흰떡',
  'Rice Noodles': '쌀국수',
  'Rice Cake': '떡',
  Pasta: '파스타',
  'Knife-Cut Noodles': '칼국수',
  'Shelled Peas': '껍질콩',
  Barley: '보리',
  'Petits Fours': '페투치네',
  Grains: '조',
  'Buckwheat Noodles': '메밀국수',
  'Pumpkin Seeds': '호박씨',
  'Green Tea Noodles': '녹차국수',
  'Lathyrus Seeds': '서리태콩',
  'Soybean Flour': '콩가루',
  Sesame: '참깨',
  'Mixed Rice of Glutinous and Sweet Rice': '진밥(멥쌀+찹쌀)',
  'Mixed Rice': '진밥',
  Peanuts: '땅콩',
  'Roasted Black Sesame Seeds': '볶은 흑임자(검은깨)',
  'Glutinous Rice': '참쌀',
  'Spaghetti Noodles': '스파게티면',
  Almonds: '아몬드',
  Nuts: '견과류',
  'Frying Mix': '부침가루',
};

const MEATSEAFOODS = {
  'Lean Meat': '안심',
  Egg: '계란',
  'Sheep Brain': '양지머리',
  Pork: '돼지고기',
  Beef: '쇠고기',
  Anchovy: '멸치',
  Kelp: '다시마',
  'Egg White': '계란흰자',
  Squid: '오징어',
  Shrimp: '새우',
  Mussel: '홍합',
  Clam: '모시조개',
  'Dried Pollack': '북어',
  'Wakame Seaweed': '미역',
  'Ground Beef': '다진쇠고기',
  'Soaked Wakame Seaweed': '불린미역',
  Pollock: '생태',
  Salmon: '연어',
  'Boiled Octopus': '삶은 문어살',
  'Common Cuttlefish': '갑오징어',
  'Short-arm Octopus': '꼴뚜기',
  'Medium-sized Shrimp Meat': '중새우살',
  'Webfoot Octopus': '쭈꾸미',
  'Cockle Meat': '참소라살',
  Scallop: '가리비',
  'Black Mussel': '검은껍질홍합',
  'Rock Shrimp': '가재새우',
  'Spiny Lobster': '재첩',
  'Sea Bream': '도미',
  'Egg Yolk': '계란노른자',
  'Dried Anchovy': '잔멸치',
  Hairtail: '갈치',
  Chicken: '닭',
  'Pollock Fillet': '대구살',
  'Short Ribs': '갈비',
  Butter: '버터',
  'Pork (Mistyped)': '돼기고기',
  Oyster: '굴',
  Cockle: '바지락',
  'Atlantic Cod': '동태',
  'Whole Dried Pollack': '통북어',
  Jellyfish: '해파리',
  'Imitation Crab Meat': '게맛살',
  'Flower Crab': '꽃게',
  Monkfish: '아구',
  'Yellow Croaker': '조기',
  'Pollack Roe': '명란',
  Octopus: '낙지',
  'Salted Pollack Roe': '선지',
  Lamb: '양',
  'Beef Bones': '소 잡뼈',
  'Nori Seaweed': '김',
  'Beef Bone Soup Stock': '사골',
  'Beef Brisket': '도가니',
  'Dried Squid': '마른오징어',
  'Cocktail Shrimp': '칵테일새우',
  'Pork Ribs': '돼지갈비',
  Tuna: '참치',
  Mackerel: '꽁치',
  'Spanish Mackerel': '고등어',
  'Dried Shrimp': '마른새우',
  'Chicken Meat': '닭고기',
  Kamaboko: '맛살',
  'Smoked Salmon': '훈제연어',
  Tripe: '곱창',
  'Codonopsis Lanceolata': '미더덕',
  'Beef (Tendon-free Cut)': '쇠고기(힘줄없는부위)',
  'Cockle Meat': '조개살',
  'Salted Pollack Roe': '명란젓',
  'Dried Shrimp': '말린새우',
  'Fresh Shrimp': '생새우',
  'Fish Fillet': '생선살',
  'Shrimp Meat': '새우살',
  Crab: '게',
  Prawn: '대하',
  'Blackmouth Catshark': '코다리',
  Flatfish: '광어',
  'Blood Cockle': '피조개',
  'Capelin Roe': '청어알',
  'Salmon Roe': '연어알',
  Abalone: '전복',
  'Fresh Oyster': '생굴',
  'Chicken Leg': '닭다리',
  'Sliced Beef': '채썬쇠고기',
  'Sea Cucumber': '해삼',
  'Chicken Breast': '닭안심',
  'Chicken Wing': '닭봉',
  'Squid Strips': '오징어채',
  Pollock: '대구',
  'Chicken Meat': '닭살',
  'Gim (Seaweed)': '파래',
  'Crab Meat': '게살',
  'Flying Fish Roe': '날치알',
  'White Fish Fillet': '흰살생선',
  'Kamaboko with Cockle Meat': '맛살조개',
  'Edible Seaweed': '해초',
  Eel: '장어',
  'Eel Bones': '장어뼈',
  'Cod Fillet': '동태살',
  'Small Shrimp': '잔새우',
  'Top Shell': '골뱅이',
  'Kamaboko with Clam': '맛조개',
  'Fresh Pollock': '생대구',
  'Wrapped Kelp': '쌈다시마',
  'Yukhoe (Korean Beef Tartare)': '육회',
  'Fried Egg': '계란후라이',
  'Beef Bones for Broth': '[쇠고기육수] 쇠뼈',
  'Beef Tail': '쇠꼬리',
  'Chicken Feet': '닭발',
  'Gizzard Shad': '전어',
  'Fermented Gizzard Shad': '전어젓갈',
  Oxtail: '소꼬리',
  'Meat Sanjeok (Skewers)': '고기산적',
  'Pork Back Ribs': '돼지등갈비',
  'Chicken Breast': '닭가슴살',
  'Pork Tenderloin': '돼지고기안심',
  'Ground Pork': '다진돼지고기',
  Catfish: '메기',
  Carp: '잉어',
  Trout: '송어',
  'Pork Cheek': '돼지 볼살',
  'White Fish Fillet': '흰살 생선',
  'Beef (Tenderloin or Sirloin)': '쇠고기(안심 또는 등심)',
  'Octopus Legs': '낙지다리',
  'Kelp for Soup Stock': '국물용 다시마',
  Beef: '소고기',
  'Boiled Egg': '삶은계란',
  'Salmon Fillet': '연어살',
  'Marinated Pork': '다짐육(돼지고기)',
  'Marinated Beef': '다짐육(소고기)',
  'Medium-sized Shrimp': '중새우',
  'Marinated Meat': '다짐육',
};

const SEASONING = {
  Salt: '소금',
  'Soy sauce for soup': '국간장',
  'Sesame oil': '참기름',
  'Red pepper paste': '고추장',
  Sugar: '설탕',
  'Soy sauce': '진간장',
  'Whole black pepper': '통후추',
  'Sesame seeds': '깨소금',
  'Red pepper powder': '고춧가루',
  'Dark brown sugar': '흑설탕',
  'Black sesame powder': '계핏가루',
  'Corn syrup': '물엿',
  'Vegetable oil': '식물성기름',
  'White sugar': '흰설탕',
  'Seasoned sauce': '양념장',
  Water: '물',
  'Ssamjang (dipping sauce for wraps)': '쌈장',
  'Ground black pepper': '후춧가루',
  Vinegar: '식초',
  'Beef broth': '쇠고기육수',
  Mustard: '겨자',
  'Dried shrimp broth': '멸칫국물',
  'Cheongju (rice wine)': '청주',
  Broth: '육수',
  'Cooking oil': '식용유',
  'Rice water': '쌀뜨물',
  'Lemon juice': '레몬즙',
  'Olive oil': '올리브오일',
  'Pesto sauce': '페스토소스',
  Chive: '차이브',
  Sauce: '소스',
  Capers: '케이퍼',
  'Sweet marjoram': '스위트마조람',
  'White wine': '화이트와인',
  Oregano: '오레가노',
  'Sun-infused soy sauce': '햇살담은간장',
  Honey: '꿀',
  'Tomato ketchup': '토마토케첩',
  'Yellow mustard': '연겨자',
  'Fine grape seed oil': '참빛고운포도씨유',
  'Perilla seed powder': '들깨가루',
  'Extra hot pepper paste': '초고추장',
  'Seasoned soy sauce': '양념간장',
  'Parsley powder': '파슬리가루',
  'Whole sesame seeds': '통깨',
  'Tomato ketchup': '토마토케찹',
  'Soybean paste': '된장',
  'Shrimp jeotgal (fermented shrimp)': '새우젓',
  'Jeotguk (fermented fish stew)': '젓국',
  'Fermented soybean paste stew': '청국장',
  'Seaweed broth': '김칫국물',
  'Anchovy jeotgal (fermented anchovies)': '멸치젓',
  'Brine solution for pickling': '절임용 소금물',
  'Red pepper flakes': '고추가루',
  'Salted water for broth': '국물용 소금물',
  'Green chili pepper': '고추냉이',
  'Nutritional yeast': '넛맥',
  'Boiling water': '다시물',
  'Cooking wine': '맛술',
  Wasabi: '와사비',
  'White ground pepper': '흰후춧가루',
  'Miris (sweet rice syrup)': '미림',
  'Pine nut powder': '잣가루',
  'Perilla seeds': '들깨',
  Mustard: '머스터드',
  Mayonnaise: '마요네즈',
  'Cooking sake': '요리술',
  'Orange mayonnaise': '오렌지마요네즈',
  'Lemon dressing': '레몬드레싱',
  'Grapeseed oil': '포도씨유',
  'Cooking oil/salt/sesame oil/pine nut powder': '식용유/소금/참기름/잣가루',
  'Cold water': '찬물',
  'Almond flour': '아몬드가루',
  'Powdered sugar': '슈가파우더',
  'Perilla oil': '들기름',
  'Beef stock': '쇠고기 육수',
  'Whole cinnamon': '통통깨',
  'Raw sugar': '황설탕',
  'Jangjorim (soy-braised beef)': '정종',
  'Oyster sauce': '굴소스',
  'Dried shrimp powder': '건새우가루',
  'Dried anchovies for broth': '육수용멸치',
  Cinnamon: '정향',
  'Boiled red bean water': '팥삶은물',
  'Wae doenjang (fermented soybean paste)': '왜된장',
  'Flavorful broth': '맛국물',
  'Iced water': '얼음물',
  'Minced green chili pepper': '다진청고추',
  'Minced red chili pepper': '다진홍고추',
  'Green tea powder': '녹차분말',
  'Curry powder': '카레가루',
  'Anchovy stock': '멸치다시물',
  'Liquid fish sauce': '액체육젓',
  'Sesame leaves': '조미술',
  'Fish sauce': '피쉬소스',
  'Mustard powder': '겨자가루',
  'Perilla leaf powder': '들깻가루',
  'Peanut powder': '땅콩가루',
  'Malt syrup': '조청',
  'Seasoned salt': '맛소금',
  'Anchovy fish sauce': '멸치액젓',
  'Worcestershire sauce': '우스터소스',
  'Peanut butter': '땅콩버터',
  Ketchup: '케첩',
  'Hot sauce': '핫소스',
  Seasoning: '조미료',
  '[Anchovy Broth] Dried Anchovies': '[멸치장국] 국멸치',
  '[Bulgogi Marinade] Soy Sauce': '[불고기양념] 간장',
  Yeast: '이스트',
  'Minced chili pepper': '다진고추',
  'Doenjang (fermented soybean paste)': '두반장',
  'Chicken broth': '닭육수',
  'Cheongjang (clear soy sauce)': '청장',
  'Fermented shrimp stew': '새우젓국',
  Oil: '기름',
  'Braised soy sauce': '조림간장',
  'Dried anchovies': '국멸치',
  'Emotional fish sauce': '감동젓',
  'Water for broth': '육수용 물',
  'Salt, pepper': '소금, 후추',
  'Honey mustard': '허니머스타드',
  'Tomato sauce': '토마토소스',
  Mayonnaise: '마요네즈',
  'Herb (mint)': '허브(민트)',
  'Herb salt': '허브솔트',
  'Mud mustard': '머드터드',
  'Frying oil': '부침유',
};

const OTHER = {
  'Dongchimi Stew': '동치미국물',
  Skewer: '꼬치',
  Pouch: '배주머니',
  'Silver cup': '은박컵',
  Wrap: '랩',
  Seasoning: '양념',
  Charcoal: '숯',
  Torantang: '토란탕',
};

const PROCEEDANDMILK = {
  'Clear mung bean jelly': '청포묵',
  Curry: '카레',
  Milk: '우유',
  Tofu: '두부',
  'Dumpling wrappers': '만두피',
  'Pear juice': '배즙',
  'Ginger juice': '생강즙',
  'Onion juice': '양파즙',
  'Bay leaves': '월계수잎',
  'Red wine': '레드와인',
  'Soft tofu': '순두부',
  'Tube-shaped rice cake': '가래떡',
  'Yuba (tofu skin)': '유부',
  'Sweet pickled radish': '단무지',
  'Fish cake': '어묵',
  'Konjac jelly': '곤약',
  'Braised black soybeans': '장조림',
  'Decorative fish cake': '장식용어묵',
  Ham: '햄',
  'Acorn jelly': '도토리묵',
  'Canned conch': '골뱅이통조림',
  'Whipping cream': '생크림',
  Bacon: '베이컨',
  'Fruit cocktail': '후루츠칵테일',
  'White bread': '식빵',
  Pickles: '피클',
  'Sliced cheese': '슬라이스치즈',
  'Parmesan cheese': '파마산치즈',
  'Lemon juice': '레몬주스',
  'Frankfurter sausage': '프랑크소시지',
  'Orange marmalade': '오렌지마멀레이드',
  'Crispy rice': '누룽지',
  'Dried persimmon': '곶감',
  Cornflakes: '콘프레이크',
  'Mozzarella cheese': '모짜렐라치즈',
  Sauerkraut: '사우어크라우트',
  Sushi: '초밥',
  Cheese: '치즈',
  'Black tea bag': '홍차티백',
  'Radish juice': '무즙',
  'Vienna sausage': '비엔나소시지',
  'Sweet rice cake powder': '인절미',
  Baguette: '바게트',
  'Fresh kimchi': '신김치',
  Soda: '사이다',
  'Pickled Japanese apricot': '매실장아찌',
  'Spinach juice': '시금치즙',
  'Carrot juice': '당근즙',
  'Canned sweetened adzuki beans': '완두콩통조림',
  'Canned corn': '옥수수통조림',
  'Cucumber pickle': '오이피클',
  'Canned mackerel': '꽁치통조림',
  'Spring roll wrappers': '춘권피',
  'Cream soup': '크림수프',
  'Blood sausage': '순대',
  'Young radish kimchi': '열무김치',
  'Parmesan cheese': '파마산치즈',
  'Rice paper': '라이스페이퍼',
  'Cheese powder': '치즈가루',
  'Bonito flakes': '가쓰오브시',
  'Sweet dried fish flakes': '오보로',
  'Fresh ginger': '초생강',
  'Frozen dumplings': '냉동만두',
  'Sweet corn': '스위트콘',
  'U-muk (fish cake)': '우묵',
  'Dried radish strips': '무말랭이',
  'U-mu (Korean radish)': '우무',
  'Tube-shaped fish cake': '가다랑이포',
  'Salted radish': '절임무',
  'Square-shaped ham': '네모난햄',
  'Canned tuna': '참치통조림',
  'Flower-shaped bread': '꽃빵',
  'Plain yogurt': '플레인요구르트',
  'Starter culture': '발효초',
  Chocolate: '초콜릿',
  'Canned fruit': '과일통조림',
  'Grana Padano cheese': '그라나 빠다노',
  'Aggau cheese': '아가용치즈',
  'Appropriate amount of milk': '우유 적당량',
  'Seaweed for gimbap': '김밥용김',
  'Bean paste': '콩비지',
  ...OTHER,
};

const INGREDIENT_ID = {
  1: 'Water Dropwort',
  2: 'Chopped Green Onion',
  3: 'Chopped Garlic',
  4: 'Mung Bean Sprouts',
  5: 'Bellflower Root',
  6: 'Bracken',
  7: 'Shiitake Mushroom',
  8: 'pumpkin',
  9: 'Carrot',
  10: 'Garlic Chives',
  11: 'Green Chili Pepper',
  12: 'Red Chili Pepper',
  13: 'Green Onion',
  14: 'Garlic',
  15: 'Peeled Chestnut',
  16: 'Jujube',
  17: 'Chayote Squash',
  18: 'Potato',
  19: 'Onion',
  20: 'Green pimento',
  21: 'Red pimento',
  22: 'Cucumber',
  23: 'Kabocha Squash',
  24: 'Leek',
  25: 'Pear',
  26: 'Seasoned Radish',
  27: 'Yeolmu Radish',
  28: 'Scallion',
  29: 'Chopped Ginger',
  30: 'Lettuce',
  31: 'Perilla Leaves',
  32: 'Bamboo Shoots',
  33: 'Kimchi',
  34: 'Radish',
  35: 'Chestnut',
  36: 'Enoki Mushroom',
  37: 'Cherry Tomato',
  38: 'Assorted Vegetables',
  39: 'Celery',
  40: 'Rucola',
  41: 'Treviso',
  42: 'Basil',
  43: 'Black Olive',
  44: 'Green Olive',
  45: 'Oyster Mushroom',
  46: 'Bell Pepper',
  47: 'Ginger',
  48: 'Lettuce Leaf',
  49: 'Red Cabbage Leaf',
  50: 'Paprika',
  51: 'Thai Pepper',
  52: 'Burdock Root',
  53: 'Tomato',
  54: 'Chopped Onion',
  55: 'Hot Pepper',
  56: 'Cabbage Leaf',
  57: 'Pineapple',
  58: 'Whole Garlic',
  59: 'Walnut',
  60: 'Napa Cabbage',
  61: 'Mustard Greens',
  62: 'Napa Cabbage Kimchi',
  63: 'White Bean',
  64: 'Napa Cabbage Leaf',
  65: 'Baby Napa Cabbage',
  66: 'Korean Radish',
  67: 'Maitake Mushroom',
  68: 'Chwinamul',
  69: 'Cirsium japonicum',
  70: 'Shimeji Mushroom',
  71: 'Wood Ear Mushroom',
  72: 'Dried Shiitake Mushroom',
  73: 'Whole Ginger',
  74: 'Lotus Root',
  75: 'Fernbrake',
  76: 'Cornelian Cherry',
  77: 'Pepper',
  78: 'Garlic Scapes',
  79: 'Whole Bellflower Root',
  80: 'Cabbage',
  81: 'Chicory',
  82: 'Thin Green Onion',
  83: 'Thick Green Onion',
  84: 'Eggplant',
  85: 'Dried Pepper',
  86: 'Mountain Ginseng',
  87: 'Romaine Lettuce',
  88: 'Cauliflower',
  89: 'Apple',
  90: 'Grapefruit',
  91: 'Strawberry',
  92: 'Endive',
  93: 'Spinach',
  94: 'Whole Tomato',
  95: 'Raisin',
  96: 'Red Pepper',
  97: 'Radish Greens',
  98: 'Mugwort',
  99: 'Pine Needle',
  100: 'Taro',
  101: 'Chopped Green Onion for Beef Marinade',
  102: 'Chopped Green Onion and Parsley',
  103: 'Red Bell Pepper',
  104: 'Yellow Bell Pepper',
  105: 'Broccoli',
  106: 'Boiled Red Beans',
  107: 'Sweet Potato Stems',
  108: 'Knotweed',
  109: 'Chopped Green Chili Pepper',
  110: 'Kale',
  111: 'Chingensai (Chinese Cabbage)',
  112: 'Mustard Leaves',
  113: 'Wild Sesame Leaves',
  114: 'Chrysanthemum Greens',
  115: 'Corn',
  116: 'Kimchi Leaves',
  117: 'Young Radish Leaves',
  118: 'Lemon',
  119: 'Sweet Potato',
  120: 'Lettuce Blossom',
  121: 'Grapes',
  122: 'Kohlrabi',
  123: 'Chamnamul (Mugwort)',
  124: 'Asparagus',
  125: 'Young Garlic',
  126: 'Cherry',
  127: 'Chopped Scallion',
  128: 'Grown Arugula',
  129: 'Mung Bean Sprout Greens',
  130: 'Chinese Chives',
  131: 'Sweet Pumpkin',
  132: 'Kiwi',
  133: 'Avocado',
  134: 'Green Onion White Part',
  135: 'Olive',
  136: 'Banana',
  137: 'Red Leaf Lettuce',
  138: 'Sliced Garlic',
  139: 'Sliced Ginger',
  140: 'Vegetables',
  141: 'Nutritious Chives',
  142: 'Minced Garlic',
  143: 'Minced Ginger',
  144: 'Savoy Cabbage',
  145: 'Young Radish Greens',
  146: 'Red Crown Daisy',
  147: 'Sliced Red Pepper',
  148: 'Sautéed Garlic',
  149: 'Whole Green Onion',
  150: 'Thyme',
  151: 'Spinach Greens',
  152: 'Bellflower Root Greens',
  153: 'Bracken Fern Greens',
  154: 'Seasoned Chopped Green Onion',
  155: 'Beet',
  156: 'Orange',
  157: 'Sprouts Vegetables',
  158: 'Mini Bell Pepper',
  159: 'Roasted Seaweed',
  160: 'Salad Greens',
  161: 'Italian Parsley',
  162: 'Italian Chili Pepper',
  163: 'Salad Lettuce',
  164: 'Seasoned Beets',
  165: 'Kabocha Squash Flesh',
  166: 'Whole Scallion',
  167: 'Red Napa Cabbage',
  168: 'Red Bell Pepper, Yellow Bell Pepper, Green Bell Pepper',
  169: 'Green Bell Pepper',
  170: 'Yellow/Red Bell Pepper',
  171: 'Broccolini',
  172: 'Bay Leaves',
  173: 'Chili Pepper',
  174: 'Red Bell Pepper, Green Bell Pepper',
  175: 'Ginseng',
  176: 'Salted Cabbage',
  177: 'Steamed Corn Kernels',
  178: 'Rainbow Chili Pepper',
  179: 'Radish for Broth',
  180: 'Scallion for Broth',
  181: 'Mushroom',
  182: 'Kelp',
  183: 'Green Onion Roots',
  184: 'Mini Oyster Mushroom',
  185: 'Chopped Garlic Chives',
  186: 'Zucchini',
  187: 'Sweet Potato Leaves',
  188: 'Zucchini Leaves',
  189: 'Round Zucchini',
  190: 'Young Leafy Greens',
  191: 'Lime',
  192: 'White Cucumber',
  193: 'Radish Slices',
  194: 'Carrot Leaves',
  195: 'Carrot Slices',
  196: 'Cabbage Leaves',
  197: 'Dried Blueberries',
  198: 'Rice',
  199: 'Glutinous Rice',
  200: 'Sweet Rice',
  201: 'Sorghum',
  202: "Job's Tears",
  203: 'Soybeans',
  204: 'Red Beans',
  205: 'Cooked Rice',
  206: 'Pine Nuts',
  207: 'Black Sesame Seeds',
  208: 'Mung Beans',
  209: 'Cold Noodles',
  210: 'Dangmyeon',
  211: 'Noodles',
  212: 'Glutinous Rice Flour',
  213: 'Starch',
  214: 'Wheat Flour',
  215: 'Cornstarch',
  216: 'Ground Peanuts',
  217: 'Knife-Cut Noodles',
  218: 'Bread Crumbs',
  219: 'Wheat Noodles',
  220: 'Starch Powder',
  221: 'Fermented Soybeans',
  222: 'Instant Noodles',
  223: 'Thin Noodles',
  224: 'Spaghetti',
  225: 'Udon Noodles',
  226: 'High-Gluten Flour',
  227: 'Dry Yeast',
  228: 'Raw Peanuts',
  229: 'Sesame Seeds',
  230: 'Frying Powder',
  231: 'Cold Rice',
  232: 'Rice Flour',
  233: 'Walnuts',
  234: 'Potato Starch',
  235: 'Rice Cake Slices for Rice Cake Soup',
  236: 'Multigrain',
  237: 'Chewy Noodles',
  238: 'White Rice Cake',
  239: 'Rice Noodles',
  240: 'Rice Cake',
  241: 'Pasta',
  242: 'Shelled Peas',
  243: 'Barley',
  244: 'Petits Fours',
  245: 'Grains',
  246: 'Buckwheat Noodles',
  247: 'Pumpkin Seeds',
  248: 'Green Tea Noodles',
  249: 'Lathyrus Seeds',
  250: 'Soybean Flour',
  251: 'Sesame',
  252: 'Mixed Rice of Glutinous and Sweet Rice',
  253: 'Mixed Rice',
  254: 'Peanuts',
  255: 'Roasted Black Sesame Seeds',
  256: 'Spaghetti Noodles',
  257: 'Almonds',
  258: 'Nuts',
  259: 'Frying Mix',
  260: 'Lean Meat',
  261: 'Egg',
  262: 'Sheep Brain',
  263: 'Pork',
  264: 'Beef',
  265: 'Anchovy',
  266: 'Kelp',
  267: 'Egg White',
  268: 'Squid',
  269: 'Shrimp',
  270: 'Mussel',
  271: 'Clam',
  272: 'Dried Pollack',
  273: 'Wakame Seaweed',
  274: 'Ground Beef',
  275: 'Soaked Wakame Seaweed',
  276: 'Pollock',
  277: 'Salmon',
  278: 'Boiled Octopus',
  279: 'Common Cuttlefish',
  280: 'Short-arm Octopus',
  281: 'Medium-sized Shrimp Meat',
  282: 'Webfoot Octopus',
  283: 'Cockle Meat',
  284: 'Scallop',
  285: 'Black Mussel',
  286: 'Rock Shrimp',
  287: 'Spiny Lobster',
  288: 'Sea Bream',
  289: 'Egg Yolk',
  290: 'Dried Anchovy',
  291: 'Hairtail',
  292: 'Chicken',
  293: 'Pollock Fillet',
  294: 'Short Ribs',
  295: 'Butter',
  296: 'Pork (Mistyped)',
  297: 'Oyster',
  298: 'Cockle',
  299: 'Atlantic Cod',
  300: 'Whole Dried Pollack',
  301: 'Jellyfish',
  302: 'Imitation Crab Meat',
  303: 'Flower Crab',
  304: 'Monkfish',
  305: 'Yellow Croaker',
  306: 'Pollack Roe',
  307: 'Octopus',
  308: 'Salted Pollack Roe',
  309: 'Lamb',
  310: 'Beef Bones',
  311: 'Nori Seaweed',
  312: 'Beef Bone Soup Stock',
  313: 'Beef Brisket',
  314: 'Dried Squid',
  315: 'Cocktail Shrimp',
  316: 'Pork Ribs',
  317: 'Tuna',
  318: 'Mackerel',
  319: 'Spanish Mackerel',
  320: 'Dried Shrimp',
  321: 'Chicken Meat',
  322: 'Kamaboko',
  323: 'Smoked Salmon',
  324: 'Tripe',
  325: 'Codonopsis Lanceolata',
  326: 'Beef (Tendon-free Cut)',
  327: 'Fresh Shrimp',
  328: 'Fish Fillet',
  329: 'Shrimp Meat',
  330: 'Crab',
  331: 'Prawn',
  332: 'Blackmouth Catshark',
  333: 'Flatfish',
  334: 'Blood Cockle',
  335: 'Capelin Roe',
  336: 'Salmon Roe',
  337: 'Abalone',
  338: 'Fresh Oyster',
  339: 'Chicken Leg',
  340: 'Sliced Beef',
  341: 'Sea Cucumber',
  342: 'Chicken Breast',
  343: 'Chicken Wing',
  344: 'Squid Strips',
  345: 'Gim (Seaweed)',
  346: 'Crab Meat',
  347: 'Flying Fish Roe',
  348: 'White Fish Fillet',
  349: 'Kamaboko with Cockle Meat',
  350: 'Edible Seaweed',
  351: 'Eel',
  352: 'Eel Bones',
  353: 'Cod Fillet',
  354: 'Small Shrimp',
  355: 'Top Shell',
  356: 'Kamaboko with Clam',
  357: 'Fresh Pollock',
  358: 'Wrapped Kelp',
  359: 'Yukhoe (Korean Beef Tartare)',
  360: 'Fried Egg',
  361: 'Beef Bones for Broth',
  362: 'Beef Tail',
  363: 'Chicken Feet',
  364: 'Gizzard Shad',
  365: 'Fermented Gizzard Shad',
  366: 'Oxtail',
  367: 'Meat Sanjeok (Skewers)',
  368: 'Pork Back Ribs',
  369: 'Pork Tenderloin',
  370: 'Ground Pork',
  371: 'Catfish',
  372: 'Carp',
  373: 'Trout',
  374: 'Pork Cheek',
  375: 'Beef (Tenderloin or Sirloin)',
  376: 'Octopus Legs',
  377: 'Kelp for Soup Stock',
  378: 'Boiled Egg',
  379: 'Salmon Fillet',
  380: 'Marinated Pork',
  381: 'Marinated Beef',
  382: 'Medium-sized Shrimp',
  383: 'Marinated Meat',
  384: 'Salt',
  385: 'Soy sauce for soup',
  386: 'Sesame oil',
  387: 'Red pepper paste',
  388: 'Sugar',
  389: 'Soy sauce',
  390: 'Whole black pepper',
  391: 'Sesame seeds',
  392: 'Red pepper powder',
  393: 'Dark brown sugar',
  394: 'Black sesame powder',
  395: 'Corn syrup',
  396: 'Vegetable oil',
  397: 'White sugar',
  398: 'Seasoned sauce',
  399: 'Water',
  400: 'Ssamjang (dipping sauce for wraps)',
  401: 'Ground black pepper',
  402: 'Vinegar',
  403: 'Beef broth',
  404: 'Mustard',
  405: 'Dried shrimp broth',
  406: 'Cheongju (rice wine)',
  407: 'Broth',
  408: 'Cooking oil',
  409: 'Rice water',
  410: 'Lemon juice',
  411: 'Olive oil',
  412: 'Pesto sauce',
  413: 'Chive',
  414: 'Sauce',
  415: 'Capers',
  416: 'Sweet marjoram',
  417: 'White wine',
  418: 'Oregano',
  419: 'Sun-infused soy sauce',
  420: 'Honey',
  421: 'Tomato ketchup',
  422: 'Yellow mustard',
  423: 'Fine grape seed oil',
  424: 'Perilla seed powder',
  425: 'Extra hot pepper paste',
  426: 'Seasoned soy sauce',
  427: 'Parsley powder',
  428: 'Whole sesame seeds',
  429: 'Soybean paste',
  430: 'Shrimp jeotgal (fermented shrimp)',
  431: 'Jeotguk (fermented fish stew)',
  432: 'Fermented soybean paste stew',
  433: 'Seaweed broth',
  434: 'Anchovy jeotgal (fermented anchovies)',
  435: 'Brine solution for pickling',
  436: 'Red pepper flakes',
  437: 'Salted water for broth',
  438: 'Green chili pepper',
  439: 'Nutritional yeast',
  440: 'Boiling water',
  441: 'Cooking wine',
  442: 'Wasabi',
  443: 'White ground pepper',
  444: 'Miris (sweet rice syrup)',
  445: 'Pine nut powder',
  446: 'Perilla seeds',
  447: 'Mayonnaise',
  448: 'Cooking sake',
  449: 'Orange mayonnaise',
  450: 'Lemon dressing',
  451: 'Grapeseed oil',
  452: 'Cooking oil/salt/sesame oil/pine nut powder',
  453: 'Cold water',
  454: 'Almond flour',
  455: 'Powdered sugar',
  456: 'Perilla oil',
  457: 'Beef stock',
  458: 'Whole cinnamon',
  459: 'Raw sugar',
  460: 'Jangjorim (soy-braised beef)',
  461: 'Oyster sauce',
  462: 'Dried shrimp powder',
  463: 'Dried anchovies for broth',
  464: 'Cinnamon',
  465: 'Boiled red bean water',
  466: 'Wae doenjang (fermented soybean paste)',
  467: 'Flavorful broth',
  468: 'Iced water',
  469: 'Minced green chili pepper',
  470: 'Minced red chili pepper',
  471: 'Green tea powder',
  472: 'Curry powder',
  473: 'Anchovy stock',
  474: 'Liquid fish sauce',
  475: 'Sesame leaves',
  476: 'Fish sauce',
  477: 'Mustard powder',
  478: 'Perilla leaf powder',
  479: 'Peanut powder',
  480: 'Malt syrup',
  481: 'Seasoned salt',
  482: 'Anchovy fish sauce',
  483: 'Worcestershire sauce',
  484: 'Peanut butter',
  485: 'Ketchup',
  486: 'Hot sauce',
  487: 'Seasoning',
  488: '[Anchovy Broth] Dried Anchovies',
  489: '[Bulgogi Marinade] Soy Sauce',
  490: 'Yeast',
  491: 'Minced chili pepper',
  492: 'Doenjang (fermented soybean paste)',
  493: 'Chicken broth',
  494: 'Cheongjang (clear soy sauce)',
  495: 'Fermented shrimp stew',
  496: 'Oil',
  497: 'Braised soy sauce',
  498: 'Dried anchovies',
  499: 'Emotional fish sauce',
  500: 'Water for broth',
  501: 'Salt, pepper',
  502: 'Honey mustard',
  503: 'Tomato sauce',
  504: 'Herb (mint)',
  505: 'Herb salt',
  506: 'Mud mustard',
  507: 'Frying oil',
  508: 'Clear mung bean jelly',
  509: 'Curry',
  510: 'Milk',
  511: 'Tofu',
  512: 'Dumpling wrappers',
  513: 'Pear juice',
  514: 'Ginger juice',
  515: 'Onion juice',
  516: 'Bay leaves',
  517: 'Red wine',
  518: 'Soft tofu',
  519: 'Tube-shaped rice cake',
  520: 'Yuba (tofu skin)',
  521: 'Sweet pickled radish',
  522: 'Fish cake',
  523: 'Konjac jelly',
  524: 'Braised black soybeans',
  525: 'Decorative fish cake',
  526: 'Ham',
  527: 'Acorn jelly',
  528: 'Canned conch',
  529: 'Whipping cream',
  530: 'Bacon',
  531: 'Fruit cocktail',
  532: 'White bread',
  533: 'Pickles',
  534: 'Sliced cheese',
  535: 'Parmesan cheese',
  536: 'Lemon juice',
  537: 'Frankfurter sausage',
  538: 'Orange marmalade',
  539: 'Crispy rice',
  540: 'Dried persimmon',
  541: 'Cornflakes',
  542: 'Mozzarella cheese',
  543: 'Sauerkraut',
  544: 'Sushi',
  545: 'Cheese',
  546: 'Black tea bag',
  547: 'Radish juice',
  548: 'Vienna sausage',
  549: 'Sweet rice cake powder',
  550: 'Baguette',
  551: 'Fresh kimchi',
  552: 'Soda',
  553: 'Pickled Japanese apricot',
  554: 'Spinach juice',
  555: 'Carrot juice',
  556: 'Canned sweetened adzuki beans',
  557: 'Canned corn',
  558: 'Cucumber pickle',
  559: 'Canned mackerel',
  560: 'Spring roll wrappers',
  561: 'Cream soup',
  562: 'Blood sausage',
  563: 'Young radish kimchi',
  564: 'Rice paper',
  565: 'Cheese powder',
  566: 'Bonito flakes',
  567: 'Sweet dried fish flakes',
  568: 'Fresh ginger',
  569: 'Frozen dumplings',
  570: 'Sweet corn',
  571: 'U-muk (fish cake)',
  572: 'Dried radish strips',
  573: 'U-mu (Korean radish)',
  574: 'Tube-shaped fish cake',
  575: 'Salted radish',
  576: 'Square-shaped ham',
  577: 'Canned tuna',
  578: 'Flower-shaped bread',
  579: 'Plain yogurt',
  580: 'Starter culture',
  581: 'Chocolate',
  582: 'Canned fruit',
  583: 'Grana Padano cheese',
  584: 'Aggau cheese',
  585: 'Appropriate amount of milk',
  586: 'Egg',
  587: 'Egg yolk',
  588: 'Seaweed for gimbap',
  589: 'Bean paste',
  590: 'Dongchimi Stew',
  591: 'Skewer',
  592: 'Pouch',
  593: 'Silver cup',
  594: 'Wrap',
  595: 'Seasoning',
  596: 'Charcoal',
  597: 'Torantang',
  598: 'Bean Sprouts',
};

const INGREDIENT_LIST = [
  VEGETALBLE,
  CEREAL,
  MEATSEAFOODS,
  SEASONING,
  PROCEEDANDMILK,
];

const INGREDIENT_ICON = [
  vegetableIcon,
  cerealIcon,
  meatSeafoodIcon,
  seasoningIcon,
  processedAndMilkIcon,
];

export {
  VEGETALBLE,
  CEREAL,
  MEATSEAFOODS,
  SEASONING,
  PROCEEDANDMILK,
  OTHER,
  INGREDIENT_ID,
  INGREDIENT_TITLE,
  INGREDIENT_LIST,
  INGREDIENT_ICON,
};