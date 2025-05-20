export interface OpenAIFetchPayload {
  apiKey: string
  baseUrl: string
  body: Record<string, any>
  signal?: AbortSignal
}

export const fetchChatCompletion = async(payload: OpenAIFetchPayload) => {
  const initOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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',
    },
    method: 'POST',
    body: JSON.stringify(payload.body),
    signal: payload.signal,
  }
  return fetch(`${payload.baseUrl}/v1/chat/completions`, initOptions)
}

export const fetchImageGeneration = async(payload: OpenAIFetchPayload) => {
  const initOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${payload.apiKey}`,
    },
    method: 'POST',
    body: JSON.stringify(payload.body),
    signal: payload.signal,
  }
  return fetch(`${payload.baseUrl}/v1/images/generations`, initOptions)
}
