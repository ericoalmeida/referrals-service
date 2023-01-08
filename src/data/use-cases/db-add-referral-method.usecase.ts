import { CodeCreatorProtocol } from '@data/protocols/code-creator.protocol'
import { DeeplinkCreatorProtocol } from '@data/protocols/deeplink-creator.protocol'
import { AddReferralMethodRepository } from '@data/protocols/repositories/add-referral-method.repository'
import { AddReferralMethodParams } from '@domain/params/add-referral-method.params'
import { AddReferralMethodUseCase } from '@domain/use-cases/add-referral-method.usecase'

class DbAddReferralMethodUseCase implements AddReferralMethodUseCase {
  constructor (
    private readonly referralCode: CodeCreatorProtocol,
    private readonly referralLink: DeeplinkCreatorProtocol,
    private readonly repository: AddReferralMethodRepository
  ) {}

  async add (params: AddReferralMethodParams): Promise<void> {
    const { user_id } = params

    let { code, link } = params

    if (!code) {
      code = this.referralCode.create()
      link = this.referralLink.create(code)
    }

    if (!link) {
      link = this.referralLink.create(code)
    }

    await this.repository.add({ user_id, code, link })
  }
}

export { DbAddReferralMethodUseCase }
