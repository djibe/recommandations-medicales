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
  'ChatGPT',
  'ChatGPT-User',
  'Claude-User',
  'ClaudeBot',
  'curl',
  'Go-http-client',
  'Google-NotebookLM',
  'GuzzleHttp',
  'HeadlessChrome',
  'HttpAsyncClient',
  'iAskBot',
  'kChatBot',
  'LamarkBot',
  'Manus-User',
  'MJ12bot',
  'OAI-SearchBot',
  'okhttp',
  'PetalBot',
  'python',
  'Python-httpx',
  'python-requests',
  'quillbot',
  'YouBot'
]

export default async (request, context) => {
  const ua = request.headers.get('user-agent');

  let isBot = false

  botUas.forEach(u => {
    if (ua.toLowerCase().includes(u.toLowerCase())) {
      isBot = true
    }
  })

  const response = isBot ? new Response(null, { status: 404 }) : await context.next();
  return response
};
