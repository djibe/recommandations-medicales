// By jeremiak : https://web.archive.org/web/20251224061537/https://www.jeremiak.com/blog/block-bots-netlify-edge-functions/
// inspired (and taken) from ethan marcotte's blog post: https://ethanmarcotte.com/wrote/blockin-bots/
// Watch: Observer
const botUas = [
  'aiohttp',
  'Amzn-SearchBot',
  'apache',
  'AwarioSmartBot',
  'AzureAI-SearchBot',
  'axios',
  'Clinicia-Medical-Assistant',
  'curl',
  'Go-http-client',
  'got',
  'GuzzleHttp',
  'HeadlessChrome',
  'HttpAsyncClient',
  'iAskBot',
  'kChatBot',
  'LamarkBot',
  'Manus-User',
  'MJ12bot',
  'okhttp',
  'PetalBot',
  'python',
  'Python-httpx',
  'python-requests',
  'quillbot',
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