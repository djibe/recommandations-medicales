// By jeremiak : https://web.archive.org/web/20251224061537/https://www.jeremiak.com/blog/block-bots-netlify-edge-functions/
// inspired (and taken) from ethan marcotte's blog post: https://ethanmarcotte.com/wrote/blockin-bots/
// Watch: Observer
const botUas = [
  '.fr crawler',
  'ABEvalBot',
  'AchylBot',
  'AgentTimes',
  'aiohttp',
  'aiohttp/3',
  'AionBot',
  'airmed-sentinelle',
  'AIWebIndex',
  'Amzn-SearchBot',
  'apache',
  'archive.org_bot',
  'ArchiveBot',
  'ArenaUnfurlBot',
  'ArticleScraperBot',
  'AwarioSmartBot',
  'AzureAI-SearchBot',
  'axios',
  'Bun',
  'Clinicia-Medical-Assistant',
  'CopyousBot',
  'curl',
  'DefaultLangchainUserAgent',
  'Diffbot',
  'Diffbot-User',
  'docling-core',
  'ElgooResearch',
  'ExaSearchBot',
  'Go-http-client',
  'Google-NotebookLM',
  'got',
  'Grok',
  'GrokApp',
  'GuzzleHttp',
  'HaloBot',
  'HanaleiBot',
  'HeadlessChrome',
  'HttpAsyncClient',
  'HTTrack 3.0x',
  'HubSeedsBot',
  'iaudit',
  'iAskBot',
  'kChatBot',
  'KeenableBot',
  'LamarkBot',
  'Lightpanda',
  'LimbesBot',
  'LinkupBot',
  'MachineWitnessBot',
  'Manus-User',
  'MJ12bot',
  'node',
  'Offibox',
  'okhttp',
  'OrdoPadBot',
  'PeekixBot',
  'PetalBot',
  'PickaxeBot',
  'psprospect',
  'python',
  'Python-httpx',
  'python-requests',
  'QlyzeBot',
  'quillbot',
  'Reflectionbot',
  'Ruby',
  'server',
  'ShapBot',
  'SleepBot',
  'SofyaBot',
  'SOS-Nancy-IntraSOS',
  'SupaBrainBot',
  'Timpibot',
  'trafilatura',
  'webapp-mapper',
  'WellKnownBot',
  'What10Bot',
  'YaK',
  'YandexBot',
  'YouBot'
]

export default async (request, context) => {
  const ua = request.headers.get('user-agent') || '';
  const url = new URL(request.url);

  // Always allow robots.txt
  if (url.pathname === '/robots.txt') {
    return context.next();
  }

  const forbiddenBots = ['ChatGPT', 'ChatGPT-User', 'Claude-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-Web', 'DoubaoBot', 'ERNIEBot', 'Google-NotebookLM', 'GPTBot', 'KimiBot', 'Kimi-SearchBot', 'MistralAI-Index', 'OAI-AdsBot', 'OAI-SearchBot', 'QwenBot'];
  const isForbiddenBot = forbiddenBots.some(u =>
    ua.toLowerCase().includes(u.toLowerCase())
  );

  if (isForbiddenBot) {
    return new Response(null, { status: 403 });
  }

  const isBot = botUas.some(u =>
    ua.toLowerCase().includes(u.toLowerCase())
  );

  if (isBot) {
    return new Response(null, { status: 404 });
  }

  return context.next();
};