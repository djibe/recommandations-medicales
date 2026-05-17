// By jeremiak : https://web.archive.org/web/20251224061537/https://www.jeremiak.com/blog/block-bots-netlify-edge-functions/
// inspired (and taken) from ethan marcotte's blog post: https://ethanmarcotte.com/wrote/blockin-bots/
// Watch: Observer
const botUas = [
  '.fr crawler',
  'aiohttp',
  'AIWebIndex',
  'Amzn-SearchBot',
  'apache',
  'ArenaUnfurlBot',
  'AwarioSmartBot',
  'AzureAI-SearchBot',
  'axios',
  'Claude-SearchBot',
  'Claude-User',
  'Claude-Web',
  'ClaudeBot',
  'Clinicia-Medical-Assistant',
  'curl',
  'docling-core',
  'Go-http-client',
  'Google-NotebookLM',
  'got',
  'GuzzleHttp',
  'HeadlessChrome',
  'HttpAsyncClient',
  'HTTrack 3.0x',
  'HubSeedsBot',
  'iaudit',
  'iAskBot',
  'kChatBot',
  'LamarkBot',
  'LinkupBot',
  'Manus-User',
  'MistralAI-Index',
  'MJ12bot',
  'node',
  'okhttp',
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
  'YaK',
  'YouBot'
]

export default async (request, context) => {
  const ua = request.headers.get('user-agent') || '';
  const url = new URL(request.url);

  // Always allow robots.txt
  if (url.pathname === '/robots.txt') {
    return context.next();
  }

  const forbiddenBots = ['ChatGPT', 'ChatGPT-User', 'Claude-User', 'ClaudeBot', 'Google-NotebookLM', 'OAI-SearchBot'];
  const isForbiddenBot = forbiddenBots.some(u =>
    ua.toLowerCase().includes(u)
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