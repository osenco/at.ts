export type ATConfig = {
  username: string,
  apiKey: string,
  from: string|number|null
}

export type ATSmsPayload = {
  to: string|string[],
  from: string|number|null,
  message: string
}

export type USSDResponse = {
  status: string,
  details: string,
  sessionId: string,
  serviceCode: string,
  phoneNumber: string,
  text: string
}

export type USSDOptions = {
  step?: number,
  network?: string,
  phone?: string,
  sessionId?: string,
  serviceCode?: string,
  text?: string,
  type?: string,
}
