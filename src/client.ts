export class ATClient {
  private config: {
    username: '',
    apiKey: '',
    from: ''
  }
  private message: string;
  private phones: array;
  
  constructor(config) {
    this.config = config
  }
  
  public sms(message) {
  this.message = message
    return this;
  }
  
  public to(to: string | string[]) {
    this.phones = to
    
    return this;
  }
  
  public async send () {
    const {data} = await fetch({
      url: '', body: {
        to: this.phones,
        from: this.config.from,
        message: this.message
      }
    })
    
    return data
  }
}
