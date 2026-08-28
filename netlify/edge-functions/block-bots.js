// By jeremiak : https://web.archive.org/web/20251224061537/https://www.jeremiak.com/blog/block-bots-netlify-edge-functions/
// inspired (and taken) from ethan marcotte's blog post: https://ethanmarcotte.com/wrote/blockin-bots/
// Watch: Observer
const botUas = [
  '.fr crawler',
  'AchylBot',
  'AgentTimes',
  'aiohttp',
  'aiohttp/3',
  'AIWebIndex',
  'Amzn-SearchBot',
  'apache',
  'ArchiveBot',
  'ArenaUnfurlBot',
  'AwarioSmartBot',
  'AzureAI-SearchBot',
  'axios',
  'Claude-SearchBot',
  'Claude-User',
  'Claude-User/',
  'Claude-Web',
  'ClaudeBot',
  'Clinicia-Medical-Assistant',
  'CopyousBot',
  'curl',
  'docling-core',
  'ExaSearchBot',
  'Go-http-client',
  'Google-NotebookLM',
  'got',
  'Grok',
  'GrokApp',
  'GuzzleHttp',
  'HeadlessChrome',
  'HttpAsyncClient',
  'HTTrack 3.0x',
  'HubSeedsBot',
  'iaudit',
  'iAskBot',
  'kChatBot',
  'LamarkBot',
  'Lightpanda',
  'LinkupBot',
  'MachineWitnessBot',
  'Manus-User',
  'MistralAI-Index',
  'MJ12bot',
  'node',
  'okhttp',
  'OrdoPadBot',
  'PetalBot',
  'PickaxeBot',
  'python',
  'Python-httpx',
  'python-requests',
  'quillbot',
  'Ruby',
  'server',
  'ShapBot',
  'SleepBot',
  'SofyaBot',
  'Timpibot',
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

  const forbiddenBots = ['ChatGPT', 'ChatGPT-User', 'Claude-User', 'ClaudeBot', 'Google-NotebookLM', 'GPTBot', 'OAI-SearchBot'];
  const isForbiddenBot = forbiddenBots.some(u =>
    ua.toLowerCase().includes(u.toLowerCase())
  );

  if (isForbiddenBot) {
    return new Response('403 Forbidden: AI bots are not permitted.', {
      status: 403,
      headers: { 'content-type': 'text/plain' }
    });
  }

  const isBot = botUas.some(u =>
    ua.toLowerCase().includes(u.toLowerCase())
  );

  if (isBot) {
    return new Response(null, { status: 404 });
  }

  return context.next();
};