export const business = {
  name: 'UK Pizza',
  phoneDisplay: '0750 888 7007',
  phoneLink: '+9647508887007',
  address: '6244+92 Erbil, Erbil Governorate, 44001',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=UK%20Pizza%2C%206244%2B92%20Erbil%2C%20Iraq',
  rating: '4.7',
  reviewCount: '4,036',
  spendRange: 'IQD 5,000–15,000',
  talabatUrl: 'https://www.talabat.com/',
  digitalMenuUrl: 'https://my.monu.app/',
  // Replace with the restaurant's verified profile when available.
  instagramUrl: 'https://www.instagram.com/',
}

const photo = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`

// These illustrative entries keep the design usable until the restaurant confirms its menu.
// Set a confirmed IQD price, edit names/descriptions, or remove an entry before launch.
export const menuItems = [
  { id: 'margherita', category: 'pizza', name: { en: 'Classic Margherita', ku: 'مارگەریتا کلاسیک', ar: 'مارغريتا كلاسيكية' }, description: { en: 'Tomato, mozzarella, and fresh basil.', ku: 'تەماتە، مۆزارێلا و ڕەیحانی تازە.', ar: 'طماطم وموزاريلا وريحان طازج.' }, image: photo('photo-1579751626657-72bc17010498'), featured: true, price: null },
  { id: 'pepperoni', category: 'pizza', name: { en: 'Pepperoni', ku: 'پەپەرۆنی', ar: 'بيبروني' }, description: { en: 'Golden cheese with savoury pepperoni.', ku: 'پەنیرێکی زێڕین لەگەڵ پەپەرۆنییەکی خۆش.', ar: 'جبنة ذهبية مع بيبروني شهي.' }, image: photo('photo-1513104890138-7c749659a591'), featured: true, price: null },
  { id: 'bbq-chicken', category: 'pizza', name: { en: 'BBQ Chicken', ku: 'مریشکی باربیکیو', ar: 'دجاج باربكيو' }, description: { en: 'Chicken, smoky BBQ sauce, and cheese.', ku: 'مریشک، سۆسی باربیکیوی دووکەڵاوی و پەنیر.', ar: 'دجاج وصلصة باربكيو مدخنة وجبنة.' }, image: photo('photo-1571407970349-bc81e7e96d47'), featured: true, price: null },
  { id: 'veggie', category: 'pizza', name: { en: 'Garden Veggie', ku: 'سەوزەواتی باخچە', ar: 'خضار الحديقة' }, description: { en: 'A colourful mix of vegetables and cheese.', ku: 'تێکەڵەیەکی ڕەنگاوڕەنگی سەوزەوات و پەنیر.', ar: 'مزيج ملون من الخضار والجبنة.' }, image: photo('photo-1574071318508-1cdbab80d002'), featured: false, price: null },
  { id: 'uk-special', category: 'pizza', name: { en: 'UK Special', ku: 'تایبەتی UK', ar: 'يو كي الخاصة' }, description: { en: 'A signature-style pizza — confirm ingredients with the team.', ku: 'پیتزایەکی تایبەت؛ پێکهاتەکان لە تیمەکە بپرسە.', ar: 'بيتزا مميزة؛ يرجى تأكيد المكونات مع الفريق.' }, image: photo('photo-1565299624946-b28f40a0ae38'), featured: false, price: null },
  { id: 'beef-burger', category: 'burgers', name: { en: 'Classic Beef Burger', ku: 'بەرگەری گۆشتی کلاسیک', ar: 'برغر لحم كلاسيكي' }, description: { en: 'Beef patty, crisp lettuce, and house-style sauce.', ku: 'گۆشتی بەرگەر، کاهو و سۆسی تایبەت.', ar: 'قطعة لحم وخس مقرمش وصلصة خاصة.' }, image: photo('photo-1568901346375-23c9450c58cd'), featured: true, price: null },
  { id: 'chicken-burger', category: 'burgers', name: { en: 'Crispy Chicken Burger', ku: 'بەرگەری مریشکی کرانچی', ar: 'برغر دجاج مقرمش' }, description: { en: 'Crispy chicken with fresh, crunchy toppings.', ku: 'مریشکی کرانچی لەگەڵ سەوزەی تازە و کرانچی.', ar: 'دجاج مقرمش مع إضافات طازجة ومقرمشة.' }, image: photo('photo-1606755962773-d324e0a13086'), featured: false, price: null },
  { id: 'chicken-wrap', category: 'burgers', name: { en: 'Chicken Wrap', ku: 'ڕاپی مریشک', ar: 'راب الدجاج' }, description: { en: 'A warm wrap with chicken and fresh vegetables.', ku: 'ڕاپێکی گەرم بە مریشک و سەوزەی تازە.', ar: 'راب دافئ بالدجاج والخضار الطازجة.' }, image: photo('photo-1626700051175-6818013e1d4f'), featured: false, price: null },
  { id: 'fries', category: 'sides', name: { en: 'Golden Fries', ku: 'فرێزی زێڕین', ar: 'بطاطا ذهبية' }, description: { en: 'Crisp, golden fries. Ask about dips.', ku: 'فرێزی کرانچی و زێڕین؛ دەربارەی سۆس بپرسە.', ar: 'بطاطا ذهبية مقرمشة. اسأل عن الصلصات.' }, image: photo('photo-1573080496219-bb080dd4f877'), featured: false, price: null },
  { id: 'garlic-bread', category: 'sides', name: { en: 'Garlic Bread', ku: 'نان بە سیر', ar: 'خبز بالثوم' }, description: { en: 'Toasted bread with garlic and herbs.', ku: 'نانێکی برژاو بە سیر و گیاوچکە.', ar: 'خبز محمص بالثوم والأعشاب.' }, image: photo('photo-1573140401552-3fab0b24306f'), featured: false, price: null },
  { id: 'wings', category: 'sides', name: { en: 'Chicken Wings', ku: 'باڵی مریشک', ar: 'أجنحة دجاج' }, description: { en: 'A shareable favourite. Sauce options to confirm.', ku: 'خواردنێکی هاوبەش؛ جۆری سۆس بپرسە.', ar: 'طبق مناسب للمشاركة. يرجى تأكيد الصلصات.' }, image: photo('photo-1608039829572-78524f79c4c7'), featured: false, price: null },
  { id: 'soft-drink', category: 'drinks', name: { en: 'Soft Drink', ku: 'خواردنەوەی گازی', ar: 'مشروب غازي' }, description: { en: 'Ask the team about available drinks.', ku: 'دەربارەی خواردنەوە بەردەستەکان لە تیمەکە بپرسە.', ar: 'اسأل الفريق عن المشروبات المتوفرة.' }, image: photo('photo-1513558161293-cdaf765edfd7'), featured: false, price: null },
  { id: 'water', category: 'drinks', name: { en: 'Bottled Water', ku: 'ئاوی بوتڵ', ar: 'ماء معبأ' }, description: { en: 'Chilled bottled water.', ku: 'ئاوی بوتڵی سارد.', ar: 'ماء معبأ بارد.' }, image: photo('photo-1523362628745-0c100150b504'), featured: false, price: null },
  { id: 'brownie', category: 'desserts', name: { en: 'Chocolate Brownie', ku: 'براونیی چۆکڵات', ar: 'براوني بالشوكولاتة' }, description: { en: 'A rich chocolate dessert — availability to confirm.', ku: 'شیرینییەکی دەوڵەمەندی چۆکڵات؛ بەردەستبوونی بپرسە.', ar: 'حلوى غنية بالشوكولاتة؛ يرجى تأكيد التوفر.' }, image: photo('photo-1606313564200-e75d5e30476c'), featured: false, price: null },
]

export const categoryIds = ['all', 'pizza', 'burgers', 'sides', 'drinks', 'desserts']
