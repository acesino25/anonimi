import { fetchChatCompletion, fetchImageGeneration } from './api'
import { parseStream } from './parser'
import type { Message } from '@/types/message'
import type { HandlerPayload, Provider } from '@/types/provider'

export const handlePrompt: Provider['handlePrompt'] = async(payload, signal?: AbortSignal) => {
  if (payload.botId === 'chat_continuous')
    return handleChatCompletion(payload, signal)
  if (payload.botId === 'chat_single')
    return handleChatCompletion(payload, signal)
  if (payload.botId === 'image_generation')
    return handleImageGeneration(payload)
}

export const handleRapidPrompt: Provider['handleRapidPrompt'] = async(prompt, globalSettings) => {
  const rapidPromptPayload = {
    conversationId: 'temp',
    conversationType: 'chat_single',
    botId: 'temp',
    globalSettings: {
      ...globalSettings,
      model: globalSettings.model || 'gpt-3.5-turbo',
      temperature: globalSettings.temperature ?? 0.7,
      maxTokens: globalSettings.maxTokens ?? 2048,
      top_p: globalSettings.top_p ?? 1,
      stream: false,
    },
    botSettings: {},
    prompt,
    messages: [{ role: 'user', content: prompt }],
  } as HandlerPayload
  const result = await handleChatCompletion(rapidPromptPayload)
  if (typeof result === 'string')
    return result
  return ''
}

const handleChatCompletion = async(payload: HandlerPayload, signal?: AbortSignal) => {
  // Prepara los mensajes (aquí podrías agregar lógica para cortar historial si quieres)
  const messages = payload.messages

  // Construir body con los nombres que espera la API OpenAI (con guion bajo)
  const body = {
    model: 'gpt-3.5-turbo',
    messages,
    temperature: payload.globalSettings.temperature ?? 0.7,
    max_tokens: payload.globalSettings.maxTokens ?? 100,
    top_p: payload.globalSettings.topP ?? 1,
    stream: payload.globalSettings.stream ?? false,
  }

  console.log('Payload enviado al backend:', JSON.stringify(body, null, 2))

  const response = await fetchChatCompletion({
    model: 'gpt-3.5-turbo',
    messages,
    temperature: 0.7,
    max_tokens: 2048,
    top_p: 1,
    stream: false,
    signal: undefined,
  })

  if (!response.ok) {
    const errorData = await response.json()
    console.error('Error en respuesta:', errorData)
    throw new Error(errorData.error?.message || response.statusText || 'Error desconocido')
  }

  const isStream = response.headers.get('content-type')?.includes('text/event-stream')
  if (isStream) {
    return parseStream(response)
  } else {
    const resJson = await response.json()
    return resJson.choices[0].message.content
  }
}

const handleImageGeneration = async(payload: HandlerPayload) => {
  const response = await fetchImageGeneration({
    body: {
      prompt: payload.prompt,
      n: 1,
      size: '512x512',
      response_format: 'url',
    },
  })

  if (!response.ok) {
    const responseJson = await response.json()
    const errMessage = responseJson.error?.message || response.statusText || 'Unknown error'
    throw new Error(errMessage)
  }

  const resJson = await response.json()
  return resJson.data[0].url
}
