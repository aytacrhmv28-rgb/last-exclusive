import i10 from "../assets/i10.webp";
import i11 from "../assets/i11.webp";
import i12 from "../assets/i12.webp";
import i13 from "../assets/i13.webp";
import i14 from "../assets/i14.webp";
import i15 from "../assets/i15.webp";
import i16 from "../assets/i16.webp";
import i17 from "../assets/i17.webp";
import i18 from "../assets/i18.webp";
import i19 from "../assets/i19.webp";
import i40 from "../assets/i40.webp";
import i41 from "../assets/i41.webp";
import i42 from "../assets/i42.webp";
import i43 from "../assets/i43.webp";
import i44 from "../assets/i44.webp";
import i45 from "../assets/i45.webp";
import i46 from "../assets/i46.webp";
import i47 from "../assets/i47.webp";
import i48 from "../assets/i48.webp";
import i49 from "../assets/i49.webp";
import i70 from "../assets/i70.webp";
import i71 from "../assets/i71.webp";
import i72 from "../assets/i72.webp";
import i73 from "../assets/i73.webp";
import i74 from "../assets/i74.webp";
import i75 from "../assets/i75.webp";
import i76 from "../assets/i76.webp";
import i77 from "../assets/i77.webp";
import i78 from "../assets/i78.webp";
import i79 from "../assets/i79.webp";
import i100 from "../assets/i100.webp";
import i101 from "../assets/i101.webp";
import i102 from "../assets/i102.webp";
import i103 from "../assets/i103.webp";
import i104 from "../assets/i104.webp";
import i105 from "../assets/i105.webp";
import i106 from "../assets/i106.webp";
import i107 from "../assets/i107.webp";
import i108 from "../assets/i108.webp";
import i109 from "../assets/i109.webp";
import i130 from "../assets/i130.webp";
import i131 from "../assets/i131.webp";
import i132 from "../assets/i132.webp";
import i133 from "../assets/i133.webp";
import i134 from "../assets/i134.webp";
import i135 from "../assets/i135.webp";
import i136 from "../assets/i136.webp";
import i137 from "../assets/i137.webp";
import i138 from "../assets/i138.webp";
import i139 from "../assets/i139.webp";
import i160 from "../assets/i160.webp";
import i161 from "../assets/i161.webp";
import i162 from "../assets/i162.webp";
import i163 from "../assets/i163.webp";
import i164 from "../assets/i164.webp";
import i165 from "../assets/i165.webp";
import i166 from "../assets/i166.webp";
import i167 from "../assets/i167.webp";
import i168 from "../assets/i168.webp";
import i169 from "../assets/i169.webp";
import i190 from "../assets/i190.webp";
import i191 from "../assets/i191.webp";
import i192 from "../assets/i192.webp";
import i193 from "../assets/i193.webp";
import i194 from "../assets/i194.webp";
import i195 from "../assets/i195.webp";
import i196 from "../assets/i196.webp";
import i197 from "../assets/i197.webp";
import i198 from "../assets/i198.webp";
import i199 from "../assets/i199.webp";
const categories = [
  {
    id: 1,
    name: "Women's Fashion",
    slug: "womens-fashion",
    products: [
      {id: 101, name:"Women's Elegant Thickened High-Neck Turtleneck Sweater", price: 29.02, images:[i10]},
        {id: 102, name:"Thickened Turtleneck Sweater with Contrasting Edges, Elegant And Stretchy Soft Women'S Knitwear", price:28.50, images:[i11]},
        {id: 103, name:"Autumn and Winter New Solid Color Sweater with Twisted Stitch", price:29.93, images:[i12]},
        {id: 104, name:"Home Leisure Warm and Comfortable 2pcs Set, Autumn-Winter Women's Solid Color Sweater and Drawstring Wide-Leg Pants Outfit", price:48.43, images:[i13]},
        {id: 105, name:"Women's High Neck Sweater Set, New Autumn Winter Loose Casual Lazy Thick Long Pants Two-Piece Outfit ", price:64.23, images:[i14]},
        {id: 106, name:"Women'S 2pcs Knit Sweater Set", price:54.78, images:[i15]},
        {id: 107, name:"Women'S Elegant Thickened Zipper Front Coat with Fluffy Hood ", price:53.68, images:[i16]},
        {id: 108, name:"Women'S Elegant Long Sleeve Cardigan, High Neck Vest, and Wide Leg Pants Set", price:57.63, images:[i17]},
        {id: 109, name:" Zhaocaiyan Selection Directional Autumn and Winter New Fashion Casual Solid Color Suit for Women", price:61.18, images:[i18]},
        {id: 110, name:"Women'S Plush Slip-On Slippers", price:13.13, images:[i19]},
      ]
    
  },
  {
    id: 2,
    name: "Men's Fashion",
    slug: "mens-fashion",
    products: [
      {id: 111, name:"Autumn Winter Men'S Casual Sport Jacket", price: 53.71, images:[i40]},
        {id: 112, name:"Retro Blue Trendy Loose Jeans for Men", price:34.49, images:[i41]},
        {id: 113, name:"Men's Plaid Long Sleeve Hooded Jacket, Warm Trendy Casual Jacket For Autumn", price:31.60, images:[i42]},
        {id: 114, name:"Men's Sweatshirt Set", price:43.50, images:[i43]},
        {id: 115, name:"Men'S Fleece-Lined Half-Zip Pullover Sweatshirt ", price:24.35, images:[i44]},
        {id: 116, name:"Starflan 100% Wool Autumn/Winter Men's Solid Color V-Neck Knit Cardigan Sweater", price:57.30, images:[i45]},
        {id: 117, name:"Men's Winter Long Sleeve Turtleneck Sweater", price:33.03, images:[i46]},
        {id: 118, name:"Men'S Navy Blue Sweater - Classic Button-Front Placket", price:31.11, images:[i47]},
        {id: 119, name:"Classic Men'S Athletic 2pcs Fleece Lined Tracksuit Set", price:50.76, images:[i48]},
        {id: 120, name:"  1 Pair Men'S Slip-On Moccasins ", price:39.01, images:[i49]},
      ]
    
  },
  {
    id: 3,
    name: "Electronics",
    slug: "electronics",
    products: [
      {id: 121, name:"CINNAMON Air Pro 2 ANC Noise Cancelling Bluetooth Headphones Compatible with All IOS Android Phones", price: 33.82, images:[i70]},
        {id: 122, name:"Portable graphics tablet with pen and 4 shortcut keys, compatible with both left and right hands", price:157.40, images:[i71]},
        {id: 123, name:"PHILIPS Duo Power 2 in 1 Wrinkle Remover 1700 Watt Steam Straightener and Iron", price:168.73, images:[i72]},
        {id: 124, name:"Arzum AR5068 Superstar Touch Hair Straightening Brush - Black", price:46.81, images:[i73]},
        {id: 125, name:"JBL Tune 510BT Bluetooth Multi Connect Over-Ear Headphones", price:58.20, images:[i74]},
        {id: 126, name:"Philips Handheld Steam Straightener, 1000W, up to 20 g/min, No Ironing Board, STH3010/70", price:95.70, images:[i75]},
        {id: 127, name:"Huawei Watch GT 6 46 MM - brown", price:41.74, images:[i76]},
        {id: 128, name:"KAJİWA 1.5 Metre USB Extension Cable - USB 2.0 Extension Cable 1.5mt", price:9.04, images:[i77]},
        {id: 129, name:"Samsung Galaxy Tab A9+ 6GB 128GB 11 Tablet SM-X210", price:290.63, images:[i78]},
        {id: 130, name:"Guess iPhone 16 Pro Max Compatible Licensed 4G Case with Large Metal Logo and Strap, Pink", price:120.68, images:[i79]},
      ]
    
  },
  {
    id: 4,
    name: "Home & Lifestyle",
    slug: "home-and-lifestyle",
    products: [
      {id: 131, name:"3 Piece Flameless LED Candles", price: 14.24, images:[i100]},
        {id: 132, name:"120cm Large Artificial Palm Tree", price:23.55, images:[i101]},
        {id: 133, name:"Set of 3 Boho Ceramic Vase", price:30.54, images:[i102]},
        {id: 134, name:"Nesting Coffee Table Set of 2, Round Coffee Table with Wood Grain Top", price:94.25, images:[i103]},
        {id: 135, name:"Rustic Wooden Wall-Mounted Key Holder with Mail Organizer & Tray", price:22.80, images:[i104]},
        {id: 136, name:"1pc Nordic Style Braided Floor Lamp", price:68.13, images:[i105]},
        {id: 137, name:"1pc Large Inflatable Bean Bag Chair ", price:40.15, images:[i106]},
        {id: 138, name:"1pc USB 3D Glowing Dolphin Creative Night Light, Ocean Animal Dolphin Table Lamp", price:6.10, images:[i107]},
        {id: 139, name:"1pc Japanese-Style - Side Table - Compact Minimalist Space-Saving Coffee Table with Shelves ", price:60.35, images:[i108]},
        {id: 140, name:"2pcs Movie Character PVC Figurines ", price:25.17, images:[i109]},
      ]
    
  },
  {
    id: 5,
    name: "Medicine",
    slug: "medicine",
    products: [
      {id: 141, name:"Celimax Retinal Shot Tightening Booster 15ml", price: 105.54, images:[i130]},
        {id: 142, name:"ANUA Heartleaf 77% Clear Pad Gözenek Ve Siyah Nokta Karşıtı Asitli Tonik Ped 160ml", price:72.12, images:[i131]},
        {id: 143, name:"Dr. Althea 345 Relief Cream 50 ml", price:65.03, images:[i132]},
        {id: 144, name:"Skin1004 Madagascar Centella Ampoule- Centella Günlük Yüz Serumu 30ml", price:29.23, images:[i133]},
        {id: 145, name:"Beauty of Joseon Ground Rice And Honey Glow Mask Pürüz Karşıtı Parlatıcı Pirinç Ve Bal Özlü Maske 150ml", price:78.45, images:[i134]},
        {id: 146, name:"Medicube Collagen Night Wrapping Mask (Besleyici ve Kolajenli Soyulabilir Uyku Maskesi)", price:84.42, images:[i135]},
        {id: 147, name:"FRANKLY PDRN İçeren Cildi Gençleştirmeye Yardımcı Çift Fazlı Esans Serum PDRN Bounce Ball Serum 30 mL", price:60.98, images:[i136]},
        {id: 148, name:"FRANKLY Pirinç Özü, 9 Çeşit peptit ve Kolajen İçeren Gözenek Sıkılaştırıcı Closer Toner Pad 70 Adet 105ml", price:70.23, images:[i137]},
        {id: 149, name:"Medicube - Deep Lifting Age Repair Cream", price:87.13, images:[i138]},
        {id: 150, name:"Medicube - Red Acne Body Peeling Shot(Akne karşıtı Vücut Spreyi)", price:36.45, images:[i139]},
      ]
    
  },
  
  {
    id: 6,
    name: "Baby's & Toys",
    slug: "babys-and-toys",
    products: [
      {id: 161, name:"Baby Soothing Bed Bell Wind Chime with Elephant,, Giraffe & Horse Sounds", price: 25.51, images:[i160]},
        {id: 162, name:"Cartoon Colorful Animal Teethers", price:20.15, images:[i161]},
        {id: 163, name:"Stylish Boys' Bear Print Top + Suspender Pants Set with Bear Logo Two-Piece Outfit, Perfect for Outdoor", price:14.56, images:[i162]},
        {id: 164, name:"6pcs Soft Stacking Blocks for Youngsters ", price:35.98, images:[i163]},
        {id: 165, name:"Baby Wooden Elephant Toy", price:34.46, images:[i164]},
        {id: 166, name:"8pcs Newborn Bodysuit Set for Boys and Girls", price:25.78, images:[i165]},
        {id: 167, name:"Korean Baby Hani Ins Style Bear-Shaped Knit Sweater Jumpsuit", price:29.34, images:[i166]},
        {id: 168, name:"8pcs Set for Boys and Girls Spring/Summer Comfortable Soft", price:20.90, images:[i167]},
        {id: 169, name:"DOVFANNY Baby Boys' Striped Long-Sleeve Romper", price:35.46, images:[i168]},
        {id: 170, name:"Baby Boy Winter Jumpsuit - Soft Plush Onesie with Hood", price:37.85, images:[i169]},
      ]
    
  },
  {
    id: 7,
    name: "Groceries & Pets",
    slug: "groceries-and-pets",
    products: [
      {id: 171, name:"Stainless Steel Elevated Dual Bowl Pet Feeder & Water Dispenser for Cats & Small Dogs ", price: 11.32, images:[i190]},
        {id: 172, name:"Elevated Cat Feeding Station with Multi-Tiered Bowls - Sturdy Wooden", price:17.98, images:[i191]},
        {id: 173, name:"Stainless Steel Dual Pet Bowl for Dogs and Cats ", price:14.78, images:[i192]},
        {id: 174, name:"Pet Snack Box Set with 3 Airtight Plastic Jars ", price:16.75, images:[i193]},
        {id: 175, name:"Tooth cleaning stick, 6/12pcs various sizes available for cat", price:20.96, images:[i194]},
        {id: 176, name:"ROZINO Poodle Fixed Color Bath Shampoo for Dogs - 2-in-1 Deep Cleansing ", price:15.34, images:[i195]},
        {id: 177, name:"Sealed Pet Food Storage Container with Measuring Cup", price:16.52, images:[i196]},
        {id: 178, name:"6/12pcs Dog Chew Toys, Various Styles and Sizes, Dental Cleaning Bones", price:19.73, images:[i197]},
        {id: 179, name:"11pcs Compact Non-Slip Plastic Cat Bowl Set with Base ", price:22.43, images:[i198]},
        {id: 180, name:"Heavy-Duty Metal Dog Food Storage Container with Airtight Lid & Spoon", price:41.17, images:[i199]},
      ]
    
  },
  
]
export default categories;
