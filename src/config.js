// Central configuration file for romantic personal website (Birthday & Test Encouragement Edition)
// Natural, sweet, and universal template for customer's partner on his birthday

export const CONFIG = {
  // Names & Key Info
  partnerName: "Sayang 💕",
  yourName: "Aku",
  startDate: "Hari Istimewa",

  // Music Player settings (Local MP3 in public folder)
  music: {
    title: "Shape of My Heart",
    artist: "Backstreet Boys",
    src: "/Backstreet Boys - Shape of My Heart (Lyrics).mp3"
  },

  // 1. Welcome Screen
  welcomeScreen: {
    initialText: "Halo Sayang... Happy Birthday! 🎂🎉",
    typingText: "Ada ucapan khusus buat kamu.",
    delayedText: "Buka yuk, semoga bikin kamu makin semangat! 💖✨",
    buttonText: "🎂 Buka Kejutan Spesial"
  },

  // 2. Hero Section
  hero: {
    badge: "HAPPY BIRTHDAY 🎂✨",
    headline: "Selamat Ulang Tahun Buat Seseorang yang Paling Spesial di Hati Aku!",
    partnerDisplay: "Happy Birthday Sayang 💕",
    subtext: "Di hari yang istimewa ini, aku mendoakan semua yang terbaik buat kamu. Semoga sehat selalu, panjang umur, dan dilancarkan di setiap tahapan tes yang lagi kamu perjuangkan! Semangat ya! 💖🎉",
    ctaButton: "Lihat Pesan Spesial ↓"
  },

  // 3. Our Little Story (Timeline) - Universal & Sweet Birthday Journey
  storyTimeline: [
    {
      step: "01",
      title: "Selamat Ulang Tahun! 🎂",
      caption: "Hari ini hari lahirmu! Semoga bertambahnya usia membawa banyak keberkahan, kebahagiaan, dan kesehatan selalu.",
      date: "Hari Istimewa",
      image: "/1.jpeg"
    },
    {
      step: "02",
      title: "Kerja Keras Kamu ✨",
      caption: "Aku tahu betapa kerasnya usahamu selama ini buat persiapan tes. Kamu hebat dan selalu berusaha yang terbaik!",
      date: "Proses Hebatmu",
      image: "/2.jpeg"
    },
    {
      step: "03",
      title: "Semangat untuk Tesnya! ⚡",
      caption: "Di setiap tahapan tes nanti, tetap tenang dan percaya diri ya. Kamu pasti bisa melaluinya dengan hasil yang memuaskan!",
      date: "Support Tulus",
      image: "/3.jpeg"
    },
    {
      step: "04",
      title: "Menuju Kelulusan 🌸",
      caption: "Aku selalu mendoakan yang terbaik buat kamu. Aku yakin kamu pasti lulus dan impianmu terwujud!",
      date: "Masa Depan Indah",
      image: "/4.jpeg"
    }
  ],

  // 4. Photo Memory Gallery (5 Photos)
  memoryGallery: [
    {
      id: 1,
      image: "/1.jpeg",
      caption: "Senyum favorit aku yang paling ganteng & manis! 🥰",
      rotate: "-3deg",
      size: "featured"
    },
    {
      id: 2,
      image: "/2.jpeg",
      caption: "Semangat terus latihan & persiapan tesnya ya! 💕",
      rotate: "2deg",
      size: "medium"
    },
    {
      id: 3,
      image: "/3.jpeg",
      caption: "Salah satu foto favorit aku yang paling berkesan ✨",
      rotate: "-2deg",
      size: "medium"
    },
    {
      id: 4,
      image: "/4.jpeg",
      caption: "Fokus dan percaya diri di setiap tahapan tes nanti!",
      rotate: "4deg",
      size: "accent"
    },
    {
      id: 5,
      image: "/5.jpeg",
      caption: "Hari ultah yang spesial, semoga tesnya lancar & lulus! 🎂",
      rotate: "-4deg",
      size: "accent"
    }
  ],

  // 5. 5 Things / Reasons Cards (5 Alasan Kamu Begitu Spesial)
  reasonsToLove: [
    {
      id: 1,
      icon: "🎂",
      title: "Hari Lahir Orang Spesial",
      preview: "Selamat bertambah usia...",
      content: "Selamat ulang tahun! Aku selalu bersyukur karena dunia punya kamu yang begitu baik, hangat, dan selalu menginspirasi."
    },
    {
      id: 2,
      icon: "💖",
      title: "Semangat Juang Kamu",
      preview: "Usaha kamu luar biasa...",
      content: "Aku bangga banget sama kegigihan dan persiapan kamu buat tes selama ini. Kerja kerasmu nggak akan mengkhianati hasil!"
    },
    {
      id: 3,
      icon: "⚡",
      title: "Fokus & Tenang Pas Tes",
      preview: "Kunci kelancaran tesmu...",
      content: "Di setiap tahapan tes nanti, tetap tenang dan percaya sama kemampuan diri sendiri ya. Kamu pasti bisa melaluinya satu per satu!"
    },
    {
      id: 4,
      icon: "🤲",
      title: "Doa Tulus Kelulusan",
      preview: "Selalu menyertai langkahmu...",
      content: "Ingat ya, di setiap langkah dan tahapan tes kamu, selalu ada doa tulusku yang mengiringi agar kamu diberi kelancaran dan kelulusan."
    },
    {
      id: 5,
      icon: "🏠",
      title: "Kamu Pasti Bisa Lulus!",
      preview: "Hasil terbaik menunggumu...",
      content: "Aku percaya banget sama kamu! Jadikan momen ulang tahun ini sebagai awal dari keberhasilan dan kelulusan tes kamu!"
    }
  ],

  // 6. Mini Interactive Game (Love Quiz)
  quizQuestions: [
    {
      id: 1,
      question: "Siapa yang paling ganteng dan paling bikin kangen hari ini? 😳",
      options: ["Kamu dong pastinya! 🥰", "Pasti Kamu! 🙈"],
      reactionText: ["Tuh kan! Yang ulang tahun hari ini memang paling ganteng nomor satu! 💖✨", "Gak bisa ngeles kan! Tetap kamu favorit di hati aku! 😭❤️"]
    },
    {
      id: 2,
      question: "Apa kado ultah & harapan paling manis tahun ini? 🎁",
      options: ["Tesnya Lancar & Lulus Murni! 🌟", "Doa & Support Tulus dari Aku 💕"],
      reactionText: ["Aamiin paling kencang! Semoga tes kamu lancar dan dapat hasil yang paling memuaskan! ✨🎉", "Pasti dong! Doa dan support tulus dari aku bakal selalu ada menemani setiap langkah dan tes kamu! 💗"]
    },
    {
      id: 3,
      question: "Kalau lagi capek atau nervous pas mau tes, harus ingat apa? 💭",
      options: ["Semangat! Ada yang selalu doain & nunggu kamu lulus 🥹", "Tetap tenang & percaya kemampuan diri 🌸"],
      reactionText: ["Bener banget! Tetap semangat ya, kamu gak berjuang sendirian! 😭❤️", "Tepat sekali! Kamu sudah belajar & persiapan dengan sangat baik, pasti bisa! 💕✨"]
    }
  ],

  // 7. Love Meter
  loveMeter: {
    title: "Seberapa Besar Semangat & Doa Kelancaran Tes Kamu?",
    buttonText: "Hitung Persentase Semangat 💖",
    errorText: "ERROR... Semangat & Doa Kelancaran Tesnya Tembus 1000%! PASTI LOLOS & SUKSES! 💕😭"
  },

  // 8. Secret Message (Letter)
  secretLetter: {
    teaserTitle: "Surat Spesial Ultah & Semangat Tes 💌",
    buttonText: "Buka Surat Cinta & Doa 💌",
    paragraphs: [
      "Selamat Ulang Tahun ya Sayang! 🎉🎂",
      "Di hari yang bahagia ini, doa utamaku semoga kamu selalu diberikan kesehatan, umur yang panjang, dan keberkahan di setiap langkahmu.",
      "Khusus untuk tes yang lagi kamu perjuangkan, tetap semangat ya! Jangan pernah ragu sama kemampuan diri sendiri.",
      "Usaha, persiapan, dan kerja keras kamu selama ini pasti membawa hasil terbaik. Tetap tenang dan fokus pas tes nanti.",
      "Aku bakal selalu ada di sini buat mendukung, mendoakan, dan menemani perjuanganmu sampai lulus.",
      "Selamat Ulang Tahun & Semangat Tesnya ya! Semoga lulus dengan hasil yang paling memuaskan! 💖✨🎂"
    ]
  },

  // 9. Special Cheer Button
  kissButton: {
    buttonText: "💋 Kirim Semangat & Ciuman",
    milestone10: "Dapat 10x suntikan semangat! Kamu pasti bisa melewati tes ini! 💕✨",
    milestone50: "BOOM! Semangat 1000x Lipat! Lulus Tes & Bahagia Selalu! 💖🎉"
  },

  // 10. Final Section
  finalSection: {
    line1: "Selamat Ulang Tahun & Semangat Tes!",
    typingLine: "...Ingat ya, aku selalu bangga dan mendoakan kelulusan tes kamu!",
    loveDisplay: "❤️ HAPPY BIRTHDAY & SEMANGAT TES! ❤️",
    authorText: "Made with love",
    restartButtonText: "🔄 Mulai Lagi"
  },

  // Floating messages triggered during scroll
  floatingToasts: [
    "Selamat Ulang Tahun Sayang! 🎂🎉",
    "Semangat untuk tesnya ya! Kamu pasti bisa! 💖✨",
    "Semoga tesnya lancar & dapat hasil terbaik! 💕",
    "Jangan lupa berdoa & selalu optimis ya! 🌸🥰",
    "Aku bangga & selalu dukung kamu! 💕"
  ]
};

