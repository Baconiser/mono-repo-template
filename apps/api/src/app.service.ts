import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHealth(): { message: string; timestamp: string } {
    return {
      message: 'API is running successfully!',
      timestamp: new Date().toISOString(),
    }
  }
} 