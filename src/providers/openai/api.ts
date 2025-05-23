export interface OpenAIFetchPayload {
  model: string
  messages: any[]
  temperature?: number
  max_tokens?: number
  top_p?: number
  stream?: boolean
  signal?: AbortSignal
}

export const fetchChatCompletion = async(payload: OpenAIFetchPayload) => {
  const { signal, ...bodyPayload } = payload

  const response = await fetch('https://anonimi-backend-678065225372.southamerica-west1.run.app/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyPayload),
    signal,
  })

  // Manejamos el error, pero devolvemos el Response sin hacer .json()
  if (!response.ok) {
    const contentType = response.headers.get('content-type')
    let errorData
    if (contentType && contentType.includes('application/json'))
      errorData = await response.json()
    else
      errorData = await response.text()

    throw new Error(errorData?.error || response.statusText || 'Unknown error')
  }

  return response // 👈 Se retorna el objeto Response sin parsear
}

export const fetchImageGeneration = async(payload: OpenAIFetchPayload) => {
  const { signal, ...bodyPayload } = payload

  return fetch('https://anonimi-backend-678065225372.southamerica-west1.run.app/image', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyPayload),
    signal,
  })
}
