import type { Content } from "./types";

// ── TODO còn lại ─────────────────────────────────────────────────────
// Timeline → chỉnh lại tháng/mốc nếu khác thực tế
// ─────────────────────────────────────────────────────────────────────

export const vi: Content = {
  meta: {
    siteName: "ARISE — Hồ sơ Founder",
    title: "Bùi Xuân Hoàng — Founder & người xây dựng duy nhất của ARISE",
    description:
      "Sinh viên logistics năm hai. Một mình xây dựng ARISE — nền tảng dự báo rủi ro vận tải gồm ba service đang chạy production (OMEN → VANTIS → NEXQUOTE), hoàn thành trong bảy tháng bằng cách chỉ huy các AI agent dưới kỷ luật kỹ thuật tự thiết kế.",
    ogAlt: "ARISE — OMEN cảm nhận thế giới, VANTIS dự báo rủi ro, NEXQUOTE định giá lô hàng.",
  },

  nav: {
    items: [
      { id: "arise", label: "Hệ thống" },
      { id: "proof", label: "Bằng chứng" },
      { id: "discipline", label: "Cách tôi xây" },
      { id: "timeline", label: "Hành trình" },
      { id: "about", label: "Về tôi" },
      { id: "vision", label: "Lời đề nghị" },
    ],
    contactCta: "Liên hệ",
    downloadCv: "Tải CV",
    mainNavAria: "Điều hướng chính",
    menuButtonAria: "Mở menu",
    languageToggleAria: "Đổi ngôn ngữ",
    themeToggleAria: { toDark: "Chuyển sang giao diện tối", toLight: "Chuyển sang giao diện sáng" },
    skipToContent: "Bỏ qua, đến nội dung chính",
  },

  hero: {
    livePill: "ĐANG CHẠY PRODUCTION",
    liveDetail: "3 service · tín hiệu thật · từ giữa 2026",
    kicker: "Bùi Xuân Hoàng — founder, người xây dựng duy nhất",
    headline: "Nhìn thấy rủi ro của thế giới trước khi nó cập cảng.",
    subheadline:
      "Một sinh viên logistics năm hai, điều phối các agent AI như một đội kỹ sư — theo kỷ luật do chính mình đặt ra. ARISE, sản phẩm đầu tay, đã đi vào vận hành trên hạ tầng thật: đọc rủi ro toàn cầu từ hơn 18 nguồn thời gian thực, dự báo trên những tuyến hàng hải đang hoạt động, rồi quy thành mức cước minh bạch.",
    lookingForLabel: "Đang tìm kiếm",
    lookingFor: ["Vốn đầu tư seed", "Design partner trong ngành logistics"],
    ctaExplore: "Khám phá ARISE",
    ctaDownloadCv: "Tải CV",
    ctaContact: "Liên hệ",
    diagramCaption:
      "OMEN cảm nhận thế giới → VANTIS dự báo rủi ro → NEXQUOTE định giá lô hàng.",
    diagramAria:
      "Sơ đồ hệ thống động: dữ liệu chảy từ OMEN, engine tín hiệu rủi ro, sang VANTIS, tầng dự báo, sang NEXQUOTE, service báo giá cước vận tải. Kết quả AIS thật được nạp ngược về VANTIS.",
    diagramLabels: {
      sources: "18+ nguồn trực tiếp",
      output: "báo giá · PDF",
      loop: "AIS · kết quả thật",
    },
  },

  thesis: {
    eyebrow: "Vì sao",
    heading: "Vì sao tôi xây ARISE",
    paragraphs: [
      "Vận tải là nơi rủi ro của thế giới biến thành một con số. Hạn hán ở Panama, đình công ở Rotterdam, tên lửa trên Biển Đỏ — cuối cùng tất cả đều đáp xuống một tờ hóa đơn. Tôi học logistics, và tôi cứ thấy mãi một khoảng trống: những người định giá lô hàng lại là những người biết tin rủi ro sau cùng, khi nó đã kịp gây thiệt hại.",
      "Tôi không có điều kiện lập một đội ngũ, nên tôi trở thành một đội ngũ. Tôi tự học kỹ thuật phần mềm từ con số không và chỉ huy các AI coding agent như một kỹ sư trưởng chỉ huy kíp thợ — bằng test, review và các cổng bảo mật không thể bỏ qua. Bảy tháng sau, ARISE chạy production: nó quan sát thế giới, tự chấm điểm dự báo của mình bằng chuyển động thật của tàu, và tính giá cước bằng thứ toán học mà AI không được phép bịa ra.",
    ],
    pull: "Người định giá lô hàng đang biết tin rủi ro sau cùng. ARISE tồn tại để họ biết trước tiên.",
  },

  arise: {
    eyebrow: "Hệ thống",
    heading: "ARISE — hệ thống",
    intro:
      "Ba service độc lập, đã deploy production, nối thành một pipeline. Mỗi service là phần mềm thật với repo, CI/CD và người dùng riêng — hợp lại, chúng khép kín vòng lặp từ biến cố thế giới đến một báo giá cụ thể.",
    flowHint: "Chọn một node để xem chi tiết service",
    stackLabel: "Stack",
    realLabel: "Đây là thật",
    visitLabel: "Truy cập",
    services: [
      {
        id: "omen",
        name: "OMEN",
        url: "https://omen.nexquoteapp.com/",
        nodeRole: "cảm nhận thế giới",
        tagline: "Engine tín hiệu rủi ro toàn cầu theo thời gian thực.",
        description:
          "OMEN thu nạp 18+ nguồn dữ liệu trực tiếp — tin tức thế giới, hàng hóa cơ bản, giá nhiên liệu bunker, thời tiết, tắc nghẽn cảng, thuế quan và hành động thương mại, prediction market — rồi hợp nhất thành các tín hiệu rủi ro có cấu trúc. Mỗi tín hiệu mang theo nguồn gốc của nó: từ nguồn nào, thời điểm nào, độ tin cậy bao nhiêu.",
        realDetail:
          "Thiết kế fail-closed (mặc định đóng khi có nghi ngờ): nếu một nguồn không xác minh được trên production, OMEN thà không phát gì còn hơn phát một phỏng đoán. Không dữ liệu giả nào lọt xuống hệ thống phía sau. Output được ký số.",
        stack: ["FastAPI", "Python 3.10+", "Redis", "Kubernetes-ready", "Signed outputs", "SDKs"],
      },
      {
        id: "vantis",
        name: "VANTIS",
        url: "https://vantis.nexquoteapp.com/",
        nodeRole: "dự báo rủi ro",
        tagline: "Tầng quyết định tự chấm điểm mình bằng tàu thật.",
        description:
          "VANTIS (RISKCAST) tiêu thụ tín hiệu từ OMEN và neo chúng vào thực tế: chuyển động thật của tàu từ dữ liệu AIS chính là chuẩn đối chiếu. Nó tạo ra các dự báo rủi ro tuyến đã được hiệu chỉnh (calibration) cùng các kịch bản tương lai — rồi công bố chúng, và ghi điểm.",
        realDetail:
          "Hiệu chỉnh trên dữ liệu kết quả thật giúp giảm ~34% sai số out-of-sample. Một Telegram proof-bot chạy 24/7, công bố dự báo kèm bảng điểm — được chấm bằng những gì tàu thật sự đã làm.",
        stack: ["FastAPI", "Pydantic v2", "async SQLAlchemy", "Postgres", "Redis", "React 19", "Vite", "TypeScript", "Tailwind", "Radix"],
      },
      {
        id: "nexquote",
        name: "NEXQUOTE",
        url: "https://nexquoteapp.com/",
        nodeRole: "định giá lô hàng",
        tagline: "SaaS báo giá cước multi-tenant cho SME logistics.",
        description:
          "NEXQUOTE biến những yêu cầu lộn xộn của đời thực — text bẩn, bảng tính, PDF — thành báo giá cước xác định và an toàn kiểm toán: tạo PDF, import bảng giá có AI hỗ trợ, quy trình duyệt kiểu ERP. Xây cho những forwarder nhỏ hôm nay vẫn chạy việc bằng WhatsApp và Excel.",
        realDetail:
          "Áp dụng một 'Security Floor': AI cung cấp ngữ cảnh nhưng không bao giờ được bịa phép tính cước — giá là xác định và kiểm toán được. Cách ly multi-tenant nghiêm ngặt; output cho khách hàng fail-closed.",
        stack: ["Django 5", "DRF", "Celery", "Postgres", "Redis", "Vue 3", "Vite", "TypeScript", "Pinia", "Tailwind", "Playwright E2E"],
      },
    ],
    pipelineNote:
      "Pipeline này khép một vòng lặp bằng chứng: báo giá vi mô gặp rủi ro vĩ mô, dự báo gặp kết quả thật, và bảng điểm giữ cho tất cả trung thực — kể cả tôi.",
  },

  proof: {
    eyebrow: "Biên lai",
    heading: "Bằng chứng, không phải demo",
    intro:
      "Đồ án sinh viên sống trên localhost. ARISE sống trên production, và nó giữ biên lai. Những con số dưới đây đến từ hệ thống đang chạy — không phải từ slide gọi vốn.",
    rows: [
      {
        value: "3/3",
        label: "service đang chạy production",
        detail:
          "OMEN, VANTIS và NEXQUOTE chạy trên hạ tầng thật, phục vụ tín hiệu thật từ giữa 2026 — không phải slide, không phải mockup.",
        channel: "brand",
      },
      {
        value: "18+",
        label: "nguồn dữ liệu trực tiếp được hợp nhất",
        detail:
          "Tin tức, hàng hóa, nhiên liệu bunker, thời tiết, tắc nghẽn cảng, thuế quan, prediction market — mỗi tín hiệu truy được về nguồn.",
        channel: "brand",
      },
      {
        value: "−34%",
        label: "sai số out-of-sample sau hiệu chỉnh",
        detail:
          "Dự báo của VANTIS được hiệu chỉnh bằng kết quả AIS thật của tàu. Con số đến từ dữ liệu held-out, không phải tập huấn luyện.",
        channel: "accent",
      },
      {
        value: "24/7",
        label: "proof-bot công khai kèm bảng điểm",
        detail:
          "Bot Telegram công bố dự báo trước khi có kết quả, rồi tự chấm điểm bằng những gì tàu thật sự đã làm. Nó không thể lặng lẽ xóa một lần đoán sai.",
        channel: "accent",
      },
      {
        value: "×3",
        label: "pipeline CI/CD được gia cố bảo mật",
        detail:
          "Cả ba repo: CodeQL, Dependabot, SBOM + ký cosign, quét Trivy, contract test. Mỗi bản release đều được ký và quét trước khi phát hành.",
        channel: "brand",
      },
      {
        value: "2×",
        label: "Top 10 cuộc thi khởi nghiệp toàn quốc",
        detail:
          "ARISE vào Top 10 tại 'Khởi nghiệp cùng Kawai' và I-STARTUP — được nhà đầu tư chấm như một startup thật, không phải đồ án trên lớp.",
        channel: "accent",
      },
    ],
    closing:
      "Bảng điểm chính là điểm mấu chốt. Ai cũng có thể tự nhận là chính xác; ARISE công bố dự báo trước, rồi để thực tế chấm điểm.",
  },

  discipline: {
    eyebrow: "Phương pháp",
    heading: "Cách tôi xây",
    intro:
      "Làm một mình không có nghĩa là làm tùy tiện. Tôi ship dưới một kỷ luật tự thiết kế cho đúng một tình huống: founder chỉ huy AI coding agent trên phần mềm động đến tiền và rủi ro.",
    items: [
      {
        title: "Test trước, tin sau",
        body: "TDD là hợp đồng giữa tôi và các agent. Hành vi được đặc tả bằng test trước; diff nào của agent không qua test thì không được merge. Bộ test chính là vòng phỏng vấn tuyển dụng của tôi.",
      },
      {
        title: "Kiểm chứng đối kháng",
        body: "Mỗi thay đổi quan trọng đều bị tấn công trước khi merge — một lượt thứ hai, thường là một agent khác, tìm cách phá công trình của lượt đầu: edge case, injection, race condition, lỗi im lặng.",
      },
      {
        title: "Đường tiền xác định",
        body: "AI không bao giờ được bịa phép tính cước. Giá, tổng tiền, mọi con số đến tay khách hàng đều từ code xác định, có kiểm toán. AI đọc ngữ cảnh; số học thì cố tình giữ cho nhàm chán.",
      },
      {
        title: "Fail-closed toàn hệ thống",
        body: "Nguồn dữ liệu không xác minh được — OMEN không phát gì. Cách ly tenant có nghi vấn — NEXQUOTE từ chối yêu cầu. Không có output là một tính năng; một phỏng đoán tự tin mới là bug.",
      },
      {
        title: "Diff phẫu thuật",
        body: "Agent làm việc theo từng bước nhỏ, review được. Không viết lại nghìn dòng, không refactor tiện tay. Mỗi diff có đúng một nhiệm vụ, và tôi giải thích được từng dòng được ship.",
      },
      {
        title: "Chuỗi cung ứng phần mềm được gia cố",
        body: "CodeQL và Trivy trên mỗi lần push, Dependabot cho mỗi dependency, SBOM được sinh tự động và release ký bằng cosign. Pipeline mặc định rằng tôi sẽ bị tấn công — vì một ngày nào đó sẽ đúng như vậy.",
      },
    ],
    moatQuote: "Tôi thiết kế kiến trúc, chỉ huy và kiểm chứng. AI thực thi — dưới kỷ luật do tôi đặt ra.",
    moatCaption:
      "Đây mới là lợi thế cạnh tranh: không phải việc tôi dùng AI, mà là tôi đã xây được cơ chế khiến output của AI đủ tin cậy để chạy production.",
  },

  timeline: {
    eyebrow: "Hành trình",
    heading: "Bảy tháng, từ đầu đến cuối",
    intro: "Từ dòng code đầu tiên đến một hệ thống production tự chấm điểm.",
    milestones: [
      {
        date: "2025.11",
        title: "Con số không",
        body: "Một sinh viên logistics chưa từng viết phần mềm bắt đầu tự học cách xây — và cách chỉ huy AI agent thay vì chỉ prompt chúng.",
      },
      {
        date: "2025.12",
        title: "Báo giá end-to-end đầu tiên",
        body: "NEXQUOTE lần đầu biến một bảng giá lộn xộn thành báo giá cước sạch sẽ, xác định, kèm PDF tự sinh.",
      },
      {
        date: "2026.01",
        title: "Deploy production đầu tiên",
        body: "NEXQUOTE lên hạ tầng thật với cách ly multi-tenant và Security Floor được áp từ ngày đầu.",
      },
      {
        date: "2026.02",
        title: "OMEN lên sóng",
        body: "Engine tín hiệu bắt đầu thu nạp nguồn dữ liệu trực tiếp; tín hiệu rủi ro hợp nhất, có truy xuất nguồn gốc đầu tiên được đẩy vào Redis.",
      },
      {
        date: "2026.04",
        title: "Hiệu chỉnh bằng thực tế",
        body: "VANTIS neo dự báo vào kết quả AIS của tàu thật. Sai số out-of-sample giảm ~34% — con số đầu tiên nền tảng này tự kiếm được.",
      },
      {
        date: "2026.05",
        title: "Proof-bot ra công khai",
        body: "Bot Telegram bắt đầu công bố dự báo và bảng điểm. Từ đây, đoán sai là hồ sơ công khai.",
      },
      {
        date: "2026.06",
        title: "Gia cố chuỗi cung ứng",
        body: "CodeQL, SBOM + cosign, Trivy và contract test phủ cả ba repo. Pipeline giờ tự bảo vệ được chính nó.",
      },
    ],
  },

  skills: {
    eyebrow: "Năng lực",
    heading: "Năng lực",
    intro:
      "Thế mạnh của tôi là điều phối AI, thiết kế và kiến trúc hệ thống — không phải gõ tay từng dòng code. Tôi ra đề bài, thiết kế, review và kiểm soát chất lượng; AI thực thi dưới kỷ luật tôi đặt ra. Stack công nghệ bên dưới là thứ tôi điều phối, không phải chuyên môn tay nghề của tôi.",
    groups: [
      {
        name: "Điều phối AI",
        items: ["Claude Code", "GPT", "Codex", "Cursor", "GitHub Copilot", "Gemini", "Ra đề bài & đặc tả", "Review & kiểm chứng đối kháng", "TDD-first"],
      },
      {
        name: "Thiết kế & Sáng tạo",
        items: ["Product & UI/UX", "Thương hiệu & nhận diện", "Design system & tokens", "Định hướng sáng tạo", "Landing & storytelling"],
      },
      {
        name: "Kiến trúc hệ thống",
        items: ["Thiết kế kiến trúc", "Luồng dữ liệu & API", "Tích hợp liên sản phẩm", "Bảo mật fail-closed", "Đường tiền xác định"],
      },
      {
        name: "Sản phẩm & Vận hành",
        items: ["Ý tưởng → vận hành trọn vòng", "Chiến lược sản phẩm", "Điều phối CI/CD & release", "Tăng trưởng"],
      },
      {
        name: "Chuyên ngành logistics",
        items: ["Chuỗi cung ứng", "Báo giá cước", "Rủi ro tuyến & cảng", "Thuế quan", "Vận hành SME"],
      },
    ],
    consoleLabel: "Bảng năng lực",
    marqueeLabel: "Công cụ & nền tảng tôi điều phối",
    marqueeItems: [
      "Claude Code", "GPT", "Codex", "Cursor", "GitHub Copilot", "Gemini",
      "FastAPI", "Django 5", "DRF", "Celery", "PostgreSQL", "Redis",
      "React 19", "Vue 3", "Vite", "TypeScript", "Tailwind CSS", "Pinia", "Radix UI", "Figma",
      "Pydantic v2", "async SQLAlchemy",
      "Docker", "Kubernetes", "Nginx", "Git", "Vercel", "GitHub Actions",
      "CodeQL", "Trivy", "cosign",
      "Grafana", "Prometheus", "Sentry",
      "Playwright", "Telegram Bot API", "Webhooks",
    ],
  },

  about: {
    eyebrow: "Về tôi",
    heading: "Về tôi",
    portraitAlt: "Chân dung Bùi Xuân Hoàng",
    paragraphs: [
      "Tôi là Bùi Xuân Hoàng, sinh viên năm hai ngành logistics và chuỗi cung ứng tại Đại học Kiến trúc Đà Nẵng (DAU). Hai năm trước tôi chưa viết nổi một dòng code; tôi học vì những vấn đề tôi quan tâm sẽ không tự giải quyết, và sẽ chẳng ai trao cho một sinh viên cả một đội ngũ kỹ sư.",
      "Logistics là sân nhà của tôi — bàn báo giá, cảng trễ chuyến, thông báo thuế quan, cách các forwarder nhỏ thật sự vận hành. Phần mềm trở thành đòn bẩy. Còn việc chỉ huy AI agent dưới kỷ luật kỹ thuật thực thụ là thứ cho phép một người vận hành như một đội ngũ — mà không phải giả vờ mình là một đội ngũ.",
    ],
    facts: [
      { label: "Nơi ở", value: "Đà Nẵng, Việt Nam" },
      { label: "Học vấn", value: "Năm 2 ngành Logistics & Chuỗi cung ứng, Đại học Kiến trúc Đà Nẵng (DAU)" },
      { label: "Giải thưởng", value: "Top 10 — Khởi nghiệp cùng Kawai · Top 10 — I-STARTUP" },
      { label: "Email", value: "hoang_2454050218@dau.edu.vn" },
    ],
  },

  vision: {
    eyebrow: "Lời đề nghị",
    heading: "ARISE sẽ đi đến đâu",
    body: [
      "Hôm nay ARISE khép kín một vòng lặp: biến cố thế giới → rủi ro tuyến → một báo giá cụ thể, được thực tế chấm điểm. Bước tiếp theo là mở vòng lặp đó cho người khác — những forwarder, broker và chủ hàng vốn cảm nhận rủi ro đầu tiên nhưng định lượng được nó sau cùng.",
      "Bảng điểm sẽ trở thành sản phẩm: dự báo rủi ro mà bạn không cần phải tin suông — vì nó có thành tích công khai. Thị trường logistics Việt Nam là bàn đạp; còn thứ kỷ luật đã xây nên ARISE chính là thứ giúp nó mở rộng.",
    ],
    askHeading: "Tôi đang tìm kiếm",
    asks: [
      {
        title: "Vốn đầu tư seed",
        body: "Để biến một nền tảng đang chạy, xây bởi một người, thành một công ty: hạ tầng, license dữ liệu và những nhân sự đầu tiên — dưới đúng thứ kỷ luật kỹ thuật đã đưa nó đến đây.",
      },
      {
        title: "Design partner",
        body: "Các SME logistics — forwarder, broker — muốn báo giá xác định và tín hiệu rủi ro trung thực, sẵn sàng cùng định hình sản phẩm bằng quy trình thật của mình.",
      },
    ],
    ctaLabel: "Bắt đầu trò chuyện",
  },

  footer: {
    contactHeading: "Liên hệ",
    contactBody:
      "Nếu bạn là nhà đầu tư, người vận hành logistics, hay đơn giản là người thích kiểm tra biên lai — tôi rất muốn trò chuyện.",
    emailLabel: "Email",
    email: "hoang_2454050218@dau.edu.vn",
    links: [
      {
        label: "GitHub",
        value: "@hoang2454050218-creator",
        href: "https://github.com/hoang2454050218-creator",
        icon: "github",
      },
      {
        label: "LinkedIn",
        value: "in/hoang-bui-404201375",
        href: "https://www.linkedin.com/in/hoang-bui-404201375",
        icon: "linkedin",
      },
      { label: "Telegram proof-bot", value: "Bot dự báo — gửi link khi liên hệ", icon: "telegram" },
    ],
    downloadCv: "Tải CV (PDF)",
    localeNote: "Read in English",
    builtNote: "// thiết kế & điều phối cùng AI — Bùi Xuân Hoàng © 2026",
    copyEmail: "Sao chép email",
    copiedToast: "Đã sao chép ✓",
    backToTopAria: "Về đầu trang",
  },

  resume: {
    documentTitle: "CV — Bùi Xuân Hoàng",
    documentTag: "Hồ sơ năng lực · 2026",
    name: "Bùi Xuân Hoàng",
    role: "Founder & người xây dựng duy nhất, ARISE — nền tảng thông tin rủi ro chuỗi cung ứng",
    contactLine: [
      "Đà Nẵng, Việt Nam",
      "hoang_2454050218@dau.edu.vn",
      "github.com/hoang2454050218-creator",
      "linkedin.com/in/hoang-bui-404201375",
    ],
    summaryHeading: "Tóm tắt",
    summary:
      "Một mình thiết kế, xây dựng và vận hành ARISE — ba service production (OMEN → VANTIS → NEXQUOTE) cảm nhận rủi ro toàn cầu, dự báo tác động lên tuyến vận tải và quy đổi thành báo giá xác định. Hoàn thành trong ~7 tháng khi đang là sinh viên logistics năm hai, bằng cách chỉ huy các AI coding agent dưới kỷ luật do chính tôi đặt ra: TDD, kiểm chứng đối kháng và bảo mật fail-closed. Đang tìm vốn seed và design partner ngành logistics.",
    productHeading: "ARISE — nền tảng",
    productName: "ARISE",
    productPeriod: "2025 — nay · chạy production từ giữa 2026",
    productIntro:
      "Thông tin rủi ro chuỗi cung ứng end-to-end — ba service độc lập, triển khai production trong cùng một pipeline.",
    productLinks: "nexquoteapp.com · omen.nexquoteapp.com · vantis.nexquoteapp.com",
    services: [
      {
        name: "OMEN — engine tín hiệu rủi ro thời gian thực",
        bullets: [
          "Thu nạp và hợp nhất 18+ nguồn trực tiếp — tin tức, hàng hóa, nhiên liệu bunker, thời tiết, tắc cảng, thuế quan, prediction market — thành tín hiệu rủi ro có truy xuất nguồn gốc.",
          "Fail-closed theo thiết kế ('không mock trên production'), output ký số, kèm SDK. FastAPI · Python · Redis · Kubernetes-ready.",
        ],
      },
      {
        name: "VANTIS (RISKCAST) — tầng dự báo & quyết định",
        bullets: [
          "Dự báo rủi ro tuyến đã hiệu chỉnh, neo vào kết quả AIS thật của tàu — hiệu chỉnh giảm ~34% sai số out-of-sample.",
          "Telegram proof-bot công bố mọi dự báo kèm bảng điểm tự chấm. FastAPI · Pydantic v2 · async SQLAlchemy · Postgres/Redis · React 19 · TypeScript.",
        ],
      },
      {
        name: "NEXQUOTE — SaaS báo giá cước multi-tenant",
        bullets: [
          "Biến dữ liệu đầu vào phi cấu trúc (text, bảng tính, PDF) thành báo giá xác định, an toàn kiểm toán — sinh PDF, import bảng giá có AI hỗ trợ, duyệt kiểu ERP.",
          "'Security floor' đảm bảo giá xác định, cách ly tenant nghiêm ngặt và output fail-closed. Django 5 · DRF · Celery · Postgres/Redis · Vue 3 · TypeScript · Playwright E2E.",
        ],
      },
    ],
    highlightsHeading: "Bằng chứng chọn lọc",
    highlights: [
      "Ba service chạy production trên hạ tầng thật từ giữa 2026.",
      "Giảm ~34% sai số out-of-sample nhờ hiệu chỉnh trên dữ liệu tàu thật.",
      "Telegram proof-bot công khai với bảng điểm dự báo tự chấm theo thời gian thực.",
      "Top 10 tại hai cuộc thi khởi nghiệp toàn quốc với ARISE — 'Khởi nghiệp cùng Kawai' và I-STARTUP.",
      "CI/CD gia cố bảo mật trên mọi repo: CodeQL, Dependabot, SBOM + cosign, Trivy, contract test.",
      "Quy trình AI-native: thiết kế kiến trúc, chỉ huy và kiểm chứng AI agent dưới TDD và review đối kháng.",
    ],
    skillsHeading: "Kỹ năng",
    skillGroups: [
      { name: "Điều phối AI", items: "Claude Code, GPT, Codex, Cursor, GitHub Copilot, Gemini; ra đề bài & đặc tả, review & kiểm chứng đối kháng, TDD-first" },
      { name: "Thiết kế & Sáng tạo", items: "Product & UI/UX, thương hiệu & nhận diện, design system & tokens, định hướng sáng tạo" },
      { name: "Kiến trúc hệ thống", items: "Thiết kế kiến trúc, luồng dữ liệu & API, tích hợp liên sản phẩm, bảo mật fail-closed, đường tiền xác định" },
      { name: "Sản phẩm & Vận hành", items: "Ý tưởng → vận hành trọn vòng, chiến lược sản phẩm, tăng trưởng, chuyên ngành logistics" },
      { name: "Stack tôi điều phối", items: "Python, FastAPI, Django/DRF, React 19, Vue 3, TypeScript, PostgreSQL, Redis, Docker, CI/CD — do tôi chỉ huy, không phải code gõ tay" },
    ],
    educationHeading: "Học vấn",
    education: [
      {
        school: "Đại học Kiến trúc Đà Nẵng (DAU)",
        detail: "Logistics & Quản lý chuỗi cung ứng (năm 2) — tự học kỹ thuật phần mềm song song",
        period: "2024 — nay",
      },
    ],
    languagesHeading: "Ngôn ngữ",
    languages: ["Tiếng Việt — bản ngữ", "Tiếng Anh — thành thạo trong công việc"],
    lookingForHeading: "Đang tìm kiếm",
    lookingFor: "Vốn đầu tư seed · design partner (SME logistics)",
    printHint: "In hoặc lưu PDF: Ctrl/Cmd + P",
    backToSite: "← Về trang chính",
    switchLocaleCv: "View CV in English",
  },
};
