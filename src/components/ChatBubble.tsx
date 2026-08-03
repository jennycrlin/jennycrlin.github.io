"use client";

import { useState, useRef, useEffect, useCallback } from "react";

type ConversationNode = {
  label: string;
  answer: string;
  answerZh: string;
  followUps: string[];
};

const TREE: Record<string, ConversationNode> = {
  intro: {
    label: "Who is Jenny?",
    answer:
      "<b>UX Research Designer</b> with 5+ years of experience<br>• Every role centers on <b>AI</b> — from AI workflow automation to AI-powered clinical tools<br>• Passionate about <b>making technology truly work for everyone</b><br>• Research-driven design across <b>fintech, healthcare, and enterprise</b><br>• A curious explorer who's visited <b>40+ countries</b> — always learning, always discovering",
    answerZh:
      "<b>UX 研究設計師</b>，擁有 5 年以上經驗<br>• 每個角色都圍繞 <b>AI</b> — 從 AI 工作流自動化到 AI 臨床工具<br>• 致力於<b>讓科技真正為每個人所用</b><br>• 涵蓋<b>金融科技、醫療、企業</b>領域的研究驅動設計<br>• 好奇的探索者，走過 <b>40+ 個國家</b> — 不斷學習、不斷發現",
    followUps: ["ai-approach", "passion", "recent-work"],
  },
  "recent-work": {
    label: "What's Jenny working on?",
    answer:
      "Currently <b>Product Design Engineer</b> at Apex Fintech Solutions:<br>• Architected <b>3 platforms</b> — Ascend OS, Enterprise, Investor<br>• Used <b>AI workflows</b> (Claude Code) to bridge design-engineering communication<br>• Cut design-to-dev handoff by <b>98%</b> with code-ready UI delivery<br>• Drove <b>$1.2M+</b> annual savings via AI workflow automation<br>• Governed <b>2,300+</b> component iterations across platforms",
    answerZh:
      "目前在 Apex Fintech Solutions 擔任 <b>Product Design Engineer</b>：<br>• 設計了 <b>3 個平台</b> — Ascend OS、Enterprise、Investor<br>• 用 <b>AI 工作流</b>（Claude Code）促進設計與工程團隊的溝通<br>• 設計到開發交付效率提升 <b>98%</b>，實現 code-ready UI 交付<br>• AI 工作流程自動化，年省 <b>$1.2M+</b><br>• 管理跨平台 <b>2,300+</b> 組件迭代",
    followUps: ["eli-lilly", "healthai", "ai-approach"],
  },
  "ai-approach": {
    label: "How does Jenny use AI in design?",
    answer:
      "AI is woven into <b>every stage</b> of Jenny's workflow:<br>• <b>Apex:</b> AI workflow (Claude Code) for team communication & code-ready prototypes<br>• <b>Eli Lilly:</b> Human-in-the-loop AI for clinical protocol authoring<br>• <b>HealthAI Lab:</b> Designed an AI conversation agent for mental health support<br>• <b>AT&T:</b> Proposed AI chatbot to automate test-case lookup for 500+ engineers<br>• Philosophy: AI should <b>amplify human judgment</b>, not replace it",
    answerZh:
      "AI 融入 Jenny 工作流程的<b>每個階段</b>：<br>• <b>Apex：</b>AI 工作流（Claude Code）促進團隊溝通與 code-ready 原型<br>• <b>Eli Lilly：</b>Human-in-the-loop AI 用於臨床協議撰寫<br>• <b>HealthAI Lab：</b>設計 AI 對話代理，支援心理健康<br>• <b>AT&T：</b>提出 AI 聊天機器人自動化測試案例查詢<br>• 理念：AI 應該<b>增強人的判斷力</b>，而非取代",
    followUps: ["recent-work", "healthai", "passion"],
  },
  passion: {
    label: "What drives her design work?",
    answer:
      "Jenny's design philosophy started at a <b>medical library</b>:<br>• Saw firsthand how <b>thoughtful design can empower people</b> who are often left behind<br>• Core belief: <b>great design should feel invisible</b> — it just works for everyone<br>• This drives her commitment to <b>accessible, inclusive design</b> in every project<br>• She wants her work to be <b>practically applied</b> — helping real people, not just polishing pixels",
    answerZh:
      "Jenny 的設計理念源自一間<b>醫學圖書館</b>：<br>• 親眼見證了<b>用心的設計如何賦能</b>那些常被忽略的使用者<br>• 核心信念：<b>好的設計應該是無形的</b>——自然而然地為每個人服務<br>• 這驅動她在每個專案中堅持<b>無障礙、包容性設計</b><br>• 她希望自己的作品能<b>實際應用</b>——幫助真正有需要的人，而不只是打磨視覺",
    followUps: ["background", "work-style", "research"],
  },
  "work-style": {
    label: "What's her work style like?",
    answer:
      "Jenny is a <b>problem solver</b> at heart:<br>• Loves finding <b>inefficiencies</b> and turning them into streamlined workflows<br>• <b>Impact-oriented</b> — every design decision ties back to measurable outcomes<br>• Values <b>helping others</b> — wants her work to make a real difference for people in need<br>• Thinks beyond the screen: <b>\"How does this improve someone's day?\"</b><br>• Brings curiosity from <b>40+ countries</b> of travel into how she approaches problems",
    answerZh:
      "Jenny 骨子裡是一個<b>問題解決者</b>：<br>• 喜歡發現<b>效率問題</b>並把它們變成流暢的工作流程<br>• <b>成果導向</b> — 每個設計決策都與可衡量的成果掛鉤<br>• 重視<b>助人</b> — 希望工作能為真正有需要的人帶來改變<br>• 思考超越螢幕：<b>「這如何改善某人的一天？」</b><br>• 將走過 <b>40+ 國家</b>的好奇心帶入解決問題的方式",
    followUps: ["ai-approach", "passion", "recent-work"],
  },
  background: {
    label: "How did she get into UX?",
    answer:
      "Jenny's UX journey started at a <b>medical library</b>:<br>• Noticed how much <b>better design could transform someone's experience</b> with technology<br>• Saw an opportunity to <b>bridge the gap</b> between powerful tools and the people who need them most<br>• This sparked her passion for <b>accessibility</b> — it still drives every design decision today<br>• Studied <b>Information Science</b> at UT Austin, combining research methodology with design practice",
    answerZh:
      "Jenny 的 UX 旅程始於一間<b>醫學圖書館</b>：<br>• 發現<b>更好的設計能徹底改變一個人的科技體驗</b><br>• 看到了一個機會：<b>搭起橋樑</b>，連接強大的工具與最需要它們的人<br>• 這點燃了她對<b>無障礙設計</b>的熱情——至今仍驅動著每一個設計決策<br>• 在 UT Austin 修讀<b>資訊科學</b>，結合研究方法論與設計實務",
    followUps: ["passion", "education", "research"],
  },
  "eli-lilly": {
    label: "Tell me about her pharma work",
    answer:
      "<b>UX Designer</b> at Eli Lilly — designed an <b>AI-first</b> clinical trial platform:<br>• Led design of <b>Collab Studio</b> for FDA-regulated clinical workflows<br>• <b>-38%</b> manual data entry via AI-assisted protocol authoring<br>• <b>+43%</b> protocol adherence improvement<br>• Unified <b>7+ handoff points</b> into a single source of truth<br>• <b>Human-in-the-loop AI</b> — the system suggests, humans decide",
    answerZh:
      "在 Eli Lilly 擔任 <b>UX Designer</b> — 設計了一個 <b>AI 優先</b>的臨床試驗平台：<br>• 主導設計 <b>Collab Studio</b>，用於 FDA 規範的臨床工作流程<br>• AI 輔助協議撰寫，手動資料輸入減少 <b>38%</b><br>• 協議遵循率提升 <b>43%</b><br>• 統一 <b>7+ 個交接點</b>為單一數據來源<br>• <b>Human-in-the-loop AI</b> — 系統建議，人類決定",
    followUps: ["healthai", "att", "ai-approach"],
  },
  healthai: {
    label: "What's the HealthAI Lab project?",
    answer:
      "<b>Product Designer</b> at UT Austin HealthAI Lab (Jan 2024 – Aug 2025):<br>• Designed an <b>AI conversation agent</b> for mental health support<br>• Conducted <b>diary studies</b> to understand patient communication patterns<br>• Focus on making AI interactions feel <b>natural and empathetic</b><br>• Research-driven approach: user needs first, technology second<br>• Working at the intersection of <b>AI, healthcare, and accessibility</b>",
    answerZh:
      "在 UT Austin <b>HealthAI Lab</b> 擔任 <b>Product Designer</b>（2024 年 1 月 – 2025 年 8 月）：<br>• 設計了一個 <b>AI 對話代理</b>，用於心理健康支援<br>• 進行<b>日記研究</b>，了解病患的溝通模式<br>• 專注於讓 AI 互動感覺<b>自然且有同理心</b><br>• 研究驅動方法：先了解使用者需求，再思考技術<br>• 在 <b>AI、醫療與無障礙</b>的交匯點上工作",
    followUps: ["eli-lilly", "ai-approach", "passion"],
  },
  att: {
    label: "What about the AT&T project?",
    answer:
      "<b>Sr Associate UX Design Intern</b> at AT&T — 10-week internship:<br>• Redesigned an internal testing portal used by <b>500+ engineers</b><br>• Introduced <b>unified search</b>, expandable sidebar, batch actions<br>• <b>-30%</b> navigation time, <b>+12%</b> task completion efficiency<br>• Proposed an <b>AI chatbot</b> to automate test-case lookup — reducing manual page-switching<br>• Combined UX research, UI design, and <b>front-end engineering</b> in one role",
    answerZh:
      "在 AT&T 擔任 <b>Sr Associate UX Design Intern</b> — 10 週實習：<br>• 重新設計供 <b>500+ 位工程師</b>使用的內部測試平台<br>• 導入<b>統一搜尋</b>、可展開側邊欄、批次操作<br>• 導航時間減少 <b>30%</b>，任務完成效率提升 <b>12%</b><br>• 提出 <b>AI 聊天機器人</b>自動化測試案例查詢——減少手動切換頁面<br>• 在一個角色中結合 UX 研究、UI 設計和<b>前端工程</b>",
    followUps: ["eli-lilly", "healthai", "contact"],
  },
  healthcare: {
    label: "Any healthcare projects?",
    answer:
      "<b>0-to-1 mobile health app</b> for Williamson County Health District:<br>• Transformed dense PDFs into <b>interactive dashboards</b><br>• <b>+28%</b> report readability, <b>+40%</b> user satisfaction<br>• <b>Bilingual</b> — culturally adapted English & Spanish content<br>• Driven by the belief that <b>health information should be accessible to everyone</b>",
    answerZh:
      "為 Williamson County 衛生局<b>從零到一</b>設計行動健康 App：<br>• 將 PDF 報告轉為<b>互動式儀表板</b><br>• 報告可讀性提升 <b>28%</b>，使用者滿意度提升 <b>40%</b><br>• <b>雙語</b>支援 — 英語和西班牙語文化適配<br>• 源自信念：<b>健康資訊應該對每個人都是無障礙的</b>",
    followUps: ["healthai", "passion", "contact"],
  },
  travel: {
    label: "What does Jenny do outside of design?",
    answer:
      "Jenny is endlessly <b>curious</b> — she loves exploring and discovering:<br>• Visited <b>40+ countries</b> — each trip is a chance to see the world differently<br>• Travel fuels her design work: understanding how <b>different cultures interact with technology</b><br>• This curiosity carries into her career — always asking <b>\"why does this work this way?\"</b><br>• Believes the best designers are <b>observers first</b>, not decorators",
    answerZh:
      "Jenny 有著無盡的<b>好奇心</b> — 她熱愛探索與發現：<br>• 走過 <b>40+ 個國家</b> — 每次旅行都是重新認識世界的機會<br>• 旅行滋養她的設計工作：理解<b>不同文化如何與科技互動</b><br>• 這份好奇心延伸到工作中 — 總是在問<b>「為什麼是這樣運作的？」</b><br>• 相信最好的設計師首先是<b>觀察者</b>，而非裝飾者",
    followUps: ["passion", "work-style", "contact"],
  },
  education: {
    label: "Where did Jenny study?",
    answer:
      "• Graduated from <b>University of Texas at Austin (UT Austin)</b><br>• Focus: <b>Information Science & UX Design</b><br>• Worked at <b>UT Austin HealthAI Lab</b> as Product Designer<br>• Published <b>academic research</b> in health informatics and information behavior<br>• Background combines <b>research methodology</b> with hands-on design and engineering practice",
    answerZh:
      "• 畢業於<b>德州大學奧斯汀分校（UT Austin）</b><br>• 主修：<b>資訊科學與 UX 設計</b><br>• 在 <b>UT Austin HealthAI Lab</b> 擔任 Product Designer<br>• 發表了<b>學術研究</b>，涵蓋健康資訊學與資訊行為<br>• 結合<b>研究方法論</b>與實務設計和工程經驗",
    followUps: ["research", "healthai", "background"],
  },
  skills: {
    label: "What are Jenny's skills?",
    answer:
      "<b>UX Research:</b> interviews, usability testing, diary studies, workshops<br><b>UI Design:</b> Figma, design systems, prototyping, accessibility audits<br><b>Front-End:</b> React, TypeScript, HTML/CSS, code-ready UI delivery<br><b>AI Integration:</b> Claude Code, AI workflow design, human-in-the-loop patterns<br><b>Soft Skills:</b> cross-functional communication, problem-solving, impact-driven thinking",
    answerZh:
      "<b>UX 研究：</b>訪談、易用性測試、日記研究、工作坊<br><b>UI 設計：</b>Figma、設計系統、原型製作、無障礙審核<br><b>前端開發：</b>React、TypeScript、HTML/CSS、code-ready UI 交付<br><b>AI 整合：</b>Claude Code、AI 工作流設計、human-in-the-loop 模式<br><b>軟實力：</b>跨部門溝通、問題解決、成果導向思維",
    followUps: ["ai-approach", "work-style", "contact"],
  },
  research: {
    label: "Has Jenny published any research?",
    answer:
      "Yes! Jenny is an active <b>academic researcher</b>:<br>• <b>First author</b> — \"Exploring Everyday Life Health Information-seeking Conversation as an Information Practice\" (publishing 2026, <b>IR Journal</b>)<br>• Co-author — \"EHealth Literacy Interventions with US-based Older Adult Spanish-speaking Latinos\" (<b>Innovation in Aging</b>, 2025)<br>• Co-author — \"How Do Students from Different Disciplines Perceive the Concept of 'Data'?\" (<b>iSchools</b>, 2022)<br>• Research focus: <b>health informatics, AI conversation design, and information behavior</b>",
    answerZh:
      "有的！Jenny 是活躍的<b>學術研究者</b>：<br>• <b>第一作者</b> — 「Exploring Everyday Life Health Information-seeking Conversation as an Information Practice」（2026 年發表中，<b>IR Journal</b>）<br>• 共同作者 — 「EHealth Literacy Interventions with US-based Older Adult Spanish-speaking Latinos」（<b>Innovation in Aging</b>，2025）<br>• 共同作者 — 「How Do Students from Different Disciplines Perceive the Concept of 'Data'?」（<b>iSchools</b>，2022）<br>• 研究方向：<b>健康資訊學、AI 對話設計、資訊行為</b>",
    followUps: ["healthai", "education", "contact"],
  },
  contact: {
    label: "How can I reach Jenny?",
    answer:
      "• Email: <b>jennycrlin.work@gmail.com</b><br>• Connect on <b>LinkedIn</b><br>• View her <b>resume</b> on the About page<br>• She's always open to conversations about <b>AI, accessibility, and design</b>!",
    answerZh:
      "• Email：<b>jennycrlin.work@gmail.com</b><br>• 在 <b>LinkedIn</b> 上聯繫<br>• 在 About 頁面查看<b>履歷</b><br>• 她隨時歡迎聊聊 <b>AI、無障礙設計</b>相關話題！",
    followUps: ["intro", "recent-work"],
  },
};

const KEYWORDS: Record<string, string[]> = {
  intro: ["who is", "about her", "introduce", "tell me about jenny", "她是誰", "介紹", "是誰", "什麼人"],
  "recent-work": ["working", "current", "now", "recent", "latest", "apex", "fintech", "platform", "目前", "現在", "最近", "在做什麼", "工作"],
  "ai-approach": ["ai", "artificial intelligence", "machine learning", "claude", "automation", "人工智慧", "AI怎麼用", "AI設計", "自動化", "智能"],
  passion: ["why", "motivation", "drives", "passion", "care", "mission", "purpose", "meaningless", "為什麼", "動力", "熱情", "理念", "意義"],
  "work-style": ["work style", "problem solv", "efficiency", "impact", "results", "approach", "工作方式", "風格", "效率", "影響力", "解決問題"],
  background: ["got into", "origin", "story", "career path", "background", "經歷", "怎麼開始", "背景"],
  education: ["school", "university", "college", "degree", "graduate", "graduated", "study", "studied", "major", "畢業", "學校", "大學", "學歷", "讀", "念", "哪裡畢業", "科系", "學位"],
  skills: ["skill", "tools", "figma", "react", "typescript", "tech stack", "能力", "技能", "工具", "會什麼", "擅長"],
  "eli-lilly": ["lilly", "pharma", "clinical", "trial", "protocol", "medicine", "drug", "藥", "臨床"],
  healthai: ["healthai", "health ai", "conversation agent", "mental health", "diary study", "ut austin lab", "心理健康", "對話代理", "日記研究", "健康AI"],
  att: ["att", "at&t", "dashboard", "internship", "portal", "telecom", "實習"],
  healthcare: ["health app", "mobile health", "mobile app", "wcwh", "williamson", "bilingual", "醫療App", "健康App", "雙語"],
  travel: ["travel", "countries", "hobby", "outside", "fun", "personal", "free time", "curious", "explore", "旅行", "國家", "興趣", "旅遊", "好奇"],
  research: ["research", "publish", "paper", "journal", "academic", "scholar", "publication", "study", "研究", "論文", "發表", "學術", "期刊"],
  contact: ["contact", "reach", "email", "hire", "linkedin", "resume", "connect", "聯絡", "聯繫", "信箱", "履歷", "怎麼找"],
};

const FALLBACK_EN =
  "Sorry, that's outside what I can answer! Try asking about:<br>• Jenny's <b>projects</b> (Apex, Eli Lilly, HealthAI Lab, AT&T)<br>• Her <b>AI approach</b>, research, or skills<br>• Her <b>background</b>, education, or how to <b>get in touch</b>";
const FALLBACK_ZH =
  "抱歉，這個問題不在我的回答範圍內！你可以試試：<br>• Jenny 的<b>專案</b>（Apex、Eli Lilly、HealthAI Lab、AT&T）<br>• 她的 <b>AI 方法</b>、研究、技能<br>• 她的<b>背景</b>、學歷、或如何<b>聯絡</b>她";

function isChinese(text: string): boolean {
  const cjk = text.match(/[一-鿿㐀-䶿]/g);
  return !!cjk && cjk.length >= 2;
}

const RELEVANT = /jenny|lin|她|她的|他的|her|she|portfolio|作品|ux|design|設計|accessibility|無障礙|apex|fintech|lilly|pharma|at&t|att|healthai|healthcare|醫療|ai|人工智慧|travel|旅行|research|研究|論文|publish|figma|react|typescript|skill|技能|contact|email|linkedin|hire|聯絡|履歷|background|education|university|大學|畢業|學校|passion|motivation|熱情|理念|work style|工作方式|clinical|trial|internship|實習|project|專案|你的|about you/i;

function matchQuery(query: string): string | null {
  const q = query.toLowerCase();

  if (!RELEVANT.test(q)) return null;

  let bestId: string | null = null;
  let bestScore = 0;

  for (const [id, words] of Object.entries(KEYWORDS)) {
    let score = 0;
    for (const w of words) {
      if (q.includes(w)) score += w.length;
    }
    if (score > bestScore) {
      bestScore = score;
      bestId = id;
    }
  }

  return bestScore > 0 ? bestId : null;
}

const INITIAL_FOLLOW_UPS = ["intro", "recent-work", "ai-approach"];
const FALLBACK_FOLLOW_UPS = ["recent-work", "ai-approach", "contact"];

type Message = { role: "bot" | "user"; text: string };

export function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const key = "chatbot-opened";
    if (!sessionStorage.getItem(key)) {
      sessionStorage.setItem(key, "1");
      setIsOpen(true);
    }
  }, []);
  const [messages, setMessages] = useState<Message[]>([]);
  const [followUps, setFollowUps] = useState<string[]>(INITIAL_FOLLOW_UPS);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const askedRef = useRef<Set<string>>(new Set());
  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (messagesRef.current) {
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
      }
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  function respond(id: string | null, zh: boolean) {
    if (id) {
      askedRef.current.add(id);
      const node = TREE[id];
      setMessages((prev) => [...prev, { role: "bot", text: zh ? node.answerZh : node.answer }]);
      setFollowUps(node.followUps.filter((f) => !askedRef.current.has(f)));
    } else {
      setMessages((prev) => [...prev, { role: "bot", text: zh ? FALLBACK_ZH : FALLBACK_EN }]);
      setFollowUps(FALLBACK_FOLLOW_UPS.filter((f) => !askedRef.current.has(f)));
    }
    setIsTyping(false);
  }

  function handleSubmit() {
    const query = inputValue.trim();
    if (!query || isTyping) return;

    setMessages((prev) => [...prev, { role: "user", text: query }]);
    setInputValue("");
    setIsTyping(true);
    setFollowUps([]);

    const matchedId = matchQuery(query);
    const zh = isChinese(query);

    setTimeout(() => respond(matchedId, zh), 700);
  }

  function handleChipClick(id: string) {
    const node = TREE[id];
    if (!node || isTyping) return;

    askedRef.current.add(id);
    setMessages((prev) => [...prev, { role: "user", text: node.label }]);
    setIsTyping(true);
    setFollowUps([]);

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: node.answer }]);
      setFollowUps(node.followUps.filter((f) => !askedRef.current.has(f)));
      setIsTyping(false);
    }, 700);
  }

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  return (
    <div className="chat-root">
      <div className={`chat-panel${isOpen ? " chat-panel--open" : ""}`}>
        <div className="chat-panel-header">
          <span>Chat with Jenny&apos;s Portfolio</span>
          <button
            className="chat-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
            type="button"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 4l8 8M12 4l-8 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="chat-messages" ref={messagesRef} role="log" aria-live="polite">
          <div className="chat-msg chat-msg--bot">
            Hi! I&apos;m Jenny&apos;s portfolio assistant. Pick a topic below to learn more about her work.
          </div>
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`chat-msg chat-msg--${msg.role}`}
              dangerouslySetInnerHTML={{ __html: msg.text }}
            />
          ))}
          {isTyping && (
            <div className="chat-msg chat-msg--bot chat-typing">
              <span />
              <span />
              <span />
            </div>
          )}
          {followUps.length > 0 && !isTyping && (
            <div className="chat-suggestions">
              {followUps.map((id) => {
                const node = TREE[id];
                if (!node) return null;
                return (
                  <button
                    key={id}
                    className="chat-chip"
                    onClick={() => handleChipClick(id)}
                    type="button"
                  >
                    {node.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <form
          className="chat-input-bar"
          onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}
        >
          <input
            ref={inputRef}
            className="chat-input"
            type="text"
            placeholder="Ask something about Jenny..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isTyping}
          />
          <button
            className="chat-send"
            type="submit"
            disabled={isTyping || !inputValue.trim()}
            aria-label="Send message"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M14 2L7 9M14 2l-5 12-2-5-5-2 12-5z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
      </div>

      <button
        className="chat-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat with Jenny's portfolio"
        type="button"
      >
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M5 5l12 12M17 5L5 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M4 4h14a2 2 0 012 2v8a2 2 0 01-2 2H8l-4 3V6a2 2 0 012-2z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
