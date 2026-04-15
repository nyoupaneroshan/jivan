"use client";

import { useState } from "react";
import { PageHero } from "@/components/jivan/PageHero";
import { Breadcrumb } from "@/components/jivan/Breadcrumb";
import Link from "next/link";
import { PaymentQR } from "./payment-qr";

// ─── Types ────────────────────────────────────────────────────────────────────
type Lang = "en" | "np";

// ─── Seats & Deadline Config ──────────────────────────────────────────────────
const TOTAL_SEATS: number = 25;
const AVAILABLE_SEATS: number = 10;

// ─── Bilingual Content ────────────────────────────────────────────────────────
const t = {
  en: {
    langLabel: "नेपाली",
    weatherBanner:
      "All programs and activities are subject to change based on weather conditions at Mustang. The schedule will be adjusted to ensure the safety and well-being of all participants.",
    weatherNote: "Please Note:",

    inviteTitle: "A Heart-Centered Invitation",
    inviteText:
      "Warm and gentle greetings from the peaceful hills of Nepal. On the most sacred day of Buddhapurnima, we invite you to step away from the noise of everyday life and journey inward — into the stillness of the Himalayas, the depth of ancient caves, and most importantly, into the quiet sanctuary of your own heart. This is not merely a camp. It is a pilgrimage of the soul.",

    aboutTitle: "About the Camp",
    aboutP1:
      "Buddhapurnima — the sacred day celebrating the birth, enlightenment, and Mahaparinirvana of Lord Buddha — is the most auspicious occasion to turn inward and awaken. This special Meditation Awakening Camp is designed specifically to harness the profound spiritual energy of this holy day in one of Nepal's most sacred landscapes: the ancient Himalayan region of Mustang.",
    aboutP2:
      "Set against the breathtaking backdrop of the Dhaulagiri–Nilgiri Himalayan range, nestled at Lodge Thasang Village, Mustang, this 4-day residential retreat is a rare opportunity to go deep — into the ancient caves where monks have meditated for centuries, into the mountains, and most importantly, into yourself.",
    aboutPullQuote:
      "Many describe Mustang as a 'soul home' — a place where healing happens effortlessly, where silence has its own presence, and where the mountains feel like wise teachers.",
    aboutP3:
      "Organized by Jivan Parivartan Pvt. Ltd., the camp blends authentic spiritual practice, Himalayan trekking, guided cave meditation, nature immersion, and comfortable accommodation for a truly life-changing experience.",
    aboutWhyTitle: "Why Buddhapurnima?",
    aboutWhyText:
      "On Buddhapurnima, the energy of the earth is said to be heightened. Practicing deep meditation on this day — especially in the sacred caves of Mustang — carries immense transformative potential. This camp is not just a retreat; it is a spiritual pilgrimage.",

    offersTitle: "What This Retreat Offers",
    offersList: [
      "4-day residential retreat in a serene Himalayan lodge",
      "Guided deep meditation and yoga sessions with a spiritual master",
      "Exclusive Buddhapurnima cave meditation in the ancient sacred caves of Mustang",
      "Panoramic views of the Dhaulagiri & Nilgiri Himalayan range",
      "Guided mindfulness trekking through untouched mountain landscapes",
      "Workshops on inner awakening, soul dedication, and finding the right guru",
      "Group sharing circles, satsang, and closing ceremony",
      "Nourishing meals — breakfast, lunch, dinner + Himalayan teas",
      "Clean, comfortable accommodation with hot and cold water",
    ],

    conductedTitle: "Conducted By",
    conductorRole: "Spiritual Guide · Meditation & Reiki Practitioner",
    conductorBio1:
      "Maa Nisha Kabir has been devoted to the path of spirituality since the age of 13, quietly nurturing a deep love for meditation and inner discovery.",
    conductorBio2:
      "Drawn by the call of the Himalayas, she spent two years in profound silence meditation in the sacred land of Mustang, Nepal, resting in the serene lap of the Dhaulagiri and Nilgiri mountains. Surrounded by the stillness of the Himalayas, this rare period of solitude became a journey inward, where she experienced deep peace and discovered subtle spiritual wisdom.",
    conductorBio3:
      "From these years of sincere practice, she now wishes to share these inner treasures with sincere and dedicated seekers who feel the call to explore meditation and the path of inner awakening.",
    conductorBio4:
      "On the sacred and deeply meaningful occasion of Buddha Purnima, Maa Nisha Kabir is offering a special meditation gathering — a gentle invitation to enter silence, open the heart, and reconnect with the timeless spiritual energy of the Himalayas.",
    conductorClosing:
      "Whichever path calls to your soul, please know that you will be held with love, care, and deep respect throughout every moment of this retreat.",

    programsTitle: "Day-by-Day Programs",
    weatherWarning: "⚠️ All activities are subject to change based on weather conditions at Mustang.",

    activitiesTitle: "What's Included",
    packingTitle: "What to Pack",
    guidelinesTitle: "Guidelines",
    doTitle: "✅ Please Do",
    dontTitle: "❌ Please Don't",
    additionalTitle: "Additional Information",
    galleryLabel1: "Retreat setting & arrival · Lodge Thasang Village, Mustang",
    galleryLabel2: "Cave meditation & Himalayan trekking · Day 3 highlights",

    accommodation: { label: "Accommodation", text: "Clean, comfortable rooms with cozy beds and a warm atmosphere. Hot and cold water provided throughout your stay." },
    transport: { label: "Transportation", text: "Transportation to and from Mustang is not included in the package and must be managed by participants independently. Contact us on WhatsApp for guidance on travel options." },
    weather: { label: "Weather", text: "April/May in Mustang is generally mild — daytime 15–20°C, mornings/evenings around 5–10°C. Light rain is possible. All programs are subject to change based on actual weather conditions." },
    altitude: { label: "Altitude", text: "Mustang is at approximately 3,800m (12,467 ft). Take it easy on arrival, stay well-hydrated, and acclimatize before engaging in physical activities." },
    caves: { label: "Mustang Caves", text: "These are ancient, sacred sites historically used by monks and ascetics for deep meditation. On Buddhapurnima, the energy here is said to be especially potent — an ideal setting for deep inner awakening." },

    eventDetailsTitle: "📅 Event Details",
    dateLabel: "Date", dateVal: "28th April – 1st May, 2026", dateSub: "15th–18th Baishakh, 2083 B.S.",
    locationLabel: "Location", locationVal: "Lodge Thasang Village", locationSub: "Mustang, Nepal",
    durationLabel: "Duration", durationVal: "3 Days / 4 Nights",
    feeLabel: "Registration Fee", feeVal: "Rs. 28,000", feeSub: "Per person · Includes accommodation & meals",
    transportLabel: "Transportation", transportVal: "Not included — manage independently",
    deadlineLabel: "Booking Deadline", deadlineVal: "April 15th, 2026", deadlineSub: "Last day for registrations",

    seatsTitle: "Available Seats",
    seatsFull: "Fully Booked",
    seatsUrgency: "Limited spots available — register early to secure your place.",
    deadlineTitle: "⏳ Booking Deadline",
    deadlineNote: "Registrations close on April 15th, 2026. Secure your seat before it's too late.",

    registerBtn: "Register via WhatsApp",
    paymentTitle: "💳 Payment Details",
    depositNote1: "30% deposit (Rs. 8,400) required to confirm your seat.",
    depositNote2: "Full payment of Rs. 28,000 must be completed before the camp begins.",
    bankTransferLabel: "Bank Transfer",
    qrLabel: "Scan QR to Pay",
    receiptBtn: "Send Payment Receipt via WhatsApp",
    receiptNote: "After completing the transfer, please send us your payment screenshot or receipt via WhatsApp to confirm your booking.",
    cancellationNote: "The deposit is non-refundable. Cancellations after April 15th, 2026 will not be eligible for a refund. Please confirm your availability before registering.",
    cancellationTitle: "⚠️ Cancellation Policy:",
    contactTitle: "📞 Contact Us",
    allProgramsBtn: "← All Programs",

    packingCategories: {
      Clothing: {
        icon: "👗",
        items: [
          "Warm sweater and jacket (mornings and evenings are chilly)",
          "Maroon and white shawl (for meditation and spiritual activities)",
          "Maroon and white gown (for specific retreat sessions)",
          "Comfortable trekking clothes (breathable, moisture-wicking fabrics)",
          "Socks, gloves, and a hat for warmth during treks and cave visits",
        ],
      },
      Essentials: {
        icon: "🎒",
        items: [
          "Umbrella (for sun or light rain protection)",
          "Trekking stick (for stability during hikes)",
          "Personal medicines if you have any medical conditions",
          "Personal yoga mat (for yoga and meditation sessions)",
          "Moisturizer and sunscreen (high-altitude sun is strong)",
          "Reusable water bottle (hot and cold water provided at lodge)",
        ],
      },
      Optional: {
        icon: "📷",
        items: [
          "Journal and pen for personal reflection after cave meditation",
          "Camera or smartphone — use mindfully to stay present",
        ],
      },
    },

    doList: [
      "Participate fully in all meditation, yoga, trekking, and cave sessions",
      "Stay present — minimize distractions especially during cave meditation",
      "Respect nature and sacred spaces; follow guide's instructions at all times",
      "Connect with fellow participants during group discussions and sharing sessions",
      "Arrive on time for all sessions to maintain the retreat's flow",
    ],
    dontList: [
      "Avoid overusing phones and cameras during meditation and spiritual sessions",
      "Do not touch or disturb anything inside the sacred Mustang caves",
      "No alcohol or smoking — the retreat is a space of mindfulness and clarity",
      "Never stray from the group during treks and cave visits for your safety",
      "Do not bring heavy or unnecessary items that may hinder trekking",
    ],
  },

  np: {
    langLabel: "English",
    weatherBanner:
      "सबै कार्यक्रम र गतिविधिहरू मुस्ताङको मौसम अनुसार परिवर्तन हुन सक्छन्। सहभागीहरूको सुरक्षा र कल्याण सुनिश्चित गर्न तालिका समायोजन गरिनेछ।",
    weatherNote: "कृपया ध्यान दिनुहोस्:",

    inviteTitle: "हृदयदेखिको निमन्त्रणा",
    inviteText:
      "नेपालको शान्त पहाडहरूबाट न्यानो र कोमल अभिवादन। बुद्धपूर्णिमाको पवित्र दिनमा, हामी तपाईंलाई दैनिक जीवनको कोलाहलबाट पन्छिएर भित्रतिर यात्रा गर्न आमन्त्रण गर्दछौं — हिमालयको निश्चलतामा, प्राचीन गुफाहरूको गहिराइमा र सबैभन्दा महत्त्वपूर्ण, आफ्नै हृदयको शान्त अभयारण्यमा। यो केवल एउटा शिविर मात्र होइन। यो आत्माको तीर्थयात्रा हो।",

    aboutTitle: "शिविरको बारेमा",
    aboutP1:
      "बुद्धपूर्णिमा — भगवान बुद्धको जन्म, ज्ञानप्राप्ति र महापरिनिर्वाणको पवित्र दिन — आफ्नो भित्र फर्किन र जागृत हुनका लागि सबैभन्दा शुभ अवसर हो। यो विशेष ध्यान जागृति शिविर यस पवित्र दिनको गहन आध्यात्मिक ऊर्जालाई नेपालको सबैभन्दा पवित्र भूभाग — मुस्ताङको प्राचीन हिमालय क्षेत्रमा — सदुपयोग गर्न विशेष रूपमा तयार गरिएको छ।",
    aboutP2:
      "धौलागिरि–नीलगिरि हिमाल शृंखलाको अद्भुत पृष्ठभूमिमा, मुस्ताङको लज थासाङ गाउँमा अवस्थित, यो ४ दिनको आवासीय रिट्रीट गहिराइमा जाने एक दुर्लभ अवसर हो।",
    aboutPullQuote:
      "धेरैले मुस्ताङलाई 'आत्माको घर' भन्छन् — जहाँ उपचार सहज रूपमा हुन्छ, मौनताको आफ्नै उपस्थिति छ, र पहाडहरू बुद्धिमान शिक्षकजस्तै लाग्छन्।",
    aboutP3:
      "जीवन परिवर्तन प्रा.लि.द्वारा आयोजित, यो शिविरमा प्रामाणिक आध्यात्मिक अभ्यास, हिमालय ट्रेकिङ, गाइडेड गुफा ध्यान, प्रकृति अनुभव र आरामदायक आवास समावेश छ।",
    aboutWhyTitle: "बुद्धपूर्णिमा किन?",
    aboutWhyText:
      "बुद्धपूर्णिमाको दिन पृथ्वीको ऊर्जा उच्च हुन्छ भनिन्छ। यस दिन — विशेष गरी मुस्ताङका पवित्र गुफाहरूमा — गहिरो ध्यान गर्नाले अपार परिवर्तनकारी सम्भावना छ। यो शिविर केवल एउटा रिट्रीट मात्र होइन; यो एक आध्यात्मिक तीर्थयात्रा हो।",

    offersTitle: "यो रिट्रीटले के प्रदान गर्छ",
    offersList: [
      "हिमाली लजमा ४ दिनको आवासीय रिट्रीट",
      "आध्यात्मिक गुरुको मार्गदर्शनमा गहिरो ध्यान र योग सत्रहरू",
      "मुस्ताङका प्राचीन पवित्र गुफाहरूमा विशेष बुद्धपूर्णिमा गुफा ध्यान",
      "धौलागिरि र नीलगिरि हिमाल श्रृंखलाको विहंगम दृश्य",
      "अछूतो पर्वतीय परिदृश्यमा गाइडेड माइन्डफुलनेस ट्रेकिङ",
      "आन्तरिक जागृति, समर्पण र सही गुरु खोज्नेबारे कार्यशालाहरू",
      "समूह साझेदारी मण्डल, सत्संग र समापन समारोह",
      "पौष्टिक खाना — बिहान, दिउँसो, रात + हिमालयन चियाहरू",
      "तातो र चिसो पानीसहित सफा, आरामदायक आवास",
    ],

    conductedTitle: "सञ्चालनकर्ता",
    conductorRole: "आध्यात्मिक गुरु · ध्यान र रेकी प्रयोगकर्ता",
    conductorBio1:
      "माँ निशा कबीर १३ वर्षको उमेरदेखि नै आध्यात्मिक मार्गमा समर्पित हुनुहुन्छ। सानैदेखि ध्यान र आत्म-अन्वेषणप्रति गहिरो आकर्षण राख्दै उहाँले धेरै वर्ष ध्यान साधनामा बिताउनुभएको छ।",
    conductorBio2:
      "हिमालयको आह्वानले प्रेरित भएर उहाँले नेपालको पवित्र हिमाली क्षेत्र मुस्ताङमा, धौलागिरी र निलगिरी हिमालको काखमा, दुई वर्षसम्म गहिरो मौन ध्यान साधना गर्नुभयो।",
    conductorBio3:
      "वर्षौंको सच्चा साधनाबाट प्राप्त भएको यही आन्तरिक शान्ति र आध्यात्मिक अनुभूतिलाई उहाँ अब सत्यको खोजीमा रहेका समर्पित साधकहरूसँग बाँड्न चाहनुहुन्छ।",
    conductorBio4:
      "पवित्र र विशेष दिन बुद्ध पूर्णिमाको अवसरमा, माँ निशा कबीरले एक विशेष ध्यान साधना कार्यक्रम आयोजना गर्नुभएको छ।",
    conductorClosing:
      "तपाईंको आत्माले जुन बाटो रोज्छ, कृपया जान्नुहोस् कि यो रिट्रीटको हरेक क्षणमा तपाईंलाई माया, हेरचाह र गहिरो सम्मानसाथ साथ दिइनेछ।",

    programsTitle: "दिन-दिनका कार्यक्रमहरू",
    weatherWarning: "⚠️ मुस्ताङको मौसम अनुसार सबै गतिविधिहरू परिवर्तन हुन सक्छन्।",

    activitiesTitle: "के समावेश छ",
    packingTitle: "के लैजाने",
    guidelinesTitle: "निर्देशिका",
    doTitle: "✅ गर्नुपर्ने कुराहरू",
    dontTitle: "❌ नगर्नुपर्ने कुराहरू",
    additionalTitle: "थप जानकारी",
    galleryLabel1: "रिट्रीट सेटिङ र आगमन · लज थासाङ गाउँ, मुस्ताङ",
    galleryLabel2: "गुफा ध्यान र हिमालय ट्रेकिङ · तेस्रो दिनका क्षणहरू",

    accommodation: { label: "आवास", text: "आरामदायक कोठाहरू, न्यानो वातावरण। बस्नेभर तातो र चिसो पानी उपलब्ध।" },
    transport: { label: "यातायात", text: "मुस्ताङसम्मको यातायात प्याकेजमा समावेश छैन र सहभागीहरूले आफैं व्यवस्था गर्नुपर्नेछ।" },
    weather: { label: "मौसम", text: "अप्रिल/मे मा मुस्ताङमा दिनमा १५–२०°C र बिहान/साँझ ५–१०°C हुन्छ। हल्का वर्षाको सम्भावना छ।" },
    altitude: { label: "उचाइ", text: "मुस्ताङ लगभग ३,८०० मिटर मा छ। आइपुगेपछि आराम गर्नुहोस्, पानी खुब पिउनुहोस्।" },
    caves: { label: "मुस्ताङका गुफाहरू", text: "यी प्राचीन पवित्र स्थलहरू हुन् जहाँ साधुहरूले शताब्दियौंदेखि गहिरो ध्यान गर्दै आएका छन्।" },

    eventDetailsTitle: "📅 कार्यक्रम विवरण",
    dateLabel: "मिति", dateVal: "अप्रिल २८ – मे १, २०२६", dateSub: "बैशाख १५–१८, २०८३",
    locationLabel: "स्थान", locationVal: "लज थासाङ गाउँ", locationSub: "मुस्ताङ, नेपाल",
    durationLabel: "अवधि", durationVal: "४ दिन / ३ रात",
    feeLabel: "दर्ता शुल्क", feeVal: "रु. २८,०००", feeSub: "प्रति व्यक्ति · आवास र खाना समावेश",
    transportLabel: "यातायात", transportVal: "समावेश छैन — आफैं व्यवस्था गर्नुहोस्",
    deadlineLabel: "बुकिङ अन्तिम मिति", deadlineVal: "अप्रिल १, २०२६", deadlineSub: "दर्ताको अन्तिम दिन",

    seatsTitle: "उपलब्ध सिटहरू",
    seatsFull: "सिट भरिसक्यो",
    seatsUrgency: "सीमित स्थान उपलब्ध — आफ्नो ठाउँ सुरक्षित गर्न आजै दर्ता गर्नुहोस्।",
    deadlineTitle: "⏳ बुकिङ अन्तिम मिति",
    deadlineNote: "अप्रिल १, २०२६ मा दर्ता बन्द हुन्छ। ढिलाइ नगरी आफ्नो सिट सुरक्षित गर्नुहोस्।",

    registerBtn: "WhatsApp मार्फत दर्ता गर्नुहोस्",
    paymentTitle: "💳 भुक्तानी विवरण",
    depositNote1: "सिट निश्चित गर्न ३०% बयाना (रु. ८,४००) आवश्यक छ।",
    depositNote2: "शिविर सुरु हुनुअघि रु. २८,००० को पूर्ण भुक्तानी पूरा गर्नुपर्नेछ।",
    bankTransferLabel: "बैंक ट्रान्सफर",
    qrLabel: "भुक्तानीका लागि QR स्क्यान गर्नुहोस्",
    receiptBtn: "WhatsApp मार्फत भुक्तानी रसिद पठाउनुहोस्",
    receiptNote: "ट्रान्सफर पूरा भएपछि भुक्तानीको स्क्रिनसट WhatsApp मा पठाउनुहोस्।",
    cancellationNote: "बयाना फिर्ता हुँदैन। अप्रिल १, २०२६ पछि रद्द गर्दा फिर्ता पाइँदैन।",
    cancellationTitle: "⚠️ रद्दीकरण नीति:",
    contactTitle: "📞 सम्पर्क गर्नुहोस्",
    allProgramsBtn: "← सबै कार्यक्रमहरू",

    packingCategories: {
      Clothing: {
        icon: "👗",
        items: [
          "न्यानो स्वेटर र ज्याकेट (बिहान/साँझ चिसो हुन्छ)",
          "मरून र सेतो शल (ध्यान र आध्यात्मिक गतिविधिका लागि)",
          "मरून र सेतो गाउन (विशेष सत्रका लागि)",
          "आरामदायक ट्रेकिङ लुगा (सास फेर्न मिल्ने कपडा)",
          "मोजा, पञ्जा र टोपी (ट्रेकिङ र गुफा भ्रमणका लागि)",
        ],
      },
      Essentials: {
        icon: "🎒",
        items: [
          "छाता (घाम वा हल्का वर्षाबाट सुरक्षाका लागि)",
          "ट्रेकिङ स्टिक (हिँड्दा सहाराका लागि)",
          "व्यक्तिगत औषधिहरू (स्वास्थ्य समस्या भएमा)",
          "व्यक्तिगत योग म्याट (योग र ध्यान सत्रका लागि)",
          "मोइस्चराइजर र सनस्क्रिन (उच्च उचाइमा घाम कडा हुन्छ)",
          "पुन: प्रयोग गर्न मिल्ने पानीको बोतल",
        ],
      },
      Optional: {
        icon: "📷",
        items: [
          "जर्नल र कलम (गुफा ध्यानपछि विचार लेख्नका लागि)",
          "क्यामेरा वा स्मार्टफोन — सचेत रूपमा प्रयोग गर्नुहोस्",
        ],
      },
    },

    doList: [
      "ध्यान, योग, ट्रेकिङ र गुफा सत्रहरूमा पूर्ण रूपमा भाग लिनुहोस्",
      "उपस्थित रहनुहोस् — विशेष गरी गुफा ध्यानमा ध्यान भंग नगर्नुहोस्",
      "प्रकृति र पवित्र स्थानहरूको सम्मान गर्नुहोस्; सधैं गाइडको निर्देशन पालन गर्नुहोस्",
      "समूह छलफल र साझेदारी सत्रहरूमा सहभागीहरूसँग जोडिनुहोस्",
      "रिट्रीटको प्रवाह कायम राख्न सबै सत्रहरूमा समयमा पुग्नुहोस्",
    ],
    dontList: [
      "ध्यान र आध्यात्मिक सत्रहरूमा फोन र क्यामेरा अत्याधिक प्रयोग नगर्नुहोस्",
      "मुस्ताङका पवित्र गुफाहरूभित्र केही पनि नछुनुहोस् वा अवरोध नगर्नुहोस्",
      "मदिरा वा धूम्रपान निषेध — यो माइन्डफुलनेस र स्पष्टताका लागि स्थान हो",
      "ट्रेकिङ र गुफा भ्रमणमा कहिल्यै समूहबाट अलग नहोस्",
      "ट्रेकिङमा बाधा पुर्‍याउने भारी वा अनावश्यक सामान नल्याउनुहोस्",
    ],
  },
};

// ─── Programs Data ────────────────────────────────────────────────────────────
const programs = {
  en: [
    {
      title: "Arrival & Welcome Orientation",
      tag: "  Opening Program",
      icon: "🛬",
      activities: [
        "Arrive and check-in at Lodge Thasang Village — settle into your cozy room (Sharing) with a warm, homely atmosphere.",
        "Welcome dinner with Himalayan green tea, coffee, and black tea.",
        "Orientation session introducing retreat goals, the spiritual significance of Buddhapurnima, and camp guidelines.",
        "Rest and acclimatize to the serene high-altitude environment of Mustang.",
      ],
    },
    {
      title: "Inner Awakening & Meditation",
      tag: " Core Meditation Program",
      icon: "🧘",
      activities: [
        "Sunrise meditation in the peaceful meditation hall guided by Maa Nisha Kabir.",
        "Guided session on 'Awakening Sensitivity Within Oneself' — turning the mind inward.",
        "Nature walk in the lush green garden, connecting with nature's wisdom.",
        "Group discussion on finding the right guru and the practice of heartfelt dedication.",
        "Personal reflection and integration time.",
      ],
    },
    {
      title: "Sacred Cave Meditation & Himalayan Trek",
      tag: " ✨ Special Buddhapurnima Program",
      icon: "🏔️",
      activities: [
        "Journey to the ancient sacred caves of Mustang for deep spiritual meditation — the most sacred session of the entire camp, timed to the Buddhapurnima energy.",
        "Guided mindfulness trek through the majestic Dhaulagiri and Nilgiri mountain landscape.",
        "Picnic lunch amidst the untouched Himalayan nature.",
        "Group meditation to reflect on and integrate the cave and mountain experience.",
        "Stargazing in the garden under the Buddhapurnima full moon (weather permitting).",
      ],
    },
    {
      title: "Integration, Closing Ceremony & Departure",
      tag: " Closing Program",
      icon: "🕊️",
      activities: [
        "Final sunrise meditation and yoga session — bring your personal yoga mat.",
        "Workshop: deepening connection with nature's wisdom and integrating the full retreat experience.",
        "Closing ceremony with group meditation, sharing circle, and farewell.",
        "Check-out from Lodge Thasang Village — participants manage their own return travel.",
      ],
    },
  ],
  np: [
    {
      title: "आगमन र स्वागत अभिमुखीकरण",
      tag: " उद्घाटन कार्यक्रम",
      icon: "🛬",
      activities: [
        "लज थासाङ गाउँमा आइपुगेर चेक-इन — न्यानो, घरजस्तो वातावरणमा आफ्नो कोठामा बस्नुहोस्।",
        "हिमालयन ग्रीन टी, कफी र ब्ल्याक टीसहित स्वागत रात्रिभोज।",
        "रिट्रीटका लक्ष्य, बुद्धपूर्णिमाको आध्यात्मिक महत्त्व र शिविरको निर्देशिकाको परिचय सत्र।",
        "मुस्ताङको उच्च-उचाइ वातावरणमा आराम र अनुकूलन।",
      ],
    },
    {
      title: "आन्तरिक जागृति र ध्यान",
      tag: " मुख्य ध्यान कार्यक्रम",
      icon: "🧘",
      activities: [
        "माँ निशा कबीरको मार्गदर्शनमा शान्त ध्यान हलमा सूर्योदय ध्यान।",
        '"आफ्नो भित्र संवेदनशीलता जगाउने" — मनलाई भित्र फर्काउने गाइडेड सत्र।',
        "हरियो बगैँचामा प्रकृति सैर, प्रकृतिको ज्ञानसँग जोडिने।",
        "सही गुरु खोज्ने र हार्दिक समर्पणको अभ्यासमा समूह छलफल।",
        "व्यक्तिगत चिन्तन र एकीकरण समय।",
      ],
    },
    {
      title: "पवित्र गुफा ध्यान र हिमालय ट्रेकिङ",
      tag: "  ✨ विशेष बुद्धपूर्णिमा कार्यक्रम",
      icon: "🏔️",
      activities: [
        "मुस्ताङका प्राचीन पवित्र गुफाहरूमा गहिरो आध्यात्मिक ध्यान — सम्पूर्ण शिविरको सबैभन्दा पवित्र सत्र।",
        "भव्य धौलागिरि र नीलगिरि हिमाल परिदृश्यमा गाइडेड माइन्डफुलनेस ट्रेक।",
        "अछूतो हिमाली प्रकृतिबीच पिकनिक खाना।",
        "गुफा र पहाडको अनुभवलाई एकीकृत गर्न समूह ध्यान।",
        "बुद्धपूर्णिमाको पूर्णचन्द्रमुनि बगैँचामा तारा हेर्ने (मौसम अनुकूल भएमा)।",
      ],
    },
    {
      title: "एकीकरण, समापन समारोह र प्रस्थान",
      tag: "  समापन कार्यक्रम",
      icon: "🕊️",
      activities: [
        "अन्तिम सूर्योदय ध्यान र योग सत्र — आफ्नो योग म्याट ल्याउनुहोस्।",
        "कार्यशाला: पूर्ण रिट्रीट अनुभव एकीकृत गर्दै प्रकृतिको ज्ञानसँग गहिरो सम्बन्ध।",
        "समूह ध्यान, साझेदारी मण्डल र विदाईसहित समापन समारोह।",
        "लज थासाङ गाउँबाट चेक-आउट — सहभागीहरूले आफ्नो फर्कने यात्रा आफैं व्यवस्था गर्नुहोस्।",
      ],
    },
  ],
};

// ─── Activities Grid ──────────────────────────────────────────────────────────
const activities = {
  en: [
    { icon: "🧘", label: "Daily Meditation & Yoga", desc: "Sunrise sessions and evening reflection guided by Maa Nisha Kabir" },
    { icon: "🕍", label: "Sacred Cave Meditation", desc: "Exclusive Buddhapurnima session inside Mustang's ancient sacred caves" },
    { icon: "🥾", label: "Himalayan Trekking", desc: "Guided mindfulness trek around Dhaulagiri and Nilgiri mountains" },
    { icon: "🌿", label: "Nature Immersion Walks", desc: "Garden walks and outdoor sessions connecting with nature's wisdom" },
    { icon: "📿", label: "Workshops & Satsang", desc: "Sessions on inner awakening, soul dedication, and finding the right guru" },
    { icon: "🤝", label: "Group Sharing Circles", desc: "Deepen insights and bond with fellow participants" },
    { icon: "🌟", label: "Closing Ceremony", desc: "Group meditation, sharing session, and farewell on the final day" },
    { icon: "🍽️", label: "All Meals Included", desc: "Breakfast, lunch, dinner + Himalayan green tea, coffee, black tea" },
  ],
  np: [
    { icon: "🧘", label: "दैनिक ध्यान र योग", desc: "माँ निशा कबीरको मार्गदर्शनमा सूर्योदय सत्र र साँझ चिन्तन" },
    { icon: "🕍", label: "पवित्र गुफा ध्यान", desc: "मुस्ताङका प्राचीन पवित्र गुफाहरूमा विशेष बुद्धपूर्णिमा सत्र" },
    { icon: "🥾", label: "हिमालय ट्रेकिङ", desc: "धौलागिरि र नीलगिरि हिमालतिर गाइडेड माइन्डफुलनेस ट्रेक" },
    { icon: "🌿", label: "प्रकृति अनुभव सैर", desc: "बगैँचा सैर र बाहिरी सत्रहरू प्रकृतिको ज्ञानसँग जोडिँदै" },
    { icon: "📿", label: "कार्यशाला र सत्संग", desc: "सही गुरु खोज्ने, समर्पण र आत्म-जागृतिका सत्रहरू" },
    { icon: "🤝", label: "समूह साझेदारी मण्डल", desc: "अनुभव गहिराउन र सहभागीहरूसँग सम्बन्ध बनाउन" },
    { icon: "🌟", label: "समापन समारोह", desc: "समूह ध्यान, साझेदारी सत्र र अन्तिम दिनको विदाई" },
    { icon: "🍽️", label: "सबै खाना समावेश", desc: "बिहान, दिउँसो र रातको खाना + हिमालयन ग्रीन टी, कफी, ब्ल्याक टी" },
  ],
};

// ─── Gallery Item ─────────────────────────────────────────────────────────────
function GalleryItem({ src, index }: { src: string; index: number }) {
  const [missing, setMissing] = useState(false);
  return (
    <div className="relative flex-1 aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 group min-w-0">
      {!missing ? (
        <img
          src={src}
          alt={`Buddhapurnima Camp Photo ${index}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setMissing(true)}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-1 bg-gradient-to-br from-gray-50 to-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-[9px] font-mono text-gray-300">{index}.jpg</span>
        </div>
      )}
    </div>
  );
}

// ─── Gallery Strip: 4 images side by side ────────────────────────────────────
// Images pulled from /public/img/event/buddhapurnima/gallery/
// Strip 1: 1.jpg–4.jpg  |  Strip 2: 5.jpg–8.jpg
function GalleryStrip({ startIndex, label }: { startIndex: number; label: string }) {
  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        {[0, 1, 2, 3].map((offset) => (
          <GalleryItem
            key={startIndex + offset}
            src={`/img/event/buddhapurnima/gallery/${startIndex + offset}.jpg`}
            index={startIndex + offset}
          />
        ))}
      </div>
      {label && (
        <p className="text-[11px] text-center text-gray-400 italic">{label}</p>
      )}
    </div>
  );
}

// ─── Seats Bar ────────────────────────────────────────────────────────────────
function SeatsBar({ total, available }: { total: number; available: number }) {
  const filled = total - available;
  const pct = Math.round((filled / total) * 100);
  const isLow = available <= 5;
  const isFull = available === 0;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs font-semibold">
        <span className={isFull ? "text-red-500" : isLow ? "text-orange-500" : "text-[#0B6B45]"}>
          {isFull ? "Fully Booked" : `${available} / ${total} seats left`}
        </span>
        <span className="text-gray-400">{pct}% filled</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ${
            isFull ? "bg-red-500" : isLow ? "bg-orange-400" : "bg-gradient-to-r from-[#2F9E68] to-[#0B6B45]"
          }`}
          style={{ width: `${Math.max(pct, 2)}%` }}
        />
      </div>
      <div className="flex flex-wrap gap-1 pt-1">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-sm transition-colors duration-300 ${
              i < filled
                ? isFull ? "bg-red-400" : isLow ? "bg-orange-400" : "bg-[#2F9E68]"
                : "bg-gray-100 border border-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── WhatsApp SVG ─────────────────────────────────────────────────────────────
function WaIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.528 5.845L.057 23.215a.75.75 0 0 0 .906.919l5.526-1.451A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.732 9.732 0 0 1-4.964-1.355l-.355-.212-3.681.967.984-3.595-.232-.371A9.722 9.722 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
    </svg>
  );
}

// ─── Section Title ────────────────────────────────────────────────────────────
function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-2xl font-bold text-[#07486d] mb-5 border-l-4 border-[#2F9E68] pl-4">
      {title}
    </h2>
  );
}

// ─── Ornamental Divider ───────────────────────────────────────────────────────
function Divider() {
  return (
    <div className="flex items-center gap-3 py-1">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#d1ead8]" />
      <span className="text-[#2F9E68] text-base">✦</span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#d1ead8]" />
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export function BuddhapurnimaContent() {
  const [lang, setLang] = useState<Lang>("en");
  const c = t[lang];
  const prog = programs[lang];
  const acts = activities[lang];

  return (
    <>
      <PageHero
        title="Buddhapurnima Special Meditation Awakening Camp"
        subtitle="धौलागिरि–नीलगिरि हिमालबीच ध्यान र आत्मिक शान्ति।"
        backgroundImage="/img/event/buddhapurnima.png"
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Programs", href: "/programs" },
          { label: "Buddhapurnima Meditation Camp 2026" },
        ]}
      />

      {/* ── Language Toggle ── */}
      <div className="bg-white border-b border-gray-100 sticky top-[80px] z-40 shadow-sm">
        <div className="w-[92%] max-w-[1100px] mx-auto py-2.5 flex items-center justify-between">
          <p className="text-xs text-gray-400 hidden sm:block">
            {lang === "en" ? "Also available in Nepali" : "English मा पनि उपलब्ध"}
          </p>
          <button
            onClick={() => setLang(lang === "en" ? "np" : "en")}
            className="flex items-center gap-2 ml-auto bg-[#07486d] hover:bg-[#0B6B45] text-white
              text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
          >
            <span>🌐</span>
            {c.langLabel}
          </button>
        </div>
      </div>

      {/* ── Weather Banner ── */}
      <div className="bg-amber-50 border-y border-amber-200">
        <div className="w-[92%] max-w-[1100px] mx-auto py-3 flex items-start gap-3 text-sm text-amber-800">
          <span className="text-lg mt-0.5 shrink-0">⚠️</span>
          <p><strong>{c.weatherNote}</strong> {c.weatherBanner}</p>
        </div>
      </div>

      <section className="w-[92%] max-w-[1100px] mx-auto py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">

          {/* ══════════ LEFT COLUMN ══════════ */}
          <div className="space-y-12">

            {/* ── 1. HEART-CENTERED INVITATION ── */}
            <div className="bg-gradient-to-br from-[#f0f9f4] to-[#fffbeb] border border-[#d1ead8] rounded-2xl px-7 py-8 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-[#2F9E68] mb-3">
                🙏 {c.inviteTitle}
              </p>
              <p className="text-gray-700 leading-[1.9] text-[15px] italic">
                {c.inviteText}
              </p>
            </div>

            {/* ── 2. ABOUT THE CAMP ── */}
            <div>
              <SectionTitle title={c.aboutTitle} />
              <div className="text-gray-600 leading-relaxed space-y-4 text-[15px]">
                <p>{c.aboutP1}</p>
                <p>{c.aboutP2}</p>

                {/* Pull Quote — styled like PDF */}
                <blockquote className="relative border-l-4 border-[#2F9E68] bg-gradient-to-r from-[#f0f9f4] to-white pl-5 pr-4 py-4 rounded-r-xl my-2">
                  <span className="text-4xl text-[#2F9E68]/20 font-serif absolute top-2 left-3 leading-none">"</span>
                  <p className="text-[#07486d] font-medium leading-relaxed text-sm pl-4 italic">
                    {c.aboutPullQuote}
                  </p>
                </blockquote>

                <p>{c.aboutP3}</p>
              </div>

              {/* Why Buddhapurnima box */}
              <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 flex items-start gap-3">
                <span className="text-2xl shrink-0 mt-0.5">🌕</span>
                <div>
                  <p className="font-bold text-amber-900 text-sm mb-1">{c.aboutWhyTitle}</p>
                  <p className="text-amber-800 text-sm leading-relaxed">{c.aboutWhyText}</p>
                </div>
              </div>
            </div>

            {/* ── GALLERY STRIP 1 (after About) ── */}
            <GalleryStrip startIndex={1} label={c.galleryLabel1} />

            <Divider />

            {/* ── 3. WHAT THIS RETREAT OFFERS ── */}
            <div>
              <SectionTitle title={c.offersTitle} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {c.offersList.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#f8fdfa] border border-[#d1ead8] rounded-xl px-4 py-3">
                    <span className="text-[#2F9E68] shrink-0 mt-0.5 font-bold text-base">✦</span>
                    <p className="text-sm text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <Divider />

            {/* ── 4. CONDUCTED BY ── */}
            <div>
              <SectionTitle title={c.conductedTitle} />
              <div className="bg-gradient-to-r from-[#f0f9f4] to-white border border-[#d1ead8] rounded-2xl p-6 shadow-sm">

                {/* Profile row */}
                <div className="flex items-center gap-5 mb-5">
                  <img
                    src="/img/team/maa-nisha1.jpeg"
                    alt="Maa Nisha Kabir"
                    className="w-24 h-24 rounded-full object-cover border-2 border-[#2F9E68] shrink-0"
                    style={{ objectPosition: "15% 85%" }}
                  />
                  <div>
                    <h3 className="text-xl font-bold text-[#07486d]">Maa Nisha Kabir</h3>
                    <p className="text-sm text-[#2F9E68] font-medium mt-1">{c.conductorRole}</p>
                    <div className="inline-flex items-center gap-1.5 bg-[#07486d] text-white text-[10px] font-semibold px-3 py-1 rounded-full mt-2">
                      <span>🕍</span>
                      {lang === "en" ? "2 Years Cave Meditation · Mustang" : "२ वर्ष गुफा ध्यान · मुस्ताङ"}
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="text-sm text-gray-600 leading-[1.85] space-y-3 pt-4 border-t border-[#d1ead8]">
                  <p>{c.conductorBio1}</p>
                  <p>{c.conductorBio2}</p>
                  <p>{c.conductorBio3}</p>
                  <p>{c.conductorBio4}</p>
                </div>

                {/* Closing heart note */}
                <div className="mt-5 pt-4 border-t border-[#d1ead8]">
                  <p className="text-sm text-[#07486d] italic leading-relaxed font-medium">
                    <span className="text-lg mr-2">💚</span>
                    {c.conductorClosing}
                  </p>
                </div>
              </div>
            </div>

            <Divider />

            {/* ── 5. DAY-BY-DAY PROGRAMS ── */}
            <div>
              <SectionTitle title={c.programsTitle} />
              <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2.5 mb-6">
                {c.weatherWarning}
              </p>
              <div className="space-y-4">
                {prog.map((p) => (
                  <div
                    key={p.title}
                    className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    {/* Card header */}
                    <div className="bg-gradient-to-r from-[#07486d] to-[#0B6B45] text-white px-6 py-4 flex items-center gap-3">
                      <span className="text-2xl">{p.icon}</span>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-white/60 mb-0.5">
                          {p.tag}
                        </p>
                        <h3 className="text-lg font-bold leading-tight">{p.title}</h3>
                      </div>
                    </div>
                    {/* Activities list */}
                    <ul className="px-6 py-4 space-y-2.5 bg-white">
                      {p.activities.map((activity, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                          <span className="text-[#2F9E68] shrink-0 mt-1 text-base">✦</span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* ── GALLERY STRIP 2 (after Programs) ── */}
            <GalleryStrip startIndex={5} label={c.galleryLabel2} />

            <Divider />

            {/* ── 6. WHAT'S INCLUDED ── */}
            <div>
              <SectionTitle title={c.activitiesTitle} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {acts.map((a) => (
                  <div
                    key={a.label}
                    className="flex gap-4 bg-[#f8fdfa] border border-[#d1ead8] rounded-xl p-4 hover:shadow-sm transition-all duration-300"
                  >
                    <span className="text-2xl shrink-0 mt-0.5">{a.icon}</span>
                    <div>
                      <p className="font-semibold text-[#07486d] text-sm">{a.label}</p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Divider />

            {/* ── 7. WHAT TO PACK ── */}
            <div>
              <SectionTitle title={c.packingTitle} />
              <div className="space-y-4">
                {Object.entries(c.packingCategories).map(([key, cat]) => (
                  <div key={key} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                    <h3 className="font-bold text-[#0B6B45] mb-3 flex items-center gap-2 text-sm">
                      {cat.icon} {key}
                    </h3>
                    <ul className="space-y-2">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-[#2F9E68] mt-1 shrink-0">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <Divider />

            {/* ── 8. GUIDELINES ── */}
            <div>
              <SectionTitle title={c.guidelinesTitle} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
                  <h3 className="font-bold text-green-700 mb-3 text-sm">{c.doTitle}</h3>
                  <ul className="space-y-2">
                    {c.doList.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-green-500 mt-0.5 shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
                  <h3 className="font-bold text-red-700 mb-3 text-sm">{c.dontTitle}</h3>
                  <ul className="space-y-2">
                    {c.dontList.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-red-400 mt-0.5 shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <Divider />

            {/* ── 9. ADDITIONAL INFORMATION ── */}
            <div>
              <SectionTitle title={c.additionalTitle} />
              <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
                {[
                  { icon: "🏠", ...c.accommodation },
                  { icon: "🚌", ...c.transport },
                  { icon: "🌤️", ...c.weather },
                  { icon: "🏔️", ...c.altitude },
                  { icon: "🕍", ...c.caves },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <p>
                      <strong className="text-[#07486d]">{item.label}:</strong> {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
          {/* ══════════ END LEFT COLUMN ══════════ */}

          {/* ══════════ RIGHT SIDEBAR (UNCHANGED) ══════════ */}
          <div className="space-y-5 lg:sticky lg:top-[110px]">

            {/* Event Details Card */}
            <div className="bg-gradient-to-br from-[#07486d] to-[#0B6B45] text-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-5 pb-3 border-b border-white/20">{c.eventDetailsTitle}</h3>
              <ul className="space-y-4 text-sm">
                {[
                  { icon: "🗓️", label: c.dateLabel, val: c.dateVal, sub: c.dateSub },
                  { icon: "📍", label: c.locationLabel, val: c.locationVal, sub: c.locationSub },
                  { icon: "⏱️", label: c.durationLabel, val: c.durationVal, sub: "" },
                  { icon: "💰", label: c.feeLabel, val: c.feeVal, sub: c.feeSub, bold: true },
                  { icon: "🚌", label: c.transportLabel, val: "", sub: c.transportVal },
                  { icon: "⏳", label: c.deadlineLabel, val: c.deadlineVal, sub: c.deadlineSub },
                ].map((row) => (
                  <li key={row.label} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5 shrink-0">{row.icon}</span>
                    <div>
                      <p className="font-semibold text-white/70 text-xs uppercase tracking-wide mb-0.5">{row.label}</p>
                      {row.val && (
                        <p className={row.bold ? "font-bold text-xl" : "font-medium"}>{row.val}</p>
                      )}
                      {row.sub && <p className="text-white/70 text-xs">{row.sub}</p>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Register via WhatsApp */}
            <a
              href="https://api.whatsapp.com/send/?phone=9779818514837&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full bg-[#25D366] hover:bg-[#1ebe5d]
                text-white font-semibold py-3.5 rounded-xl transition-all duration-300
                hover:shadow-lg hover:scale-[1.02] text-sm"
            >
              <WaIcon /> {c.registerBtn}
            </a>

            {/* ── Seats & Deadline Card ── */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-[#07486d] to-[#0B6B45] text-white px-5 py-3.5 flex items-center justify-between">
                <h3 className="font-bold text-sm">{c.seatsTitle}</h3>
                {AVAILABLE_SEATS <= 5 && AVAILABLE_SEATS > 0 && (
                  <span className="text-[10px] font-bold bg-orange-400 text-white px-2 py-0.5 rounded-full uppercase tracking-wide animate-pulse">
                    {lang === "en" ? "Filling Fast!" : "सिट भरिँदैछ!"}
                  </span>
                )}
                {AVAILABLE_SEATS === 0 && (
                  <span className="text-[10px] font-bold bg-red-500 text-white px-2 py-0.5 rounded-full uppercase tracking-wide">
                    {c.seatsFull}
                  </span>
                )}
              </div>

              <div className="p-5 space-y-4">
                <SeatsBar total={TOTAL_SEATS} available={AVAILABLE_SEATS} />
                <p className="text-[11px] text-gray-400 leading-relaxed">{c.seatsUrgency}</p>

                {/* Deadline */}
                <div className="border-t border-gray-100 pt-4 space-y-2">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                    {c.deadlineTitle}
                  </p>
                  <div className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                    <span className="text-xl shrink-0">📅</span>
                    <div>
                      <p className="font-bold text-red-700 text-sm">{c.deadlineVal}</p>
                      <p className="text-[11px] text-red-500 leading-relaxed mt-0.5">{c.deadlineNote}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Card */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-[#2F9E68] to-[#0B6B45] text-white px-5 py-3.5">
                <h3 className="font-bold text-base">{c.paymentTitle}</h3>
              </div>
              <div className="p-5 space-y-4">

                <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 text-xs text-blue-800 leading-relaxed">
                  <p><strong>{c.depositNote1}</strong></p>
                  <p className="mt-1">{c.depositNote2}</p>
                </div>

                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">{c.bankTransferLabel}</p>
                  {[
                    [lang === "en" ? "Account Name" : "खाता नाम", "Nisha Kabir Ray"],
                    [lang === "en" ? "Account No." : "खाता नं.", "11610901099054000001"],
                    [lang === "en" ? "Bank" : "बैंक", "Garima Bikas Bank Ltd."],
                    [lang === "en" ? "Branch" : "शाखा", "Machhapokhari, Kathmandu"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between gap-2 py-1.5 border-b border-gray-50 last:border-0">
                      <span className="text-gray-400 text-xs shrink-0">{label}</span>
                      <span className="text-gray-800 font-medium text-xs text-right">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">{c.qrLabel}</p>
                  <PaymentQR />
                </div>

                <a
                  href="https://api.whatsapp.com/send/?phone=9779818514837&text=Hello%2C%20I%20have%20completed%20the%20payment%20for%20Buddhapurnima%20Meditation%20Camp%202026.%20Please%20find%20my%20payment%20receipt%20attached.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe5d]
                    text-white font-medium py-3 rounded-xl transition-all duration-300 hover:shadow-md text-sm mt-2"
                >
                  <WaIcon className="w-4 h-4" /> {c.receiptBtn}
                </a>
                <p className="text-[11px] text-gray-400 text-center leading-relaxed">{c.receiptNote}</p>

              </div>
            </div>

            {/* Cancellation */}
            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 text-xs text-red-700 leading-relaxed">
              <strong>{c.cancellationTitle}</strong> {c.cancellationNote}
            </div>

            {/* Contact */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 space-y-2.5 text-sm">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">{c.contactTitle}</p>
              <a href="tel:+9779818514837" className="flex items-center gap-2 text-[#07486d] font-medium hover:underline">
                +977 9818514837
              </a>
              <a href="tel:+9779863049261" className="flex items-center gap-2 text-[#07486d] font-medium hover:underline">
                +977 9863049261
              </a>
              <a href="mailto:jivanparivartan9@gmail.com" className="flex items-center gap-2 text-[#07486d] font-medium hover:underline break-all">
                jivanparivartan9@gmail.com
              </a>
            </div>

            {/* Back to Programs */}
            <Link
              href="/services"
              className="flex items-center justify-center gap-1.5 w-full border border-[#07486d]
                text-[#07486d] text-sm font-medium py-2.5 rounded-xl hover:bg-[#07486d]
                hover:text-white transition-all duration-300"
            >
              {c.allProgramsBtn}
            </Link>

          </div>
        </div>
      </section>
    </>
  );
}