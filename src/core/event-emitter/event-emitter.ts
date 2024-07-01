export type EventHandler = (data: any) => void

export class EventEmitter {
  private eventListeners: Record<string, EventHandler[]> = {}

  subscribe(eventName: string, handler: EventHandler): void {
    if (!this.eventListeners[eventName]) {
      this.eventListeners[eventName] = []
    }
    this.eventListeners[eventName].push(handler)
  }

  unsubscribe(eventName: string, handler: EventHandler): void {
    if (!this.eventListeners[eventName]) {
      return
    }
    this.eventListeners[eventName] = this.eventListeners[eventName].filter(h => h !== handler)
  }

  dispatch(eventName: string, data: any): void {
    const handlers = this.eventListeners[eventName]
    if (!handlers) {
      return
    }
    handlers.forEach(handler => handler(data))
  }
}
