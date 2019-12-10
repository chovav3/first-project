import { IsEmail, IsEnum, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, Max, Min, ValidateNested } from 'class-validator'
import { writeImage } from 'src/helpers/write-image.helper'
import { DeepPartial } from 'typeorm'
import { Company } from '../company/company.model'
import { Person } from '../person/person.model'
import { ISession } from '../session/session.model'
import { ELanguage, EUserType, User } from './user.model'

class CreateUserPersonDto implements DeepPartial<Person>{
  @IsString()
  @IsOptional()
  lastName?: Person['lastName']
}

export class CreateUserDto implements DeepPartial<User> {
  company?: User['company']
  @IsNotEmpty()
  @IsString()
  named: User['named']
  @ValidateNested()
  @IsOptional()
  person?: CreateUserPersonDto
  @IsString()
  desc?: User['desc']
  @IsInt()
  @IsPositive()
  callingCode: User['callingCode']
  @IsNotEmpty()
  @IsString()
  currency: User['currency']
  @IsEmail()
  email: User['email']
  @IsEnum(ELanguage)
  language: User['language']
  @Min(100000000)
  @Max(999999999)
  phone: User['phone']
  @IsNotEmpty()
  @IsString()
  password: User['password']
  @IsNotEmpty()
  @IsString()
  type: User['type']
  @IsString()
  site?: User['site']
  @IsString()
  logo?: User['logo']
  @IsString()
  image?: User['image']
}

export class AuthUserDto implements DeepPartial<User> {
  @IsEmail()
  email: User['email']
  @IsNotEmpty()
  @IsString()
  password: User['password']
}

export const createUser = async ({ image, logo, ...body }: CreateUserDto, session: ISession) => {
  const imagePath = `/public/uploads/images/user-image.${+new Date}.jpg`
  const logoPath = `/public/uploads/images/user-logo.${+new Date}.jpg`
  if (image) writeImage({ image, imagePath })
  if (logo) writeImage({ image: logo, imagePath: logoPath })
  if (body.type === EUserType.person) body.person = Person.create(body.person)
  else {
    delete body.person
    body.company = Company.create({})
  }
  const result = await User.create(
    image && logo ? { ...body, image: imagePath, logo: logoPath } :
      logo ? { ...body, logo: logoPath } :
        image ? { ...body, image: imagePath } :
          { ...body }
  ).
    save()
  session.userId = result._id
  return result
}

export const authUser = async (body: AuthUserDto, session: ISession) => {
  const result = await User.findOneOrFail(body)
  session.userId = result._id
  return result

}