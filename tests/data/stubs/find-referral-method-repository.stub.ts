import { faker } from '@faker-js/faker'

import { FindReferralMethodRepository } from '@data/protocols/repositories/find-referral-method.repository'
import { ReferralMethodModel } from '@domain/models/referral-method.model'

class FindReferralMethodRepositoryStub implements FindReferralMethodRepository {
  public async findByUserId (_user_id: string): Promise<ReferralMethodModel | null> {
    return Promise.resolve({
      code: faker.datatype.string(8),
      link: faker.internet.url()
    })
  }
}

export { FindReferralMethodRepositoryStub }
