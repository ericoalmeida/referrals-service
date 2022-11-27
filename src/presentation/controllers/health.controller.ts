import {
  ControllerProtocol,
  HealthRequestProtocol,
  HealthResponseProtocol,
  HttpResponseProtocol
} from '@presentation/protocols'

export class HealthController
implements ControllerProtocol<HealthRequestProtocol, HealthResponseProtocol> {
  async handle (
    request: HealthRequestProtocol
  ): Promise<HttpResponseProtocol<HealthResponseProtocol>> {
    return {
      statusCode: 204
    }
  }
}
