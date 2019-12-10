import { validateOrReject } from 'class-validator'
import { castArray, map } from 'lodash'
import { BaseEntity, CreateDateColumn, PrimaryGeneratedColumn, SaveOptions, UpdateDateColumn, VersionColumn } from 'typeorm'

export abstract class App extends BaseEntity {

  private static validateOrReject<T extends App>(entity: T) {
    return validateOrReject(entity, { validationError: { target: false } })
  }

  static save<T extends App>(entities: Array<T>, options?: SaveOptions): Promise<Array<T>>
  static save<T extends App>(entity: T, options?: SaveOptions): Promise<T>
  static async save<T extends App>(entities: Array<T> | T, options?: SaveOptions): Promise<Array<T> | T> {
    const isArray = Array.isArray(entities)
    entities = castArray(entities)
    await Promise.all(entities.map(entity => this.validateOrReject(entity)))
    const result = map(await super.save<T>(entities, options), EAppKey._id)
    if (result.length) return isArray ? this.findByIds<T>(result) : this.findOneOrFail<T>(result[0])
  }

  @PrimaryGeneratedColumn(`uuid`)
  _id: string

  @VersionColumn()
  _version: number

  @CreateDateColumn()
  _createDate: string

  @UpdateDateColumn()
  _updateDate: string

  _type = this.constructor.name

  async save(options?: SaveOptions): Promise<this> {
    await App.validateOrReject(this)
    const
      constructor = <typeof App>this.constructor,
      { _id } = await super.save(options)
    return constructor.findOneOrFail<this>(_id)
  }

}

export enum EAppKey {
  _id = '_id',
  _createDate = '_createDate',
  _updateDate = '_updateDate',
  _version = '_version',
  _type = '_type',
}